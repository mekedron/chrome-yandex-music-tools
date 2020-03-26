!function(t) {
  var n, i, e;
  n = {
    "&": "&#38;",
    "<": "&#60;",
    ">": "&#62;",
    '"': "&#34;",
    "'": "&#39;",
    "/": "&#47;"
  },
    i = /[&<>"'\/]/g,
    e = function(t) {
      return n[t]
    }
    ,
    function() {
      var t = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      }
        , n = /[&><\u2028\u2029]/g
        , i = function(n) {
        return t[n]
      }
    }();
  t.$a = function(t) {
    var n;
    n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
    var i = {}
      , e = function(r) {
      if (r in i)
        return i[r].$a;
      if (!t[r])
        throw new ReferenceError("module " + r + " is not found");
      var o = i[r] = {
        $a: {}
      };
      return t[r].call(n, o, o.$a, e, n),
        o.$a
    };
    return e(0)
  }([function(t, n, i, e) {
    if ("music.yandex.ru" !== location.hostname)
      throw Error("Please specify correct hostname. You specified 'music.yandex.ru' host, but actually running on '" + location.hostname + "'.");
    window.MUSIC_API = "v2.1",
      i(1),
      i(4);
    var r = i(45);
    ya.music.Audio.config.flash.path = r._$a.replace(/v2\.1\/$/, "") + "audio/dist",
      delete ya.music.Audio.config,
      delete ya.music.Audio.Logger,
      i(48),
      i(54),
      i(65),
      i(187),
      t.$a = i(49)
  }
    , function(t, n, i, e) {
      var r = i(2);
      r.prototype._$b = r.prototype.on,
        r.prototype._$c = r.prototype.off,
        r.prototype._$d = r.prototype.trigger,
        t.$a = r
    }
    , function(t, n, i, e) {
      var r = i(3)
        , o = function() {
        this._$e = {},
          this._$f = !1
      };
      o.mixin = function(t) {
        return r(t.prototype, o.prototype, !0),
          t
      }
        ,
        o.eventize = function(t) {
          return r(t, o.prototype, !0),
            o.call(t),
            t
        }
        ,
        o.prototype.on = function(t, n) {
          return this._$e[t] || (this._$e[t] = []),
            this._$e[t].push(n),
            this
        }
        ,
        o.prototype.off = function(t, n) {
          if (!this._$e[t])
            return this;
          if (!n)
            return delete this._$e[t],
              this;
          for (var i = this._$e[t], e = 0, r = i.length; e < r; e++)
            if (i[e] === n || i[e].callback === n) {
              i.splice(e, 1),
              i.length || delete this._$e[t];
              break
            }
          return this
        }
        ,
        o.prototype.once = function(t, n) {
          var i = this
            , e = function() {
            i.off(t, e),
              n.apply(this, arguments)
          };
          return e.callback = n,
            i.on(t, e),
            this
        }
        ,
        o.prototype.clearListeners = function() {
          for (var t in this._$e)
            this._$e.hasOwnProperty(t) && delete this._$e[t];
          return this
        }
        ,
        o.prototype.trigger = function(t, n) {
          if (this._$f)
            return this;
          if (n = [].slice.call(arguments, 1),
          "*" !== t && o.prototype.trigger.apply(this, ["*", t].concat(n)),
            !this._$e[t])
            return this;
          for (var i = [].concat(this._$e[t]), e = 0, r = i.length; e < r; e++)
            i[e].apply(null, n);
          return this
        }
        ,
        o.prototype.pipeEvents = function(t) {
          return this.on("*", o.prototype.trigger.bind(t)),
            this
        }
        ,
        o.prototype.muteEvents = function() {
          return this._$f = !0,
            this
        }
        ,
        o.prototype.unmuteEvents = function() {
          return delete this._$f,
            this
        }
        ,
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        var n, i, e = [].slice.call(arguments, 1);
        if (!0 === e[e.length - 1])
          n = t,
            e.pop();
        else
          for (i in n = {},
            t)
            t.hasOwnProperty(i) && (n[i] = t[i]);
        for (var r = 0, o = e.length; r < o; r++)
          for (i in e[r])
            e[r].hasOwnProperty(i) && (n[i] = e[r][i]);
        return n
      }
    }
    , function(t, n, i, e) {
      i(5);
      var r = i(6);
      i(33),
        i(34),
        i(35),
        i(36),
        i(43),
        t.$a = r
    }
    , function(t, n, i, e) {
      !function(t, n, i) {
        "use strict";
        function e(t) {
          t && (t.setTargetAtTime || (t.setTargetAtTime = t.setTargetValueAtTime))
        }
        window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext") && (window.AudioContext = webkitAudioContext,
        AudioContext.prototype.hasOwnProperty("createGain") || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode),
        AudioContext.prototype.hasOwnProperty("createDelay") || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode),
        AudioContext.prototype.hasOwnProperty("createScriptProcessor") || (AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode),
        AudioContext.prototype.hasOwnProperty("createPeriodicWave") || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable),
          AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain,
          AudioContext.prototype.createGain = function() {
            var t = this.internal_createGain();
            return e(t.gain),
              t
          }
          ,
          AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay,
          AudioContext.prototype.createDelay = function(t) {
            var n = t ? this.internal_createDelay(t) : this.internal_createDelay();
            return e(n.delayTime),
              n
          }
          ,
          AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource,
          AudioContext.prototype.createBufferSource = function() {
            var t = this.internal_createBufferSource();
            return t.start ? (t.internal_start = t.start,
                t.start = function(n, i, e) {
                  void 0 !== e ? t.internal_start(n || 0, i, e) : t.internal_start(n || 0, i)
                }
            ) : t.start = function(t, n, i) {
              n || i ? this.noteGrainOn(t || 0, n, i) : this.noteOn(t || 0)
            }
              ,
              t.stop ? (t.internal_stop = t.stop,
                  t.stop = function(n) {
                    t.internal_stop(n || 0)
                  }
              ) : t.stop = function(t) {
                this.noteOff(t || 0)
              }
              ,
              e(t.playbackRate),
              t
          }
          ,
          AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor,
          AudioContext.prototype.createDynamicsCompressor = function() {
            var t = this.internal_createDynamicsCompressor();
            return e(t.threshold),
              e(t.knee),
              e(t.ratio),
              e(t.reduction),
              e(t.attack),
              e(t.release),
              t
          }
          ,
          AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter,
          AudioContext.prototype.createBiquadFilter = function() {
            var t = this.internal_createBiquadFilter();
            return e(t.frequency),
              e(t.detune),
              e(t.Q),
              e(t.gain),
              t
          }
          ,
        AudioContext.prototype.hasOwnProperty("createOscillator") && (AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator,
            AudioContext.prototype.createOscillator = function() {
              var t = this.internal_createOscillator();
              return t.start ? (t.internal_start = t.start,
                  t.start = function(n) {
                    t.internal_start(n || 0)
                  }
              ) : t.start = function(t) {
                this.noteOn(t || 0)
              }
                ,
                t.stop ? (t.internal_stop = t.stop,
                    t.stop = function(n) {
                      t.internal_stop(n || 0)
                    }
                ) : t.stop = function(t) {
                  this.noteOff(t || 0)
                }
                ,
              t.setPeriodicWave || (t.setPeriodicWave = t.setWaveTable),
                e(t.frequency),
                e(t.detune),
                t
            }
        )),
        window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext") && (window.OfflineAudioContext = webkitOfflineAudioContext)
      }(window)
    }
    , function(t, n, i, e) {
      void 0 === window.ya && (window.ya = {});
      var r = window.ya;
      void 0 === r.music && (r.music = {}),
      void 0 === r.music.Audio && (r.music.Audio = {});
      var o = i(7)
        , s = i(8)
        , u = i(31);
      r.music.Audio = u.createClass(s),
        r.music.Audio.config = o,
        i(32),
        t.$a = r.music.Audio
    }
    , function(t, n, i, e) {
      t.$a = {
        audio: {
          retry: 3
        },
        flash: {
          path: "dist",
          name: "player-2_1.swf",
          version: "9.0.28",
          playerID: "YandexAudioFlashPlayer",
          callback: "ya.music.Audio._flashCallback",
          initTimeout: 3e3,
          loadTimeout: 5e3,
          clickTimeout: 1e3,
          heartBeatInterval: 1e3
        },
        html5: {
          blacklist: [":opera/12", "@NT 5", "@NT 4", ":msie/9"]
        }
      }
    }
    , function(t, n, i, e) {
      var r = new (i(9))("Audio")
        , o = r.info.bind(r)
        , s = r.warn.bind(r)
        , u = (r.debug.bind(r),
        i(2))
        , a = i(11)
        , c = i(14)
        , h = i(13)
        , f = i(7)
        , l = i(3)
        , d = i(15)
        , v = i(16)
        , _ = i(19)
        , p = 1
        , m = {
        html5: i(20),
        flash: i(23)
      }
        , A = "@" + h.platform.version + " " + h.platform.os + ":" + h.browser.name + "/" + h.browser.version;
      if (m.flash.priority = 0,
        m.html5.priority = f.html5.blacklist.some((function(t) {
            return A.match(t)
          }
        )) ? -1 : 2,
      h.platform.mobile || h.platform.tablet)
        y = null,
          r.info(this, "WebAudioAPI not allowed for mobile");
      else if ("safari" === h.browser.name && h.browser.version < "602.1.50")
        y = null,
          r.info(this, "WebAudioAPI temporarily not allowed for Safari prior to 602.1.50");
      else if ("mozilla" === h.browser.name)
        y = null,
          r.info(this, "WebAudioAPI temporarily not allowed for Firefox");
      else
        try {
          var y = new AudioContext;
          r.info(this, "WebAudioAPI context created")
        } catch (t) {
          y = null,
            r.info(this, "WebAudioAPI not detected")
        }
      setTimeout((function() {
          o({
            flash: {
              available: m.flash.available,
              priority: m.flash.priority
            },
            html5: {
              available: m.html5.available,
              priority: m.html5.priority,
              audioContext: !!y
            }
          }, "audioTypes")
        }
      ), 0);
      var w = function(t, n) {
        var i = this;
        i.name = p++,
          u.call(i),
          i.preferredType = t,
          i.overlay = n,
          i.state = w.STATE_INIT,
          i._$g = 0,
          i._$h = 0,
          i._$i = null,
          i._$j = !0,
          i._$k = new c,
          i.whenReady = i._$k.promise().then((function() {
              i._$j = !1,
                o(i, "implementation found", i.implementation.type),
                i.implementation.on("*", (function(t, n, e) {
                    if (i._$l(t, n, e),
                      !n)
                      switch (t) {
                        case w.EVENT_PLAY:
                          i._$m(w.STATE_PLAYING);
                          break;
                        case w.EVENT_ENDED:
                        case w.EVENT_SWAP:
                        case w.EVENT_STOP:
                        case w.EVENT_ERROR:
                          o(i, "onEnded", t, e),
                            i._$m(w.STATE_IDLE);
                          break;
                        case w.EVENT_PAUSE:
                          i._$m(w.STATE_PAUSED);
                          break;
                        case w.EVENT_CRASHED:
                          i._$m(w.STATE_CRASHED)
                      }
                  }
                )),
                i._$m(w.STATE_IDLE)
            }
          ), (function(t) {
              throw i._$j = !1,
                r.error(i, v.NO_IMPLEMENTATION, t),
                i._$m(w.STATE_CRASHED),
                t
            }
          )),
          window.addEventListener("beforeunload", i.destroy.bind(i), !0),
          i._$n(0)
      };
      w.info = {
        html5: m.html5.available,
        flash: m.flash.available
      },
        w.audioContext = y,
        w.prototype = {
          _$m: function(t) {
            if (t !== w.STATE_PAUSED || this.state === w.STATE_PLAYING) {
              var n = this.state !== t;
              this.state = t,
              n && (o(this, "newState", t),
                this.trigger(w.EVENT_STATE, t))
            }
          },
          _$n: function(t) {
            var n = this;
            if (o(n, "_init", t = t || 0),
              n._$j) {
              t > f.audio.retry && (r.error(n, v.NO_IMPLEMENTATION),
                n._$k.reject(new v(v.NO_IMPLEMENTATION)));
              var i = [m.html5, m.flash].sort((function(t, i) {
                  if (t.available !== i.available)
                    return t.available ? -1 : 1;
                  if (t.AudioImplementation.type === n.preferredType)
                    return -1;
                  if (i.AudioImplementation.type === n.preferredType)
                    return 1;
                  var e = i.priority - t.priority;
                  return e >= 1 ? 1 : e <= -1 ? -1 : 0
                }
              ))
                , e = function() {
                var r = i.shift();
                r ? n._$o(r).then(n._$k.resolve, e) : n._$n(t + 1)
              };
              e()
            }
          },
          _$o: function(t) {
            o(this, "_initType", t);
            var n = new c;
            try {
              "flash" === t.AudioImplementation.type ? this.implementation = new t.AudioImplementation(this.overlay) : this.implementation = new t.AudioImplementation(this.overlay,y),
                this.implementation.whenReady ? this.implementation.whenReady.then(n.resolve, n.reject) : n.resolve()
            } catch (i) {
              n.reject(i),
                s(this, "_initTypeError", t, i)
            }
            return n.promise()
          },
          _$p: function(t, n, i) {
            var e = new c
              , r = this;
            this[t] = e;
            var o = function() {
              n.forEach((function(t) {
                  r.off(t, e.resolve)
                }
              )),
                i.forEach((function(t) {
                    r.off(t, e.reject)
                  }
                )),
                delete r[t]
            };
            return n.forEach((function(t) {
                r.on(t, e.resolve)
              }
            )),
              i.forEach((function(t) {
                  r.on(t, (function(n) {
                      var i = n instanceof Error ? n : new v(n || t);
                      e.reject(i)
                    }
                  ))
                }
              )),
              e.promise().then(o, o),
              e.promise()
          },
          _$l: function(t, n, i) {
            w.EVENT_PROGRESS;
            var e = (n ? w.PRELOADER_EVENT : "") + t
              , o = this.trigger.bind(this);
            switch (t) {
              case w.EVENT_CRASHED:
              case w.EVENT_SWAP:
                o(t, i);
                break;
              case w.EVENT_ERROR:
                r.error(this, "error", e, i),
                  o(e, i);
                break;
              case w.EVENT_VOLUME:
                o(t, this.getVolume());
                break;
              case w.EVENT_SPEED:
                o(t, this.getSpeed());
                break;
              case w.EVENT_PROGRESS:
                o(e, {
                  duration: this.getDuration(n),
                  loaded: this.getLoaded(n),
                  position: n ? 0 : this.getPosition(),
                  played: n ? 0 : this.getPlayed()
                });
                break;
              case w.EVENT_OUTER_PLAY:
              case w.EVENT_OUTER_PAUSE:
                o(t);
                break;
              default:
                o(e)
            }
          },
          initPromise: function() {
            return this.whenReady
          },
          getState: function() {
            return this.state
          },
          getType: function() {
            return this.implementation && this.implementation.type
          },
          getSrc: function(t) {
            var n = this.implementation;
            return n && n.getSrc(t)
          },
          play: function(t, n) {
            var i = this;
            o(i, "play", r._$q(t), n),
              i._$g = 0,
              i._$h = 0,
              i._$r(),
            i._$s && i._$s.reject("play"),
            i._$t && i._$t.reject("play"),
            i._$u && i._$u.reject("play");
            var e = i._$p("_whenPlay", [w.EVENT_PLAY], [w.EVENT_STOP, w.EVENT_ERROR, w.EVENT_CRASHED]);
            return e.abort = function() {
              i._$s && (i._$s.reject.apply(i._$s, arguments),
                i.stop())
            }
              ,
              i._$m(w.STATE_PAUSED),
              i.implementation.play(t, n),
              e
          },
          restart: function() {
            return this.getDuration() ? (this._$r(),
              this.setPosition(0),
              this._$g = 0,
              this._$h = 0,
              this.resume()) : d(new v(v.BAD_STATE))
          },
          stop: function(t) {
            var n;
            return o(this, "stop", t),
              0 !== t ? this.implementation.stop(t) : (this._$g = 0,
                this._$h = 0,
              this._$s && this._$s.reject("stop"),
              this._$t && this._$t.reject("stop"),
                n = this._$u ? this._$u.promise() : this._$p("_whenStop", [w.EVENT_STOP], [w.EVENT_PLAY, w.EVENT_ERROR, w.EVENT_CRASHED]),
                this.implementation.stop(),
                n)
          },
          pause: function() {
            var t;
            return o(this, "pause"),
              this.state !== w.STATE_PLAYING ? d(new v(v.BAD_STATE)) : (this._$s && this._$s.reject("pause"),
                t = this._$t ? this._$t.promise() : this._$p("_whenPause", [w.EVENT_PAUSE], [w.EVENT_STOP, w.EVENT_PLAY, w.EVENT_ERROR, w.EVENT_CRASHED]),
                this.implementation.pause(),
                t)
          },
          resume: function() {
            var t, n = this;
            return o(n, "resume"),
              n.state !== w.STATE_PLAYING || n._$t ? n.state !== w.STATE_IDLE && n.state !== w.STATE_PAUSED && n.state !== w.STATE_PLAYING ? d(new v(v.BAD_STATE)) : (n._$t && n._$t.reject("resume"),
                n._$s ? t = n._$s.promise() : (t = n._$p("_whenPlay", [w.EVENT_PLAY], [w.EVENT_STOP, w.EVENT_ERROR, w.EVENT_CRASHED])).abort = function() {
                  n._$s && (n._$s.reject.apply(n._$s, arguments),
                    n.stop())
                }
                ,
                n.implementation.resume(),
                t) : a.resolve()
          },
          playPreloaded: function(t) {
            var n = this;
            if (o(n, "playPreloaded", r._$q(t)),
            t || (t = n.getSrc(1)),
              !n.isPreloaded(t))
              return s(n, "playPreloadedBadTrack", v.NOT_PRELOADED),
                d(new v(v.NOT_PRELOADED));
            n._$g = 0,
              n._$h = 0,
              n._$r(),
            n._$s && n._$s.reject("playPreloaded"),
            n._$t && n._$t.reject("playPreloaded"),
            n._$u && n._$u.reject("playPreloaded");
            var i = n._$p("_whenPlay", [w.EVENT_PLAY], [w.EVENT_STOP, w.EVENT_ERROR, w.EVENT_CRASHED]);
            return i.abort = function() {
              n._$s && (n._$s.reject.apply(n._$s, arguments),
                n.stop())
            }
              ,
              n._$m(w.STATE_PAUSED),
            n.implementation.playPreloaded() || (s(n, "playPreloadedError", v.NOT_PRELOADED),
              n._$s.reject(new v(v.NOT_PRELOADED))),
              i
          },
          destroy: function() {
            o(this, "destroy"),
              this._$g = 0,
              this._$h = 0,
            this._$s && this._$s.reject("destroy"),
            this._$t && this._$t.reject("destroy"),
              this.implementation.destroy()
          },
          preload: function(t, n) {
            var i = this;
            if (h.tv || "msie" === h.browser.name && "9" === h.browser.version[0])
              return d(new v(v.NOT_PRELOADED));
            o(i, "preload", r._$q(t), n),
            i._$v && i._$v.reject("preload");
            var e = i._$p("_whenPreload", [w.PRELOADER_EVENT + w.EVENT_LOADING, w.EVENT_SWAP], [w.PRELOADER_EVENT + w.EVENT_CRASHED, w.PRELOADER_EVENT + w.EVENT_ERROR, w.PRELOADER_EVENT + w.EVENT_STOP]);
            return e.abort = function() {
              i._$v && (i._$v.reject.apply(i._$v, arguments),
                i.stop(1))
            }
              ,
              i.implementation.preload(t, n),
              e
          },
          isPreloaded: function(t) {
            return this.implementation.isPreloaded(t)
          },
          isPreloading: function(t) {
            return this.implementation.isPreloading(t, 1)
          },
          getPosition: function() {
            return this.implementation.getPosition() || 0
          },
          setPosition: function(t) {
            var n = this.implementation;
            return o(this, "setPosition", t),
              t = Math.max(0, Math.min(n.getMaxSeekablePosition() - 1, t)),
              this._$g += this.getPosition() - this._$h,
              this._$h = t,
              n.setPosition(t),
              t
          },
          getDuration: function(t) {
            return this.implementation.getDuration(t ? 1 : 0) || 0
          },
          getLoaded: function(t) {
            return this.implementation.getLoaded(t ? 1 : 0) || 0
          },
          getPlayed: function() {
            var t = this.getPosition();
            return this._$g += t - this._$h,
              this._$h = t,
              this._$g
          },
          getVolume: function() {
            return this.implementation ? this.implementation.getVolume() : 0
          },
          setVolume: function(t) {
            var n = this.implementation;
            return n ? n.setVolume(t) : 0
          },
          getSpeed: function() {
            return this.implementation ? this.implementation.getSpeed() : 0
          },
          setSpeed: function(t) {
            var n = this.implementation;
            return n ? n.setSpeed(t) : 0
          },
          isDeviceVolume: function() {
            return !this.implementation || this.implementation.isDeviceVolume()
          },
          isAutoplayable: function() {
            var t = this.implementation;
            return t && t.isAutoplayable()
          },
          toggleCrossDomain: function(t) {
            var n = this.implementation;
            return "html5" !== n.type ? (s(this, "toggleCrossDomainFailed", n.type),
              !1) : (n.toggleCrossDomain(t),
              !0)
          },
          toggleWebAudioAPI: function(t) {
            var n = this.implementation;
            return o(this, "toggleWebAudioAPI", t),
              "html5" !== n.type ? (s(this, "toggleWebAudioAPIFailed", n.type),
                !1) : n.toggleWebAudioAPI(t)
          },
          setAudioPreprocessor: function(t) {
            var n = this.implementation;
            return o(this, "setAudioPreprocessor"),
              "html5" !== n.type ? (s(this, "setAudioPreprocessorFailed", n.type),
                !1) : n.setAudioPreprocessor(t)
          },
          _$r: function() {
            this._$i = Math.random().toString().slice(2)
          },
          getPlayId: function() {
            return this._$i
          },
          _$w: function() {
            var t = this.implementation;
            return {
              index: t && t.name,
              src: t && t._$w(),
              type: t && t.type
            }
          }
        },
        u.mixin(w),
        l(w, _, !0),
        t.$a = w
    }
    , function(t, n, i, e) {
      var r = i(10)
        , o = function(t) {
        this.channel = t
      };
      o.ignores = [],
        o.logLevels = [],
        o.prototype.debug = r,
        o.prototype.log = r,
        o.prototype.info = r,
        o.prototype.warn = r,
        o.prototype.error = r,
        o.prototype.trace = r,
        o.prototype._$q = function(t) {
          return o.showUrl(t)
        }
        ,
        o.showUrl = function(t) {
          return t
        }
        ,
        ["debug", "log", "info", "warn", "error", "trace"].forEach((function(t) {
            o.prototype[t] = function() {
              var n = [].slice.call(arguments);
              n.unshift(this.channel),
                n.unshift(t),
                o.log.apply(o, n)
            }
          }
        )),
        o.log = function(t, n, i) {
          var e = [].slice.call(arguments, 3).map((function(t) {
              return t && t._$w && t._$w() || t
            }
          ))
            , r = {
            timestamp: +new Date,
            level: t,
            channel: n,
            context: i,
            message: e
          };
          o.ignores[n] || -1 === o.logLevels.indexOf(t) || o._$x(r)
        }
        ,
        o._$x = function(t) {
          try {
            var n = t.level
              , i = t.context && (t.context.taskName || t.context.name)
              , e = t.context && (t.context._$w ? t.context._$w() : "");
            "function" != typeof console[n] ? console.log.apply(console, [n.toUpperCase(), o._$y(t.timestamp), "[" + t.channel + (i ? ":" + i : "") + "]", e].concat(t.message)) : console[n].apply(console, [o._$y(t.timestamp), "[" + t.channel + (i ? ":" + i : "") + "]", e].concat(t.message))
          } catch (t) {}
        }
        ,
        o._$y = function(t) {
          var n = new Date(t)
            , i = n.getMilliseconds();
          return i = i > 100 ? i : i > 10 ? "0" + i : "00" + i,
          n.toLocaleTimeString() + "." + i
        }
        ,
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = function() {}
    }
    , function(t, n, i, e) {
      var r, o = i(12), s = i(13), u = i(3);
      "function" != typeof window.Promise || "msie" === s.browser.name || "edge" === s.browser.name ? (u(r = function(t) {
          var n;
          try {
            n = new o.Promise(t)
          } catch (t) {
            n = o.reject(t)
          }
          return n
        }
        , o.Promise, !0),
        r.prototype = o.Promise.prototype) : r = window.Promise;
      var a = r.prototype.then;
      r.prototype.then = function() {
        var t = a.apply(this, arguments)
          , n = Error();
        return t.createdAt = n.stack && n.stack.split("\n", 3)[2] || "nowhere... install modern browser",
          t
      }
        ,
        t.$a = r
    }
    , function(t, n, i, e) {
      /**
       * @module vow
       * @author Filatov Dmitry <dfilatov@yandex-team.ru>
       * @version 0.4.20
       * @license
       * Dual licensed under the MIT and GPL licenses:
       *   * http://www.opensource.org/licenses/mit-license.php
       *   * http://www.gnu.org/licenses/gpl.html
       */
      !function(n) {
        var i = function() {
          var t = []
            , i = function(n) {
            return t.push(n),
            1 === t.length
          }
            , e = function() {
            var n = t
              , i = 0
              , e = t.length;
            for (t = []; i < e; )
              n[i++]()
          }
            , r = n.MutationObserver || n.WebKitMutationObserver;
          if (r) {
            var o = 1
              , s = document.createTextNode("");
            return new r(e).observe(s, {
              characterData: !0
            }),
              function(t) {
                i(t) && (s.data = o *= -1)
              }
          }
          if ("object" == typeof process && process.nextTick)
            return function(t) {
              i(t) && process.nextTick(e)
            }
              ;
          if ("function" == typeof setImmediate)
            return function(t) {
              i(t) && setImmediate(e)
            }
              ;
          if (n.postMessage) {
            var u = !0;
            if (n.attachEvent) {
              var a = function() {
                u = !1
              };
              n.attachEvent("onmessage", a),
                n.postMessage("__checkAsync", "*"),
                n.detachEvent("onmessage", a)
            }
            if (u) {
              var c = "__promise" + Math.random() + "_" + new Date
                , h = function(t) {
                t.data === c && (t.stopPropagation && t.stopPropagation(),
                  e())
              };
              return n.addEventListener ? n.addEventListener("message", h, !0) : n.attachEvent("onmessage", h),
                function(t) {
                  i(t) && n.postMessage(c, "*")
                }
            }
          }
          var f = n.document;
          if ("onreadystatechange"in f.createElement("script")) {
            return function(t) {
              var n;
              i(t) && ((n = f.createElement("script")).onreadystatechange = function() {
                n.parentNode.removeChild(n),
                  n = n.onreadystatechange = null,
                  e()
              }
                ,
                (f.documentElement || f.body).appendChild(n))
            }
          }
          return function(t) {
            i(t) && setTimeout(e, 0)
          }
        }()
          , e = function(t) {
          i((function() {
              throw t
            }
          ))
        }
          , r = function(t) {
          return "function" == typeof t
        }
          , o = function(t) {
          return null !== t && "object" == typeof t
        }
          , s = Object.prototype.toString
          , u = Array.isArray || function(t) {
          return "[object Array]" === s.call(t)
        }
          , a = function(t) {
          for (var n = [], i = 0, e = t.length; i < e; )
            n.push(i++);
          return n
        }
          , c = Object.keys || function(t) {
          var n = [];
          for (var i in t)
            t.hasOwnProperty(i) && n.push(i);
          return n
        }
          , h = function(t, n) {
          return function(i) {
            t.call(this, i, n)
          }
        }
          , f = n.PromiseRejectionEvent ? function(t, i) {
            new n.PromiseRejectionEvent("unhandledrejection",{
              promise: i,
              reason: t
            })
          }
          : "object" == typeof process && process.emit ? function(t, n) {
              process.emit("unhandledRejection", t, n)
            }
            : function() {}
          , l = function() {
          this._$z = new m
        };
        l.prototype = {
          promise: function() {
            return this._$z
          },
          resolve: function(t) {
            this._$z.isResolved() || this._$z._$A(t)
          },
          reject: function(t) {
            this._$z.isResolved() || (k.isPromise(t) ? (t = t.then((function(t) {
                var n = k.defer();
                return n.reject(t),
                  n.promise()
              }
            )),
              this._$z._$A(t)) : this._$z._$B(t))
          },
          notify: function(t) {
            this._$z.isResolved() || this._$z._$C(t)
          }
        };
        var d = 0
          , v = 1
          , _ = 2
          , p = 3
          , m = function(t) {
          if (this._$D = void 0,
            this._$E = d,
            this._$F = !0,
            this._$G = [],
            this._$H = [],
            this._$I = [],
            t) {
            var n = this
              , i = t.length;
            try {
              t((function(t) {
                  n.isResolved() || n._$A(t)
                }
              ), i > 1 ? function(t) {
                  n.isResolved() || n._$B(t)
                }
                : void 0, i > 2 ? function(t) {
                  n.isResolved() || n._$C(t)
                }
                : void 0)
            } catch (t) {
              this._$B(t)
            }
          }
        };
        m.prototype = {
          valueOf: function() {
            return this._$D
          },
          isResolved: function() {
            return this._$E !== d
          },
          isFulfilled: function() {
            return this._$E === _
          },
          isRejected: function() {
            return this._$E === p
          },
          then: function(t, n, i, e) {
            this._$F = !1;
            var r = new l;
            return this._$J(r, t, n, i, e),
              r.promise()
          },
          catch: function(t, n) {
            return this.then(void 0, t, n)
          },
          fail: function(t, n) {
            return this.then(void 0, t, n)
          },
          always: function(t, n) {
            var i = this
              , e = function() {
              return t.call(this, i)
            };
            return this.then(e, e, n)
          },
          finally: function(t, n) {
            var i = this
              , e = function() {
              return t.call(this)
            };
            return this.then(e, e, n).then((function() {
                return i
              }
            ))
          },
          progress: function(t, n) {
            return this.then(void 0, void 0, t, n)
          },
          spread: function(t, n, i) {
            return this.then((function(n) {
                return t.apply(this, n)
              }
            ), n, i)
          },
          done: function(t, n, i, r) {
            this.then(t, n, i, r).fail(e)
          },
          delay: function(t) {
            var n, i = this.then((function(i) {
                var e = new l;
                return n = setTimeout((function() {
                    e.resolve(i)
                  }
                ), t),
                  e.promise()
              }
            ));
            return i.always((function() {
                clearTimeout(n)
              }
            )),
              i
          },
          timeout: function(t) {
            var n = new l
              , i = setTimeout((function() {
                n.reject(new k.TimedOutError("timed out"))
              }
            ), t);
            return this.then((function(t) {
                n.resolve(t)
              }
            ), (function(t) {
                n.reject(t)
              }
            )),
              n.promise().always((function() {
                  clearTimeout(i)
                }
              )),
              n.promise()
          },
          _$K: !0,
          _$A: function(t) {
            if (!(this._$E > v))
              if (t !== this)
                if (this._$E = v,
                t && t._$K)
                  t.isFulfilled() ? this._$L(t.valueOf()) : t.isRejected() ? (t._$F = !1,
                    this._$B(t.valueOf())) : t.then(this._$L, this._$B, this._$C, this);
                else {
                  if (o(t) || r(t)) {
                    var n;
                    try {
                      n = t.then
                    } catch (t) {
                      return void this._$B(t)
                    }
                    if (r(n)) {
                      var i = this
                        , e = !1;
                      try {
                        n.call(t, (function(t) {
                            e || (e = !0,
                              i._$A(t))
                          }
                        ), (function(t) {
                            e || (e = !0,
                              i._$B(t))
                          }
                        ), (function(t) {
                            i._$C(t)
                          }
                        ))
                      } catch (t) {
                        e || this._$B(t)
                      }
                      return
                    }
                  }
                  this._$L(t)
                }
              else
                this._$B(TypeError("Can't resolve promise with itself"))
          },
          _$L: function(t) {
            this._$E > v || (this._$E = _,
              this._$D = t,
              this._$M(this._$G, t),
              this._$G = this._$H = this._$I = void 0)
          },
          _$B: function(t) {
            if (!(this._$E > v)) {
              if (this._$E = p,
                this._$D = t,
                this._$M(this._$H, t),
                !this._$H.length) {
                var n = this;
                i((function() {
                    n._$F && f(t, n)
                  }
                ))
              }
              this._$G = this._$H = this._$I = void 0
            }
          },
          _$C: function(t) {
            this._$M(this._$I, t)
          },
          _$J: function(t, n, i, e, o) {
            var s;
            i && !r(i) ? (o = i,
              i = void 0) : e && !r(e) && (o = e,
              e = void 0),
            i && (this._$F = !1),
            this.isRejected() || (s = {
              defer: t,
              fn: r(n) ? n : void 0,
              ctx: o
            },
              this.isFulfilled() ? this._$M([s], this._$D) : this._$G.push(s)),
            this.isFulfilled() || (s = {
              defer: t,
              fn: i,
              ctx: o
            },
              this.isRejected() ? this._$M([s], this._$D) : this._$H.push(s)),
            this._$E <= v && this._$I.push({
              defer: t,
              fn: e,
              ctx: o
            })
          },
          _$M: function(t, n) {
            var e = t.length;
            if (e) {
              this.isResolved();
              var r = this.isFulfilled()
                , o = this.isRejected();
              i((function() {
                  for (var i, s, u, a = 0; a < e; )
                    if (s = (i = t[a++]).defer,
                      u = i.fn) {
                      var c, h = i.ctx;
                      try {
                        c = h ? u.call(h, n) : u(n)
                      } catch (t) {
                        s.reject(t);
                        continue
                      }
                      r || o ? s.resolve(c) : s.notify(c)
                    } else
                      r ? s.resolve(n) : o ? s.reject(n) : s.notify(n)
                }
              ))
            }
          }
        };
        var A = {
          cast: function(t) {
            return k.cast(t)
          },
          all: function(t) {
            return k.all(t)
          },
          allSettled: function(t) {
            return k.allSettled(t)
          },
          race: function(t) {
            return k.anyResolved(t)
          },
          resolve: function(t) {
            return k.resolve(t)
          },
          reject: function(t) {
            return k.reject(t)
          }
        };
        for (var y in A)
          A.hasOwnProperty(y) && (m[y] = A[y]);
        var w, g, k = {
          Deferred: l,
          Promise: m,
          defer: function() {
            return new l
          },
          when: function(t, n, i, e, r) {
            return k.cast(t).then(n, i, e, r)
          },
          fail: function(t, n, i) {
            return k.when(t, void 0, n, i)
          },
          always: function(t, n, i) {
            return k.when(t).always(n, i)
          },
          progress: function(t, n, i) {
            return k.when(t).progress(n, i)
          },
          spread: function(t, n, i, e) {
            return k.when(t).spread(n, i, e)
          },
          done: function(t, n, i, e, r) {
            k.when(t).done(n, i, e, r)
          },
          isPromise: function(t) {
            return o(t) && r(t.then)
          },
          cast: function(t) {
            return t && t._$K ? t : k.resolve(t)
          },
          valueOf: function(t) {
            return t && r(t.valueOf) ? t.valueOf() : t
          },
          isFulfilled: function(t) {
            return !t || !r(t.isFulfilled) || t.isFulfilled()
          },
          isRejected: function(t) {
            return !(!t || !r(t.isRejected)) && t.isRejected()
          },
          isResolved: function(t) {
            return !t || !r(t.isResolved) || t.isResolved()
          },
          resolve: function(t) {
            var n = k.defer();
            return n.resolve(t),
              n.promise()
          },
          fulfill: function(t) {
            var n = k.defer()
              , i = n.promise();
            return n.resolve(t),
              i.isFulfilled() ? i : i.then(null, (function(t) {
                  return t
                }
              ))
          },
          reject: function(t) {
            var n = k.defer();
            return n.reject(t),
              n.promise()
          },
          invoke: function(t, i) {
            var e, r = Math.max(arguments.length - 1, 0);
            if (r) {
              e = Array(r);
              for (var o = 0; o < r; )
                e[o++] = arguments[o]
            }
            try {
              return k.resolve(e ? t.apply(n, e) : t.call(n))
            } catch (t) {
              return k.reject(t)
            }
          },
          all: function(t) {
            var n = new l
              , i = u(t)
              , e = i ? a(t) : c(t)
              , r = e.length
              , o = i ? [] : {};
            if (!r)
              return n.resolve(o),
                n.promise();
            var s = r;
            return k._$N(t, (function(t, i) {
                o[e[i]] = t,
                --s || n.resolve(o)
              }
            ), n.reject, n.notify, n, e),
              n.promise()
          },
          allResolved: function(t) {
            var n = new l
              , i = u(t)
              , e = i ? a(t) : c(t)
              , r = e.length
              , o = i ? [] : {};
            if (!r)
              return n.resolve(o),
                n.promise();
            var s = function() {
              --r || n.resolve(t)
            };
            return k._$N(t, s, s, n.notify, n, e),
              n.promise()
          },
          allSettled: function(t) {
            return k.allResolved(t).then((function() {
                for (var n, i, e, r = u(t), o = r ? a(t) : c(t), s = r ? [] : {}, h = o.length, f = 0; f < h; )
                  n = o[f++],
                    promise = t[n],
                    i = promise.valueOf(),
                    e = promise.isRejected() ? {
                      status: "rejected",
                      reason: i
                    } : {
                      status: "fulfilled",
                      value: i
                    },
                    r ? s.push(e) : s[n] = e;
                return s
              }
            ))
          },
          allPatiently: function(t) {
            return k.allResolved(t).then((function() {
                var n, i, e, r, o = u(t), s = o ? a(t) : c(t), h = s.length, f = 0;
                if (!h)
                  return o ? [] : {};
                for (; f < h; )
                  e = s[f++],
                    r = t[e],
                    k.isRejected(r) ? (n || (n = o ? [] : {}),
                      o ? n.push(r.valueOf()) : n[e] = r.valueOf()) : n || ((i || (i = o ? [] : {}))[e] = k.valueOf(r));
                if (n)
                  throw n;
                return i
              }
            ))
          },
          any: function(t) {
            var n = new l
              , i = t.length;
            if (!i)
              return n.reject(Error()),
                n.promise();
            var e, r = 0;
            return k._$N(t, n.resolve, (function(t) {
                r || (e = t),
                ++r === i && n.reject(e)
              }
            ), n.notify, n),
              n.promise()
          },
          anyResolved: function(t) {
            var n = new l;
            return t.length ? (k._$N(t, n.resolve, n.reject, n.notify, n),
              n.promise()) : (n.reject(Error()),
              n.promise())
          },
          delay: function(t, n) {
            return k.resolve(t).delay(n)
          },
          timeout: function(t, n) {
            return k.resolve(t).timeout(n)
          },
          _$N: function(t, n, i, e, r, o) {
            for (var s = o ? o.length : t.length, u = 0; u < s; )
              k.when(t[o ? o[u] : u], h(n, u), i, e, r),
                ++u
          },
          TimedOutError: (w = "TimedOut",
            g = function(t) {
              this.name = w,
                this.message = t
            }
            ,
            g.prototype = new Error,
            g)
        }, E = !0;
        "object" == typeof t && "object" == typeof t.$a && (t.$a = k,
          E = !1),
        "object" == typeof modules && r(modules.define) && (modules.define("vow", (function(t) {
            t(k)
          }
        )),
          E = !1),
        "function" == typeof define && (define((function(t, n, i) {
            i.$a = k
          }
        )),
          E = !1),
        E && (n.vow = k)
      }("undefined" != typeof window ? window : e)
    }
    , function(t, n, i, e) {
      var r = navigator.userAgent.toLowerCase()
        , o = /(webkit)[ /]([\w.]+)/
        , s = /(ucbrowser)\/([\w.]+)/.exec(r) || /(yabrowser)[ /]([\w.]+)/.exec(r) || /(opr|opera|mms)(?:.*version)?[ /]([\w.]+)/.exec(r) || /(edge)\/([\w.]+)/.exec(r) || /^((?!chrome).)*version\/([\d\w.]+).*(safari)/.exec(r) || /(iemobile)\/([\d.]+)/.exec(r) || o.exec(r) || /(msie) ([\w.]+)/.exec(r) || r.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(r) || []
        , u = {
        name: s[1] || "",
        version: s[2] || "0"
      };
      "safari" === s[3] && (u.name = s[3],
        u.version = o.exec(r)[2]),
      "msie" === u.name && (document.documentMode ? u.documentMode = document.documentMode : (u.documentMode = 5,
      document.compatMode && "CSS1Compat" === document.compatMode && (u.documentMode = 7))),
      "opr" !== u.name && "mms" !== u.name || (u.name = "opera"),
      "mozilla" === u.name && "11" === u.version.split(".")[0] && (u.name = "msie");
      h = /(windows phone|ipad|iphone|ipod|android|blackberry|playbook|windows ce)/.exec(r) || [];
      var a = /(ipad|playbook)/.exec(r) || !/(mobile)/.exec(r) && /(android)/.exec(r) || []
        , c = /(netcast|web[0o]s|nettv|netrange|sharp|smart-tv)/.exec(r) || !!window.tizen && [null, "tizen"] || !("object" != typeof window.sony || !window.sony.tv) && [null, "sony"] || [];
      h[1] && (h[1] = h[1].replace(/\s/g, "_")),
      "web0s" === c[1] && (c[1] = "webos");
      var h = {
        type: h[1] || "",
        tablet: !!a[1],
        tv: !!c[1],
        mobile: h[1] && !a[1] || !1
      };
      c[1] && (h.type = c[1]),
      h.type || (h.type = "pc"),
        h.os = h.type,
        "ipad" === h.type || "iphone" === h.type || "ipod" === h.type ? h.os = "ios" : "android" === h.type ? h.os = "android" : "windows phone" === h.type || -1 !== navigator.appVersion.indexOf("Win") ? (h.os = "windows",
          h.version = navigator.userAgent.match(/win[^ ]* ([^;]*)/i),
          h.version = h.version && h.version[1]) : -1 !== navigator.appVersion.indexOf("Mac") ? h.os = "macos" : -1 !== navigator.appVersion.indexOf("X11") ? h.os = "unix" : -1 !== navigator.appVersion.indexOf("Linux") && (h.os = "linux");
      var f = !0;
      try {
        var l = document.createElement("audio");
        l.volume = .63,
          f = Math.abs(l.volume - .63) > .01
      } catch (t) {
        f = !0
      }
      var d = {
        browser: u,
        platform: h,
        onlyDeviceVolume: f
      };
      t.$a = d
    }
    , function(t, n, i, e) {
      var r = i(11)
        , o = i(10);
      t.$a = function() {
        var t = this
          , n = new r((function(n, i) {
            t.resolve = n,
              t.reject = i
          }
        ));
        n.catch(o),
          this.promise = function() {
            return n
          }
      }
    }
    , function(t, n, i, e) {
      var r = i(10)
        , o = i(11);
      t.$a = function(t) {
        var n = o.reject(t);
        return n.catch(r),
          n
      }
    }
    , function(t, n, i, e) {
      var r = i(17)
        , o = function(t) {
        r.call(this, t)
      };
      o.prototype = r.create("AudioError"),
        o.NO_IMPLEMENTATION = "cannot find suitable implementation",
        o.NOT_PRELOADED = "track is not preloaded",
        o.BAD_STATE = "action is not permited from current state",
        o.FLASH_BLOCKER = "flash is rejected by flash blocker plugin",
        o.FLASH_UNKNOWN_CRASH = "flash is crashed without reason",
        o.FLASH_INIT_TIMEOUT = "flash init timed out",
        o.FLASH_INTERNAL_ERROR = "flash internal error",
        o.FLASH_EMMITER_NOT_FOUND = "flash event emmiter not found",
        o.FLASH_NOT_RESPONDING = "flash player doesn't response",
        t.$a = o
    }
    , function(t, n, i, e) {
      var r = i(18)
        , o = function(t, n) {
        var i;
        (i = n ? new Error(t,n) : new Error(t)).name = this.name,
          this.message = i.message,
          this.stack = i.stack
      };
      o.create = function(t) {
        var n = r(this);
        return n.name = t,
          n
      }
        ,
        (o.prototype = r(Error)).name = "ErrorClass",
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        var n = function() {};
        return n.prototype = t.prototype,
          new n
      }
    }
    , function(t, n, i, e) {
      var r = {
        EVENT_PLAY: "play",
        EVENT_OUTER_PLAY: "outerplay",
        EVENT_STOP: "stop",
        EVENT_PAUSE: "pause",
        EVENT_OUTER_PAUSE: "outerpause",
        EVENT_PROGRESS: "progress",
        EVENT_LOADING: "loading",
        EVENT_LOADED: "loaded",
        EVENT_VOLUME: "volumechange",
        EVENT_SPEED: "ratechange",
        EVENT_ENDED: "ended",
        EVENT_CRASHED: "crashed",
        EVENT_ERROR: "error",
        EVENT_DESTROY: "destroy",
        EVENT_STATE: "state",
        EVENT_SWAP: "swap",
        PRELOADER_EVENT: "preloader:",
        STATE_INIT: "init",
        STATE_CRASHED: "crashed",
        STATE_IDLE: "idle",
        STATE_PLAYING: "playing",
        STATE_PAUSED: "paused"
      };
      t.$a = r
    }
    , function(t, n, i, e) {
      var r, o = new (i(9))("AudioHTML5"), s = o.info.bind(o), u = o.warn.bind(o), a = (o.debug.bind(o),
        i(13)), c = i(2), h = i(14), f = i(11), l = i(19), d = i(21), v = 1;
      n.available = function() {
        var t = !0;
        try {
          var n = document.createElement("audio").canPlayType("audio/mpeg");
          n && "no" !== n || (u(this, "HTML5 detection failed with reason", n),
            t = !1)
        } catch (n) {
          u(this, "HTML5 detection failed with error", n),
            t = !1
        }
        return s(this, "detection", t),
          t
      }();
      var _ = function(t, n) {
        var i = this;
        i.name = v++,
          c.call(i),
          i.on("*", (function(t) {
              l.EVENT_PROGRESS
            }
          )),
          r = n,
          i.webAudioApi = !1,
          i.activeLoader = 0,
          i.volume = 1,
          i.speed = 1,
          i.loaders = [],
          i._$k = new h,
          i.whenReady = i._$k.promise(),
          i._$O(),
          i._$O();
        var e = i.loaders.map((function(t) {
            return t.whenReady
          }
        ));
        f.all(e).then((function() {
            i._$k.resolve()
          }
        )),
          i._$P(0)
      };
      _.prototype = {
        _$O: function() {
          var t = this
            , n = new d;
          n.index = t.loaders.push(n) - 1,
            n.on("*", (function(i, e) {
                var r = (t.loaders.length + n.index - t.activeLoader) % t.loaders.length;
                t.trigger(i, r, e)
              }
            )),
          t.webAudioApi && n.createSource(r)
        },
        _$P: function(t) {
          this.activeLoader = (this.activeLoader + t) % this.loaders.length,
            this.trigger(l.EVENT_SWAP, t),
          0 !== t && this.stop(t)
        },
        _$Q: function(t) {
          var n = this.loaders;
          return t = t || 0,
            n[(this.activeLoader + t) % n.length]
        },
        toggleCrossDomain: function(t) {
          this.loaders.forEach((function(n) {
              n.toggleCrossDomain(t)
            }
          ))
        },
        toggleWebAudioAPI: function(t) {
          var n = this;
          if (!r)
            return u(n, "toggleWebAudioAPIError", t),
              !1;
          if (s(n, "toggleWebAudioAPI", t),
          n.webAudioApi == t)
            return t;
          var i = n.audioOutput
            , e = n.preprocessor;
          return t ? ((i = n.audioOutput = r.createGain()).gain.value = n.volume,
            i.connect(r.destination),
          e && e.output.connect(i),
            n.loaders.forEach((function(t) {
                t.audio.volume = 1,
                  t.createSource(r),
                  t.output.disconnect(),
                  t.output.connect(e ? e.input : i)
              }
            )),
            r.resume()) : i && (e && e.output.disconnect(),
            i.disconnect(),
            delete n.audioOutput,
            n.loaders.forEach((function(t) {
                t.audio.volume = n.volume,
                  t.output.disconnect(),
                  t.output.connect(r.destination)
              }
            ))),
            n.webAudioApi = t,
            t
        },
        setAudioPreprocessor: function(t) {
          var n = this;
          return n.webAudioApi ? (s(n, "setAudioPreprocessor"),
          n.preprocessor === t || (n.preprocessor && n.preprocessor.output.disconnect(),
            n.preprocessor = t,
            t ? (n.loaders.forEach((function(n) {
                n.output.disconnect(),
                  n.output.connect(t.input)
              }
            )),
              t.output.connect(n.audioOutput),
              !0) : (n.loaders.forEach((function(t) {
                t.output.disconnect(),
                  t.output.connect(n.audioOutput)
              }
            )),
              !0))) : (u(n, "setAudioPreprocessorError", t),
            !1)
        },
        play: function(t, n) {
          var i = this._$Q();
          i.load(t),
            i.play(0)
        },
        pause: function() {
          this._$Q().pause()
        },
        resume: function() {
          this._$Q().play()
        },
        stop: function(t) {
          this._$Q(t || 0).stop(),
            this.trigger(l.EVENT_STOP, t)
        },
        destroy: function() {
          s(this, "destroy"),
            this.loaders.forEach((function(t) {
                t.destroy()
              }
            )),
            this.trigger(l.EVENT_DESTROY)
        },
        getPosition: function() {
          return this._$Q().audio.currentTime
        },
        setPosition: function(t) {
          this._$Q().setPosition(t - .001)
        },
        getDuration: function(t) {
          return this._$Q(t).audio.duration
        },
        getLoaded: function(t) {
          var n = this._$Q(t);
          if (n.audio.buffered.length) {
            let t = n.audio.buffered.length - 1;
            return n.audio.buffered.end(t) - n.audio.buffered.start(0)
          }
          return 0
        },
        getMaxSeekablePosition: function(t) {
          return this.getDuration(t)
        },
        getVolume: function() {
          return this.volume
        },
        setVolume: function(t) {
          this.volume = t,
            this.webAudioApi ? "function" == typeof this.audioOutput.gain.setTargetAtTime ? this.audioOutput.gain.setTargetAtTime(t, r.currentTime, .01) : this.audioOutput.gain.value = t : this.loaders.forEach((function(n) {
                n.audio.volume = t
              }
            )),
            this.trigger(l.EVENT_VOLUME)
        },
        getSpeed: function() {
          return this.speed
        },
        setSpeed: function(t) {
          this.speed = t,
            this.loaders.forEach((function(n) {
                n.audio.defaultPlaybackRate = t,
                  n.audio.playbackRate = t
              }
            )),
            this.trigger(l.EVENT_SPEED)
        },
        preload: function(t, n, i) {
          i = null == i ? 1 : i,
            this._$Q(i).load(t)
        },
        isPreloaded: function(t, n) {
          n = null == n ? 1 : n;
          var i = this._$Q(n);
          return i.src === t && !i.notLoading
        },
        isPreloading: function(t, n) {
          return n = null == n ? 1 : n,
          this._$Q(n).src === t
        },
        playPreloaded: function(t) {
          t = null == t ? 1 : t;
          var n = this._$Q(t);
          return !!n.src && (this._$P(t),
            n.play(),
            !0)
        },
        getSrc: function(t) {
          return this._$Q(t).src
        },
        isDeviceVolume: function() {
          return a.onlyDeviceVolume
        },
        isAutoplayable: function() {
          return this._$Q(0).isAutoplayable
        },
        _$w: function() {
          try {
            return {
              main: o._$q(this.getSrc(0)),
              preloader: o._$q(this.getSrc(1))
            }
          } catch (t) {
            return ""
          }
        }
      },
        c.mixin(_),
        n.type = _.type = _.prototype.type = "html5",
        n.AudioImplementation = _
    }
    , function(t, n, i, e) {
      var r = new (i(9))("AudioHTML5Loader")
        , o = r.info.bind(r)
        , s = r.warn.bind(r)
        , u = (r.debug.bind(r),
        i(2))
        , a = i(14)
        , c = i(19)
        , h = i(22)
        , f = i(10)
        , l = document.body.addEventListener.bind(document.body)
        , d = document.body.removeEventListener.bind(document.body)
        , v = 1
        , _ = function() {
        var t = this;
        t.name = v++,
          u.call(t),
          t.on("*", (function(t) {
              c.EVENT_PROGRESS
            }
          )),
          t.isAutoplayable = !1,
          t.promises = {},
          t.src = _.EMPTY_SOUND,
          t.position = 0,
          t.lastGoodTime = 0,
          t.lastUpdate = 0,
          t.notLoading = !0,
          t.output = null,
          t._$k = new a,
          t.whenReady = t._$k.promise(),
          t._$R = t._$S.bind(t),
          t._$T = t._$U.bind(t),
          t._$V = t._$W.bind(t),
          t._$X = t._$Y.bind(t),
          t._$Z = t._$1.bind(t),
          t._$2 = t._$3.bind(t),
          t._$4 = t._$5.bind(t),
          t._$6 = t._$7.bind(t),
          t._$8 = t._$9.bind(t),
          t._$0()
      };
      _._$_ = function(t, n, i) {
        t && t.catch && t.catch(i || f),
        t && t.then && n && t.then(n)
      }
        ,
        _._$ba = 30,
        _.EMPTY_SOUND = "data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAC2QBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAimTQABzAAAAtmIVtmVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAO4AAAf4AAAAgAAA/wAAABAoQDLmAAACBYgGYMAAAE+oH///////0WKFRVzjKnAmjp+XX9qP//////p0USaKtMwpjZNhNFyEM61QAAOAP////////nfSpMQU1FMy45OC4yqqr/+xBEDI/wAAB/gAAACAxgGaMAAAEAAAH+AAAAIAAAP8AAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQoD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        _.EVENT_NATIVE_PLAY = "play",
        _.EVENT_NATIVE_PAUSE = "pause",
        _.EVENT_NATIVE_TIMEUPDATE = "timeupdate",
        _.EVENT_NATIVE_ENDED = "ended",
        _.EVENT_NATIVE_DURATION = "durationchange",
        _.EVENT_NATIVE_LOADING = "progress",
        _.EVENT_NATIVE_META = "loadedmetadata",
        _.EVENT_NATIVE_CANPLAY = "canplay",
        _.EVENT_NATIVE_ERROR = "error",
        _._$bb = function() {}
        ,
        _._$bb.step = "user",
        _._$bc = [_.EVENT_NATIVE_LOADING],
        _._$bd = [_.EVENT_NATIVE_TIMEUPDATE],
        _._$be = [_.EVENT_NATIVE_META, _.EVENT_NATIVE_CANPLAY],
        _.prototype = {
          _$Y: function() {
            var t = +new Date;
            t - this.lastUpdate < _._$ba || (this.audio.currentTime && (this.lastGoodTime = this.audio.currentTime),
              this.lastUpdate = t,
              this.trigger(c.EVENT_PROGRESS))
          },
          _$1: function() {
            var t = this.audio;
            if (this._$Y(),
              t.buffered.length) {
              var n = t.buffered.end(0) - t.buffered.start(0);
              this.notLoading && n && (this.notLoading = !1,
                this.trigger(c.EVENT_LOADING)),
              n >= t.duration - .1 && this.trigger(c.EVENT_LOADED)
            }
          },
          _$3: function() {
            this.trigger(c.EVENT_PROGRESS),
              this.ended = !0,
              this.playing = !1,
              this.shouldPause = !0,
              _._$_(this.audio.pause()),
              this.trigger(c.EVENT_ENDED)
          },
          _$5: function(t) {
            if (this.src && this.src !== _.EMPTY_SOUND) {
              var n = this.audio.error;
              if (2 === n.code)
                return s(this, "Network error. Restarting...", r._$q(this.src)),
                  this.position = this.lastGoodTime,
                  void this._$U();
              var i = new h(n ? h.html5[n.code] : t instanceof Error ? t.message : t,this.src);
              this.playing = !1,
                this.trigger(c.EVENT_ERROR, i)
            }
          },
          _$7: function() {
            this.shouldPause || this.audio.currentTime === this.audio.duration ? (this.ended || this.trigger(c.EVENT_PAUSE),
              delete this.shouldPause) : this.trigger(c.EVENT_OUTER_PAUSE)
          },
          _$9: function() {
            if (!this.shouldPlay)
              return this.shouldPause = !0,
                this.pause(),
                void this.trigger(c.EVENT_OUTER_PLAY);
            this.trigger(c.EVENT_PLAY),
              delete this.shouldPlay
          },
          _$bf: function() {
            l("mousedown", this._$V, !0),
              l("keydown", this._$V, !0),
              l("touchstart", this._$V, !0)
          },
          _$bg: function() {
            d("mousedown", this._$V, !0),
              d("keydown", this._$V, !0),
              d("touchstart", this._$V, !0)
          },
          _$bh: function() {
            var t = this.audio.addEventListener.bind(this.audio);
            t(_.EVENT_NATIVE_PAUSE, this._$6),
              t(_.EVENT_NATIVE_PLAY, this._$8),
              t(_.EVENT_NATIVE_ENDED, this._$2),
              t(_.EVENT_NATIVE_TIMEUPDATE, this._$X),
              t(_.EVENT_NATIVE_DURATION, this._$X),
              t(_.EVENT_NATIVE_LOADING, this._$Z),
              t(_.EVENT_NATIVE_ERROR, this._$4)
          },
          _$bi: function() {
            var t = this.audio.removeEventListener.bind(this.audio);
            t(_.EVENT_NATIVE_PAUSE, this._$6),
              t(_.EVENT_NATIVE_PLAY, this._$8),
              t(_.EVENT_NATIVE_ENDED, this._$2),
              t(_.EVENT_NATIVE_TIMEUPDATE, this._$X),
              t(_.EVENT_NATIVE_DURATION, this._$X),
              t(_.EVENT_NATIVE_LOADING, this._$Z),
              t(_.EVENT_NATIVE_ERROR, this._$4)
          },
          _$0: function() {
            this.muteEvents();
            var t = this.audio = document.createElement("audio");
            t.loop = !1,
              t.preload = t.autobuffer = "auto",
              t.autoplay = !1,
              t.src = _.EMPTY_SOUND,
              this._$bf(),
              this._$bj = _._$bb,
              this._$bh(),
              this._$bk()
          },
          _$bl: function() {
            this.muteEvents(),
              this._$bg(),
              this._$bi(),
              this.audio = null
          },
          _$W: function() {
            var t = this;
            this.audioContext && this.audioContext.resume(),
              t._$bg();
            var n = function(n) {
              delete t._$bj,
                delete t.shouldPlay,
                t.unmuteEvents(),
                t.isAutoplayable = !0,
                o(t, "_startupAudio:success:" + n),
                o(t, "_startupAudio:ready")
            }
              , i = t.audio
              , e = i.addEventListener.bind(i)
              , r = i.removeEventListener.bind(i);
            t._$bj = function(o) {
              t._$bj && (r(_.EVENT_NATIVE_PLAY, t._$bj),
                r(_.EVENT_NATIVE_CANPLAY, t._$bj),
                r(_.EVENT_NATIVE_META, t._$bj),
                r(_.EVENT_NATIVE_ERROR, t._$bj),
              t.promiseMode || (t._$bj = function() {
                t._$bj && (r(_.EVENT_NATIVE_PAUSE, t._$bj),
                  n("events"))
              }
                ,
                t._$bj.step = "pause",
                e(_.EVENT_NATIVE_PAUSE, t._$bj),
                t.shouldPause = !0,
                _._$_(i.pause(), (function() {
                    delete t.shouldPause
                  }
                ))))
            }
              ,
              t._$bj.step = "play",
              e(_.EVENT_NATIVE_PLAY, t._$bj),
              e(_.EVENT_NATIVE_CANPLAY, t._$bj),
              e(_.EVENT_NATIVE_META, t._$bj),
              e(_.EVENT_NATIVE_ERROR, t._$bj),
              _._$_(i.load()),
              t.shouldPlay = !0;
            var s = i.play();
            s && s.then && (t.promiseMode = !0,
              s.then((function() {
                  n("promises"),
                    t.shouldPause = !0,
                    delete t.shouldPlay,
                    _._$_(i.pause(), (function() {
                        delete t.shouldPause
                      }
                    ))
                }
              )).catch((function(n) {
                  t.shouldPause = !0,
                    delete t.shouldPlay,
                    function(n, i) {
                      delete t._$bj,
                        delete t.shouldPlay,
                        t.unmuteEvents(),
                        o(t, "_startupAudio:fail:" + n),
                      i && o(t, "_startupAudio:failReason:" + i),
                        o(t, "_startupAudio:ready")
                    }("promises", n)
                }
              )))
          },
          _$bk: function() {
            var t = this
              , n = function(n) {
              delete t._$bm,
                delete t.shouldPlay,
                window.clearTimeout(t.autoplayTO),
                t.isAutoplayable = !0,
                o(t, "_initAndCheckAutoplay:success:" + n),
                o(t, "_initAndCheckAutoplay:ready"),
                t._$k.resolve()
            }
              , i = function(n, i) {
              delete t._$bm,
                delete t.shouldPlay,
                window.clearTimeout(t.autoplayTO),
                t.isAutoplayable = !1,
                o(t, "_initAndCheckAutoplay:fail:" + n),
              i && o(t, "_initAndCheckAutoplay:failReason:" + i),
                o(t, "_initAndCheckAutoplay:ready"),
                t._$k.resolve()
            }
              , e = t.audio
              , r = e.addEventListener.bind(e)
              , s = e.removeEventListener.bind(e);
            t._$bm = function(o) {
              t._$bm && (s(_.EVENT_NATIVE_PLAY, t._$bm),
                s(_.EVENT_NATIVE_CANPLAY, t._$bm),
                s(_.EVENT_NATIVE_META, t._$bm),
                s(_.EVENT_NATIVE_ERROR, t._$bm),
              t.promiseMode || (o.type !== _.EVENT_NATIVE_ERROR && o.type !== _.EVENT_NATIVE_META ? (t._$bm = function(e) {
                window.clearTimeout(t.autoplayTO),
                t._$bm && (e.type !== _.EVENT_NATIVE_ERROR ? (s(_.EVENT_NATIVE_PAUSE, t._$bm),
                  n("events")) : i("events", e))
              }
                ,
                t._$bm.step = "pause",
                r(_.EVENT_NATIVE_PAUSE, t._$bm),
                t.shouldPause = !0,
                _._$_(e.pause(), (function() {
                    delete t.shouldPause
                  }
                ))) : i("events", o)))
            }
              ,
              t._$bm.step = "play",
              r(_.EVENT_NATIVE_PLAY, t._$bm),
              r(_.EVENT_NATIVE_CANPLAY, t._$bm),
              r(_.EVENT_NATIVE_META, t._$bm),
              r(_.EVENT_NATIVE_ERROR, t._$bm),
              e.src = _.EMPTY_SOUND,
              _._$_(e.load()),
              t.shouldPlay = !0;
            var u = e.play();
            u && u.then ? (t.promiseMode = !0,
              u.then((function() {
                  n("promises"),
                    t.shouldPause = !0,
                    delete t.shouldPlay,
                    _._$_(e.pause(), (function() {
                        delete t.shouldPause
                      }
                    ))
                }
              )).catch((function(n) {
                  t.shouldPause = !0,
                    delete t.shouldPlay,
                    i("promises", n)
                }
              ))) : t.autoplayTO = window.setTimeout((function() {
                i("timeout")
              }
            ), 1e3)
          },
          _$bn: function(t) {
            if (this._$bg(),
              this.unmuteEvents(),
              this._$bj) {
              var n = this.audio.removeEventListener.bind(this.audio);
              n(_.EVENT_NATIVE_PLAY, this._$bj),
                n(_.EVENT_NATIVE_CANPLAY, this._$bj),
                n(_.EVENT_NATIVE_META, this._$bj),
                n(_.EVENT_NATIVE_ERROR, this._$bj),
                n(_.EVENT_NATIVE_PAUSE, this._$bj),
                s(this, "_startupAudio:interrupted", this._$bj.step, t),
                delete this._$bj
            }
          },
          _$bo: function(t, n, i) {
            var e = this;
            if (!e.promises[t]) {
              var r = new a;
              if (e.promises[t] = r,
                n.call(e))
                r.resolve();
              else {
                for (var o = function() {
                  n.call(e) && r.resolve()
                }, s = function() {
                  for (var t = 0, n = i.length; t < n; t++)
                    e.audio.removeEventListener(i[t], o)
                }, u = 0, c = i.length; u < c; u++)
                  e.audio.addEventListener(i[u], o);
                r.promise().then(s, s)
              }
            }
            return e.promises[t].promise()
          },
          _$bp: function(t, n) {
            var i;
            (i = this.promises[t]) && (delete this.promises[t],
              i.reject(n))
          },
          _$bq: function(t) {
            for (var n in this.promises)
              this.promises.hasOwnProperty(n) && this._$bp(n, t)
          },
          _$br: function() {
            return this.audio.readyState > this.audio.HAVE_METADATA
          },
          _$bs: function() {
            return this._$bo("metadata", this._$br, _._$be)
          },
          _$bt: function() {
            this._$bu = this._$bu && clearTimeout(this._$bu) || setTimeout(this._$bp.bind(this, "loaded", "timeout"), 5e3);
            var t = Math.min(this.position + 45, this.audio.duration);
            return this.audio.buffered.length && this.audio.buffered.end(0) - this.audio.buffered.start(0) >= t
          },
          _$bv: function() {
            var t = this
              , n = t._$bo("loaded", t._$bt, _._$bc);
            return n.cleanTimer || (n.cleanTimer = function() {
              t._$bu = clearTimeout(t._$bu)
            }
              ,
              n.then(n.cleanTimer, n.cleanTimer)),
              n
          },
          _$bw: function() {
            var t = this.audio
              , n = Math.min(this.position + .2, t.duration);
            return window.clearTimeout(this._$bx),
            0 !== t.currentTime || t.paused || (this._$bx = window.setTimeout((function() {
                0 !== t.currentTime || t.paused || (t.currentTime = 1)
              }
            ), 1e3)),
            t.currentTime >= n
          },
          _$by: function() {
            return this._$bo("playing", this._$bw, _._$bd)
          },
          _$bz: function() {
            var t = this;
            if (!t.promises.startPlaying) {
              var n = new a;
              t.promises.startPlaying = n;
              var i, e = function(n) {
                r = !0,
                  t._$bp("startPlaying", n)
              }, r = !1, u = function() {
                clearTimeout(i)
              };
              t._$by().then((function() {
                  r = !0,
                    n.resolve(),
                    o(t, "startPlaying:success")
                }
              ), e),
                t._$bv().then((function() {
                    r || (i = setTimeout((function() {
                        n.reject("timeout"),
                          t._$bp("playing", "timeout"),
                          s(t, "startPlaying:failed")
                      }
                    ), 5e3))
                  }
                ), e),
                t._$by().then(u, u),
                n.promise().then(u, u)
            }
            return t.promises.startPlaying.promise()
          },
          load: function(t) {
            this._$bq("load"),
              this._$bn("load"),
              this.ended = !1,
              this.playing = !1,
              this.notLoading = !0,
              this.position = 0,
              this.lastGoodTime = 0,
              this.src = t,
              this.audio.src = t,
              _._$_(this.audio.load())
          },
          stop: function() {
            this._$bq("stop"),
              this._$bn("stop"),
              this.load("")
          },
          _$S: function() {
            var t = this;
            t.audio.currentTime = t.position,
            t.playing && (t._$bn("startPlay"),
              t.shouldPlay = !0,
              _._$_(t.audio.play()),
              t._$bz().then((function() {
                  t.retry = 0
                }
              ), t._$T))
          },
          _$U: function(t) {
            if (o(this, "_restart", t, this.position, this.playing),
            this.src && this.src !== _.EMPTY_SOUND && (!t || "timeout" === t)) {
              if (this.retry++,
              this.retry > 5)
                return this.playing = !1,
                  void this.trigger(c.EVENT_ERROR, new h(h.DONT_START,this.src));
              var n = this.position
                , i = this.playing;
              this.load(this.src),
                i ? this._$bA(n) : this.setPosition(n)
            }
          },
          play: function(t) {
            return this.retry = 0,
              this._$bA(t)
          },
          _$bA: function(t) {
            this.playing || (this._$bn("play"),
              this.ended = !1,
              this.playing = !0,
              this.position = null == t ? this.position || 0 : t,
              this._$bs().then(this._$R, f))
          },
          pause: function() {
            this.shouldPause = !0,
              this.playing = !1,
              this._$bp("startPlaying", "pause"),
              this._$bn("pause"),
              _._$_(this.audio.pause()),
              this.position = this.audio.currentTime
          },
          setPosition: function(t) {
            var n = this;
            isFinite(t) ? (n.position = t,
              n._$bs().then((function() {
                  n.audio.currentTime = n.position
                }
              ), f)) : s(n, "setPositionFailed", t)
          },
          toggleCrossDomain: function(t) {
            t ? this.audio.crossOrigin = "anonymous" : this.audio.removeAttribute("crossOrigin"),
              this._$U()
          },
          createSource: function(t) {
            var n = this.audio;
            if (this.audioContext = t,
              !this.output) {
              var i = !n.crossOrigin;
              n.crossOrigin = "anonymous",
                this.output = t.createMediaElementSource(n),
                this.output.connect(t.destination),
              i && this._$U()
            }
          },
          destroySource: function() {
            this.output && (s(this, "destroySource"),
              this.output.disconnect(),
              this.output = null,
              this._$bq("destroy"),
              this._$bl(),
              this._$0(),
              this._$W(),
              this._$U())
          },
          destroy: function() {
            var t = this.audio;
            t && t.pause && (this.shouldPause = !0,
              _._$_(t.pause()),
              this._$bi()),
            this.output && (this.output.disconnect(),
              this.output = null),
              this._$bq(),
              this.muteEvents(),
              this._$bg(),
              this._$T = null,
              this._$R = null,
              this.promises = null,
              this.audio = null
          },
          _$w: function() {
            return {
              init: !!this._$bj && this._$bj.step,
              src: r._$q(this.src),
              playing: this.playing,
              ended: this.ended,
              notLoading: this.notLoading,
              position: this.position
            }
          }
        },
        u.mixin(_),
        t.$a = _
    }
    , function(t, n, i, e) {
      var r = i(17)
        , o = function(t, n) {
        r.call(this, t),
          this.src = n
      };
      o.prototype = r.create("PlaybackError"),
        o.CONNECTION_ABORTED = "Connection aborted",
        o.NETWORK_ERROR = "Network error",
        o.DECODE_ERROR = "Decode error",
        o.BAD_DATA = "Bad data",
        o.DONT_START = "Playback start error",
        o.html5 = {
          1: o.CONNECTION_ABORTED,
          2: o.NETWORK_ERROR,
          3: o.DECODE_ERROR,
          4: o.BAD_DATA
        },
        t.$a = o
    }
    , function(t, n, i, e) {
      var r, o = i(7), s = i(24), u = i(13), a = new (i(9))("AudioFlash"), c = i(25), h = i(29), f = i(2), l = 1, d = s.getFlashPlayerVersion();
      u.flashVersion = d.major + "." + d.minor + "." + d.release,
        n.available = s.hasFlashPlayerVersion(o.flash.version),
        a.info(this, "detection", n.available);
      var v = function(t, n) {
        var i = this;
        i.name = l++,
        r && !n || (r = new c(t)),
          f.call(i),
          i.whenReady = r.createPlayer(i),
          i.whenReady.then((function(t) {
              a.info(i, "ready", t)
            }
          ), (function(t) {
              a.error(i, "failed", t)
            }
          ))
      };
      n.type = v.type = v.prototype.type = "flash",
        Object.keys(h.prototype).filter((function(t) {
            return h.prototype.hasOwnProperty(t) && "_" !== t[0]
          }
        )).forEach((function(t) {
            v.prototype[t] = function() {
              if (/^get/.test(t),
                !this.hasOwnProperty("id"))
                return a.warn(this, "player is not ready"),
                  null;
              var n = [].slice.call(arguments);
              return n.unshift(this.id),
                r.flash[t].apply(r.flash, n)
            }
          }
        )),
        v.prototype.isDeviceVolume = function() {
          return !1
        }
        ,
        v.prototype._$w = function() {
          try {
            return this.hasOwnProperty("id") ? {
              main: a._$q(this.getSrc(0)),
              preloader: a._$q(this.getSrc(1))
            } : {
              main: "not ready",
              preloader: "not ready"
            }
          } catch (t) {
            return ""
          }
        }
        ,
        f.mixin(v),
        n.AudioImplementation = v
    }
    , function(t, n, i, e) {
      /**
       * @license SWFObject v2.2 <http://code.google.com/p/swfobject/>
       * is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
       * @private
       */
      var r = function() {
        var t, n, i, e, o, s, u = "undefined", a = "object", c = "application/x-shockwave-flash", h = window, f = document, l = navigator, d = !1, v = [function() {
          d ? function() {
            var t = f.getElementsByTagName("body")[0]
              , n = N(a);
            n.setAttribute("type", c);
            var i = t.appendChild(n);
            if (i) {
              var e = 0;
              !function() {
                if (typeof i.GetVariable != u) {
                  var r = i.GetVariable("$version");
                  r && (r = r.split(" ")[1].split(","),
                    g.pv = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)])
                } else if (e < 10)
                  return e++,
                    void setTimeout(arguments.callee, 10);
                t.removeChild(n),
                  i = null,
                  T()
              }()
            } else
              T()
          }() : T()
        }
        ], _ = [], p = [], m = [], A = !1, y = !1, w = !0, g = function() {
          var t = typeof f.getElementById != u && typeof f.getElementsByTagName != u && typeof f.createElement != u
            , n = l.userAgent.toLowerCase()
            , i = l.platform.toLowerCase()
            , e = /win/.test(i || n)
            , r = /mac/.test(i || n)
            , o = !!/webkit/.test(n) && parseFloat(n.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"))
            , s = !1
            , v = [0, 0, 0]
            , _ = null;
          if (typeof l.plugins != u && typeof l.plugins["Shockwave Flash"] == a)
            !(_ = l.plugins["Shockwave Flash"].description) || typeof l.mimeTypes != u && l.mimeTypes[c] && !l.mimeTypes[c].enabledPlugin || (d = !0,
              s = !1,
              _ = _.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
              v[0] = parseInt(_.replace(/^(.*)\..*$/, "$1"), 10),
              v[1] = parseInt(_.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
              v[2] = /[a-zA-Z]/.test(_) ? parseInt(_.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
          else if (typeof h.ActiveXObject != u)
            try {
              var p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              p && (_ = p.GetVariable("$version")) && (s = !0,
                _ = _.split(" ")[1].split(","),
                v = [parseInt(_[0], 10), parseInt(_[1], 10), parseInt(_[2], 10)])
            } catch (t) {}
          return {
            w3: t,
            pv: v,
            wk: o,
            ie: s,
            win: e,
            mac: r
          }
        }();
        function k() {
          if (!A) {
            try {
              var t = f.getElementsByTagName("body")[0].appendChild(N("span"));
              t.parentNode.removeChild(t)
            } catch (t) {
              return
            }
            A = !0;
            for (var n = v.length, i = 0; i < n; i++)
              v[i]()
          }
        }
        function E(t) {
          A ? t() : v[v.length] = t
        }
        function b(t) {
          if (typeof h.addEventListener != u)
            h.addEventListener("load", t, !1);
          else if (typeof f.addEventListener != u)
            f.addEventListener("load", t, !1);
          else if (typeof h.attachEvent != u)
            !function(t, n, i) {
              t.attachEvent(n, i),
                m[m.length] = [t, n, i]
            }(h, "onload", t);
          else if ("function" == typeof h.onload) {
            var n = h.onload;
            h.onload = function() {
              n(),
                t()
            }
          } else
            h.onload = t
        }
        function T() {
          var t = _.length;
          if (t > 0)
            for (var n = 0; n < t; n++) {
              var i = _[n].id
                , e = _[n].callbackFn
                , r = {
                success: !1,
                id: i
              };
              if (g.pv[0] > 0) {
                var o = O(i);
                if (o)
                  if (!V(_[n].swfVersion) || g.wk && g.wk < 312)
                    if (_[n].expressInstall && q()) {
                      var s = {};
                      s.data = _[n].expressInstall,
                        s.width = o.getAttribute("width") || "0",
                        s.height = o.getAttribute("height") || "0",
                      o.getAttribute("class") && (s.styleclass = o.getAttribute("class")),
                      o.getAttribute("align") && (s.align = o.getAttribute("align"));
                      for (var a = {}, c = o.getElementsByTagName("param"), h = c.length, f = 0; f < h; f++)
                        "movie" != c[f].getAttribute("name").toLowerCase() && (a[c[f].getAttribute("name")] = c[f].getAttribute("value"));
                      S(s, a, i, e)
                    } else
                      C(o),
                      e && e(r);
                  else
                    F(i, !0),
                    e && (r.success = !0,
                      r.ref = P(i),
                      e(r))
              } else if (F(i, !0),
                e) {
                var l = P(i);
                l && typeof l.SetVariable != u && (r.success = !0,
                  r.ref = l),
                  e(r)
              }
            }
        }
        function P(t) {
          var n = null
            , i = O(t);
          if (i && "OBJECT" == i.nodeName)
            if (typeof i.SetVariable != u)
              n = i;
            else {
              var e = i.getElementsByTagName(a)[0];
              e && (n = e)
            }
          return n
        }
        function q() {
          return !y && V("6.0.65") && (g.win || g.mac) && !(g.wk && g.wk < 312)
        }
        function S(r, o, s, a) {
          y = !0,
            i = a || null,
            e = {
              success: !1,
              id: s
            };
          var c = O(s);
          if (c) {
            "OBJECT" == c.nodeName ? (t = R(c),
              n = null) : (t = c,
              n = s),
              r.id = "SWFObjectExprInst",
            (typeof r.width == u || !/%$/.test(r.width) && parseInt(r.width, 10) < 310) && (r.width = "310"),
            (typeof r.height == u || !/%$/.test(r.height) && parseInt(r.height, 10) < 137) && (r.height = "137"),
              f.title = f.title.slice(0, 47) + " - Flash Player Installation";
            var l = g.ie && g.win ? "ActiveX" : "PlugIn"
              , d = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + l + "&MMdoctitle=" + f.title;
            if (typeof o.flashvars != u ? o.flashvars += "&" + d : o.flashvars = d,
            g.ie && g.win && 4 != c.readyState) {
              var v = N("div");
              s += "SWFObjectNew",
                v.setAttribute("id", s),
                c.parentNode.insertBefore(v, c),
                c.style.display = "none",
                function() {
                  4 == c.readyState ? c.parentNode.removeChild(c) : setTimeout(arguments.callee, 10)
                }()
            }
            x(r, o, s)
          }
        }
        function C(t) {
          if (g.ie && g.win && 4 != t.readyState) {
            var n = N("div");
            t.parentNode.insertBefore(n, t),
              n.parentNode.replaceChild(R(t), n),
              t.style.display = "none",
              function() {
                4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
              }()
          } else
            t.parentNode.replaceChild(R(t), t)
        }
        function R(t) {
          var n = N("div");
          if (g.win && g.ie)
            n.innerHTML = t.innerHTML;
          else {
            var i = t.getElementsByTagName(a)[0];
            if (i) {
              var e = i.childNodes;
              if (e)
                for (var r = e.length, o = 0; o < r; o++)
                  1 == e[o].nodeType && "PARAM" == e[o].nodeName || 8 == e[o].nodeType || n.appendChild(e[o].cloneNode(!0))
            }
          }
          return n
        }
        function x(t, n, i) {
          var e, r = O(i);
          if (g.wk && g.wk < 312)
            return e;
          if (r)
            if (typeof t.id == u && (t.id = i),
            g.ie && g.win) {
              var o = "";
              for (var s in t)
                t[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? n.movie = t[s] : "styleclass" == s.toLowerCase() ? o += ' class="' + t[s] + '"' : "classid" != s.toLowerCase() && (o += " " + s + '="' + t[s] + '"'));
              var h = "";
              for (var f in n)
                n[f] != Object.prototype[f] && (h += '<param name="' + f + '" value="' + n[f] + '" />');
              r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + h + "</object>",
                p[p.length] = t.id,
                e = O(t.id)
            } else {
              var l = N(a);
              for (var d in l.setAttribute("type", c),
                t)
                t[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? l.setAttribute("class", t[d]) : "classid" != d.toLowerCase() && l.setAttribute(d, t[d]));
              for (var v in n)
                n[v] != Object.prototype[v] && "movie" != v.toLowerCase() && D(l, v, n[v]);
              r.parentNode.replaceChild(l, r),
                e = l
            }
          return e
        }
        function D(t, n, i) {
          var e = N("param");
          e.setAttribute("name", n),
            e.setAttribute("value", i),
            t.appendChild(e)
        }
        function I(t) {
          var n = O(t);
          n && "OBJECT" == n.nodeName && (g.ie && g.win ? (n.style.display = "none",
            function() {
              4 == n.readyState ? M(t) : setTimeout(arguments.callee, 10)
            }()) : n.parentNode.removeChild(n))
        }
        function M(t) {
          var n = O(t);
          if (n) {
            for (var i in n)
              "function" == typeof n[i] && (n[i] = null);
            n.parentNode.removeChild(n)
          }
        }
        function O(t) {
          var n = null;
          try {
            n = f.getElementById(t)
          } catch (t) {}
          return n
        }
        function N(t) {
          return f.createElement(t)
        }
        function V(t) {
          var n = g.pv
            , i = t.split(".");
          return i[0] = parseInt(i[0], 10),
            i[1] = parseInt(i[1], 10) || 0,
            i[2] = parseInt(i[2], 10) || 0,
          n[0] > i[0] || n[0] == i[0] && n[1] > i[1] || n[0] == i[0] && n[1] == i[1] && n[2] >= i[2]
        }
        function L(t, n, i, e) {
          if (!g.ie || !g.mac) {
            var r = f.getElementsByTagName("head")[0];
            if (r) {
              var c = i && "string" == typeof i ? i : "screen";
              if (e && (o = null,
                s = null),
              !o || s != c) {
                var h = N("style");
                h.setAttribute("type", "text/css"),
                  h.setAttribute("media", c),
                  o = r.appendChild(h),
                g.ie && g.win && typeof f.styleSheets != u && f.styleSheets.length > 0 && (o = f.styleSheets[f.styleSheets.length - 1]),
                  s = c
              }
              g.ie && g.win ? o && typeof o.addRule == a && o.addRule(t, n) : o && typeof f.createTextNode != u && o.appendChild(f.createTextNode(t + " {" + n + "}"))
            }
          }
        }
        function F(t, n) {
          if (w) {
            var i = n ? "visible" : "hidden";
            A && O(t) ? O(t).style.visibility = i : L("#" + t, "visibility:" + i)
          }
        }
        function j(t) {
          return null != /[\\\"<>\.;]/.exec(t) && typeof encodeURIComponent != u ? encodeURIComponent(t) : t
        }
        return g.w3 && ((typeof f.readyState != u && "complete" == f.readyState || typeof f.readyState == u && (f.getElementsByTagName("body")[0] || f.body)) && k(),
        A || (typeof f.addEventListener != u && f.addEventListener("DOMContentLoaded", k, !1),
        g.ie && g.win && (f.attachEvent("onreadystatechange", (function() {
            "complete" == f.readyState && (f.detachEvent("onreadystatechange", arguments.callee),
              k())
          }
        )),
        h == top && function() {
          if (!A) {
            try {
              f.documentElement.doScroll("left")
            } catch (t) {
              return void setTimeout(arguments.callee, 0)
            }
            k()
          }
        }()),
        g.wk && function() {
          A || (/loaded|complete/.test(f.readyState) ? k() : setTimeout(arguments.callee, 0))
        }(),
          b(k))),
        g.ie && g.win && window.attachEvent("onunload", (function() {
            for (var t = m.length, n = 0; n < t; n++)
              m[n][0].detachEvent(m[n][1], m[n][2]);
            for (var i = p.length, e = 0; e < i; e++)
              I(p[e]);
            for (var o in g)
              g[o] = null;
            for (var s in g = null,
              r)
              r[s] = null;
            r = null
          }
        )),
          {
            registerObject: function(t, n, i, e) {
              if (g.w3 && t && n) {
                var r = {};
                r.id = t,
                  r.swfVersion = n,
                  r.expressInstall = i,
                  r.callbackFn = e,
                  _[_.length] = r,
                  F(t, !1)
              } else
                e && e({
                  success: !1,
                  id: t
                })
            },
            getObjectById: function(t) {
              if (g.w3)
                return P(t)
            },
            embedSWF: function(t, n, i, e, r, o, s, c, h, f) {
              var l = {
                success: !1,
                id: n
              };
              g.w3 && !(g.wk && g.wk < 312) && t && n && i && e && r ? (F(n, !1),
                E((function() {
                    i += "",
                      e += "";
                    var d = {};
                    if (h && typeof h === a)
                      for (var v in h)
                        d[v] = h[v];
                    d.data = t,
                      d.width = i,
                      d.height = e;
                    var _ = {};
                    if (c && typeof c === a)
                      for (var p in c)
                        _[p] = c[p];
                    if (s && typeof s === a)
                      for (var m in s)
                        typeof _.flashvars != u ? _.flashvars += "&" + m + "=" + s[m] : _.flashvars = m + "=" + s[m];
                    if (V(r)) {
                      var A = x(d, _, n);
                      d.id == n && F(n, !0),
                        l.success = !0,
                        l.ref = A
                    } else {
                      if (o && q())
                        return d.data = o,
                          void S(d, _, n, f);
                      F(n, !0)
                    }
                    f && f(l)
                  }
                ))) : f && f(l)
            },
            switchOffAutoHideShow: function() {
              w = !1
            },
            ua: g,
            getFlashPlayerVersion: function() {
              return {
                major: g.pv[0],
                minor: g.pv[1],
                release: g.pv[2]
              }
            },
            hasFlashPlayerVersion: V,
            createSWF: function(t, n, i) {
              return g.w3 ? x(t, n, i) : void 0
            },
            showExpressInstall: function(t, n, i, e) {
              g.w3 && q() && S(t, n, i, e)
            },
            removeSWF: function(t) {
              g.w3 && I(t)
            },
            createCSS: function(t, n, i, e) {
              g.w3 && L(t, n, i, e)
            },
            addDomLoadEvent: E,
            addLoadEvent: b,
            getQueryParamValue: function(t) {
              var n = f.location.search || f.location.hash;
              if (n) {
                if (/\?/.test(n) && (n = n.split("?")[1]),
                null == t)
                  return j(n);
                for (var i = n.split("&"), e = 0; e < i.length; e++)
                  if (i[e].substring(0, i[e].indexOf("=")) == t)
                    return j(i[e].substring(i[e].indexOf("=") + 1))
              }
              return ""
            },
            expressInstallCallback: function() {
              if (y) {
                var r = O("SWFObjectExprInst");
                r && t && (r.parentNode.replaceChild(t, r),
                n && (F(n, !0),
                g.ie && g.win && (t.style.display = "block")),
                i && i(e)),
                  y = !1
              }
            }
          }
      }();
      t.$a = r
    }
    , function(t, n, i, e) {
      var r = new (i(9))("FlashManager")
        , o = r.info.bind(r)
        , s = r.warn.bind(r)
        , u = r.error.bind(r)
        , a = i(7).flash
        , c = i(19)
        , h = i(26)
        , f = i(29)
        , l = i(11)
        , d = i(14)
        , v = i(16)
        , _ = i(30)
        , p = function(t) {
        var n = this;
        n.state = "init",
          n.overlay = t,
          n.emmiters = [];
        var i = n.deferred = new d;
        n.whenReady = n.deferred.promise();
        var e, r = a.callback.split("."), s = r.pop(), c = window;
        (r.forEach((function(t) {
            c[t] || (c[t] = {}),
              c = c[t]
          }
        )),
          c[s] = n._$bB.bind(n),
          n._$bC = setTimeout(n._$bD.bind(n), a.loadTimeout),
          h(a.path + "/" + a.name, a.version, a.playerID, n._$bE.bind(n), {}, t),
          t) && t.addEventListener("mousedown", (function() {
            e = e || setTimeout((function() {
                i.reject(new v(v.FLASH_NOT_RESPONDING))
              }
            ), a.clickTimeout)
          }
        ), !0);
        n.whenReady.then((function(t) {
            e = e && clearTimeout(e),
              o(n, "ready", t)
          }
        ), (function(t) {
            u(n, "failed", t)
          }
        ))
      };
      p.EVENT_INIT = "init",
        p.EVENT_FAIL = "failed",
        p.EVENT_ERROR = "error",
        p.EVENT_DEBUG = "debug",
        p.prototype = {
          _$bE: function(t) {
            clearTimeout(this._$bC),
              delete this._$bC,
              t.success ? (this.flash = new f(t.ref),
                "ready" === this.state ? this.deferred.resolve(t.ref) : this.overlay || (this._$bF = setTimeout(this._$bG.bind(this), a.initTimeout))) : (this.state = "failed",
                this.deferred.reject(new v(t._$bH ? v.FLASH_BLOCKER : v.FLASH_UNKNOWN_CRASH)))
          },
          _$bD: function() {
            this.state = "failed",
              this.deferred.reject(new _(_.TIMEOUT))
          },
          _$bG: function() {
            this.state = "failed",
              this.deferred.reject(new v(v.FLASH_INIT_TIMEOUT))
          },
          _$bI: function() {
            this.state = "ready",
            this._$bF && (clearTimeout(this._$bF),
              delete this._$bF),
            this.flash && (this.deferred.resolve(this.flash),
              this._$bJ = setInterval(this._$bK.bind(this), 1e3))
          },
          _$bB: function(t, n, i, e) {
            var r = this.emmiters;
            if ("failed" !== this.state)
              return t === p.EVENT_DEBUG ? o(this, "flashDEBUG", n, i, e) : t === p.EVENT_ERROR && s(this, "flashError", n, i, e),
                t === p.EVENT_INIT ? this._$bI() : t === p.EVENT_FAIL ? (u(this, "failed", v.FLASH_INTERNAL_ERROR),
                  void this.deferred.reject(new v(v.FLASH_INTERNAL_ERROR))) : void (-1 === n ? l.resolve().then((function() {
                    r.forEach((function(n) {
                        n.trigger(t, i, e)
                      }
                    ))
                  }
                )) : r[n] ? l.resolve().then((function() {
                    r[n].trigger(t, i, e)
                  }
                )) : u(this, v.FLASH_EMMITER_NOT_FOUND, n));
            s(this, "onEventFailed", t, n, i, e)
          },
          _$bK: function() {
            try {
              this.flash._$bL()
            } catch (t) {
              u(this, "crashed", t),
                this._$bB(c.EVENT_CRASHED, -1, t)
            }
          },
          createPlayer: function(t) {
            var n = this
              , i = n.whenReady.then((function() {
                return t.id = n.flash._$bM(),
                  n.emmiters[t.id] = t,
                  t.id
              }
            ));
            return i.then((function(t) {}
            ), (function(t) {
                u(n, "createPlayerError", t)
              }
            )),
              i
          }
        },
        t.$a = p
    }
    , function(t, n, i, e) {
      var r = i(27)
        , o = i(28)
        , s = i(13)
        , u = "windows" === s.platform.os && "safari" === s.browser.name;
      t.$a = function(t, n, i, e, s, a, c, h) {
        var f, l, d, v, _ = document.createElement("div");
        return _.id = "wrapper_" + i,
          _.innerHTML = '<div id="' + i + '"></div>',
          c = c || "1000",
          h = h || "1000",
          a && !u ? (f = o,
            l = c,
            d = h,
            v = {
              allowscriptaccess: "always",
              wmode: "transparent"
            },
            _.className = "ya-flash-player-wrapper",
            _.style.cssText = "position: relative; width: 100%; height: 100%; overflow: hidden;",
            a.appendChild(_)) : (f = r,
            l = d = "1",
            v = {
              allowscriptaccess: "always"
            },
            _.style.cssText = "position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; overflow: hidden;",
            document.body.appendChild(_)),
          f.embedSWF(t, i, l, d, n, "", s, v, {}, e),
          _
      }
    }
    , function(t, n, i, e) {
      var r = i(24);
      function o(t) {
        t.parentNode.removeChild(t)
      }
      var s = {
        _$bN: "fbn-swf-wrapper",
        _$bO: 500,
        _$bP: [function(t, n) {
          return n.childNodes.length > 1
        }
          , function(t) {
            return t.type && "application/x-shockwave-flash" != t.type
          }
          , function(t) {
            return !t.parentNode
          }
          , function(t) {
            return t.parentNode.className.indexOf("CTFnodisplay") > -1
          }
        ],
        embedSWF: function(t, n, i, e, u, a, c, h, f, l, d) {
          r && r.addDomLoadEvent((function() {
              var v = document.getElementById(n);
              if (v) {
                var _ = document.createElement("div");
                _.className = s._$bN,
                  v.parentNode.replaceChild(_, v),
                  _.appendChild(v),
                  r.embedSWF(t, n, i, e, u, a, c, h, f, (function(t) {
                      if (t && !1 !== t.success) {
                        var i = t.ref
                          , e = !1;
                        try {
                          e = i && i.getSVGDocument && i.getSVGDocument()
                        } catch (t) {}
                        e ? u(t) : window.setTimeout((function() {
                            for (var n = s._$bP, e = 0, r = n.length; e < r; e++)
                              if (n[e](i, _))
                                return void u(t);
                            l(t)
                          }
                        ), s._$bO)
                      } else
                        l(t);
                      function u(t) {
                        if (!1 !== d) {
                          r.removeSWF(n),
                            o(_);
                          var i = document.getElementById("CTFstack");
                          i && o(i);
                          var e = document.body.lastChild;
                          e && "ujs_flashblock_placeholder" == e.className && o(e)
                        }
                        t.success = !1,
                          t._$bH = !0,
                          l(t)
                      }
                    }
                  ))
              }
            }
          ))
        }
      };
      t.$a = s
    }
    , function(t, n, i, e) {
      var r = i(24)
        , o = {
        _$bN: "femb-swf-wrapper",
        _$bO: 500,
        embedSWF: function(t, n, i, e, s, u, a, c, h, f) {
          r.addDomLoadEvent((function() {
              var l = document.getElementById(n);
              if (l) {
                var d = document.createElement("div");
                d.className = o._$bN,
                  l.parentNode.replaceChild(d, l),
                  d.appendChild(l),
                  r.embedSWF(t, n, i, e, s, u, a, c, h, (function(t) {
                      if (t && !1 !== t.success) {
                        var n = t.ref
                          , i = !1;
                        try {
                          i = n && n.getSVGDocument && n.getSVGDocument()
                        } catch (t) {}
                        i ? function(t) {
                          t.success = !1,
                            f(t)
                        }(t) : window.setTimeout((function() {
                            f(t)
                          }
                        ), o._$bO)
                      } else
                        f(t)
                    }
                  ))
              }
            }
          ))
        }
      };
      t.$a = o
    }
    , function(t, n, i, e) {
      var r = new (i(9))("FlashInterface")
        , o = function(t) {
        this.flash = ya.music.Audio._flash = t
      };
      o.prototype = {
        _$bQ: function(t) {
          var n = arguments;
          try {
            return this.flash.call.apply(this.flash, n)
          } catch (t) {
            return r.error(this, "_callFlashError", t, n[0], n[1], n[2]),
              null
          }
        },
        _$bL: function() {
          this._$bQ("heartBeat", -1)
        },
        _$bM: function() {
          return this._$bQ("addPlayer", -1)
        },
        setVolume: function(t, n) {
          this._$bQ("setVolume", -1, n)
        },
        getVolume: function() {
          return this._$bQ("getVolume", -1)
        },
        play: function(t, n, i) {
          this._$bQ("play", t, n, i && 1e3 * i)
        },
        stop: function(t, n) {
          this._$bQ("stop", t, n || 0)
        },
        destroy: function(t, n) {
          this._$bQ("stop", t, n || 0)
        },
        pause: function(t) {
          this._$bQ("pause", t)
        },
        resume: function(t) {
          this._$bQ("resume", t)
        },
        getPosition: function(t) {
          return this._$bQ("getPosition", t)
        },
        setPosition: function(t, n) {
          this._$bQ("setPosition", t, n)
        },
        getDuration: function(t, n) {
          return this._$bQ("getDuration", t, n || 0)
        },
        getLoaded: function(t, n) {
          return this._$bQ("getLoaded", t, n || 0)
        },
        getMaxSeekablePosition: function(t, n) {
          return this.getLoaded(t, n)
        },
        preload: function(t, n, i, e) {
          return this._$bQ("preload", t, n, i && 1e3 * i, null == e ? 1 : e)
        },
        isPreloaded: function(t, n, i) {
          return this._$bQ("isPreloaded", t, n, null == i ? 1 : i)
        },
        isPreloading: function(t, n, i) {
          return this._$bQ("isPreloading", t, n, null == i ? 1 : i)
        },
        playPreloaded: function(t, n) {
          return this._$bQ("playPreloaded", t, null == n ? 1 : n)
        },
        getSrc: function(t, n) {
          return this._$bQ("getSrc", t, n || 0)
        },
        isAutoplayable: function() {
          return !0
        }
      },
        t.$a = o
    }
    , function(t, n, i, e) {
      var r = i(17)
        , o = function(t) {
        r.call(this, t)
      };
      o.prototype = r.create("LoaderError"),
        o.TIMEOUT = "request timeout",
        o.FAILED = "request failed",
        t.$a = o
    }
    , function(t, n, i, e) {
      var r = i(2)
        , o = function(t) {
        if (t) {
          for (var n in t)
            "_" === n[0] || "function" != typeof t[n] || t[n] === Object.prototype[n] || t.hasOwnProperty(n) || r.prototype.hasOwnProperty(n) || (this[n] = t[n].bind(t));
          t.pipeEvents && (r.call(this),
            this.on = r.prototype.on,
            this.once = r.prototype.once,
            this.off = r.prototype.off,
            this.clearListeners = r.prototype.clearListeners,
            t.pipeEvents(this))
        }
      };
      o.exportStatic = function(t, n, i) {
        i = i || [],
          Object.keys(t).forEach((function(e) {
              t.hasOwnProperty(e) && "_" !== e[0] && "prototype" !== e && -1 === i.indexOf(e) && (n[e] = t[e])
            }
          ))
      }
        ,
        o.createClass = function(t, n, i) {
          var e, r = function() {
            var n = function() {};
            n.prototype = t.prototype;
            var i = new n;
            return t.apply(i, arguments),
              i._$bR()
          }, s = function() {};
          for (var u in s.prototype = (n || o).prototype,
            r.prototype = new s,
            t.prototype)
            e = t.prototype[u],
            Object.prototype[u] != e && "function" != typeof e && "_" !== u[0] && (r.prototype[u] = e);
          return t.prototype._$bR = function() {
            return this._$bS || (this._$bS = function(t) {
              var n = o.prototype;
              o.prototype = r.prototype;
              var i = new o(t);
              return o.prototype = n,
                i
            }(this)),
              this._$bS
          }
            ,
          i || o.exportStatic(t, r),
            r
        }
        ,
        t.$a = o
    }
    , function(t, n, i, e) {
      i(6),
      ya.music.lib || (ya.music.lib = {});
      var r = i(2)
        , o = i(17)
        , s = i(18)
        , u = function() {
        r.call(this)
      };
      u.prototype = s(r),
        u.mixin = r.mixin,
        u.eventize = r.eventize;
      var a = function() {
        o.apply(this, arguments)
      };
      a.prototype = s(o),
        a.create = o.create,
        ya.music.lib.Events = u,
        ya.music.lib.Error = a,
        ya.music.lib.Promise = i(11),
        ya.music.lib.Deferred = i(14),
        ya.music.lib.pureInstance = s,
        ya.music.lib.merge = i(3),
        ya.music.info = i(13)
    }
    , function(t, n, i, e) {
      i(6);
      var r = i(16)
        , o = i(22);
      ya.music.Audio.AudioError = r,
        ya.music.Audio.PlaybackError = o
    }
    , function(t, n, i, e) {
      i(6);
      var r = i(30);
      ya.music.Audio.LoaderError = r
    }
    , function(t, n, i, e) {
      i(6);
      var r = i(9);
      ya.music.Audio.Logger = r
    }
    , function(t, n, i, e) {
      i(37),
        ya.music.Audio.fx.Equalizer = i(38)
    }
    , function(t, n, i, e) {
      i(6),
        ya.music.Audio.fx = {}
    }
    , function(t, n, i, e) {
      var r = i(2)
        , o = i(3)
        , s = i(39)
        , u = i(40)
        , a = function(t, n) {
        var i = this;
        r.call(this);
        var e, o = i.preamp = new u(t,"highshelf",0);
        o.on("*", i._$bT.bind(i, o)),
          n = n || a.DEFAULT_BANDS,
          i.bands = n.map((function(r, s) {
              var a = new u(t,0 === s ? "lowshelf" : s + 1 < n.length ? "peaking" : "highshelf",r);
              return a.on("*", i._$bT.bind(i, a)),
                e ? e.filter.connect(a.filter) : o.filter.connect(a.filter),
                e = a,
                a
            }
          )),
          i.input = o.filter,
          i.output = i.bands[i.bands.length - 1].filter
      };
      a.DEFAULT_BANDS = i(41),
        a.DEFAULT_PRESETS = i(42),
        a.prototype = {
          _$bT: function(t, n, i) {
            this.trigger(n, t.getFreq(), i)
          },
          loadPreset: function(t) {
            t.bands.forEach(function(t, n) {
              this.bands[n].setValue(t)
            }
            .bind(this)),
              this.preamp.setValue(t.preamp)
          },
          savePreset: function() {
            return {
              preamp: this.preamp.getValue(),
              bands: this.bands.map((function(t) {
                  return t.getValue()
                }
              ))
            }
          },
          guessPreamp: function() {
            for (var t = this.bands, n = 0, i = 0, e = t.length; i < e; i++)
              n += t[i].getValue();
            return -n / 2
          }
        },
        r.mixin(a),
        o(a, s, !0),
        t.$a = a
    }
    , function(t, n, i, e) {
      var r = {
        EVENT_CHANGE: "change"
      };
      t.$a = r
    }
    , function(t, n, i, e) {
      var r = i(2)
        , o = i(39)
        , s = function(t, n, i) {
        r.call(this),
          this.type = n,
          this.frequency = i;
        var e = this.filter = t.createBiquadFilter();
        e.type = n,
          this.audioContext = t,
          "function" == typeof e.frequency.setValueAtTime ? (e.frequency.setValueAtTime(i, t.currentTime),
            e.Q.setValueAtTime(1, t.currentTime),
            e.gain.setValueAtTime(0, t.currentTime)) : (e.frequency.value = i,
            e.Q.value = 1,
            e.gain.value = 0)
      };
      s.prototype = {
        getConfigFreq: function() {
          return this.frequency
        },
        getFreq: function() {
          return this.filter.frequency.value
        },
        getValue: function() {
          return this.filter.gain.value
        },
        setValue: function(t) {
          var n = this.filter;
          "function" == typeof n.frequency.setTargetAtTime ? n.gain.setTargetAtTime(t, this.audioContext.currentTime, .01) : n.gain.value = t,
            this.trigger(o.EVENT_CHANGE, t)
        }
      },
        r.mixin(s),
        t.$a = s
    }
    , function(t, n, i, e) {
      t.$a = [60, 170, 310, 600, 1e3, 3e3, 6e3, 12e3, 14e3, 16e3]
    }
    , function(t, n, i, e) {
      t.$a = [{
        id: "default",
        preamp: 0,
        bands: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        id: "Classical",
        preamp: -.5,
        bands: [-.5, -.5, -.5, -.5, -.5, -.5, -3.5, -3.5, -3.5, -4.5]
      }, {
        id: "Club",
        preamp: -3.359999895095825,
        bands: [-.5, -.5, 4, 2.5, 2.5, 2.5, 1.5, -.5, -.5, -.5]
      }, {
        id: "Dance",
        preamp: -2.1599998474121094,
        bands: [4.5, 3.5, 1, -.5, -.5, -2.5, -3.5, -3.5, -.5, -.5]
      }, {
        id: "Full Bass",
        preamp: -3.5999999046325684,
        bands: [4, 4.5, 4.5, 2.5, .5, -2, -4, -5, -5.5, -5.5]
      }, {
        id: "Full Bass & Treble",
        preamp: -5.039999961853027,
        bands: [3.5, 2.5, -.5, -3.5, -2, .5, 4, 5.5, 6, 6]
      }, {
        id: "Full Treble",
        preamp: -6,
        bands: [-4.5, -4.5, -4.5, -2, 1, 5.5, 8, 8, 8, 8]
      }, {
        id: "Laptop Speakers / Headphone",
        preamp: -4.079999923706055,
        bands: [2, 5.5, 2.5, -1.5, -1, .5, 2, 4.5, 6, 7]
      }, {
        id: "Large Hall",
        preamp: -3.5999999046325684,
        bands: [5, 5, 2.5, 2.5, -.5, -2, -2, -2, -.5, -.5]
      }, {
        id: "Live",
        preamp: -2.6399998664855957,
        bands: [-2, -.5, 2, 2.5, 2.5, 2.5, 2, 1, 1, 1]
      }, {
        id: "Party",
        preamp: -2.6399998664855957,
        bands: [3.5, 3.5, -.5, -.5, -.5, -.5, -.5, -.5, 3.5, 3.5]
      }, {
        id: "Pop",
        preamp: -3.119999885559082,
        bands: [-.5, 2, 3.5, 4, 2.5, -.5, -1, -1, -.5, -.5]
      }, {
        id: "Reggae",
        preamp: -4.079999923706055,
        bands: [-.5, -.5, -.5, -2.5, -.5, 3, 3, -.5, -.5, -.5]
      }, {
        id: "Rock",
        preamp: -5.039999961853027,
        bands: [4, 2, -2.5, -4, -1.5, 2, 4, 5.5, 5.5, 5.5]
      }, {
        id: "Ska",
        preamp: -5.519999980926514,
        bands: [-1, -2, -2, -.5, 2, 2.5, 4, 4.5, 5.5, 4.5]
      }, {
        id: "Soft",
        preamp: -4.799999713897705,
        bands: [2, .5, -.5, -1, -.5, 2, 4, 4.5, 5.5, 6]
      }, {
        id: "Soft Rock",
        preamp: -2.6399998664855957,
        bands: [2, 2, 1, -.5, -2, -2.5, -1.5, -.5, 1, 4]
      }, {
        id: "Techno",
        preamp: -3.8399999141693115,
        bands: [4, 2.5, -.5, -2.5, -2, -.5, 4, 4.5, 4.5, 4]
      }]
    }
    , function(t, n, i, e) {
      i(37),
        ya.music.Audio.fx.volumeLib = i(44)
    }
    , function(t, n, i, e) {
      var r = {
        EPSILON: .01
      };
      r._$bU = 20 / Math.log(10),
        r.toExponent = function(t) {
          var n = Math.pow(r.EPSILON, 1 - t);
          return n > r.EPSILON ? n : 0
        }
        ,
        r.fromExponent = function(t) {
          return 1 - Math.log(Math.max(t, r.EPSILON)) / Math.log(r.EPSILON)
        }
        ,
        r.toDBFS = function(t) {
          return Math.log(t) * r._$bU
        }
        ,
        r.fromDBFS = function(t) {
          return Math.exp(t / r._$bU)
        }
        ,
        t.$a = r
    }
    , function(t, n, i, e) {
      var r = i(46)
        , o = "music.yandex.ru"
        , s = function(t) {
        return "true" === t
      }
        , u = s("false")
        , a = s("false")
        , c = /\.crowdtest\.yandex\.[a-z]{2,3}$/.test(document.location.hostname)
        , h = u && !c ? document.location.hostname : "music.yandex.ru"
        , f = /inspect/.test(document.location.hash)
        , l = {
        _$a: "https://music.yandex.ru/api/v2.1/",
        _$bV: o,
        _$bW: "/api/v2.1/",
        _$bX: a,
        _$bY: "https://passport.yandex.ru/",
        _$bZ: u,
        _$b1: o !== document.location.hostname,
        _$b2: f,
        _$b3: 7e3,
        _$b4: 3,
        _$b5: 1e3,
        _$b6: 300,
        _$b7: 18e5,
        _$b8: 3e4,
        logger: {
          _$b9: 1e3,
          _$b0: ""
        },
        net: {
          _$b_: r([400, 403, 404, 405, 410, 422]),
          _$ca: 434,
          _$cb: "Requested Host Unavailable"
        },
        audio: {
          _$b3: 5e3,
          _$b4: 2,
          _$b5: 500,
          _$b6: 0,
          _$b8: 1e4,
          start: {},
          preload: {}
        },
        track: {
          data: {
            _$b7: 0
          },
          populate: {
            _$b6: 0
          },
          info: {
            _$b5: 500,
            _$b7: 0
          },
          url: {
            _$b5: 500,
            _$b7: 0,
            _$b8: 1e4
          },
          init: {
            _$b3: 1e4,
            _$b4: 2,
            _$b5: 1e3,
            _$b7: 0,
            _$b8: 2e4
          },
          play: {
            _$b3: 3e4,
            _$b4: 2,
            _$b5: 1e3,
            _$b7: 0,
            _$b8: 1e4
          }
        },
        stream: {
          _$cc: "https://" + h + "/api/v2.1/hls.js",
          play: {
            _$b3: 5e3,
            _$b4: 2,
            _$b5: 1e3,
            _$b7: 0,
            _$b8: 1e4
          }
        },
        advert: {
          _$cd: "https://yastatic.net/awaps-ad-sdk-js/1_0/adsdk.min.js",
          _$ce: "https://yastatic.net/awaps-ad-sdk-js/1_0/banner_ad.min.js",
          _$cf: "https://an.yandex.ru/system/context.js",
          _$cg: "https://yastatic.net/awaps-ad-sdk-js/1_0/adsdk.min.js",
          _$ch: "https://yastatic.net/awaps-ad-sdk-js/1_0/banner_ad.min.js",
          _$ci: "https://an.yandex.ru/system/context.js",
          _$cj: /advert/,
          _$ck: /fakes/,
          _$cl: /noads/,
          _$cm: 15e3,
          partner: {
            _$b7: 216e5
          },
          data: {
            _$b3: 1e3,
            _$b4: 1,
            _$b5: 500,
            _$b6: 1,
            _$b7: 15e3,
            _$b8: 3e3
          },
          feedback: {}
        },
        feedback: {
          _$b7: 0,
          advert: {},
          radio: {},
          track: {
            send: {},
            retry: {
              _$b4: 20,
              _$b5: 5e3
            }
          }
        },
        source: {
          album: {},
          artist: {},
          playlist: {},
          radio: {
            _$b7: 0,
            init: {
              _$b4: 10
            },
            available: {},
            settings: {
              load: {},
              send: {}
            }
          }
        },
        core: {
          _$cn: 5,
          _$co: 1,
          _$cp: 1,
          _$cq: 1,
          user: {
            _$b7: 0,
            _$cr: 432e5,
            _$cs: 3e5
          },
          settings: {
            _$ct: "Ya_Music_Player_Type",
            _$cu: "Ya_Music_Player_Format",
            _$cv: "Ya_Music_Player_HQ",
            _$cw: "Ya_Music_Player_Volume",
            _$cx: "Ya_Music_Player_Speed",
            _$cy: "Ya_Music_Player_Volume_Gamma",
            _$cz: "Ya_Music_Player_Equalizer",
            _$cA: "Ya_Music_Player_CD",
            _$cB: .5,
            _$cC: 1
          },
          queue: {
            _$cD: 50,
            _$cE: 25,
            _$cF: 25
          }
        },
        player: {
          audio: {
            _$cG: 1e-4,
            _$cH: .7,
            _$cI: .7,
            _$cJ: .5,
            _$cK: 2
          }
        },
        cross_tabs: {
          _$cL: "Ya_Music_Player_ID",
          _$cM: 500
        },
        sandman: {
          _$cN: 5e3,
          _$cO: 2e4
        },
        skips: {
          _$cP: 2e3
        },
        crackdown: {
          _$cQ: 216e5,
          _$cR: 18e5,
          _$cS: 864e5
        },
        xstorage: {
          _$cT: h,
          _$b3: 3e3,
          _$cU: 3e4
        },
        experiments: {
          _$b3: 5e3,
          _$b7: 3e4,
          _$b6: 10
        }
      };
      if (l._$cV = /crackdown/.test(document.location.hash),
        l._$cV) {
        l.crackdown._$cR = 5e3,
          l.crackdown._$cS = 6e4,
          l.crackdown._$cW = /crackdownMouse/.test(document.location.hash);
        var d = document.location.hash.match(/crackdown-([\w-]*)/);
        d && (l.crackdown._$cX = parseInt(d[1], 10))
      }
      if (a) {
        var v = /advert=(\w*)/.exec(document.location.hash);
        v = v && ({
          audio: 139316,
          video: 201963,
          empty: 201964,
          promo: 210654
        }[v[1]] || v[1]),
          l.advert._$cY = v
      }
      t.$a = l
    }
    , function(t, n, i, e) {
      var r = i(47);
      t.$a = function(t) {
        return t.forEach((function(t) {
            r[t] = !0
          }
        )),
          r
      }
    }
    , function(t, n, i, e) {
      t.$a = function() {
        var t;
        try {
          t = Object.create(null)
        } catch (n) {
          t = {}
        }
        return t
      }
    }
    , function(t, n, i, e) {
      var r = i(49);
      i(50),
      r.lib || (r.lib = {}),
        (r = r.lib).trackId = i(51),
        r.trackInfo = i(52),
        r.badTrack = i(53),
        t.$a = r
    }
    , function(t, n, i, e) {
      void 0 === window.ya && (window.ya = {});
      var r = window.ya;
      r.music || (r.music = {}),
        t.$a = r.music
    }
    , function(t, n, i, e) {
      var r, o, s, u;
      !window.addEventListener && (r = Window.prototype,
          o = HTMLDocument.prototype,
          s = Element.prototype,
          u = [],
          r.addEventListener = o.addEventListener = s.addEventListener = function(t, n) {
            var i = this;
            u.unshift([i, t, n, function(t) {
              t.currentTarget = i,
                t.preventDefault = function() {
                  t.returnValue = !1
                }
                ,
                t.stopPropagation = function() {
                  t.cancelBubble = !0
                }
                ,
                t.target = t.srcElement || i,
              n && n.call && n.call(i, t)
            }
            ]),
              this.attachEvent("on" + t, u[0][3])
          }
          ,
          r.removeEventListener = o.removeEventListener = s.removeEventListener = function(t, n) {
            for (var i, e = 0; i = u[e]; ++e)
              if (i[0] == this && i[1] == t && i[2] == n)
                return this.detachEvent("on" + t, u.splice(e, 1)[0][3])
          }
          ,
          r.dispatchEvent = o.dispatchEvent = s.dispatchEvent = function(t) {
            return this.fireEvent("on" + t.type, t)
          }
      ),
      Function.prototype.bind || (Function.prototype.bind = function(t) {
          if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          var n = Array.prototype.slice.call(arguments, 1)
            , i = this
            , e = function() {}
            , r = function() {
            return i.apply(this instanceof e && t ? this : t, n.concat(Array.prototype.slice.call(arguments)))
          };
          return e.prototype = this.prototype,
            r.prototype = new e,
            r
        }
      ),
      Object.keys || (Object.keys = function() {
        "use strict";
        var t = Object.prototype.hasOwnProperty
          , n = !{
          toString: null
        }.propertyIsEnumerable("toString")
          , i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , e = i.length;
        return function(r) {
          if ("object" != typeof r && ("function" != typeof r || null === r))
            throw new TypeError("Object.keys called on non-object");
          var o, s, u = [];
          for (o in r)
            t.call(r, o) && u.push(o);
          if (n)
            for (s = 0; s < e; s++)
              t.call(r, i[s]) && u.push(i[s]);
          return u
        }
      }()),
      Array.prototype.indexOf || (Array.prototype.indexOf = function(t, n) {
          var i;
          if (null == this)
            throw new TypeError('"this" is null or not defined');
          var e = Object(this)
            , r = e.length >>> 0;
          if (0 === r)
            return -1;
          var o = +n || 0;
          if (Math.abs(o) === 1 / 0 && (o = 0),
          o >= r)
            return -1;
          for (i = Math.max(o >= 0 ? o : r - Math.abs(o), 0); i < r; ) {
            if (i in e && e[i] === t)
              return i;
            i++
          }
          return -1
        }
      ),
      Array.prototype.forEach || (Array.prototype.forEach = function(t, n) {
          var i, e;
          if (null == this)
            throw new TypeError(" this is null or not defined");
          var r = Object(this)
            , o = r.length >>> 0;
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          for (arguments.length > 1 && (i = n),
            e = 0; e < o; ) {
            var s;
            e in r && (s = r[e],
              t.call(i, s, e, r)),
              e++
          }
        }
      ),
      Array.prototype.map || (Array.prototype.map = function(t, n) {
          var i, e, r;
          if (null == this)
            throw new TypeError(" this is null or not defined");
          var o = Object(this)
            , s = o.length >>> 0;
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          for (arguments.length > 1 && (i = n),
            e = new Array(s),
            r = 0; r < s; ) {
            var u, a;
            r in o && (u = o[r],
              a = t.call(i, u, r, o),
              e[r] = a),
              r++
          }
          return e
        }
      ),
      Array.prototype.filter || (Array.prototype.filter = function(t) {
          "use strict";
          if (null == this)
            throw new TypeError;
          var n = Object(this)
            , i = n.length >>> 0;
          if ("function" != typeof t)
            throw new TypeError;
          for (var e = [], r = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < i; o++)
            if (o in n) {
              var s = n[o];
              t.call(r, s, o, n) && e.push(s)
            }
          return e
        }
      ),
      Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        enumerable: !1,
        configurable: !0,
        value: function(t) {
          if (null == this)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if ("function" != typeof t)
            throw new TypeError("predicate must be a function");
          for (var n, i = Object(this), e = i.length >>> 0, r = arguments[1], o = 0; o < e; o++)
            if (n = i[o],
              t.call(r, n, o, i))
              return n
        }
      }),
      "undefined" == typeof console && (console = {}),
      "function" != typeof console.log && (console.log = function() {}
      ),
      "function" != typeof console.info && (console.info = console.log),
      "function" != typeof console.warn && (console.warn = console.log),
      "function" != typeof console.error && (console.error = console.log),
      "function" != typeof console.debug && (console.debug = console.log)
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        if (!(t instanceof Object))
          return "" + t;
        var n = t.albumId || t.albums && t.albums[0] && t.albums[0].id;
        return t.id + (n ? ":" + n : "")
      }
    }
    , function(t, n, i, e) {
      t.$a = function(t, n) {
        var i, e, r, o = !1;
        if (t instanceof Object)
          i = t.id,
            e = t.albumId || t.albums && t.albums[0] && t.albums[0].id,
            r = n || t.artists && t.artists[0] && t.artists[0].id;
        else {
          var s = ("" + t).split(":");
          "yadisk" === s[0] ? (i = "" + t,
            o = !0) : s.length < 2 ? i = s[0] : (e = s.pop(),
            i = s.join(":"))
        }
        return n ? {
          id: i,
          albumId: e,
          yaDisk: o
        } : {
          id: i,
          albumId: e,
          artistId: r,
          yaDisk: o
        }
      }
    }
    , function(t, n, i, e) {
      t.$a = function(t, n) {
        n = !!n;
        var i = !!(t instanceof Object);
        return (!n || i) && (!i || !!t.error || !1 === t.available || !1 === t.embedPlayback)
      }
    }
    , function(t, n, i, e) {
      var r = i(49)
        , o = i(9)
        , s = i(55)
        , u = i(61);
      o.log = function() {
        s.log.apply(s, arguments)
      }
        ,
        o.showUrl = s.showUrl,
        r.Logger = {
          dump: s.dump.bind(s, ["error", "warn", "log", "info"]),
          send: u
        }
    }
    , function(t, n, i, e) {
      var r = i(56)("logger")
        , o = i(57)
        , s = i(58)
        , u = i(59)
        , a = i(61).error
        , c = ["error", "warn", "log", "info"];
      r._$bZ && r._$cZ && c.push("debug", "trace");
      var h = function(t) {
        if (!(this instanceof h))
          return new h(t);
        this.channel = t
      };
      h.ignores = {},
        h.log = function(t, n, i) {
          if (r._$bZ || "debug" !== t) {
            var e = [].slice.call(arguments, 3).map((function(t) {
                if (t && t._$w && (t = t._$w()),
                "function" == typeof t && (t = "[[function]]"),
                "msie" === s.browser.name || "edge" === s.browser.name)
                  try {
                    t = JSON.stringify(t)
                  } catch (t) {}
                return t
              }
            ))
              , o = i && (i.name || i._$c1);
            if (i && i._$w && (i = i._$w()),
            "msie" === s.browser.name || "edge" === s.browser.name)
              try {
                i = JSON.stringify(i)
              } catch (t) {}
            o = o || i && (i.name || i._$c1),
            "function" == typeof i && (i = "[[function]]");
            var u = {
              name: o,
              timestamp: +new Date,
              level: t,
              channel: n,
              context: i,
              message: e
            };
            h.logs.unshift(u),
            h.logs.length > r._$b9 && (h.logs.length = r._$b9),
            h.ignores[n] || (r._$b2 && "debug" !== t || r._$cZ || "error" === t) && h._$x.call(this, u)
          }
        }
        ,
        h.logs = [],
        h.prototype.show = h.prototype.debug = h.prototype.trace = o,
        c.forEach((function(t) {
            h.prototype[t] = function() {
              var n = [].slice.call(arguments);
              n.unshift(this.channel),
                n.unshift(t),
                h.log.apply(this, n)
            }
          }
        )),
        h.prototype._$q = function(t) {
          return h.showUrl(t)
        }
      ;
      var f = /^(([^:]*:)?\/\/[^\/?#]*).*$/;
      h.showUrl = function(t) {
        return (t || "").replace(f, "$1")
      }
        ,
        h._$y = function(t) {
          var n = new Date(t)
            , i = n.getMilliseconds();
          i = i > 100 ? i : i > 10 ? "0" + i : "00" + i;
          var e = n.getDate();
          return (e = e > 10 ? e : "0" + e) + " " + n.toLocaleTimeString() + "." + i
        }
        ,
        h._$x = function(t, n) {
          var i = t.level
            , e = t.name
            , r = t.context;
          if (n)
            return [i.toUpperCase(), h._$y(t.timestamp), "[" + t.channel + (e ? ":" + e : "") + "]"].concat(t.message.map(u));
          var o = [h._$y(t.timestamp), "[" + t.channel + (e ? ":" + e : "") + "]", t.message[0], r];
          if ("function" != typeof console[i] && (o.unshift(i.toUpperCase()),
            i = "log"),
            console[i].apply(console, o.concat(t.message.slice(1))),
          "error" === i) {
            var s = {
              type: "api",
              channel: t.channel + (e ? ":" + e : ""),
              message: t.message.shift()
            };
            t.message[t.message.length - 1]instanceof Error && (s.error = JSON.stringify(u.serializeError(t.message.pop(), !0))),
              s.data = JSON.stringify(t.message.map(u)),
              a(s)
          }
        }
        ,
        h._$c2 = function(t, n) {
          return h.logs.filter((function(i) {
              return !(t && -1 === t.indexOf(i.level) || n && -1 === n.indexOf(i.channel))
            }
          ))
        }
        ,
        h.dump = function(t, n) {
          return h._$c2(t, n).reverse().map((function(t) {
              return h._$x(t, !0).join(" ")
            }
          ))
        }
        ,
        t.$a = h
    }
    , function(t, n, i, e) {
      var r = i(45)
        , o = function(t, n) {
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            if (n[i]instanceof Object && "_" !== i[0] && !Array.isArray(n[i]) && !(n[i]instanceof RegExp))
              continue;
            t[i] = n[i]
          }
        return t
      };
      t.$a = function(t) {
        for (var n = t.split("."), i = r, e = o({}, i); n.length && (i = i[n.shift()]); )
          e = o(e, i);
        return e
      }
    }
    , function(t, n, i, e) {
      t.$a = function() {}
    }
    , function(t, n, i, e) {
      t.$a = i(13)
    }
    , function(t, n, i, e) {
      var r = i(60)
        , o = function(t, n) {
        var i = r({}, t, !0);
        return delete i.name,
          delete i.message,
          delete i.stack,
          [t.name + ": " + t.message, n ? i : JSON.stringify(i)]
      }
        , s = function(t, n) {
        return n instanceof Object ? -1 !== t.indexOf(n) ? "<recursion>" : (t.push(n),
          "function" == typeof n ? "<function>" : n instanceof HTMLElement ? "<DOMObject>" : n instanceof Error ? o(n) : n instanceof Array ? "[" + n.filter((function(t) {
              return "function" != typeof t
            }
          )).map(s.bind(null, t)).join(", ") + "]" : "{" + Object.keys(n).filter((function(t) {
              return n.hasOwnProperty(t) && "function" != typeof n[t]
            }
          )).map((function(i) {
              return '"' + i + '":' + s(t, n[i])
            }
          )).join(", ") + "}") : n
      };
      (t.$a = function(t) {
          try {
            return s([], t)
          } catch (n) {
            return t.toString()
          }
        }
      ).serializeError = o
    }
    , function(t, n, i, e) {
      t.$a = i(3)
    }
    , function(t, n, i, e) {
      var r = i(62);
      t.$a = {
        error: function(t) {
          if (!window.Ya || !Ya.Rum || !Ya.Rum.logError)
            return;
          const n = {
            message: t.message,
            type: t.type,
            source: t.type
          };
          window.Ya.Rum.logError(n)
        },
        stats: function(t) {
          "on" === r.experiments.musicStatsLogger && window.Ya && Ya.Rum && Ya.Rum.logError && Ya.Rum.sendTimeMark(t)
        },
        startMark: function(t) {
          "on" === r.experiments.musicStatsLogger && window.Ya && Ya.Rum && Ya.Rum.time && Ya.Rum.time(t)
        },
        endMark: function(t) {
          "on" === r.experiments.musicStatsLogger && window.Ya && Ya.Rum && Ya.Rum.timeEnd && Ya.Rum.timeEnd(t)
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(63)
        , o = i(1)
        , s = i(64)
        , u = t.$a = o.eventize({
        csrf: "",
        device_id: r.load("device_id", !1),
        uid: null,
        login: null,
        yandexuid: null,
        logged: !1,
        premium: !1,
        badRegion: !1,
        lang: "ru",
        notFree: !1,
        timestamp: (new Date).valueOf(),
        localTimestamp: (new Date).valueOf(),
        experiments: {},
        _$c3: new s,
        getTimestamp: function() {
          return (new Date).valueOf() - u.localTimestamp + u.timestamp
        }
      });
      u._$c4 = "update"
    }
    , function(t, n, i, e) {
      var r = i(59)
        , o = "." + document.location.hostname.split(".").slice(-2).join(".")
        , s = null != window.Mu && null != Mu.settings && Mu.settings.uatraits && Mu.settings.uatraits.SameSiteSupport ? "; SameSite=None; Secure" : "";
      n.store = function(t, n, i) {
        try {
          document.cookie = t + "=" + (i ? r : JSON.stringify)(n) + ";domain=" + o + ";path=/" + s
        } catch (t) {
          return !1
        }
        return !0
      }
        ,
        n.load = function(t, n) {
          try {
            var i = document.cookie.match(new RegExp(t + "=([^;]*)"));
            return i = i && i[1],
            n || (i = i && JSON.parse(i)),
              i
          } catch (t) {
            return ""
          }
        }
    }
    , function(t, n, i, e) {
      t.$a = i(14)
    }
    , function(t, n, i, e) {
      var r = i(49)
        , o = i(66).$b
        , s = i(105)
        , u = i(181)
        , a = i(182)
        , c = i(178)
        , h = i(157)
        , f = i(136)
        , l = i(174)
        , d = i(183)
        , v = i(184)
        , _ = i(185)
        , p = i(186);
      r.Player = o,
        r.user = v,
        r.experiments = _,
        r.data = p,
        (r = r.Player).settings = d,
        r.playerEvents = s,
        r.playerStates = u,
        r.playerTasks = a,
        r.sourceEvents = h,
        r.sourceTypes = f,
        r.repeatTypes = l,
        r.audioEvents = c
    }
    , function(t, n, i, e) {
      var r = new (i(55))("Player")
        , o = i(67)
        , s = i(68)
        , u = i(1)
        , a = i(69)
        , c = i(57)
        , h = i(70)
        , f = i(71)
        , l = i(72)
        , d = i(175).Source
        , v = i(177).Audio
        , _ = i(179)
        , p = i(180)
        , m = i(171)
        , A = i(105)
        , y = i(157)
        , w = i(181)
        , g = i(182)
        , k = i(95)
        , E = i(136)
        , b = function(t) {
        var n = this;
        u.call(n),
          t = t || {},
          n._$c5 = w.INIT,
          n._$c6 = new l(this,t.type,t.overlay,t.streamRequired),
          n._$c7 = this._$c6._$c7,
          n._$c8 = new p(n),
          n._$c9 = new d(n),
          n._$c0 = new v(n),
          n._$c_ = new _(n),
          n._$c6._$da().then((function() {
              n._$m()
            }
          ), (function() {
              n._$m(w.FAILED)
            }
          )),
          n._$c6._$b("*", this._$db.bind(this)),
          n._$c6._$dd._$dc._$b(a.EVENT_STATE, this._$m.bind(this, null))
      };
      b.prototype = {
        _$w: function() {
          return {
            state: this._$c5
          }
        },
        _$db: function(t, n, i, e) {
          switch (this._$m(),
            t) {
            case A.TRACK_READY:
              this._$d(A.TRACK, n);
              break;
            case A.TRACK_END:
            case A.TRACK_ERROR:
              this._$d(A.TRACK, !1);
              break;
            case A.ADVERT_READY:
              this._$d(A.ADVERT, e);
              break;
            case A.ADVERT_END:
            case A.ADVERT_ERROR:
              this._$d(A.ADVERT, !1);
              break;
            case A.COMMON_START:
              this._$d(A.COMMON, !0);
              break;
            case A.COMMON_END:
            case A.COMMON_ERROR:
              this._$d(A.COMMON, !1);
              break;
            case A.SOURCE:
              this._$c9._$de();
              break;
            case y.EMOTION:
              return void this._$c9._$d(y.EMOTION, n, i);
            case l._$df:
              return void this._$m()
          }
          try {
            this._$d.apply(this, arguments)
          } catch (n) {
            r.error(this, "event error", t, n)
          }
        },
        _$m: function(t) {
          null == t && (t = this._$c5 === w.FAILED ? w.FAILED : this.isReady() ? this._$c6._$dg(l._$dh) || this._$c6._$dg(l._$di) ? this._$c6._$dd._$dj() ? w.PAUSED : w.PLAYING : w.IDLE : w.INIT),
          this._$c5 !== t && (this._$c5 = t,
            this._$d(A.STATE, t))
        },
        isReady: function() {
          return this._$c6._$dk()
        },
        readyPromise: function() {
          return this._$c6._$da()
        },
        forceAuth: function() {
          this._$c6._$dl()
        },
        getState: function() {
          return this._$c5
        },
        isPlaying: function() {
          return this._$c5 === w.PLAYING
        },
        isPaused: function() {
          return this._$c5 === w.PAUSED
        },
        getCurrentTask: function() {
          return this._$c6._$dg(l._$di) ? g.SOURCE : this._$c6._$dg(l._$dm) ? g.COMMON : this._$c6._$dg(l._$dn) ? g.ADVERT : this._$c6._$dg(l._$do) ? g.TRACK : this._$c6._$dg(l._$dp) ? g.STREAM : this._$c6._$dg(l._$dh) ? g.PLAY : w.IDLE
        },
        getTrack: function() {
          var t = this._$c6._$dq(l._$do);
          return t ? t._$dr : null
        },
        getAdvert: function() {
          var t = this._$c6._$dq(l._$dn);
          return t ? t._$dt._$ds : null
        },
        advertClick: function() {
          this._$c6._$du()
        },
        allowVideoAdvert: function(t) {
          this._$c6._$dv(t)
        },
        getJingle: function() {
          var t = this._$c6._$dq(l._$dm);
          return t && t._$c9._$dw ? t._$c9._$dw : null
        },
        stopJingle: m._$dx(f(h((function() {
            if (this.getJingle()) {
              var t = this._$c6._$dg(l._$dm);
              return t && t._$dy(new k("skip-jingle")),
                t.catch(c)
            }
            return null
          }
        )))),
        play: m._$dx(f(h((function(t, n) {
            var i;
            return r.info(this, "play", !!t, t && t.index, n),
              i = t ? this.setSource(t).then(function() {
                return this._$c6._$bA(t.type === E.RADIO || t.type === E.STREAM ? null : n)._$dz
              }
              .bind(this)) : this._$c6._$bA(n)._$dz,
              this._$c8._$C(),
              this._$c6._$dd._$dA(!1),
              this._$c0.toggleMute(!1),
              i
          }
        )))),
        setSource: m._$dx(f((function(t) {
            return this._$c6._$dB(t)
          }
        ))),
        stop: m._$dx(f((function() {
            return r.info(this, "stop"),
              this.isReady() ? (this._$c6._$c9 && (this._$c6._$c9._$dC = !0),
                this._$c6._$dD().catch(c)) : s.resolve()
          }
        ))),
        playCommon: m._$dx(f(h((function(t, n) {
            return this._$c0.toggleMute(!1),
              this._$c6._$dE(t, n)
          }
        )))),
        stopCommon: m._$dx(f(h((function() {
            var t = this._$c6._$dg(l._$dm);
            return t && t._$dy(new k("stop")),
              t.catch(c)
          }
        )))),
        audio: function() {
          return this._$c0._$bR()
        },
        source: function() {
          return this._$c9._$bR()
        },
        observer: function() {
          return this._$c_
        },
        destroy: function() {
          this.clearListeners(),
            this._$c6._$dF(),
            this._$c0._$dF(),
            this._$c9._$dF(),
            delete this._$c6,
            delete this._$c0,
            delete this._$c9,
            delete this._$c5
        }
      },
        u.mixin(b),
        n.Player = b,
        n.$b = o.createClass(b)
    }
    , function(t, n, i, e) {
      t.$a = i(31)
    }
    , function(t, n, i, e) {
      var r = i(11);
      "function" != typeof window.Promise && (window.Promise = r),
        t.$a = r
    }
    , function(t, n, i, e) {
      var r = i(1)
        , o = i(64)
        , s = function(t) {
        r.call(this),
          this._$c5 = t || !1,
          this._$dG = t || !1,
          this._$dH = null,
          this._$dI = [],
          this._$dJ = this._$dK.bind(this)
      };
      s.EVENT_STATE = "state",
        s.prototype = {
          _$dK: function() {
            var t = this.isLocked();
            t !== this._$dG && (t ? (this._$dL && this._$dL.resolve(),
              delete this._$dM) : (this._$dM && this._$dM.resolve(),
              delete this._$dL),
              this._$dG = t,
              this._$d(s.EVENT_STATE, t))
          },
          inverted: function() {
            return this._$dH || (this._$dH = new u(this)),
              this._$dH
          },
          isLocked: function() {
            var t = this._$c5;
            if (t)
              return t;
            for (var n = 0, i = this._$dI.length; n < i; n++)
              if (t = t || this._$dI[n].isLocked())
                return !0;
            return t
          },
          toggle: function(t) {
            return null == t && (t = !this._$c5),
              this._$c5 === t ? this : (this._$c5 = t,
                this._$dK(),
                this)
          },
          add: function(t) {
            return this._$dI.push(t),
              t._$b(s.EVENT_STATE, this._$dJ),
              this._$dJ(),
              this
          },
          remove: function(t) {
            var n = this._$dI.indexOf(t);
            return -1 !== n && (this._$dI.splice(n, 1),
              t.off(s.EVENT_STATE, this._$dJ),
              this._$dK()),
              this
          },
          promiseLock: function() {
            return this._$dL || (this._$dL = new o,
            this.isLocked() && this._$dL.resolve()),
              this._$dL.promise()
          },
          promiseUnlock: function() {
            return this._$dM || (this._$dM = new o,
            this.isLocked() || this._$dM.resolve()),
              this._$dM.promise()
          }
        },
        r.mixin(s);
      var u = function(t) {
        r.call(this),
          this._$dN = t,
          this._$dN._$b(s.EVENT_STATE, function(t) {
            this._$d(s.EVENT_STATE, !t)
          }
          .bind(this))
      };
      u.prototype = {
        inverted: function() {
          return this._$dN
        },
        isLocked: function() {
          return !this._$dN.isLocked()
        },
        toggle: function(t) {
          return this._$dN.toggle(null == t ? null : !t)
        },
        add: function(t) {
          return this._$dN.add(t.inverted())
        },
        remove: function(t) {
          return this._$dN.remove(t.inverted())
        },
        promiseLock: function() {
          return this._$dN.promiseUnlock()
        },
        promiseUnlock: function() {
          return this._$dN.promiseLock()
        }
      },
        r.mixin(u),
        t.$a = s
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        return function() {
          if (!this.isReady())
            throw new Error("Is not ready. Check for .isReady() or use .readyPromise()");
          return t.apply(this, arguments)
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68);
      t.$a = function(t) {
        return function() {
          var n = this
            , i = arguments
            , e = new o((function(e, r) {
              var o = t.apply(n, i);
              o && o.then || e(),
                o.then((function() {
                    e()
                  }
                ), r)
            }
          ));
          return e.catch(r),
            e
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(55)
        , o = i(61)
        , s = new r("Core")
        , u = i(56)
        , a = u("core")
        , c = u("source.radio.init")
        , h = i(73)
        , f = i(57)
        , l = i(60)
        , d = i(1)
        , v = i(68)
        , _ = i(64)
        , p = i(74)
        , m = i(81)
        , A = i(75)
        , y = i(76)
        , w = i(82)
        , g = i(77)
        , k = i(78)
        , E = i(83)
        , b = i(62)
        , T = i(87)
        , P = i(126)
        , q = i(127)
        , S = i(109)
        , C = i(128)
        , R = i(130)
        , x = i(137)
        , D = i(138)
        , I = i(51)
        , M = i(53)
        , O = i(113)
        , N = i(139)
        , V = i(140)
        , L = i(147)
        , F = i(150)
        , j = i(152)
        , U = i(154)
        , Y = i(144)
        , H = i(155)
        , B = i(123)
        , K = i(156)
        , W = i(105)
        , J = i(157)
        , z = i(19)
        , Q = i(158)
        , G = i(167)
        , $ = i(111)
        , X = i(171)
        , Z = i(172)
        , tt = i(173)
        , nt = i(122)
        , it = i(95)
        , et = i(98)
        , rt = i(136)
        , ot = i(174)
        , st = 1
        , ut = 1
        , at = 1
        , ct = function(t) {
        var n = t._$c9._$dO
          , i = n._$dP();
        return n._$dQ !== ot.ONE || i.disliked || "+" !== t._$dR && "-" !== t._$dR ? "+" === t._$dR ? n._$dS() : "-" === t._$dR ? n._$dT() : t._$dR < -1 ? n._$dU(-t._$dR) : t._$dR : n._$dR
      }
        , ht = function() {
        return (new Date).valueOf()
      }
        , ft = function(t, n, i, e) {
        var r = this;
        d.call(r),
          r._$c1 = ut++,
          r._$dd = new Q(r,n,i,e),
          r._$c7 = new X(this),
          r._$dV = new Z(this),
          r._$dW = new tt,
          r._$c9 = r._$dX({
            type: rt.COMMON
          }),
          r._$dY = !1,
          r._$c3 = new _,
          v.all([r._$dd._$da(), $._$da()]).then((function() {
              r._$dY = !0,
                r._$c3.resolve(),
                s.info(r, "initReady")
            }
          )),
          r._$dZ = {},
          r._$d1 = {},
          r._$d2 = r._$d3.bind(r)
      }
        , lt = ft._$dh = "play"
        , dt = ft._$dp = "stream"
        , vt = ft._$do = "track"
        , _t = ft._$dn = "advert"
        , pt = ft._$dm = "common"
        , mt = ft._$di = "source"
        , At = ft._$df = "task_event";
      ft._$dB = m({
        create: {
          _$d1: function(t) {
            var n = t._$c6
              , i = n._$c9
              , e = n._$dX(t._$d4);
            return t._$c9 = e,
              t._$dO = e._$dO,
              void 0 === t._$d4.index ? t._$c9._$d5 = !0 : t._$c9._$d5 = !1,
              n._$d6(e) ? e._$d7 === rt.RADIO || e._$d7 === rt.STREAM ? "doNothing" : (e._$n = i._$n,
                e._$d4 = l(i._$d4, e._$d4),
                e._$d8 = l(i._$d8, e._$d8),
                e._$d9 ? t._$dO = e._$dO = i._$dO : e._$dO._$d0(i._$dO),
                e._$dO._$d_(t._$d4.index),
              e._$n || v.resolve()) : "init"
          },
          _$ea: "setSource"
        },
        init: {
          _$d1: function(t) {
            var n = t._$c6
              , i = t._$c9
              , e = i._$d7
              , r = i._$d8;
            if (i._$eb = e === rt.RADIO || e === rt.COLLA || e === rt.PLAYLIST && (!r.uid || !r.login),
            i._$eb || i._$ec || i._$d9)
              switch (e) {
                case rt.STREAM:
                  i._$n = N(n._$ed(i));
                  break;
                case rt.RADIO:
                  t._$d4.station && (i._$d4.station = t._$d4.station),
                    i._$n = V(n._$ed(i));
                  break;
                case rt.ALBUM:
                  i._$n = L(n._$ed(i));
                  break;
                case rt.ARTIST:
                  i._$n = F(n._$ed(i));
                  break;
                case rt.PLAYLIST:
                  i._$n = j(n._$ed(i));
                  break;
                case rt.COLLA:
                  i._$n = U(n._$ed(i))
              }
            return i._$n = i._$n || v.resolve(),
              i._$n
          },
          _$ea: function(t) {
            var n = t._$c9._$d4;
            if (n && n.prerolls && n.prerolls.length) {
              var i = n.prerolls[0];
              delete n.prerolls,
                t._$c9._$dw = {
                  id: i.id,
                  src: i.link,
                  duration: i.duration
                }
            }
            return t._$dO._$ee(!0) ? "populate" : "setSource"
          }
        },
        populate: {
          _$d1: function(t) {
            -1 === t._$dO._$dR && t._$dO._$d_(0, !0);
            var n = t._$dO._$dP();
            return n.id || n.src ? v.resolve() : t._$dO._$ef(null, null, null, !0)
          },
          _$ea: "setSource"
        },
        setSource: {
          _$d1: function(t) {
            return t._$c6._$c9 && t._$c6._$dD(new it("Source change")),
              t._$c6._$c9 = t._$c9,
              t._$c6._$d(W.SOURCE, t._$c9._$d7),
              t._$c6._$c7._$eg(),
              v.resolve()
          }
        },
        doNothing: {
          _$d1: function() {
            return v.resolve()
          }
        }
      }, "create"),
        ft._$dR = k(m({
          radioCheck: {
            _$d1: y((function(t) {
                if (t._$eh) {
                  if (null == ct(t))
                    return Y(t);
                  t._$c9._$dO._$ee() - ct(t) - 1 < t._$d8.storeAfter && Y(t)
                }
                return v.resolve()
              }
            ), {
              _$b9: c._$b4,
              _$cS: c._$b5,
              _$ei: p._$ei
            }),
            _$ea: "tracksPopulate"
          },
          tracksPopulate: {
            _$d1: function(t) {
              var n = t._$c9._$dO
                , i = ct(t)
                , e = n._$ej()[i];
              return e ? e.id || e.src ? v.resolve() : n._$ef(n._$dU(i, !0), null, null, !0) : (n._$ej().length > 0 && (s.info(t._$c6, "sourceEnd"),
                t._$c6._$d(W.END)),
                h(new it("No track to play")))
            }
          }
        }, "radioCheck"), [{
          _$ek: A,
          _$ea: function(t) {
            var n = t._$c9._$dO
              , i = ct(t)
              , e = n._$ej()[i];
            if (M(e))
              throw new Error("Track unavailable");
            return n._$d_(i),
              i
          }
        }, {
          _$ek: w,
          _$el: function(t) {
            return t._$c9._$c1
          }
        }, {
          _$ek: g,
          _$el: function(t) {
            return t._$c9._$c1 + ":" + t._$dR
          },
          _$cS: 0
        }]),
        ft._$bA = w(m({
          init: {
            _$d1: function(t) {
              var n = t._$c9._$dO._$dP();
              return t._$c6._$dV._$em(n) ? (t._$c6._$d(W.FORCE_AUTH, t._$c6._$dV._$en),
                h(new it("Auth forced"))) : t._$c9._$n || "index"
            },
            _$ea: "index"
          },
          index: {
            _$d1: function(t) {
              return rt.STREAM === t._$c9._$d7 ? v.resolve() : (null == t._$dR && (t._$dR = t._$c9._$dO._$eo()),
                ft._$dR(t))
            },
            _$ea: function(t) {
              return !b.experiments || "on" !== b.experiments.musicSessionPreroll || b.premium || t._$c6._$dW._$ep() ? t._$c9._$dw && t._$c9._$d5 ? "jingle" : "play" : "advert"
            }
          },
          advert: {
            _$d1: function(t) {
              return t._$dt._$eq = {
                adVolume: -25,
                categoryId: "0",
                pageRef: "http://music.yandex.ru",
                targetRef: "http://music.yandex.ru",
                partnerId: 289448
              },
                t._$dt._$er = {
                  _$es: !0,
                  _$bA: !0
                },
                t._$dr = t._$c9._$dO._$dP(),
                t._$c6._$et(t)
            },
            _$ea: "play",
            _$eu: "play"
          },
          jingle: {
            _$d1: C,
            _$ea: "play",
            _$eu: "play"
          },
          play: {
            _$d1: function(t) {
              return t._$ev ? v.resolve().then((function() {
                  t._$c6._$bA("+"),
                    t._$c6._$dd._$dA(!1)
                }
              )) : rt.STREAM === t._$c9._$d7 ? (t._$ew = t._$c9._$d8,
                t._$c6._$ex(t)) : (t._$dr = t._$c9._$dO._$dP(),
                t._$c6._$ey(t))
            }
          }
        }, "init"), {
          _$el: function() {
            return "single"
          }
        }),
        ft._$ez = function() {
          return {
            _$c1: this._$c1,
            track: I(this._$dr),
            from: this._$eA,
            source: this._$c9._$d7 + ":" + JSON.stringify(this._$c9._$d8)
          }
        }
        ,
        ft.prototype = {
          _$w: function() {
            return {
              _$c1: this._$c1,
              source: this._$c9._$d7 + ":" + JSON.stringify(this._$c9._$d8)
            }
          },
          _$dF: function() {
            this._$c1 && (this.clearListeners(),
              delete this._$c1,
              this._$dd._$dF(),
              delete this._$dd,
            this._$c9 && this._$c9._$dO._$dF(),
              delete this._$c9,
              delete this._$c3,
              delete this._$dY,
              delete this._$dZ,
              delete this._$d1)
          },
          _$dk: function() {
            return this._$dY
          },
          _$da: function() {
            return this._$c3.promise()
          },
          _$dl: function() {
            this._$dV._$eB()
          },
          _$d3: function() {
            s.info(this, "autoNext");
            var t = this._$c9._$dO._$eC()
              , n = this._$c7._$eD(t);
            if (!1 !== n)
              return this._$d(W.CRACKDOWN_PAUSE, n),
                void this._$d_("+");
            this._$bA("+")
          },
          _$eE: function(t) {
            this._$eF = t,
            this._$c9 && this._$c9._$d7 !== rt.RADIO && this._$c9._$dO._$eE(t)
          },
          _$dX: function(t) {
            t.type || (t.type = rt.COMMON);
            const n = t.from || "default-" + location.hostname.replace(/\./g, "-")
              , i = !(t.type === rt.RADIO || t.type === rt.STREAM || t.info && "podcast" === t.info.type) && this._$eF;
            var e = {
              _$c1: st++,
              _$dO: new G(t.tracks,t.index,i,n),
              _$eA: n,
              _$d7: t.type,
              _$d8: t.config || {},
              _$d4: t.info || {},
              _$eG: t.eventId,
              _$eH: t.blockId,
              _$eI: t.entityId,
              _$eJ: t.dashId,
              _$eK: !!t.restored,
              _$ec: t.type === rt.RADIO || t.type !== rt.STREAM && (null == t.loadInfo ? !t.info : t.loadInfo),
              _$d9: t.type === rt.RADIO || t.type !== rt.STREAM && (null == t.loadTracks ? !t.tracks : t.loadTracks)
            }
              , r = e._$d8
              , o = e._$d7;
            switch (r.owner && r.owner instanceof Object && (r.uid = r.owner.uid,
              r.login = r.owner.login,
              delete r.owner),
            r.kind && (r.id = r.kind,
              delete r.kind),
            o !== rt.PLAYLIST && o !== rt.COLLA || (r.owner = r.owner || r.uid || r.login,
              isFinite(r.owner) ? r.uid = parseInt(r.owner) : r.login = r.owner),
              o) {
              case rt.STREAM:
                if (!r.url)
                  throw new TypeError("Bad config: " + JSON.stringify(r));
                break;
              case rt.RADIO:
                if (!r.type || !r.tag)
                  throw new TypeError("Bad config: " + JSON.stringify(r));
                break;
              case rt.PLAYLIST:
                if (!r.owner || !r.id)
                  throw new TypeError("Bad config: " + JSON.stringify(r));
                break;
              case rt.ALBUM:
              case rt.ARTIST:
              case rt.COLLA:
                if (!r.id)
                  throw new TypeError("Bad config: " + JSON.stringify(r));
                break;
              case rt.FEED:
                if (!e._$eG)
                  throw new TypeError("Event Id required")
            }
            return o === rt.RADIO && (r.storeBefore = r.storeBefore || a._$cp,
              r.storeAfter = r.storeAfter || a._$cq),
              e
          },
          _$d6: function(t) {
            if (this._$c9._$d7 !== t._$d7)
              return !1;
            var n = t._$d8
              , i = this._$c9._$d8;
            switch (t._$d7) {
              case rt.ARTIST:
              case rt.ALBUM:
                return n.id === i.id && n.sort == i.sort;
              case rt.RADIO:
                return !this._$c9._$dC && n.type === i.type && n.tag === i.tag;
              case rt.STREAM:
                return !this._$c9._$dC && n.url === i.url;
              case rt.PLAYLIST:
              case rt.COLLA:
                return n.owner == i.owner && n.id === i.id
            }
            return !0
          },
          _$dB: w((function(t) {
              s.info(this, "setSource", t.type, t.config, t.from, !!t.info, t.tracks && t.tracks.length, t.index),
              this._$dg(lt) && this._$dD(new it("Source change"));
              var n = {
                _$c6: this,
                _$d4: t
              }
                , i = ft._$dB(n);
              return this._$eL(mt, i, n),
                i
            }
          ), {
            _$eM: !0,
            _$el: function() {
              return this._$c1
            }
          }),
          _$bA: function(t, n) {
            if (!this._$c9)
              return h(new Error("No source"));
            s.info(this, "play", t, n),
            this._$dg(lt) && this._$dD(new it("Track change"), n);
            var i = this._$ed(this._$c9);
            i._$dR = t,
              i._$eN = new _,
            this._$c9._$d7 === rt.RADIO && (i._$eO = new _),
              this._$eP(lt, i);
            var e = ft._$bA(i);
            return this._$eL(lt, e, i),
              e.then(this._$d2, f),
              e._$dz = i._$eN.promise(),
              e.catch((function(t) {
                  i._$eN.reject(t)
                }
              )),
            this._$c9._$d7 === rt.RADIO && (e._$eO = i._$eO.promise()),
              e
          },
          _$d_: function(t, n) {
            if (!this._$c9)
              return h(new Error("No source"));
            s.info(this, "setIndex", t, n),
            this._$dg(lt) && this._$dD(new it("Set index"), n);
            var i = this._$ed(this._$c9);
            return i._$dR = t,
              ft._$dR(i)
          },
          _$dD: function(t, n) {
            if (!this._$c9)
              return h(new Error("No source"));
            t = t || new it("Stopped");
            var i = this._$dg(lt);
            return i && (s.info(this, "stop", t, n),
              t._$eO = n,
              i._$dy(t)),
              this._$dd._$eQ.toggle(!0),
              this._$dd._$eR.toggle(!0),
            i || v.resolve()
          },
          _$ed: function(t, n) {
            t = t || this._$c9;
            var i = {
              _$w: ft._$ez,
              _$c1: at++,
              _$c6: this,
              _$eS: this._$dd._$eS,
              _$eT: this._$dd._$eT,
              _$eU: this._$dd._$eU,
              _$eV: this._$dd._$eV,
              _$dt: {},
              _$c9: t,
              _$d8: t && t._$d8,
              _$eA: t && t._$eA,
              _$eJ: t && t._$eJ,
              _$dr: n,
              _$eW: {
                _$eX: ht()
              }
            };
            return t._$d7 === rt.RADIO && (i._$eh = {
              _$d7: t._$d8.type,
              _$eY: t._$d8.tag
            }),
              i
          },
          _$dq: function(t) {
            return this._$dZ[t]
          },
          _$eP: function(t, n) {
            this._$dZ[t] = n
          },
          _$eZ: function(t, n) {
            this._$dZ[t] === n && delete this._$dZ[t]
          },
          _$dg: function(t) {
            return this._$d1[t]
          },
          _$eL: function(t, n, i) {
            s.info(this, "taskStart", t, i._$c1);
            var e = this;
            e._$d1[t] = n,
              this._$d(At, !0, t, n, i);
            var r = function() {
              e._$e1(t, n, i)
            };
            n.then((function() {
                s.info(e, "taskSuccess", t, i._$c1),
                  r()
              }
            ), (function(n) {
                n instanceof it ? s.info(e, "taskAbort", t, i._$c1, n) : s[t === lt || t === vt ? "error" : "warn"](e, "taskFail", t, i._$c1, n),
                  r()
              }
            ))
          },
          _$e1: function(t, n, i) {
            this._$d1[t] === n && (delete this._$d1[t],
              this._$d(At, !1, t, n, i)),
              this._$eZ(t, i)
          },
          _$e2: function(t) {
            t._$eW._$e3 = ht(),
              this._$d(W.TRACK_REQUEST, t._$dr),
              o.startMark("api.track.timings.begin")
          },
          _$e4: function(t) {
            t._$c6._$dW._$e5(),
              t._$eW._$e6 = ht(),
              o.endMark("api.track.timings.begin"),
              o.startMark("api.track.timings.ready"),
              this._$d(W.TRACK_BEGIN, t._$dr)
          },
          _$e7: function(t) {
            t._$eW._$e8 = ht(),
              o.endMark("api.track.timings.ready"),
              o.startMark("api.track.timings.start"),
              s.info(this, "trackReady", I(t._$dr)),
              this._$d(W.TRACK_READY, t._$dr)
          },
          _$e9: function(t) {
            t._$eW._$e0 = ht(),
              o.endMark("api.track.timings.start"),
              o.startMark("api.track.timings.play"),
              this._$dd._$eQ.toggle(!1),
              this._$d(W.TRACK_START, t._$dr)
          },
          _$e_: function(t) {
            t._$eW._$fa = ht(),
              o.endMark("api.track.timings.play"),
              s.info(this, "trackPlay", I(t._$dr)),
              this._$eP(vt, t),
              t._$eN.resolve(),
              t._$fb = function(n) {
                var i = t._$dr.statistics;
                i && i.played > n.played || (i.duration = n.duration,
                  i.position = n.position,
                  i.played = n.played,
                t._$cn || n.duration - n.position < a._$cn && (t._$cn = !0,
                  this._$fc(t)),
                t._$co || n.duration - n.loaded < a._$co && (t._$co = !0,
                  this._$fd(t)))
              }
              .bind(this),
              this._$dd._$eS._$b(z.EVENT_PROGRESS, t._$fb),
              this._$d(W.TRACK_PLAY, t._$dr)
          },
          _$fe: function(t) {
            this._$dd._$eQ.toggle(!0),
              this._$eZ(vt, t),
            t._$fb && (this._$dd._$eS.off(z.EVENT_PROGRESS, t._$fb),
              delete t._$fb),
              this._$d(W.TRACK_END, t._$dr, t._$dr.statistics)
          },
          _$ff: function(t, n) {
            if (n instanceof it)
              return this._$fe(t);
            this._$dd._$eS.stop(),
              this._$dd._$eQ.toggle(!0),
              this._$dd._$dA(!0),
              this._$eZ(vt, t),
              t._$eN.reject(),
            t._$fb && (this._$dd._$eS.off(z.EVENT_PROGRESS, t._$fb),
              delete t._$fb),
              s.error(this, "trackError", I(t._$dr), n),
              this._$d(W.TRACK_ERROR, t._$dr, n)
          },
          _$fg: function(t) {
            t._$eW._$fh = ht(),
              this._$d(W.STREAM_REQUEST, t._$ew),
              o.startMark("api.stream.timings.begin")
          },
          _$fi: function(t) {
            t._$c6._$dW._$e5(),
              t._$eW._$fj = ht(),
              o.endMark("api.stream.timings.begin"),
              o.startMark("api.track.timings.ready"),
              this._$d(W.STREAM_BEGIN, t._$ew)
          },
          _$fk: function(t) {
            t._$eW._$fl = ht(),
              o.endMark("api.stream.timings.ready"),
              o.startMark("api.track.timings.start"),
              s.info(this, "streamReady", t._$ew && t._$ew.url),
              this._$d(W.STREAM_READY, t._$ew)
          },
          _$fm: function(t) {
            t._$eW._$fn = ht(),
              o.endMark("api.stream.timings.ready"),
              o.startMark("api.track.timings.play"),
              this._$dd._$eR.toggle(!1),
              this._$d(W.STREAM_START, t._$ew)
          },
          _$fo: function(t) {
            t._$eW._$fp = ht(),
              o.endMark("api.stream.timings.play"),
              s.info(this, "streamPlay", t._$ew && t._$ew.url),
              this._$eP(dt, t),
              this._$d(W.STREAM_PLAY, t._$ew)
          },
          _$fq: function(t) {
            this._$dd._$eR.toggle(!0),
              this._$eZ(dt, t),
              this._$d(W.STREAM_END, t._$ew, t._$ew.statistics)
          },
          _$fr: function(t, n) {
            if (n instanceof it)
              return this._$fq(t);
            this._$dd._$eT.stop(),
              this._$dd._$eR.toggle(!0),
              this._$dd._$dA(!0),
              this._$eZ(dt, t),
              s.error(this, "streamError", t._$ew && t._$ew.url, n),
              this._$d(W.STREAM_ERROR, t._$ew, n)
          },
          _$fs: function() {
            return !!this._$ft
          },
          _$dv: function(t) {
            this._$ft = t
          },
          _$fu: function(t) {
            s.info(this, "advertRequest", t._$dt._$eq._$fv, t._$eA),
              this._$d(W.ADVERT_REQUEST, t._$dt._$eq._$fv, t._$eA)
          },
          _$fw: function(t) {
            this._$d(W.ADVERT_DATA_REQUEST, t._$dt._$eq._$fv, t._$eA)
          },
          _$fx: function(t, n) {
            this._$d(W.ADVERT_DATA_RESPONSE, t._$dt._$eq._$fv, t._$eA, n)
          },
          _$fy: function(t) {
            this._$d(W.ADVERT_BEGIN, t._$dt._$eq._$fv, t._$eA)
          },
          _$fz: function(t) {
            s.info(this, "advertReady", t._$dt._$eq._$fv, t._$eA),
              this._$eP(_t, t),
              this._$d(W.ADVERT_READY, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds)
          },
          _$fA: function(t) {
            this._$dd._$dc.toggle(!1),
              this._$dd._$fB.toggle(!1),
              this._$dd._$fC.toggle(!t._$dt._$ds.video),
              this._$d(W.ADVERT_START, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds)
          },
          _$fD: function(t) {
            s.info(this, "advertPlay", t._$c9._$d7, t._$eA),
              this._$d(W.ADVERT_PLAY, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds)
          },
          _$fE: function(t) {
            s.info(this, "advertPlayed", t._$c9._$d7, t._$eA),
              this._$d(W.ADVERT_PLAYED, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds)
          },
          _$fF: function(t) {
            s.info(this, "advertEnd", t._$c9._$d7, t._$eA),
              this._$dd._$fB.toggle(!0),
              this._$dd._$fC.toggle(!0),
              this._$dd._$eU.stop(),
              this._$eZ(_t, t),
            t._$dt._$fG && E._$fH() && (this._$dd._$dc.toggle(!0),
              this._$d(W.ADVERT_ADBLOCK)),
              this._$d(W.ADVERT_END, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds, t._$dt._$fI)
          },
          _$fJ: function(t, n) {
            this._$dd._$fB.toggle(!0),
              this._$dd._$fC.toggle(!0),
              this._$dd._$eU.stop(),
              this._$eZ(_t, t),
            n instanceof it || (t._$dt._$fG && E._$fH() && (this._$dd._$dc.toggle(!0),
              this._$d(W.ADVERT_ADBLOCK)),
              s[n._$ei ? "info" : "warn"](this, "advertError", t._$c9._$d7, t._$eA, n),
              this._$d(W.ADVERT_ERROR, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds, n))
          },
          _$du: function() {
            var t = this._$dq(_t);
            t && (s.info(this, "advertClick", t._$dt._$eq._$fv, t._$eA),
              this._$d(W.ADVERT_CLICK, t._$dt._$eq._$fv, t._$eA, t._$dt._$ds))
          },
          _$fK: function(t) {
            this._$dd._$fL.toggle(!1),
              this._$d(W.COMMON_START, t._$fM)
          },
          _$fN: function(t) {
            this._$eP(pt, t),
              this._$d(W.COMMON_PLAY, t._$fM)
          },
          _$fO: function(t) {
            this._$dd._$fL.toggle(!0),
              this._$dd._$eV.stop(),
              this._$eZ(pt, t),
              this._$d(W.COMMON_END, t._$fM)
          },
          _$fP: function(t) {
            this._$dd._$fL.toggle(!0),
              this._$dd._$eV.stop(),
              this._$eZ(pt, t),
              this._$d(W.COMMON_ERROR, t._$fM, t._$fQ)
          },
          _$fR: function(t, n) {
            return s.info(this, "feedbackRadio", n, t._$eh._$d7, t._$eh._$eY, t._$c1),
              H({
                _$eh: t._$eh,
                _$d8: t._$d8,
                _$c9: t._$c9,
                _$d7: t._$eh._$d7,
                _$eY: t._$eh._$eY,
                _$eO: n,
                _$eA: t._$eA,
                _$eJ: t._$eJ,
                _$dr: t._$dr
              })
          },
          _$fS: function(t) {
            return this._$c9._$d7 !== rt.RADIO || "undefined" != typeof Mu && "music" === Mu.serviceName ? 1 === O._$fT(t) : t.liked
          },
          _$fU: function(t) {
            return this._$c9._$d7 !== rt.RADIO || "undefined" != typeof Mu && "music" === Mu.serviceName ? -1 === O._$fT(t) : t.disliked
          },
          _$fV: function(t, n, i, e) {
            return $._$fW(()=>{
                if (s.info(this, "toggleLike", t, n, i, e),
                  !n) {
                  var r = this._$dq(lt);
                  n = r && r._$dr ? r._$dr : this._$c9._$dO._$dP()
                }
                if (!n)
                  return h(new Error("Track not found"));
                var o, u, a;
                if (null == t && (t = !this._$fS(n)),
                this._$c9._$d7 === rt.RADIO) {
                  r = this._$dq(lt);
                  var c = this._$ed(this._$c9, n);
                  n.liked = t,
                  r && I(n) === I(r._$dr) || (c._$eh._$d7 = "radio",
                    c._$eh._$eY = "history"),
                    o = this._$fR(c, t ? B._$fX : B._$fY)
                }
                (i || this._$c9._$d7 !== rt.RADIO || "artist" === this._$c9._$d8.type) && (e || (r = this._$dq(lt),
                  e = r && r._$eA || this._$c9._$eA),
                  u = O._$fZ(n, t, e)),
                  a = o && u ? v.all([o, u]) : o || u;
                var f = function() {
                  this._$d(J.EMOTION, n, "like")
                }
                .bind(this);
                return f(),
                  a.catch(f),
                  o
              }
            )
          },
          _$f1: function(t, n, i) {
            return $._$fW(()=>{
                var e, r, o, u;
                if (s.info(this, "toggleDislike", t, n, i),
                n || (e = this._$dq(lt),
                  n = e && e._$dr ? e._$dr : this._$c9._$dO._$dP()),
                  !n)
                  return h(new Error("Track not found"));
                if (null == t && (t = !this._$fU(n)),
                this._$c9._$d7 === rt.RADIO)
                  if (e = this._$dq(lt),
                    n.disliked = t,
                  t && e && I(n) === I(e._$dr))
                    this._$dq(vt) ? (r = this._$bA("+", B._$f2)._$dz,
                      this._$dd._$dA(!1)) : r = e._$dz.then(function() {
                      return this._$f1(t, n, i)
                    }
                    .bind(this));
                  else {
                    var a = this._$ed(this._$c9, n);
                    a._$eh._$d7 = "radio",
                      a._$eh._$eY = "history",
                      r = this._$fR(a, t ? B._$f2 : B._$f3)
                  }
                (this._$c9._$d7 !== rt.RADIO || "undefined" != typeof Mu && "music" === Mu.serviceName) && (e = this._$dq(lt),
                i || (i = e && e._$eA || this._$c9._$eA),
                  o = O._$f4(n, t, i),
                r || !t || !e || e._$dr && n.id != e._$dr.id || e._$c9._$dw || o.then(function() {
                  this._$bA("+"),
                    this._$dd._$dA(!1)
                }
                .bind(this)),
                e && e._$c9 && e._$c9._$dw && t && (e._$ev = !0)),
                  u = r && o ? v.all([r, o]) : r || o;
                var c = function() {
                  this._$d(J.EMOTION, n, "dislike")
                }
                .bind(this);
                return c(),
                  u.catch(c),
                  u
              }
            )
          },
          _$f5: function(t) {
            s.info(this, "setSettings", t);
            var n = this._$ed(this._$c9);
            return n._$f6 = t,
              K(n)
          },
          _$ey: function(t) {
            s.info(this, "playTrack", I(t._$dr)),
            t._$dr && "podcast-episode" === t._$dr.type || t._$c6._$dd._$f7(1),
              nt(b, t._$dr) ? (t._$dr.isPreview = !0,
                t._$c6._$d(W.PLAY_PREVIEW)) : t._$c6._$dV._$f8(t._$dr) ? (t._$c6._$d(W.PLAY_FULL),
                t._$c6._$d(W.FORCE_AUTH, t._$c6._$dV._$en)) : t._$c6._$d(W.PLAY_FULL),
              this._$e2(t),
            t._$dr._$f9 && t._$dr === this._$f0 || (this._$dd._$eS.stop(),
            this._$f0 && (delete this._$f0._$f9,
              delete this._$f0._$f_));
            var n = R(t);
            return this._$eL(vt, n, t),
              this._$f0 = t._$dr,
              n
          },
          _$fd: function(t) {
            s.info(this, "preloadTrack", I(t._$dr));
            var n = t._$c9._$dO._$eC();
            return n ? D(this._$ed(t._$c9, n)) : h(new Error("No next track found"))
          },
          _$ex: function(t) {
            s.info(this, "_playStream", t._$ew && t._$ew.url),
            t._$ew.url && t._$ew === this._$ga || (this._$dd._$eT.stop(),
            this._$ga && delete this._$ga.url),
              this._$fg(t);
            var n = x(t);
            return this._$eL(dt, n, t),
              this._$ga = t._$ew,
              n
          },
          _$et: function(t) {
            if (!t._$dt._$eq)
              return h(new et("No advert params"));
            s.info(this, "playAdvert", t._$eA, t._$dt._$eq._$fv, t._$dt._$er._$es, t._$dt._$er._$bA, l({}, t._$dr.statistics, !0)),
              this._$fu(t);
            var n = T(t);
            return this._$eL(_t, n, t),
              n
          },
          _$fc: function(t) {
            return t._$dt._$eq ? (s.info(this, "preloadAdvert", t._$eA, t._$dt._$eq._$fv, t._$dt._$er._$es, t._$dt._$er._$bA, l({}, t._$dr.statistics, !0)),
              P(t)) : h(new et("No advert params"))
          },
          _$dE: function(t, n) {
            s.info(this, "playCommon", t);
            var i = this._$ed();
            i._$fM = {
              _$f9: t,
              _$gb: n
            };
            var e = q(i);
            return this._$eL(pt, e, i),
              e
          },
          _$gc: function(t, n) {
            return s.info(this, "preloadCommon", t),
              S({
                _$gd: this._$dd._$eV,
                _$f9: t,
                _$gb: n
              })
          }
        },
        d.mixin(ft),
        t.$a = ft
    }
    , function(t, n, i, e) {
      t.$a = i(15)
    }
    , function(t, n, i, e) {
      var r = i(56)
        , o = r("net")
        , s = i(75)
        , u = i(76)
        , a = i(77)
        , c = i(78)
        , h = i(79)
        , f = function(t, n) {
        return n instanceof h && o._$b_[n.status]
      }
        , l = function(t, n, i) {
        "string" == typeof n && (n = r(n)),
          i = i || {};
        var e = [{
          _$ek: s,
          _$cS: n._$b3,
          _$ea: i._$ge,
          _$eu: i._$gf
        }, {
          _$ek: u,
          _$b9: n._$b4,
          _$cS: n._$b5,
          _$dZ: i._$dZ,
          _$gg: i._$gg,
          _$gh: i._$gh,
          _$ei: i._$ei || f,
          _$gi: !0
        }];
        return i._$gj || e.push({
          _$ek: a,
          _$el: i._$el,
          _$gk: n._$b6,
          _$cS: n._$b7
        }),
          e.push({
            _$ek: s,
            _$cS: n._$b8,
            _$ea: i._$ea,
            _$eu: i._$eu
          }),
          c(t, e)
      };
      l._$ei = f,
        t.$a = l
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68)
        , s = r.apply.bind(r.bind);
      t.$a = function(t, n) {
        return n = n || {},
          function(i) {
            var e, u;
            try {
              u = (e = t.call(this, i)) && e.then ? e : o.resolve(e)
            } catch (t) {
              e = t,
                u = o.reject(e)
            }
            var a = [this, i]
              , c = n._$dy ? s(n._$dy, [this, i, e]) : e && e._$dy ? e._$dy.bind(this) : r;
            if (n._$cS) {
              var h = clearTimeout.bind(null, setTimeout(c.bind(null, new Error("Task timeout")), n._$cS));
              u.then(h, h)
            }
            return n._$ea && (u = u.then(s(n._$ea, a))),
            n._$eu && (u = u.catch(s(n._$eu, a))),
              u.catch(r),
              u._$dy = c,
              u
          }
      }
    }
    , function(t, n, i, e) {
      var r = i(68);
      t.$a = function(t, n) {
        var i = "static" === (n = n || {})._$dZ ? {} : null
          , e = n._$gg || "_retry"
          , o = n._$gh || "_result";
        return function(s) {
          var u, a, c, h, f, l = this, d = "static" === n._$dZ ? i : "data" === n._$dZ ? s : "self" === n._$dZ ? l : {};
          n._$gl && (delete d[e],
            delete d[o]);
          var v = function() {
            (c = t.call(l, s)).then(u, _)
          }
            , _ = function(t) {
            d[o] = t,
              f ? a(t) : n._$ei && n._$ei.call(l, s, t) ? a(t) : (d[e] = (d[e] || 0) + 1,
                d[e] >= n._$b9 ? a(t) : n._$cS ? (c = p,
                  h = setTimeout(v, n._$cS)) : v())
          }
            , p = {
            abort: function() {
              f = !0,
                h = h && clearTimeout(h),
                a(d[o])
            }
          }
            , m = new r((function(t, i) {
              if (d[e] >= n._$b9)
                return c = p,
                  void i(d[o]);
              u = t,
                a = i,
                v()
            }
          ));
          return m.then((function() {
              (n._$gm || !1 !== n._$gm && !1 !== n._$gi) && (delete d[e],
                delete d[o])
            }
          ), (function() {
              (n._$gi || n._$gn) && !1 !== n._$gn && (delete d[e],
                delete d[o])
            }
          )),
            m._$dy = function(t) {
              return f = !0,
              c._$dy && c._$dy(t)
            }
            ,
            m
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(57);
      t.$a = function(t, n) {
        n = n || {};
        var i = {}
          , e = []
          , o = 0
          , s = function(t) {
          i[t] && (i[t]._$cS && clearTimeout(i[t]._$cS),
            delete i[t],
          n._$gk && (e.splice(e.indexOf(t), 1),
            o--))
        }
          , u = function(t) {
          n._$el || (t = "only"),
          i[t] && s(t)
        }
          , a = function(a) {
          var c = "function" == typeof n._$el ? n._$el.call(this, a) : n._$el ? a[n._$el] : "only"
            , h = function(t) {
            if (!i[t] && (i[t] = {},
              n._$gk))
              for (e.push(t),
                o++; o > n._$gk; )
                s(e[0]);
            return i[t]
          }(c)
            , f = u.bind(null, c)
            , l = function() {
            n._$cS ? h._$cS = setTimeout(f, n._$cS) : 0 === n._$cS && f()
          };
          return h._$go ? h._$go : (h._$gp = t.call(this, a),
            h._$go = h._$gp.then((function(t) {
                return delete h._$gp,
                  l(),
                  t
              }
            ), (function(t) {
                throw delete h._$gp,
                  n._$gq ? l() : s(c),
                  t
              }
            )),
            h._$go.catch(r),
            h._$go._$gr = f,
            h._$go._$dy = function(t) {
              h._$gp && h._$gp._$dy && h._$gp._$dy(t),
                delete h._$gp
            }
            ,
            h._$go)
        };
        return a._$gr = u,
          a
      }
    }
    , function(t, n, i, e) {
      t.$a = function(t, n) {
        for (var i = t, e = 0, r = n.length; e < r; e++)
          i = n[e]._$ek(i, n[e]);
        return i
      }
    }
    , function(t, n, i, e) {
      var r = i(80)
        , o = function(t, n, i) {
        this.status = n,
          this.statusText = i,
          t = ((t = t instanceof Object ? JSON.stringify(t) : t) || "") + " (" + this.status + ": " + this.statusText + ")",
          r.call(this, t)
      };
      o.prototype = r.create("AjaxError"),
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = i(17)
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68);
      t.$a = function(t, n) {
        if (!n)
          throw Error("Must specify root of graph");
        return function(i) {
          var e, s, u, a, c, h, f, l, d = this, v = {}, _ = function(n) {
            var r = t[e = n];
            v[e] = v[e] || {},
              !f || r._$gs ? (s = r._$d1.call(r._$gt ? v[e] : d, i)) && s.then ? s.then(p, m).catch(c) : "string" == typeof s || "function" == typeof s ? A(s) : c(new TypeError("Bad response type")) : (r._$gu ? p : m)(l)
          }, p = function(n) {
            u = n,
              h = a,
              A(t[e]._$ea)
          }, m = function(n) {
            u = n,
              h = c,
              A(t[e]._$eu)
          }, A = function(n) {
            try {
              n ? "string" == typeof n ? _(n) : "function" == typeof n ? A(n.call(t[e]._$gt ? v[e] : d, i, u)) : n.then ? (s = n,
                n.then(A, A)) : c(new TypeError("Next task must be String, Function or Promise-like value")) : h(u)
            } catch (t) {
              c(t)
            }
          }, y = new o((function(t, i) {
              a = t,
                c = i,
                _(n)
            }
          ));
          return y.catch(r),
            y._$dy = function(t) {
              if (!f)
                return f = !0,
                  l = t,
                s._$dy && s._$dy(t)
            }
            ,
            y
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68);
      t.$a = function(t, n) {
        n = n || {};
        var i = {}
          , e = {}
          , s = function(t, n) {
          return i[t] && i[t]._$gp._$dy(n)
        }
          , u = function(t, n) {
          e[t] && e[t]._$B(n),
            delete e[t]
        }
          , a = function(a) {
          var c = n._$el ? n._$el.call(this, a) : "only"
            , h = function() {
            i[c] = e[c],
              delete e[c],
              i[c]._$gp = t.call(i[c]._$dZ, i[c]._$ds),
              i[c]._$gp.then(f, l)
          }
            , f = function(t) {
            i[c]._$A(t),
              delete i[c],
            e[c] && h()
          }
            , l = function(t) {
            i[c]._$B(t),
              delete i[c],
            e[c] && h()
          };
          e[c] && u(c, new Error("Replaced with new request"));
          var d = e[c] = {
            _$dZ: this,
            _$ds: a
          };
          return d._$go = new o((function(t, n) {
              d._$A = t,
                d._$B = n
            }
          )),
            i[c] ? n._$eM && s(c, new Error("Auto abort")) : h(),
            d._$go.catch(r),
            d._$go._$dy = function(t) {
              if (this === i[c])
                return s(c, t);
              this === e[c] && u(c, t)
            }
            .bind(d),
            d._$go
        };
        return a._$gv = s,
          a.dropPending = u,
          a
      }
    }
    , function(t, n, i, e) {
      var r, o = i(56)("advert"), s = (i(64),
        i(68)), u = i(84), a = i(57), c = new (i(55))("adb-test"), h = i(86);
      h.CONTEXT_TIMEOUT = o._$cm;
      var f = i(62)
        , l = window
        , d = document
        , v = {
        _$gw: !1,
        _$gx: null,
        _$fH: function(t) {
          return !!r && (!!t && r.getCurrentState())
        },
        _$gy: function() {
          return v._$gx
        },
        _$gz: function() {
          if (v._$gA(),
          null != r.getCurrentState())
            if (r.getCurrentState()) {
              if (!v._$gx)
                try {
                  var t = d.querySelector(".notify");
                  "block" !== l.getComputedStyle(t).display && (v._$gx = !0)
                } catch (t) {}
              r.cleanStyles()
            } else
              v._$gB();
          else
            v._$n()
        },
        _$gC: function(t) {
          r && r.observe(t)
        },
        _$gD: function() {
          return this._$gE ? this._$gE : (this._$gE = v._$gF().then((function() {
              var t = s.all(v._$fH() ? [u(o._$cd), u(o._$ce)] : [u(o._$cg), u(o._$ch)]);
              return t.abort = a,
                t
            }
          )),
            this._$gE)
        },
        _$gG: function() {
          return this._$gw ? this._$gw : (this._$gw = v._$gF().then((function() {}
          )),
            this._$gw)
        },
        _$gF: function() {
          return v._$gA(),
            null == r.getCurrentState() ? v._$n() : s.resolve()
        },
        _$gB: function() {
          return v._$gA(),
            r.getCurrentState() ? s.resolve(!0) : v._$gH ? v._$gH : (v._$gH = r.detect(!0).then((function() {}
            ), (function(t) {
                c.error(null, "adblock", "Обнаружен блокировщик рекламы!", t.message),
                  v._$gz()
              }
            )).then((function() {
                return delete v._$gH,
                  r.getCurrentState()
              }
            )),
              v._$gH)
        },
        _$n: function() {
          return v._$gI ? v._$gI : (v._$gI = f._$c3.promise().then(v._$gB),
            v._$gI.catch(a),
            v._$gI)
        },
        _$gA: function() {
          r = r || new h
        },
        _$gJ: function(t, n, i) {
          r = new h(t,n,i)
        }
      };
      t.$a = v
    }
    , function(t, n, i, e) {
      var r = i(64)
        , o = i(85)
        , s = function(t, n) {
        this._$gK = new r,
          this._$gL = document.createElement("script"),
          document.body.appendChild(this._$gL),
          this._$cS = setTimeout(this._$gM.bind(this), n),
          this._$gL.onreadystatechange = this._$gL.onload = this._$bE.bind(this),
          this._$gL.onerror = this._$gN.bind(this),
          t += (-1 === t.indexOf("?") ? "?" : "&") + "_=" + Math.random(),
          this._$gL.src = t
      };
      s.prototype._$gM = function() {
        this._$fQ || (this._$fQ = new o(o.TIMEOUT)),
          this._$gO()
      }
        ,
        s.prototype._$gN = function() {
          this._$fQ = new o(o.FAILED),
            this._$bE()
        }
        ,
        s.prototype._$bE = function() {
          this._$gL.readyState && "complete" !== this._$gL.readyState && "loaded" !== this._$gL.readyState || (this._$gP(),
            this._$gL.readyState ? this._$cS = setTimeout(this._$gO.bind(this), 1) : this._$gO())
        }
        ,
        s.prototype._$gP = function(t) {
          if (clearTimeout(this._$cS),
          this._$gL && (this._$gL.onreadystatechange = this._$gL.onload = this._$gL.onerror = null),
          t && this._$gL) {
            var n = this._$gL;
            this._$gL = null,
              setTimeout((function() {
                  n && n.parentNode && n.parentNode.removeChild(n),
                    n = null
                }
              ), 100)
          }
        }
        ,
        s.prototype._$gO = function() {
          this._$gP(!0),
            this._$fQ ? this._$gK.reject(this._$fQ) : this._$gK.resolve()
        }
        ,
        s.prototype._$dy = function(t) {
          this._$fQ = t || Error("request aborted"),
            this._$gO()
        }
        ,
        s._$gQ = function(t, n) {
          var i = new s(t,n || 5e3)
            , e = i._$gK.promise();
          return e._$dy = i._$dy.bind(i),
            e
        }
        ,
        t.$a = s._$gQ
    }
    , function(t, n, i, e) {
      t.$a = i(30)
    }
    , function(t, n, i, e) {
      var r = function() {
        var t = this
          , n = new Promise((function(n, i) {
            t.resolve = n,
              t.reject = i
          }
        ));
        t.promise = function() {
          return n
        }
      }
        , o = function(t) {
        return [].slice.call(t || [])
      }
        , s = function(t) {
        "complete" === h.readyState ? t() : c.addEventListener ? c.addEventListener("load", t) : c.attachEvent("onload", t)
      }
        , u = function(t) {
        for (var n = 0, i = (t = o(t)).length; n < i; n++)
          if (v.testAdbStyle(t[n]))
            return !0
      }
        , a = function(t) {
        for (var n, i = o(t.styleSheets), e = 0, r = i.length; e < r; e++)
          v.testAdbStyle(i[e]) && (i[e].disabled = !0,
          (n = i[e].ownerNode) && (n.innerHTML = "",
            t.removeChild(n)))
      }
        , c = window
        , h = document
        , f = function() {}
        , l = /^\s*display\s*:\s*none(\s*!\s*important)?(\s*;)?\s*(visibility\s*:\s*hidden(\s*!\s*important)?(\s*;)?\s*)?(orphans\s*:\s*\d+(\s*!\s*important)?(\s*;)?\s*)?$/
        , d = function(t) {
        return o(h.querySelectorAll(t))
      }
        , v = function(t, n, i) {
        var e;
        this._$gR = t,
          this._$gS = (e = {},
            (n || ["class", "id"]).forEach((function(t) {
                e[t] = !0
              }
            )),
            e),
          this._$gT = i || !1,
          this._$c5 = null,
          this._$gU = null
      };
      v.CONTEXT_TIMEOUT = 5e3,
        v.ERROR_ADGUARD_SCRIPT = "",
        v.ERROR_CONTEXT_FAILED = "context init failed",
        v.ERROR_CONTEXT_TIMEOUT = "context init timeout",
        v.ERROR_STYLES_CLASSIC = "classic adb-styles",
        v.ERROR_STYLES_SHADOW = "shadow adb-styles",
        v.ERROR_STYLES_MOZILLA = "mozilla adb-styles",
        v.ERROR_SHADOW_ROOT = "shadow root",
        v.ERROR_EVIL_ATTR = "evil attributes",
        s((function() {
            var t = h.createElement("iframe");
            t.sandbox = "allow-same-origin",
              h.body.appendChild(t);
            try {
              var n = Object.getOwnPropertyDescriptor(t.contentWindow.Element.prototype, "shadowRoot");
              Object.defineProperty(Element.prototype, "shadowRoot", n)
            } catch (t) {}
            h.body.removeChild(t)
          }
        )),
        v.testAdbStyle = function(t) {
          var n = o(t.cssRules);
          return 0 !== n.length && n.every((function(t) {
              return l.test(t.style.cssText)
            }
          ))
        }
        ,
        v.loadContext = function(t) {
          var n = new r
            , i = h.getElementsByTagName("script")[0]
            , e = h.createElement("script");
          return e.src = t,
            e.onerror = n.reject.bind(null, Error(v.ERROR_CONTEXT_FAILED)),
            setTimeout((function() {
                n.reject(Error(v.ERROR_CONTEXT_TIMEOUT)),
                  n.promise().catch(f)
              }
            ), v.CONTEXT_TIMEOUT),
            c.yandexContextAsyncCallbacks = c.yandexContextAsyncCallbacks || [],
            c.yandexContextAsyncCallbacks.push(n.resolve),
            i.parentNode.insertBefore(e, i),
            n.promise().catch((function() {
                e.parentNode && e.parentNode.removeChild(e)
              }
            )),
            n.promise()
        }
        ,
        v.prototype = {
          getCurrentState: function() {
            return this._$c5
          },
          detectAdGuardScript: function() {
            return window.AG_onLoad ? Promise.reject(Error(v.ERROR_ADGUARD_SCRIPT)) : Promise.resolve()
          },
          detectContext: function() {
            var t = this;
            return t._$gV || (t._$gV = new r,
              s((function() {
                  v.loadContext("https://an.yandex.ru/system/context.js").then(t._$gV.resolve, t._$gV.reject)
                }
              )),
              t._$gV.promise().catch((function() {
                  delete t._$gV
                }
              ))),
              t._$gV.promise()
          },
          detectStyles: function() {
            var t = this
              , n = t._$gW = new r;
            return setTimeout((function() {
                var i, e, r, o, s;
                try {
                  if (u(h.children[0].shadowRoot.styleSheets))
                    return n.reject(Error(v.ERROR_STYLES_SHADOW))
                } catch (t) {}
                try {
                  if (u(h.styleSheets))
                    return n.reject(Error(v.ERROR_STYLES_CLASSIC))
                } catch (t) {}
                if (t._$gR)
                  try {
                    var a, f, l, _ = d(t._$gR);
                    for (e = 0,
                      r = _.length; e < r; e++) {
                      var p = (a = _[e]).attributes;
                      for (o = 0,
                        s = p.length; o < s; o++)
                        if (t._$gS.hasOwnProperty(p[o].name) === t._$gT)
                          return n.reject(Error(v.ERROR_EVIL_ATTR));
                      if (a.shadowRoot && "<content></content>" !== a.shadowRoot.innerHTML)
                        return n.reject(Error(v.ERROR_SHADOW_ROOT));
                      if ((i = c.getComputedStyle(a)).MozBinding && /elemhide/.test(i.MozBinding) && (f = a.getAttribute("style"),
                        t._$gX = !0,
                        a.setAttribute("style", "display:block!important;position:relative!important;height:100px!important;"),
                        l = a.offsetHeight,
                        f ? a.setAttribute("style", f) : a.removeAttribute("style"),
                        t._$gX = !1,
                        !l))
                        return n.reject(Error(v.ERROR_STYLES_MOZILLA))
                    }
                  } catch (t) {}
                n.resolve()
              }
            ), 1e3),
              n.promise().catch((function(t) {
                  return t
                }
              )).then((function(i) {
                  if (t._$gW === n && delete t._$gW,
                  i instanceof Error)
                    throw i;
                  return i
                }
              ))
          },
          detect: function(t) {
            var n = this;
            return n._$gH ? n._$gH : t || null == n._$c5 ? (n._$gH = n.detectAdGuardScript().then(n.detectContext.bind(n)).then(n.detectStyles.bind(n)).then((function() {
                n._$c5 = !1,
                  n._$gU = null,
                  delete n._$gH
              }
            ), (function(t) {
                throw n._$c5 = !0,
                  n._$gU = t,
                  delete n._$gH,
                  t
              }
            )),
              n._$gH.catch(f),
              n._$gH) : Promise[n._$c5 ? "reject" : "resolve"](n._$gU)
          },
          cleanStyles: function() {
            var t, n, i, e, r;
            if (this._$gW)
              return this._$gW.promise().then(this.cleanStyles.bind(this), this.cleanStyles.bind(this));
            try {
              a(h.children[0].shadowRoot)
            } catch (t) {}
            try {
              a(h)
            } catch (t) {}
            if (this._$gR)
              try {
                var o = d(this._$gR);
                for (t = 0,
                  n = o.length; t < n; t++) {
                  var s = (r = o[t]).attributes;
                  for (i = 0,
                    e = s.length; i < e; i++)
                    this._$gS.hasOwnProperty(s[i].name) === this._$gT && r.removeAttribute(s[i].name);
                  r.shadowRoot && "<content></content>" !== r.shadowRoot.innerHTML && (r.shadowRoot.innerHTML = "<content></content>")
                }
              } catch (t) {}
            return Promise.resolve()
          },
          observe: function(t) {
            var n = this;
            n._$c_ && n._$c_.disconnect(),
              t ? (n._$c_ = new MutationObserver((function() {
                  n._$gX || (n._$gX = !0,
                    n.cleanStyles().then((function() {
                        n._$gX = !1
                      }
                    )))
                }
              )),
                n._$c_.observe(t, {
                  attributes: !0
                })) : delete n._$c_
          }
        },
        "object" != typeof t ? (c.ya = c.ya || {},
          c.ya.ADBTools = v) : t.$a = v
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(81)
        , s = i(75)
        , u = i(88)
        , a = i(82)
        , c = i(78)
        , h = i(89)
        , f = i(97)
        , l = i(102)
        , d = i(106)
        , v = i(107)
        , _ = i(108)
        , p = i(109)
        , m = i(110)
        , A = i(101)
        , y = i(123)
        , w = i(95)
        , g = i(124);
      t.$a = c(o({
        start: {
          _$d1: h,
          _$ea: "data"
        },
        data: {
          _$d1: f,
          _$ea: function(t) {
            if (t._$dt._$ds.video && (!A._$gY() || !t._$c6._$fs()))
              throw new w("Video is not allowed");
            return t._$c6._$fz(t),
              "before"
          }
        },
        before: {
          _$d1: u([function(t) {
            return t._$c6._$fR(t, y._$gZ)
          }
            , function(t) {
              if (t._$dt._$g1 && t._$dt._$g1.pre)
                return t._$dt._$ds.video || p({
                  _$gd: t._$eU,
                  _$f9: t._$dt._$ds.src
                }),
                  t._$c6._$dE(t._$dt._$g1.pre)
            }
          ]),
          _$ea: "selectPlayer",
          _$eu: "selectPlayer"
        },
        selectPlayer: {
          _$d1: function(t) {
            return t._$c6._$fA(t),
            t._$dt._$g1 && t._$dt._$g1.post && t._$c6._$gc(t._$dt._$g1.post),
              t._$dt._$fG = !0,
              t._$c6._$dd._$g2((100 + t._$dt._$eq.adVolume) / 100),
              t._$dt._$ds.video ? "playVideo" : "playAudio"
          }
        },
        playAudio: {
          _$d1: function(t) {
            return _({
              _$gd: t._$eU,
              _$f9: t._$dt._$ds.src
            })
          },
          _$ea: function(t) {
            return t._$c6._$fD(t),
              "endAudio"
          }
        },
        endAudio: {
          _$d1: l,
          _$ea: "after"
        },
        playVideo: {
          _$d1: d,
          _$ea: function(t) {
            return t._$c6._$fD(t),
              "endVideo"
          }
        },
        endVideo: {
          _$d1: v,
          _$ea: "after"
        },
        after: {
          _$d1: s((function(t) {
              if (t._$dt._$fG = !1,
                t._$c6._$fE(t),
              t._$dt._$g1 && t._$dt._$g1.post)
                return t._$c6._$dE(t._$dt._$g1.post)
            }
          ), {
            _$eu: function() {
              return !0
            }
          })
        }
      }, "start"), [{
        _$ek: s,
        _$ea: function(t, n) {
          return t._$c6._$fF(t),
            t._$c6._$dW._$g3(),
            m({
              _$eA: t._$eA,
              _$dr: t._$dr,
              _$d7: "ad"
            }).catch((function() {
                return n
              }
            ))
        },
        _$eu: function(t, n) {
          t._$c6._$fJ(t, n);
          var i = g._$ej().audioAdsWhite
            , e = t._$dt && t._$dt._$g4 && "on" !== i;
          return m({
            _$eA: t._$eA,
            _$dr: t._$dr,
            _$d7: e ? "ad" : "none"
          }).then((function() {
              throw n
            }
          ))
        },
        _$dy: r
      }, {
        _$ek: a,
        _$el: function(t) {
          return t._$c6._$c1
        },
        _$eM: !0
      }])
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(75)
        , s = i(68);
      t.$a = function(t, n) {
        return n = n || {},
          function(i) {
            var e, u, a, c, h = this, f = [], l = [], d = 0, v = function(t) {
              if (!a) {
                a = !0;
                for (var n = 0, i = f.length; n < i; n++)
                  f[n]._$dy(t)
              }
            }, _ = function(t, n, i) {
              l[t] = i,
                d++,
                m()
            }, p = function(t, i, e) {
              l[t] = e,
                d++,
                c = !0,
              n._$g5 && v(new Error("Task " + t + " failed. Only success status allowed therefore.")),
                m()
            }, m = function() {
              d >= t.length && (c ? u : e)(l)
            }, A = new s((function(n, r) {
                e = n,
                  u = r;
                for (var s = 0, a = t.length; s < a; s++)
                  f.push(o(t[s], {
                    _$ea: _.bind(null, s),
                    _$eu: p.bind(null, s)
                  }).call(h, i))
              }
            ));
            return A.catch(r),
              A._$dy = v,
              A
          }
      }
    }
    , function(t, n, i, e) {
      var r = i(75)
        , o = i(90)
        , s = i(95);
      t.$a = r((function(t) {
          var n = t._$dt._$er
            , i = t._$dr.statistics || {}
            , e = (i.played || 0) / (i.duration || 1);
          if (o._$g6() || e >= .5 && n._$bA || e < .5 && n._$es)
            return t._$dt._$g4 = !0,
              t._$c6._$fy(t),
              !0;
          throw new s("No advert")
        }
      ))
    }
    , function(t, n, i, e) {
      var r = i(56)("advert")
        , o = new (i(55))("AdvertData")
        , s = i(91)
        , u = (e = i(96),
        i(60))
        , a = i(51)
        , c = i(95);
      n._$w = function() {
        return {
          SDK: !!n._$g7
        }
      }
        ,
        n._$g8 = function(t, i, r, h) {
          var f = s.post(["info", t, a(i), "feedback", r].join("/"), u({}, e, h));
          return f.then((function() {}
          ), (function(t) {
              o[t instanceof c ? "info" : "error"](n, "sendFeedbackError", t)
            }
          )),
            f
        }
        ,
        n._$g9 = function() {
          return r._$ck.test(document.location.hash)
        }
        ,
        n._$g6 = function() {
          return r._$cj.test(document.location.hash)
        }
        ,
        n._$g0 = function() {
          return r._$bZ && r._$cl.test(document.location.hash)
        }
    }
    , function(t, n, i, e) {
      var r = i(92)
        , o = i(45)
        , s = i(62)
        , u = i(60)
        , a = i(93)
        , c = new r(o._$a + "handlers/",{
        withCredentials: !0,
        crossDomain: o._$b1,
        onResponse: function(t) {
          "Need reset" === t.getResponseHeader("X-Auth-Session") && a("get", o._$bY + "auth/update/", {
            ts: (new Date).valueOf()
          }, {
            crossDomain: !0,
            withCredentials: !0
          }).catch((function() {}
          ))
        }
      },(function(t) {
          var n = {
            "X-Retpath-Y": encodeURIComponent(document.location.href)
          };
          s.uid && (n["X-Current-UID"] = s.uid),
            u(t, {
              headers: n
            }, !0)
        }
      ));
      t.$a = c
    }
    , function(t, n, i, e) {
      var r = i(93)
        , o = i(60)
        , s = i(62)
        , u = i(58)
        , a = i(57)
        , c = i(95)
        , h = i(79)
        , f = function(t, n, i) {
        this.handlerUrl = t,
          this.options = n || {},
          this.prepare = i,
          o(this.options, {
            timeout: 1e4
          }, !0)
      };
      f.prototype.request = function(t, n, i, e) {
        i = i || {};
        try {
          var f = window.top === window ? document.location.href : document.referrer;
          f = f.replace(/^[^:]*:\/\/([^\/]*).*$/, "$1"),
            i["external-domain"] = f,
            window.parent !== window.top ? i.overembed = "yes" : i.overembed = "no",
          "msie" === u.browser.name && "9" === u.browser.version[0] && (n += (/\?/.test(n) ? "&" : "?") + "device_id=" + encodeURIComponent(s.device_id))
        } catch (t) {}
        var l = {
          _$g_: n,
          _$ds: i
        }
          , d = o(e ? {
          json: !0
        } : {}, this.options, !0);
        this.prepare && this.prepare(d, l, t);
        var v = r(t, this.handlerUrl + l._$g_, l._$ds, d)
          , _ = v.then((function(t) {
            var n = t.captcha && t.captcha["captcha-page"];
            if (n)
              throw document.location = n,
                new h("CAPTHCA",403,"Are you a real boy?..");
            return t
          }
        ));
        return _._$dy = function(t) {
          v._$dy(new c(t))
        }
          ,
          _.catch(a),
          _
      }
        ,
        f.prototype.get = function(t, n) {
          return this.request("GET", t, n)
        }
        ,
        f.prototype.post = function(t, n, i) {
          return o(n || {}, {
            sign: s.csrf
          }, !0),
            this.request("POST", t, n, i)
        }
        ,
        t.$a = f
    }
    , function(t, n, i, e) {
      var r = i(56)("net")
        , o = i(68)
        , s = i(57)
        , u = i(79)
        , a = i(94)
        , c = function() {
        return new XMLHttpRequest
      }
        , h = "" === c().responseType;
      t.$a = function(t, n, i, e) {
        var f, l = new o((function(o, l) {
            var d = (e = e || {}).crossDomain;
            void 0 === d && (d = /\/\/([^/]+)/.exec(n)[1] !== location.host);
            var v = e.headers || {};
            "GET" !== t && (v["Content-Type"] = v["Content-Type"] || (e.json ? "application/json" : "application/x-www-form-urlencoded")),
              v.Accept = v.Accept || "application/json; q=1.0, text/*; q=0.8, */*; q=0.1",
            d || (v["X-Requested-With"] = v["X-Requested-With"] || "XMLHttpRequest"),
            i && (i = e.json ? JSON.stringify(i) : a(i)),
            "GET" === t && i && (n += (-1 === n.indexOf("?") ? "?" : "&") + i),
              n += (-1 === n.indexOf("?") ? "?" : "&") + "__t=" + (new Date).valueOf(),
            e.suffix && (n += "&" + e.suffix),
            n.length > 2040 && (n = n.substr(0, 2040));
            var _ = c();
            if (_.open(t, n, !0),
              d)
              try {
                _.withCredentials = e.withCredentials
              } catch (t) {}
            var p = !1;
            try {
              _.responseType = "json",
                p = "json" === _.responseType
            } catch (t) {}
            if ("overrideMimeType"in _ && _.overrideMimeType("application/json"),
              e.fireNforget)
              _.onerror = s,
                _.onabort = s,
                _.onload = _.onreadystatechange = s;
            else {
              var m = function() {
                var t = parseInt(_.status) || r._$ca;
                1223 === t && (t = 200);
                var n, i = 200 <= t && t < 300, s = _.statusText || r._$cb;
                if (i)
                  if (p && _.response)
                    n = _.response;
                  else
                    try {
                      n = JSON.parse(_.responseText)
                    } catch (e) {
                      t = 500,
                        i = !1,
                        s = "Response parse error",
                        n = e.message
                    }
                else
                  n = _.response;
                if (i) {
                  if (e.onResponse)
                    try {
                      e.onResponse(_)
                    } catch (t) {}
                  o(n)
                } else
                  l(new u(n,t,s))
              };
              h ? _.onload = m : _.onreadystatechange = function() {
                4 === _.readyState && m()
              }
                ,
                _.onerror = m.bind(null, !0),
                _.onabort = m,
                f = function(t) {
                  l(t),
                    _.abort()
                }
                ,
              e.timeout && setTimeout((function() {
                  f(new u("Server doesn't respond in " + (e.timeout / 1e3).toFixed(1) + " sec.",408,"Request Timeout"))
                }
              ), e.timeout)
            }
            for (var A in v)
              v.hasOwnProperty(A) && _.setRequestHeader(A, v[A]);
            _.send("GET" === t ? null : i)
          }
        ));
        return l._$dy = f || s,
          l
      }
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        var n = [];
        for (var i in t)
          t.hasOwnProperty(i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return n.join("&")
      }
    }
    , function(t, n, i, e) {
      var r = i(80)
        , o = function(t) {
        r.call(this, t)
      };
      o.prototype = r.create("AbortError"),
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = {}
    }
    , function(t, n, i, e) {
      var r = i(56)("advert.data")
        , o = i(64)
        , s = i(57)
        , u = i(75)
        , a = i(81)
        , c = i(74)
        , h = i(90)
        , f = i(98)
        , l = i(99)
        , d = ["scg24a0m1g.7624/422482", "hzb5xdm362.2919/417778", "77x9blpefx.4118/421286", "ht6tlwdqkb.4305/423130", "cbx047n7pv.7618/421285"]
        , v = /^(video|application)\//;
      t.$a = u(a({
        partner: {
          _$d1: l,
          _$ea: "data"
        },
        data: {
          _$d1: c((function(t) {
              var n = new o
                , i = h._$g7;
              return t._$c6._$fw(t),
                t._$dt._$gL.loadAd(i.AdType.PREROLL, n.resolve, (function(t) {
                    t._$ei = !0,
                      h._$g9() ? n.resolve({
                        clickThroughUrl: "",
                        sources: [{
                          src: "https://streaming.video.yandex.ru/get/ya-awaps2/" + d[Math.min(d.length - 1, Math.floor(Math.random() * d.length))] + "_mp3.mp3"
                        }],
                        icons: [{
                          src: ""
                        }],
                        playbackParams: {
                          isClickable: !1,
                          title: "Это не настоящее объявление, а лишь его прототип, созданный в целях отладки",
                          description: null
                        },
                        trackError: s,
                        trackEvent: s
                      }) : n.reject(t)
                  }
                )).catch(s),
                n.promise()._$dy = n.reject,
                n.promise()
            }
          ), r, {
            _$el: function(t) {
              return JSON.stringify(t._$dt._$eq)
            },
            _$ge: function(t, n) {
              if (!(n && n.sources && n.sources[0] && n.sources[0].src)) {
                var i = new f(f.NO_ADVERT,"no source");
                throw i._$ei = !0,
                  i
              }
              var e = n.playbackParams;
              e.video = v.test(n.sources[0].type);
              try {
                e.selfPromo = "selfpromo" === n.vastAd.vast.xml.querySelector("AdTitle").textContent
              } catch (t) {}
              return e.src = n.sources[0].src,
                e.clickThroughUrl = n.clickThroughUrl,
                e.image = n.icons && n.icons[0] && n.icons[0].src,
                e.vast = n.vastAd.vast.xml.documentElement.outerHTML,
                e.adtype = e.video ? "video" : e.selfPromo ? "selfpromo" : "audio",
                n
            },
            _$ea: function(t, n) {
              if (h._$g0())
                throw new f(f.NO_ADVERT,"no ads mode");
              t._$dt._$ds = n.playbackParams,
                t._$dt._$ha = n,
                t._$c6._$fx(t, !0)
            },
            _$eu: function(t, n) {
              throw t._$c6._$fx(t, n && (n.message || n.id) || f.NO_ADVERT),
                n instanceof f ? n : new f(f.NO_ADVERT,n && n.message)
            },
            _$ei: function(t, n) {
              return n && n._$ei
            }
          })
        }
      }, "partner"), {
        timeout: r._$b8
      })
    }
    , function(t, n, i, e) {
      var r = i(80)
        , o = function(t, n) {
        r.call(this, t + ": " + n)
      };
      o.prototype = r.create("AdvertError"),
        o.NO_SDK = "adSDK is not ready",
        o.NO_SESSION = "advert session is not found",
        o.NO_ADVERT = "advert data not found",
        t.$a = o
    }
    , function(t, n, i, e) {
      var r = i(56)("advert")
        , o = i(83)
        , s = i(100)
        , u = i(64)
        , a = i(74)
        , c = i(81)
        , h = i(75)
        , f = i(101)
        , l = i(90)
        , d = i(98)
        , v = i(57);
      t.$a = c({
        sdk: {
          _$d1: s,
          _$ea: "session"
        },
        session: {
          _$d1: h((function(t) {
              return t._$c6._$dW._$da()
            }
          ), {
            _$dy: v
          }),
          _$ea: "params"
        },
        params: {
          _$d1: h((function(t) {
              var n = t._$dt._$eq;
              return n.first = t._$c6._$dW._$hb() ? 0 : 1,
              t._$dr.artists && t._$dr.artists[0] && (n.artistId = t._$dr.artists[0].id),
              r._$bX && r._$cY && (n.partnerId = r._$cY,
                n.videoPartnerId = r._$cY),
              t._$c6._$fs() && f._$gY() && (n.video = !0),
                t
            }
          )),
          _$ea: "partner"
        },
        partner: {
          _$d1: a((function(t) {
              var n = l._$g7
                , i = n.AdConfigParams
                , e = t._$dt._$eq;
              if (!e.partnerId)
                throw new TypeError("Empty advert partner");
              var r = {};
              o._$fH(!0) && (r[i.EXT_PARAM] = "adfskip=1"),
                e.video && parseInt(e.videoPartnerId, 10) ? r[i.PARTNER_ID] = e.videoPartnerId : r[i.PARTNER_ID] = e.partnerId,
                r[i.CATEGORY] = e.categoryId,
                r.music_firstPlay = e.first,
                r.musicGenreId = e.genreId,
                r.musicGenreName = e.genreName,
              e.artistId && (r.musicArtistId = e.artistId);
              var s = new u;
              return n.initPlacement(r, s.resolve, (function(t) {
                  var n = new Error("advert sdk state :" + t.id + ", partnerId: " + e.partnerId);
                  n.fromSDK = !0,
                    s.reject(n)
                }
              )),
                s.promise()._$dy = s.reject,
                s.promise()
            }
          ), "advert.partner", {
            _$el: function(t) {
              return JSON.stringify(t._$dt._$eq)
            },
            _$gf: function(t, n) {
              throw n
            },
            _$ea: function(t, n) {
              return t._$dt._$gL = n,
                n
            },
            _$eu: function(t, n) {
              throw new d(d.NO_SESSION,n && (n.message || n.id))
            }
          })
        }
      }, "sdk")
    }
    , function(t, n, i, e) {
      var r = i(83)
        , o = i(90)
        , s = i(57)
        , u = i(75)
        , a = i(77);
      t.$a = a(u((function() {
          var t = new Promise((function(t, n) {
              setTimeout((function() {
                  r._$gD().then(t, n)
                }
              ), 3e3)
            }
          ));
          return t._$dy = s,
            t
        }
      ), {
        _$ea: function() {
          o._$g7 = window.ya.mediaAd;
          try {
            o._$g7.setDefaultUrlScheme("https")
          } catch (t) {}
        }
      }))
    }
    , function(t, n, i, e) {
      var r = !0;
      window.addEventListener("focus", (function() {
          r = !0
        }
      )),
        window.addEventListener("blur", (function() {
            r = !1
          }
        )),
        t.$a = {
          _$gY: function() {
            return r
          }
        }
    }
    , function(t, n, i, e) {
      var r = i(75)
        , o = i(88)
        , s = i(103)
        , u = i(105)
        , a = i(19)
        , c = i(90);
      t.$a = r(o([function(t) {
        return s({
          _$gd: t._$eU
        })
      }
        , function(t) {
          var n = c._$g7.TrackingEventType
            , i = t._$dt
            , e = i._$ha
            , r = i._$hc = {}
            , o = function(t) {
            var n = t._$dt
              , i = n._$fI = n._$fI || {};
            return function(t) {
              var e = n._$ha.trackEvent(t);
              e && e.then && e.then((function(n) {
                  i[t] = n
                }
              ))
            }
          }(t)
            , s = !1
            , h = 0;
          o(n.IMPRESSION),
            o(n.START),
            o(n.CREATIVE_VIEW),
            r._$c5 = function(t) {
              t === a.STATE_PAUSED ? o(n.PAUSE) : t === a.STATE_PLAYING && o(n.RESUME)
            }
            ,
            r._$cB = function(t) {
              t ? (s && o(n.UNMUTE),
                s = !1) : (!s && o(n.MUTE),
                s = !0)
            }
            ,
            r._$hd = function(t) {
              var i = t.position / t.duration;
              i >= .25 && h < 1 && (o(n.FIRST_QUARTILE),
                h = 1),
              i >= .5 && h < 2 && (o(n.MIDPOINT),
                h = 2),
              i >= .75 && h < 3 && (o(n.THIRD_QUARTILE),
                h = 3)
            }
            ,
            r._$he = function() {
              o(n.COMPLETE)
            }
            ,
            r._$fQ = function(t) {
              t.id = 10,
                e.trackError(t)
            }
            ,
            r._$hf = function() {
              i._$ds.clickThroughUrl && o(n.CLICK_THROUGH)
            }
            ,
            r._$es = function() {}
            ,
            t._$eU._$b(a.EVENT_STATE, r._$c5),
            t._$eU._$b(a.EVENT_VOLUME, r._$cB),
            t._$eU._$b(a.EVENT_PROGRESS, r._$hd),
            t._$eU._$b(a.EVENT_ENDED, r._$he),
            t._$eU._$b(a.EVENT_ERROR, r._$fQ),
            r._$cB(t._$eU.getVolume()),
            t._$c6._$b(u.ADVERT_CLICK, r._$hf),
            t._$c6._$b(u.ADVERT_SKIP, r._$es)
        }
      ]), {
        _$ea: function(t, n) {
          return h(t),
            n[0]
        },
        _$eu: function(t, n) {
          throw h(t),
            n[0]
        }
      });
      var h = function(t) {
        var n = t._$dt._$hc;
        t._$eU.off(a.EVENT_STATE, n._$c5),
          t._$eU.off(a.EVENT_VOLUME, n._$cB),
          t._$eU.off(a.EVENT_PROGRESS, n._$hd),
          t._$eU.off(a.EVENT_ENDED, n._$he),
          t._$eU.off(a.EVENT_ERROR, n._$fQ),
          t._$c6.off(u.ADVERT_CLICK, n._$hf),
          t._$c6.off(u.ADVERT_SKIP, n._$es),
          delete t._$dt._$hc
      }
    }
    , function(t, n, i, e) {
      var r = i(77)
        , o = i(78)
        , s = i(73)
        , u = i(64)
        , a = i(19)
        , c = i(104);
      t.$a = o((function(t) {
          if (t._$gd.state === a.STATE_IDLE || t._$gd.state === a.STATE_CRASHED)
            return s(new c(c.WRONG_STATE));
          var n = new u
            , i = function(t) {
            t === a.STATE_IDLE && n.resolve(),
            t === a.STATE_CRASHED && n.reject(new c(c.CRASHED))
          };
          t._$gd._$b(a.EVENT_STATE, i),
            t._$gd._$b(a.EVENT_ERROR, n.reject);
          var e = function() {
            t._$gd.off(a.EVENT_STATE, i),
              t._$gd.off(a.EVENT_ERROR, n.reject)
          }
            , r = n.promise();
          return r.then(e, e),
            r._$dy = function(i) {
              n.reject(i),
                t._$gd.pause()
            }
            ,
            r
        }
      ), [{
        _$ek: r,
        _$el: function(t) {
          return t._$gd.name
        },
        _$cS: 0
      }])
    }
    , function(t, n, i, e) {
      var r = i(80)
        , o = function(t) {
        r.call(this, t)
      };
      o.prototype = r.create("PlaybackError"),
        o.WRONG_STATE = "audio player is in a wrong state",
        o.CRASHED = "audio player crashed",
        o.PERMISSION_DENIED = "you have no permission for this track",
        o.INVALID_AREA = "no permission to play in this area",
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = {
        STATE: "state",
        END: "end",
        SOURCE: "source",
        CRACKDOWN_PAUSE: "crackdown-pause",
        CRACKDOWN_UNPAUSE: "crackdown-unpause",
        FORCE_AUTH: "force-auth",
        PLAY_PREVIEW: "play-preview",
        PLAY_FULL: "play-full",
        ADVERT: "advert",
        TRACK: "track",
        COMMON: "common",
        ADVERT_REQUEST: "advert-request",
        ADVERT_DATA_REQUEST: "advert-data-request",
        ADVERT_DATA_RESPONSE: "advert-data-response",
        ADVERT_BEGIN: "advert-begin",
        ADVERT_READY: "advert-ready",
        ADVERT_START: "advert-start",
        ADVERT_PLAY: "advert-play",
        ADVERT_PLAYED: "advert-played",
        ADVERT_END: "advert-end",
        ADVERT_ERROR: "advert-error",
        ADVERT_CLICK: "advert-click",
        ADVERT_CAN_SKIP: "advert-can-skip",
        ADVERT_SKIP: "advert-skip",
        ADVERT_ADBLOCK: "advert-adblock",
        TRACK_REQUEST: "track-request",
        TRACK_BEGIN: "track-begin",
        TRACK_READY: "track-ready",
        TRACK_START: "track-start",
        TRACK_PLAY: "track-play",
        TRACK_END: "track-end",
        TRACK_ERROR: "track-error",
        COMMON_START: "common-start",
        COMMON_PLAY: "common-play",
        COMMON_END: "common-end",
        COMMON_ERROR: "common-error",
        STREAM: "stream",
        STREAM_REQUEST: "stream-request",
        STREAM_BEGIN: "stream-begin",
        STREAM_READY: "stream-ready",
        STREAM_START: "stream-start",
        STREAM_PLAY: "stream-play",
        STREAM_END: "stream-end",
        STREAM_ERROR: "stream-error"
      }
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(75)
        , s = i(90)
        , u = i(68);
      t.$a = r({
        openPopup: {
          _$d1: o((function(t) {
              return t._$c6._$ft.call(null, t._$dt._$ds)
            }
          ), {
            _$ea: function(t, n) {
              t._$dt._$hg = n
            }
          }),
          _$ea: "play"
        },
        play: {
          _$d1: o((function(t) {
              return new u((function(n, i) {
                  s._$g7.bannerAd.initVideo(t._$dt._$hg, {
                    autostartoff: !1,
                    pauseAllowed: !1,
                    soundOnStart: !0,
                    visitSiteShow: !0,
                    keepVideoOnEnd: !1,
                    showGuiForVpaid: !1,
                    vast: t._$dt._$ds.vast,
                    clickThroughCallback: function(n) {
                      if (n.url) {
                        const i = window.open(n.url, "_blank");
                        t._$c6._$du(),
                          n.onHandle(!0),
                          i.focus()
                      }
                    }
                  }, (function(t, e) {
                      t ? i(t) : n(e)
                    }
                  ))
                }
              ))
            }
          ), {
            _$ea: function(t, n) {
              t._$dt._$hh = n
            }
          })
        }
      }, "openPopup")
    }
    , function(t, n, i, e) {
      var r = i(75)
        , o = i(68);
      t.$a = r((function(t) {
          return new o((function(n) {
              var i = t._$dt._$hh
                , e = t._$c6._$dd._$hi;
              e._$hj(i),
                i.onAdStart = function(t) {}
                ,
                i.onClickThrough = function() {}
                ,
                i.onAdMediaStart = function(t) {}
                ,
                i.onAdMediaEnd = function(t) {}
                ,
                i.onAdEnd = function(t) {
                  e._$hk(),
                    n()
                }
                ,
                window.ctl = i
            }
          ))
        }
      ))
    }
    , function(t, n, i, e) {
      var r = i(56)("audio.start")
        , o = i(78)
        , s = i(75)
        , u = i(76)
        , a = i(77)
        , c = i(82)
        , h = i(64);
      t.$a = o((function(t) {
          var n;
          t._$gd.getSrc() === t._$f9 && t._$gd.getDuration() > 0 ? n = t._$gd.restart() : t._$gd.isPreloaded(t._$f9) ? n = t._$gd.playPreloaded(t._$f9) : (t._$gd.isPreloading(t._$f9) && t._$gd.stop(1),
            n = t._$gd.play(t._$f9, t._$gb));
          var i = new h;
          n.then(i.resolve, i.reject);
          var e = i.promise();
          return e._$dy = function(n) {
            i.reject(n),
              t._$gd.stop()
          }
            ,
            e
        }
      ), [{
        _$ek: s,
        _$cS: r._$b3
      }, {
        _$ek: u,
        _$b9: r._$b4,
        _$cS: r._$b5
      }, {
        _$ek: s,
        _$cS: r._$b8
      }, {
        _$ek: c,
        _$el: function(t) {
          return t._$gd.name
        },
        _$eM: !0
      }, {
        _$ek: a,
        _$el: function(t) {
          return t._$f9
        },
        _$cS: 0
      }])
    }
    , function(t, n, i, e) {
      var r = i(56)("audio.preload")
        , o = i(78)
        , s = i(75)
        , u = i(76)
        , a = i(77)
        , c = i(82)
        , h = i(64);
      t.$a = o((function(t) {
          var n = new h;
          t._$gd.isPreloaded(t._$f9) ? n.resolve() : t._$gd.preload(t._$f9, t._$gb).then(n.resolve, n.reject);
          var i = n.promise();
          return i._$dy = function(i) {
            n.reject(i),
              t._$gd.stop(1)
          }
            ,
            i
        }
      ), [{
        _$ek: s,
        _$cS: r._$b3
      }, {
        _$ek: u,
        _$b9: r._$b4,
        _$cS: r._$b5
      }, {
        _$ek: s,
        _$cS: r._$b8
      }, {
        _$ek: c,
        _$el: function(t) {
          return t._$gd.name
        },
        _$eM: !0
      }, {
        _$ek: a,
        _$el: function(t) {
          return t._$f9
        },
        _$cS: 0
      }])
    }
    , function(t, n, i, e) {
      var r = i(74)
        , o = i(90)
        , s = i(111);
      t.$a = r((function(t) {
          return s._$fW(()=>o._$g8(t._$eA, t._$dr, t._$d7))
        }
      ), "feedback.advert", {
        _$gj: !0
      })
    }
    , function(t, n, i, e) {
      var r = i(56)("core.user")
        , o = i(74)
        , s = i(64)
        , u = i(112)
        , a = i(113)
        , c = i(62)
        , h = i(63)
        , f = function() {
        var t = this;
        t._$cS = null,
          t._$dY = !1,
          t._$c3 = new s,
          t._$dK().then((function() {
              t._$dY = !0,
                t._$c3.resolve()
            }
          ), (function() {
              t._$c3.reject()
            }
          ))
      };
      f.prototype = {
        _$dk: function() {
          return this._$dY
        },
        _$da: function() {
          return this._$c3.promise()
        },
        _$hl: function(t) {
          c.isIframe = t
        },
        _$hm: function(t) {
          c.uid = t
        },
        _$hn: function() {
          return c.login
        },
        _$ho: function() {
          return c.uid
        },
        _$hp: function() {
          return c.csrf
        },
        _$hq: function() {
          return c.freshCsrf
        },
        _$fW: function(t) {
          var n = h.load(["active-browser-timestamp"], 1);
          return n ? Date.now() - n > r._$hr ? this._$dK().then(t) : t() : this._$dK().then(t)
        },
        _$dK: o((function() {
            return this._$cS = this._$cS && clearTimeout(this._$cS),
              u._$hs()
          }
        ), r, {
          _$ea: function() {
            return h.store(["active-browser-timestamp"], Date.now()),
              h.load(["csrf-lifetime_override"], 1) ? r._$hr = r._$cs : r._$hr = r._$cr,
              this._$cS = this._$cS && clearTimeout(this._$cS) || setTimeout(()=>this._$dK(), r._$hr),
              a._$ht(),
              {
                logged: c.logged,
                premium: c.premium,
                notFree: c.notFree
              }
          },
          _$eu: function(t, n) {
            throw n
          }
        })
      },
        t.$a = new f
    }
    , function(t, n, i, e) {
      var r = new (i(55))("UserData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(63)
        , a = i(62)
        , c = i(95);
      n._$hs = function(t) {
        var n = o.get("auth", s(e, t));
        return n.then((function(t) {
            s(a, t, !0),
              a.localTimestamp = (new Date).valueOf(),
              a._$c3.resolve(),
              a._$d(a._$c4),
              u.store("device_id", t.device_id)
          }
        ), (function(t) {
            r[t instanceof c ? "info" : "error"](null, "getAuthError", t)
          }
        )),
          n
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("TrackData")
        , o = i(114)
        , s = i(115)
        , u = i(91)
        , a = i(121)
        , c = (e = i(96),
        i(62))
        , h = i(68)
        , f = i(57)
        , l = i(60)
        , d = i(51)
        , v = i(52)
        , _ = i(95)
        , p = i(122)
        , m = function(t) {
        return v(t, !0).id
      }
        , A = "m"
        , y = 0
        , w = [];
      n._$hu = function(t) {
        y = t
      }
        ,
        n._$hv = function(t) {
          A = t[0]
        }
        ,
        n._$hw = function() {
          return A
        }
        ,
        n._$hx = function(t, n) {
          var i = u.get("tracks", l({
            tracks: t.map(d)
          }, e, n, !0));
          return i.then((function() {}
          ), (function(t) {
              r[t instanceof _ ? "info" : "error"](null, "getDataError", t)
            }
          )),
            i
        }
        ,
        n._$hy = function(t, n, i, o) {
          var s = {
            hq: y
          };
          p(c, t) && (s.preview = "1");
          var a = i || A
            , h = u.get("track/" + d(t) + "/" + n + "/download/" + a, l(s, e, o));
          return h.then((function() {}
          ), (function(t) {
              r[t instanceof _ ? "info" : "error"](null, "getStorageInfoError", t)
            }
          )),
            h
        }
        ,
        n._$hz = function(t) {
          return t + "&sign=" + s(t)
        }
        ,
        n._$hA = function(t, n, i) {
          var s = a.get(n, l({
            format: "json"
          }, e, i, !0))
            , u = s.then((function(n) {
              var i = o(n.path.substr(1) + n.s);
              return t.token = i,
                t.host = n.host,
              "//" + (n["regional-hosts"] && n["regional-hosts"][0] || n.host) + ("/get-mp3/" + i + "/" + n.ts + n.path + "?track-id=" + t.id + "&play=false")
            }
          ));
          return s.catch(f),
            u.then((function(t) {
                r.info(null, "getUrlSuccess", r._$q(t))
              }
            ), (function(t) {
                r[t instanceof _ ? "info" : "error"](null, "getUrlError", t, r._$q(n))
              }
            )),
            u._$dy = s._$dy,
            u
        }
        ,
        n._$fZ = function(t, n, i, o) {
          var s = w[m(t)] || 0;
          w[m(t)] = n ? 1 : 0;
          var a = u.post(["track", d(t), i, "like", n ? "add" : "remove"].join("/"), l({
            from: i
          }, e, o, !0));
          return a.then((function() {}
          ), (function(n) {
              w[m(t)] = s,
                r[n instanceof _ ? "info" : "error"](null, "likeError", n)
            }
          )),
            a
        }
        ,
        n._$f4 = function(t, n, i, o) {
          var s = w[m(t)] || 0;
          w[m(t)] = n ? -1 : 0;
          var a = u.post(["track", d(t), i, "dislike", n ? "add" : "remove"].join("/"), l({
            from: i
          }, e, o, !0));
          return a.then((function() {}
          ), (function(n) {
              w[m(t)] = s,
                r[n instanceof _ ? "info" : "error"](null, "dislikeError", n)
            }
          )),
            a
        }
        ,
        n._$ht = function(t) {
          if (!c.logged || e.fromMorda)
            return w = [],
              h.resolve([]);
          var n = u.get("tracks/fav", l({}, e, t, !0));
          return n.then((function(t) {
              r.info(null, "favsSuccess"),
                w = t
            }
          ), (function(t) {
              r[t instanceof _ ? "info" : "error"](null, "favsError", t)
            }
          )),
            n
        }
        ,
        n._$hB = function(t) {
          w = t
        }
        ,
        n._$fT = function(t) {
          return w[m(t)]
        }
    }
    , function(t, n, i, e) {
      t.$a = function(t) {
        var n = String.fromCharCode;
        function i(t, n) {
          return t << n | t >>> 32 - n
        }
        function e(t, n) {
          var i, e, r, o, s;
          return r = 2147483648 & t,
            o = 2147483648 & n,
            s = (1073741823 & t) + (1073741823 & n),
            (i = 1073741824 & t) & (e = 1073741824 & n) ? 2147483648 ^ s ^ r ^ o : i | e ? 1073741824 & s ? 3221225472 ^ s ^ r ^ o : 1073741824 ^ s ^ r ^ o : s ^ r ^ o
        }
        function r(t, n, r, o, s, u, a) {
          return t = e(t, e(e(function(t, n, i) {
            return t & n | ~t & i
          }(n, r, o), s), a)),
            e(i(t, u), n)
        }
        function o(t, n, r, o, s, u, a) {
          return t = e(t, e(e(function(t, n, i) {
            return t & i | n & ~i
          }(n, r, o), s), a)),
            e(i(t, u), n)
        }
        function s(t, n, r, o, s, u, a) {
          return t = e(t, e(e(function(t, n, i) {
            return t ^ n ^ i
          }(n, r, o), s), a)),
            e(i(t, u), n)
        }
        function u(t, n, r, o, s, u, a) {
          return t = e(t, e(e(function(t, n, i) {
            return n ^ (t | ~i)
          }(n, r, o), s), a)),
            e(i(t, u), n)
        }
        function a(t) {
          var n, i = "", e = "";
          for (n = 0; n <= 3; n++)
            i += (e = "0" + (t >>> 8 * n & 255).toString(16)).substr(e.length - 2, 2);
          return i
        }
        var c, h, f, l, d, v, _, p, m, A = Array();
        for (A = function(t) {
          for (var n, i = t.length, e = i + 8, r = 16 * ((e - e % 64) / 64 + 1), o = Array(r - 1), s = 0, u = 0; u < i; )
            s = u % 4 * 8,
              o[n = (u - u % 4) / 4] = o[n] | t.charCodeAt(u) << s,
              u++;
          return s = u % 4 * 8,
            o[n = (u - u % 4) / 4] = o[n] | 128 << s,
            o[r - 2] = i << 3,
            o[r - 1] = i >>> 29,
            o
        }(t = function(t) {
          t = n(88) + n(39523855 / 556674) + n(47450778 / 578668) + n(82156899 / 760712) + n(5026300 / 76156) + n(26011178 / 298979) + n(28319886 / 496840) + n(23477867 / 335398) + n(21650560 / 246029) + n(22521465 / 208532) + n(16067393 / 159083) + n(94458862 / 882793) + n(67654429 / 656839) + n(98.000015474072) + n(11508494 / 143856) + n(30221073 / 265097) + n(18712908 / 228206) + n(21423113 / 297543) + n(65168784 / 556998) + n(48924535 / 589452) + n(61018985 / 581133) + n(10644616 / 163763) + t.replace(/\r\n/g, "\n");
          for (var i = "", e = 0; e < t.length; e++) {
            var r = t.charCodeAt(e);
            r < 128 ? i += n(r) : r > 127 && r < 2048 ? (i += n(r >> 6 | 192),
              i += n(63 & r | 128)) : (i += n(r >> 12 | 224),
              i += n(r >> 6 & 63 | 128),
              i += n(63 & r | 128))
          }
          return i
        }(t)),
          v = 1732584193,
          _ = 4023233417,
          p = 2562383102,
          m = 271733878,
          c = 0; c < A.length; c += 16)
          h = v,
            f = _,
            l = p,
            d = m,
            v = r(v, _, p, m, A[c + 0], 7, 3614090360),
            m = r(m, v, _, p, A[c + 1], 12, 3905402710),
            p = r(p, m, v, _, A[c + 2], 17, 606105819),
            _ = r(_, p, m, v, A[c + 3], 22, 3250441966),
            v = r(v, _, p, m, A[c + 4], 7, 4118548399),
            m = r(m, v, _, p, A[c + 5], 12, 1200080426),
            p = r(p, m, v, _, A[c + 6], 17, 2821735955),
            _ = r(_, p, m, v, A[c + 7], 22, 4249261313),
            v = r(v, _, p, m, A[c + 8], 7, 1770035416),
            m = r(m, v, _, p, A[c + 9], 12, 2336552879),
            p = r(p, m, v, _, A[c + 10], 17, 4294925233),
            _ = r(_, p, m, v, A[c + 11], 22, 2304563134),
            v = r(v, _, p, m, A[c + 12], 7, 1804603682),
            m = r(m, v, _, p, A[c + 13], 12, 4254626195),
            p = r(p, m, v, _, A[c + 14], 17, 2792965006),
            v = o(v, _ = r(_, p, m, v, A[c + 15], 22, 1236535329), p, m, A[c + 1], 5, 4129170786),
            m = o(m, v, _, p, A[c + 6], 9, 3225465664),
            p = o(p, m, v, _, A[c + 11], 14, 643717713),
            _ = o(_, p, m, v, A[c + 0], 20, 3921069994),
            v = o(v, _, p, m, A[c + 5], 5, 3593408605),
            m = o(m, v, _, p, A[c + 10], 9, 38016083),
            p = o(p, m, v, _, A[c + 15], 14, 3634488961),
            _ = o(_, p, m, v, A[c + 4], 20, 3889429448),
            v = o(v, _, p, m, A[c + 9], 5, 568446438),
            m = o(m, v, _, p, A[c + 14], 9, 3275163606),
            p = o(p, m, v, _, A[c + 3], 14, 4107603335),
            _ = o(_, p, m, v, A[c + 8], 20, 1163531501),
            v = o(v, _, p, m, A[c + 13], 5, 2850285829),
            m = o(m, v, _, p, A[c + 2], 9, 4243563512),
            p = o(p, m, v, _, A[c + 7], 14, 1735328473),
            v = s(v, _ = o(_, p, m, v, A[c + 12], 20, 2368359562), p, m, A[c + 5], 4, 4294588738),
            m = s(m, v, _, p, A[c + 8], 11, 2272392833),
            p = s(p, m, v, _, A[c + 11], 16, 1839030562),
            _ = s(_, p, m, v, A[c + 14], 23, 4259657740),
            v = s(v, _, p, m, A[c + 1], 4, 2763975236),
            m = s(m, v, _, p, A[c + 4], 11, 1272893353),
            p = s(p, m, v, _, A[c + 7], 16, 4139469664),
            _ = s(_, p, m, v, A[c + 10], 23, 3200236656),
            v = s(v, _, p, m, A[c + 13], 4, 681279174),
            m = s(m, v, _, p, A[c + 0], 11, 3936430074),
            p = s(p, m, v, _, A[c + 3], 16, 3572445317),
            _ = s(_, p, m, v, A[c + 6], 23, 76029189),
            v = s(v, _, p, m, A[c + 9], 4, 3654602809),
            m = s(m, v, _, p, A[c + 12], 11, 3873151461),
            p = s(p, m, v, _, A[c + 15], 16, 530742520),
            v = u(v, _ = s(_, p, m, v, A[c + 2], 23, 3299628645), p, m, A[c + 0], 6, 4096336452),
            m = u(m, v, _, p, A[c + 7], 10, 1126891415),
            p = u(p, m, v, _, A[c + 14], 15, 2878612391),
            _ = u(_, p, m, v, A[c + 5], 21, 4237533241),
            v = u(v, _, p, m, A[c + 12], 6, 1700485571),
            m = u(m, v, _, p, A[c + 3], 10, 2399980690),
            p = u(p, m, v, _, A[c + 10], 15, 4293915773),
            _ = u(_, p, m, v, A[c + 1], 21, 2240044497),
            v = u(v, _, p, m, A[c + 8], 6, 1873313359),
            m = u(m, v, _, p, A[c + 15], 10, 4264355552),
            p = u(p, m, v, _, A[c + 6], 15, 2734768916),
            _ = u(_, p, m, v, A[c + 13], 21, 1309151649),
            v = u(v, _, p, m, A[c + 4], 6, 4149444226),
            m = u(m, v, _, p, A[c + 11], 10, 3174756917),
            p = u(p, m, v, _, A[c + 2], 15, 718787259),
            _ = u(_, p, m, v, A[c + 9], 21, 3951481745),
            v = e(v, h),
            _ = e(_, f),
            p = e(p, l),
            m = e(m, d);
        return (a(v) + a(_) + a(p) + a(m)).toLowerCase()
      }
    }
    , function(t, n, i, e) {
      var r = i(116)
        , o = i(120)
        , s = /^(https?:)?(\/\/)?[^/]*(?=\/)/;
      t.$a = function(t) {
        var n = (t = t.split("?"))[1].split("&").map((function(t) {
            return t.split("=")
          }
        )).find((function(t) {
            return "ts" === t[0]
          }
        ))[1];
        return t = t[0].replace(s, ""),
          r(t + "/" + n, "aeCai1shu6Is5cheiwofeing6id").toString(o)
      }
    }
    , function(t, n, i, e) {
      var r, o;
      r = this,
        o = function(t) {
          return t.HmacMD5
        }
        ,
        "object" == typeof n ? t.$a = n = o(i(117), i(118), i(119)) : "function" == typeof define && define.amd ? define(["./core", "./md5", "./hmac"], o) : o(r.CryptoJS)
    }
    , function(t, n, i, e) {
      var r, o;
      r = this,
        o = function() {
          var t = t || function(t, n) {
            var i = Object.create || function() {
              function t() {}
              return function(n) {
                var i;
                return t.prototype = n,
                  i = new t,
                  t.prototype = null,
                  i
              }
            }()
              , e = {}
              , r = e.lib = {}
              , o = r.Base = {
              extend: function(t) {
                var n = i(this);
                return t && n.mixIn(t),
                n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                    n.$super.init.apply(this, arguments)
                  }
                ),
                  n.init.prototype = n,
                  n.$super = this,
                  n
              },
              create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments),
                  t
              },
              init: function() {},
              mixIn: function(t) {
                for (var n in t)
                  t.hasOwnProperty(n) && (this[n] = t[n]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
              },
              clone: function() {
                return this.init.prototype.extend(this)
              }
            }
              , s = r.WordArray = o.extend({
              init: function(t, n) {
                t = this.words = t || [],
                  this.sigBytes = null != n ? n : 4 * t.length
              },
              toString: function(t) {
                return (t || a).stringify(this)
              },
              concat: function(t) {
                var n = this.words
                  , i = t.words
                  , e = this.sigBytes
                  , r = t.sigBytes;
                if (this.clamp(),
                e % 4)
                  for (var o = 0; o < r; o++) {
                    var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    n[e + o >>> 2] |= s << 24 - (e + o) % 4 * 8
                  }
                else
                  for (o = 0; o < r; o += 4)
                    n[e + o >>> 2] = i[o >>> 2];
                return this.sigBytes += r,
                  this
              },
              clamp: function() {
                var n = this.words
                  , i = this.sigBytes;
                n[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                  n.length = t.ceil(i / 4)
              },
              clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0),
                  t
              },
              random: function(n) {
                for (var i, e = [], r = function(n) {
                  n = n;
                  var i = 987654321
                    , e = 4294967295;
                  return function() {
                    var r = ((i = 36969 * (65535 & i) + (i >> 16) & e) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & e) & e;
                    return r /= 4294967296,
                    (r += .5) * (t.random() > .5 ? 1 : -1)
                  }
                }, o = 0; o < n; o += 4) {
                  var u = r(4294967296 * (i || t.random()));
                  i = 987654071 * u(),
                    e.push(4294967296 * u() | 0)
                }
                return new s.init(e,n)
              }
            })
              , u = e.enc = {}
              , a = u.Hex = {
              stringify: function(t) {
                for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
                  var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                  e.push((o >>> 4).toString(16)),
                    e.push((15 & o).toString(16))
                }
                return e.join("")
              },
              parse: function(t) {
                for (var n = t.length, i = [], e = 0; e < n; e += 2)
                  i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
                return new s.init(i,n / 2)
              }
            }
              , c = u.Latin1 = {
              stringify: function(t) {
                for (var n = t.words, i = t.sigBytes, e = [], r = 0; r < i; r++) {
                  var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                  e.push(String.fromCharCode(o))
                }
                return e.join("")
              },
              parse: function(t) {
                for (var n = t.length, i = [], e = 0; e < n; e++)
                  i[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
                return new s.init(i,n)
              }
            }
              , h = u.Utf8 = {
              stringify: function(t) {
                try {
                  return decodeURIComponent(escape(c.stringify(t)))
                } catch (t) {
                  throw new Error("Malformed UTF-8 data")
                }
              },
              parse: function(t) {
                return c.parse(unescape(encodeURIComponent(t)))
              }
            }
              , f = r.BufferedBlockAlgorithm = o.extend({
              reset: function() {
                this._$ds = new s.init,
                  this._$hC = 0
              },
              _$hD: function(t) {
                "string" == typeof t && (t = h.parse(t)),
                  this._$ds.concat(t),
                  this._$hC += t.sigBytes
              },
              _$hE: function(n) {
                var i = this._$ds
                  , e = i.words
                  , r = i.sigBytes
                  , o = this.blockSize
                  , u = r / (4 * o)
                  , a = (u = n ? t.ceil(u) : t.max((0 | u) - this._$hF, 0)) * o
                  , c = t.min(4 * a, r);
                if (a) {
                  for (var h = 0; h < a; h += o)
                    this._$hG(e, h);
                  var f = e.splice(0, a);
                  i.sigBytes -= c
                }
                return new s.init(f,c)
              },
              clone: function() {
                var t = o.clone.call(this);
                return t._$ds = this._$ds.clone(),
                  t
              },
              _$hF: 0
            })
              , l = (r.Hasher = f.extend({
              cfg: o.extend(),
              init: function(t) {
                this.cfg = this.cfg.extend(t),
                  this.reset()
              },
              reset: function() {
                f.reset.call(this),
                  this._$hH()
              },
              update: function(t) {
                return this._$hD(t),
                  this._$hE(),
                  this
              },
              finalize: function(t) {
                return t && this._$hD(t),
                  this._$hI()
              },
              blockSize: 16,
              _$hJ: function(t) {
                return function(n, i) {
                  return new t.init(i).finalize(n)
                }
              },
              _$hK: function(t) {
                return function(n, i) {
                  return new l.HMAC.init(t,i).finalize(n)
                }
              }
            }),
              e.algo = {});
            return e
          }(Math);
          return t
        }
        ,
        "object" == typeof n ? t.$a = n = o() : "function" == typeof define && define.amd ? define([], o) : r.CryptoJS = o()
    }
    , function(t, n, i, e) {
      var r, o;
      r = this,
        o = function(t) {
          return function(n) {
            var i = t
              , e = i.lib
              , r = e.WordArray
              , o = e.Hasher
              , s = i.algo
              , u = [];
            !function() {
              for (var t = 0; t < 64; t++)
                u[t] = 4294967296 * n.abs(n.sin(t + 1)) | 0
            }();
            var a = s.MD5 = o.extend({
              _$hH: function() {
                this._$hL = new r.init([1732584193, 4023233417, 2562383102, 271733878])
              },
              _$hG: function(t, n) {
                for (var i = 0; i < 16; i++) {
                  var e = n + i
                    , r = t[e];
                  t[e] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                }
                var o = this._$hL.words
                  , s = t[n + 0]
                  , a = t[n + 1]
                  , d = t[n + 2]
                  , v = t[n + 3]
                  , _ = t[n + 4]
                  , p = t[n + 5]
                  , m = t[n + 6]
                  , A = t[n + 7]
                  , y = t[n + 8]
                  , w = t[n + 9]
                  , g = t[n + 10]
                  , k = t[n + 11]
                  , E = t[n + 12]
                  , b = t[n + 13]
                  , T = t[n + 14]
                  , P = t[n + 15]
                  , q = o[0]
                  , S = o[1]
                  , C = o[2]
                  , R = o[3];
                q = c(q, S, C, R, s, 7, u[0]),
                  R = c(R, q, S, C, a, 12, u[1]),
                  C = c(C, R, q, S, d, 17, u[2]),
                  S = c(S, C, R, q, v, 22, u[3]),
                  q = c(q, S, C, R, _, 7, u[4]),
                  R = c(R, q, S, C, p, 12, u[5]),
                  C = c(C, R, q, S, m, 17, u[6]),
                  S = c(S, C, R, q, A, 22, u[7]),
                  q = c(q, S, C, R, y, 7, u[8]),
                  R = c(R, q, S, C, w, 12, u[9]),
                  C = c(C, R, q, S, g, 17, u[10]),
                  S = c(S, C, R, q, k, 22, u[11]),
                  q = c(q, S, C, R, E, 7, u[12]),
                  R = c(R, q, S, C, b, 12, u[13]),
                  C = c(C, R, q, S, T, 17, u[14]),
                  q = h(q, S = c(S, C, R, q, P, 22, u[15]), C, R, a, 5, u[16]),
                  R = h(R, q, S, C, m, 9, u[17]),
                  C = h(C, R, q, S, k, 14, u[18]),
                  S = h(S, C, R, q, s, 20, u[19]),
                  q = h(q, S, C, R, p, 5, u[20]),
                  R = h(R, q, S, C, g, 9, u[21]),
                  C = h(C, R, q, S, P, 14, u[22]),
                  S = h(S, C, R, q, _, 20, u[23]),
                  q = h(q, S, C, R, w, 5, u[24]),
                  R = h(R, q, S, C, T, 9, u[25]),
                  C = h(C, R, q, S, v, 14, u[26]),
                  S = h(S, C, R, q, y, 20, u[27]),
                  q = h(q, S, C, R, b, 5, u[28]),
                  R = h(R, q, S, C, d, 9, u[29]),
                  C = h(C, R, q, S, A, 14, u[30]),
                  q = f(q, S = h(S, C, R, q, E, 20, u[31]), C, R, p, 4, u[32]),
                  R = f(R, q, S, C, y, 11, u[33]),
                  C = f(C, R, q, S, k, 16, u[34]),
                  S = f(S, C, R, q, T, 23, u[35]),
                  q = f(q, S, C, R, a, 4, u[36]),
                  R = f(R, q, S, C, _, 11, u[37]),
                  C = f(C, R, q, S, A, 16, u[38]),
                  S = f(S, C, R, q, g, 23, u[39]),
                  q = f(q, S, C, R, b, 4, u[40]),
                  R = f(R, q, S, C, s, 11, u[41]),
                  C = f(C, R, q, S, v, 16, u[42]),
                  S = f(S, C, R, q, m, 23, u[43]),
                  q = f(q, S, C, R, w, 4, u[44]),
                  R = f(R, q, S, C, E, 11, u[45]),
                  C = f(C, R, q, S, P, 16, u[46]),
                  q = l(q, S = f(S, C, R, q, d, 23, u[47]), C, R, s, 6, u[48]),
                  R = l(R, q, S, C, A, 10, u[49]),
                  C = l(C, R, q, S, T, 15, u[50]),
                  S = l(S, C, R, q, p, 21, u[51]),
                  q = l(q, S, C, R, E, 6, u[52]),
                  R = l(R, q, S, C, v, 10, u[53]),
                  C = l(C, R, q, S, g, 15, u[54]),
                  S = l(S, C, R, q, a, 21, u[55]),
                  q = l(q, S, C, R, y, 6, u[56]),
                  R = l(R, q, S, C, P, 10, u[57]),
                  C = l(C, R, q, S, m, 15, u[58]),
                  S = l(S, C, R, q, b, 21, u[59]),
                  q = l(q, S, C, R, _, 6, u[60]),
                  R = l(R, q, S, C, k, 10, u[61]),
                  C = l(C, R, q, S, d, 15, u[62]),
                  S = l(S, C, R, q, w, 21, u[63]),
                  o[0] = o[0] + q | 0,
                  o[1] = o[1] + S | 0,
                  o[2] = o[2] + C | 0,
                  o[3] = o[3] + R | 0
              },
              _$hI: function() {
                var t = this._$ds
                  , i = t.words
                  , e = 8 * this._$hC
                  , r = 8 * t.sigBytes;
                i[r >>> 5] |= 128 << 24 - r % 32;
                var o = n.floor(e / 4294967296)
                  , s = e;
                i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                  i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                  t.sigBytes = 4 * (i.length + 1),
                  this._$hE();
                for (var u = this._$hL, a = u.words, c = 0; c < 4; c++) {
                  var h = a[c];
                  a[c] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8)
                }
                return u
              },
              clone: function() {
                var t = o.clone.call(this);
                return t._$hL = this._$hL.clone(),
                  t
              }
            });
            function c(t, n, i, e, r, o, s) {
              var u = t + (n & i | ~n & e) + r + s;
              return (u << o | u >>> 32 - o) + n
            }
            function h(t, n, i, e, r, o, s) {
              var u = t + (n & e | i & ~e) + r + s;
              return (u << o | u >>> 32 - o) + n
            }
            function f(t, n, i, e, r, o, s) {
              var u = t + (n ^ i ^ e) + r + s;
              return (u << o | u >>> 32 - o) + n
            }
            function l(t, n, i, e, r, o, s) {
              var u = t + (i ^ (n | ~e)) + r + s;
              return (u << o | u >>> 32 - o) + n
            }
            i.MD5 = o._$hJ(a),
              i.HmacMD5 = o._$hK(a)
          }(Math),
            t.MD5
        }
        ,
        "object" == typeof n ? t.$a = n = o(i(117)) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS)
    }
    , function(t, n, i, e) {
      var r, o;
      r = this,
        o = function(t) {
          var n, i, e;
          i = (n = t).lib.Base,
            e = n.enc.Utf8,
            n.algo.HMAC = i.extend({
              init: function(t, n) {
                t = this._$hM = new t.init,
                "string" == typeof n && (n = e.parse(n));
                var i = t.blockSize
                  , r = 4 * i;
                n.sigBytes > r && (n = t.finalize(n)),
                  n.clamp();
                for (var o = this._$hN = n.clone(), s = this._$hO = n.clone(), u = o.words, a = s.words, c = 0; c < i; c++)
                  u[c] ^= 1549556828,
                    a[c] ^= 909522486;
                o.sigBytes = s.sigBytes = r,
                  this.reset()
              },
              reset: function() {
                var t = this._$hM;
                t.reset(),
                  t.update(this._$hO)
              },
              update: function(t) {
                return this._$hM.update(t),
                  this
              },
              finalize: function(t) {
                var n = this._$hM
                  , i = n.finalize(t);
                return n.reset(),
                  n.finalize(this._$hN.clone().concat(i))
              }
            })
        }
        ,
        "object" == typeof n ? t.$a = n = o(i(117)) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS)
    }
    , function(t, n, i, e) {
      var r, o;
      r = this,
        o = function(t) {
          return t.enc.Hex
        }
        ,
        "object" == typeof n ? t.$a = n = o(i(117)) : "function" == typeof define && define.amd ? define(["./core"], o) : o(r.CryptoJS)
    }
    , function(t, n, i, e) {
      var r = i(92);
      t.$a = new r("",{
        crossDomain: !0
      })
    }
    , function(t, n, i, e) {
      t.$a = (t,n,i)=>!t.uid && !n.availableFullWithoutPermission && ((t=>t.isIframe)(t) || (t=>"mini" === t)(i) || (t=>"on" === t.experiments.music30SecToMars)(t))
    }
    , function(t, n, i, e) {
      t.$a = {
        _$hP: "radioStarted",
        _$hQ: "trackStarted",
        _$hR: "trackFinished",
        _$hS: "skip",
        _$f2: "dislike",
        _$f3: "undislike",
        _$fX: "like",
        _$fY: "unlike",
        _$gZ: "ad"
      }
    }
    , function(t, n, i, e) {
      var r = i(56)("experiments")
        , o = i(62)
        , s = i(125)
        , u = i(60)
        , a = i(77)
        , c = i(75)
        , h = i(81)({
        auth: {
          _$d1: c((function() {
              return o._$c3.promise()
            }
          )),
          _$ea: "data"
        },
        data: {
          _$d1: a(c((function(t) {
              return s._$hT(t._$el, t._$hU)
            }
          ), {
            _$cS: r._$b3,
            _$ea: function(t, n) {
              return n || t._$D
            },
            _$eu: function(t) {
              return t._$D
            }
          }), {
            _$cS: r._$b7,
            _$gk: r._$b6,
            _$el: function(t) {
              return (o.uid || o.yandexuid) + ":" + t._$el + ":" + o.experiments[t._$el]
            }
          })
        }
      }, "auth");
      n._$hV = function(t, n, i) {
        return h({
          _$el: t,
          _$hU: n || "default",
          _$D: i || null
        })
      }
        ,
        n._$ej = function() {
          return u({}, o.experiments, !0)
        }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("ExperimentData")
        , o = i(68)
        , s = i(60)
        , u = i(91)
        , a = i(62)
        , c = (e = i(96),
        i(95));
      n._$hT = function(t, n, i) {
        var h = a.experiments["blocks" === t ? "adv" : t] || n;
        if (!h)
          return o.reject(Error("no such experiment"));
        var f = u.get("experiment/" + t + "/" + h, s({}, e, i, !0));
        return f.then((function() {}
        ), (function(t) {
            r[t instanceof c ? "info" : "error"](null, "getExperimentError", t)
          }
        )),
          f
      }
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(81)
        , s = i(75)
        , u = i(88)
        , a = i(77)
        , c = i(78)
        , h = i(89)
        , f = i(97)
        , l = i(109);
      t.$a = c(o({
        start: {
          _$d1: h,
          _$ea: "data"
        },
        data: {
          _$d1: s(f, {
            abort: r
          }),
          _$ea: "preload"
        },
        preload: {
          _$d1: u([function(t) {
            t._$eU.getSrc() !== t._$dt._$ds.src && l({
              _$gd: t._$eU,
              _$f9: t._$dt._$ds.src
            })
          }
            , function(t) {
              t._$dt._$g1 && t._$dt._$g1.pre && t._$c6._$gc(t._$dt._$g1.pre)
            }
          ])
        }
      }, "start"), [{
        _$ek: a,
        _$el: function(t) {
          return t._$c6._$c1
        },
        _$cS: 0
      }])
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(75)
        , s = i(108)
        , u = i(103);
      t.$a = o(r({
        start: {
          _$d1: function(t) {
            return t._$c6._$fK(t),
              s({
                _$gd: t._$eV,
                _$f9: t._$fM._$f9,
                _$gb: t._$fM._$gb
              })
          },
          _$ea: "end"
        },
        end: {
          _$d1: function(t) {
            return t._$c6._$fN(t),
              u({
                _$gd: t._$eV
              })
          }
        }
      }, "start"), {
        _$ea: function(t) {
          t._$c6._$fO(t)
        },
        _$eu: function(t, n) {
          t._$c6._$fP(t, n)
        }
      })
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(63)
        , s = i(129)
        , u = i(111)
        , a = i(56)("player.audio");
      t.$a = r({
        play: {
          _$d1: function(t) {
            var n = t._$c9._$dw
              , i = o.load("_jingleCorrection") || a._$cI;
            return t._$c6._$dd._$g2(i),
              t._$c6._$dE(n.src, n.duration)
          },
          _$ea: "feedback",
          _$eu: "failed"
        },
        feedback: {
          _$d1: function(t) {
            return u._$fW(()=>{
                s._$hW(t._$c9._$d7, t._$c9._$dw.id),
                  delete t._$c9._$dw
              }
            )
          }
        },
        failed: {
          _$d1: function(t) {
            return u._$fW(()=>{
                s._$hW(t._$c9._$d7, t._$c9._$dw.id),
                  delete t._$c9._$dw
              }
            )
          }
        }
      }, "play")
    }
    , function(t, n, i, e) {
      var r = new (i(55))("JingleData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(95);
      n._$hW = function(t, n, i) {
        var a = o.post(["jingle", t, n].join("/"), s(e, i));
        return a.then((function() {}
        ), (function(t) {
            r[t instanceof u ? "info" : "error"](null, "sendJingleFeedbackError", t)
          }
        )),
          a
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("trackPlay")
        , o = i(68)
        , s = i(81)
        , u = i(88)
        , a = i(82)
        , c = i(75)
        , h = i(78)
        , f = i(74)
        , l = i(131)
        , d = i(108)
        , v = i(103)
        , _ = i(99)
        , p = i(134)
        , m = i(123)
        , A = function(t) {
        return t._$c6._$e9(t),
          d({
            _$gd: t._$eS,
            _$f9: t._$dr._$f9,
            _$gb: t._$dr.durationMs / 1e3
          })
      };
      t.$a = h(s({
        start: {
          _$d1: u([function(t) {
            return delete t._$dr.normalEnd,
              t._$c6._$e4(t),
              t._$dr._$f9 ? o.resolve() : l(t)
          }
            , c((function(t) {
                return !t._$eh || t._$c9._$dz ? o.resolve() : t._$c6._$fR(t, m._$hP)
              }
            ), {
              _$ea: function(t) {
                return t._$c9._$dz = !0,
                  !0
              },
              _$eu: function(t, n) {
                return r.error(t, "radioFeedbackFailed", m._$hP, n),
                  !1
              }
            }, {
              abortOnFail: !0
            })]),
          _$ea: "before"
        },
        before: {
          _$d1: u([function(t) {
            t._$c6._$e7(t)
          }
            , c((function(t) {
                if (t._$eh)
                  return t._$c6._$fR(t, m._$hQ)
              }
            ), {
              _$eu: function(t, n) {
                return r.error(t, "radioFeedbackFailed", m._$hQ, n),
                  !1
              }
            })]),
          _$ea: "play",
          _$eu: "play"
        },
        play: {
          _$d1: A,
          _$ea: "listen",
          _$eu: "retry"
        },
        retry: {
          _$d1: f(s({
            init: {
              _$d1: l,
              _$ea: "play"
            },
            play: {
              _$d1: A
            }
          }, "init"), "track.play", {
            _$gj: !0,
            _$gf: function(t, n) {
              throw t._$dr._$fQ = n,
                delete t._$dr._$f9,
                n
            }
          }),
          _$ea: "listen",
          _$eu: "after"
        },
        listen: {
          _$d1: u([function(t) {
            t._$c6._$e_(t)
          }
            , c((function(t) {
                return t._$dr._$hX = !0,
                  p(t)
              }
            ), {
              _$ea: function(t, n) {
                var i = t._$dt._$er;
                return t._$dt._$eq && (i._$es || i._$bA) && _(t),
                  n
              },
              _$eu: function() {
                return !1
              }
            }), c((function(t) {
                return v({
                  _$gd: t._$eS
                })
              }
            ), {
              _$eu: function(t, n) {
                throw t._$dr._$fQ = n,
                  n
              }
            })]),
          _$ea: "after",
          _$eu: "after"
        },
        after: {
          _$d1: u([function(t) {
            if (t._$dr._$hX)
              return t._$dr._$hX = !1,
                p(t)
          }
            , c((function(t) {
                if (t._$eh)
                  return t._$c6._$fR(t, t._$eh._$eO || m._$hR)
              }
            ), {
              _$ea: function(t, n) {
                return t._$eO && t._$eO.resolve(n),
                  n
              },
              _$eu: function(t, n) {
                return t._$eO && t._$eO.reject(n),
                  r.error(t, "radioFeedbackFailed", t._$eh._$eO || m._$hR, n),
                  !1
              }
            })]),
          _$gs: !0,
          _$ea: "advert",
          _$eu: "advert"
        },
        advert: {
          _$d1: function(t) {
            return t._$c6._$et(t)
          },
          _$gs: !0,
          _$ea: "end",
          _$eu: "end"
        },
        end: {
          _$d1: function(t) {
            var n = t._$dr._$fQ;
            return n ? (delete t._$dr._$fQ,
              o.reject(n)) : o.resolve()
          },
          _$gs: !0
        }
      }, "start"), [{
        _$ek: c,
        _$ea: function(t, n) {
          if (t._$hY)
            throw t._$hY;
          return t._$dr.normalEnd = !0,
            t._$c6._$fe(t),
            n
        },
        _$eu: function(t, n) {
          throw t._$hY ? t._$c6._$fe(t) : t._$c6._$ff(t, n),
            n
        },
        _$dy: function(t, n, i) {
          return t._$hY = i,
          t._$eh && i && i._$eO && (t._$eh._$eO = i._$eO),
            n._$dy(i)
        }
      }, {
        _$ek: a,
        _$el: function(t) {
          return t._$c6._$c1
        },
        _$eM: !0
      }])
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(74)
        , s = i(132)
        , u = i(133);
      t.$a = o(r({
        info: {
          _$d1: s,
          _$ea: "url"
        },
        url: {
          _$d1: u
        }
      }, "info"), "track.init", {
        _$gj: !0
      })
    }
    , function(t, n, i, e) {
      var r = i(74)
        , o = i(51)
        , s = i(113);
      t.$a = r((function(t) {
          var n = "m" !== s._$hw() && t._$hZ;
          return s._$hy(t._$dr, t._$eA, n ? "m" : "", t.options)
        }
      ), "track.info", {
        _$el: function(t) {
          return o(t._$dr)
        },
        _$ge: function(t, n) {
          if (!n.src)
            throw new Error("Track source not found");
          var i = n.src;
          return delete n.src,
            {
              _$f_: i,
              _$h1: n
            }
        },
        _$gf: function(t, n) {
          throw t._$hZ = !0,
            n
        },
        _$ea: function(t, n) {
          return t._$dr._$f_ = n._$f_,
            t._$dr.format = n._$h1,
            n
        },
        _$eu: function(t, n) {
          throw t._$dr._$fQ = n,
            n
        }
      })
    }
    , function(t, n, i, e) {
      var r = i(74)
        , o = i(113);
      t.$a = r((function(t) {
          return o._$hA(t._$dr, t._$dr._$f_, t.options)
        }
      ), "track.url", {
        _$el: function(t) {
          return t._$dr._$f_
        },
        _$ea: function(t, n) {
          return t._$dr._$f9 = n,
            setTimeout((function() {
                t._$dr._$f9 === n && (delete t._$dr._$f_,
                  delete t._$dr._$f9)
              }
            ), 18e5),
            delete t._$dr._$f_,
            n
        }
      })
    }
    , function(t, n, i, e) {
      var r = new (i(55))("trackFeedback")
        , o = i(57)
        , s = i(60)
        , u = i(52)
        , a = i(68)
        , c = i(75)
        , h = i(74)
        , f = i(135)
        , l = i(111)
        , d = i(62)
        , v = i(123)
        , _ = i(136)
        , p = i(122)
        , m = h((function(t) {
          return l._$fW(()=>(t.timestamp || f._$ge(t),
            f._$h2(t)))
        }
      ), "feedback.track.send", {
        _$gj: !0,
        _$eu: function(t, n) {
          throw f._$h3(t),
            n
        }
      })
        , A = h(f._$h4, "feedback.track.retry");
      t.$a = c((function(t) {
          if (!t._$dr.id)
            return a.resolve();
          t._$dr._$hX && (t._$dr.statistics = {
            duration: t._$eS.getDuration(),
            position: 0,
            played: 0,
            playId: d.device_id + ":" + t._$dr.id + ":" + t._$eS.getPlayId()
          });
          var n = t._$eh ? {
            feedback: t._$eh._$eO || v._$hQ
          } : {}
            , i = {
            context: t._$c9._$d7
          };
          switch (t._$c9._$d7) {
            case _.ALBUM:
            case _.ARTIST:
              i.contextItem = t._$d8.id;
              break;
            case _.PLAYLIST:
              i.contextItem = t._$d8.uid + ":" + t._$d8.id;
              break;
            case _.RADIO:
              i.contextItem = t._$eh._$d7 + ":" + t._$eh._$eY;
              break;
            case _.FEED:
              i.contextItem = t._$c9._$eG
          }
          r.info(null, t._$dr._$hX ? "start" : "end", s(u(t._$dr), t._$dr.statistics, !0)),
          t._$dr.statistics.duration || (t._$dr.statistics.duration = t._$dr.durationMs / 1e3,
            r.error(null, "durationError"));
          var e = {};
          return t._$c9._$d7 === _.ARTIST ? e = {
            artist: t._$d8.id
          } : t._$c9._$d7 === _.PLAYLIST && (t._$d8.uid && t._$d8.id && (e = {
            playlistId: t._$d8.uid + ":" + t._$d8.id
          }),
          t._$c9._$eH && (e.blockId = t._$c9._$eH),
          t._$c9._$eI && (e.entityId = t._$c9._$eI)),
          t._$c9._$eG && (e.eventId = t._$c9._$eG),
            m(s({
              sendReason: t._$dr._$hX ? "start" : "end",
              from: t._$dr.from || t._$eA,
              addTracksToPlayerTime: t._$dr._$h5,
              restored: t._$c9._$eK,
              preview: p(d, t._$dr)
            }, u(t._$dr, !0), t._$dr.statistics, n, i, e, !0))
        }
      ), {
        _$ea: function(t, n) {
          if (n.advert) {
            var i = n.advert.adsParams || {};
            i._$fv = n.advert.adsParamsId,
              t._$dt._$eq = i,
            null != i.adVolume && t._$c6._$dd._$g2((100 + i.adVolume) / 100),
              t._$dt._$er = {
                _$es: "ad" === n.advert.afterSkip,
                _$bA: "ad" === n.advert.afterPlay
              },
              t._$dt._$g1 = i.adsSpaces
          }
          return n
        },
        _$eu: function(t, n) {
          throw A({}),
            n
        },
        _$dy: o
      })
    }
    , function(t, n, i, e) {
      var r = new (i(55))("PlayAudioData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(68)
        , a = i(51)
        , c = i(62)
        , h = i(95)
        , f = [];
      n._$h2 = function(t) {
        var n = {
          id: t.trackId,
          albums: [{
            id: t.album
          }]
        }
          , i = o.post(["track", a(n), t.from, "feedback", t.sendReason].join("/"), s({
          timestamp: c.getTimestamp(),
          data: [t]
        }, e, !0), !0);
        return i.then((function(t) {}
        ), (function(t) {
            r[t instanceof h ? "info" : "error"](null, "playAudioSendError", t)
          }
        )),
          i
      }
        ,
        n._$ge = function(t) {
          t.playId && t.duration || r.error(null, "statisticsError", t.sendReason, t),
            t.timestamp = c.getTimestamp(),
            t.trackId = t.id,
            delete t.id,
            t.album = t.albumId,
            delete t.albumId
        }
        ,
        n._$h3 = function(t) {
          f.push(t)
        }
        ,
        n._$h4 = function() {
          if (!f.length)
            return u.resolve();
          var t = f;
          f = [];
          var n = o.post("track/none/history/feedback/retry", s({
            timestamp: c.getTimestamp(),
            data: t
          }, e, !0), !0);
          return n.then((function() {}
          ), (function(n) {
              r[n instanceof h ? "info" : "error"](null, "playAudioRetryError", n),
                f = t.concat(f)
            }
          )),
            n
        }
    }
    , function(t, n, i, e) {
      t.$a = {
        COMMON: "common",
        ALBUM: "album",
        ARTIST: "artist",
        PLAYLIST: "playlist",
        RADIO: "radio",
        COLLA: "colla",
        FEED: "feed",
        TRACK: "track",
        STREAM: "stream"
      }
    }
    , function(t, n, i, e) {
      var r = i(68)
        , o = i(81)
        , s = i(88)
        , u = i(82)
        , a = i(75)
        , c = i(78)
        , h = i(74)
        , f = i(103)
        , l = function(t) {
        return t._$c6._$fm(t),
          t._$eT.play(t._$c9._$d8.url)
      };
      t.$a = c(o({
        start: {
          _$d1: function(t) {
            return delete t._$ew.normalEnd,
              t._$c6._$fk(t),
              t._$c6._$fi(t),
              r.resolve()
          },
          _$ea: "play",
          _$eu: "play"
        },
        play: {
          _$d1: l,
          _$ea: "listen",
          _$eu: "retry"
        },
        retry: {
          _$d1: h(o({
            init: {
              _$d1: function() {
                return r.resolve()
              },
              _$ea: "play"
            },
            play: {
              _$d1: l
            }
          }, "init"), "stream.play", {
            _$gj: !0,
            _$gf: function(t, n) {
              throw t._$ew._$fQ = n,
                n
            }
          }),
          _$ea: "listen",
          _$eu: "end"
        },
        listen: {
          _$d1: s([function(t) {
            return t._$c6._$fo(t),
              t._$ew._$dz = !0,
              r.resolve()
          }
            , a((function(t) {
                return f({
                  _$gd: t._$eT
                })
              }
            ), {
              _$eu: function(t, n) {
                throw t._$ew._$fQ = n,
                  n
              }
            })]),
          _$ea: "end",
          _$eu: "end"
        },
        end: {
          _$d1: function(t) {
            var n = t._$ew._$fQ;
            return n ? (delete t._$ew._$fQ,
              r.reject(n)) : r.resolve()
          },
          _$gs: !0
        }
      }, "start"), [{
        _$ek: a,
        _$ea: function(t, n) {
          if (t._$hY)
            throw t._$hY;
          return t._$ew.normalEnd = !0,
            t._$c6._$fq(t),
            n
        },
        _$eu: function(t, n) {
          throw t._$hY ? t._$c6._$fq(t) : t._$c6._$fr(t, n),
            n
        },
        _$dy: function(t, n, i) {
          return t._$hY = i,
            n._$dy(i)
        }
      }, {
        _$ek: u,
        _$el: function(t) {
          return t._$c6._$c1
        },
        _$eM: !0
      }])
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(131)
        , s = i(109);
      t.$a = r({
        start: {
          _$d1: function(t) {
            return t._$dr._$f9 ? "preload" : "init"
          }
        },
        init: {
          _$d1: o,
          _$ea: "preload"
        },
        preload: {
          _$d1: function(t) {
            return s({
              _$gd: t._$eS,
              _$f9: t._$dr._$f9,
              _$gb: t._$dr.durationMs / 1e3
            })
          }
        }
      }, "start")
    }
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(77);
      t.$a = o(r({
        start: {
          _$d1: function() {
            return !0
          },
          _$ea: "loadSettings"
        },
        loadSettings: {
          _$d1: function() {
            return {}
          }
        }
      }, "start"), {
        _$el: function(t) {
          return t._$c9._$c1
        },
        _$cS: 0
      })
    }
    , function(t, n, i, e) {
      var r = i(56)("source.radio.init")
        , o = i(74)
        , s = i(81)
        , u = i(77)
        , a = i(76)
        , c = i(141)
        , h = i(143)
        , f = i(144);
      t.$a = u(s({
        start: {
          _$d1: c,
          _$ea: "loadSettings"
        },
        loadSettings: {
          _$d1: h,
          _$ea: function(t) {
            if (/%idForFrom%/.test(t._$eA)) {
              var n = t._$eA.replace("%idForFrom%", t._$c9._$d4.idForFrom);
              t._$eA = n,
                t._$c9._$eA = n,
                t._$c9._$dO._$h6(n)
            }
            return "tracks"
          }
        },
        tracks: {
          _$d1: a(f, {
            _$b9: r._$b4,
            _$cS: r._$b5,
            _$ei: o._$ei
          })
        }
      }, "start"), {
        _$el: function(t) {
          return t._$c9._$c1
        },
        _$cS: 0
      })
    }
    , function(t, n, i, e) {
      var r = i(74)
        , o = i(142);
      t.$a = r((function(t) {
          if (!1 === t._$d8.available)
            throw new Error("Radio is unavailable");
          return o._$h7(t._$d8.type, t._$d8.tag, t._$h8)
        }
      ), "source.radio.available", {
        _$el: function(t) {
          return t._$d8.type + ":" + t._$d8.tag
        },
        _$ea: function(t, n) {
          if (!n || !n.available)
            throw new Error("Radio is unavailable");
          return t._$d8.available = !0,
            !0
        },
        _$eu: function(t, n) {
          throw t._$d8.available = !1,
            n
        }
      })
    }
    , function(t, n, i, e) {
      var r = new (i(55))("RadioData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(51)
        , a = i(52)
        , c = i(123)
        , h = i(95);
      n._$h9 = function(t, n, i, u) {
        var a = {};
        i.forEach((function(t) {
            a[t] && console.warn("double", t),
              a[t] = !0
          }
        ));
        var c = o.get("radio/" + t + "/" + n + "/tracks", s({
          queue: i
        }, e, u, !0));
        return c.then((function(t) {
            t.pumpkin && console.warn("Cucurbita tergo finem")
          }
        ), (function(t) {
            r[t instanceof h ? "info" : "error"](null, "getTracksError", t)
          }
        )),
          c
      }
        ,
        n._$h0 = function(t, n) {
          var i, u;
          return "string" == typeof t && (t = t.split(",")),
            Array.isArray(t) ? (u = t.map((function(t) {
                return +(t && t.id ? t.id : t && t.track && t.track.id ? t.track.id : t)
              }
            )).filter((function(t) {
                return t
              }
            )).slice(-100)) && u.length ? (i = o.get("radio/from/seed", s({
              trackIds: u.join(",")
            }, e, n, !0))).then((function() {}
            ), (function(t) {
                r[t instanceof h ? "info" : "error"](null, "getSeedError", t)
              }
            )) : i = Promise.reject(Error("Empty seed from tracks")) : i = Promise.reject(Error("Wrong tracks parameter")),
            i
        }
        ,
        n._$h7 = function(t, n, i) {
          var u = o.get("radio/" + t + "/" + n + "/available", s(e, i));
          return u.then((function() {}
          ), (function(t) {
              r[t instanceof h ? "info" : "error"](null, "isAvailableError", t)
            }
          )),
            u
        }
        ,
        n._$g8 = function(t, n, i, f, l, d, v, _) {
          var p = {
            timestamp: t,
            from: d
          };
          if (f !== c._$hP) {
            p.batchId = l.batchId;
            var m = a(l, !0);
            p.trackId = m.id,
            m.albumId && (p.albumId = m.albumId);
            var A = l.statistics || {};
            p.totalPlayed = A.played || .1
          }
          f === c._$hP && v && (p.dashId = v);
          var y = o.post(["radio", n, i, "feedback", f].concat(l ? [u(l)] : []).join("/"), s(p, e, _));
          return y.then((function() {}
          ), (function(t) {
              r[t instanceof h ? "info" : "error"](null, "sendFeedbackError", t)
            }
          )),
            y
        }
        ,
        n._$h_ = function(t, n, i) {
          var u = o.get("radio/" + t + "/" + n + "/settings", s(e, i));
          return u.then((function() {}
          ), (function(t) {
              r[t instanceof h ? "info" : "error"](null, "getInfoError", t)
            }
          )),
            u
        }
        ,
        n._$f5 = function(t, n, i, u) {
          delete (i = s({}, i)).restrictions;
          var a = o.post(["radio", t, n, "settings"].join("/"), s(i, e, u));
          return a.then((function() {}
          ), (function(t) {
              r[t instanceof h ? "info" : "error"](null, "setSettingsError", t)
            }
          )),
            a
        }
        ,
        n._$ej = function(t) {
          var n = o.get("radio/list", s(e, t));
          return n.then((function() {}
          ), (function(t) {
              r[t instanceof h ? "info" : "error"](null, "getListError", t)
            }
          )),
            n
        }
    }
    , function(t, n, i, e) {
      var r = i(56)("source.radio.settings.load")
        , o = i(74)
        , s = i(78)
        , u = i(75)
        , a = i(76)
        , c = i(82)
        , h = i(60)
        , f = i(142);
      t.$a = s((function(t) {
          return f._$h_(t._$d8.type, t._$d8.tag, t._$h8)
        }
      ), [{
        _$ek: u,
        _$cS: r._$b3,
        _$ea: function(t, n) {
          return n.station ? {
            _$ia: n.prerolls,
            _$c1: n.station.name,
            _$ib: n.station.icon,
            _$f6: n.settings2,
            _$ic: n.station.restrictions2,
            _$id: n.station.idForFrom
          } : {
            _$f6: [],
            _$ie: []
          }
        }
      }, {
        _$ek: a,
        _$b9: r._$b4,
        _$cS: r._$b5,
        _$ei: o._$ei
      }, {
        _$ek: c,
        _$el: function(t) {
          return t._$d8.type + ":" + t._$d8.tag
        },
        _$eM: !0
      }, {
        _$ek: u,
        _$ea: function(t, n) {
          var i = t._$c9._$d4 && t._$c9._$d4.station;
          (n._$c1 || i) && (t._$c9._$d4 = h({
            prerolls: n._$ia,
            name: n._$c1,
            icon: n._$ib,
            idForFrom: n._$id
          }, i)),
            t._$c9._$f6 = n._$f6,
            t._$c9._$ic = n._$ic
        },
        _$cS: r._$b8
      }])
    }
    , function(t, n, i, e) {
      var r = i(56)("source.radio.tracks")
        , o = i(74)
        , s = i(78)
        , u = i(75)
        , a = i(76)
        , c = i(82)
        , h = i(77)
        , f = i(145)
        , l = i(51)
        , d = i(146)
        , v = i(142);
      t.$a = s((function(t) {
          for (var n = t._$c9._$dO, i = n._$ej(!0).slice(n._$eo(!0)), e = 0, r = i.length; e < r; e++)
            i[e]._$dt && (i.splice(e, 0, "ad"),
              e++,
              r++),
              i[e] = l(i[e]);
          return v._$h9(t._$d8.type, t._$d8.tag, i, t.options)
        }
      ), [{
        _$ek: u,
        _$ea: function(t, n) {
          for (var i, e = [], r = t._$c9._$dt || !1, o = 0, s = n.tracks.length; o < s; o++)
            "jingle" !== (i = n.tracks[o]).type && ("ad" !== i.type ? "track" === i.type && (i.track.liked = i.liked,
              i.track.disliked = i.disliked,
              i.track._$dt = r,
              r = !1,
              e.push(i.track)) : r = i.spaces || !0);
          return e._$dt = r,
            e
        },
        _$cS: r._$b3
      }, {
        _$ek: a,
        _$b9: r._$b4,
        _$cS: r._$b5,
        _$ei: o._$ei
      }, {
        _$ek: c,
        _$el: function(t) {
          return t._$eh._$d7 + ":" + t._$eh._$eY
        },
        _$eM: !0
      }, {
        _$ek: u,
        _$ea: function(t, n) {
          t._$c9._$dt = n._$dt,
            delete n.advert;
          var i = t._$c9._$dO;
          return d._$if(t),
            i._$hD(n),
            n
        },
        _$eu: function(t, n) {
          throw t._$c9._$dO._$ig(),
            n
        },
        _$cS: r._$b8
      }, {
        _$ek: h,
        _$el: function(t) {
          return t._$eh._$d7 + ":" + t._$eh._$eY
        },
        _$cS: 0
      }, {
        _$ek: f,
        _$gp: function(t, n) {
          t._$c9._$ih = n._$gr
        }
      }])
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68);
      t.$a = function(t, n) {
        return n._$d1 && n._$d1.call(null, t),
          function(i) {
            var e, s = this, u = new o((function(o, u) {
                e = t.call(s, i),
                n._$gp && n._$gp.call(s, i, e),
                  e.then((function(t) {
                      n._$ea && n._$ea.call(s, i, t),
                        o(t)
                    }
                  ), (function(t) {
                      n._$eu && n._$eu.call(s, i, t),
                        u(t)
                    }
                  )).catch(r)
              }
            ));
            return u.catch(r),
              u._$dy = e._$dy,
              u
          }
      }
    }
    , function(t, n, i, e) {
      n._$if = function(t, n) {
        var i = t._$c9._$dO;
        i._$ii(0, i._$eo() - (null == n ? t._$d8.storeBefore : n)),
          i._$ij()
      }
        ,
        n._$ik = function(t, n) {
          var i = t._$c9._$dO;
          i._$ii(i._$eo() + (null == n ? t._$d8.storeAfter : n) + 1, null),
            i._$ij()
        }
    }
    , function(t, n, i, e) {
      var r = i(148)
        , o = i(74)
        , s = i(149);
      t.$a = o((function(t) {
          return s._$il(t._$c9._$d8.id)
        }
      ), "source.album", {
        _$el: function(t) {
          return t._$c9._$d8.id
        },
        _$ea: function(t, n) {
          return t._$c9._$d9 && r(t._$c9._$dO, n.tracks),
          t._$c9._$ec && (t._$c9._$d4 = n),
            n
        }
      })
    }
    , function(t, n, i, e) {
      t.$a = function(t, n) {
        (n = n.slice(t._$ee())).length && (t._$hD(n),
          t._$ij())
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("AlbumData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(95);
      n._$il = function(t, n) {
        r.debug(null, "getAlbum", t);
        var i = o.get("album/" + t, s(e, n));
        return i.then((function() {
            r.debug(null, "getAlbumSuccess")
          }
        ), (function(t) {
            r[t instanceof u ? "info" : "error"](null, "getAlbumError", t)
          }
        )),
          i
      }
    }
    , function(t, n, i, e) {
      var r = i(148)
        , o = i(74)
        , s = i(151);
      t.$a = o((function(t) {
          return s._$im(t._$c9._$d8.id, t._$c9._$d8.top)
        }
      ), "source.artist", {
        _$el: function(t) {
          return t._$c9._$d8.id + ":" + t._$c9._$d8.top
        },
        _$ea: function(t, n) {
          return t._$c9._$d9 && r(t._$c9._$dO, n.tracks),
          t._$c9._$ec && (t._$c9._$d4 = n),
            n
        }
      })
    }
    , function(t, n, i, e) {
      var r = new (i(55))("ArtistData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(95);
      n._$im = function(t, n) {
        var i = o.get("artist/" + t, s(e, n));
        return i.then((function() {}
        ), (function(t) {
            r[t instanceof u ? "info" : "error"](null, "getArtistError", t)
          }
        )),
          i
      }
    }
    , function(t, n, i, e) {
      var r = i(148)
        , o = i(74)
        , s = i(153);
      t.$a = o((function(t) {
          return s._$in(t._$d8.owner, t._$d8.id)
        }
      ), "source.playlist", {
        _$el: function(t) {
          return t._$d8.owner + ":" + t._$d8.id
        },
        _$ea: function(t, n) {
          return t._$c9._$d9 && r(t._$c9._$dO, n.tracks),
          t._$c9._$ec && (t._$c9._$d4 = n),
            t._$d8.uid = n.owner.uid,
            t._$d8.login = n.owner.login,
            n
        }
      })
    }
    , function(t, n, i, e) {
      var r = new (i(55))("PlaylistData")
        , o = i(91)
        , s = (e = i(96),
        i(60))
        , u = i(95);
      n._$in = function(t, n, i) {
        r.debug(null, "getPlaylist", t, n),
        t || (t = "_");
        var a = o.get("playlist/" + t + "/" + n, s(e, i));
        return a.then((function() {
            r.debug(null, "getPlaylistSuccess")
          }
        ), (function(t) {
            r[t instanceof u ? "info" : "error"](null, "getPlaylistError", t)
          }
        )),
          a
      }
    }
    , function(t, n, i, e) {}
    , function(t, n, i, e) {
      var r = i(81)
        , o = i(75)
        , s = i(74)
        , u = i(46)
        , a = i(57)
        , c = i(123)
        , h = i(144)
        , f = i(146)
        , l = i(62)
        , d = i(142)
        , v = i(111)
        , _ = u([c._$hS, c._$fX, c._$f2, c._$fY, c._$f3])
        , p = s((function(t) {
          return v._$fW(()=>d._$g8(l.getTimestamp(), t._$d7, t._$eY, t._$eO, t._$dr, t._$eA, t._$eJ))
        }
      ), "feedback.radio", {
        dontCache: !0
      });
      t.$a = o(r({
        start: {
          _$d1: function(t) {
            return t._$eO === c._$hP || t._$eO === c._$gZ ? "info" : "track"
          }
        },
        info: {
          _$d1: p
        },
        track: {
          _$d1: function(t) {
            return _[t._$eO] && (f._$if(t),
              f._$ik(t, 1)),
              p(t)
          }
        }
      }, "start"), {
        _$ea: function(t) {
          switch (t._$eO) {
            case c._$fX:
              t._$dr.liked = !0,
                t._$dr.disliked = !1;
              break;
            case c._$f2:
              t._$dr.disliked = !0,
                t._$dr.liked = !1;
              break;
            case c._$fY:
              t._$dr.liked = !1;
              break;
            case c._$f3:
              t._$dr.disliked = !1
          }
          return _[t._$eO] && (t._$c9._$ih && t._$c9._$ih(),
            h(t)),
            !0
        },
        _$dy: a
      })
    }
    , function(t, n, i, e) {
      var r = i(56)("source.radio.settings.send")
        , o = i(60)
        , s = i(81)
        , u = i(88)
        , a = i(82)
        , c = i(74)
        , h = i(78)
        , f = i(75)
        , l = i(76)
        , d = i(143)
        , v = i(144)
        , _ = i(146)
        , p = i(142)
        , m = i(111)
        , A = h((function(t) {
          return m._$fW(()=>p._$f5(t._$d8.type, t._$d8.tag, t._$f6, t._$h8))
        }
      ), [{
        _$ek: f,
        _$cS: r._$b3
      }, {
        _$ek: l,
        _$b9: r._$b4,
        _$cS: r._$b5,
        _$ei: c._$ei
      }, {
        _$ek: a,
        _$el: function(t) {
          return t._$d8.type + ":" + t._$d8.tag
        },
        _$eM: !0
      }, {
        _$ek: f,
        _$ea: function(t, n) {
          return t._$c9._$ih(),
            _._$ik(t, 0),
            _._$if(t),
            n
        },
        _$cS: r._$b8
      }]);
      t.$a = a(s({
        send: {
          _$d1: function(t) {
            return t._$f6 = o(t._$c9._$f6, t._$f6, !0),
              A(t)
          },
          _$ea: "load"
        },
        load: {
          _$d1: u([d, v])
        }
      }, "send"), {
        _$el: function(t) {
          return t._$d8.type + ":" + t._$d8.tag
        },
        _$eM: !0
      })
    }
    , function(t, n, i, e) {
      t.$a = {
        UPDATE: "update",
        POPULATE: "populate",
        CONTROLS: "controls",
        EMOTION: "emotion"
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("InternalAudio")
        , o = i(64)
        , s = i(68)
        , u = i(69)
        , a = i(8)
        , c = i(19)
        , h = i(159)
        , f = i(160)
        , l = i(162)
        , d = i(163)
        , v = function(t, n, i, e) {
        this._$cH = .8;
        this._$c6 = t,
          this._$c3 = new o,
          this._$dY = !1,
          this._$dc = new u(!0),
          this._$eQ = new u(!0),
          this._$eR = new u(!0),
          this._$fB = new u(!0),
          this._$fL = new u(!0),
          this._$fC = new u(!0),
          this._$io = new u,
          this._$ip = new u,
          this._$iq = new u,
          this._$ir = new u,
          this._$is = new u,
          this._$io.add(this._$eQ),
          this._$ip.add(this._$eR),
          this._$iq.add(this._$fB),
          this._$ir.add(this._$fL),
          this._$is.add(this._$fC),
          this._$io.add(this._$dc),
          this._$ip.add(this._$dc),
          this._$iq.add(this._$dc),
          this._$ir.add(this._$dc),
          this._$is.add(this._$dc),
          this._$io.add(this._$eR.inverted()),
          this._$io.add(this._$fB.inverted()),
          this._$io.add(this._$fL.inverted()),
          this._$io.add(this._$fC.inverted()),
          this._$iq.add(this._$eR.inverted()),
          this._$is.add(this._$eR.inverted()),
          this._$iq.add(this._$fL.inverted()),
          this._$is.add(this._$fL.inverted()),
          this._$iq.add(this._$fC.inverted()),
          d._$da().then(this._$n.bind(this, n, i, e))
      };
      v.prototype = {
        _$dF: function() {
          this._$io.clearListeners(),
            this._$ip.clearListeners(),
            this._$iq.clearListeners(),
            this._$ir.clearListeners(),
            this._$is.clearListeners(),
            this._$eS.clearListeners(),
            this._$eT.clearListeners(),
            this._$eU.clearListeners(),
            this._$eV.clearListeners(),
            this._$eS.stop(),
            this._$eT.stop(),
            this._$eU.stop(),
            this._$eV.stop(),
            this._$eS.stop(1),
            this._$eU.stop(1),
            this._$eV.stop(1),
            this._$eS.toggleWebAudioAPI(!1),
            this._$eU.toggleWebAudioAPI(!1),
            this._$eV.toggleWebAudioAPI(!1),
            delete this._$c6,
            delete this._$c3,
            delete this._$dY,
            delete this._$dc,
            delete this._$eQ,
            delete this._$eR,
            delete this._$fB,
            delete this._$fL,
            delete this._$io,
            delete this._$ip,
            delete this._$iq,
            delete this._$ir,
            delete this._$is,
            delete this._$eS,
            delete this._$eT,
            delete this._$eU,
            delete this._$eV,
            delete this._$hi
        },
        _$n: function(t, n, i) {
          var e = this;
          t = t || d._$it(),
            e._$eS = new a(t,n),
            e._$eU = new a(t,n),
            e._$eV = new a(t,n),
            e._$hi = new h,
            e._$eT = new f,
            e._$iu(e._$io, "play", e._$eS),
            e._$iu(e._$ip, "stream", e._$eT),
            e._$iu(e._$iq, "advert", e._$eU),
            e._$iu(e._$is, "advert", e._$hi),
            e._$iu(e._$ir, "common", e._$eV),
            s.all([e._$eS.initPromise(), e._$eU.initPromise(), e._$eV.initPromise(), i ? e._$eT.initPromise() : s.resolve()]).then((function() {
                a.audioContext && e._$eS.toggleCrossDomain(!0),
                  l.on(l._$iv, (function() {
                      e._$dc.toggle(!0)
                    }
                  )),
                  e._$dY = !0,
                  e._$c3.resolve()
              }
            ))
        },
        _$g2: function(t) {
          this._$cH !== t && (r.info(null, "adcorrect", t),
            this._$cH = t,
            this._$eU.setVolume(this._$cB * this._$cH),
            this._$eV.setVolume(this._$cB * this._$cH),
            this._$hi.setVolume(this._$cB * this._$cH))
        },
        _$iw: function(t) {
          this._$dk() && (this._$cB = t,
            this._$eS.setVolume(t),
            this._$eT.setVolume(t),
            this._$eU.setVolume(t * this._$cH),
            this._$eV.setVolume(t * this._$cH),
            this._$hi.setVolume(t * this._$cH))
        },
        _$f7: function(t) {
          this._$dk() && (this._$cC = t,
            this._$eS.setSpeed(t),
            this._$eT.setSpeed(t),
            this._$eV.setSpeed(t))
        },
        _$iu: function(t, n, i) {
          var e = function() {
            i.getState() === c.STATE_PLAYING && i.pause()
          }
            , r = function() {
            if (t.isLocked()) {
              if (i._$ix)
                return;
              i._$b(c.EVENT_STATE, e),
                i._$ix = !0,
                e()
            } else {
              if (!i._$ix)
                return;
              i.off(c.EVENT_STATE, e),
                i._$ix = !1,
              this._$c6._$dq(n) && (i.getState() === c.STATE_PAUSED || i._$t) && i.resume()
            }
          }
          .bind(this);
          t._$b(u.EVENT_STATE, r),
            r()
        },
        _$dA: function(t) {
          this._$dc.toggle(t)
        },
        _$dj: function() {
          return this._$dc.isLocked()
        },
        _$dk: function() {
          return this._$dY
        },
        _$da: function() {
          return this._$c3.promise()
        }
      },
        t.$a = v
    }
    , function(t, n, i, e) {
      var r = i(68)
        , o = i(1)
        , s = i(19)
        , u = function() {
        o.call(this),
          this._$iy = this._$iz.bind(this),
          this._$iA = this._$iB.bind(this)
      };
      u.prototype = {
        _$iB: function() {
          this._$d(s.EVENT_PROGRESS, {
            duration: this.getDuration(),
            loaded: this.getLoaded(),
            position: this.getPosition(),
            played: this.getPosition()
          })
        },
        _$iz: function() {
          var t = this._$hh.getPaused();
          this._$d(t ? s.EVENT_PAUSE : s.EVENT_PLAY),
            t ? clearInterval(this._$iC) : (this._$iw(this._$cB),
              setInterval(this._$iA, 50))
        },
        _$hj: function(t) {
          this._$hh = t,
            this._$hh.onPlayStateChanged = this._$iy,
            this._$iw(this._$cB),
            this._$iz()
        },
        _$hk: function() {
          this._$d(s.EVENT_ENDED),
          this._$hh && (this._$hh.onPlayStateChanged = null),
            delete this._$hh,
            clearInterval(this._$iC)
        },
        getState: function() {
          return this._$hh ? this._$hh.getPaused() ? s.STATE_PAUSED : s.STATE_PLAYING : s.STATE_IDLE
        },
        pause: function() {
          return this._$hh && this._$hh.pause(),
            r.resolve()
        },
        resume: function() {
          return this._$hh && this._$hh.resume(),
            this._$iw(this._$cB),
            r.resolve()
        },
        _$iw: function(t) {
          this._$cB = t,
          this._$hh && this._$hh.displayController.setVolume(t)
        },
        setVolume: function(t) {
          return this._$iw(t),
            this._$d(s.EVENT_VOLUME, t),
            t
        },
        getDuration: function() {
          return this._$hh && this._$hh.getDuration() || 0
        },
        getLoaded: function() {
          return this.getDuration()
        },
        getPosition: function() {
          return this._$hh && this._$hh.getCurrentTime() || 0
        }
      },
        o.mixin(u),
        t.$a = u
    }
    , function(t, n, i, e) {
      var r = i(68)
        , o = i(64)
        , s = i(1)
        , u = i(19)
        , a = i(57)
        , c = i(56)("stream")
        , h = i(84)
        , f = i(62)
        , l = i(161)
        , d = /^((?:http:|https:)?\/\/)(.*)/
        , v = function() {
        s.call(this);
        var t = this;
        t._$cB = 1,
          t._$cC = 1,
          t._$k = new o,
          t.whenReady = t._$k.promise().catch(a),
          v.loadHls().then((function() {
              "undefined" != typeof Hls && "undefined" != typeof Audio ? (t._$c0 = new Audio,
                t._$k.resolve(t)) : t._$k.reject(new Error("Stream player is not found"))
            }
          ), t._$k.reject),
          this._$iD = this._$iE.bind(this),
          this._$iy = this._$iz.bind(this),
          this._$iA = this._$iB.bind(this),
          this._$iF = f.device_id + "0" + f.timestamp.toString(16) + Date.now().toString(16)
      };
      v.loadHls = function() {
        return this.hlsLoaded || (this.hlsLoaded = new o,
          h(c._$cc).then(this.hlsLoaded.resolve, this.hlsLoaded.reject)),
          this.hlsLoaded.promise()
      }
        ,
        v.isEqualUrl = function(t, n) {
          return !(!t || !n || t.replace(d, "//$2") !== n.replace(d, "//$2"))
        }
        ,
        v.prototype = {
          initPromise: function() {
            return this.whenReady
          },
          getState: function() {
            return this._$c0 ? 4 === this._$c0.readyState || 3 === this._$c0.readyState ? !this._$c0.paused && this.getDuration() > 0 ? u.STATE_PLAYING : u.STATE_PAUSED : u.STATE_IDLE : u.STATE_INIT
          },
          play: function(t) {
            if (!t)
              return r.reject(new Error("Empty url"));
            var n, i = this, e = new o;
            return i._$c0 && i._$c0.canPlayType && i._$c0.canPlayType("application/vnd.apple.mpegurl") ? n = i._$0() : i._$c0 && Hls.isSupported() ? n = i._$iG() : e.reject(new Error("HLS is not supported")),
            n && n.then((function() {
                i._$iH(t).then((function() {
                    i._$c0.muted = !1;
                    var t = i._$c0.play();
                    void 0 !== t ? t.then(e.resolve, e.reject) : e.resolve(!0)
                  }
                ))
              }
            ), e.reject),
              e.promise().catch((function(t) {
                  throw i._$iI && i._$iI.destroy(),
                    t
                }
              ))
          },
          stop: function() {
            var t = this;
            return t.pause().then((function() {
                t._$c0.src = "",
                  t._$c0.load()
              }
            ))
          },
          pause: function() {
            return this._$c0 && this._$c0.pause(),
              r.resolve()
          },
          resume: function() {
            return this.setVolume(this._$cB),
            this._$c0 && this._$c0.play(),
              r.resolve()
          },
          setVolume: function(t) {
            return t = parseFloat(t),
              t = (t = isNaN(t) ? 1 : t) > 1 ? t / 100 : t < 0 ? 0 : t,
              this._$cB = t,
            this._$c0 && (this._$c0.volume = t),
              this._$d(u.EVENT_VOLUME, t),
              t
          },
          setSpeed: function(t) {
            return t = parseFloat(t, 10) || 1,
              this._$cC = t,
            this._$c0 && (this._$c0.defaultPlaybackRate = t,
              this._$c0.playbackRate = t),
              this._$d(u.EVENT_SPEED, t),
              t
          },
          getDuration: function() {
            return this._$c0 ? this._$c0.duration : 0
          },
          getLoaded: function() {
            return this.getDuration()
          },
          getPosition: function() {
            return this._$c0 ? this._$c0.currentTime : 0
          },
          _$iH: function(t) {
            var n = this;
            if (n.whenUrlUpdated = new o,
              t) {
              var i = l.prepare(t, {
                vsid: this._$iF
              });
              n._$iI ? v.isEqualUrl(i, n._$iI.url) ? n.whenUrlUpdated.resolve(!0) : n._$iI.loadSource(i) : (v.isEqualUrl(i, n._$c0.src) || (n._$c0.src = i),
                n.whenUrlUpdated.resolve(!0)),
                setTimeout((function() {
                    n.whenUrlUpdated.reject(new Error("Time for the update url is over"))
                  }
                ), 3e3)
            } else
              n.whenUrlUpdated.reject(new Error("Url is empty"));
            return n.whenUrlUpdated.promise().then(n._$iD)
          },
          _$iE: function() {
            this._$c0.muted = !0,
              this._$c0.onplay = this._$iy,
              this._$c0.onpause = this._$iy
          },
          _$0: function() {
            var t = this;
            return t._$c0.addEventListener("loadedmetadata", (function() {
                t.whenUrlUpdated && t.whenUrlUpdated.resolve(!0)
              }
            )),
              r.resolve(t._$c0)
          },
          _$iG: function() {
            var t = this
              , n = new o;
            if (t._$iI)
              n.resolve(t._$iI);
            else {
              t._$iI = new Hls({
                liveDurationInfinity: !0
              }),
                t._$iI.attachMedia(t._$c0),
                t._$iI.on(Hls.Events.MEDIA_ATTACHED, (function() {
                    n.resolve(t._$iI)
                  }
                )),
                t._$iI.on(Hls.Events.MANIFEST_PARSED, (function() {
                    t.whenUrlUpdated && t.whenUrlUpdated.resolve(!0)
                  }
                )),
                t._$iI.on(Hls.Events.ERROR, (function(n, i) {
                    if (i.fatal)
                      switch (i.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                          t._$iI.startLoad();
                          break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                          t._$iI.recoverMediaError();
                          break;
                        default:
                          t._$iI.destroy(),
                            this._$d(u.EVENT_DESTROY)
                      }
                  }
                )),
                t._$iI.on(Hls.Events.DESTROYING, (function() {
                    delete t._$iI
                  }
                )),
                setTimeout((function() {
                    n.reject(new Error("Time for the init HLS is over"))
                  }
                ), 3e3)
            }
            return n.promise()
          },
          _$iz: function() {
            var t = this.getState() === u.STATE_PAUSED;
            this._$d(t ? u.EVENT_PAUSE : u.EVENT_PLAY),
              t ? clearInterval(this._$iJ) : (this.setVolume(this._$cB),
                this._$iJ = setInterval(this._$iA, 50))
          },
          _$iB: function() {
            this._$d(u.EVENT_PROGRESS, {
              duration: this.getDuration(),
              loaded: this.getLoaded(),
              position: this.getPosition(),
              played: this.getPosition()
            })
          }
        },
        s.mixin(v),
        t.$a = v
    }
    , function(t, n, i, e) {
      t.$a = {
        prepare: function(t, n) {
          var i = this.parseParams(t)
            , e = "";
          for (var r in Object.assign(i, n),
            i)
            i.hasOwnProperty(r) && (e += r + "=" + i[r]);
          return t + (e ? "?" + e : "")
        },
        parseParams: function(t) {
          var n = t.split("?")[1];
          return n && n.length ? n.split("&").reduce((function(t, n) {
              var i = n.split("=");
              return i[0] && (t[i[0]] = i[1]),
                t
            }
          ), {}) : {}
        }
      }
    }
    , function(t, n, i, e) {
      var r = i(56)("sandman")
        , o = i(1)
        , s = (new Date).valueOf()
        , u = new o;
      u._$iv = "sleep",
        setInterval((function() {
            var t = (new Date).valueOf();
            t - s > r._$cO && u._$d(u._$iv),
              s = t
          }
        ), r._$cN),
        t.$a = u
    }
    , function(t, n, i, e) {
      var r = new (i(55))("settings")
        , o = i(56)("core.settings")
        , s = new (i(164))
        , u = i(113);
      t.$a = {
        _$dk: function() {
          return s._$dk()
        },
        _$da: function() {
          return s._$da().then(this._$gO.bind(this))
        },
        _$gO: function() {
          u._$hv(this._$hw()),
            u._$hu(this._$iK() ? 1 : 0)
        },
        _$it: function() {
          return s._$iL("local", o._$ct)
        },
        _$iM: function(t) {
          return r.info(null, "setPreferredType", t),
            s._$iN("local", o._$ct, t),
            t
        },
        _$hw: function() {
          var t = s._$iL("local", o._$cu);
          return "mp3" !== t && "aac" !== t && (t = "mp3"),
            t
        },
        _$hv: function(t) {
          if (r.info(null, "setFormat", t),
          "mp3" !== t && "aac" !== t)
            throw new RangeError("Only 'mp3' and 'aac' format accepted for now");
          return u._$hv(t),
            s._$iN("local", o._$cu, t),
            t
        },
        _$iK: function() {
          return 1 == s._$iL("local", o._$cv)
        },
        _$hu: function(t) {
          return r.info(null, "setHQ", t),
            t = t ? 1 : 0,
            u._$hu(t),
            s._$iN("local", o._$cv, t ? 1 : 0),
            t
        },
        _$iO: function() {
          return parseFloat(s._$iL("local", o._$cw)) || o._$cB
        },
        _$iw: function(t) {
          s._$iN("local", o._$cw, t)
        },
        _$iP: function() {
          return parseFloat(s._$iL("local", o._$cx)) || o._$cC
        },
        _$f7: function(t) {
          s._$iN("local", o._$cx, t)
        },
        _$iQ: function() {
          return 0 != parseInt(s._$iL("local", o._$cy))
        },
        _$iR: function(t) {
          r.info(null, "setExponent", t),
            s._$iN("local", o._$cy, t ? 1 : 0)
        },
        _$iS: function() {
          return JSON.parse(s._$iL("local", o._$cz) || "{}")
        },
        _$iT: function(t) {
          r.info(null, "setEqualizer", t),
            s._$iN("local", o._$cz, JSON.stringify(t))
        },
        _$iU: function(t) {
          s._$iN("local", o._$cA, t)
        },
        _$iV: function() {
          return s._$iL("local", o._$cA)
        }
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("xstorage")
        , o = i(56)("xstorage")
        , s = i(57)
        , u = i(1)
        , a = i(64)
        , c = i(68)
        , h = i(165)
        , f = h._$iW
        , l = h._$iX
        , d = l.hasOwnProperty ? l.hasOwnProperty.bind(l) : function(t) {
        return l[t]
      }
        , v = i(166)
        , _ = 0
        , p = {}
        , m = c.resolve()
        , A = function(t) {
        if (t = t || o._$cT,
          p[t])
          return p[t];
        u.call(this),
          this._$iY = "https://" + t,
          this._$c3 = new a,
          this._$dY = !1,
          this._$iZ = document.createElement("iframe"),
          this._$iZ.src = this._$iY + "/api/v2.1/handlers/settings/music.yandex.ru".replace("https://" + location.hostname, ""),
          this._$i1 = {},
          this._$i2 = {};
        var n = this._$iZ.style;
        n.position = "absolute",
          n.width = 0,
          n.height = 0,
          n.left = "-1000px",
          n.top = "-1000px",
          window.addEventListener("message", this._$i3.bind(this)),
          document.body.appendChild(this._$iZ),
          this._$iZ.onerror = this._$i4.bind(this, !1),
          this._$iZ = this._$iZ.contentWindow,
          p[t] = this,
          setTimeout(this._$i4.bind(this, !1, Error("Init timeout")), o._$cU)
      };
      A.prototype = {
        _$da: function() {
          return this._$c3.promise()
        },
        _$dk: function() {
          return this._$dY
        },
        _$i4: function(t, n) {
          this._$dY || (this._$dY = !0,
            t ? this._$c3.resolve(n) : (r.error(null, "storage init failed", n),
              this._$i5 = !0,
              n = {
                local: {},
                session: {}
              },
              this._$i2.local = n.local,
              this._$i2.session = n.session,
              this._$c3.resolve(n)),
            this._$d(v.READY))
        },
        _$h2: function(t, n, i, e) {
          if (this._$i5)
            return m;
          var r = _++
            , u = this._$i1[r] = new a;
          return function(t, n) {
            setTimeout((function() {
                t.reject(new Error("Request timeout")),
                  t.promise().catch(s)
              }
            ), n)
          }(u, o._$b3),
            u.promise().catch(s).then(function() {
              delete this._$i1[r]
            }
            .bind(this)),
            this._$iZ.postMessage(JSON.stringify({
              event: t,
              requestId: r,
              data: {
                storage: n,
                key: i,
                value: e
              }
            }), this._$iY),
            u.promise()
        },
        _$i3: function(t) {
          if ((t.origin || t.originalEvent.origin) === this._$iY) {
            try {
              var n = JSON.parse(t.data);
              if (!n.xstorage)
                throw Error("Wrong message")
            } catch (t) {
              return
            }
            var i = n.data.requestId;
            if (i) {
              var e = this._$i1[i];
              e && (n.event === f._$i6 ? e.reject(Error(n.error)) : e.resolve(n.data)),
                delete n.data.requestId
            }
            switch (n.event) {
              case f._$i7:
                this._$i8(n.data);
                break;
              case f._$i6:
                this._$gN(n.data);
                break;
              case f._$i9:
                this._$i0(n.data);
                break;
              case f._$i_:
                this._$ja(n.data)
            }
          }
        },
        _$gN: function(t) {
          r.warn(this, "error", t);
          var n = Error(t.error);
          this._$dY ? this._$d(v.ERROR, n) : (this._$d(v.FAILED, n),
            this._$i4(!1, n))
        },
        _$i8: function(t) {
          var n = this._$i2[t.storage];
          (n = n && n[t.key]) === t.value || null == t.value && n == t.value || (null == t.value ? delete this._$i2[t.storage][t.key] : this._$i2[t.storage][t.key] = t.value,
            this._$d(v.UPDATE, t.storage, t.key, t.value))
        },
        _$ja: function(t) {
          this._$i2[t.storage] = {},
            this._$d(v.CLEAN, t.storage)
        },
        _$i0: function(t) {
          for (var n in t)
            t.hasOwnProperty(n) && (this._$i2[n] = t[n]);
          this._$i4(!0, t)
        },
        _$iL: function(t, n) {
          if (!d(n))
            throw Error("Field " + n + " is not allowed storage field");
          return this._$i2[t][n]
        },
        _$iN: function(t, n, i) {
          if (!d(n))
            throw Error("Field " + n + " is not allowed storage field");
          return this._$i2[t][n] = i,
            this._$d(v.UPDATE, t, n, i),
            this._$h2(f._$jb, t, n, i)
        },
        _$jc: function(t, n) {
          if (!d(n))
            throw Error("Field " + n + " is not allowed storage field");
          return delete this._$i2[t][n],
            this._$d(v.UPDATE, t, n, null),
            this._$h2(f._$jb, t, n, null)
        },
        _$dK: function() {
          return this._$h2(f._$jd)
        }
      },
        u.mixin(A),
        t.$a = A
    }
    , function(t, n, i, e) {
      var r = i(46)(["Ya_Music_Player_Type", "Ya_Music_Player_Format", "Ya_Music_Player_HQ", "Ya_Music_Player_Volume", "Ya_Music_Player_Speed", "Ya_Music_Player_Volume_Gamma", "Ya_Music_Player_Equalizer", "Ya_Music_Player_CD", "Ya_Music_Player_ID", "Ya_Music_Player_FL", "Ya_Music_Player_LV", "Ya_Music_Player_SessionTime", "Ya_Music_Player_SessionLastPlay", "Ya_Music_Player_LA"]);
      n._$iW = {
        _$i7: "update",
        _$i_: "clear",
        _$i6: "error",
        _$i9: "dump",
        _$jb: "update",
        _$jd: "dump"
      },
        n._$iX = r
    }
    , function(t, n, i, e) {
      t.$a = {
        READY: "ready",
        FAILED: "failed",
        ERROR: "error",
        UPDATE: "update",
        CLEAN: "clean"
      }
    }
    , function(t, n, i, e) {
      var r = i(56)("core.queue")
        , o = i(53)
        , s = i(168)
        , u = i(52)
        , a = i(51)
        , c = i(57)
        , h = i(1)
        , f = i(68)
        , l = i(81)
        , d = i(169)
        , v = i(69)
        , _ = i(78)
        , p = i(60)
        , m = i(47)
        , A = i(74)
        , y = i(113)
        , w = i(170)
        , g = function(t, n) {
        return t - n
      }
        , k = function(t) {
        return t instanceof Object && t.isNotLoaded ? a(t) : t
      }
        , E = 0
        , b = function(t, n, i, e) {
        h.call(this),
          this._$c1 = "queue:" + E++,
          this._$eF = i || !1,
          this._$dQ = !1,
          this._$je = m(),
          this._$jf = [],
          this._$dR = -1,
          this._$jg = [],
          this._$jh = -1,
          this._$ji = {},
          this._$jj = new v,
          this._$jk = null,
          this._$jl = this._$jm.bind(this),
          this._$h6(e),
        t && (this._$hD(t),
        null != n && this._$d_(n)),
          this._$ij()
      };
      b._$ef = _(l({
        start: {
          _$d1: function(t) {
            return t._$jf = t._$dO._$jn(t._$dR, t._$if, t._$ik, t._$jo),
              t._$jf.length ? "load" : f.resolve()
          }
        },
        load: {
          _$d1: A((function(t) {
              return y._$hx(t._$jf)
            }
          ), "track.populate", {
            _$gj: !0,
            _$ea: function(t, n) {
              t._$jp = n
            }
          }),
          _$ea: "update"
        },
        update: {
          _$d1: function(t) {
            return t._$dO._$jq(t._$jp) ? f.resolve() : "start"
          }
        }
      }, "start"), [{
        _$ek: d,
        _$dL: function(t) {
          return t._$dO._$jj
        }
      }]),
        b.prototype = {
          _$h6: function(t) {
            this._$eA = t
          },
          _$ij: function() {
            this._$jk = this._$jk && clearTimeout(this._$jk)
          },
          _$ig: function() {
            Object.keys(this._$ji).length && this._$jm()
          },
          _$jr: function(t, n) {
            this._$ji[t] = n || !0,
              this._$js()
          },
          _$jm: function() {
            this._$jk = this._$jk && clearTimeout(this._$jk);
            var t = this._$ji;
            this._$ji = {},
              this._$d(w._$c4, t.index, t.tracks, t["add-time"]),
              this._$ef(this._$dR, null, null, !0)
          },
          _$js: function() {
            this._$jk || (this._$jk = setTimeout(this._$jl, r._$cD))
          },
          _$jt: function(t, n) {
            var i, e = [];
            if (Object.keys(this._$je).length || this._$ju(),
              t) {
              var r = this._$je[a(t)];
              if (void 0 === r)
                return;
              this._$jf[r] && (this._$jf[r].disliked = n)
            }
            if (r && r > this._$jg[this._$jh] && n)
              this._$jg.splice(this._$jg.indexOf(r), 1),
                e = this._$jg;
            else
              for (var u = 0, c = this._$jf.length; u < c; u++) {
                var h = this._$jf[u]
                  , f = !o(h, !0)
                  , l = !s(h)
                  , d = u === this._$dR
                  , v = t && t.id === h.id;
                f && (l || d && !v) && e.push(u)
              }
            if (i = r && r === this._$jg[this._$jh] && n ? e.indexOf(this._$jg[this._$jg.indexOf(this._$dR) - 1]) : e.indexOf(this._$dR),
              this._$eF)
              for (this._$jg = [],
              -1 !== i && (e.splice(i, 1),
                this._$jg.push(this._$dR)); e.length; )
                this._$jg.push(e.splice(Math.min(e.length, Math.floor(Math.random() * e.length)), 1)[0]);
            else
              this._$jg = e;
            this._$jh = i,
            -1 === this._$jh && this._$jg.length > 0 && (this._$dR = this._$dS(),
              this._$jr("index")),
              this._$jr("order")
          },
          _$d_: function(t, n) {
            this._$dR = n ? this._$dU(t) : t,
              this._$jh = this._$jg.indexOf(this._$dR),
            -1 === this._$jh && this._$jt(),
              this._$jr("index")
          },
          _$jv: function() {
            return Math.random().toString().slice(2) + "-" + Math.ceil(new Date / 1e3)
          },
          _$hD: function(t) {
            this._$jf = this._$jf.concat(this._$jw(t)),
              this._$jt(),
              this._$jr("tracks"),
              this._$ef(0, 0, 75, !1)
          },
          _$jx: function(t) {
            this._$jf = this._$jw(t).concat(this._$jf),
              this._$dR += t.length,
              this._$jt(),
              this._$jr("index"),
              this._$jr("tracks"),
              this._$ef()
          },
          _$jy: function(t, n) {
            this._$jf.splice(n, 0, this._$jf.splice(t, 1)[0]),
              this._$dR === t ? (this._$dR = n,
                this._$jr("index")) : this._$dR > t && this._$dR <= n ? (this._$dR--,
                this._$jr("index")) : this._$dR >= n && this._$dR < t && (this._$dR++,
                this._$jr("index")),
              this._$jt(),
              this._$jr("tracks")
          },
          _$ii: function(t, n) {
            if (!((n = null == n ? this._$jf.length - t + 1 : n) <= 0)) {
              var i = t + n - 1;
              if (this._$jf.splice(t, n),
                this._$ju(),
              0 === this._$jf.length)
                this._$dR = 0,
                  this._$jr("index"),
                  this._$d(w._$jz);
              else if (this._$dR >= t && this._$dR <= i) {
                for (this._$dR = t - 1; -1 === this._$jg.indexOf(this._$dR) && this._$dR >= 0; )
                  this._$dR -= 1;
                var e = !0;
                if (this._$dR < 0 && (e = !1),
                  this._$jt(),
                  e) {
                  var r = this._$dS();
                  null != r && (this._$dR = r)
                }
                this._$d(w._$jz)
              } else
                this._$dR > i && (this._$dR -= n,
                  this._$jr("index"));
              this._$jt(),
                this._$jr("tracks")
            }
          },
          _$jA: function() {
            if (this._$jg.length !== this._$jf.length) {
              for (var t = [].concat(this._$jg).sort(g), n = 0, i = 0, e = t.length; i < e; i++)
                t[i] < this._$dR && n++,
                  t[i] = this._$jf[t[i]];
              this._$jf = t,
                this._$jr("tracks"),
              this._$dR !== n && (this._$dR = n,
                this._$jr("index")),
                this._$jt()
            }
          },
          _$jB: function(t) {
            this._$dQ = t,
              this._$jr("order")
          },
          _$eE: function(t) {
            var n = this._$eF !== t;
            this._$eF = t,
            n && this._$jt()
          },
          _$eo: function(t) {
            return t ? this._$dU(this._$dR, !0) : this._$dR
          },
          _$dS: function(t) {
            if (!this._$dQ && !this._$eF && this._$jh + 1 >= this._$ej(!0).length)
              return null;
            var n = this._$jg[(this._$jh + 1) % this._$jg.length];
            return this._$jg.indexOf(n) === this._$jg.length - 1 && s(this._$jf[n]) ? null : t ? void this._$dU(n, !0) : n
          },
          _$dT: function(t) {
            if (!this._$dQ && !this._$eF && this._$jh < 1)
              return null;
            var n = this._$jg[(this._$jg.length + this._$jh - 1) % this._$jg.length];
            return 0 == this._$jg.indexOf(n) && s(this._$jf[n]) ? null : t ? void this._$dU(n, !0) : n
          },
          _$jC: function(t, n) {
            for (var i, e = [], r = 0, o = this._$jf.length; r < o && ((i = u(this._$jf[r])).id != t.id || i.albumId && t.albumId && i.albumId != t.albumId || (e.push(r),
              !(n && e.length >= n))); r++)
              ;
            return e
          },
          _$dU: function(t, n) {
            var i = [].concat(this._$jg).sort(g);
            return n ? i.indexOf(t) : i[t]
          },
          _$ee: function(t) {
            return (t ? this._$jg : this._$jf).length
          },
          _$ju: function() {
            for (var t = 0; t < this._$jf.length; t++)
              this._$je[a(this._$jf[t])] = t;
            return this._$je
          },
          _$ej: function(t, n) {
            if (t) {
              for (var i = [].concat(this._$jg).sort(g), e = 0, r = i.length; e < r; e++)
                i[e] = this._$jf[i[e]];
              return n ? i : i.map(k)
            }
            return [].concat(n ? this._$jf : this._$jf.map(k))
          },
          _$dP: function() {
            var t = this._$jf[this._$dR];
            return t && s(t) && (t.disliked = !0),
              k(t)
          },
          _$eC: function() {
            var t = this._$dS();
            return null == t ? null : k(this._$jf[t])
          },
          _$jD: function() {
            var t = this._$dT();
            return null == t ? null : k(this._$jf[t])
          },
          _$jw: function(t) {
            var n = this
              , i = this._$jv()
              , e = !1;
            return t = t.map((function(t) {
                return t instanceof Object || (t = p({
                  isNotLoaded: !0
                }, u(t))),
                t._$h5 || (t._$h5 = i,
                  e = !0),
                n._$eA && !t.from && (t.from = n._$eA),
                  t
              }
            )),
            e && this._$jr("add-time", i),
              t
          },
          _$jn: function(t, n, i, e) {
            var r, u, a, c = this, h = [];
            e && -1 === this._$jg.indexOf(t) && (e = !1);
            var f = e ? c._$jg.length : c._$jf.length
              , l = f;
            t = (t = e ? this._$jg.indexOf(t) : t) < f ? t : 0,
              i = Math.min(i || 0, f),
              n = Math.min(n || 0, f - i);
            var d = function(t) {
              return t = e ? c._$jg[t] : -1 === t ? 0 : t,
                (a = c._$jf[t]) && (a.id || a.src) && !a.isNotLoaded ? !o(a) && !s(a) : (h.push(a),
                  !0)
            };
            for (l && d(t),
              l--,
              r = 0,
              u = 1; l && r < n; )
              d((f + t - u) % f) && r++,
                l--,
                u++;
            for (r = 0,
              u = 1; l && r < i; )
              d((t + u) % f) && r++,
                l--,
                u++;
            return h
          },
          _$ef: function(t, n, i, e) {
            return null == t && (t = this._$dR),
            null == n && (n = r._$cE),
            null == i && (i = r._$cF),
              b._$ef({
                _$dO: this,
                _$dR: t,
                _$if: n,
                _$ik: i,
                _$jo: e
              })
          },
          _$d0: function(t) {
            var n, i, e, r, o = {}, s = this._$jE(t);
            for (e = 0,
              r = (t = t._$jf).length; e < r; e++)
              t[e].id && ((i = o[(n = u(t[e])).id] = o[n.id] || {})._$jF = t[e],
              n.albumId && (i[n.albumId] = t[e]));
            var a = this._$jf;
            for (e = 0,
              r = a.length; e < r; e++)
              a[e].id && !s || o[(n = u(a[e])).id] && (i = o[n.id],
              (i = n.albumId ? i[n.albumId] : i._$jF) && (a[e] = i))
          },
          _$jE: function(t) {
            return t._$eA === this._$eA && t._$jf.length === this._$jf.length && t._$jf.map(a).join("") === this._$jf.map(a).join("")
          },
          _$jq: function(t) {
            var n, i, e, r, a, c = !0, h = {};
            for (i = 0,
              e = t.length; i < e; i++) {
              for (r = 0,
                a = (n = this._$jC({
                  id: u(t[i]).id
                })).length; r < a; r++) {
                var f = this._$jf[n[r]];
                delete (f = f instanceof Object ? p(f, t[i]) : t[i]).isNotLoaded,
                  this._$jf[n[r]] = f,
                  h[n[r]] = f
              }
              c = c && !o(t[i]) && !s(t[i])
            }
            if (this._$d(w._$jG, h),
              !c) {
              for (f = this._$jf[this._$jg[i]],
                i = 0,
                e = this._$jg.length; i < e; i++)
                (o(f, !0) || s(f)) && (this._$jg.splice(i, 1),
                  this._$jh > i ? this._$jh-- : this._$jh === i && (this._$jh = -1),
                  i--,
                  e--);
              -1 === this._$jh && (this._$dR = -1,
                this._$jt()),
                this._$jr("order")
            }
            return c
          },
          _$dF: function() {
            delete this._$eF,
              delete this._$dQ,
              delete this._$jf,
              delete this._$dR,
              delete this._$jg,
              delete this._$jh,
              delete this._$ji,
              this._$jq = c
          }
        },
        h.mixin(b),
        t.$a = b
    }
    , function(t, n, i, e) {
      var r = i(113);
      t.$a = function(t) {
        return t && (-1 === r._$fT(t) || t.disliked)
      }
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(68)
        , s = i(69)
        , u = i(75);
      t.$a = function(t, n) {
        return t = u(t),
          function(i) {
            var e, u, a, c, h, f = this, l = "function" == typeof n._$dL ? n._$dL.call(f, i) : n._$dL;
            if (!n._$jH) {
              var d = new s;
              d.toggle(!0)
            }
            var v = function() {
              e || (l.isLocked() ? l.promiseUnlock().then(v) : (n._$jH || l.add(d),
                (u = t.call(f, i)).then(_(c), _(h))))
            }
              , _ = function(t) {
              return function(i) {
                n._$jH || l.remove(d),
                  t(i)
              }
            };
            return (a = new o((function(t, n) {
                c = t,
                  h = n,
                  v()
              }
            ))).catch(r),
              a._$dy = function(t) {
                e = !0,
                u && u._$dy && u._$dy(t)
              }
              ,
              a
          }
      }
    }
    , function(t, n, i, e) {
      t.$a = {
        _$c4: "update",
        _$jG: "populate",
        _$jz: "removed"
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("CrackDown")
        , o = i(56)("crackdown")
        , s = (i(136),
        i(163))
        , u = i(111)
        , a = i(62)
        , c = i(105)
        , h = function(t) {
        this._$c6 = t,
          this._$dd = t._$dd,
          this._$jI = !1,
          this._$jJ = (new Date).valueOf(),
          this._$jf = 0;
        var n = this._$jK.bind(this);
        t._$b(c.TRACK_END, n),
          t._$b(c.TRACK_ERROR, n),
          a._$b(a._$c4, this._$eg.bind(this)),
          this._$eg(),
          s._$da().then(this._$jL.bind(this)).catch(t=>console.error(t)),
        s._$dk() && this._$jL();
        var i = this._$gi.bind(this);
        o._$cV && !o._$cW || (window.addEventListener("mousemove", i),
          window.addEventListener("keydown", i),
          window.addEventListener("touchstart", i))
      };
      h.prototype = {
        _$jL: function() {
          this._$jM = parseFloat(s._$iV()) || 0,
          this._$jM && this._$jM < (new Date).valueOf() && (this._$jM = !1),
          this._$jN && clearTimeout(this._$jN),
            this._$jN = setTimeout(this._$jL.bind(this), o._$cQ)
        },
        _$eg: function() {
          if (this._$c6._$c9 && u._$dk()) {
            if (this._$jI = o._$cX,
              !this._$jI) {
              var t = a.experiments.musicCrackdownTiming || "";
              this._$jI = t.replace("time-", "") / 60
            }
            s._$dk() && this._$jL(),
              r.info(null, "update", this._$jI, !!this._$jM)
          }
        },
        _$jK: function() {
          this._$jf += 1
        },
        _$gi: function() {
          if (this._$jJ = (new Date).valueOf(),
            this._$jf = 0,
            this._$jO) {
            var t = (new Date).valueOf() - this._$jO;
            t < o._$cR && "muted" !== this._$jP && (this._$jM = (new Date).valueOf() + o._$cS,
              s._$iU(this._$jM)),
              this._$c6._$d(c.CRACKDOWN_UNPAUSE, this._$jP, t, this._$jM),
              r.info(null, "unpaused", this._$jP, t, !!this._$jM),
              delete this._$jO,
              delete this._$jP
          }
        },
        _$jQ: function(t) {
          var n = a.experiments.musicCrackdownContent
            , i = n ? n.includes("major-") && n.replace("major-", "") : ""
            , e = i ? i.split("-").map(t=>parseInt(t, 10)) : []
            , r = t && t.major && t.major.id;
          return "on" === n || e.includes(r)
        },
        _$eD: function(t) {
          var n = !1;
          if (this._$jR())
            n = "muted";
          else {
            if (o._$jS)
              return !1;
            if (this._$jM && this._$jM < (new Date).valueOf())
              return this._$jM = !1,
                this._$eD();
            this._$jM ? n = !1 : a.premium ? n = !1 : this._$jQ(t) ? "number" == typeof this._$jI && this._$jT() && (n = this._$jI) : n = !1
          }
          return !1 !== n && (this._$jO = (new Date).valueOf(),
            this._$jP = n,
            r.info(null, "paused", this._$jP, this._$jO, this._$jf, (((new Date).valueOf() - this._$jJ) / 6e4 || -1).toFixed(1))),
            n
        },
        _$jT: function() {
          return (new Date).valueOf() - this._$jJ > 1e3 * this._$jI * 60
        },
        _$jR: function() {
          return this._$dd._$cB <= 0
        }
      },
        h._$dx = function(t, n) {
          return null == n && (n = t,
            t = !1),
            function() {
              return t && o._$cV || this._$c7._$gi(),
                n.apply(this, arguments)
            }
        }
        ,
        t.$a = h
    }
    , function(t, n, i, e) {
      var r = new (i(55))("ForceAuth")
        , o = i(62)
        , s = i(105)
        , u = new (i(164))
        , a = function(t) {
        this._$c6 = t,
          this._$iC = 0,
          this._$jU = 0,
          this._$jf = 0,
          this._$jV = 0,
          this._$jW = [],
          this._$jX = !1,
          this._$jY = !0,
          this._$jZ = this._$j1.bind(this),
          this._$j2 = this._$gO.bind(this),
          this._$j3 = this._$fe.bind(this),
          o.on(o._$c4, this._$jZ),
          o._$c3.promise().then(this._$jZ),
          this._$c6.on(s.TRACK_END, this._$j3)
      };
      a.prototype = {
        _$n: function() {
          this._$jX = !0,
            r.info(this, "init", this._$en)
        },
        _$j4: function() {
          r.info(this, "deinit"),
            this._$jX = !1,
            o.off(o._$c4, this._$jZ),
            this._$c6.off(s.TRACK_END, this._$j3)
        },
        _$j1: function() {
          u._$da().then(this._$j2)
        },
        _$gO: function() {
          this._$en = o.experiments && o.experiments.musicLoginWall;
          var t = this._$en
            , n = parseInt(o.experiments && o.experiments.musicLoginWallElapse, 10)
            , i = parseInt(u._$iL("local", "Ya_Music_Player_FL"), 10)
            , e = parseInt(u._$iL("local", "Ya_Music_Player_LV"), 10)
            , r = (new Date).valueOf()
            , s = e && r - e > 2592e6
            , a = s ? 0 : r - i
            , c = 864e5;
          if (s && (i = !1,
            a = 0),
          Number.isNaN(n) || (c = 6e4 * parseInt(n, 10)),
          i || u._$iN("local", "Ya_Music_Player_FL", r),
            u._$iN("local", "Ya_Music_Player_LV", r),
          o.logged || a < c || !t || /default|control/.test(t) || !/tracks|time/.test(t))
            this._$j4();
          else {
            if (this._$n(),
              t.includes("stop-major")) {
              var h = t.split("_")
                , f = h[0].replace("stop-major-", "").split("-");
              this._$jW = f.map(t=>parseInt(t, 10)),
                t = h[1]
            }
            for (var l = t.split("-"), d = 0, v = l.length; d < v; d += 2)
              "tracks" === l[d] && (this._$jV = parseInt(l[d + 1], 10)),
              "time" === l[d] && (this._$jU = parseInt(l[d + 1], 10));
            l.includes("stop") && (this._$dD = !0)
          }
        },
        _$fe: function(t, n) {
          t.normalEnd && this._$jf++,
            this._$iC += n.played,
            r.info(this, "stats", this._$jf, this._$iC)
        },
        _$eB: function() {
          r.info(this, "enable"),
            this._$jY = !1
        },
        _$em: function(t) {
          return this._$eD(t) && this._$dD
        },
        _$f8: function(t) {
          return this._$eD(t) && !this._$dD
        },
        _$eD: function(t) {
          if (!this._$jX || this._$jY)
            return !1;
          var n = t && t.major && this._$jW.includes(t.major.id);
          n && (this._$dD = !0);
          var i = this._$jf >= this._$jV && this._$iC >= this._$jU
            , e = n || i;
          return r.info(this, "check", e, this._$dD),
            e
        }
      },
        t.$a = a
    }
    , function(t, n, i, e) {
      var r = new (i(164))
        , o = function() {
        this._$j2 = this._$gO.bind(this),
          this._$da().then(this._$j2)
      };
      o.prototype = {
        _$dk: function() {
          return r._$dk()
        },
        _$da: function() {
          return r._$da()
        },
        _$gO: function() {
          var t = (new Date).valueOf()
            , n = parseInt(r._$iL("local", "Ya_Music_Player_SessionTime")) || 0;
          t - n > 72e6 && (n = t,
            r._$iN("local", "Ya_Music_Player_SessionTime", n),
            r._$iN("local", "Ya_Music_Player_SessionLastPlay", null)),
            this._$j5 = n,
            setTimeout(this._$j2, 72001e3)
        },
        _$e5: function() {
          r._$iN("local", "Ya_Music_Player_SessionLastPlay", (new Date).valueOf())
        },
        _$ep: function() {
          return (parseInt(r._$iL("local", "Ya_Music_Player_SessionLastPlay")) || 0) > 0
        },
        _$hb: function() {
          var t = parseInt(r._$iL("local", "Ya_Music_Player_LA")) || 0;
          return t > this._$j5 && t
        },
        _$g3: function() {
          r._$iN("local", "Ya_Music_Player_LA", (new Date).valueOf())
        }
      },
        t.$a = o
    }
    , function(t, n, i, e) {
      t.$a = {
        ALL: !0,
        ONE: 1,
        NONE: !1
      }
    }
    , function(t, n, i, e) {
      var r = i(56)("skips")
        , o = new (i(55))("Source")
        , s = i(67)
        , u = i(57)
        , a = i(51)
        , c = i(64)
        , h = i(176)
        , f = i(71)
        , l = i(1)
        , d = i(69)
        , v = i(157)
        , _ = i(136)
        , p = i(170)
        , m = i(123)
        , A = i(174)
        , y = i(113)
        , w = i(171)._$dx
        , g = [].slice
        , k = function(t, n, i) {
        return function() {
          var e = this._$j6();
          if (!e)
            throw new Error("No source attached");
          if (n && e._$d7 !== n)
            throw new Error("This method allowed only on " + n + ", but " + e._$d7 + " selected as current source");
          if (i && e._$d7 === i)
            throw new Error("This method denied on " + i);
          var r = g.call(arguments);
          return r.unshift(e),
            t.apply(this, r)
        }
      }
        , E = function(t) {
        var n = function() {
          var i = this;
          if (i._$j7.isLocked())
            return i._$j8 && i._$j8._$gK.reject(Error("Skip like a boss")),
              i._$j8 = {
                _$gK: new c,
                _$ds: arguments,
                _$dZ: i,
                _$j9: n
              },
              i._$j8._$gK.promise();
          var e = t.apply(i, arguments);
          i._$j0 = !0;
          var o = i.getCurrent();
          return o.disliked = i.isDisliked(o),
          o && (o.skipped = !0),
            i._$de(),
            i._$j7.toggle(!0),
            e.catch(u).then((function() {
                i._$j0 = !1,
                  i._$j7.toggle(!1)
              }
            )),
          i._$j6()._$d7 === _.RADIO && (i._$j_.toggle(!0),
            setTimeout((function() {
                i._$j_.toggle(!1)
              }
            ), r._$cP)),
            e
        };
        return n
      }
        , b = function(t) {
        l.call(this),
          this._$c7 = t._$c7,
          this._$c8 = t._$c8,
          this._$c6 = t._$c6,
          this._$dd = this._$c6._$dd,
          this._$c9 = this._$c6._$c9,
          this._$eF = !1,
          this._$dQ = A.NONE,
          this._$ka = this._$i8.bind(this),
          this._$kb = this._$jq.bind(this),
          this._$kc = this._$kd.bind(this),
          this._$j7 = new d,
          this._$j_ = new d,
          this._$j7.add(this._$j_),
          this._$j7._$b(d.EVENT_STATE, this._$ke.bind(this)),
          this._$kf = null
      };
      b.prototype = {
        _$ke: function() {
          var t = this._$j8;
          if (this._$kg(),
            t) {
            delete this._$j8;
            try {
              t._$j9.apply(t._$dZ, t._$ds).then(t._$gK.resolve, t._$gK._$B)
            } catch (n) {
              t._$gK.reject(n)
            }
          }
        },
        _$j6: function() {
          return this._$c9 || (this._$c9 = this._$c6._$c9),
            this._$c9
        },
        _$de: function() {
          var t = this._$c9;
          this._$c9 = null,
          t && (t._$dO.off(p._$c4, this._$ka),
            t._$dO.off(p._$jG, this._$kb),
            t._$dO.off(p._$jz, this._$kc)),
            t = this._$j6(),
            this._$kh(),
            this._$ki(),
            t._$dO._$b(p._$c4, this._$ka),
            t._$dO._$b(p._$jG, this._$kb),
            t._$dO._$b(p._$jz, this._$kc),
            t._$dO._$js(),
            this._$kg()
        },
        _$kd: function() {
          this._$c6._$bA(this.getIndex())
        },
        _$jq: function(t) {
          this._$d(v.POPULATE, t)
        },
        _$i8: function(t, n, i) {
          (t || n) && (i ? this._$d(v.UPDATE, t, n, this._$c9._$eK ? "restored" : this._$c9._$eA, i) : this._$d(v.UPDATE, t, n)),
            this._$kg()
        },
        _$kg: h((function() {
            var t = this.getControls()
              , n = JSON.stringify(t);
            this._$kj !== n && this._$d(v.CONTROLS, t),
              this._$kj = n
          }
        ), {
          _$el: function() {
            return this._$c6._$c1
          },
          _$cS: 30
        }),
        _$kh: function() {
          var t = this._$j6();
          t && t._$d7 !== _.RADIO && (t._$dO._$jB(this._$dQ),
            this._$kg())
        },
        _$ki: function() {
          this._$c6._$eE(this._$eF),
            this._$kg()
        },
        _$dF: function() {
          this.clearListeners(),
            this._$c9._$dO.off(p._$c4, this._$ka),
            this._$c9._$dO.off(p._$jG, this._$kb),
            this._$c9._$dO.off(p._$jz, this._$kc),
            delete this._$c6,
            delete this._$c9,
            delete this._$kj,
            delete this._$eF,
            delete this._$dQ
        },
        getType: function() {
          var t = this._$j6();
          return t && t._$d7
        },
        getConfig: k((function(t) {
            return t._$d8
          }
        )),
        getInfo: k((function(t) {
            return t._$d4
          }
        )),
        getControls: k((function(t) {
            return {
              index: t._$d7 !== _.RADIO || null,
              next: t._$d7 === _.RADIO ? !this._$j7.isLocked() : !!t._$dO._$eC(),
              prev: t._$d7 === _.RADIO ? null : !!t._$dO._$jD(),
              like: !0,
              dislike: !this._$j7.isLocked(),
              shuffle: this.getShuffle(),
              repeat: this.getRepeat(),
              skipping: this._$j0 || !1
            }
          }
        )),
        getTrackIndex: k((function(t, n) {
            return t._$dO._$ju()[a(n)]
          }
        )),
        getIndex: k((function(t, n) {
            return t._$dO._$eo(n)
          }
        )),
        getNextIndex: k((function(t, n) {
            return t._$dO._$dS(n)
          }
        )),
        getPrevIndex: k((function(t, n) {
            return t._$dO._$dT(n)
          }
        )),
        convertIndex: k((function(t, n, i) {
            return t._$dO._$dU(n, !i)
          }
        )),
        getList: k((function(t, n, i) {
            return t._$dO._$ej(n, i)
          }
        )),
        getCount: k((function(t, n) {
            return t._$dO._$ee(n)
          }
        )),
        getCurrent: k((function(t) {
            return t._$dO._$dP()
          }
        )),
        getNext: k((function(t) {
            return t._$dO._$eC()
          }
        )),
        getPrev: k((function(t) {
            return t._$dO._$jD()
          }
        )),
        _$jy: E((function(t, n, i) {
            var e = this._$c6._$bA(t, n)._$dz;
            return this._$dd._$dA(!!i),
              e
          }
        )),
        setIndex: w(f(k((function(t, n, i, e) {
            return o.info(null, "setIndex", n, i),
              this._$c8._$C(),
            i && (n = t._$dO._$dU(n)),
              this._$jy(n, void 0, e)
          }
        ), null, _.RADIO))),
        next: w(f(k((function(t) {
            if (o.info(null, "next"),
              this._$c8._$C(),
            t._$dO._$dQ === A.ONE && (t._$dO._$dQ = A.ALL,
              this._$dQ = A.ALL,
              this._$kg()),
              !this.getNext())
              throw new Error("No next track");
            return this.getNext().disliked && t._$dO._$jt(),
              this._$jy("+", m._$hS)
          }
        )))),
        prev: w(f(k((function(t) {
            if (o.info(null, "prev"),
              this._$c8._$C(),
            t._$dO._$dQ === A.ONE && (t._$dO._$dQ = A.ALL,
              this._$dQ = A.ALL,
              this._$kg()),
              !this.getPrev())
              throw new Error("No prev track");
            return this.getPrev().disliked && t._$dO._$jt(),
              this._$jy("-")
          }
        ), null, _.RADIO))),
        selectTrack: w(f(k((function(t, n, i) {
            var e = t._$dO._$jC(n, 1);
            if (e.length < 1)
              throw new Error("Track not found");
            return this.setIndex(e[0], !1, i)
          }
        ), null, _.RADIO))),
        setSettings: w(f(k((function(t, n) {
            return o.info(null, "setSettings", n),
              this._$c6._$f5(n)
          }
        ), _.RADIO))),
        getSettings: k((function(t) {
            return t._$f6
          }
        ), _.RADIO),
        getRestrictions: k((function(t) {
            return t._$ic
          }
        ), _.RADIO),
        updateFrom: k((function(t, n) {
            o.info(null, "updateFrom", n),
              t._$eA = n,
              t._$dO._$h6(t._$eA)
          }
        )),
        append: w(k((function(t, n) {
            o.info(null, "append", n.length),
              t._$dO._$hD(n)
          }
        ), null, _.RADIO)),
        prepend: w(k((function(t, n) {
            o.info(null, "prepend", n.length),
              t._$dO._$jx(n)
          }
        ), null, _.RADIO)),
        move: w(k((function(t, n, i) {
            o.info(null, "move", n, i),
              t._$dO._$jy(n, i)
          }
        ), null, _.RADIO)),
        remove: w(k((function(t, n, i) {
            o.info(null, "remove", n, i),
              t._$dO._$ii(n, i)
          }
        ), null, _.RADIO)),
        cleanup: k((function(t) {
            o.info(null, "cleanup"),
              t._$dO._$jA()
          }
        )),
        populate: f(k((function(t, n, i, e, r) {
            return t._$dO._$ef(n, i, e, r)
          }
        ))),
        isLiked: k((function(t, n) {
            return null == n && (n = this.getCurrent()),
              this._$c6._$fS(n)
          }
        )),
        isDisliked: k((function(t, n) {
            return null == n && (n = this.getCurrent()),
              this._$c6._$fU(n)
          }
        )),
        toggleLike: w(f(k((function(t, n, i, e, r) {
            o.info(null, "toggleLike", n, i, r),
            n && (i.disliked = !1),
              this._$c6._$fV(n, i, e, r),
            n && t._$dO._$jt(i, !1)
          }
        )))),
        toggleDislike: w(f(k((function(t, n, i, e) {
            return o.info(null, "toggleDislike", n, i, e),
              this._$f4(n, i, e)
          }
        )))),
        _$f4: E((function(t, n, i) {
            var e = this._$j6();
            return this._$c8._$C(),
              n.disliked = t,
              setTimeout((function() {
                  e._$dO._$jt(n, t)
                }
              ), 0),
              this._$c6._$f1(t, n, i)
          }
        )),
        updateFavs: f((function(t) {
            return t ? (y._$hB(t),
              !0) : y._$ht()
          }
        )),
        getShuffle: function() {
          var t = this._$j6();
          return t && t._$d7 !== _.RADIO ? this._$eF : null
        },
        toggleShuffle: w((function(t) {
            if (null == t && (t = !this._$eF),
              o.info(null, "toggleShuffle", t),
            this._$eF !== t)
              return this._$eF = t,
                this._$ki(),
                this._$eF
          }
        )),
        getRepeat: function() {
          var t = this._$j6();
          return t && t._$d7 !== _.RADIO ? this._$dQ : null
        },
        toggleRepeat: w((function(t) {
            if (null == t && (t = this._$dQ === A.ALL ? A.ONE : this._$dQ === A.ONE ? A.NONE : A.ALL),
              o.info(null, "toggleRepeat", t),
            this._$dQ !== t)
              return this._$dQ = t,
                this._$kh(),
                this._$dQ
          }
        ))
      },
        l.mixin(b),
        n.Source = b,
        n.$c = s.createClass(b)
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(64);
      t.$a = function(t, n) {
        var i = {};
        return function() {
          var e, s = ("function" == typeof n._$el ? n._$el.apply(this, arguments) : n._$el) || "key";
          if (i[s])
            e = i[s]._$go;
          else {
            (e = new o).promise().catch(r);
            var u = setTimeout((function() {
                var n;
                try {
                  n = t.apply(i[s]._$dZ, i[s]._$ds)
                } catch (t) {
                  n = t
                }
                e.resolve(n),
                  delete i[s]
              }
            ), n._$cS || 0);
            i[s] = {
              _$iC: u,
              _$go: e
            }
          }
          return i[s]._$ds = arguments,
            i[s]._$dZ = this,
            e.promise()
        }
      }
    }
    , function(t, n, i, e) {
      var r = new (i(55))("Audio")
        , o = i(67)
        , s = i(56)("player.audio")
        , u = i(70)
        , a = i(72)
        , c = i(163)
        , h = i(1)
        , f = i(178)
        , l = i(19)
        , d = ya.music.Audio
        , v = d.audioContext
        , _ = d.fx.Equalizer
        , p = d.fx.volumeLib
        , m = i(171)._$dx
        , A = function(t) {
        h.call(this),
          this._$c7 = t._$c7,
          this._$c8 = t._$c8,
          this._$c6 = t._$c6,
          this._$dd = this._$c6._$dd,
          this._$kk = !1,
          this._$cB = .5,
          this._$cC = 1,
          this._$kl = null,
          this._$km = !1,
          this.readyPromise().then(this._$gO.bind(this))
      };
      A.prototype = {
        _$w: function() {
          return {
            type: this.isReady() ? this.getType() : "not ready",
            current: this._$kn()
          }
        },
        _$dF: function() {
          this.clearListeners(),
            delete this._$c6,
            delete this._$dd,
            delete this._$kk,
            delete this._$cB,
            delete this._$cC,
            delete this._$kl,
            delete this._$km
        },
        _$gO: function() {
          this._$cB = c._$iO(),
            this._$cC = c._$iP(),
            this._$kk = c._$iQ(),
            this.setVolume(this.getVolume()),
            this.setSpeed(this.getSpeed()),
            this._$dd._$eS._$b(l.EVENT_PROGRESS, this._$ko.bind(this, "main")),
            this._$dd._$eS._$b(l.EVENT_OUTER_PAUSE, this._$kp.bind(this, "main")),
            this._$dd._$eS._$b(l.EVENT_OUTER_PLAY, this._$kq.bind(this, "main")),
            this._$dd._$eT._$b(l.EVENT_PROGRESS, this._$ko.bind(this, "stream")),
            this._$dd._$eT._$b(l.EVENT_OUTER_PAUSE, this._$kp.bind(this, "stream")),
            this._$dd._$eT._$b(l.EVENT_OUTER_PLAY, this._$kq.bind(this, "stream")),
            this._$dd._$eU._$b(l.EVENT_PROGRESS, this._$ko.bind(this, "advert")),
            this._$dd._$eU._$b(l.EVENT_OUTER_PAUSE, this._$kp.bind(this, "advert")),
            this._$dd._$eU._$b(l.EVENT_OUTER_PLAY, this._$kq.bind(this, "advert")),
            this._$dd._$hi._$b(l.EVENT_PROGRESS, this._$ko.bind(this, "video")),
            this._$dd._$hi._$b(l.EVENT_OUTER_PAUSE, this._$kp.bind(this, "video")),
            this._$dd._$hi._$b(l.EVENT_OUTER_PLAY, this._$kq.bind(this, "video")),
            this._$dd._$eV._$b(l.EVENT_PROGRESS, this._$ko.bind(this, "common")),
            this._$dd._$eV._$b(l.EVENT_OUTER_PAUSE, this._$kp.bind(this, "common")),
            this._$dd._$eV._$b(l.EVENT_OUTER_PLAY, this._$kq.bind(this, "common"))
        },
        _$ko: function(t, n) {
          t === this._$kn() && this._$d(f.TIME, n)
        },
        _$kq: function(t, n) {
          this.isPaused() ? this._$d(f.OUTER_PLAY, n) : this._$d(f.OUTER_PAUSE, n)
        },
        _$kp: function(t, n) {
          this._$d(f.OUTER_PAUSE, n)
        },
        _$kr: function() {
          return this.isReady() ? this._$dd._$fL.isLocked() ? this._$dd._$fC.isLocked() ? this._$dd._$fB.isLocked() ? this._$dd._$eQ.isLocked() ? null : this._$dd._$eS : this._$dd._$eU : this._$dd._$hi : this._$dd._$eV : null
        },
        _$kn: function() {
          return this.isReady() ? this._$dd._$fL.isLocked() ? this._$dd._$fC.isLocked() ? this._$dd._$fB.isLocked() ? this._$dd._$eQ.isLocked() ? null : "main" : "advert" : "video" : "common" : null
        },
        isReady: function() {
          return this._$dd._$dk()
        },
        readyPromise: function() {
          return this._$dd._$da()
        },
        canNavigate: function() {
          return "main" === this._$kn()
        },
        getType: u((function() {
            return this._$dd._$eS.getType()
          }
        )),
        isDeviceVolume: u((function() {
            return this._$dd._$eS.isDeviceVolume()
          }
        )),
        isEqualizerAvailable: u((function() {
            return "html5" === this.getType() && !!v
          }
        )),
        isAutoplayable: u((function() {
            return this._$dd._$eS.isAutoplayable()
          }
        )),
        getDuration: function() {
          var t = this._$kr();
          return t ? t.getDuration() : 0
        },
        getLoaded: function() {
          var t = this._$kr();
          return t ? t.getLoaded() : 0
        },
        getPosition: function() {
          var t = this._$kr();
          return t ? t.getPosition() : 0
        },
        getPlayed: function() {
          return this.isReady() ? this._$dd._$eS.getPlayed() : 0
        },
        setPosition: m(!0, (function(t) {
            return r.info(this, "setPosition", t),
              "main" !== this._$kn() ? this.getPosition() : this._$dd._$eS.setPosition(t)
          }
        )),
        isPaused: function() {
          return this._$dd._$dc.isLocked()
        },
        togglePause: m((function(t) {
            r.info(this, "togglePause", t),
            !t && this._$c8._$C(),
            t || this.toggleMute(!1),
              this._$c6._$dg(a._$dh) || this._$c6._$dg(a._$di) ? this._$dd._$dA(t) : t || (this._$dd._$dA(!1),
                this._$c6._$bA())
          }
        )),
        isExponent: function() {
          return this._$kk
        },
        toggleExponent: m((function(t) {
            this._$kk = t,
              c._$iR(t),
              this._$d(f.VOLUME, this.getVolume())
          }
        )),
        getVolume: function() {
          return this._$kk ? p.fromExponent(this._$cB) : this._$cB
        },
        setVolume: m((function(t) {
            t = Math.max(0, Math.min(1, t)),
            this._$kk && (t = p.toExponent(t)),
            t < s._$cG && (t = 0),
              this._$dd._$iw(t),
              this._$cB = t,
            t && c._$iw(t),
              this._$d(f.VOLUME, this.getVolume())
          }
        )),
        getSpeed: function() {
          return this._$cC
        },
        setSpeed: m((function(t) {
            t < s._$cJ && (t = s._$cJ),
            t > s._$cK && (t = s._$cK),
              this._$dd._$f7(t),
              this._$cC = t,
            t && c._$f7(t),
              this._$d(f.SPEED, this.getSpeed())
          }
        )),
        toggleMute: m((function(t) {
            if (r.info(this, "toggleMute", t),
            null == t && (t = 0 !== this._$cB),
              t) {
              if (!this._$cB)
                return;
              this.lastVolume = this.getVolume(),
                this.setVolume(0)
            } else {
              if (this._$cB)
                return;
              this.setVolume(this.lastVolume)
            }
          }
        )),
        getEqualizer: u((function() {
            return this.isEqualizerAvailable() ? (this._$kl || (this._$kl = new _(v,_.DEFAULT_BANDS)),
              this._$kl) : null
          }
        )),
        getEqualizerState: function() {
          return this._$km
        },
        toggleEqualizerState: m(u((function(t) {
            if (r.info(this, "toggleEqualizerState", t),
              !this.isEqualizerAvailable())
              return null;
            var n = this._$dd._$eS;
            return null == t && (t = !this._$km),
              t ? this._$km ? this.getEqualizer() : n.toggleWebAudioAPI(!0) && this.getEqualizer() ? (n.setAudioPreprocessor(this._$kl),
                this._$km = !0,
                this._$kl) : (this._$km = !1,
                null) : this._$km ? (n.setAudioPreprocessor(null),
                this._$km = !1,
                null) : null
          }
        ))),
        isTypeAvailable: function(t) {
          return !!d.info[t]
        }
      },
        h.mixin(A),
        n.Audio = A,
        n.$d = o.createClass(A)
    }
    , function(t, n, i, e) {
      t.$a = {
        TIME: "time",
        VOLUME: "volume",
        OUTER_PAUSE: "outerpause",
        OUTER_PLAY: "outerplay",
        EQUALIZER: "equalizer",
        SPEED: "speed"
      }
    }
    , function(t, n, i, e) {
      var r = i(72)
        , o = i(163)
        , s = i(111)
        , u = i(60)
        , a = i(62)
        , c = i(51)
        , h = i(90)
        , f = function(t) {
        this._$ks = t,
          this._$c9 = t._$c9,
          this._$c6 = t._$c6,
          this._$dd = this._$c6._$dd,
          this._$c0 = t._$c0
      };
      f.prototype._$kt = function(t) {
        return t ? {
          id: c(t),
          available: t.available,
          error: t.error,
          title: t.title,
          liked: this._$c9.isLiked(t),
          disliked: this._$c9.isDisliked(t)
        } : null
      }
        ,
        f.prototype.show = function() {
          var t = this._$c6._$dq(r._$dh)
            , n = this._$c6._$c9
            , i = n._$dO;
          return {
            player: {
              state: this._$ks.getState(),
              ready: this._$c6._$dk(),
              tasks: Object.keys(this._$c6._$d1),
              contexts: Object.keys(this._$c6._$dZ),
              play: t ? {
                from: t._$eA,
                track: this._$kt(t._$dr),
                advert: {
                  sdk: !!h._$g7,
                  loader: !!t._$dt._$gL,
                  sender: !!t._$dt._$ha,
                  id: t._$dt._$eq && t._$dt._$eq._$fv,
                  cond: t._$dt._$er ? {
                    skip: t._$dt._$er._$es,
                    play: t._$dt._$er._$bA
                  } : null
                }
              } : null
            },
            source: {
              type: n._$d7,
              config: n._$d8,
              current: this._$kt(i._$dP()),
              next: this._$kt(i._$eC()),
              prev: this._$kt(i._$jD()),
              repeat: i._$dQ,
              shuffle: i._$eF,
              count: i._$ee(),
              playable: i._$ee(!0),
              index: i._$dR,
              vindex: i._$jh,
              controls: this._$c9.getControls()
            },
            audio: u(this._$c0._$w(), {
              pause: this._$dd._$dc.isLocked(),
              main: this._$dd._$eQ.isLocked(),
              advert: this._$dd._$fB.isLocked(),
              common: this._$dd._$fL.isLocked(),
              playMain: this._$dd._$io.isLocked(),
              playAdvert: this._$dd._$iq.isLocked(),
              playCommon: this._$dd._$ir.isLocked()
            }, this._$c0.isReady() ? {
              position: this._$c0.getPosition(),
              duration: this._$c0.getDuration(),
              loaded: this._$c0.getLoaded(),
              played: this._$c0.getPlayed()
            } : {}),
            user: {
              ready: s._$dk(),
              logged: a.logged,
              premium: a.premium,
              notFree: a.notFree
            },
            settings: {
              ready: o._$dk()
            }
          }
        }
        ,
        t.$a = f
    }
    , function(t, n, i, e) {
      var r = i(56)("cross_tabs")
        , o = i(164)
        , s = i(166)
        , u = new o
        , a = function(t) {
        this._$dd = t._$c6._$dd,
          this._$ku = "" + +new Date + Math.random(),
          a._$kv[this._$ku] = this,
        a._$kw || (u.on(s.UPDATE, a._$eD),
          a._$kw = !0)
      };
      a.prototype._$C = function() {
        u._$iN("local", r._$cL, this._$ku)
      }
        ,
        a._$eD = function(t, n, i) {
          var e;
          if (n === r._$cL && i)
            for (var o in a._$kv)
              a._$kv.hasOwnProperty(o) && (e = a._$kv[o]._$dd,
              o !== i && e._$dc.toggle(!0))
        }
        ,
        a._$kv = {},
        t.$a = a
    }
    , function(t, n, i, e) {
      t.$a = {
        INIT: "init",
        IDLE: "idle",
        PLAYING: "playing",
        PAUSED: "paused",
        FAILED: "failed"
      }
    }
    , function(t, n, i, e) {
      t.$a = {
        IDLE: "idle",
        SOURCE: "source",
        PLAY: "play",
        COMMON: "common",
        ADVERT: "advert",
        TRACK: "track",
        STREAM: "stream"
      }
    }
    , function(t, n, i, e) {
      var r = i(163)
        , o = i(70)
        , s = (e = i(96),
        i(60))
        , u = {
        isReady: function() {
          return r._$dk()
        },
        readyPromise: function() {
          return r._$da()
        },
        getPreferredType: o((function() {
            return r._$it()
          }
        )),
        setPreferredType: o((function(t) {
            return r._$iM(t)
          }
        )),
        getFormat: o((function() {
            return r._$hw()
          }
        )),
        setFormat: o((function(t) {
            return r._$hv(t)
          }
        )),
        getHQ: o((function() {
            return r._$iK()
          }
        )),
        setHQ: o((function(t) {
            return r._$hu(t)
          }
        )),
        getVolume: o((function() {
            return r._$iO()
          }
        )),
        getSpeed: o((function() {
            return r._$iP()
          }
        )),
        getExponent: o((function() {
            return r._$iQ()
          }
        )),
        setRequestsGlobal: function(t) {
          s(e, t, !0)
        }
      };
      t.$a = u
    }
    , function(t, n, i, e) {
      var r = i(111)
        , o = i(62)
        , s = i(70)
        , u = {
        isReady: function() {
          return r._$dk()
        },
        readyPromise: function() {
          return r._$da()
        },
        update: i(71)((function() {
            return r._$dK()
          }
        )),
        getCurrentUID: function() {
          return r._$ho()
        },
        getCSRF: function() {
          return r._$hp()
        },
        getFreshCSRF: function() {
          return r._$hq()
        },
        getOwnerLoginName: function() {
          return r._$hn()
        },
        setIsIframe: function(t) {
          r._$hl(t)
        },
        setCurrentUID: function(t) {
          r._$hm(t)
        },
        isLogged: s((function() {
            return o.logged
          }
        )),
        isPremium: s((function() {
            return o.premium
          }
        )),
        isBadRegion: s((function() {
            return o.badRegion
          }
        )),
        isNotFree: s((function() {
            return o.notFree
          }
        )),
        lang: s((function() {
            return o.lang
          }
        ))
      };
      t.$a = u
    }
    , function(t, n, i, e) {
      var r = i(124)
        , o = {
        getValue: function(t, n, i) {
          return r._$hV(t, n, i)
        },
        getList: function() {
          return r._$ej()
        }
      };
      t.$a = o
    }
    , function(t, n, i, e) {
      var r = i(57)
        , o = i(142)
        , s = i(141)
        , u = i(143)
        , a = i(81)
        , c = i(77)(a({
        available: {
          _$d1: s,
          _$ea: "settings"
        },
        settings: {
          _$d1: u
        }
      }, "available"), {
        _$el: function(t) {
          return t._$d8.type + ":" + t._$d8.tag
        },
        _$cS: 0
      })
        , h = {
        radioList: function() {
          var t = o._$ej();
          return t.catch(r),
            t
        },
        radioAvailable: function(t, n) {
          var i = o._$h7(t, n);
          return i.catch(r),
            i
        },
        radioInfo: function(t, n) {
          var i = {
            _$d8: {
              type: t,
              tag: n
            },
            _$c9: {}
          };
          return c(i).then((function() {
              return {
                info: i._$c9._$d4,
                settings: i._$c9._$f6,
                restrictions: i._$c9._$ic
              }
            }
          ), (function() {
              throw Error("Cannot fetch radio settings")
            }
          ))
        },
        radioBySeed: function(t) {
          var n = o._$h0(t);
          return n.catch(r),
            n
        }
      };
      t.$a = h
    }
    , function(t, n, i, e) {
      var r = i(49)
        , o = i(83);
      r.getContext = o._$gG,
        r.detect = o._$gF,
        r.adbState = o._$fH,
        r.antiAdbSetup = o._$gJ,
        r.antiAdbWatch = o._$gC,
        r.antiAdbStyles = o._$gz,
        r.antiAdbNotify = o._$gy
    }
  ])
}("undefined" == typeof module ? {} : module);
