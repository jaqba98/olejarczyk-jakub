import {
  $ as p,
  $b as G,
  Dd as Fe,
  Dh as X,
  Fc as F,
  Fd as v,
  Ga as pe,
  Gb as ye,
  Gc as Ee,
  Ib as V,
  Jb as Ce,
  Kb as _,
  Nb as H,
  Oc as we,
  Pc as Z,
  Uc as S,
  Wa as h,
  Xd as Se,
  Ya as j,
  Yd as N,
  Za as me,
  Zd as k,
  _d as K,
  a as O,
  ae as Ae,
  ba as m,
  be as ve,
  ga as f,
  ia as P,
  na as E,
  ni as _e,
  s as De,
  sd as B,
  td as W,
  ti as be,
  ud as Y,
  va as a,
  wb as z,
  xa as w,
  xi as Ie,
  yi as Me,
} from './chunk-Y65SC6KJ.js';
var Le = null;
function g() {
  return Le;
}
function J(n) {
  Le ??= n;
}
var b = class {},
  Q = (() => {
    class n {
      historyGo(e) {
        throw new Error('');
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => w(Oe), providedIn: 'platform' });
    }
    return n;
  })();
var Oe = (() => {
  class n extends Q {
    _location;
    _history;
    _doc = w(h);
    constructor() {
      (super(), (this._location = window.location), (this._history = window.history));
    }
    getBaseHrefFromDOM() {
      return g().getBaseHref(this._doc);
    }
    onPopState(e) {
      let t = g().getGlobalEventTarget(this._doc, 'window');
      return (t.addEventListener('popstate', e, !1), () => t.removeEventListener('popstate', e));
    }
    onHashChange(e) {
      let t = g().getGlobalEventTarget(this._doc, 'window');
      return (
        t.addEventListener('hashchange', e, !1),
        () => t.removeEventListener('hashchange', e)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(e) {
      this._location.pathname = e;
    }
    pushState(e, t, i) {
      this._history.pushState(e, t, i);
    }
    replaceState(e, t, i) {
      this._history.replaceState(e, t, i);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(e = 0) {
      this._history.go(e);
    }
    getState() {
      return this._history.state;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = f({ token: n, factory: () => new n(), providedIn: 'platform' });
  }
  return n;
})();
function Pe(n, r) {
  return n
    ? r
      ? n.endsWith('/')
        ? r.startsWith('/')
          ? n + r.slice(1)
          : n + r
        : r.startsWith('/')
          ? n + r
          : `${n}/${r}`
      : n
    : r;
}
function Re(n) {
  let r = n.search(/#|\?|$/);
  return n[r - 1] === '/' ? n.slice(0, r - 1) + n.slice(r) : n;
}
function y(n) {
  return n && n[0] !== '?' ? `?${n}` : n;
}
var x = (() => {
    class n {
      historyGo(e) {
        throw new Error('');
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => w(Ne), providedIn: 'root' });
    }
    return n;
  })(),
  Be = new E(''),
  Ne = (() => {
    class n extends x {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(e, t) {
        (super(),
          (this._platformLocation = e),
          (this._baseHref =
            t ?? this._platformLocation.getBaseHrefFromDOM() ?? w(h).location?.origin ?? ''));
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
      }
      onPopState(e) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(e),
          this._platformLocation.onHashChange(e),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(e) {
        return Pe(this._baseHref, e);
      }
      path(e = !1) {
        let t = this._platformLocation.pathname + y(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && e ? `${t}${i}` : t;
      }
      pushState(e, t, i, o) {
        let s = this.prepareExternalUrl(i + y(o));
        this._platformLocation.pushState(e, t, s);
      }
      replaceState(e, t, i, o) {
        let s = this.prepareExternalUrl(i + y(o));
        this._platformLocation.replaceState(e, t, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(e = 0) {
        this._platformLocation.historyGo?.(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(a(Q), a(Be, 8));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  ke = (() => {
    class n {
      _subject = new De();
      _basePath;
      _locationStrategy;
      _urlChangeListeners = [];
      _urlChangeSubscription = null;
      constructor(e) {
        this._locationStrategy = e;
        let t = this._locationStrategy.getBaseHref();
        ((this._basePath = Ke(Re(Te(t)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.next({ url: this.path(!0), pop: !0, state: i.state, type: i.type });
          }));
      }
      ngOnDestroy() {
        (this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []));
      }
      path(e = !1) {
        return this.normalize(this._locationStrategy.path(e));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(e, t = '') {
        return this.path() == this.normalize(e + y(t));
      }
      normalize(e) {
        return n.stripTrailingSlash(Ye(this._basePath, Te(e)));
      }
      prepareExternalUrl(e) {
        return (e && e[0] !== '/' && (e = '/' + e), this._locationStrategy.prepareExternalUrl(e));
      }
      go(e, t = '', i = null) {
        (this._locationStrategy.pushState(i, '', e, t),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(e + y(t)), i));
      }
      replaceState(e, t = '', i = null) {
        (this._locationStrategy.replaceState(i, '', e, t),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(e + y(t)), i));
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(e = 0) {
        this._locationStrategy.historyGo?.(e);
      }
      onUrlChange(e) {
        return (
          this._urlChangeListeners.push(e),
          (this._urlChangeSubscription ??= this.subscribe((t) => {
            this._notifyUrlChangeListeners(t.url, t.state);
          })),
          () => {
            let t = this._urlChangeListeners.indexOf(e);
            (this._urlChangeListeners.splice(t, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(), (this._urlChangeSubscription = null)));
          }
        );
      }
      _notifyUrlChangeListeners(e = '', t) {
        this._urlChangeListeners.forEach((i) => i(e, t));
      }
      subscribe(e, t, i) {
        return this._subject.subscribe({ next: e, error: t ?? void 0, complete: i ?? void 0 });
      }
      static normalizeQueryParams = y;
      static joinWithSlash = Pe;
      static stripTrailingSlash = Re;
      static ɵfac = function (t) {
        return new (t || n)(a(x));
      };
      static ɵprov = f({ token: n, factory: () => We(), providedIn: 'root' });
    }
    return n;
  })();
function We() {
  return new ke(a(x));
}
function Ye(n, r) {
  if (!n || !r.startsWith(n)) return r;
  let e = r.substring(n.length);
  return e === '' || ['/', ';', '?', '#'].includes(e[0]) ? e : r;
}
function Te(n) {
  return n.replace(/\/index.html$/, '');
}
function Ke(n) {
  if (new RegExp('^(https?:)?//').test(n)) {
    let [, e] = n.split(/\/\/[^\/]+/);
    return e;
  }
  return n;
}
var ee = /\s+/,
  xe = [],
  Xe = (() => {
    class n {
      _ngEl;
      _renderer;
      initialClasses = xe;
      rawClass;
      stateMap = new Map();
      constructor(e, t) {
        ((this._ngEl = e), (this._renderer = t));
      }
      set klass(e) {
        this.initialClasses = e != null ? e.trim().split(ee) : xe;
      }
      set ngClass(e) {
        this.rawClass = typeof e == 'string' ? e.trim().split(ee) : e;
      }
      ngDoCheck() {
        for (let t of this.initialClasses) this._updateState(t, !0);
        let e = this.rawClass;
        if (Array.isArray(e) || e instanceof Set) for (let t of e) this._updateState(t, !0);
        else if (e != null) for (let t of Object.keys(e)) this._updateState(t, !!e[t]);
        this._applyStateDiff();
      }
      _updateState(e, t) {
        let i = this.stateMap.get(e);
        i !== void 0
          ? (i.enabled !== t && ((i.changed = !0), (i.enabled = t)), (i.touched = !0))
          : this.stateMap.set(e, { enabled: t, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let e of this.stateMap) {
          let t = e[0],
            i = e[1];
          (i.changed
            ? (this._toggleClass(t, i.enabled), (i.changed = !1))
            : i.touched || (i.enabled && this._toggleClass(t, !1), this.stateMap.delete(t)),
            (i.touched = !1));
        }
      }
      _toggleClass(e, t) {
        ((e = e.trim()),
          e.length > 0 &&
            e.split(ee).forEach((i) => {
              t
                ? this._renderer.addClass(this._ngEl.nativeElement, i)
                : this._renderer.removeClass(this._ngEl.nativeElement, i);
            }));
      }
      static ɵfac = function (t) {
        return new (t || n)(S(z), S(Z));
      };
      static ɵdir = W({
        type: n,
        selectors: [['', 'ngClass', '']],
        inputs: { klass: [0, 'class', 'klass'], ngClass: 'ngClass' },
      });
    }
    return n;
  })();
var qe = (() => {
  class n {
    _ngEl;
    _differs;
    _renderer;
    _ngStyle = null;
    _differ = null;
    constructor(e, t, i) {
      ((this._ngEl = e), (this._differs = t), (this._renderer = i));
    }
    set ngStyle(e) {
      ((this._ngStyle = e), !this._differ && e && (this._differ = this._differs.find(e).create()));
    }
    ngDoCheck() {
      if (this._differ) {
        let e = this._differ.diff(this._ngStyle);
        e && this._applyChanges(e);
      }
    }
    _setStyle(e, t) {
      let [i, o] = e.split('.'),
        s = i.indexOf('-') === -1 ? void 0 : F.DashCase;
      t != null
        ? this._renderer.setStyle(this._ngEl.nativeElement, i, o ? `${t}${o}` : t, s)
        : this._renderer.removeStyle(this._ngEl.nativeElement, i, s);
    }
    _applyChanges(e) {
      (e.forEachRemovedItem((t) => this._setStyle(t.key, null)),
        e.forEachAddedItem((t) => this._setStyle(t.key, t.currentValue)),
        e.forEachChangedItem((t) => this._setStyle(t.key, t.currentValue)));
    }
    static ɵfac = function (t) {
      return new (t || n)(S(z), S(be), S(Z));
    };
    static ɵdir = W({ type: n, selectors: [['', 'ngStyle', '']], inputs: { ngStyle: 'ngStyle' } });
  }
  return n;
})();
function Je(n, r) {
  return new p(2100, !1);
}
var te = class {
    createSubscription(r, e, t) {
      return X(() => r.subscribe({ next: e, error: t }));
    }
    dispose(r) {
      X(() => r.unsubscribe());
    }
  },
  ne = class {
    createSubscription(r, e, t) {
      return (
        r.then(
          (i) => e?.(i),
          (i) => t?.(i),
        ),
        {
          unsubscribe: () => {
            ((e = null), (t = null));
          },
        }
      );
    }
    dispose(r) {
      r.unsubscribe();
    }
  },
  Qe = new ne(),
  et = new te(),
  tt = (() => {
    class n {
      _ref;
      _latestValue = null;
      markForCheckOnValueUpdate = !0;
      _subscription = null;
      _obj = null;
      _strategy = null;
      applicationErrorHandler = w(me);
      constructor(e) {
        this._ref = e;
      }
      ngOnDestroy() {
        (this._subscription && this._dispose(), (this._ref = null));
      }
      transform(e) {
        if (!this._obj) {
          if (e)
            try {
              ((this.markForCheckOnValueUpdate = !1), this._subscribe(e));
            } finally {
              this.markForCheckOnValueUpdate = !0;
            }
          return this._latestValue;
        }
        return e !== this._obj ? (this._dispose(), this.transform(e)) : this._latestValue;
      }
      _subscribe(e) {
        ((this._obj = e),
          (this._strategy = this._selectStrategy(e)),
          (this._subscription = this._strategy.createSubscription(
            e,
            (t) => this._updateLatestValue(e, t),
            (t) => this.applicationErrorHandler(t),
          )));
      }
      _selectStrategy(e) {
        if (Ae(e)) return Qe;
        if (ve(e)) return et;
        throw Je(n, e);
      }
      _dispose() {
        (this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null));
      }
      _updateLatestValue(e, t) {
        e === this._obj &&
          ((this._latestValue = t), this.markForCheckOnValueUpdate && this._ref?.markForCheck());
      }
      static ɵfac = function (t) {
        return new (t || n)(S(_e, 16));
      };
      static ɵpipe = Y({ name: 'async', type: n, pure: !1 });
    }
    return n;
  })();
var nt = (() => {
  class n {
    transform(e) {
      return JSON.stringify(e, null, 2);
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵpipe = Y({ name: 'json', type: n, pure: !1 });
  }
  return n;
})();
var re = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = B({ type: n });
    static ɵinj = P({});
  }
  return n;
})();
function ie(n, r) {
  r = encodeURIComponent(r);
  for (let e of n.split(';')) {
    let t = e.indexOf('='),
      [i, o] = t == -1 ? [e, ''] : [e.slice(0, t), e.slice(t + 1)];
    if (i.trim() === r) return decodeURIComponent(o);
  }
  return null;
}
var I = class {};
var $e = 'browser';
var U = new E(''),
  ce = (() => {
    class n {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, t) {
        ((this._zone = t),
          e.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = e.slice().reverse()));
      }
      addEventListener(e, t, i, o) {
        return this._findPluginFor(t).addEventListener(e, t, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let t = this._eventNameToPlugin.get(e);
        if (t) return t;
        if (((t = this._plugins.find((o) => o.supports(e))), !t)) throw new p(5101, !1);
        return (this._eventNameToPlugin.set(e, t), t);
      }
      static ɵfac = function (t) {
        return new (t || n)(a(U), a(v));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  M = class {
    _doc;
    constructor(r) {
      this._doc = r;
    }
    manager;
  },
  oe = 'ng-app-id';
function Ue(n) {
  for (let r of n) r.remove();
}
function je(n, r) {
  let e = r.createElement('style');
  return ((e.textContent = n), e);
}
function ot(n, r, e, t) {
  let i = n.head?.querySelectorAll(`style[${oe}="${r}"],link[${oe}="${r}"]`);
  if (i)
    for (let o of i)
      (o.removeAttribute(oe),
        o instanceof HTMLLinkElement
          ? t.set(o.href.slice(o.href.lastIndexOf('/') + 1), { usage: 0, elements: [o] })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] }));
}
function ae(n, r) {
  let e = r.createElement('link');
  return (e.setAttribute('rel', 'stylesheet'), e.setAttribute('href', n), e);
}
var le = (() => {
    class n {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      constructor(e, t, i, o = {}) {
        ((this.doc = e),
          (this.appId = t),
          (this.nonce = i),
          ot(e, t, this.inline, this.external),
          this.hosts.add(e.head));
      }
      addStyles(e, t) {
        for (let i of e) this.addUsage(i, this.inline, je);
        t?.forEach((i) => this.addUsage(i, this.external, ae));
      }
      removeStyles(e, t) {
        for (let i of e) this.removeUsage(i, this.inline);
        t?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, t, i) {
        let o = t.get(e);
        o
          ? o.usage++
          : t.set(e, {
              usage: 1,
              elements: [...this.hosts].map((s) => this.addElement(s, i(e, this.doc))),
            });
      }
      removeUsage(e, t) {
        let i = t.get(e);
        i && (i.usage--, i.usage <= 0 && (Ue(i.elements), t.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external]) Ue(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [t, { elements: i }] of this.inline) i.push(this.addElement(e, je(t, this.doc)));
        for (let [t, { elements: i }] of this.external) i.push(this.addElement(e, ae(t, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, t) {
        return (this.nonce && t.setAttribute('nonce', this.nonce), e.appendChild(t));
      }
      static ɵfac = function (t) {
        return new (t || n)(a(h), a(V), a(H, 8), a(_));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  se = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  de = /%COMP%/g;
var Ve = '%COMP%',
  st = `_nghost-${Ve}`,
  at = `_ngcontent-${Ve}`,
  ut = !0,
  ct = new E('', { providedIn: 'root', factory: () => ut });
function lt(n) {
  return at.replace(de, n);
}
function dt(n) {
  return st.replace(de, n);
}
function He(n, r) {
  return r.map((e) => e.replace(de, n));
}
var fe = (() => {
    class n {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, t, i, o, s, u, l, d = null, c = null) {
        ((this.eventManager = e),
          (this.sharedStylesHost = t),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = u),
          (this.ngZone = l),
          (this.nonce = d),
          (this.tracingService = c),
          (this.platformIsServer = !1),
          (this.defaultRenderer = new R(e, s, l, this.platformIsServer, this.tracingService)));
      }
      createRenderer(e, t) {
        if (!e || !t) return this.defaultRenderer;
        let i = this.getOrCreateRenderer(e, t);
        return (i instanceof $ ? i.applyToHost(e) : i instanceof T && i.applyStyles(), i);
      }
      getOrCreateRenderer(e, t) {
        let i = this.rendererByCompId,
          o = i.get(t.id);
        if (!o) {
          let s = this.doc,
            u = this.ngZone,
            l = this.eventManager,
            d = this.sharedStylesHost,
            c = this.removeStylesOnCompDestroy,
            C = this.platformIsServer,
            D = this.tracingService;
          switch (t.encapsulation) {
            case G.Emulated:
              o = new $(l, d, t, this.appId, c, s, u, C, D);
              break;
            case G.ShadowDom:
              return new ue(l, d, e, t, s, u, this.nonce, C, D);
            default:
              o = new T(l, d, t, c, s, u, C, D);
              break;
          }
          i.set(t.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(a(ce), a(le), a(V), a(ct), a(h), a(_), a(v), a(H), a(Fe, 8));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  R = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, i, o) {
      ((this.eventManager = r),
        (this.doc = e),
        (this.ngZone = t),
        (this.platformIsServer = i),
        (this.tracingService = o));
    }
    destroy() {}
    destroyNode = null;
    createElement(r, e) {
      return e ? this.doc.createElementNS(se[e] || e, r) : this.doc.createElement(r);
    }
    createComment(r) {
      return this.doc.createComment(r);
    }
    createText(r) {
      return this.doc.createTextNode(r);
    }
    appendChild(r, e) {
      (ze(r) ? r.content : r).appendChild(e);
    }
    insertBefore(r, e, t) {
      r && (ze(r) ? r.content : r).insertBefore(e, t);
    }
    removeChild(r, e) {
      e.remove();
    }
    selectRootElement(r, e) {
      let t = typeof r == 'string' ? this.doc.querySelector(r) : r;
      if (!t) throw new p(-5104, !1);
      return (e || (t.textContent = ''), t);
    }
    parentNode(r) {
      return r.parentNode;
    }
    nextSibling(r) {
      return r.nextSibling;
    }
    setAttribute(r, e, t, i) {
      if (i) {
        e = i + ':' + e;
        let o = se[i];
        o ? r.setAttributeNS(o, e, t) : r.setAttribute(e, t);
      } else r.setAttribute(e, t);
    }
    removeAttribute(r, e, t) {
      if (t) {
        let i = se[t];
        i ? r.removeAttributeNS(i, e) : r.removeAttribute(`${t}:${e}`);
      } else r.removeAttribute(e);
    }
    addClass(r, e) {
      r.classList.add(e);
    }
    removeClass(r, e) {
      r.classList.remove(e);
    }
    setStyle(r, e, t, i) {
      i & (F.DashCase | F.Important)
        ? r.style.setProperty(e, t, i & F.Important ? 'important' : '')
        : (r.style[e] = t);
    }
    removeStyle(r, e, t) {
      t & F.DashCase ? r.style.removeProperty(e) : (r.style[e] = '');
    }
    setProperty(r, e, t) {
      r != null && (r[e] = t);
    }
    setValue(r, e) {
      r.nodeValue = e;
    }
    listen(r, e, t, i) {
      if (typeof r == 'string' && ((r = g().getGlobalEventTarget(this.doc, r)), !r))
        throw new p(5102, !1);
      let o = this.decoratePreventDefault(t);
      return (
        this.tracingService?.wrapEventListener &&
          (o = this.tracingService.wrapEventListener(r, e, o)),
        this.eventManager.addEventListener(r, e, o, i)
      );
    }
    decoratePreventDefault(r) {
      return (e) => {
        if (e === '__ngUnwrap__') return r;
        r(e) === !1 && e.preventDefault();
      };
    }
  };
function ze(n) {
  return n.tagName === 'TEMPLATE' && n.content !== void 0;
}
var ue = class extends R {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(r, e, t, i, o, s, u, l, d) {
      (super(r, o, s, l, d),
        (this.sharedStylesHost = e),
        (this.hostEl = t),
        (this.shadowRoot = t.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot));
      let c = i.styles;
      c = He(i.id, c);
      for (let D of c) {
        let A = document.createElement('style');
        (u && A.setAttribute('nonce', u), (A.textContent = D), this.shadowRoot.appendChild(A));
      }
      let C = i.getExternalStyles?.();
      if (C)
        for (let D of C) {
          let A = ae(D, o);
          (u && A.setAttribute('nonce', u), this.shadowRoot.appendChild(A));
        }
    }
    nodeOrShadowRoot(r) {
      return r === this.hostEl ? this.shadowRoot : r;
    }
    appendChild(r, e) {
      return super.appendChild(this.nodeOrShadowRoot(r), e);
    }
    insertBefore(r, e, t) {
      return super.insertBefore(this.nodeOrShadowRoot(r), e, t);
    }
    removeChild(r, e) {
      return super.removeChild(null, e);
    }
    parentNode(r) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  T = class extends R {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, i, o, s, u, l, d) {
      (super(r, o, s, u, l), (this.sharedStylesHost = e), (this.removeStylesOnCompDestroy = i));
      let c = t.styles;
      ((this.styles = d ? He(d, c) : c), (this.styleUrls = t.getExternalStyles?.(d)));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        Ee.size === 0 &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  $ = class extends T {
    contentAttr;
    hostAttr;
    constructor(r, e, t, i, o, s, u, l, d) {
      let c = i + '-' + t.id;
      (super(r, e, t, o, s, u, l, d, c), (this.contentAttr = lt(c)), (this.hostAttr = dt(c)));
    }
    applyToHost(r) {
      (this.applyStyles(), this.setAttribute(r, this.hostAttr, ''));
    }
    createElement(r, e) {
      let t = super.createElement(r, e);
      return (super.setAttribute(t, this.contentAttr, ''), t);
    }
  };
var he = class n extends b {
    supportsDOMEvents = !0;
    static makeCurrent() {
      J(new n());
    }
    onAndCancel(r, e, t, i) {
      return (
        r.addEventListener(e, t, i),
        () => {
          r.removeEventListener(e, t, i);
        }
      );
    }
    dispatchEvent(r, e) {
      r.dispatchEvent(e);
    }
    remove(r) {
      r.remove();
    }
    createElement(r, e) {
      return ((e = e || this.getDefaultDocument()), e.createElement(r));
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(r) {
      return r.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(r) {
      return r instanceof DocumentFragment;
    }
    getGlobalEventTarget(r, e) {
      return e === 'window' ? window : e === 'document' ? r : e === 'body' ? r.body : null;
    }
    getBaseHref(r) {
      let e = ft();
      return e == null ? null : ht(e);
    }
    resetBaseElement() {
      L = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(r) {
      return ie(document.cookie, r);
    }
  },
  L = null;
function ft() {
  return ((L = L || document.head.querySelector('base')), L ? L.getAttribute('href') : null);
}
function ht(n) {
  return new URL(n, document.baseURI).pathname;
}
var ge = class {
    addToWindow(r) {
      ((m.getAngularTestability = (t, i = !0) => {
        let o = r.findTestabilityInTree(t, i);
        if (o == null) throw new p(5103, !1);
        return o;
      }),
        (m.getAllAngularTestabilities = () => r.getAllTestabilities()),
        (m.getAllAngularRootElements = () => r.getAllRootElements()));
      let e = (t) => {
        let i = m.getAllAngularTestabilities(),
          o = i.length,
          s = function () {
            (o--, o == 0 && t());
          };
        i.forEach((u) => {
          u.whenStable(s);
        });
      };
      (m.frameworkStabilizers || (m.frameworkStabilizers = []), m.frameworkStabilizers.push(e));
    }
    findTestabilityInTree(r, e, t) {
      if (e == null) return null;
      let i = r.getTestability(e);
      return (
        i ??
        (t
          ? g().isShadowRoot(e)
            ? this.findTestabilityInTree(r, e.host, !0)
            : this.findTestabilityInTree(r, e.parentElement, !0)
          : null)
      );
    }
  },
  gt = (() => {
    class n {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Dt = (() => {
    class n extends M {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, t, i, o) {
        return (e.addEventListener(t, i, o), () => this.removeEventListener(e, t, i, o));
      }
      removeEventListener(e, t, i, o) {
        return e.removeEventListener(t, i, o);
      }
      static ɵfac = function (t) {
        return new (t || n)(a(h));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Ge = ['alt', 'control', 'meta', 'shift'],
  pt = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  mt = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  yt = (() => {
    class n extends M {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return n.parseEventName(e) != null;
      }
      addEventListener(e, t, i, o) {
        let s = n.parseEventName(t),
          u = n.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => g().onAndCancel(e, s.domEventName, u, o));
      }
      static parseEventName(e) {
        let t = e.toLowerCase().split('.'),
          i = t.shift();
        if (t.length === 0 || !(i === 'keydown' || i === 'keyup')) return null;
        let o = n._normalizeKey(t.pop()),
          s = '',
          u = t.indexOf('code');
        if (
          (u > -1 && (t.splice(u, 1), (s = 'code.')),
          Ge.forEach((d) => {
            let c = t.indexOf(d);
            c > -1 && (t.splice(c, 1), (s += d + '.'));
          }),
          (s += o),
          t.length != 0 || o.length === 0)
        )
          return null;
        let l = {};
        return ((l.domEventName = i), (l.fullKey = s), l);
      }
      static matchEventFullKeyCode(e, t) {
        let i = pt[e.key] || e.key,
          o = '';
        return (
          t.indexOf('code.') > -1 && ((i = e.code), (o = 'code.')),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === ' ' ? (i = 'space') : i === '.' && (i = 'dot'),
              Ge.forEach((s) => {
                if (s !== i) {
                  let u = mt[s];
                  u(e) && (o += s + '.');
                }
              }),
              (o += i),
              o === t)
        );
      }
      static eventCallback(e, t, i) {
        return (o) => {
          n.matchEventFullKeyCode(o, e) && i.runGuarded(() => t(o));
        };
      }
      static _normalizeKey(e) {
        return e === 'esc' ? 'escape' : e;
      }
      static ɵfac = function (t) {
        return new (t || n)(a(h));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
function Br(n, r, e) {
  let t = O({ rootComponent: n, platformRef: e?.platformRef }, Ct(r));
  return Me(t);
}
function Ct(n) {
  return { appProviders: [...Ze, ...(n?.providers ?? [])], platformProviders: St };
}
function Et() {
  he.makeCurrent();
}
function wt() {
  return new j();
}
function Ft() {
  return (ye(document), document);
}
var St = [
  { provide: _, useValue: $e },
  { provide: Ce, useValue: Et, multi: !0 },
  { provide: h, useFactory: Ft },
];
var At = [
    { provide: N, useClass: ge },
    { provide: Se, useClass: k, deps: [v, K, N] },
    { provide: k, useClass: k, deps: [v, K, N] },
  ],
  Ze = [
    { provide: pe, useValue: 'root' },
    { provide: j, useFactory: wt },
    { provide: U, useClass: Dt, multi: !0, deps: [h] },
    { provide: U, useClass: yt, multi: !0, deps: [h] },
    fe,
    le,
    ce,
    { provide: we, useExisting: fe },
    { provide: I, useClass: gt },
    [],
  ],
  Nr = (() => {
    class n {
      constructor() {}
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = B({ type: n });
      static ɵinj = P({ providers: [...Ze, ...At], imports: [re, Ie] });
    }
    return n;
  })();
export { ke as a, Xe as b, qe as c, tt as d, nt as e, re as f, fe as g, Br as h, Nr as i };
