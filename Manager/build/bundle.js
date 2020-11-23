
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail);
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
            }
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }
    function validate_each_keys(ctx, list, get_context, get_key) {
        const keys = new Set();
        for (let i = 0; i < list.length; i++) {
            const key = get_key(get_context(ctx, list, i));
            if (keys.has(key)) {
                throw new Error('Cannot have duplicate keys in a keyed each');
            }
            keys.add(key);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.4' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (let i = 0; i < subscribers.length; i += 1) {
                        const s = subscribers[i];
                        s[1]();
                        subscriber_queue.push(s, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }
    function derived(stores, fn, initial_value) {
        const single = !Array.isArray(stores);
        const stores_array = single
            ? [stores]
            : stores;
        const auto = fn.length < 2;
        return readable(initial_value, (set) => {
            let inited = false;
            const values = [];
            let pending = 0;
            let cleanup = noop;
            const sync = () => {
                if (pending) {
                    return;
                }
                cleanup();
                const result = fn(single ? values[0] : values, set);
                if (auto) {
                    set(result);
                }
                else {
                    cleanup = is_function(result) ? result : noop;
                }
            };
            const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
                values[i] = value;
                pending &= ~(1 << i);
                if (inited) {
                    sync();
                }
            }, () => {
                pending |= (1 << i);
            }));
            inited = true;
            sync();
            return function stop() {
                run_all(unsubscribers);
                cleanup();
            };
        });
    }

    const CommonFunctions = () => {
        const generateId = () => Math.random().toString(36).substr(2, 9);
        const isDuplicate = (iterable, label) => {
            const iterableArray = Array.isArray(iterable)
                ? iterable
                : Object.values(iterable);
            return iterableArray.some(item => item.label === label);
        };
        // TODO: add optional argument object that contains additioal argument for function of specific index
        const pipe = (...funcs) => initialValue => funcs.reduce((result, func) => func(result), initialValue);
        return { generateId, isDuplicate, pipe };
    };
    var CommonFunctions$1 = CommonFunctions();

    const Helpers = () => {
        const _createNewGroup = (label, id = CommonFunctions$1.generateId()) => ({
            id,
            label,
        });
        const addGroup = (groups, label, id = CommonFunctions$1.generateId()) => CommonFunctions$1.isDuplicate(groups, label)
            ? groups
            : [...groups, _createNewGroup(label, id)];
        const deleteGroup = (groups, id) => groups.filter(group => group.id !== id);
        return { _createNewGroup, addGroup, deleteGroup };
    };
    var Helpers$1 = Helpers();

    const VENUES = {
        id: `Venues-${CommonFunctions$1.generateId()}`,
        label: 'Venues',
        items: ['LZ', 'JZ', 'MZ'],
    };
    const PLAYS = {
        id: `Plays-${CommonFunctions$1.generateId()}`,
        label: 'Plays',
        items: [
            'AKA',
            'AK, TETĪT...',
            'ALISE BRĪNUMZEMĒ',
            'ANTIGONE',
            'APSOLU',
            'APSPĒLĒTS',
            'ARĪ VAĻIEM IR BAIL',
            'ART',
            'ASINS KĀZAS',
            'BILLE',
            'CĪRULĪŠI',
            'DŪJA',
            'DZIĻĀ, SKUMJĀ JŪRA',
            'DZĪVNIEKS',
            'EZERIŅŠ',
            'FINLANDIZĀCIJA',
            'SUDRABA SLIDAS',
            'INDRĀNI',
            'ĪSTAIS TEĀTRIS VIRTUVES KONCERTS',
            'JAUNĀ ĀRSTA PIEZĪMES',
            'JUVELIERA JUBILEJA',
            'KAIJA',
            'KATLS',
            'LATVIEŠI',
            'LEPNUMS UN AIZSPRIEDUMI',
            'MAN 30 GADU',
            'MAZAIS GANIŅŠ',
            'MEŽAINIS',
            'MĪLA ZEM GOBĀM',
            'MOLLIJA SAKA JĀ!',
            'OLIVERS',
            'PAR TĒVIEM',
            'PĒDĒJAIS SALMIŅŠ',
            'PIEAUGUŠIE',
            'PRECĒŠANĀS UN ŠĶIRŠANĀS ANATOMIJA',
            'PUIKA, KURŠ REDZĒJA TUMSĀ',
            'PUTENĪ',
            'PŪT, VĒJIŅI!',
            'REVIDENTS',
            'SALOME',
            'SAPNIS VASARAS NAKTĪ',
            'SAVĀDAIS ATGADĪJUMS AR SUNI NAKTĪ',
            'SKRODERDIENAS SILMAČOS',
            'SLAKTIŅA DIEVS',
            'SVINA GARŠA',
            'TAS PASAULES GALS',
            'TIK MĪLA VIENS',
            'TIKŠANĀS VIETA',
            'TRĪS VĪRI KŪRORTĀ',
            'TUKŠAIS ZIEDS',
            'TUVĀ PILSĒTA',
            'VECENE',
            'ZEM DIVIEM KAROGIEM',
            'ZILĀ',
            'ŽILBINOŠI!',
        ],
    };
    const ACTORS = {
        id: `Actors-${CommonFunctions$1.generateId()}`,
        label: 'Actors',
        items: [
            'AINĀRS ANČEVSKIS',
            'KASPARS ANIŅŠ',
            'ULDIS ANŽE',
            'JĀNIS ĀMANIS',
            'ROMĀNS BARGAIS',
            'MARIJA BĒRZIŅA',
            'DACE BONĀTE',
            'MAARA BORE',
            'MADARA BOTMANE',
            'MĀRTIŅŠ BRŪVERIS',
            'INDRA BURKOVSKA',
            'RAIMONDS CELMS',
            'ILVA CENTERE',
            'AGNESE CĪRULE',
            'MAIJA DOVEIKA',
            'ULDIS DUMPIS',
            'MĀRTIŅŠ EGLIENS',
            'DAIGA GAISMIŅA',
            'GUNDARS GRASBERGS',
            'JURIS HIRŠS',
            'ĢIRTS JAKOVĻEVS',
            'ZANE JANČEVSKA',
            'ASTRĪDA KAIRIŠA',
            'DAIGA KAŽOCIŅA',
            'ANNA KLĒVERE',
            'IVARS KĻAVINSKIS',
            'EVIJA KRŪZE',
            'ARTŪRS KRŪZKOPS',
            'LĀSMA KUGRĒNA',
            'NORMUNDS LAIZĀNS',
            'JURIS LISNERS',
            'DITA LŪRIŅA',
            'MĀRCIS MAŅJAKOVS',
            'EGILS MELBĀRDIS',
            'INGA MISĀNE GRASBERGA',
            'SANITA PAULA',
            'KĀRLIS REIJERS',
            'JĒKABS REINIS',
            'LIENE SEBRE',
            'LAURA SILIŅA',
            'ULDIS SILIŅŠ',
            'JĀNIS SKANIS',
            'JURĪS SPULENIEKS',
            'IGORS ŠELEGOVSKIS',
            'VOLDEMĀRS ŠORIŅŠ',
            'LĪGA ZEĻĢE',
            'KASPARS ZVĪGULIS',
        ],
    };
    const groups = [VENUES, PLAYS, ACTORS].map(({ id, label }) => ({
        id,
        label,
    }));
    const itemMap = [VENUES, PLAYS, ACTORS].reduce((itemMap, group) => {
        return Object.assign(Object.assign({}, itemMap), group.items.reduce((items, label) => (Object.assign(Object.assign({}, items), { [`${group.label}-${CommonFunctions$1.generateId()}`]: {
                groupId: group.id,
                label,
                childIds: [],
                isSelected: false,
            } })), {}));
    }, {});

    const { subscribe: subscribe$1, update: update$1 } = writable(groups);
    // const { subscribe, update } = writable([] as GroupModel[]);
    // ACTIONS
    const addGroup = (label) => update$1(groups => Helpers$1.addGroup(groups, label));
    // TODO: delete group - how to notify items map, all child items should be deleted, remining relations wiped?
    // perhaps need to create no group section
    const deleteGroup = (id) => update$1(groups => Helpers$1.deleteGroup(groups, id));
    // EXPORTS
    const GroupsStore = { subscribe: subscribe$1, addGroup, deleteGroup };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    const Helpers$2 = () => {
        const _getDecendants = (itemMap, id) => {
            const childIds = [...itemMap[id].childIds];
            return childIds.reduce((children, currentChildId) => [
                ...children,
                ..._getDecendants(itemMap, currentChildId),
            ], childIds);
        };
        const _getAncestors = (itemMap, id) => {
            return Object.entries(itemMap).reduce((parents, [itemId, data]) => data.childIds.includes(id)
                ? [...parents, itemId, ..._getAncestors(itemMap, itemId)]
                : parents, []);
        };
        const _createItem = (groupId, label, id = CommonFunctions$1.generateId()) => ({
            [id]: {
                groupId,
                label,
                childIds: [],
                isSelected: false,
            },
        });
        const getRelationsMap = (itemMap) => Object.keys(itemMap).reduce((relations, id) => {
            const children = _getDecendants(itemMap, id);
            const parents = _getAncestors(itemMap, id);
            return Object.assign(Object.assign({}, relations), { [id]: { parents, children } });
        }, {});
        const getSelectedItemId = (itemMap) => Object.keys(itemMap).find(id => itemMap[id].isSelected) || null;
        const toggleItem = (itemMap, id) => (Object.assign(Object.assign({}, itemMap), { [id]: Object.assign(Object.assign({}, itemMap[id]), { isSelected: !itemMap[id].isSelected }) }));
        const addItem = (itemMap, groupId, label, id = CommonFunctions$1.generateId()) => CommonFunctions$1.isDuplicate(itemMap, label)
            ? itemMap
            : Object.assign(Object.assign({}, itemMap), _createItem(groupId, label, id));
        // TODO: unreadable, perhaps removing child ids in sperate function
        const deleteItem = (itemMap, id) => {
            return Object.entries(itemMap).reduce((map, [itemId, data]) => itemId === id
                ? map
                : Object.assign(Object.assign({}, map), { [itemId]: Object.assign(Object.assign({}, data), { childIds: data.childIds.filter(childId => childId !== id) }) }), {});
        };
        const removeGrouplessItems = (itemMap, groupIds) => Object.entries(itemMap).reduce((newItemMap, [id, data]) => {
            const isChildOfExistingGroup = groupIds.includes(data.groupId);
            if (!isChildOfExistingGroup) {
                const _a = newItemMap, _b = id, grouplessItem = _a[_b], otherItems = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return otherItems;
            }
            return newItemMap;
        }, itemMap);
        // TODO: unreadable
        const toggleChild = (itemMap, parentId, id) => (Object.assign(Object.assign({}, itemMap), { [parentId]: Object.assign(Object.assign({}, itemMap[parentId]), { childIds: itemMap[parentId].childIds.includes(id)
                    ? itemMap[parentId].childIds.filter(childId => childId !== id)
                    : [...itemMap[parentId].childIds, id] }) }));
        return {
            _createItem,
            _getAncestors,
            _getDecendants,
            getRelationsMap,
            getSelectedItemId,
            toggleItem,
            deleteItem,
            removeGrouplessItems,
            toggleChild,
            addItem,
        };
    };
    var Helpers$3 = Helpers$2();

    const { subscribe: subscribe$2, update: update$2 } = writable(itemMap);
    // const { subscribe, update } = writable({} as ItemMapModel);
    // DERIVED
    const RelationsDerived = derived({ subscribe: subscribe$2 }, (itemMap) => Helpers$3.getRelationsMap(itemMap));
    const SelectedItemIdDerived = derived({ subscribe: subscribe$2 }, (itemMap) => Helpers$3.getSelectedItemId(itemMap));
    // UPDATE
    const toggleItem = (id) => update$2(itemMap => Helpers$3.toggleItem(itemMap, id));
    const addItem = (groupId, label) => update$2(itemMap => Helpers$3.addItem(itemMap, groupId, label));
    const deleteItemFromGroup = (id) => update$2(itemMap => Helpers$3.deleteItem(itemMap, id));
    const removeGrouplessItems = (groupIds) => update$2(itemMap => Helpers$3.removeGrouplessItems(itemMap, groupIds));
    const toggleChild = (parentId, childId) => update$2(itemMap => Helpers$3.toggleChild(itemMap, parentId, childId));
    // TODO: consider placing updates in actions for readability
    // const actions = {
    //   toggleItem: toggleItem,
    //   deleteItemFromGroup: deleteItemFromGroup,
    //   removeGrouplessItems: removeGrouplessItems,
    // };
    // EXPORTS
    const ItemsMapStore = {
        subscribe: subscribe$2,
        toggleItem,
        addItem,
        deleteItemFromGroup,
        removeGrouplessItems,
        toggleChild,
    };

    const Helpers$4 = () => {
        const _sortItemsAlphabetically = (itemMapEntries) => itemMapEntries.sort((a, b) => a[1].label.localeCompare(b[1].label));
        const _getGroupItemIds = (itemMapEntries, groupId) => itemMapEntries.reduce((items, [itemId, data]) => data.groupId === groupId ? [...items, itemId] : items, []);
        const sortItemsByGroup = (groups, itemMap) => groups.map(group => {
            const items = CommonFunctions$1.pipe(Object.entries, _sortItemsAlphabetically, sortedItems => _getGroupItemIds(sortedItems, group.id))(itemMap);
            return Object.assign(Object.assign({}, group), { items });
        });
        return { _sortItemsAlphabetically, _getGroupItemIds, sortItemsByGroup };
    };
    var Helpers$5 = Helpers$4();

    const createStore = () => {
        const ItemsByGroup = derived([GroupsStore, ItemsMapStore], ([groups, itemMap]) => Helpers$5.sortItemsByGroup(groups, itemMap));
        // TODO: possible memory leak since unsubscribe not used
        GroupsStore.subscribe(groups => ItemsMapStore.removeGrouplessItems(groups.map(({ id }) => id)));
        return {
            Groups: GroupsStore,
            ItemMap: ItemsMapStore,
            Relations: RelationsDerived,
            SelectedItemId: SelectedItemIdDerived,
            ItemsByGroup,
        };
    };
    const { Groups, ItemMap, Relations, ItemsByGroup, SelectedItemId, } = createStore();

    /* src/components/ItemRow.svelte generated by Svelte v3.29.4 */

    const { Object: Object_1 } = globals;
    const file = "src/components/ItemRow.svelte";

    // (29:0) {#if itemData}
    function create_if_block(ctx) {
    	let div;
    	let button;
    	let t0_value = /*itemData*/ ctx[1].label + "";
    	let t0;
    	let t1;
    	let mounted;
    	let dispose;
    	let if_block = /*currentItemIsSelected*/ ctx[2] && create_if_block_1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			button = element("button");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block) if_block.c();
    			attr_dev(button, "class", "label svelte-1xyoyad");
    			toggle_class(button, "label--selected", /*currentItemIsSelected*/ ctx[2]);
    			toggle_class(button, "label--child", /*currentItemIsDecendantOfSelected*/ ctx[3]);
    			toggle_class(button, "label--parent", /*currentItemIsParentOfSelected*/ ctx[4]);
    			add_location(button, file, 30, 4, 1251);
    			attr_dev(div, "class", "ItemRow svelte-1xyoyad");
    			add_location(div, file, 29, 2, 1225);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, button);
    			append_dev(button, t0);
    			append_dev(div, t1);
    			if (if_block) if_block.m(div, null);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*onLabelClick*/ ctx[5], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*itemData*/ 2 && t0_value !== (t0_value = /*itemData*/ ctx[1].label + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*currentItemIsSelected*/ 4) {
    				toggle_class(button, "label--selected", /*currentItemIsSelected*/ ctx[2]);
    			}

    			if (dirty & /*currentItemIsDecendantOfSelected*/ 8) {
    				toggle_class(button, "label--child", /*currentItemIsDecendantOfSelected*/ ctx[3]);
    			}

    			if (dirty & /*currentItemIsParentOfSelected*/ 16) {
    				toggle_class(button, "label--parent", /*currentItemIsParentOfSelected*/ ctx[4]);
    			}

    			if (/*currentItemIsSelected*/ ctx[2]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1(ctx);
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(29:0) {#if itemData}",
    		ctx
    	});

    	return block;
    }

    // (41:4) {#if currentItemIsSelected}
    function create_if_block_1(ctx) {
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			button.textContent = "X";
    			attr_dev(button, "class", "delete svelte-1xyoyad");
    			add_location(button, file, 41, 6, 1561);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[7], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(41:4) {#if currentItemIsSelected}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let if_block_anchor;
    	let if_block = /*itemData*/ ctx[1] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*itemData*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let $ItemMap;
    	let $SelectedItemId;
    	let $Relations;
    	let $Groups;
    	validate_store(ItemMap, "ItemMap");
    	component_subscribe($$self, ItemMap, $$value => $$invalidate(10, $ItemMap = $$value));
    	validate_store(SelectedItemId, "SelectedItemId");
    	component_subscribe($$self, SelectedItemId, $$value => $$invalidate(12, $SelectedItemId = $$value));
    	validate_store(Relations, "Relations");
    	component_subscribe($$self, Relations, $$value => $$invalidate(13, $Relations = $$value));
    	validate_store(Groups, "Groups");
    	component_subscribe($$self, Groups, $$value => $$invalidate(14, $Groups = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ItemRow", slots, []);
    	var _a, _b;
    	let { groupId } = $$props;
    	let { itemId } = $$props;

    	const onLabelClick = () => {
    		// TODO: move to helpers and add tests
    		if (!anItemIsSelected || currentItemIsSelected) {
    			ItemMap.toggleItem(itemId);
    			return;
    		}

    		// TODO: create this as derived store
    		const groupHierarchyMap = $Groups.reduce((hierarchies, group, index) => Object.assign(Object.assign({}, hierarchies), { [group.id]: index }), {});

    		const currentItemIsValidChild = groupHierarchyMap[$ItemMap[$SelectedItemId].groupId] + 1 === groupHierarchyMap[groupId];

    		if (!currentItemIsValidChild) {
    			return;
    		}

    		ItemMap.toggleChild($SelectedItemId, itemId);
    	};

    	const writable_props = ["groupId", "itemId"];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ItemRow> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => ItemMap.deleteItemFromGroup(itemId);

    	$$self.$$set = $$props => {
    		if ("groupId" in $$props) $$invalidate(6, groupId = $$props.groupId);
    		if ("itemId" in $$props) $$invalidate(0, itemId = $$props.itemId);
    	};

    	$$self.$capture_state = () => ({
    		_a,
    		_b,
    		SelectedItemId,
    		ItemMap,
    		Relations,
    		Groups,
    		groupId,
    		itemId,
    		onLabelClick,
    		itemData,
    		$ItemMap,
    		anItemIsSelected,
    		$SelectedItemId,
    		currentItemIsSelected,
    		currentItemIsDecendantOfSelected,
    		$Relations,
    		currentItemIsParentOfSelected,
    		$Groups
    	});

    	$$self.$inject_state = $$props => {
    		if ("_a" in $$props) $$invalidate(8, _a = $$props._a);
    		if ("_b" in $$props) $$invalidate(9, _b = $$props._b);
    		if ("groupId" in $$props) $$invalidate(6, groupId = $$props.groupId);
    		if ("itemId" in $$props) $$invalidate(0, itemId = $$props.itemId);
    		if ("itemData" in $$props) $$invalidate(1, itemData = $$props.itemData);
    		if ("anItemIsSelected" in $$props) anItemIsSelected = $$props.anItemIsSelected;
    		if ("currentItemIsSelected" in $$props) $$invalidate(2, currentItemIsSelected = $$props.currentItemIsSelected);
    		if ("currentItemIsDecendantOfSelected" in $$props) $$invalidate(3, currentItemIsDecendantOfSelected = $$props.currentItemIsDecendantOfSelected);
    		if ("currentItemIsParentOfSelected" in $$props) $$invalidate(4, currentItemIsParentOfSelected = $$props.currentItemIsParentOfSelected);
    	};

    	let itemData;
    	let anItemIsSelected;
    	let currentItemIsSelected;
    	let currentItemIsDecendantOfSelected;
    	let currentItemIsParentOfSelected;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*$ItemMap, itemId*/ 1025) {
    			 $$invalidate(1, itemData = $ItemMap[itemId]);
    		}

    		if ($$self.$$.dirty & /*$SelectedItemId*/ 4096) {
    			 anItemIsSelected = !!$SelectedItemId;
    		}

    		if ($$self.$$.dirty & /*$SelectedItemId, itemId*/ 4097) {
    			 $$invalidate(2, currentItemIsSelected = $SelectedItemId === itemId);
    		}

    		if ($$self.$$.dirty & /*$Relations, $SelectedItemId, _a, itemId*/ 12545) {
    			 $$invalidate(3, currentItemIsDecendantOfSelected = ($$invalidate(8, _a = $Relations[$SelectedItemId]) === null || _a === void 0
    			? void 0
    			: _a.children.includes(itemId)) || false);
    		}

    		if ($$self.$$.dirty & /*$Relations, $SelectedItemId, _b, itemId*/ 12801) {
    			 $$invalidate(4, currentItemIsParentOfSelected = ($$invalidate(9, _b = $Relations[$SelectedItemId]) === null || _b === void 0
    			? void 0
    			: _b.parents.includes(itemId)) || false);
    		}
    	};

    	return [
    		itemId,
    		itemData,
    		currentItemIsSelected,
    		currentItemIsDecendantOfSelected,
    		currentItemIsParentOfSelected,
    		onLabelClick,
    		groupId,
    		click_handler
    	];
    }

    class ItemRow extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { groupId: 6, itemId: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ItemRow",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*groupId*/ ctx[6] === undefined && !("groupId" in props)) {
    			console.warn("<ItemRow> was created without expected prop 'groupId'");
    		}

    		if (/*itemId*/ ctx[0] === undefined && !("itemId" in props)) {
    			console.warn("<ItemRow> was created without expected prop 'itemId'");
    		}
    	}

    	get groupId() {
    		throw new Error("<ItemRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set groupId(value) {
    		throw new Error("<ItemRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get itemId() {
    		throw new Error("<ItemRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set itemId(value) {
    		throw new Error("<ItemRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const Logger = () => {
        const _currentTime = () => {
            const now = new Date();
            const timeString = now.toTimeString().substring(0, 8);
            const ms = now.getMilliseconds();
            return `${timeString}:${ms}`;
        };
        const table = (title, state, color = 'lightgrey') => {
            const colorCode = `background-color: ${color}`;
            const resetStyle = 'background-color: white';
            console.groupCollapsed(`${_currentTime()} %c %c ${title} `, colorCode, resetStyle);
            console.table(state);
            console.groupEnd();
        };
        return { table };
    };
    var Logger$1 = Logger();

    /* src/components/Logger.svelte generated by Svelte v3.29.4 */

    const { console: console_1 } = globals;

    function create_fragment$1(ctx) {
    	const block = {
    		c: noop,
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let $ItemMap;
    	let $ItemsByGroup;
    	let $Relations;
    	let $Groups;
    	validate_store(ItemMap, "ItemMap");
    	component_subscribe($$self, ItemMap, $$value => $$invalidate(0, $ItemMap = $$value));
    	validate_store(ItemsByGroup, "ItemsByGroup");
    	component_subscribe($$self, ItemsByGroup, $$value => $$invalidate(1, $ItemsByGroup = $$value));
    	validate_store(Relations, "Relations");
    	component_subscribe($$self, Relations, $$value => $$invalidate(2, $Relations = $$value));
    	validate_store(Groups, "Groups");
    	component_subscribe($$self, Groups, $$value => $$invalidate(3, $Groups = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Logger", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Logger> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		ItemMap,
    		ItemsByGroup,
    		Relations,
    		Groups,
    		Logger: Logger$1,
    		$ItemMap,
    		$ItemsByGroup,
    		$Relations,
    		$Groups
    	});

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*$ItemMap, $ItemsByGroup, $Relations, $Groups*/ 15) {
    			 {
    				console.log("------------");
    			}
    		}

    		if ($$self.$$.dirty & /*$ItemMap*/ 1) {
    			 Logger$1.table("ItemMap", $ItemMap, "red");
    		}

    		if ($$self.$$.dirty & /*$ItemsByGroup*/ 2) {
    			 Logger$1.table("ItemsByGroup", $ItemsByGroup, "green");
    		}

    		if ($$self.$$.dirty & /*$Relations*/ 4) {
    			 Logger$1.table("Relations", $Relations, "blue");
    		}

    		if ($$self.$$.dirty & /*$Groups*/ 8) {
    			 Logger$1.table("Groups", $Groups);
    		}
    	};

    	return [];
    }

    class Logger_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Logger_1",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/components/Input.svelte generated by Svelte v3.29.4 */
    const file$1 = "src/components/Input.svelte";

    function create_fragment$2(ctx) {
    	let div;
    	let input_1;
    	let t0;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			input_1 = element("input");
    			t0 = space();
    			button = element("button");
    			button.textContent = "Add";
    			attr_dev(input_1, "class", "Input__input svelte-le7pes");
    			attr_dev(input_1, "type", "text");
    			attr_dev(input_1, "placeholder", /*placeholder*/ ctx[0]);
    			add_location(input_1, file$1, 14, 2, 320);
    			add_location(button, file$1, 15, 2, 398);
    			attr_dev(div, "class", "Input svelte-le7pes");
    			add_location(div, file$1, 13, 0, 298);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, input_1);
    			set_input_value(input_1, /*input*/ ctx[1]);
    			append_dev(div, t0);
    			append_dev(div, button);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input_1, "input", /*input_1_input_handler*/ ctx[3]),
    					listen_dev(button, "click", /*onClick*/ ctx[2], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*placeholder*/ 1) {
    				attr_dev(input_1, "placeholder", /*placeholder*/ ctx[0]);
    			}

    			if (dirty & /*input*/ 2 && input_1.value !== /*input*/ ctx[1]) {
    				set_input_value(input_1, /*input*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Input", slots, []);
    	let { placeholder = "" } = $$props;
    	const dispatch = createEventDispatcher();
    	let input = "";

    	const onClick = () => {
    		if (input === "" || input === " ") {
    			return;
    		}

    		dispatch("add", input);
    		$$invalidate(1, input = "");
    	};

    	const writable_props = ["placeholder"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Input> was created with unknown prop '${key}'`);
    	});

    	function input_1_input_handler() {
    		input = this.value;
    		$$invalidate(1, input);
    	}

    	$$self.$$set = $$props => {
    		if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		placeholder,
    		dispatch,
    		input,
    		onClick
    	});

    	$$self.$inject_state = $$props => {
    		if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
    		if ("input" in $$props) $$invalidate(1, input = $$props.input);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [placeholder, input, onClick, input_1_input_handler];
    }

    class Input extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { placeholder: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Input",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get placeholder() {
    		throw new Error("<Input>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set placeholder(value) {
    		throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.29.4 */
    const file$2 = "src/App.svelte";

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	return child_ctx;
    }

    // (17:6) {#each group.items as itemId (itemId)}
    function create_each_block_1(key_1, ctx) {
    	let first;
    	let itemrow;
    	let current;

    	itemrow = new ItemRow({
    			props: {
    				itemId: /*itemId*/ ctx[5],
    				groupId: /*group*/ ctx[2].id
    			},
    			$$inline: true
    		});

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			first = empty();
    			create_component(itemrow.$$.fragment);
    			this.first = first;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, first, anchor);
    			mount_component(itemrow, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const itemrow_changes = {};
    			if (dirty & /*$ItemsByGroup*/ 1) itemrow_changes.itemId = /*itemId*/ ctx[5];
    			if (dirty & /*$ItemsByGroup*/ 1) itemrow_changes.groupId = /*group*/ ctx[2].id;
    			itemrow.$set(itemrow_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(itemrow.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(itemrow.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(first);
    			destroy_component(itemrow, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(17:6) {#each group.items as itemId (itemId)}",
    		ctx
    	});

    	return block;
    }

    // (11:2) {#each $ItemsByGroup as group (group.id)}
    function create_each_block(key_1, ctx) {
    	let h2;
    	let t0_value = /*group*/ ctx[2].label + "";
    	let t0;
    	let t1;
    	let input;
    	let t2;
    	let div;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let t3;
    	let current;

    	function add_handler(...args) {
    		return /*add_handler*/ ctx[1](/*group*/ ctx[2], ...args);
    	}

    	input = new Input({ $$inline: true });
    	input.$on("add", add_handler);
    	let each_value_1 = /*group*/ ctx[2].items;
    	validate_each_argument(each_value_1);
    	const get_key = ctx => /*itemId*/ ctx[5];
    	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		let child_ctx = get_each_context_1(ctx, each_value_1, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
    	}

    	const block = {
    		key: key_1,
    		first: null,
    		c: function create() {
    			h2 = element("h2");
    			t0 = text(t0_value);
    			t1 = space();
    			create_component(input.$$.fragment);
    			t2 = space();
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t3 = space();
    			add_location(h2, file$2, 11, 4, 324);
    			attr_dev(div, "class", "rows svelte-duxxuk");
    			add_location(div, file$2, 15, 4, 426);
    			this.first = h2;
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    			append_dev(h2, t0);
    			insert_dev(target, t1, anchor);
    			mount_component(input, target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			append_dev(div, t3);
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    			if ((!current || dirty & /*$ItemsByGroup*/ 1) && t0_value !== (t0_value = /*group*/ ctx[2].label + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*$ItemsByGroup*/ 1) {
    				const each_value_1 = /*group*/ ctx[2].items;
    				validate_each_argument(each_value_1);
    				group_outros();
    				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, div, outro_and_destroy_block, create_each_block_1, t3, get_each_context_1);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(input.$$.fragment, local);

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(input.$$.fragment, local);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    			if (detaching) detach_dev(t1);
    			destroy_component(input, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(11:2) {#each $ItemsByGroup as group (group.id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let logger;
    	let t0;
    	let main;
    	let h1;
    	let t2;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let current;
    	logger = new Logger_1({ $$inline: true });
    	let each_value = /*$ItemsByGroup*/ ctx[0];
    	validate_each_argument(each_value);
    	const get_key = ctx => /*group*/ ctx[2].id;
    	validate_each_keys(ctx, each_value, get_each_context, get_key);

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    	}

    	const block = {
    		c: function create() {
    			create_component(logger.$$.fragment);
    			t0 = space();
    			main = element("main");
    			h1 = element("h1");
    			h1.textContent = "MANAGER";
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(h1, file$2, 8, 2, 258);
    			attr_dev(main, "class", "Main svelte-duxxuk");
    			add_location(main, file$2, 7, 0, 236);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(logger, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, h1);
    			append_dev(main, t2);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(main, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*$ItemsByGroup, ItemMap*/ 1) {
    				const each_value = /*$ItemsByGroup*/ ctx[0];
    				validate_each_argument(each_value);
    				group_outros();
    				validate_each_keys(ctx, each_value, get_each_context, get_key);
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, main, outro_and_destroy_block, create_each_block, null, get_each_context);
    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(logger.$$.fragment, local);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(logger.$$.fragment, local);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(logger, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let $ItemsByGroup;
    	validate_store(ItemsByGroup, "ItemsByGroup");
    	component_subscribe($$self, ItemsByGroup, $$value => $$invalidate(0, $ItemsByGroup = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	const add_handler = (group, { detail }) => ItemMap.addItem(group.id, detail);

    	$$self.$capture_state = () => ({
    		ItemRow,
    		Logger: Logger_1,
    		Input,
    		ItemMap,
    		ItemsByGroup,
    		$ItemsByGroup
    	});

    	return [$ItemsByGroup, add_handler];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    // if import 'svelte' is missing, line below complains about not finding module or typescript type decleration
    const app = new App({
        target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
