(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[734], {
    69403: function(e, t, n) {
        "use strict";
        var r, a, i, o, s, l, u, c, d;
        n.d(t, {
            Jq: function() {
                return s
            },
            Os: function() {
                return i
            },
            uU: function() {
                return o
            }
        }),
        (l = r || (r = {})).Default = "default",
        l.Dark = "dark",
        (a || (a = {})).Retrieval = "retrieval",
        (u = i || (i = {})).Next = "next",
        u.Variant = "variant",
        u.Continue = "continue",
        (c = o || (o = {})).Unknown = "unknown",
        c.User = "user",
        c.Assistant = "assistant",
        c.System = "system",
        c.Critic = "critic",
        c.Tool = "tool",
        (d = s || (s = {})).Root = "root",
        d.System = "system",
        d.Prompt = "prompt",
        d.Completion = "completion"
    },
    78042: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return K
            }
        });
        var r = n(22830)
          , a = n(35250)
          , i = n(61888)
          , o = n(70079)
          , s = n(39324)
          , l = n(71209)
          , u = n(3001)
          , c = n(75908)
          , d = n(35290)
          , f = n(82841)
          , h = n(36218)
          , g = n(32787)
          , m = n(85023)
          , p = n(64135)
          , v = n(88038)
          , x = n(55041)
          , b = (0,
        u.vU)({
            welcomeBack: {
                id: "existingUserAgeConfirmationModal.welcomeBack",
                defaultMessage: "Welcome back, Italy!",
                description: "Title for the age confirmation modal for Italian users"
            },
            ageRequirementsButton: {
                id: "existingUserAgeConfirmationModal.ageRequirementsButton",
                defaultMessage: "I meet OpenAI's age requirements",
                description: "Primary button to confirm the user meets the age requirements"
            },
            logoutButton: {
                id: "existingUserAgeConfirmationModal.logoutButton",
                defaultMessage: "Log out",
                description: "Secondary button to log out of the platform"
            },
            announcementParagraph1: {
                id: "existingUserAgeConfirmationModal.announcementParagraph1",
                defaultMessage: "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
                description: "First paragraph of the announcement, explaining the age requirements"
            },
            privacyPolicyLink: {
                id: "existingUserAgeConfirmationModal.privacyPolicyLink",
                defaultMessage: "Privacy policy",
                description: "Link to the privacy policy"
            },
            helpCenterArticleLink: {
                id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
                defaultMessage: "this help center article",
                description: "Link to the help center article about ChatGPT development"
            },
            announcementParagraph2: {
                id: "existingUserAgeConfirmationModal.announcementParagraph2",
                defaultMessage: "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
                description: "Second paragraph of the announcement, providing links to more information"
            }
        })
          , y = "2023-04-25"
          , j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);
        function k(e) {
            var t = e.onClose
              , n = (0,
            c.Z)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(j, !0),
                t()
            }, [t])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.ageConfirmationModal, {
                    content: y
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                title: n.formatMessage(b.welcomeBack),
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: n.formatMessage(b.ageRequirementsButton),
                    color: "primary",
                    onClick: r
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: n.formatMessage(b.logoutButton),
                    color: "light",
                    onClick: function() {
                        s(h.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        g.w7)()
                    },
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(w, {})
            })
        }
        var w = function() {
            var e = (0,
            c.Z)();
            return (0,
            a.jsx)("div", {
                className: "mb-6 mt-4 sm:mt-6",
                children: (0,
                a.jsxs)("div", {
                    className: "prose prose-invert text-base text-gray-500",
                    children: [(0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, b.announcementParagraph1))
                    }), (0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, b.announcementParagraph2), {
                            values: {
                                privacyPolicyLink: (0,
                                a.jsx)("a", {
                                    href: "https://openai.com/policies/privacy-policy",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.privacyPolicyLink)
                                }),
                                helpCenterArticleLink: (0,
                                a.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.helpCenterArticleLink)
                                })
                            }
                        }))
                    })]
                })
            })
        }
          , C = n(19208)
          , _ = n.n(C)
          , M = n(68555)
          , T = n(4337)
          , N = n(34303)
          , I = n(5759)
          , P = n(66958);
        function S() {
            var e = (0,
            T._)(["flex gap-4 mt-6"]);
            return S = function() {
                return e
            }
            ,
            e
        }
        function Z(e) {
            var t = e.onBack
              , n = e.onNext
              , r = e.onSubmit;
            return (0,
            a.jsxs)(A, {
                children: [t && (0,
                a.jsx)(P.z, {
                    as: "button",
                    color: "neutral",
                    onClick: t,
                    children: "Back"
                }), n && (0,
                a.jsx)(P.z, {
                    as: "button",
                    onClick: n,
                    color: "neutral",
                    className: "ml-auto",
                    children: "Next"
                }), r && (0,
                a.jsx)(P.z, {
                    as: "button",
                    onClick: r,
                    color: "primary",
                    className: "ml-auto",
                    children: "Done"
                })]
            })
        }
        var A = N.Z.div(S());
        function R() {
            var e = (0,
            T._)(["prose dark:prose-invert"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        function D() {
            var e = (0,
            T._)(["mb-4"]);
            return D = function() {
                return e
            }
            ,
            e
        }
        var L = (0,
        u.vU)({
            keepInMind: {
                id: "onboarding.keepInMind",
                defaultMessage: "Here are a few things to keep in mind before we get started:",
                description: "Introduction text for the onboarding process"
            },
            page0Subtitle: {
                id: "onboarding.page0Subtitle",
                defaultMessage: "This is a free research preview.",
                description: "Subtitle for Page 0"
            },
            page0Disclaimer1: {
                id: "onboarding.page0Disclaimer1",
                defaultMessage: "Our goal is to get external feedback in order to improve our systems and make them safer.",
                description: "Disclaimer 1 for Page 0"
            },
            page0Disclaimer2: {
                id: "onboarding.page0Disclaimer2",
                defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                description: "Disclaimer 2 for Page 0"
            },
            page1Subtitle: {
                id: "onboarding.page1Subtitle",
                defaultMessage: "How we collect data",
                description: "Subtitle for Page 1"
            },
            page1Disclaimer1: {
                id: "onboarding.page1Disclaimer1",
                defaultMessage: "Conversations may be reviewed by our AI trainers to improve our systems.",
                description: "Disclaimer 1 for Page 1"
            },
            page1Disclaimer2: {
                id: "onboarding.page1Disclaimer2",
                defaultMessage: "Please don't share any sensitive information in your conversations.",
                description: "Disclaimer 2 for Page 1"
            },
            page2Subtitle: {
                id: "onboarding.page2Subtitle",
                defaultMessage: "We'd love your feedback!",
                description: "Subtitle for Page 2"
            },
            page2Disclaimer1: {
                id: "onboarding.page2Disclaimer1",
                defaultMessage: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                description: "Disclaimer 1 for Page 2"
            },
            page2Disclaimer2: {
                id: "onboarding.page2Disclaimer2",
                defaultMessage: "Share your feedback in our <link>Discord server</link>.",
                description: "Disclaimer 2 for Page 2, with link to Discord"
            }
        })
          , F = "oai/apps/hasSeenOnboarding"
          , E = function() {
            var e = (0,
            o.useCallback)(function() {
                m.m.setItem("".concat(F, "/chat"), new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }))
            }, [])
              , t = (0,
            r._)((0,
            o.useState)(null), 2)
              , n = t[0]
              , a = t[1];
            (0,
            o.useEffect)(function() {
                var e = m.m.getItem("".concat(F, "/chat"));
                a(!!e && e)
            }, [a]);
            var i = (0,
            o.useCallback)(function() {
                return new Date()
            }, [n]);
            return (0,
            o.useMemo)(function() {
                return {
                    setHasSeenOnboarding: e,
                    getHasSeenOnboardingDate: i
                }
            }, [i, e])
        };
        function B(e) {
            var t = e.onClose
              , n = E().setHasSeenOnboarding
              , i = (0,
            r._)((0,
            o.useState)(0), 2)
              , s = i[0]
              , l = i[1]
              , u = (0,
            o.useCallback)(function() {
                t(!0),
                n()
            }, [t, n]);
            return (0,
            a.jsxs)(z, {
                children: [0 === s && (0,
                a.jsx)(O, {
                    onChangePage: l
                }), 1 === s && (0,
                a.jsx)(q, {
                    onChangePage: l
                }), 2 === s && (0,
                a.jsx)(U, {
                    onChangePage: l,
                    onSubmit: u
                })]
            })
        }
        var O = function(e) {
            var t = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(H, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, L.page0Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDD2C",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, L.page0Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDEA8",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, L.page0Disclaimer2))
                    })]
                }), (0,
                a.jsx)(Z, {
                    onNext: function() {
                        return t(1)
                    }
                })]
            })
        }
          , q = function(e) {
            var t = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(H, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, L.page1Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83E\uDDBE",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, L.page1Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDD10",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, L.page1Disclaimer2))
                    })]
                }), (0,
                a.jsx)(Z, {
                    onBack: function() {
                        return t(0)
                    },
                    onNext: function() {
                        return t(2)
                    }
                })]
            })
        }
          , U = function(e) {
            var t = e.onChangePage
              , n = e.onSubmit
              , r = (0,
            o.useRef)(null);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(H, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, L.page2Subtitle))
                }), (0,
                a.jsxs)(I.I, {
                    children: [(0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDC4D",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, L.page2Disclaimer1))
                    }), (0,
                    a.jsx)(I.Z, {
                        icon: "\uD83D\uDCAC",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, L.page2Disclaimer2), {
                            values: {
                                link: function(e) {
                                    return (0,
                                    a.jsx)("a", {
                                        href: "https://discord.gg/openai",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })]
                }), (0,
                a.jsx)(Z, {
                    onBack: function() {
                        return t(1)
                    },
                    onSubmit: function() {
                        return null == n ? void 0 : n(r)
                    }
                })]
            })
        }
          , z = N.Z.div(R())
          , H = N.Z.h4(D())
          , V = n(5046)
          , W = (0,
        u.vU)({
            tryGPT4: {
                id: "releaseAnnouncement.tryGPT4",
                defaultMessage: "Try GPT-4",
                description: "Button text to try GPT-4"
            },
            maybeLater: {
                id: "releaseAnnouncement.maybeLater",
                defaultMessage: "Maybe later",
                description: "Button text to dismiss the release announcement"
            },
            introducingGPT4: {
                id: "releaseAnnouncement.introducingGPT4",
                defaultMessage: "Introducing GPT-4",
                description: "Heading for the GPT-4 release announcement"
            },
            ourLatestModel: {
                id: "releaseAnnouncement.ourLatestModel",
                defaultMessage: "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
                description: "Text to introduce GPT-4 and provide a link to its product page"
            },
            advancedReasoning: {
                id: "releaseAnnouncement.advancedReasoning",
                defaultMessage: "Advanced reasoning",
                description: "List item highlighting advanced reasoning in GPT-4"
            },
            complexInstructions: {
                id: "releaseAnnouncement.complexInstructions",
                defaultMessage: "Complex instructions",
                description: "List item highlighting complex instructions in GPT-4"
            },
            moreCreativity: {
                id: "releaseAnnouncement.moreCreativity",
                defaultMessage: "More creativity",
                description: "List item highlighting more creativity in GPT-4"
            },
            dynamicAdjustment: {
                id: "releaseAnnouncement.dynamicAdjustment",
                defaultMessage: "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                description: "Text explaining the dynamic adjustment of GPT-4 usage based on demand"
            },
            feb13Update: {
                id: "releaseAnnouncement.feb13Update",
                defaultMessage: "Feb 13 update",
                description: "Text for the February 13 update announcement"
            },
            turboToDefault: {
                id: "releaseAnnouncement.turboToDefault",
                defaultMessage: "Turbo",
                description: "Text for Turbo version in the announcement"
            },
            defaultVersion: {
                id: "releaseAnnouncement.defaultVersion",
                defaultMessage: "Default",
                description: "Text for the Default version in the announcement"
            },
            turboDefaultSwitch: {
                id: "releaseAnnouncement.turboDefaultSwitch",
                defaultMessage: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
                description: "Text explaining the switch from Turbo to the Default version based on user feedback"
            },
            gpt4HasEnhancedCapabilities: {
                id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
                defaultMessage: "GPT-4 has enhanced capabilities in:",
                description: "Text to introduce GPT-4's enhanced capabilities"
            }
        })
          , G = "2023-03-12"
          , Q = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(G);
        function $(e) {
            var t = e.onClose
              , n = (0,
            M.useRouter)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(Q, !0),
                t()
            }, [t])
              , i = (0,
            o.useCallback)(function() {
                r(),
                n.replace("/?model=".concat(V.R9))
            }, [r, n])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.announcementViewed, {
                    content: G
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "",
                theme: "dark",
                fullBleed: !0,
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Try GPT-4",
                    color: "light",
                    onClick: i
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Maybe later",
                    color: "dark",
                    onClick: r,
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(J, {})
            })
        }
        var J = function() {
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(_(), {
                    src: "/images/gpt-4-motif.svg",
                    alt: "Gpt-4 announcement banner",
                    width: "480",
                    height: "160",
                    className: "mt-3.5 w-full"
                }), (0,
                a.jsx)("div", {
                    className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "prose prose-invert text-base",
                        children: [(0,
                        a.jsx)("h2", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, W.introducingGPT4))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            l._)((0,
                            s._)({}, W.ourLatestModel), {
                                tagName: "span",
                                values: {
                                    link: function(e) {
                                        return (0,
                                        a.jsx)("a", {
                                            href: "https://openai.com/product/gpt-4",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, W.gpt4HasEnhancedCapabilities))
                        }), (0,
                        a.jsxs)("ul", {
                            children: [(0,
                            a.jsxs)("li", {
                                children: [(0,
                                a.jsx)(d.Z, (0,
                                s._)({}, W.advancedReasoning)), " "]
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, W.complexInstructions))
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, W.moreCreativity))
                            })]
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, W.dynamicAdjustment))
                        })]
                    })
                })]
            })
        }
          , Y = function(e) {
            var t = e.onClose;
            return (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                primaryButton: void 0,
                title: "ChatGPT",
                children: (0,
                a.jsx)(B, {
                    onClose: t
                })
            })
        }
          , X = function(e) {
            var t = e.onClose;
            return (0,
            a.jsx)($, {
                onClose: t
            })
        };
        function K(e) {
            var t, n, i, s = e.userCountry, l = (0,
            r._)((0,
            o.useState)(0), 2), u = l[0], c = l[1], d = E().getHasSeenOnboardingDate, f = (n = (t = (0,
            p.hz)()).has(v.Vn),
            i = !!m.m.getItem(j),
            0 === t.size ? "loading" : "IT" !== s || i ? "hide" : n ? "show" : "hide"), h = function() {
                var e = E().getHasSeenOnboardingDate
                  , t = (0,
                p.Xj)().isLoading
                  , n = (0,
                p.hz)();
                if (t)
                    return "loading";
                var r = e();
                return m.m.getItem(Q) || !r ? "hide" : n.has("model_preview") && r < new Date(G) ? "show" : "hide"
            }(), g = (0,
            o.useMemo)(function() {
                return [{
                    Modal: k,
                    getModalState: function() {
                        return f
                    }
                }, {
                    Modal: Y,
                    getModalState: function() {
                        var e = d();
                        return null === e ? "loading" : !1 === e ? "show" : "hide"
                    }
                }, {
                    Modal: X,
                    getModalState: function() {
                        return h
                    }
                }]
            }, [d, f, h]);
            (0,
            o.useEffect)(function() {
                g[u] && "hide" === g[u].getModalState() && c(g.findIndex(function(e) {
                    return "hide" !== e.getModalState()
                }))
            }, [u, g]);
            var x = g[u];
            if (!x)
                return null;
            var b = x.getModalState();
            if ("loading" === b)
                return null;
            "hide" === b && c(function(e) {
                return e + 1
            });
            var y = g[u].Modal;
            return (0,
            a.jsx)(y, {
                onClose: function() {
                    c(function(e) {
                        return e + 1
                    })
                }
            })
        }
    },
    21172: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return g
            }
        });
        var r = n(22830)
          , a = n(35250)
          , i = n(70079)
          , o = n(5914)
          , s = n(97688)
          , l = n(87316)
          , u = n(32983)
          , c = n(64135)
          , d = n(75527)
          , f = n(78042)
          , h = n(2604);
        function g(e) {
            var t = e.urlThreadId
              , n = e.clientThreadId
              , g = e.isUserInCanPayGroup
              , m = e.serviceStatus
              , p = e.serviceAnnouncement
              , v = e.userCountry
              , x = (0,
            r._)((0,
            i.useState)(function() {
                return void 0 !== t ? t : void 0 !== n ? n : (0,
                d.OX)()
            }), 2)
              , b = x[0]
              , y = x[1];
            void 0 !== t && b !== t && y(t),
            void 0 !== t || (0,
            d.Zz)(b) || y((0,
            d.OX)());
            var j = (0,
            c.Xj)().data
              , k = null == j ? void 0 : j.accountPlan.hasPaidSubscription
              , w = (0,
            l.g)(function(e) {
                return e.updateFlagValue
            });
            (0,
            i.useEffect)(function() {
                void 0 !== g && w("isUserInCanPayGroup", g)
            }, [w, g]),
            (0,
            i.useEffect)(function() {
                (null == m ? void 0 : m.type) && !1 === k && s.m.warning(m.message, {
                    hasCloseButton: !0,
                    duration: 5
                })
            }, [k, null == m ? void 0 : m.message, null == m ? void 0 : m.type]);
            var C = (0,
            d.GR)(b)
              , _ = (0,
            i.useRef)(!1);
            return (0,
            i.useEffect)(function() {
                if (null != j) {
                    var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
                    if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !_.current) {
                        _.current = !0;
                        var t = e.message
                          , n = {
                            hasCloseButton: !0,
                            duration: 15
                        };
                        switch (e.type) {
                        case "danger":
                            s.m.danger(t, n);
                            break;
                        case "info":
                            s.m.info(t, n);
                            break;
                        case "warning":
                            s.m.warning(t, n)
                        }
                    }
                }
            }, [p, j]),
            (0,
            a.jsxs)(u.AX.Provider, {
                value: C,
                children: [(0,
                a.jsx)(f.Z, {
                    userCountry: v
                }), (0,
                a.jsx)(o.j, {}), (0,
                a.jsx)(h.Z, {
                    clientThreadId: b,
                    setClientThreadId: y,
                    isStaticSharedThread: !1
                })]
            })
        }
    },
    22208: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            SANDBOX_LINK_PREFIX: function() {
                return y
            },
            default: function() {
                return k
            },
            handleSandboxLinkClick: function() {
                return j
            }
        });
        var r = n(21722)
          , a = n(22830)
          , i = n(39889)
          , o = n(35250)
          , s = n(70079)
          , l = n(24274)
          , u = n(75527)
          , c = n(4337)
          , d = n(1454)
          , f = n(34303)
          , h = n(66958)
          , g = n(38317)
          , m = n(19265);
        function p() {
            var e = (0,
            c._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        function v(e) {
            var t = e.accept
              , n = e.onFilePicked
              , r = e.loading
              , a = e.disabled
              , i = (0,
            s.useRef)(null)
              , l = (0,
            s.useCallback)(function() {
                var e;
                null === (e = i.current) || void 0 === e || e.click()
            }, [])
              , u = (0,
            s.useCallback)(function(e) {
                var t, r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                r && (n(r),
                e.target.value = "")
            }, [n]);
            return (0,
            o.jsxs)(x, {
                children: [(0,
                o.jsx)(h.z, {
                    onClick: l,
                    disabled: a || r,
                    color: "none",
                    children: r ? (0,
                    o.jsx)(m.Z, {}) : (0,
                    o.jsx)(g.ZP, {
                        icon: d.Cje,
                        size: "small"
                    })
                }), (0,
                o.jsx)("input", {
                    type: "file",
                    accept: t,
                    ref: i,
                    className: "hidden",
                    onChange: u
                })]
            })
        }
        var x = f.Z.div(p())
          , b = n(97688)
          , y = "sandbox:";
        function j(e, t) {
            var n;
            return n = (0,
            r._)(function(e, n) {
                var a, o, s, u, c;
                return (0,
                i.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        var f;
                        a = n.substring(8),
                        o = null,
                        f = 100,
                        s = (0,
                        r._)(function() {
                            return (0,
                            i.Jh)(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    var t;
                                    return f < 1e3 && (f += 100),
                                    [4, (t = f,
                                    new Promise(function(e) {
                                        return setTimeout(e, t)
                                    }
                                    ))];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            })
                        }),
                        d.label = 1;
                    case 1:
                        return [4, l.ZP.downloadFromSandbox(e, t, a)];
                    case 2:
                        if (null == (u = d.sent()) ? void 0 : u.download_url)
                            return o = u.download_url,
                            [3, 6];
                        if ((null == u ? void 0 : u.state) !== "not_ready")
                            return [3, 4];
                        return [4, s()];
                    case 3:
                        return d.sent(),
                        [3, 5];
                    case 4:
                        return b.m.warning("Download failed: ".concat(a)),
                        [2];
                    case 5:
                        return [3, 1];
                    case 6:
                        return (c = document.createElement("a")).href = o,
                        c.click(),
                        [2]
                    }
                })
            }),
            function(e, t) {
                return n.apply(this, arguments)
            }
        }
        function k(e) {
            var t, n = e.onFileUpload, c = e.clientThreadId, d = e.currentLeafId, f = e.modelBackend, h = e.disabled, g = (0,
            a._)((0,
            s.useState)(!1), 2), m = g[0], p = g[1], x = (0,
            s.useCallback)((t = (0,
            r._)(function(e) {
                var t, r, a, o;
                return (0,
                i.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        p(!0),
                        i.label = 1;
                    case 1:
                        if (i.trys.push([1, , 3, 4]),
                        e.size > 104857600)
                            return r = (e.size / 1024 / 1024).toFixed(0),
                            b.m.warning("File is larger than upload limit: ".concat(r, " MB vs ").concat("100", " MB"), {
                                hasCloseButton: !0,
                                duration: 15
                            }),
                            [2];
                        return o = (null === (t = (a = u.tQ.getTree(c).getNode(d)).message) || void 0 === t ? void 0 : t.id) || a.id,
                        [4, l.ZP.uploadUsingFileService(o, u.tQ.getServerThreadId(c), f, e)];
                    case 2:
                        return n(i.sent()),
                        [3, 4];
                    case 3:
                        return p(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }),
            function(e) {
                return t.apply(this, arguments)
            }
            ), [n, c, d, f]);
            return (0,
            o.jsx)(v, {
                disabled: m || h,
                onFilePicked: x
            })
        }
    },
    37541: function(e, t, n) {
        "use strict";
        var r = n(35250)
          , a = n(70060)
          , i = n.n(a);
        n(70079);
        var o = function(e) {
            var t = e.children;
            return (0,
            r.jsx)(r.Fragment, {
                children: t
            })
        };
        t.Z = i()(function() {
            return Promise.resolve(o)
        }, {
            ssr: !1
        })
    },
    5914: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return f
            }
        });
        var r = n(35250)
          , a = n(70079)
          , i = n(82841)
          , o = n(36218)
          , s = n(85023)
          , l = n(64135)
          , u = n(88038)
          , c = n(97688)
          , d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25")
          , f = function() {
            var e = (0,
            l.hz)().has(u.Id)
              , t = (0,
            a.useRef)(!!s.m.getItem(d))
              , n = (0,
            i.WS)();
            return (0,
            a.useEffect)(function() {
                e && !t.current && n && (n(o.s6.oneOffStatusMessageShown),
                c.m.warning("You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        s.m.setItem(d, !0),
                        t.current = !0
                    }
                }))
            }, [t, e, n]),
            (0,
            r.jsx)("div", {})
        }
    },
    2604: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return uf
            }
        });
        var r, a, i, o, s, l, u, c, d, f, h, g, m, p, v, x, b = n(39324), y = n(70216), j = n(22830), k = n(4337), w = n(35250), C = n(35448), _ = n(68555), M = n(70079), T = n(34303), N = n(82841), I = n(36218), P = n(64135), S = n(75527), Z = n(81292), A = n(58392), R = (0,
        Z.ZP)((0,
        A.n)(function() {
            return {
                aborters: {}
            }
        })), D = R.setState, L = {
            addAborter: function(e, t) {
                D(function(n) {
                    null != n.aborters[e] && console.warn("Setting aborter for id ".concat(e, " but it already exists")),
                    n.aborters[e] = t
                })
            },
            abortAndRemoveById: function(e) {
                D(function(t) {
                    var n = t.aborters[e];
                    null != n && (n.abort(),
                    delete t.aborters[e])
                })
            },
            removeAborterById: function(e) {
                D(function(t) {
                    delete t.aborters[e]
                })
            },
            reset: function() {
                D(function() {
                    return {
                        aborters: {}
                    }
                })
            },
            abortAllAndReset: function() {
                D(function(e) {
                    Object.keys(e.aborters).forEach(function(t) {
                        e.aborters[t].abort(),
                        delete e.aborters[t]
                    })
                })
            }
        }, F = {
            isNavigationCollapsed: !1,
            sharingModalThreadId: void 0
        }, E = (0,
        Z.ZP)()(function() {
            return (0,
            b._)({}, F)
        }), B = {
            toggleNavigation: function() {
                E.setState(function(e) {
                    return console.log("state", e),
                    {
                        isNavigationCollapsed: !e.isNavigationCollapsed
                    }
                })
            },
            openSharingModal: function(e) {
                E.setState({
                    sharingModalThreadId: e
                })
            },
            closeSharingModal: function() {
                E.setState({
                    sharingModalThreadId: void 0
                })
            }
        }, O = n(32983), q = n(19841), U = n(7851), z = n(26430), H = n(84913), V = n(44043), W = n(82187), G = n(69262), Q = n(75861), $ = n(70575), J = n(91530), Y = n.n(J), X = n(1454), K = n(3001), ee = n(75908), et = n(35290), en = n(24274), er = n(88038), ea = n(77442);
        function ei(e, t, n) {
            var r = (0,
            S.XL)(e)
              , a = r.title
              , i = r.titleSource
              , o = (0,
            j._)((0,
            M.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = null != a ? a : t
              , c = (0,
            M.useRef)(u);
            return (0,
            M.useEffect)(function() {
                return n && i === S._L.Generated && u !== c.current && l(!0),
                function() {
                    c.current = u
                }
            }, [n, u, i]),
            {
                isTypingEffect: s,
                resolvedTitle: u
            }
        }
        var eo = n(19051)
          , es = n(51217)
          , el = function() {
            var e = (0,
            M.useRef)(!1);
            return (0,
            M.useEffect)(function() {
                return e.current = !0,
                function() {
                    e.current = !1
                }
            }, []),
            (0,
            M.useCallback)(function() {
                return e.current
            }, [])
        };
        function eu(e) {
            var t = e.text
              , n = el()
              , r = (0,
            j._)((0,
            M.useState)(!0), 2)
              , a = r[0]
              , i = r[1]
              , o = (0,
            j._)((0,
            M.useState)(0), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            M.useMemo)(function() {
                return new ec().humanTypingDelaysQuertyDistance(t)
            }, [t]);
            return (0,
            M.useEffect)(function() {
                t && a && (i(!0),
                u.forEach(function(e, t) {
                    setTimeout(function() {
                        n() && (l(t),
                        t === u.length - 1 && i(!1))
                    }, e)
                }))
            }, [u, n, a, t]),
            (0,
            w.jsxs)(w.Fragment, {
                children: [t.substring(0, s + 1), a && "▋"]
            })
        }
        var ec = function() {
            function e() {
                (0,
                es._)(this, e)
            }
            var t = e.prototype;
            return t.qwertyDistance = function(e, t) {
                var n, r, a = {
                    q: [0, 0],
                    w: [1, 0],
                    e: [2, 0],
                    r: [3, 0],
                    t: [4, 0],
                    y: [5, 0],
                    u: [6, 0],
                    i: [7, 0],
                    o: [8, 0],
                    p: [9, 0],
                    a: [0, 1],
                    s: [1, 1],
                    d: [2, 1],
                    f: [3, 1],
                    g: [4, 1],
                    h: [5, 1],
                    j: [6, 1],
                    k: [7, 1],
                    l: [8, 1],
                    z: [0, 2],
                    x: [1, 2],
                    c: [2, 2],
                    v: [3, 2],
                    b: [4, 2],
                    n: [5, 2],
                    m: [6, 2]
                }, i = (0,
                j._)(null !== (n = a[e.toLowerCase()]) && void 0 !== n ? n : [0, 0], 2), o = i[0], s = i[1], l = (0,
                j._)(null !== (r = a[t.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                return Math.abs(o - l[0]) + Math.abs(s - l[1])
            }
            ,
            t.humanTypingDelaysQuertyDistance = function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], i = 0; i < e.length; ++i) {
                    var o = void 0;
                    if (i > 0) {
                        var s = this.qwertyDistance(e[i - 1], e[i]);
                        o = 0 === s ? this.getRandomInt(t, Math.floor(n / 2)) : 1 === s ? this.getRandomInt(t, Math.floor(2 * n / 3)) : this.getRandomInt(t, n)
                    } else
                        o = this.getRandomInt(t, n);
                    a.push(o + r),
                    r += o
                }
                return a
            }
            ,
            t.getRandomInt = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }
            ,
            e
        }()
          , ed = n(66958)
          , ef = n(38317)
          , eh = n(56060)
          , eg = n(85023)
          , em = n(21722)
          , ep = n(71209)
          , ev = n(39889)
          , ex = n(63020)
          , eb = n(13002)
          , ey = n(32787)
          , ej = n(97703)
          , ek = (0,
        M.createContext)()
          , ew = function(e) {
            return (0,
            Z.oR)((0,
            M.useContext)(ek), e)
        }
          , eC = n(59710)
          , e_ = n(55041)
          , eM = n(19265)
          , eT = n(81949)
          , eN = n(1215)
          , eI = n(21437);
        function eP() {
            var e = (0,
            k._)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
            return eP = function() {
                return e
            }
            ,
            e
        }
        var eS = T.Z.span(eP())
          , eZ = n(54655)
          , eA = n(64664)
          , eR = n(69403);
        function eD(e) {
            var t, n;
            if (e.author.role === eR.uU.Assistant) {
                if ("browser" === e.recipient)
                    return c.Browsing;
                if ("code" === e.content.content_type || "python" === e.recipient && "text" === e.content.content_type)
                    return c.Code;
                if (null === (t = e.recipient) || void 0 === t ? void 0 : t.includes("."))
                    return c.Plugin
            } else if (e.author.role === eR.uU.Tool) {
                if ("browser" === e.author.name)
                    return c.BrowseTool;
                if ("execution_output" === e.content.content_type)
                    return c.CodeExecutionOutput;
                if ((null === (n = e.author.name) || void 0 === n ? void 0 : n.includes(".")) || "plugin_service" === e.author.name)
                    return c.PluginTool
            }
            return "text" === e.content.content_type ? c.Text : c.Unknown
        }
        (r = c || (c = {}))[r.Text = 0] = "Text",
        r[r.Browsing = 1] = "Browsing",
        r[r.BrowseTool = 2] = "BrowseTool",
        r[r.Code = 3] = "Code",
        r[r.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        r[r.Plugin = 5] = "Plugin",
        r[r.PluginTool = 6] = "PluginTool",
        r[r.Unknown = 7] = "Unknown";
        var eL = n(57311)
          , eF = n(54887)
          , eE = n.n(eF);
        function eB(e) {
            var t = e.url
              , n = e.name
              , r = e.size
              , a = e.large
              , i = e.className;
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("relative", i),
                style: {
                    width: r,
                    height: r
                },
                children: [(0,
                w.jsx)("img", {
                    src: t,
                    alt: "".concat(n, " logo"),
                    className: (0,
                    q.Z)("h-full w-full bg-white", a ? "rounded-[5px]" : "rounded-sm")
                }), (0,
                w.jsx)("div", {
                    className: (0,
                    q.Z)("absolute inset-0 ring-1 ring-inset ring-black/10", a ? "rounded-[5px]" : "rounded-sm")
                })]
            })
        }
        function eO() {
            var e = (0,
            k._)(["relative p-1 ", " text-white flex items-center justify-center"]);
            return eO = function() {
                return e
            }
            ,
            e
        }
        function eq() {
            var e = (0,
            k._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
            return eq = function() {
                return e
            }
            ,
            e
        }
        function eU() {
            var e = (0,
            k._)(["bg-[#5436DA] text-white flex justify-center items-center relative tracking-widest"]);
            return eU = function() {
                return e
            }
            ,
            e
        }
        function ez() {
            var e = (0,
            k._)(["relative flex"]);
            return ez = function() {
                return e
            }
            ,
            e
        }
        var eH = T.Z.div(eO(), function(e) {
            return e.$isMessageRedesign ? "rounded-full h-7 w-7" : "rounded-sm h-[30px] w-[30px]"
        })
          , eV = T.Z.span(eq(), function(e) {
            return "warning" === e.$type && "bg-orange-500 text-white"
        }, function(e) {
            return "danger" === e.$type && "bg-red-500 text-white"
        })
          , eW = function(e) {
            var t = e.iconName
              , n = e.background
              , r = e.notice
              , a = (0,
            P.hz)().has(er.FZ)
              , i = ef.nI;
            switch (t) {
            case "globe":
                i = X.RsK;
                break;
            case "terminal":
                i = X.cDN;
                break;
            case "text":
                i = X.RUS;
                break;
            case "browsing":
                i = X.jRj;
                break;
            case "code":
                i = eb.oT$;
                break;
            case "plugin":
                i = X.yG;
                break;
            case "user":
                i = X.fzv
            }
            return (0,
            w.jsxs)(eH, {
                $isMessageRedesign: a,
                style: {
                    backgroundColor: n
                },
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: i,
                    size: "medium",
                    className: a ? "!h-5 !w-5" : ""
                }), r && (0,
                w.jsx)(eV, {
                    $type: r,
                    children: "!"
                })]
            })
        }
          , eG = function(e) {
            var t = e.plugin
              , n = e.notice
              , r = (0,
            P.hz)().has(er.FZ);
            return (0,
            w.jsxs)(eH, {
                $isMessageRedesign: r,
                className: "p-0",
                children: [(0,
                w.jsx)(eB, {
                    url: t.manifest.logo_url,
                    name: t.manifest.name_for_human,
                    size: "100%"
                }), n && (0,
                w.jsx)(eV, {
                    $type: n,
                    children: "!"
                })]
            })
        }
          , eQ = T.Z.div(eU())
          , e$ = T.Z.div(ez())
          , eJ = {
            small: 20,
            redesign: 28,
            medium: 38
        }
          , eY = function(e) {
            var t, n = e.user, r = e.size, a = e.notice, i = a && (0,
            w.jsx)(eV, {
                $type: a,
                children: "!"
            }), o = (0,
            P.hz)().has(er.FZ);
            if ((null == n ? void 0 : n.picture) != null)
                return (0,
                w.jsxs)(e$, {
                    children: [(0,
                    w.jsx)(eE(), {
                        src: n.picture,
                        alt: "User",
                        width: eJ[r],
                        height: eJ[r],
                        className: o ? "rounded-full" : "rounded-sm"
                    }), i]
                });
            var s = (null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : "").split(" ").map(function(e) {
                return e[0]
            }).join("").toUpperCase();
            return (0,
            w.jsxs)(eQ, {
                className: (0,
                q.Z)("redesign" === r ? "h-7 w-7 text-xs" : "small" === r ? "h-5 w-5 text-xs" : "h-[30px] w-[30px] text-xs", o ? "rounded-full" : "rounded-sm"),
                children: [s || (0,
                w.jsx)(ef.ZP, {
                    icon: X.fzv,
                    size: "redesign" === r ? "small" : r
                }), i]
            })
        };
        function eX() {
            var e = (0,
            k._)(["flex ml-auto gap-2"]);
            return eX = function() {
                return e
            }
            ,
            e
        }
        function eK(e) {
            var t = e.buttonText
              , n = e.onCopy
              , r = e.className
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = el()
              , l = (0,
            M.useCallback)(function() {
                n(),
                o(!0),
                setTimeout(function() {
                    s() && o(!1)
                }, 2e3)
            }, [s, n]);
            return (0,
            w.jsxs)(w.Fragment, {
                children: [!i && (0,
                w.jsxs)(e0, {
                    onClick: l,
                    className: r,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.j4u
                    }), t]
                }), i && (0,
                w.jsxs)(e0, {
                    className: r,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.UgA
                    }), t && "Copied!"]
                })]
            })
        }
        var e0 = T.Z.button(eX());
        function e1(e) {
            var t, n = e.url, r = e.size, a = void 0 === r ? 16 : r, i = e.className;
            try {
                t = new URL(n)
            } catch (e) {
                return console.error(e),
                null
            }
            return (0,
            w.jsx)("img", {
                src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
                alt: "Favicon",
                width: a,
                height: a,
                className: i
            })
        }
        var e2 = n(57924)
          , e3 = "&#8203;"
          , e5 = "oaicite:";
        function e4(e) {
            var t, n = e.displayInfo;
            return (0,
            w.jsx)(e2.u, {
                label: (0,
                w.jsx)(e6, {
                    pageInfo: n.metadata,
                    invalidReason: n.invalid_reason
                }),
                side: "top",
                sideOffset: 4,
                withArrow: !1,
                interactive: !0,
                wide: !0,
                children: (0,
                w.jsx)("a", {
                    href: null === (t = n.metadata) || void 0 === t ? void 0 : t.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "px-0.5 text-green-600 !no-underline",
                    children: (0,
                    w.jsx)("sup", {
                        children: n.number
                    })
                })
            })
        }
        function e6(e) {
            var t = e.pageInfo
              , n = e.invalidReason;
            return (0,
            w.jsx)("a", {
                href: null == t ? void 0 : t.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs !no-underline",
                children: t ? (0,
                w.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    w.jsx)("div", {
                        className: "flex shrink-0 items-center justify-center",
                        children: (0,
                        w.jsx)(e1, {
                            url: t.url,
                            className: "my-0"
                        })
                    }), (0,
                    w.jsx)("div", {
                        className: "max-w-xs truncate",
                        children: t.title
                    }), (0,
                    w.jsx)("div", {
                        className: "shrink-0",
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.AlO,
                            size: "xsmall"
                        })
                    })]
                }) : (0,
                w.jsx)("div", {
                    className: "text-red-500",
                    children: null != n ? n : "Invalid citation"
                })
            })
        }
        function e8() {
            var e = (0,
            k._)(["flex flex-col items-start"]);
            return e8 = function() {
                return e
            }
            ,
            e
        }
        function e7() {
            var e = (0,
            k._)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""]);
            return e7 = function() {
                return e
            }
            ,
            e
        }
        function e9() {
            var e = (0,
            k._)(["max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"]);
            return e9 = function() {
                return e
            }
            ,
            e
        }
        var te = M.memo(function(e) {
            var t = e.children
              , n = e.isComplete
              , r = e.expanderClosedLabel
              , a = e.expanderOpenLabel
              , i = e.resultsPreview
              , o = e.results
              , s = e.initialExpanded
              , l = e.onExpand
              , u = (0,
            j._)((0,
            M.useState)(void 0 !== s && s), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            M.useCallback)(function() {
                d(function(e) {
                    return !e
                }),
                null == l || l()
            }, [l]);
            return (0,
            w.jsxs)(tt, {
                children: [(0,
                w.jsxs)(tn, {
                    $complete: n,
                    children: [(0,
                    w.jsx)("div", {
                        children: t
                    }), !n && (0,
                    w.jsx)(eM.Z, {
                        className: o ? "ml-1" : "ml-12"
                    }), o && (0,
                    w.jsxs)("div", {
                        className: "ml-12 flex items-center gap-2",
                        role: "button",
                        onClick: f,
                        children: [a && r && (0,
                        w.jsx)("div", {
                            className: "text-xs text-gray-600",
                            children: c ? a : r
                        }), !c && i, (0,
                        w.jsx)(ef.ZP, {
                            icon: c ? X.rH8 : X.bTu
                        })]
                    })]
                }), c && o]
            })
        })
          , tt = T.Z.div(e8())
          , tn = T.Z.div(e7(), function(e) {
            return e.$complete && "bg-gray-100"
        })
          , tr = T.Z.div(e9())
          , ta = (0,
        K.vU)({
            startingBrowsing: {
                id: "browsingMessage.startingBrowsing",
                defaultMessage: "Browsing the web...",
                description: "Status message when browsing is starting"
            },
            finishedBrowsing: {
                id: "browsingMessage.finishedBrowsing",
                defaultMessage: "Finished browsing",
                description: "Status message when browsing is finished"
            },
            thinking: {
                id: "browsingMessage.thinking",
                defaultMessage: "Thinking...",
                description: "Status message when the next browsing command is being generated"
            },
            searchInProgress: {
                id: "browsingMessage.command.search.inProgress",
                defaultMessage: "Searching: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web is in progress"
            },
            searchInProgressBing: {
                id: "browsingMessage.command.search.inProgress.bing",
                defaultMessage: "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
                description: "Browsing command to search Bing is in progress"
            },
            searchFinished: {
                id: "browsingMessage.command.search.finished",
                defaultMessage: "Searched: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web finished"
            },
            searchFinishedBing: {
                id: "browsingMessage.command.search.finished.bing",
                defaultMessage: "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
                description: "Browsing command to search Bing finished"
            },
            searchError: {
                id: "browsingMessage.command.search.error",
                defaultMessage: "Search failed",
                description: "Browsing command to search the web failed"
            },
            clickInProgress: {
                id: "browsingMessage.command.click.inProgress",
                defaultMessage: "Clicking on a link...",
                description: "Browsing command to click on a link is in progress"
            },
            clickFinished: {
                id: "browsingMessage.command.click.finished",
                defaultMessage: "Clicked on a link",
                description: "Browsing command to click on a link finished"
            },
            clickFinishedWithLink: {
                id: "browsingMessage.command.click.finishedWithLink",
                defaultMessage: "Clicked on:",
                description: "Browsing command to click on a link finished. The link that was clicked will be displayed after the :"
            },
            clickError: {
                id: "browsingMessage.command.click.error",
                defaultMessage: "Click failed",
                description: "Browsing command to click on a link failed"
            },
            quote: {
                id: "browsingMessage.command.quote",
                defaultMessage: "Reading content",
                description: "Browsing command to read a specific quote from a page"
            },
            quoteError: {
                id: "browsingMessage.command.quote.error",
                defaultMessage: "Reading content failed",
                description: "Browsing command to read a specific quote from a page failed"
            },
            back: {
                id: "browsingMessage.command.back",
                defaultMessage: "Going back to last page",
                description: "Browsing command to go back to the last page"
            },
            backError: {
                id: "browsingMessage.command.back.error",
                defaultMessage: "Going back failed",
                description: "Browsing command to go back to the last page failed"
            },
            scroll: {
                id: "browsingMessage.command.scroll",
                defaultMessage: "Scrolling down",
                description: "Browsing command to scroll down on a page"
            },
            scrollError: {
                id: "browsingMessage.command.scroll.error",
                defaultMessage: "Scroll failed",
                description: "Browsing command to scroll down on a page failed"
            }
        })
          , ti = M.memo(function(e) {
            var t, n = e.messages, r = e.isComplete, a = (0,
            P.hz)(), i = n.map(function(e) {
                return e.message
            }), o = i.map(function(e, t) {
                if (e.author.role !== eR.uU.Tool || t > 0 && tp(e) && tp(i[t - 1]))
                    return null;
                var n = e.metadata;
                if (!n)
                    return null;
                var r = n.command
                  , a = n.status;
                return r ? {
                    type: r,
                    status: a,
                    didError: "system_error" === e.content.content_type,
                    message: e
                } : null
            }).filter(Boolean), s = o.map(function(e, t) {
                return (0,
                w.jsx)(to, {
                    command: e
                }, t)
            });
            r ? (s.push((0,
            w.jsx)(tg, {}, "finished")),
            t = (0,
            w.jsx)(tg, {
                compact: !0
            })) : 0 === s.length ? (s.push((0,
            w.jsx)(th, {}, "waiting")),
            t = (0,
            w.jsx)(th, {
                compact: !0
            })) : "finished" === o[o.length - 1].status && s.push((0,
            w.jsx)(tm, {
                icon: X.Wqx,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.thinking))
            }, "thinking")),
            t || (t = (0,
            w.jsx)(to, {
                command: o[o.length - 1],
                compact: !0
            }));
            var l = a.has(er.UG) && !r ? function(e) {
                var t, n = e.reverse().find(function(e) {
                    return e.author.role === eR.uU.Assistant
                });
                if (!n)
                    return null;
                for (var r = eL.Cv.getTextFromMessage(n), a = /^#\s*(.*)/gm, i = []; null !== (t = a.exec(r)); )
                    i.push(t[1]);
                return i.length > 0 ? i.join("\n") : null
            }(i) : null;
            return (0,
            w.jsxs)(te, {
                isComplete: r,
                results: (0,
                w.jsx)(tr, {
                    className: "text-xs",
                    children: s
                }),
                children: [null != l && (0,
                w.jsx)("div", {
                    className: "mb-2 whitespace-pre-wrap font-medium",
                    children: l
                }), t]
            })
        });
        function to(e) {
            var t = e.command
              , n = e.compact;
            if (t.didError)
                return (0,
                w.jsx)(tf, {
                    commandType: t.type
                });
            switch (t.type) {
            case "search":
                var r, a, i = null === (r = t.message.metadata) || void 0 === r ? void 0 : null === (a = r.args) || void 0 === a ? void 0 : a[0];
                if (!i)
                    return null;
                return (0,
                w.jsx)(ts, {
                    searchQuery: i,
                    isComplete: "finished" === t.status,
                    compact: n
                });
            case "click":
            case "open_url":
                var o, s, l = null === (o = t.message.metadata) || void 0 === o ? void 0 : null === (s = o._cite_metadata) || void 0 === s ? void 0 : s.metadata_list[0];
                return (0,
                w.jsx)(tl, {
                    pageInfo: l,
                    compact: n
                });
            case "quote":
            case "quote_full":
                return (0,
                w.jsx)(tu, {
                    compact: n
                });
            case "back":
                return (0,
                w.jsx)(tc, {
                    compact: n
                });
            case "scroll":
                return (0,
                w.jsx)(td, {
                    compact: n
                });
            default:
                return null
            }
        }
        function ts(e) {
            var t = e.searchQuery
              , n = e.isComplete
              , r = e.compact
              , a = (0,
            P.hz)().has(er.oQ)
              , i = a ? ta.searchInProgressBing : ta.searchInProgress
              , o = a ? ta.searchFinishedBing : ta.searchFinished
              , s = function(e) {
                var n = "https://www.bing.com/search?q=".concat(encodeURIComponent(t));
                return (0,
                w.jsx)("a", {
                    href: n,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    children: e
                })
            };
            return (0,
            w.jsx)(tm, {
                icon: X.jRj,
                compact: r,
                children: n ? (0,
                w.jsx)(et.Z, (0,
                ep._)((0,
                b._)({}, o), {
                    values: {
                        bold: function(e) {
                            return (0,
                            w.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        link: a ? s : void 0,
                        searchQuery: t
                    }
                })) : (0,
                w.jsx)(et.Z, (0,
                ep._)((0,
                b._)({}, i), {
                    values: {
                        bold: function(e) {
                            return (0,
                            w.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        link: a ? s : void 0,
                        searchQuery: t
                    }
                }))
            })
        }
        function tl(e) {
            var t = e.pageInfo
              , n = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X.PS6,
                compact: n,
                children: t ? !0 === n ? (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.clickFinished)) : (0,
                w.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    w.jsx)(et.Z, (0,
                    b._)({}, ta.clickFinishedWithLink)), (0,
                    w.jsx)("div", {
                        className: "rounded border border-black/10 bg-white px-2 py-1",
                        children: (0,
                        w.jsx)(e6, {
                            pageInfo: t
                        })
                    })]
                }) : (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.clickInProgress))
            })
        }
        function tu(e) {
            var t = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X.SnF,
                compact: t,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.quote))
            })
        }
        function tc(e) {
            var t = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X.cww,
                compact: t,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.back))
            })
        }
        function td(e) {
            var t = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X.nlg,
                compact: t,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.scroll))
            })
        }
        function tf(e) {
            var t, n = e.commandType, r = e.compact;
            switch (n) {
            case "search":
                t = ta.searchError;
                break;
            case "click":
            case "open_url":
                t = ta.clickError;
                break;
            case "quote":
            case "quote_full":
                t = ta.quoteError;
                break;
            case "back":
                t = ta.backError;
                break;
            case "scroll":
                t = ta.scrollError;
                break;
            default:
                return null
            }
            return (0,
            w.jsx)(tm, {
                icon: X.bcx,
                compact: r,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, t))
            })
        }
        function th(e) {
            var t = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X.jRj,
                compact: t,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.startingBrowsing))
            })
        }
        function tg(e) {
            var t = e.compact;
            return (0,
            w.jsx)(tm, {
                icon: X._rq,
                compact: t,
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, ta.finishedBrowsing))
            })
        }
        function tm(e) {
            var t = e.children
              , n = e.icon
              , r = e.compact;
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("flex items-center gap-2", !0 !== r && "min-h-[24px]"),
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: n,
                    className: "shrink-0"
                }), (0,
                w.jsx)("div", {
                    children: t
                })]
            })
        }
        function tp(e) {
            var t, n;
            return (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote" || (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote_full"
        }
        var tv = n(24396)
          , tx = M.memo(function(e) {
            var t, n = e.message, r = e.isCollapsed, a = null === (t = n.message.metadata) || void 0 === t ? void 0 : t.aggregate_result;
            if (!a)
                return console.error("Corrupt code execution result message"),
                null;
            var i = a.messages.filter(tk)
              , o = r && i.length > 0
              , s = r && null != a.final_expression_output
              , l = r && null != a.in_kernel_exception
              , u = !r && a.messages.filter(tj).length > 0;
            return (0,
            w.jsxs)(w.Fragment, {
                children: [o && (0,
                w.jsx)(tb, {
                    label: "STDOUT/STDERR",
                    output: i.map(function(e, t) {
                        return (0,
                        w.jsx)("span", {
                            className: "stderr" === e.stream_name ? "text-red-500" : "",
                            children: e.text
                        }, "".concat(t))
                    })
                }), s && (0,
                w.jsx)(tb, {
                    label: "RESULT",
                    output: a.final_expression_output
                }), l && (0,
                w.jsx)("div", {
                    className: "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                    children: (0,
                    w.jsx)("div", {
                        className: "border-l-4 border-red-500 p-2 text-xs",
                        children: (0,
                        w.jsx)("div", {
                            className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                            children: (0,
                            w.jsx)("pre", {
                                className: "shrink-0",
                                children: a.in_kernel_exception.traceback.join("")
                            })
                        })
                    })
                }), u && a.messages.filter(tj).map(function(e, t) {
                    var n = null != e.image_payload ? (0,
                    w.jsx)("img", {
                        src: "data:image/png;base64,".concat(e.image_payload)
                    }) : null != e.image_url ? (0,
                    w.jsx)(ty, {
                        downloadUrl: e.image_url
                    }) : null;
                    return n ? (0,
                    w.jsx)("div", {
                        children: n
                    }, t) : null
                })]
            })
        });
        function tb(e) {
            var t = e.label
              , n = e.output;
            return (0,
            w.jsxs)("div", {
                className: "rounded-md bg-black p-4 text-xs",
                children: [(0,
                w.jsx)("div", {
                    className: "mb-1 text-gray-400",
                    children: t
                }), (0,
                w.jsx)("div", {
                    className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
                    children: (0,
                    w.jsx)("pre", {
                        className: "shrink-0",
                        children: n
                    })
                })]
            })
        }
        function ty(e) {
            var t = e.downloadUrl
              , n = (0,
            j._)((0,
            M.useState)(""), 2)
              , r = n[0]
              , a = n[1];
            return (0,
            tv.a)(["fsDownloadUrl", t], (0,
            em._)(function() {
                return (0,
                ev.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, en.ZP.downloadFileService(t)];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            }), {
                onSuccess: function(e) {
                    e.url && a(e.url)
                }
            }),
            (0,
            w.jsxs)(w.Fragment, {
                children: [" ", r && (0,
                w.jsx)("img", {
                    src: r
                }), " "]
            })
        }
        function tj(e) {
            return "image" === e.message_type
        }
        function tk(e) {
            return "stream" === e.message_type
        }
        var tw = n(86546)
          , tC = n(45306)
          , t_ = n(22208)
          , tM = n(61110)
          , tT = n(55975)
          , tN = n(46050)
          , tI = n(29874)
          , tP = n(8449)
          , tS = n(15472);
        let tZ = {
            tokenize: function(e, t, n) {
                let r = this
                  , a = this.events[this.events.length - 1]
                  , i = a && a[1].type === tS.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = [];
                return function(t) {
                    return tT.q.backslash,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function t(r) {
                        return r === tT.q.backslash || r === tT.q.leftSquareBracket && o[0] === tT.q.backslash ? (e.consume(r),
                        o.push(r),
                        t) : (e.exit("mathFlowFenceSequence"),
                        o.length < 2 ? n(r) : (0,
                        tN.f)(e, s, tS.V.whitespace)(r))
                    }(t)
                }
                ;
                function s(t) {
                    return t === tT.q.eof || (0,
                    tI.Ch)(t) ? l(t) : (e.enter("mathFlowFenceMeta"),
                    e.enter(tS.V.chunkString, {
                        contentType: tP._.contentTypeString
                    }),
                    function t(r) {
                        return r === tT.q.eof || (0,
                        tI.Ch)(r) ? (e.exit(tS.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === tT.q.rightSquareBracket ? n(r) : (e.consume(r),
                        t)
                    }(t))
                }
                function l(n) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? t(n) : function t(n) {
                        return n === tT.q.eof ? u(n) : (0,
                        tI.Ch)(n) ? e.attempt(tA, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        tN.f)(e, t, tS.V.linePrefix, i + 1) : t), u)(n) : (e.enter("mathFlowValue"),
                        function n(r) {
                            return r === tT.q.eof || (0,
                            tI.Ch)(r) ? (e.exit("mathFlowValue"),
                            t(r)) : (e.consume(r),
                            n)
                        }(n))
                    }(n)
                }
                function u(n) {
                    return e.exit("mathFlow"),
                    t(n)
                }
                function c(e, t, n) {
                    let r = [];
                    return (0,
                    tN.f)(e, function(t) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function t(i) {
                            return i === tT.q.backslash && 0 === r.length || i === tT.q.rightSquareBracket && r[0] === tT.q.backslash ? (e.consume(i),
                            r.push(i),
                            t) : r < o ? n(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            tN.f)(e, a, tS.V.whitespace)(i))
                        }(t)
                    }, tS.V.linePrefix, tP._.tabSize);
                    function a(r) {
                        return r === tT.q.eof || (0,
                        tI.Ch)(r) ? (e.exit("mathFlowFence"),
                        t(r)) : n(r)
                    }
                }
            },
            concrete: !0
        }
          , tA = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return e.enter(tS.V.lineEnding),
                    e.consume(t),
                    e.exit(tS.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        }
          , tR = {
            tokenize: function(e, t, n) {
                let r = this
                  , a = r.events[r.events.length - 1]
                  , i = a && a[1].type === tS.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = 0;
                return function(t) {
                    return tT.q.dollarSign,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function t(r) {
                        return r === tT.q.dollarSign ? (e.consume(r),
                        o++,
                        t) : (e.exit("mathFlowFenceSequence"),
                        o < 2 ? n(r) : (0,
                        tN.f)(e, s, tS.V.whitespace)(r))
                    }(t)
                }
                ;
                function s(t) {
                    return t === tT.q.eof || (0,
                    tI.Ch)(t) ? l(t) : (e.enter("mathFlowFenceMeta"),
                    e.enter(tS.V.chunkString, {
                        contentType: tP._.contentTypeString
                    }),
                    function t(r) {
                        return r === tT.q.eof || (0,
                        tI.Ch)(r) ? (e.exit(tS.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === tT.q.dollarSign ? n(r) : (e.consume(r),
                        t)
                    }(t))
                }
                function l(n) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? t(n) : function t(n) {
                        return n === tT.q.eof ? u(n) : (0,
                        tI.Ch)(n) ? e.attempt(tD, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        tN.f)(e, t, tS.V.linePrefix, i + 1) : t), u)(n) : (e.enter("mathFlowValue"),
                        function n(r) {
                            return r === tT.q.eof || (0,
                            tI.Ch)(r) ? (e.exit("mathFlowValue"),
                            t(r)) : (e.consume(r),
                            n)
                        }(n))
                    }(n)
                }
                function u(n) {
                    return e.exit("mathFlow"),
                    t(n)
                }
                function c(e, t, n) {
                    let r = 0;
                    return (0,
                    tN.f)(e, function(t) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function t(i) {
                            return i === tT.q.dollarSign ? (e.consume(i),
                            r++,
                            t) : r < o ? n(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            tN.f)(e, a, tS.V.whitespace)(i))
                        }(t)
                    }, tS.V.linePrefix, tP._.tabSize);
                    function a(r) {
                        return r === tT.q.eof || (0,
                        tI.Ch)(r) ? (e.exit("mathFlowFence"),
                        t(r)) : n(r)
                    }
                }
            },
            concrete: !0
        }
          , tD = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return (0,
                    tI.Ch)(t),
                    e.enter(tS.V.lineEnding),
                    e.consume(t),
                    e.exit(tS.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        };
        function tL(e) {
            let t, n, r = e.length - 4, a = 3;
            if ((e[3][1].type === tS.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === tS.V.lineEnding || "space" === e[r][1].type)) {
                for (t = a; ++t < r; )
                    if ("mathTextData" === e[t][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (t = a - 1,
            r++; ++t <= r; )
                void 0 === n ? t !== r && e[t][1].type !== tS.V.lineEnding && (n = t) : (t === r || e[t][1].type === tS.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                r -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function tF(e) {
            return e !== tT.q.backslash || this.events[this.events.length - 1][1].type === tS.V.characterEscape
        }
        function tE(e) {
            let t, n, r = e.length - 4, a = 3;
            if ((e[3][1].type === tS.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === tS.V.lineEnding || "space" === e[r][1].type)) {
                for (t = a; ++t < r; )
                    if ("mathTextData" === e[t][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (t = a - 1,
            r++; ++t <= r; )
                void 0 === n ? t !== r && e[t][1].type !== tS.V.lineEnding && (n = t) : (t === r || e[t][1].type === tS.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                r -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function tB(e) {
            return e !== tT.q.dollarSign || this.events[this.events.length - 1][1].type === tS.V.characterEscape
        }
        function tO(e) {
            let t, n, r = e.length - 4, a = 3;
            if ((e[3][1].type === tS.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === tS.V.lineEnding || "space" === e[r][1].type)) {
                for (t = a; ++t < r; )
                    if ("mathTextData" === e[t][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (t = a - 1,
            r++; ++t <= r; )
                void 0 === n ? t !== r && e[t][1].type !== tS.V.lineEnding && (n = t) : (t === r || e[t][1].type === tS.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                r -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function tq(e) {
            return e !== tT.q.backslash || this.events[this.events.length - 1][1].type === tS.V.characterEscape
        }
        var tU = n(67726)
          , tz = n(9871)
          , tH = n(93362)
          , tV = n(45369)
          , tW = n(42426)
          , tG = n(65028)
          , tQ = n(88366);
        function t$() {
            var e = (0,
            k._)(["bg-black rounded-md"]);
            return t$ = function() {
                return e
            }
            ,
            e
        }
        function tJ() {
            var e = (0,
            k._)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ", ""]);
            return tJ = function() {
                return e
            }
            ,
            e
        }
        function tY() {
            var e = (0,
            k._)(["p-4 overflow-y-auto"]);
            return tY = function() {
                return e
            }
            ,
            e
        }
        function tX() {
            var e = (0,
            k._)(["", ""]);
            return tX = function() {
                return e
            }
            ,
            e
        }
        var tK = T.Z.div(t$())
          , t0 = T.Z.div(tJ(), function(e) {
            return e.$isMessageRedesign && "dark:bg-gray-900"
        })
          , t1 = T.Z.div(tY())
          , t2 = T.Z.code(tX(), function(e) {
            return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
        });
        function t3(e) {
            var t = e.children
              , n = e.className
              , r = e.language
              , a = e.content
              , i = (0,
            M.useCallback)(function() {
                navigator.clipboard.writeText(a)
            }, [a]);
            return (0,
            w.jsx)(t5, {
                title: r,
                headerDecoration: (0,
                w.jsx)(eK, {
                    buttonText: "Copy code",
                    onCopy: i
                }),
                className: "mb-4",
                codeClassName: n,
                children: t
            })
        }
        function t5(e) {
            var t = e.children
              , n = e.title
              , r = e.headerDecoration
              , a = e.shouldWrapCode
              , i = e.className
              , o = e.codeClassName
              , s = (0,
            P.hz)().has(er.FZ);
            return (0,
            w.jsxs)(tK, {
                className: i,
                children: [(0,
                w.jsxs)(t0, {
                    $isMessageRedesign: s,
                    children: [n && (0,
                    w.jsx)("span", {
                        children: n
                    }), r]
                }), (0,
                w.jsx)(t1, {
                    children: (0,
                    w.jsx)(t2, {
                        $shouldWrap: void 0 !== a && a,
                        className: o,
                        children: t
                    })
                })]
            })
        }
        var t4 = function(e) {
            return e.startsWith(t_.SANDBOX_LINK_PREFIX) ? e : (0,
            tz.A)(e)
        }
          , t6 = [tG.Z, [function() {
            let e = this.data();
            function t(t, n) {
                let r = e[t] ? e[t] : e[t] = [];
                r.push(n)
            }
            t("micromarkExtensions", {
                flow: {
                    [tT.q.dollarSign]: tR,
                    [tT.q.backslash]: tZ
                },
                text: {
                    [tT.q.dollarSign]: {
                        tokenize: function(e, t, n) {
                            let r, a, i = 0;
                            return function(t) {
                                return e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function t(r) {
                                    return r === tT.q.dollarSign ? (e.consume(r),
                                    i++,
                                    t) : i < 2 ? n(r) : (e.exit("mathTextSequence"),
                                    o(r))
                                }(t)
                            }
                            ;
                            function o(l) {
                                return l === tT.q.eof ? n(l) : l === tT.q.dollarSign ? (a = e.enter("mathTextSequence"),
                                r = 0,
                                function n(o) {
                                    return o === tT.q.dollarSign ? (e.consume(o),
                                    r++,
                                    n) : r === i ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o)) : (a.type = "mathTextData",
                                    s(o))
                                }(l)) : l === tT.q.space ? (e.enter("space"),
                                e.consume(l),
                                e.exit("space"),
                                o) : (0,
                                tI.Ch)(l) ? (e.enter(tS.V.lineEnding),
                                e.consume(l),
                                e.exit(tS.V.lineEnding),
                                o) : (e.enter("mathTextData"),
                                s(l))
                            }
                            function s(t) {
                                return t === tT.q.eof || t === tT.q.space || t === tT.q.dollarSign || (0,
                                tI.Ch)(t) ? (e.exit("mathTextData"),
                                o(t)) : (e.consume(t),
                                s)
                            }
                        },
                        resolve: tE,
                        previous: tB
                    },
                    [tT.q.backslash]: [{
                        tokenize: function(e, t, n) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(t) {
                                return tT.q.backslash,
                                tF.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function t(r) {
                                    return (a.join(","),
                                    r === tT.q.backslash && 0 === a.length || r === tT.q.leftParenthesis && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    t) : a.length < 2 ? n(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(t)
                            }
                            ;
                            function s(o) {
                                return o === tT.q.eof ? n(o) : o === tT.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function n(o) {
                                    return (a.join(","),
                                    o === tT.q.backslash && 0 === i.length || o === tT.q.rightParenthesis && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    n) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === tT.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                tI.Ch)(o) ? (e.enter(tS.V.lineEnding),
                                e.consume(o),
                                e.exit(tS.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(t) {
                                return t === tT.q.eof || t === tT.q.space || t === tT.q.backslash || (0,
                                tI.Ch)(t) ? (e.exit("mathTextData"),
                                s(t)) : (e.consume(t),
                                l)
                            }
                        },
                        resolve: tL,
                        previous: tF
                    }, {
                        tokenize: function(e, t, n) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(t) {
                                return tT.q.backslash,
                                tq.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function t(r) {
                                    return (a.join(","),
                                    r === tT.q.backslash && 0 === a.length || r === tT.q.leftSquareBracket && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    t) : a.length < 2 ? n(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(t)
                            }
                            ;
                            function s(o) {
                                return o === tT.q.eof ? n(o) : o === tT.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function n(o) {
                                    return (a.join(","),
                                    o === tT.q.backslash && 0 === i.length || o === tT.q.rightSquareBracket && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    n) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === tT.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                tI.Ch)(o) ? (e.enter(tS.V.lineEnding),
                                e.consume(o),
                                e.exit(tS.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(t) {
                                return t === tT.q.eof || t === tT.q.space || t === tT.q.backslash || (0,
                                tI.Ch)(t) ? (e.exit("mathTextData"),
                                s(t)) : (e.consume(t),
                                l)
                            }
                        },
                        resolve: tO,
                        previous: tq
                    }]
                }
            }),
            t("fromMarkdownExtensions", (0,
            tM.N)()),
            t("toMarkdownExtensions", (0,
            tM.O)())
        }
        , {
            singleDollarTextMath: !1
        }]]
          , t8 = [[tH.Z, {
            languages: {
                mathematica: tU.Z
            },
            detect: !0,
            subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go", "graphql", "java", "javascript", "json", "kotlin", "latex", "less", "lua", "makefile", "makefile", "markdown", "matlab", "mathematica", "nginx", "objectivec", "perl", "pgsql", "php-template", "php", "plaintext", "python-repl", "python", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"],
            ignoreMissing: !0,
            aliases: {
                mathematica: "wolfram"
            }
        }], tV.Z, [tW.Z, {
            newlines: !0
        }]]
          , t7 = {
            code: function(e) {
                var t = e.inline
                  , n = e.node
                  , r = e.className
                  , a = e.children
                  , i = (0,
                y._)(e, ["inline", "node", "className", "children"]);
                if (t) {
                    var o = function(e) {
                        if (!e.startsWith(e5))
                            return null;
                        try {
                            return JSON.parse(e.slice(e5.length))
                        } catch (e) {
                            return {
                                number: -1
                            }
                        }
                    }((0,
                    tQ.B)(n));
                    return o ? (0,
                    w.jsx)(e4, {
                        displayInfo: o
                    }) : (0,
                    w.jsx)("code", (0,
                    ep._)((0,
                    b._)({
                        className: r
                    }, i), {
                        children: a
                    }))
                }
                var s, l = null === (s = null == r ? void 0 : r.split(" ").filter(function(e) {
                    return e.startsWith("language-")
                })) || void 0 === s ? void 0 : s[0], u = l ? l.split("-")[1] : "";
                return (0,
                w.jsx)(t3, {
                    language: u,
                    className: r,
                    content: (0,
                    tQ.B)(n),
                    children: a
                })
            }
        };
        function t9(e) {
            var t = e.size
              , n = e.children
              , r = e.className
              , a = e.onSandboxLinkClick
              , i = (0,
            tw.F)().theme
              , o = (0,
            P.hz)().has("tools2")
              , s = (0,
            M.useMemo)(function() {
                return (0,
                ep._)((0,
                b._)({}, t7), {
                    a: function(e) {
                        var t = e.node
                          , n = (0,
                        y._)(e, ["node"])
                          , r = t.properties.href;
                        return a && o && r.startsWith(t_.SANDBOX_LINK_PREFIX) ? (0,
                        w.jsx)("a", (0,
                        ep._)((0,
                        b._)({}, n), {
                            onClick: a
                        })) : (0,
                        w.jsx)("a", (0,
                        b._)({}, n))
                    },
                    img: function(e) {
                        var t = e.node
                          , n = (0,
                        y._)(e, ["node"])
                          , r = t.properties.src;
                        return r.startsWith("sandbox:") || r.startsWith("attachment:") ? null : (0,
                        w.jsx)("img", (0,
                        b._)({}, n))
                    }
                })
            }, [a, o]);
            return (0,
            w.jsx)(tC.D, {
                rehypePlugins: t8,
                remarkPlugins: t6,
                linkTarget: "_new",
                className: (0,
                q.Z)(r, "markdown prose w-full break-words dark:prose-invert", "dark" === i ? "dark" : "light", "small" === (void 0 === t ? "medium" : t) && "prose-xs"),
                transformLinkUri: t4,
                components: s,
                children: n
            })
        }
        function ne(e) {
            return eL.Cv.getIsMessageFinished(e.message) && !eL.Cv.getIsStopFromMessage(e.message)
        }
        var nt = {}
          , nn = {};
        function nr(e) {
            var t, n = e.message, r = e.outputMessage, a = (0,
            tw.F)().theme, i = (0,
            N.WS)(), o = null === (t = null == r ? void 0 : r.message.metadata) || void 0 === t ? void 0 : t.aggregate_result, s = (null == o ? void 0 : o.status) !== void 0 && (null == o ? void 0 : o.status) !== "running" || ne(n);
            (0,
            M.useEffect)(function() {
                nt[n.message.id] || (i(I.s6.renderTool2Message, {
                    id: n.message.id,
                    finishedExecuting: s
                }),
                nt[n.message.id] = !0)
            }, [i, n, s]);
            var l = (0,
            M.useCallback)(function() {
                nn[n.message.id] || (i(I.s6.expandTool2Message, {
                    id: n.message.id,
                    finishedExecuting: s
                }),
                nn[n.message.id] = !0)
            }, [i, n, s])
              , u = (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)("div", {
                    className: "mt-3 self-stretch",
                    children: (0,
                    w.jsx)(t9, {
                        className: (0,
                        q.Z)("markdown prose w-full break-words dark:prose-invert", "dark" === a ? "dark" : "light"),
                        children: function(e) {
                            var t = function(e, t) {
                                return "```".concat(t, "\n").concat(e, "\n```")
                            };
                            if ("code" === e.message.content.content_type)
                                return t(e.message.content.text, "python");
                            if ("python" === e.message.recipient) {
                                if ("text" !== e.message.content.content_type)
                                    throw Error("Unexpected content type for code message");
                                var n = e.message.content.parts;
                                if (1 !== n.length || "string" != typeof n[0])
                                    throw Error("Unexpected parts for code message");
                                return t(n[0], "python")
                            }
                            throw Error("Unexpected code message format")
                        }(n)
                    })
                }), r && (0,
                w.jsx)("div", {
                    className: "self-stretch",
                    children: (0,
                    w.jsx)(tx, {
                        message: r,
                        isCollapsed: !0
                    })
                })]
            });
            return (0,
            w.jsx)(te, {
                expanderClosedLabel: "Show work",
                expanderOpenLabel: "Hide work",
                isComplete: s,
                results: u,
                onExpand: l,
                children: s ? "Finished working" : "Working..."
            })
        }
        var na = n(75179)
          , ni = n(2827);
        function no() {
            var e = (0,
            k._)(["text-center mt-2 flex justify-center"]);
            return no = function() {
                return e
            }
            ,
            e
        }
        var ns = T.Z.div(no());
        function nl(e) {
            var t = e.initialText
              , n = e.role
              , r = e.clientThreadId
              , a = e.currentLeaf
              , i = e.onUpdateNode
              , o = e.onChangeItemInView
              , s = e.onExitEdit
              , l = e.onDeleteNode
              , u = e.onRequestCompletion
              , c = e.onCreateEditNode
              , d = e.disabled
              , f = (0,
            N.WS)()
              , h = (0,
            M.useId)()
              , g = "".concat(a, "-").concat(h)
              , m = (0,
            j._)((0,
            M.useState)(t || ""), 2)
              , p = m[0]
              , v = m[1]
              , x = (0,
            M.useRef)(null);
            (0,
            M.useEffect)(function() {
                c(a, g)
            }, []);
            var b = (0,
            M.useCallback)(function(e) {
                v(e.currentTarget.value)
            }, [])
              , y = (0,
            M.useCallback)(function() {
                i(g, p),
                o(g),
                u(eR.Os.Next, g, {
                    eventSource: "mouse"
                }, !0),
                s()
            }, [i, g, p, o, u, s])
              , k = (0,
            M.useCallback)(function() {
                l(g),
                o(a),
                s(),
                f(n === eR.uU.User ? I.s6.cancelEditPrompt : I.s6.cancelEditCompletion, {
                    threadId: S.tQ.getServerThreadId(r)
                })
            }, [g, a, f, o, l, s, n, r]);
            return (0,
            M.useEffect)(function() {
                var e = x.current
                  , t = function(e) {
                    "Enter" === e.key && e.metaKey ? y() : "Escape" === e.key && k()
                };
                return e && e.addEventListener("keydown", t),
                function() {
                    e && e.removeEventListener("keydown", t)
                }
            }, [k, y]),
            (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(ni.ZP, {
                    ref: x,
                    value: p,
                    onChange: b,
                    className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                }), (0,
                w.jsxs)(ns, {
                    children: [(0,
                    w.jsx)(ed.z, {
                        as: "button",
                        onClick: y,
                        className: "mr-2",
                        disabled: d,
                        children: "Save & Submit"
                    }), (0,
                    w.jsx)(ed.z, {
                        as: "button",
                        color: "neutral",
                        onClick: k,
                        children: "Cancel"
                    })]
                })]
            })
        }
        var nu = n(10642)
          , nc = n(47635);
        function nd() {
            var e = (0,
            k._)(["text-xs text-black\n", ""]);
            return nd = function() {
                return e
            }
            ,
            e
        }
        function nf() {
            var e = (0,
            k._)(["relative w-full overflow-hidden pt-[67%]"]);
            return nf = function() {
                return e
            }
            ,
            e
        }
        function nh(e) {
            var t, n = e.title, r = e.url, a = e.imageUrl, i = e.logoUrl, o = e.className, s = e.mini, l = !!a, u = (0,
            N.WS)(), c = (0,
            M.useCallback)(function() {
                u(I.s6.carouselCardClick, {
                    content: r
                })
            }, [u, r]);
            try {
                t = nc.get(new URL(r).hostname)
            } catch (e) {
                return console.error("Invalid card url: ", e),
                null
            }
            return (0,
            w.jsxs)(r ? "a" : "div", {
                className: (0,
                q.Z)("flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]", o),
                href: r,
                target: r ? "_blank" : "",
                onClick: c,
                children: [l && (0,
                w.jsx)(nm, {
                    children: (0,
                    w.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0,
                        w.jsx)("img", {
                            src: a,
                            alt: "image of ".concat(n),
                            className: "h-full w-full border-b border-black/10 object-cover"
                        })
                    })
                }), (0,
                w.jsxs)("div", {
                    className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
                    children: [(0,
                    w.jsx)(ng, {
                        $clamp: void 0 !== s && s || l,
                        children: n
                    }), (0,
                    w.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [i ? (0,
                        w.jsx)(eB, {
                            url: i,
                            name: t,
                            size: 13
                        }) : (0,
                        w.jsx)(e1, {
                            url: r,
                            size: 13
                        }), (0,
                        w.jsx)("div", {
                            className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
                            children: t
                        })]
                    })]
                })]
            })
        }
        var ng = T.Z.div(nd(), function(e) {
            return e.$clamp && "line-clamp-2"
        })
          , nm = T.Z.div(nf())
          , np = n(96237)
          , nv = n(21260)
          , nx = n(52422)
          , nb = n(95182)
          , ny = n.n(nb);
        function nj(e) {
            var t = e.disabled
              , n = e.onClick
              , r = e.left
              , a = e.children;
            return (0,
            w.jsx)("button", {
                disabled: t,
                onClick: n,
                "aria-disabled": t,
                className: (0,
                q.Z)("flex h-6 w-[30px] items-center justify-center rounded-full", "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white", "transition-opacity disabled:opacity-20", "cursor-pointer disabled:cursor-auto", "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2", void 0 !== r && r ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full", t && "lg:hidden"),
                children: a
            })
        }
        var nk = function(e) {
            var t = e.x
              , n = e.children
              , r = e.className;
            return (0,
            w.jsx)($.E.div, {
                className: (0,
                q.Z)("mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]", r),
                style: {
                    x: t
                },
                children: n
            })
        }
          , nw = {
            type: "spring",
            bounce: 0
        }
          , nC = (0,
        M.forwardRef)(function(e, t) {
            return (0,
            w.jsx)("div", {
                ref: t,
                className: (0,
                q.Z)("relative flex h-full w-full overflow-hidden", e.className),
                children: e.children
            })
        });
        nC.displayName = "CarouselContainer";
        var n_ = (d = {},
        (0,
        np._)(d, ea._G.Mobile, 1),
        (0,
        np._)(d, ea._G.Small, 2),
        (0,
        np._)(d, ea._G.Medium, 2),
        (0,
        np._)(d, ea._G.Large, 3),
        (0,
        np._)(d, ea._G.XLarge, 3),
        d);
        function nM(e) {
            var t = e.children
              , n = e.loop
              , r = void 0 === n || n
              , a = e.className
              , i = (0,
            nv.c)(0)
              , o = (0,
            M.useRef)(null)
              , s = (0,
            j._)((0,
            M.useState)(0), 2)
              , l = s[0]
              , u = s[1]
              , c = n_[(0,
            ea.dQ)()] || 1
              , d = M.Children.count(t) > c
              , f = M.Children.toArray(t)
              , h = (0,
            M.useCallback)(function() {
                var e, t = null === (e = o.current) || void 0 === e ? void 0 : e.clientWidth;
                return t ? -Math.floor(l / c) * (t + 12) : 0
            }, [c, l])
              , g = (0,
            M.useCallback)(function(e) {
                var t = c * e;
                r ? u(function(e) {
                    return (e + t) % f.length - 1
                }) : u(function(e) {
                    return ny()(e + t, 0, f.length - 1)
                })
            }, [f.length, r, c])
              , m = (0,
            M.useCallback)(function() {
                g(1)
            }, [g])
              , p = (0,
            M.useCallback)(function() {
                g(-1)
            }, [g])
              , v = (0,
            j._)((0,
            M.useMemo)(function() {
                if (r)
                    return [!0, !0];
                var e = l < f.length - c;
                return [l > 0, e]
            }, [f.length, l, r, c]), 2)
              , x = v[0]
              , b = v[1];
            return (0,
            M.useEffect)(function() {
                return (0,
                nx.j)(i, h(), nw).stop
            }, [h, l, i]),
            (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("relative h-full w-full", a, d && "mb-12 lg:mb-0"),
                children: [(0,
                w.jsx)(nC, {
                    ref: o,
                    children: f.map(function(e, t) {
                        return (0,
                        w.jsx)(nk, {
                            x: i,
                            children: e
                        }, t)
                    })
                }), d && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)(nj, {
                        onClick: p,
                        left: !0,
                        disabled: !x,
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.YFh
                        })
                    }), (0,
                    w.jsx)(nj, {
                        onClick: m,
                        disabled: !b,
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.Tfp
                        })
                    })]
                })]
            })
        }
        function nT() {
            var e = (0,
            ey.kP)().session
              , t = (0,
            eI.Fl)().isPluginsAvailable
              , n = (0,
            tv.a)(["installedAip"], function() {
                return en.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    isInstalled: !0,
                    accessToken: null == e ? void 0 : e.accessToken
                })
            }, {
                enabled: t && !!(null == e ? void 0 : e.accessToken),
                onError: function(e) {
                    console.error(e)
                }
            })
              , r = n.data
              , a = n.isLoading;
            return (0,
            M.useMemo)(function() {
                return {
                    installedPlugins: r ? r.items : [],
                    isLoading: a
                }
            }, [r, a])
        }
        function nN() {
            var e = (0,
            M.useContext)(O.AX)
              , t = nT().installedPlugins;
            return (0,
            M.useMemo)(function() {
                return t.filter(function(t) {
                    return e.has(t.id)
                })
            }, [e, t])
        }
        var nI = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"])
          , nP = {
            "og:site_name": "metadataTitle",
            "og:title": "title",
            "og:description": "description",
            "og:image": "imageUrl",
            "og:url": "url"
        }
          , nS = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
          , nZ = M.memo(function(e) {
            var t, n, r = e.urls, a = nN(), i = (t = (0,
            ey.kP)().session,
            n = (0,
            nu.h)({
                queries: r.map(function(e) {
                    return {
                        queryKey: ["opengraph", e],
                        queryFn: (0,
                        em._)(function() {
                            return (0,
                            ev.Jh)(this, function(t) {
                                switch (t.label) {
                                case 0:
                                    return [4, en.ZP.getPageMetadata({
                                        url: e
                                    })];
                                case 1:
                                    return [2, t.sent()]
                                }
                            })
                        }),
                        enabled: !!(e && (null == t ? void 0 : t.accessToken)),
                        retry: !1
                    }
                })
            }),
            (0,
            M.useMemo)(function() {
                return n.map(function(e, t) {
                    var n = e.data
                      , a = e.isError
                      , i = e.isLoading
                      , o = r[t];
                    if (a || i)
                        return null;
                    var s = n.tags.reduce(function(e, t) {
                        return nI.has(t.type) && (e[nP[t.type]] = t.value),
                        e
                    }, {});
                    try {
                        var l, u = o.split(/[#?]/)[0], c = null === (l = s.url) || void 0 === l ? void 0 : l.endsWith("/login"), d = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (c || d))
                            return null
                    } catch (e) {
                        return null
                    }
                    return s.url = o,
                    s
                }).filter(Boolean)
            }, [n, r])), o = (0,
            M.useMemo)(function() {
                return !i.some(function(e) {
                    return !!(null == e ? void 0 : e.imageUrl)
                })
            }, [i]), s = (0,
            M.useMemo)(function() {
                return a.reduce(function(e, t) {
                    return e[nc.get(t.domain)] = t.manifest.logo_url,
                    e
                }, {})
            }, [a]), l = (0,
            M.useMemo)(function() {
                return i.map(function(e) {
                    var t, n;
                    if (!e)
                        return null;
                    try {
                        t = nc.get(new URL(e.url).hostname)
                    } catch (e) {
                        return console.error("Invalid card url: ", e),
                        null
                    }
                    return t in s && (n = s[t]),
                    (0,
                    w.jsx)(nh, {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: o
                    }, e.url)
                })
            }, [i, o, s]);
            return 0 === i.length ? null : (0,
            w.jsx)(nM, {
                loop: !1,
                children: l
            })
        })
          , nA = n(5046);
        function nR() {
            var e = (0,
            k._)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n", "\n"]);
            return nR = function() {
                return e
            }
            ,
            e
        }
        var nD = M.memo(function(e) {
            var t, n = e.message, r = e.isEditing, a = e.format, i = e.isCompletionInProgress, o = e.className, s = e.onSandboxLinkClick, l = e.isCompletion, u = e.isResponseToPluginMessage, c = (0,
            y._)(e, ["message", "isEditing", "format", "isCompletionInProgress", "className", "onSandboxLinkClick", "isCompletion", "isResponseToPluginMessage"]);
            return r ? (0,
            w.jsx)(nl, (0,
            b._)({
                currentLeaf: n.nodeId,
                initialText: eL.Cv.getTextFromMessage(n.message),
                role: n.message.author.role
            }, c)) : (0,
            w.jsx)(nL, {
                text: eL.Cv.getTextFromMessage(n.message),
                errCode: n.errCode,
                err: n.err,
                flag: n.errType,
                isCompletionInProgress: i,
                format: a,
                className: o,
                citations: null === (t = n.message.metadata) || void 0 === t ? void 0 : t.citations,
                isCompletion: l,
                onSandboxLinkClick: s,
                id: n.nodeId,
                onRequestMoreCompletions: c.onRequestMoreCompletions,
                clientThreadId: c.clientThreadId,
                showExtractedLinkCards: u
            })
        });
        function nL(e) {
            var t, n, r, a = e.citations, i = e.className, o = e.err, s = e.errCode, l = e.flag, u = e.format, c = e.isCompletionInProgress, d = e.size, f = e.text, h = e.onSandboxLinkClick, g = e.isCompletion, m = e.id, p = e.onRequestMoreCompletions, v = e.clientThreadId, x = e.showExtractedLinkCards, b = s === na.Dd, y = (0,
            P.hz)(), j = (n = (t = {
                text: f,
                isCompletionInProgress: c
            }).text,
            r = t.isCompletionInProgress,
            (0,
            M.useMemo)(function() {
                if (r)
                    return [];
                var e = n.match(nS);
                return Array.from(new Set(e))
            }, [r, n])), k = (0,
            M.useMemo)(function() {
                switch (s) {
                case na.Dd:
                    return (0,
                    w.jsx)(nO, {
                        $flag: l,
                        children: (0,
                        w.jsx)(nB, {})
                    });
                case nA.uU:
                    if (y.has("model_preview"))
                        return (0,
                        w.jsx)(nE, {
                            id: m,
                            onRequestMoreCompletions: p,
                            flag: l,
                            clientThreadId: v
                        });
                    return (0,
                    w.jsx)(nO, {
                        $flag: l,
                        children: o
                    });
                case eC.wp:
                    return (0,
                    w.jsx)(nO, {
                        $flag: l,
                        children: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT."
                    });
                default:
                    return (0,
                    w.jsx)(nO, {
                        $flag: l,
                        children: o
                    })
                }
            }, [o, s, y, l, m, p, v]), C = (0,
            P.hz)().has(er.FZ);
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)(i, "flex flex-col items-start gap-4 whitespace-pre-wrap break-words", "danger" === l && "flex flex-row gap-2 text-red-500", "warning" === l && "text-orange-500", C && "text-base"),
                children: [o && !f || b || !u ? "danger" === l && b ? null : f : (0,
                w.jsx)(t9, {
                    size: void 0 === d ? "medium" : d,
                    className: (0,
                    q.Z)("danger" !== l && c && "result-streaming", "danger" === l && "text-red-500", "warning" === l && "text-orange-500"),
                    onSandboxLinkClick: h,
                    children: "" === f ? "&#8203;" : function(e, t) {
                        if (!t)
                            return e;
                        for (var n = [], r = 1, a = {}, i = 0; i < t.length; i++) {
                            var o = t[i]
                              , s = o.metadata
                              , l = o.invalid_reason;
                            if (s) {
                                var u = s.url;
                                null == a[u] && (a[u] = r,
                                r++),
                                n.push(a[u])
                            } else
                                null != l && (n.push(r),
                                r++)
                        }
                        for (var c = t.length - 1; c >= 0; c--) {
                            var d = t[c]
                              , f = d.start_ix
                              , h = d.end_ix
                              , g = d.metadata
                              , m = d.invalid_reason
                              , p = {
                                number: n[c]
                            };
                            g ? p.metadata = g : null != m && (p.invalid_reason = m);
                            var v = !1;
                            if (c > 0) {
                                var x, b, y = t[c - 1];
                                (null === (x = y.metadata) || void 0 === x ? void 0 : x.url) === (null === (b = d.metadata) || void 0 === b ? void 0 : b.url) && 0 === e.slice(y.end_ix, d.start_ix).trim().length && (e = e.slice(0, y.end_ix) + e.slice(d.end_ix),
                                v = !0)
                            }
                            v || (e = e.slice(0, f) + "".concat(e3, "`").concat(e5).concat(JSON.stringify(p), "`").concat(e3) + e.slice(h))
                        }
                        return e
                    }(f, a)
                }), g && x && j.length > 0 && (0,
                w.jsx)(nZ, {
                    urls: j
                }), l && k]
            })
        }
        function nF(e) {
            var t = e && new Date(e)
              , n = t && new Date(t);
            return n ? "after ".concat(n.getHours() % 12 || 12, ":").concat(10 > n.getMinutes() ? "0" : "").concat(n.getMinutes(), " ").concat(n.getHours() >= 12 ? "PM" : "AM") : "later"
        }
        function nE(e) {
            var t = e.id
              , n = e.onRequestMoreCompletions
              , r = e.flag
              , a = e.clientThreadId
              , i = (0,
            _.useRouter)()
              , o = (0,
            nA.Y8)(function(e) {
                return e.isoDate
            })
              , s = nF(o)
              , l = (0,
            M.useCallback)(function() {
                n(t, {
                    eventSource: "mouse"
                }, !0, "none", !1)
            }, [t, n])
              , u = (0,
            M.useCallback)(function() {
                var e = void 0 !== a ? S.tQ.getServerThreadId(a) : void 0;
                void 0 === e ? i.replace("/", void 0, {
                    shallow: !0
                }) : (0,
                nA.m0)(e),
                n(t, {
                    eventSource: "mouse"
                }, !0, "none", !0)
            }, [t, n, i, a])
              , c = o ? (0,
            w.jsxs)("span", {
                children: ["You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(s, "."), " ", (0,
                w.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more"
                })]
            }) : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
            return (0,
            w.jsx)(nO, {
                $flag: !!o && r,
                children: (0,
                w.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [c, !o && (0,
                    w.jsx)(ed.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: l,
                        children: "Try again"
                    }), o && (0,
                    w.jsx)(ed.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: u,
                        children: "Use default model"
                    })]
                })
            })
        }
        function nB() {
            return (0,
            w.jsxs)(w.Fragment, {
                children: ["This content may violate our", " ", (0,
                w.jsx)("a", {
                    target: "_blank",
                    href: "https://platform.openai.com/docs/usage-policies/content-policy",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "content policy"
                }), ". If you believe this to be in error, please", " ", (0,
                w.jsx)("a", {
                    target: "_blank",
                    href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "submit your feedback"
                }), " ", "— your input will aid our research in this area."]
            })
        }
        var nO = T.Z.div(nR(), function(e) {
            return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
        }, function(e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10"
        }, function(e) {
            return !e.$flag && "border-green-500 bg-green-500/10"
        });
        function nq(e) {
            var t = e.messages
              , n = e.isCompletionInProgress
              , r = e.isCompletion
              , a = e.onRequestMoreCompletions
              , i = t.reduce(function(e, t) {
                return t.err ? e : e + eL.Cv.getTextFromMessage(t.message)
            }, "");
            return (0,
            w.jsx)(nL, {
                text: i,
                format: !0,
                isCompletion: r,
                isCompletionInProgress: n,
                id: "",
                onRequestMoreCompletions: a
            })
        }
        var nU = n(8844)
          , nz = n(22121)
          , nH = n(97688);
        function nV() {
            return (nV = (0,
            em._)(function(e) {
                var t;
                return (0,
                ev.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]),
                        [4, function(e) {
                            return nW.apply(this, arguments)
                        }(e)];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        return console.error("Error making localhost plugin HTTP call", t = n.sent()),
                        [2, [{
                            id: (0,
                            nU.Z)(),
                            author: {
                                role: eR.uU.Tool,
                                name: "plugin_service"
                            },
                            content: {
                                content_type: "text",
                                parts: ["Error making localhost plugin HTTP call: ".concat(t)]
                            },
                            metadata: {
                                parent_message_id: e.parent_message_id,
                                is_complete: !0
                            },
                            recipient: "all"
                        }]];
                    case 3:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        function nW() {
            return (nW = (0,
            em._)(function(e) {
                var t, n, r, a;
                function i(e) {
                    return Object.keys(e).map(function(e) {
                        return e.toLowerCase()
                    })
                }
                return (0,
                ev.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        var s;
                        if (t = {
                            "content-type": "application/json"
                        },
                        s = [i(e.headers), i(t)].flat(),
                        new Set(s).size !== s.length)
                            throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");
                        return n = e.url,
                        e.qs_params.length > 0 && (n = n + "?" + new URLSearchParams(e.qs_params)),
                        r = void 0,
                        null !== e.body && (r = JSON.stringify(e.body)),
                        [4, fetch(n, {
                            method: e.method,
                            headers: (0,
                            b._)({}, t, e.headers),
                            body: r
                        })];
                    case 1:
                        return [4, o.sent().text()];
                    case 2:
                        if (a = o.sent(),
                        "chat" === e.api_function_type)
                            return [2, [JSON.parse(a)]];
                        if ("kwargs" === e.api_function_type)
                            return [2, [{
                                id: (0,
                                nU.Z)(),
                                author: {
                                    role: eR.uU.Tool,
                                    name: "".concat(e.namespace, ".").concat(e.function_name)
                                },
                                content: {
                                    content_type: "text",
                                    parts: [a]
                                },
                                metadata: {
                                    parent_message_id: e.parent_message_id,
                                    is_complete: !0
                                },
                                recipient: "all"
                            }]];
                        throw Error("Not implemented")
                    }
                })
            })).apply(this, arguments)
        }
        function nG(e) {
            return !!nQ(e.domain)
        }
        function nQ(e) {
            return /^localhost:\d+$/.test(e) ? "http://".concat(e) : /^https?:\/\/localhost:\d+$/.test(e) ? e : null
        }
        function n$() {
            return (n$ = (0,
            em._)(function(e) {
                var t, n, r, a, i, o;
                return (0,
                ev.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return s.trys.push([0, 3, , 4]),
                        [4, fetch(e + "/.well-known/ai-plugin.json")];
                    case 1:
                        return [4, s.sent().json()];
                    case 2:
                        return n = s.sent(),
                        [3, 4];
                    case 3:
                        return s.sent(),
                        nH.m.danger("Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."),
                        [2];
                    case 4:
                        if (null == (r = null == n ? void 0 : null === (t = n.api) || void 0 === t ? void 0 : t.url))
                            return nH.m.danger("Localhost manifest is missing OpenAPI spec URL."),
                            [2];
                        if ("pathname" === (a = function(e) {
                            try {
                                return new URL(e),
                                "full url"
                            } catch (t) {
                                if (e.startsWith("/"))
                                    return "pathname";
                                return "neither"
                            }
                        }(r)))
                            r = e + r;
                        else if ("neither" === a)
                            return nH.m.danger("Localhost manifest OpenAPI spec URL is not a valid URL or path."),
                            [2];
                        s.label = 5;
                    case 5:
                        return s.trys.push([5, 8, , 9]),
                        [4, fetch(r)];
                    case 6:
                        return [4, s.sent().text()];
                    case 7:
                        return i = s.sent(),
                        [3, 9];
                    case 8:
                        return s.sent(),
                        nH.m.danger("Failed to fetch localhost OpenAPI spec."),
                        [2];
                    case 9:
                        try {
                            o = nz.ZP.parse(i)
                        } catch (e) {}
                        try {
                            o = JSON.parse(i)
                        } catch (e) {}
                        if (null == o)
                            return nH.m.danger("Failed to parse localhost OpenAPI spec as JSON or YAML."),
                            [2];
                        s.label = 10;
                    case 10:
                        return s.trys.push([10, 12, , 13]),
                        [4, en.ZP.createOrUpdateLocalhostPlugin({
                            localhost: e,
                            manifest: n,
                            openapiSpec: o
                        })];
                    case 11:
                        return [2, s.sent()];
                    case 12:
                        return s.sent(),
                        nH.m.danger("Failed to create or update localhost plugin at ".concat(e)),
                        [3, 13];
                    case 13:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        var nJ = (0,
        K.vU)({
            generatedImage: {
                id: "pluginDisplayParams.generatedImage",
                defaultMessage: "Generated by plugin",
                description: "Description text for an image that was generated by a plugin"
            }
        });
        function nY(e) {
            var t, n, r = e.plugin, a = e.pluginMessage, i = e.toolMessage, o = [];
            if ("text" === a.content.content_type) {
                try {
                    t = function(e) {
                        var t = !0
                          , n = !1
                          , r = void 0;
                        try {
                            for (var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                var o = a.value
                                  , s = e.trimEnd().endsWith(",") ? e.trimEnd().slice(0, -1) : e;
                                try {
                                    return JSON.parse(s + o)
                                } catch (e) {}
                            }
                        } catch (e) {
                            n = !0,
                            r = e
                        } finally {
                            try {
                                t || null == i.return || i.return()
                            } finally {
                                if (n)
                                    throw r
                            }
                        }
                        return JSON.parse(e)
                    }(a.content.parts[0])
                } catch (e) {}
                if (null != t)
                    for (var s in t)
                        null != n1[r.id] && s in n1[r.id] && o.push((0,
                        w.jsx)(nX, {
                            type: n1[r.id][s],
                            value: t[s]
                        }, s))
            }
            var l = [];
            if ((null == i ? void 0 : i.content.content_type) === "text") {
                try {
                    n = JSON.parse(i.content.parts[0])
                } catch (e) {}
                if (null != n)
                    for (var u in n)
                        null != n2[r.id] && u in n2[r.id] && l.push((0,
                        w.jsx)(nX, {
                            type: n2[r.id][u],
                            value: n[u]
                        }, u))
            }
            return (0,
            w.jsxs)(w.Fragment, {
                children: [o, l]
            })
        }
        function nX(e) {
            var t = e.type
              , n = e.value;
            switch (t) {
            case f.MultiText:
                return (0,
                w.jsx)(nK, {
                    value: n
                });
            case f.MultiImage:
                return (0,
                w.jsx)(n0, {
                    value: n
                });
            default:
                return null
            }
        }
        function nK(e) {
            var t = e.value.map(function(e, t) {
                return (0,
                w.jsx)("div", {
                    children: e
                }, t)
            });
            return (0,
            w.jsx)("div", {
                className: "flex flex-col gap-1 text-gray-600",
                children: t
            })
        }
        function n0(e) {
            var t = e.value
              , n = (0,
            ee.Z)()
              , r = t.map(function(e, t) {
                return (0,
                w.jsx)("a", {
                    href: e,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    w.jsx)("img", {
                        src: e,
                        alt: n.formatMessage(nJ.generatedImage),
                        className: "h-32 rounded"
                    })
                }, t)
            });
            return (0,
            w.jsx)("div", {
                className: "flex flex-wrap gap-4",
                children: r
            })
        }
        (a = f || (f = {})).MultiText = "multiText",
        a.MultiImage = "multiImage";
        var n1 = {
            "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b": {
                prompts: f.MultiText
            }
        }
          , n2 = {
            "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b": {
                images: f.MultiImage
            }
        };
        function n3() {
            var e = (0,
            k._)(["flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800"]);
            return n3 = function() {
                return e
            }
            ,
            e
        }
        function n5() {
            var e = (0,
            k._)(["flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800"]);
            return n5 = function() {
                return e
            }
            ,
            e
        }
        var n4 = T.Z.div(n3());
        function n6() {
            return (0,
            w.jsx)(n4, {
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: X.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                })
            })
        }
        function n8() {
            return (0,
            w.jsx)(n4, {
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: X.V7f,
                    className: "h-3 w-3"
                })
            })
        }
        var n7 = T.Z.div(n5());
        function n9() {
            return (0,
            w.jsxs)(n7, {
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: X.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                }), (0,
                w.jsx)("div", {
                    children: "Unverified"
                })]
            })
        }
        function re() {
            return (0,
            w.jsxs)(n7, {
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: X.V7f,
                    className: "h-3 w-3"
                }), (0,
                w.jsx)("div", {
                    children: "Localhost"
                })]
            })
        }
        var rt = M.memo(function(e) {
            var t, n, r = e.messages, a = (0,
            P.hz)(), i = (0,
            j._)(r, 2), o = i[0], s = i[1], l = nN(), u = null === (t = o.message.recipient) || void 0 === t ? void 0 : t.split(".")[0], c = l.find(function(e) {
                return e.namespace === u
            }), d = null == c ? void 0 : c.manifest.name_for_human, f = ne(o), h = null != d ? (0,
            w.jsx)("b", {
                children: d
            }) : "unknown plugin", g = null != s ? (0,
            w.jsxs)("div", {
                children: ["Used ", h]
            }) : f ? (0,
            w.jsxs)("div", {
                children: ["Tried to use ", h]
            }) : (0,
            w.jsxs)("div", {
                children: ["Using ", h, "..."]
            });
            return c && (nG(c) ? n = (0,
            w.jsx)(re, {}) : "approved" !== c.status && (n = (0,
            w.jsx)(n9, {}))),
            (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(te, {
                    isComplete: null != s || f,
                    results: (0,
                    w.jsx)(rn, {
                        pluginName: null != d ? d : "unknown plugin",
                        pluginMessage: o,
                        toolMessage: s
                    }),
                    children: (0,
                    w.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [g, n]
                    })
                }), a.has(er.rL) && null != c && (0,
                w.jsx)(nY, {
                    plugin: c,
                    pluginMessage: o.message,
                    toolMessage: null == s ? void 0 : s.message
                })]
            })
        });
        function rn(e) {
            var t = e.pluginName
              , n = e.pluginMessage
              , r = e.toolMessage
              , a = eL.Cv.getTextFromMessage(n.message)
              , i = r ? eL.Cv.getTextFromMessage(r.message) : null;
            try {
                a = JSON.stringify(JSON.parse(a), null, 2),
                null != i && (i = JSON.stringify(JSON.parse(i), null, 2))
            } catch (e) {}
            var o = (null == r ? void 0 : r.message.author.name) === "plugin_service";
            return (0,
            w.jsxs)("div", {
                className: "my-3 flex max-w-full flex-col gap-3",
                children: [(0,
                w.jsx)(rr, {
                    title: "Request to ".concat(t),
                    infoTooltip: n.message.recipient,
                    children: a
                }), null != i && (0,
                w.jsx)(rr, {
                    title: o ? "Error" : "Response from ".concat(t),
                    infoTooltip: n.message.recipient,
                    children: (0,
                    w.jsx)("span", {
                        className: (0,
                        q.Z)(o && "text-red-500"),
                        children: i
                    })
                })]
            })
        }
        function rr(e) {
            var t = e.title
              , n = e.infoTooltip
              , r = e.children;
            return (0,
            w.jsx)(t5, {
                title: (0,
                w.jsx)("span", {
                    className: "uppercase",
                    children: t
                }),
                headerDecoration: void 0 !== n ? (0,
                w.jsx)(e2.u, {
                    label: n,
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.H33,
                        className: "text-white/50"
                    })
                }) : void 0,
                shouldWrapCode: !0,
                className: "w-full text-xs text-white/80",
                children: r
            })
        }
        function ra() {
            var e = (0,
            k._)(["text-xs flex items-center justify-center gap-1"]);
            return ra = function() {
                return e
            }
            ,
            e
        }
        function ri() {
            var e = (0,
            k._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
            return ri = function() {
                return e
            }
            ,
            e
        }
        function ro() {
            var e = (0,
            k._)(["flex-grow flex-shrink-0"]);
            return ro = function() {
                return e
            }
            ,
            e
        }
        function rs(e) {
            var t = e.currentPage
              , n = e.onChangeIndex
              , r = e.length
              , a = e.className
              , i = function(e) {
                n(ny()(t + e, 0, r - 1))
            };
            return (0,
            w.jsxs)(rl, {
                className: a,
                children: [(0,
                w.jsx)(ru, {
                    onClick: function() {
                        return i(-1)
                    },
                    disabled: 0 === t,
                    children: (0,
                    w.jsx)(ef.ZP, {
                        size: "xsmall",
                        icon: X.YFh
                    })
                }), (0,
                w.jsx)(rc, {
                    children: "".concat(t + 1, " / ").concat(r)
                }), (0,
                w.jsx)(ru, {
                    onClick: function() {
                        return i(1)
                    },
                    disabled: t === r - 1,
                    children: (0,
                    w.jsx)(ef.ZP, {
                        size: "xsmall",
                        icon: X.Tfp
                    })
                })]
            })
        }
        var rl = T.Z.div(ra())
          , ru = T.Z.button(ri())
          , rc = T.Z.span(ro())
          , rd = n(90076);
        function rf() {
            var e = (0,
            k._)([""]);
            return rf = function() {
                return e
            }
            ,
            e
        }
        function rh() {
            var e = (0,
            k._)(["flex flex-grow flex-col gap-3"]);
            return rh = function() {
                return e
            }
            ,
            e
        }
        function rg() {
            var e = (0,
            k._)(["flex p-4 gap-4 ", ""]);
            return rg = function() {
                return e
            }
            ,
            e
        }
        function rm() {
            var e = (0,
            k._)(["flex-shrink-0 flex flex-col relative items-end"]);
            return rm = function() {
                return e
            }
            ,
            e
        }
        function rp() {
            var e = (0,
            k._)(["p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2"]);
            return rp = function() {
                return e
            }
            ,
            e
        }
        function rv() {
            var e = (0,
            k._)(["p-1 ", ""]);
            return rv = function() {
                return e
            }
            ,
            e
        }
        function rx() {
            var e = (0,
            k._)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
            return rx = function() {
                return e
            }
            ,
            e
        }
        function rb() {
            var e = (0,
            k._)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
            return rb = function() {
                return e
            }
            ,
            e
        }
        function ry() {
            var e = (0,
            k._)(["flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"]);
            return ry = function() {
                return e
            }
            ,
            e
        }
        var rj = ["#ab68ff"];
        (i = h || (h = {}))[i.Text = 0] = "Text",
        i[i.MultiText = 1] = "MultiText",
        i[i.Browsing = 2] = "Browsing",
        i[i.Code = 3] = "Code",
        i[i.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        i[i.Plugin = 5] = "Plugin";
        var rk = "#19c37d"
          , rw = "openai"
          , rC = "#1a7f64"
          , r_ = M.memo(function(e) {
            var t, n, r, a, i = e.turnIndex, o = e.conversationLeafId, s = e.isFinalTurn, l = e.clientThreadId, u = e.onChangeItemInView, d = e.onChangeRating, f = e.onRequestMoreCompletions, g = e.onDeleteNode, m = e.onRequestCompletion, p = e.onUpdateNode, v = e.onSandboxLinkClick, x = e.onHandleChangeVariantFeedbackInlineComparisonRating, y = e.activeRequests, k = e.showInlineEmbeddedDisplay, C = void 0 !== k && k, _ = e.currentModelId, T = e.isStaticSharedThread, Z = void 0 !== T && T, A = e.initiallyHighlightedMessageId, R = e.avatarColor, D = (0,
            S.GD)(l, i, o), L = D.role, F = D.messages, E = D.variantIds, B = (0,
            ey.kP)().session, U = (0,
            ea.x_)(), z = (0,
            N.WS)(), H = (0,
            j._)((0,
            M.useState)(!1), 2), V = H[0], W = H[1], G = (0,
            M.useMemo)(function() {
                return E.findIndex(function(e) {
                    return e === F[0].nodeId
                })
            }, [E, F]), Q = L !== eR.uU.User, $ = (0,
            M.useContext)(O.QL).historyDisabled, J = (0,
            P.hz)().has(er.FZ), Y = (0,
            eI.Fl)(), K = Y.isBrowsingAvailable, ee = Y.isPluginsAvailable, et = Y.isCodeInterpreterAvailable, en = K || ee || et, ei = (0,
            M.useRef)(null);
            (0,
            M.useEffect)(function() {
                var e;
                null != A && D.messages.map(function(e) {
                    return e.message.id
                }).includes(A) && (null === (e = ei.current) || void 0 === e || e.scrollIntoView({
                    behavior: "auto"
                }))
            }, [A]);
            var eo = F[F.length - 1]
              , es = (0,
            j._)((0,
            M.useState)(eo.rating), 2)
              , el = es[0]
              , eu = es[1]
              , ec = (0,
            P.hz)()
              , ed = nN()
              , eh = (0,
            M.useMemo)(function() {
                return Q && (null == F ? void 0 : F[0]) && eL.Cv.getModelFromMessage(null == F ? void 0 : F[0].message) || _
            }, [Q, F, _])
              , eg = (0,
            M.useCallback)(function() {
                1 === F.length && (z(L === eR.uU.User ? I.s6.editPrompt : I.s6.editCompletion, {
                    id: F[0].message.id,
                    threadId: S.tQ.getServerThreadId(l)
                }),
                W(!0))
            }, [F, z, L, l])
              , ex = (0,
            M.useCallback)(function() {
                W(!1)
            }, [])
              , eb = (0,
            M.useCallback)(function() {
                var e = F.reduce(function(e, t) {
                    return t.err || t.message.author.role !== eR.uU.Assistant || "all" !== t.message.recipient ? e : e + (e ? "\n\n" : "") + eL.Cv.getTextFromMessage(t.message)
                }, "");
                navigator.clipboard.writeText(e),
                z(I.s6.copyToClipboard, {
                    threadId: S.tQ.getServerThreadId(l),
                    id: F[0].message.id,
                    eventSource: "mouse",
                    model: eh
                }),
                eA.m.logEvent("chatgpt_copy_to_clipboard")
            }, [eh, z, F, l])
              , ej = (0,
            M.useCallback)(function(e) {
                d(eo.nodeId, eo.message.id, e),
                eu(e)
            }, [eo, d])
              , ek = (0,
            j._)((0,
            M.useState)(eo.inlineComparisonRating), 2)
              , ew = ek[0]
              , eC = ek[1];
            (0,
            M.useEffect)(function() {
                eu(function(e) {
                    return null != e ? e : eo.rating
                }),
                eC(function(e) {
                    return null != e ? e : eo.inlineComparisonRating
                })
            }, [eo]);
            var e_ = (0,
            M.useMemo)(function() {
                return eL.Cv.getRequestIdFromConversationTurn(D)
            }, [D])
              , eM = (0,
            M.useMemo)(function() {
                return y.has(e_)
            }, [y, e_])
              , eT = (0,
            M.useMemo)(function() {
                var e = !0
                  , t = !1
                  , n = void 0;
                try {
                    for (var r, a = F[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                        var i = r.value;
                        if (i.errType)
                            return i.errType
                    }
                } catch (e) {
                    t = !0,
                    n = e
                } finally {
                    try {
                        e || null == a.return || a.return()
                    } finally {
                        if (t)
                            throw n
                    }
                }
                return !1
            }, [F])
              , eN = (0,
            M.useMemo)(function() {
                if (Q) {
                    var e, t, n = S.tQ.getTree(l), r = null === (e = n.getParentPromptNode(F[0].nodeId)) || void 0 === e ? void 0 : e.parentId, a = r && (null === (t = n.getNode(r).message.metadata) || void 0 === t ? void 0 : t.model_slug);
                    if (eh && a && eh !== a)
                        return rd.n2.has(a) ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model." : "The previous model used in this conversation is unavailable. We've switched you to the latest default model."
                }
                return null
            }, [eh, Q, F, l])
              , eP = (0,
            M.useMemo)(function() {
                if (!en)
                    return {
                        avatarIcon: rw,
                        avatarColor: rk
                    };
                if (eM && F.length > 0) {
                    var e = F[F.length - 1]
                      , t = eD(e.message);
                    switch (t) {
                    case c.Text:
                        if (eL.Cv.getTextFromMessage(e.message).length > 0 || F.length > 1)
                            return {
                                avatarIcon: "text",
                                avatarColor: rC
                            };
                        break;
                    case c.Browsing:
                    case c.BrowseTool:
                        return {
                            avatarIcon: "browsing",
                            avatarColor: rC
                        };
                    case c.Code:
                    case c.CodeExecutionOutput:
                        return {
                            avatarIcon: "code",
                            avatarColor: rC
                        };
                    case c.Plugin:
                    case c.PluginTool:
                        var n = t === c.Plugin ? e.message.recipient : e.message.author.name
                          , r = null == n ? void 0 : n.split(".")[0]
                          , a = ed.find(function(e) {
                            return e.namespace === r
                        });
                        if (a)
                            return {
                                avatarPlugin: a
                            };
                        return {
                            avatarIcon: "plugin",
                            avatarColor: rC
                        }
                    }
                }
                return {
                    avatarIcon: rw,
                    avatarColor: rk
                }
            }, [en, eM, F, ed])
              , eS = eP.avatarIcon
              , eF = eP.avatarColor
              , eE = eP.avatarPlugin
              , eB = (0,
            M.useCallback)(function(e, t) {
                S.tQ.updateTree(l, function(n) {
                    var r = n.getParentId(e);
                    n.addNode(t, "", r, eR.Jq.Prompt)
                })
            }, [l])
              , eO = (0,
            M.useMemo)(function() {
                var e = [];
                return F.forEach(function(t, n) {
                    var r = eD(t.message)
                      , a = null == F ? void 0 : F[n - 1]
                      , i = a && (eL.Cv.getIsIncompleteFromMessage(a.message) || eL.Cv.getIsContinuedFromMessage(a.message))
                      , o = r === c.Text && eL.Cv.getTextFromMessage(t.message);
                    if (i && null != o) {
                        var s = e.pop();
                        (null == s ? void 0 : s.type) === h.MultiText ? (s.messages.push(t),
                        e.push(s)) : (null == s ? void 0 : s.type) === h.Text && e.push({
                            type: h.MultiText,
                            messages: [s.message, t]
                        })
                    } else if (r === c.Browsing || r === c.BrowseTool) {
                        var l = e[e.length - 1];
                        (null == l ? void 0 : l.type) === h.Browsing ? l.messages.push(t) : e.push({
                            type: h.Browsing,
                            messages: [t]
                        })
                    } else if (r === c.Plugin || r === c.PluginTool) {
                        var u = e[e.length - 1];
                        r === c.PluginTool && (null == u ? void 0 : u.type) === h.Plugin ? u.messages.push(t) : e.push({
                            type: h.Plugin,
                            messages: [t]
                        })
                    } else {
                        var d = h.Text;
                        r === c.Code ? d = h.Code : r === c.CodeExecutionOutput && (d = h.CodeExecutionOutput),
                        e.push({
                            type: d,
                            message: t
                        })
                    }
                }),
                e.map(function(t, n) {
                    var r, a, i = n === e.length - 1;
                    switch (t.type) {
                    case h.Text:
                        return (0,
                        w.jsx)(nD, {
                            className: "min-h-[20px]",
                            message: t.message,
                            isEditing: V,
                            format: Q,
                            isCompletionInProgress: i && eM,
                            onCreateEditNode: eB,
                            clientThreadId: l,
                            onUpdateNode: p,
                            onDeleteNode: g,
                            onChangeItemInView: u,
                            onRequestCompletion: m,
                            onExitEdit: ex,
                            disabled: 0 !== y.size,
                            onSandboxLinkClick: (r = (0,
                            em._)(function(e) {
                                return (0,
                                ev.Jh)(this, function(n) {
                                    return [2, v(t.message.nodeId, e)]
                                })
                            }),
                            function(e) {
                                return r.apply(this, arguments)
                            }
                            ),
                            isCompletion: Q,
                            onRequestMoreCompletions: f,
                            isResponseToPluginMessage: (null === (a = e[n - 1]) || void 0 === a ? void 0 : a.type) === h.Plugin
                        }, t.message.nodeId);
                    case h.MultiText:
                        return (0,
                        w.jsx)(nq, {
                            messages: t.messages,
                            isCompletionInProgress: i && eM,
                            isCompletion: Q,
                            onRequestMoreCompletions: f
                        }, n);
                    case h.Browsing:
                        var o = t.messages[t.messages.length - 1];
                        return (0,
                        w.jsx)(ti, {
                            messages: t.messages,
                            isComplete: !i || ne(o)
                        }, t.messages[0].nodeId);
                    case h.Code:
                        var s = e[n + 1]
                          , c = s && s.type === h.CodeExecutionOutput ? s.message : void 0;
                        return (0,
                        w.jsx)(nr, {
                            message: t.message,
                            outputMessage: c
                        }, t.message.nodeId);
                    case h.CodeExecutionOutput:
                        return (0,
                        w.jsx)(tx, {
                            message: t.message,
                            isCollapsed: !1
                        }, t.message.nodeId);
                    case h.Plugin:
                        return (0,
                        w.jsx)(rt, {
                            messages: t.messages
                        }, t.messages[0].nodeId);
                    default:
                        return null
                    }
                })
            }, [F, V, Q, eM, eB, l, p, g, u, m, ex, y.size, v, f])
              , eq = (0,
            S.r7)(l)
              , eU = !Z && !eq && U && Q && !C && !V && 1 === G && s && !ew && !el && 2 === E.length && Date.now() - (null !== (r = eo.message.create_time) && void 0 !== r ? r : 0) * 1e3 < 6e5 && !eM && ec.has(er.st)
              , ez = (0,
            M.useRef)(Date.now())
              , eH = (0,
            M.useRef)((null !== (a = eo.message.create_time) && void 0 !== a ? a : Date.now()) * 1e3)
              , eV = (0,
            M.useRef)(Date.now());
            (0,
            M.useEffect)(function() {
                eM || (eV.current = Date.now())
            }, [eM]);
            var eQ = (0,
            M.useCallback)(function(e) {
                if (eU) {
                    var t, n, r = S.tQ.getTree(l), a = E[0] || "", i = (null == r ? void 0 : r.getConversationTurns(a)) || [], o = i[i.length - 1], s = (null == o ? void 0 : o.messages) || [], u = s[s.length - 1], c = (null == u ? void 0 : null === (t = u.message) || void 0 === t ? void 0 : t.id) || "", d = E[1] || "", f = (null == r ? void 0 : r.getConversationTurns(d)) || [], h = f[f.length - 1], g = (null == h ? void 0 : h.messages) || [], m = g[g.length - 1];
                    x(c, (null == m ? void 0 : null === (n = m.message) || void 0 === n ? void 0 : n.id) || "", e, ez.current, ez.current, eH.current, eV.current),
                    S.tQ.updateTree(l, function(t) {
                        t.updateNode(eo.nodeId, {
                            metadata: {
                                $set: (0,
                                ep._)((0,
                                b._)({}, t.getMetadata(eo.nodeId)), {
                                    inlineComparisonRating: e
                                })
                            }
                        })
                    }),
                    eC(e),
                    S.tQ.updateTree(l, function(e) {
                        e.updateNode(u.nodeId, {
                            metadata: {
                                $set: (0,
                                ep._)((0,
                                b._)({}, e.getMetadata(u.nodeId)), {
                                    inlineComparisonRating: "baseline"
                                })
                            }
                        })
                    })
                }
            }, [eU, eo.nodeId, x, l, E])
              , e$ = (0,
            M.useCallback)(function() {
                S.tQ.updateTree(l, function(e) {
                    e.updateNode(eo.nodeId, {
                        metadata: {
                            $set: (0,
                            ep._)((0,
                            b._)({}, e.getMetadata(eo.nodeId)), {
                                inlineComparisonRating: "skip"
                            })
                        }
                    })
                }),
                eC("skip")
            }, [eo.nodeId, l])
              , eJ = Q && !C && !Z && !eq
              , eX = !Z && !C && !V
              , e0 = !Q && !C && !Z && 1 === F.length && !V;
            if (D.role === eR.uU.Unknown || D.role === eR.uU.System)
                return null;
            var e1 = e0 ? (0,
            w.jsx)(rS, {
                $isMessageRedesign: J,
                onClick: eg,
                className: (0,
                q.Z)(!J && U && "md:invisible md:group-hover:visible"),
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: X.vPQ
                })
            }) : null
              , e2 = Q && !C ? (0,
            w.jsx)(eK, {
                onCopy: eb,
                className: (0,
                q.Z)("rounded-md p-1", J ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400" : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400")
            }) : null
              , e3 = eJ && !1 ? (0,
            w.jsxs)("div", {
                className: "flex gap-1",
                children: ["thumbsDown" !== el && !$ && (0,
                w.jsx)(rS, {
                    $isMessageRedesign: J,
                    onClick: function() {
                        return ej("thumbsUp")
                    },
                    disabled: "thumbsUp" === el,
                    className: (0,
                    q.Z)("thumbsUp" === el && (J ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.fmn
                    })
                }, "thumbsUp:".concat(eo.nodeId)), "thumbsUp" !== el && !$ && (0,
                w.jsx)(rS, {
                    $isMessageRedesign: J,
                    onClick: function() {
                        return ej("thumbsDown")
                    },
                    disabled: "thumbsDown" === el,
                    className: (0,
                    q.Z)("thumbsDown" === el && (J ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.oLd
                    })
                }, "thumbsDown:".concat(eo.nodeId))]
            }) : null
              , e5 = eU && !$ ? (0,
            w.jsxs)(rR, {
                children: [(0,
                w.jsx)("div", {
                    className: (0,
                    q.Z)("mr-4"),
                    children: "Was this response better or worse?"
                }), (0,
                w.jsxs)(rP, {
                    onClick: function() {
                        return eQ("new")
                    },
                    title: "This response was better than the previous response",
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.fmn,
                        className: (0,
                        q.Z)("mr-1")
                    }), "Better"]
                }), (0,
                w.jsxs)(rP, {
                    onClick: function() {
                        return eQ("original")
                    },
                    title: "This response was worse than the previous response",
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.oLd,
                        className: (0,
                        q.Z)("mr-1")
                    }), "Worse"]
                }), (0,
                w.jsxs)(rP, {
                    onClick: function() {
                        return eQ("same")
                    },
                    title: "This response was the same in quality",
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: eZ.Ny3,
                        className: (0,
                        q.Z)("mr-1 rounded-full border border-gray-400 dark:border-gray-300")
                    }), "Same"]
                }), (0,
                w.jsx)(rP, {
                    onClick: e$,
                    title: "Skip this comparison",
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.q5L,
                        size: "medium"
                    })
                })]
            }) : null
              , e4 = eX && E.length > 1
              , e6 = function() {
                return (0,
                w.jsxs)("div", {
                    className: "flex gap-1",
                    children: [e3, e1, e2]
                })
            }
              , e8 = null === (n = F[0].message.metadata) || void 0 === n ? void 0 : n.shared_conversation_id
              , e7 = null != e8;
            return (0,
            w.jsxs)(rM, {
                className: (0,
                q.Z)("group", "w-full text-gray-800 dark:text-gray-100", J ? (0,
                q.Z)("sm:rounded-2xl", Q ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600") : (0,
                q.Z)(!C && "border-b border-black/10 dark:border-gray-900/50", Q ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")),
                ref: ei,
                children: [eN && (0,
                w.jsx)(rA, {
                    children: eN
                }), (0,
                w.jsxs)(rN, {
                    $isMessageRedesign: J,
                    className: (0,
                    q.Z)(C ? "ml-5" : "m-auto"),
                    children: [(0,
                    w.jsxs)(rI, {
                        children: [(0,
                        w.jsx)("div", {
                            className: J ? "" : "w-[30px]",
                            children: Q ? eE ? (0,
                            w.jsx)(eG, {
                                plugin: eE,
                                notice: eT || void 0
                            }) : (0,
                            w.jsx)(eW, {
                                background: null != R ? R : eF,
                                iconName: eS,
                                notice: eT || void 0
                            }) : e7 || C ? (0,
                            w.jsx)(eW, {
                                background: rj[(null !== (t = null == e8 ? void 0 : e8.charCodeAt(0)) && void 0 !== t ? t : 0) % rj.length],
                                iconName: "user"
                            }) : (0,
                            w.jsx)(eY, {
                                user: null == B ? void 0 : B.user,
                                notice: eT || void 0,
                                size: J ? "redesign" : "medium"
                            })
                        }), !J && eX && U && (0,
                        w.jsx)(rs, {
                            currentPage: G,
                            onChangeIndex: function(e) {
                                return u(E[e])
                            },
                            length: E.length,
                            className: (0,
                            q.Z)("invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible", E.length > 1 ? "visible" : "!invisible")
                        })]
                    }), (0,
                    w.jsxs)("div", {
                        className: (0,
                        q.Z)("relative", J ? "min-w-0 grow" : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"),
                        children: [J && (0,
                        w.jsx)("div", {
                            className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                            children: Q ? "ChatGPT" : e7 ? "User" : "You"
                        }), (0,
                        w.jsx)(rT, {
                            children: eO
                        }), J ? (!U || e4 || null != e5) && !C && (0,
                        w.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [(0,
                            w.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [e4 && (0,
                                w.jsx)(rs, {
                                    currentPage: G,
                                    onChangeIndex: function(e) {
                                        return u(E[e])
                                    },
                                    length: E.length,
                                    className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700"
                                }), !U && e6()]
                            }), e5]
                        }) : (0,
                        w.jsxs)(w.Fragment, {
                            children: [e0 && U && (0,
                            w.jsx)(rZ, {
                                $hidden: 0 !== y.size,
                                children: e1
                            }), (eJ || eX) && (0,
                            w.jsxs)("div", {
                                className: "flex justify-between lg:block",
                                children: [!U && eX && (0,
                                w.jsx)(rs, {
                                    currentPage: G,
                                    onChangeIndex: function(e) {
                                        return u(E[e])
                                    },
                                    length: E.length,
                                    className: (0,
                                    q.Z)("self-center pt-2", E.length > 1 ? "visible" : "!invisible")
                                }), e0 && !U && (0,
                                w.jsx)(rZ, {
                                    $hidden: eM,
                                    children: e1
                                }), eJ && (0,
                                w.jsxs)(rZ, {
                                    $hidden: eM,
                                    children: [e2, e3]
                                }), eU && !$ && e5]
                            })]
                        })]
                    }), J && U && !V && !C && (!Z || Q) && (0,
                    w.jsx)("div", {
                        className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                        children: e6()
                    })]
                })]
            })
        })
          , rM = T.Z.div(rf())
          , rT = T.Z.div(rh())
          , rN = T.Z.div(rg(), function(e) {
            return e.$isMessageRedesign ? "relative" : "text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0"
        })
          , rI = T.Z.div(rm())
          , rP = T.Z.button(rp())
          , rS = T.Z.button(rv(), function(e) {
            return e.$isMessageRedesign ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm" : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
        })
          , rZ = T.Z.div(rx(), function(e) {
            return e.$hidden ? "invisible" : "visible"
        })
          , rA = T.Z.div(rb())
          , rR = T.Z.div(ry())
          , rD = n(75318);
        function rL() {
            var e = (0,
            k._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
            return rL = function() {
                return e
            }
            ,
            e
        }
        function rF() {
            var e = (0,
            k._)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
            return rF = function() {
                return e
            }
            ,
            e
        }
        function rE() {
            var e = (0,
            k._)(["md:flex items-start text-center gap-3.5"]);
            return rE = function() {
                return e
            }
            ,
            e
        }
        function rB() {
            var e = (0,
            k._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
            return rB = function() {
                return e
            }
            ,
            e
        }
        function rO() {
            var e = (0,
            k._)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
            return rO = function() {
                return e
            }
            ,
            e
        }
        function rq() {
            var e = (0,
            k._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
            return rq = function() {
                return e
            }
            ,
            e
        }
        function rU() {
            var e = (0,
            k._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
            return rU = function() {
                return e
            }
            ,
            e
        }
        function rz() {
            var e = (0,
            k._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
            return rz = function() {
                return e
            }
            ,
            e
        }
        function rH() {
            var e = (0,
            k._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
            return rH = function() {
                return e
            }
            ,
            e
        }
        var rV = T.Z.div(rL())
          , rW = T.Z.h1(rF())
          , rG = T.Z.div(rE())
          , rQ = T.Z.div(rB())
          , r$ = T.Z.h2(rO())
          , rJ = T.Z.ul(rq())
          , rY = T.Z.li(rU());
        T.Z.li(rz());
        var rX = T.Z.button(rH());
        function rK(e) {
            var t = e.text
              , n = e.onChangeCurrentPrompt
              , r = (0,
            M.useCallback)(function() {
                n(t)
            }, [t, n]);
            return (0,
            w.jsxs)(rX, {
                onClick: r,
                children: ['"', t, '" →']
            })
        }
        function r0(e) {
            var t = function(e) {
                var t;
                null == n || null === (t = n.current) || void 0 === t || t.setInputValue(e)
            }
              , n = e.promptTextareaRef
              , r = (0,
            P.nR)();
            return (0,
            w.jsxs)(rV, {
                children: [(0,
                w.jsxs)(rW, {
                    children: ["SoftwareDigitalGPT", r && (0,
                    w.jsx)(eS, {
                        children: "PLUS"
                    })]
                }), (0,
                w.jsxs)(rG, {
                    children: [(0,
                    w.jsxs)(rQ, {
                        children: [(0,
                        w.jsxs)(r$, {
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.kXG,
                                size: "medium"
                            }), "Examples"]
                        }), (0,
                        w.jsxs)(rJ, {
                            children: [(0,
                            w.jsx)(rK, {
                                text: "Explain quantum computing in simple terms",
                                onChangeCurrentPrompt: t
                            }), (0,
                            w.jsx)(rK, {
                                text: "Got any creative ideas for a 10 year old’s birthday?",
                                onChangeCurrentPrompt: t
                            }), (0,
                            w.jsx)(rK, {
                                text: "How do I make an HTTP request in Javascript?",
                                onChangeCurrentPrompt: t
                            })]
                        })]
                    }), (0,
                    w.jsxs)(rQ, {
                        children: [(0,
                        w.jsxs)(r$, {
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: rD.Z,
                                size: "medium"
                            }), "Capabilities"]
                        }), (0,
                        w.jsxs)(rJ, {
                            children: [(0,
                            w.jsx)(rY, {
                                children: "Remembers what user said earlier in the conversation"
                            }), (0,
                            w.jsx)(rY, {
                                children: "Allows user to provide follow-up corrections"
                            }), (0,
                            w.jsx)(rY, {
                                children: "Trained to decline inappropriate requests"
                            })]
                        })]
                    }), (0,
                    w.jsxs)(rQ, {
                        children: [(0,
                        w.jsxs)(r$, {
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.BJv,
                                size: "medium"
                            }), "Limitations"]
                        }), (0,
                        w.jsxs)(rJ, {
                            children: [(0,
                            w.jsx)(rY, {
                                children: "May occasionally generate incorrect information"
                            }), (0,
                            w.jsx)(rY, {
                                children: "May occasionally produce harmful instructions or biased content"
                            }), (0,
                            w.jsx)(rY, {
                                children: "Limited knowledge of world and events after 2021"
                            })]
                        })]
                    })]
                })]
            })
        }
        var r1 = n(90209)
          , r2 = n(68789)
          , r3 = n(70060)
          , r5 = n.n(r3);
        function r4() {
            var e = (0,
            k._)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n", "\n"]);
            return r4 = function() {
                return e
            }
            ,
            e
        }
        function r6() {
            var e = (0,
            k._)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", " ", ""]);
            return r6 = function() {
                return e
            }
            ,
            e
        }
        function r8() {
            var e = (0,
            k._)(["", " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
            return r8 = function() {
                return e
            }
            ,
            e
        }
        var r7 = r5()(Promise.resolve().then(n.bind(n, 22208)), {
            loadableGenerated: {
                webpack: function() {
                    return [22208]
                }
            },
            ssr: !1
        })
          , r9 = (0,
        K.vU)({
            errorGeneratingResponse: {
                id: "PromptTextarea.errorGeneratingResponse",
                defaultMessage: "There was an error generating a response",
                description: "Error message shown when the response generation fails"
            },
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate response",
                description: "Button label for regenerating response"
            },
            continueGenerating: {
                id: "PromptTextarea.continueGenerating",
                defaultMessage: "Continue generating",
                description: "Button label for continuing response generation"
            },
            stopGenerating: {
                id: "PromptTextarea.stopGenerating",
                defaultMessage: "Stop generating",
                description: "Button label for stopping response generation"
            },
            placeholder: {
                id: "PromptTextarea.placeholder",
                defaultMessage: "Send a message...",
                description: "Placeholder text for the input field"
            },
            continueSharedConversationPlaceholder: {
                id: "PromptTextarea.ontinueSharedConversationPplaceholder",
                defaultMessage: "Send a message to continue the conversation.",
                description: "Placeholder text for the input field when viewing a shared conversation"
            },
            suggestionTooltip: {
                id: "PromptTextarea.suggestionTooltip",
                defaultMessage: "Click to send",
                description: "Tooltip for the suggestion button"
            }
        })
          , ae = (0,
        M.forwardRef)(function(e, t) {
            var n = e.onAbortCompletion
              , r = e.onCreateNewCompletion
              , a = e.onRequestMoreCompletions
              , i = e.onContinueGenerating
              , o = e.onFileUpload
              , s = e.canUpload
              , l = e.modelBackend
              , u = e.clientThreadId
              , c = e.isCompletionInProgress
              , d = e.className
              , f = e.clearOnSubmit
              , h = void 0 === f || f
              , g = e.disabled
              , m = void 0 !== g && g
              , p = e.shouldRetry
              , v = e.canPause
              , x = void 0 !== v && v
              , y = e.canContinue
              , k = void 0 !== y && y
              , C = e.suggestions
              , _ = e.isInteractableSharedThread
              , T = (0,
            ee.Z)()
              , Z = (0,
            S.oq)(u)
              , A = (0,
            S.Hk)(u)
              , R = (0,
            ea.w$)()
              , D = (0,
            N.WS)()
              , L = (0,
            M.useContext)(O.gt).serviceStatus
              , F = (0,
            M.useContext)(O.QL).historyDisabled
              , E = (0,
            M.useRef)(null)
              , B = (0,
            j._)((0,
            M.useState)(""), 2)
              , U = B[0]
              , z = B[1]
              , H = (0,
            M.useCallback)(function(e, t) {
                if (null == e || e.preventDefault(),
                !m) {
                    var n, a, i = null === (n = E.current) || void 0 === n ? void 0 : n.value, o = "".concat(null === (a = E.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
                    i && (r(o, {
                        value: i || ""
                    }, {
                        eventSource: e ? "mouse" : "keyboard"
                    }, {
                        suggestions: C
                    }),
                    h && z(""),
                    (0,
                    ni.SI)(1, E.current),
                    void 0 !== C && (void 0 !== t ? eA.m.logEvent("chatgpt_prompt_use_suggestion", i, {
                        index: "".concat(t)
                    }) : eA.m.logEvent("chatgpt_prompt_ignore_suggestions")))
                }
            }, [h, m, r, z, C])
              , V = (0,
            M.useCallback)(function() {
                n("", A),
                a(Z, {
                    eventSource: "mouse"
                })
            }, [Z, A, n, a])
              , W = (0,
            M.useCallback)(function() {
                n("", A),
                D(I.s6.pauseCompletion, {
                    threadId: S.tQ.getServerThreadId(u),
                    eventSource: "mouse"
                })
            }, [A, u, D, n])
              , G = (0,
            M.useMemo)(function() {
                return {
                    Enter: {
                        validator: function() {
                            return !m
                        },
                        handler: function(e) {
                            !e.metaKey && (!R || e.shiftKey || e.nativeEvent.isComposing) || (e.preventDefault(),
                            c || H())
                        }
                    },
                    Escape: {
                        validator: function() {
                            return x && c
                        },
                        handler: function() {
                            n("", A),
                            D(I.s6.pauseCompletion, {
                                threadId: S.tQ.getServerThreadId(u),
                                eventSource: "keyboard"
                            })
                        }
                    }
                }
            }, [m, R, c, H, x, n, A, D, u])
              , Q = (0,
            M.useCallback)(function(e) {
                var t;
                (null === (t = G[e.key]) || void 0 === t ? void 0 : t.validator(e)) && G[e.key].handler(e)
            }, [G]);
            (0,
            M.useEffect)(function() {
                var e;
                null === (e = E.current) || void 0 === e || e.focus()
            }, []);
            var $ = "root" !== Z && !c && !(null == L ? void 0 : L.oof)
              , J = (0,
            M.useCallback)(function() {
                i(Z)
            }, [Z, i])
              , Y = (0,
            P.hz)().has(er.uj)
              , K = (0,
            M.useMemo)(function() {
                return (0,
                w.jsxs)("div", {
                    className: p ? "w-full" : "",
                    children: [p && (0,
                    w.jsx)("div", {
                        className: "mb-3 text-center text-xs",
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, r9.errorGeneratingResponse))
                    }), (0,
                    w.jsxs)(ao, {
                        $shouldRetry: p,
                        children: [!p && Y && (0,
                        w.jsx)(an, {
                            suggestions: C,
                            shouldRetry: p,
                            currentInputRef: E,
                            onSelectSuggestion: z,
                            handleCreateNewCompletion: H
                        }), $ && (0,
                        w.jsxs)(ed.z, {
                            as: "button",
                            color: p ? "primary" : "neutral",
                            onClick: V,
                            className: (0,
                            q.Z)(p ? "m-auto" : "border-0 md:border"),
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.Qxo,
                                size: R ? "xsmall" : "small",
                                className: "flex-shrink-0"
                            }), (R || p) && (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, r9.regenerateResponse))]
                        }), k && (0,
                        w.jsxs)(ed.z, {
                            as: "button",
                            color: "neutral",
                            onClick: J,
                            className: "border-0 md:border",
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.lV_,
                                className: "-rotate-180",
                                size: R ? "xsmall" : "small"
                            }), R && (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, r9.continueGenerating))]
                        }), x && c && (0,
                        w.jsxs)(ed.z, {
                            as: "button",
                            color: "neutral",
                            onClick: W,
                            className: "border-0 md:border",
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.jxP,
                                size: R ? "xsmall" : "small"
                            }), R && (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, r9.stopGenerating))]
                        })]
                    })]
                })
            }, [k, x, $, Y, W, H, z, V, J, c, R, p, C]);
            return (0,
            M.useImperativeHandle)(t, function() {
                return {
                    setInputValue: z
                }
            }),
            (0,
            w.jsx)("form", {
                className: d,
                onSubmit: H,
                children: (0,
                w.jsxs)("div", {
                    className: "relative flex h-full flex-1 items-stretch md:flex-col",
                    children: [R && K, !p && (0,
                    w.jsxs)(aa, {
                        $disabled: p,
                        $historyDisabled: F,
                        children: [(0,
                        w.jsx)(ni.ZP, {
                            id: ar,
                            tabIndex: 0,
                            value: U,
                            "data-id": Z,
                            ref: E,
                            style: {
                                maxHeight: "200px"
                            },
                            rows: 1,
                            onKeyDown: Q,
                            onChange: function(e) {
                                z(e.target.value)
                            },
                            placeholder: _ ? T.formatMessage(r9.continueSharedConversationPlaceholder) : T.formatMessage(r9.placeholder),
                            className: (0,
                            q.Z)("m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent", s ? "pl-8 md:pl-5" : "pl-2 md:pl-0"),
                            disabled: p
                        }), s && (0,
                        w.jsx)(r7, {
                            clientThreadId: u,
                            onFileUpload: o,
                            currentLeafId: Z,
                            modelBackend: l,
                            disabled: c
                        }), (0,
                        w.jsx)(ai, {
                            disabled: c || p || !("" !== U) || m,
                            $onRightSide: !0,
                            $nudgeBottom: c,
                            className: c ? "" : "disabled:opacity-40",
                            children: c ? (0,
                            w.jsx)("div", {
                                className: "text-2xl",
                                children: (0,
                                w.jsx)(at, {})
                            }) : (0,
                            w.jsx)(ef.ZP, {
                                icon: X.LbG,
                                size: "small",
                                className: "mr-1"
                            })
                        })]
                    }), !R && K]
                })
            })
        });
        function at() {
            var e = (0,
            j._)((0,
            M.useState)(0), 2)
              , t = e[0]
              , n = e[1];
            (0,
            M.useEffect)(function() {
                var e = setInterval(function() {
                    n(function(e) {
                        return (e + 1) % 3
                    })
                }, 350);
                return function() {
                    return clearInterval(e)
                }
            }, []);
            for (var r = [], a = 0; a < 3; a++)
                r.push((0,
                w.jsx)("span", {
                    className: a <= t ? "" : "invisible",
                    children: "\xb7"
                }, a));
            return (0,
            w.jsx)(w.Fragment, {
                children: r
            })
        }
        function an(e) {
            var t = e.suggestions
              , n = e.shouldRetry
              , r = e.currentInputRef
              , a = e.onSelectSuggestion
              , i = e.handleCreateNewCompletion
              , o = (0,
            ee.Z)()
              , s = (0,
            M.useCallback)(function(e, t) {
                null !== r.current && (a(e),
                r.current.value = e,
                i(void 0, t))
            }, [r, i, a]);
            return (0,
            M.useEffect)(function() {
                void 0 !== t && eA.m.logEvent("chatgpt_prompt_show_suggestions")
            }, [t]),
            (0,
            w.jsx)("div", {
                className: "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
                children: n || void 0 === t ? null : t.slice(0, 2).map(function(e, t) {
                    return (0,
                    w.jsxs)(ed.z, {
                        as: "button",
                        color: "neutral",
                        onClick: function() {
                            return s(e, t)
                        },
                        className: "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [e, (0,
                        w.jsx)("div", {
                            className: "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0,
                            w.jsx)(e2.u, {
                                label: o.formatMessage(r9.suggestionTooltip),
                                side: "top",
                                children: (0,
                                w.jsx)(ef.ZP, {
                                    icon: X.LbG,
                                    size: "small"
                                })
                            })
                        })]
                    }, t)
                })
            })
        }
        var ar = "prompt-textarea"
          , aa = T.Z.div(r4(), function(e) {
            return e.$historyDisabled ? "bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]" : ""
        }, function(e) {
            return e.$disabled && "bg-gray-100"
        })
          , ai = T.Z.button(r6(), function(e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
        }, function(e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2"
        })
          , ao = T.Z.div(r8(), function(e) {
            return e.$shouldRetry ? "" : "h-full"
        });
        function as() {
            var e = (0,
            k._)(["absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]"]);
            return as = function() {
                return e
            }
            ,
            e
        }
        function al() {
            var e = (0,
            k._)(["group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-[0_1px_7px_0_rgba(0,0,0,0.03)] dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] mx-2 sm:mx-1 overflow-hidden"]);
            return al = function() {
                return e
            }
            ,
            e
        }
        function au() {
            var e = (0,
            k._)(["px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line"]);
            return au = function() {
                return e
            }
            ,
            e
        }
        function ac() {
            var e = (0,
            k._)(["block dark:text-white text-gray-900"]);
            return ac = function() {
                return e
            }
            ,
            e
        }
        function ad() {
            var e = (0,
            k._)(["block text-xs text-gray-500"]);
            return ad = function() {
                return e
            }
            ,
            e
        }
        function af(e) {
            var t = e.items
              , n = e.value
              , r = e.onChange
              , a = (0,
            j._)((0,
            M.useState)(function() {
                return t.reduce(function(e, t) {
                    if (t.options.length > 0) {
                        var r = t.options.find(function(e) {
                            return e.value === n
                        });
                        if (r)
                            return e[t.value] = r.value,
                            e;
                        e[t.value] = t.options[0].value
                    }
                    return e
                }, {})
            }), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            M.useCallback)(function(e, a) {
                var s = n;
                void 0 !== a && o(function(t) {
                    return (0,
                    ep._)((0,
                    b._)({}, t), (0,
                    np._)({}, e, a))
                }),
                (s = void 0 !== a ? a : (null == i ? void 0 : i[e]) !== void 0 && t.some(function(t) {
                    return t.value === e && t.options.some(function(t) {
                        return t.value === i[e]
                    })
                }) ? i[e] : e) !== n && r(s)
            }, [t, i, r, n])
              , l = (0,
            j._)((0,
            M.useState)(new Set), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            M.useCallback)(function(e, t) {
                t ? c(function(t) {
                    var n = new Set(t);
                    return n.add(e),
                    n
                }) : c(function(t) {
                    var n = new Set(t);
                    return n.delete(e),
                    n
                })
            }, []);
            return (0,
            w.jsx)("div", {
                className: "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
                children: (0,
                w.jsx)("ul", {
                    className: "flex w-full list-none gap-1 sm:w-auto",
                    children: t.map(function(e, r) {
                        var a, o, l, c, f, h, g = n === e.value || e.options.some(function(e) {
                            return e.value === n
                        }), m = g ? n : null == i ? void 0 : i[e.value], p = null != m ? m : null === (o = e.options) || void 0 === o ? void 0 : null === (l = o[0]) || void 0 === l ? void 0 : l.value, v = null !== (c = e.options.find(function(e) {
                            return e.value === p
                        })) && void 0 !== c ? c : e.options[0], x = null !== (f = null == v ? void 0 : v.icon) && void 0 !== f ? f : null;
                        return (0,
                        w.jsx)(ag, {
                            onToggleItemOpenChanged: d,
                            item: e,
                            isSelected: g,
                            isOtherToggleDropdownOpen: u.size > 0 && !u.has(e.categoryId),
                            currentValue: n,
                            defaultOption: null == v ? void 0 : v.value,
                            onChange: s,
                            currentIcon: x,
                            displayCurrentValue: g && e.showSelectedValueBelow && null !== (h = null == v ? void 0 : v.name) && void 0 !== h ? h : "",
                            contentAlign: (a = t.length,
                            0 === r ? "start" : r === a - 1 ? "end" : "center")
                        }, r)
                    })
                })
            })
        }
        function ah(e) {
            var t = e.item
              , n = e.isSelected
              , r = e.isOtherToggleDropdownOpen
              , a = e.isOpen
              , i = void 0 !== a && a
              , o = e.onChange
              , s = e.currentIcon
              , l = e.displayCurrentValue
              , u = t.options.length > 1
              , c = null != s ? s : t.icon
              , d = !t.disabled && u;
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("group/button", "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5", n ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100" : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100", i && "text-gray-800 dark:text-gray-100", r && n && "opacity-50"),
                onClick: function() {
                    t.disabled || o(t.value)
                },
                children: [(0,
                w.jsxs)("span", {
                    className: (0,
                    q.Z)("relative max-[370px]:hidden", t.disabled && "group-hover/button:text-red-500"),
                    children: [null != c && (0,
                    w.jsx)(ef.ZP, {
                        icon: c,
                        className: (0,
                        q.Z)("transition-colors", n ? t.buttonActiveClass : t.buttonHoverClass)
                    }), t.disabled && (0,
                    w.jsx)(ay, {})]
                }), (0,
                w.jsx)("span", {
                    className: (0,
                    q.Z)("truncate text-sm font-medium md:pr-1.5", !d && "pr-1.5"),
                    children: t.name
                }), d && (0,
                w.jsx)(ef.ZP, {
                    icon: i ? X.rH8 : X.bTu,
                    strokeWidth: 2,
                    className: "md:hidden"
                }), null != l && "" !== l && (0,
                w.jsx)("span", {
                    className: "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                    children: l
                })]
            })
        }
        function ag(e) {
            var t = e.item
              , n = e.isSelected
              , r = e.defaultOption
              , a = e.onChange
              , i = e.currentIcon
              , o = e.currentValue
              , s = e.displayCurrentValue
              , l = e.contentAlign
              , u = e.onToggleItemOpenChanged
              , c = e.isOtherToggleDropdownOpen
              , d = (0,
            j._)((0,
            M.useState)(void 0), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            M.useRef)(null)
              , m = t.options.length > 1
              , p = !(void 0 === t.description && void 0 === t.disclaimer)
              , v = (0,
            M.useCallback)(function(e) {
                h(e),
                u(t.categoryId, !!e)
            }, [t.categoryId, u]);
            return (0,
            w.jsx)(r2.fC, {
                open: f,
                modal: !1,
                children: (0,
                w.jsxs)("li", {
                    className: "group/toggle w-full",
                    onMouseEnter: function() {
                        return v(!0)
                    },
                    onMouseLeave: function() {
                        return v(void 0)
                    },
                    children: [(0,
                    w.jsx)(r2.xz, {
                        ref: g,
                        className: "w-full",
                        children: (0,
                        w.jsx)(ah, {
                            isOpen: !!f,
                            isOtherToggleDropdownOpen: c,
                            item: t,
                            isSelected: n,
                            onChange: a,
                            currentIcon: i,
                            displayCurrentValue: s
                        })
                    }), (0,
                    w.jsx)(r2.Uv, {
                        children: (0,
                        w.jsx)(r2.VY, {
                            className: (0,
                            q.Z)("w-full min-w-[100vw] max-w-[100vw] select-none pt-4 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none", "will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"),
                            align: l,
                            alignOffset: -6,
                            onCloseAutoFocus: function(e) {
                                f || e.preventDefault()
                            },
                            onEscapeKeyDown: function(e) {
                                var t;
                                e.preventDefault(),
                                null === (t = g.current) || void 0 === t || t.focus()
                            },
                            children: (0,
                            w.jsxs)(aj, {
                                children: [p && (0,
                                w.jsx)(am, {
                                    item: t
                                }), (m || !f) && (0,
                                w.jsx)(ap, {
                                    defaultOption: n ? o : r,
                                    item: t,
                                    currentValue: o,
                                    onChange: function(e, t) {
                                        var n;
                                        a(e, t),
                                        v(void 0),
                                        null === (n = document.getElementById(ar)) || void 0 === n || n.focus()
                                    },
                                    className: (0,
                                    q.Z)("text-sm", p && "mb-1 border-t border-gray-100 dark:border-gray-800")
                                })]
                            })
                        })
                    }, t.categoryId)]
                })
            })
        }
        function am(e) {
            var t = e.item;
            return (0,
            w.jsxs)(ak, {
                className: "text-sm sm:text-base",
                children: [void 0 !== t.description && (0,
                w.jsx)(aw, {
                    children: t.description
                }), void 0 !== t.disclaimer && (0,
                w.jsx)(aC, {
                    children: t.disclaimer
                })]
            })
        }
        function ap(e) {
            var t = e.item
              , n = e.className
              , r = e.onChange
              , a = e.currentValue
              , i = e.defaultOption;
            return (0,
            w.jsx)(r2.Ee, {
                defaultValue: i,
                value: a,
                className: n,
                children: t.options.map(function(e, n) {
                    return (0,
                    w.jsx)(av, {
                        option: e,
                        selected: a === e.value,
                        active: i === e.value,
                        iconClass: t.iconClass,
                        iconActiveClass: t.buttonActiveClass,
                        showBorder: n !== t.options.length - 1,
                        isDisabled: e.disabled,
                        onChange: function() {
                            e.disabled || r(t.value, e.value)
                        }
                    }, e.value)
                })
            })
        }
        function av(e) {
            var t, n = e.option, r = e.selected, a = e.active, i = e.iconClass, o = e.iconActiveClass, s = e.isDisabled, l = e.onChange, u = e.showBorder, c = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
            return (0,
            w.jsx)(r2.Rk, {
                asChild: !0,
                value: n.value,
                onClick: l,
                className: "select-none outline-none",
                children: (0,
                w.jsxs)("div", {
                    className: (0,
                    q.Z)("group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium text-gray-900 focus:bg-gray-50 dark:text-gray-100", {
                        "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                        "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700": a && !r,
                        "text-gray-800 dark:text-gray-100": r || a,
                        "border-b border-gray-100 dark:border-gray-800": u
                    }),
                    children: [null != n.icon && null != c ? (0,
                    w.jsx)(ef.ZP, {
                        icon: r ? n.icon : c,
                        className: (0,
                        q.Z)("max-[370px]:hidden", !s && !r && i, r || a ? o : "text-gray-500")
                    }) : null, (0,
                    w.jsx)("span", {
                        className: (0,
                        q.Z)("truncate", {
                            "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100": !s,
                            "text-gray-800 dark:text-gray-100": a && !s
                        }),
                        children: n.name
                    }), n.tags.map(function(e) {
                        return ab(e)
                    }), (0,
                    w.jsx)("span", {
                        className: (0,
                        q.Z)({
                            "absolute right-3 rounded-full p-1 text-blue-400": !0,
                            "opacity-0": !r && !s,
                            "group-hover/options:opacity-0": !r,
                            "text-red-500": s
                        }),
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: s ? r1.Z : ef.nQ,
                            className: "h-5 w-5"
                        })
                    })]
                })
            })
        }
        var ax = new Set(["beta", "confidential", "alpha"])
          , ab = function(e) {
            return ax.has(e) && (0,
            w.jsx)("span", {
                className: (0,
                q.Z)("py-0.25 rounded px-1 text-sm capitalize", "beta" === e && "bg-blue-200 text-blue-500", "alpha" === e && "bg-blue-200 text-blue-500", "confidential" === e && "bg-red-200 text-red-800"),
                children: e
            }, e)
        }
          , ay = T.Z.span(as())
          , aj = T.Z.div(al())
          , ak = T.Z.div(au())
          , aw = T.Z.span(ac())
          , aC = T.Z.span(ad())
          , a_ = n(41170)
          , aM = {
            textarea: "",
            "model-switcher": ""
        };
        function aT() {
            var e = (0,
            ey.kP)().session
              , t = (0,
            P.hz)()
              , n = nF((0,
            nA.Y8)(function(e) {
                return e.isoDate
            }))
              , r = (0,
            tv.a)(["modelMessageCap"], function() {
                return en.ZP.getModelMessageCap()
            }, {
                enabled: (null == e ? void 0 : e.accessToken) != null && t.has("model_preview")
            }).data;
            return (0,
            M.useMemo)(function() {
                var e = (null == r ? void 0 : r.message_cap) || 0
                  , t = (null == r ? void 0 : r.message_cap_window) || 1
                  , a = function(e) {
                    if (e < 60)
                        return e < 2 ? "minute" : "".concat(e, " minutes");
                    var t = Math.floor(e / 60);
                    if (t < 24)
                        return t < 2 ? "hour" : "".concat(t, " hours");
                    var n = Math.floor(t / 24);
                    if (n < 7)
                        return n < 2 ? "day" : "".concat(n, " days")
                }(t)
                  , i = (null == r ? void 0 : r.message_disclaimer) || aM;
                return a ? r && t && e ? {
                    textareaDisclaimer: i.textarea.replaceAll("%FORMATTED_TIME%", n).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", a),
                    modelSwitcherDisclaimer: i["model-switcher"].replaceAll("%FORMATTED_TIME%", n).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", a)
                } : {
                    textareaDisclaimer: aM.textarea,
                    modelSwitcherDisclaimer: aM["model-switcher"]
                } : {
                    textareaDisclaimer: i.textarea,
                    modelSwitcherDisclaimer: i["model-switcher"]
                }
            }, [r, n])
        }
        var aN = (g = {},
        (0,
        np._)(g, "gpt_3.5", {
            icon: ef.jr,
            activeIcon: ef.jr,
            backgroundColor: "#19c37d",
            buttonActiveClass: "text-brand-green",
            buttonHoverClass: "group-hover/button:text-brand-green",
            iconClass: "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        np._)(g, "gpt_4", {
            icon: ef.Bj,
            activeIcon: ef.MP,
            backgroundColor: "#AB68FF",
            buttonActiveClass: "text-brand-purple",
            buttonHoverClass: "group-hover/button:text-brand-purple",
            iconClass: "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        np._)(g, "other", {
            icon: a_.Z,
            activeIcon: a_.Z,
            buttonActiveClass: "text-orange-500",
            buttonHoverClass: "group-hover/button:text-orange-500",
            showSelectedValueBelow: !0
        }),
        g)
          , aI = {
            browsing_model: {
                icon: ef.xx,
                activeIcon: ef.jZ,
                name: "Browsing"
            },
            code_interpreter_model: {
                icon: ef.dY,
                activeIcon: ef.b3,
                name: "Code Interpreter"
            },
            plugins_model: {
                icon: ef.oV,
                activeIcon: ef.Z8,
                name: "Plugins"
            }
        };
        function aP() {
            var e = (0,
            rd.OX)()
              , t = (0,
            rd.B9)()
              , n = (0,
            ey.kP)().session
              , r = (0,
            nA.BT)()
              , a = (0,
            eI.Fl)()
              , i = aT().modelSwitcherDisclaimer
              , o = (0,
            P.hz)()
              , s = (null == n ? void 0 : n.user) != null && (0,
            ey.yl)(n.user)
              , l = (0,
            rd.B8)()
              , u = l.enabledModelsInCategoriesById
              , c = l.enabledModelsNotInCategoriesById;
            return (0,
            M.useMemo)(function() {
                var n = []
                  , l = !0
                  , d = !1
                  , f = void 0;
                try {
                    for (var h, g = e[Symbol.iterator](); !(l = (h = g.next()).done); l = !0) {
                        var m = h.value;
                        if (u.has(m.default_model)) {
                            var p = aN[m.category] || {}
                              , v = r === m.default_model
                              , x = t.get(m.default_model)
                              , b = v ? [] : function(e, t, n, r, a) {
                                var i = e.isBrowsingEnabled
                                  , o = e.isPluginsEnabled
                                  , s = e.isCodeInterpreterEnabled
                                  , l = [];
                                if (i && null != n.browsing_model && r.has(n.browsing_model)) {
                                    var u = aI.browsing_model;
                                    l.push(aS(a.get(n.browsing_model), {
                                        icon: u.icon,
                                        name: t.has(er.oQ) ? (0,
                                        w.jsxs)("span", {
                                            children: ["Browse with", " ", (0,
                                            w.jsx)(ef.ZP, {
                                                icon: ef.jE,
                                                className: "-mt-[3px] inline-block"
                                            }), " ", "Bing"]
                                        }) : u.name,
                                        disabled: t.has("browsing_disabled"),
                                        activeIcon: u.activeIcon
                                    }))
                                }
                                if (s && null != n.code_interpreter_model && r.has(n.code_interpreter_model)) {
                                    var c = aI.code_interpreter_model;
                                    l.push(aS(a.get(n.code_interpreter_model), {
                                        icon: c.icon,
                                        name: c.name,
                                        activeIcon: c.activeIcon
                                    }))
                                }
                                if (o && null != n.plugins_model && r.has(n.plugins_model)) {
                                    var d = aI.plugins_model;
                                    l.push(aS(a.get(n.plugins_model), {
                                        icon: d.icon,
                                        name: d.name,
                                        disabled: t.has("plugins_disabled"),
                                        activeIcon: d.activeIcon
                                    }))
                                }
                                return l
                            }(a, o, m, u, t);
                            n.push({
                                categoryId: m.category,
                                value: x.id,
                                name: m.human_category_name,
                                description: v ? i : x.description,
                                disclaimer: p.disclaimer,
                                buttonActiveClass: p.buttonActiveClass,
                                buttonHoverClass: p.buttonHoverClass,
                                iconClass: p.iconClass,
                                icon: p.icon,
                                activeIcon: p.activeIcon,
                                options: [aS(x, {
                                    icon: p.icon,
                                    activeIcon: p.activeIcon,
                                    name: "Default"
                                })].concat((0,
                                eT._)(b)),
                                disabled: v,
                                showSelectedValueBelow: !1
                            })
                        }
                    }
                } catch (e) {
                    d = !0,
                    f = e
                } finally {
                    try {
                        l || null == g.return || g.return()
                    } finally {
                        if (d)
                            throw f
                    }
                }
                var y = Array.from(c).map(function(e) {
                    return t.get(e)
                });
                if (y.length > 0 && s) {
                    var j = y[0]
                      , k = aN.other;
                    n.push({
                        categoryId: "other",
                        value: null == j ? void 0 : j.id,
                        name: "Alpha",
                        buttonActiveClass: k.buttonActiveClass,
                        buttonHoverClass: k.buttonHoverClass,
                        options: y.map(function(e) {
                            return aS(e)
                        }),
                        showSelectedValueBelow: !0,
                        icon: k.icon,
                        activeIcon: k.activeIcon
                    })
                }
                return n
            }, [c, s, e, u, r, t, a, o, i])
        }
        function aS(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0,
            b._)({
                value: e.id,
                name: e.title,
                tags: e.tags
            }, t)
        }
        function aZ(e) {
            var t = e.onModelChange
              , n = e.currentModel
              , r = (0,
            N.WS)()
              , a = (0,
            nA.BT)()
              , i = aP()
              , o = (0,
            M.useCallback)(function(e) {
                a !== e && (t(e),
                r(I.s6.toggleModel, {
                    model: e
                }))
            }, [a, r, t]);
            return (0,
            w.jsx)(af, {
                value: null == n ? void 0 : n.id,
                onChange: o,
                items: i
            })
        }
        var aA = n(20485)
          , aR = n(12285)
          , aD = n(40638)
          , aL = n(57526)
          , aF = n(99581)
          , aE = n(30892)
          , aB = n.n(aE)
          , aO = n(7361)
          , aq = n.n(aO);
        function aU(e) {
            var t = e.values
              , n = e.className
              , r = Object.keys(t)
              , a = Object.values(t);
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("flex w-full items-stretch gap-2", n),
                children: [(0,
                w.jsx)("div", {
                    className: "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
                    children: r.map(function(e, t) {
                        return (0,
                        w.jsx)("span", {
                            children: aB()(e)
                        }, t)
                    })
                }), (0,
                w.jsx)("div", {
                    className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
                    children: a.map(function(e, t) {
                        var n = (0,
                        j._)(e, 2)
                          , r = n[0]
                          , a = n[1];
                        return (0,
                        w.jsx)(az, {
                            num: r,
                            max: a
                        }, t)
                    })
                })]
            })
        }
        function az(e) {
            var t = e.num
              , n = e.max
              , r = (0,
            M.useMemo)(function() {
                var e = aq()(Array(n), !1);
                return aq()(e, !0, 0, t)
            }, [n, t]);
            return (0,
            w.jsx)("div", {
                className: "flex w-full gap-1",
                children: r.map(function(e, t) {
                    return (0,
                    w.jsx)("div", {
                        className: (0,
                        q.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"),
                        children: e
                    }, t)
                })
            })
        }
        function aH() {
            var e = (0,
            k._)(["rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]"]);
            return aH = function() {
                return e
            }
            ,
            e
        }
        function aV() {
            var e = (0,
            k._)(["absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]"]);
            return aV = function() {
                return e
            }
            ,
            e
        }
        function aW() {
            var e = (0,
            k._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
            return aW = function() {
                return e
            }
            ,
            e
        }
        function aG() {
            var e = (0,
            k._)(["flex items-center gap-2 truncate"]);
            return aG = function() {
                return e
            }
            ,
            e
        }
        function aQ() {
            var e = (0,
            k._)(["h-6 w-6 shrink-0"]);
            return aQ = function() {
                return e
            }
            ,
            e
        }
        function a$() {
            var e = (0,
            k._)(["absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100"]);
            return a$ = function() {
                return e
            }
            ,
            e
        }
        function aJ() {
            var e = (0,
            k._)(["absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"]);
            return aJ = function() {
                return e
            }
            ,
            e
        }
        var aY = ["confidential", "alpha", "plus"];
        function aX(e) {
            var t = e.selectedOption
              , n = e.onChange
              , r = e.onAction
              , a = e.onOpen
              , i = e.onClose
              , o = e.dropdownRef
              , s = (0,
            y._)(e, ["selectedOption", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , l = (0,
            M.useCallback)(function(e) {
                "string" == typeof e ? null == r || r(e) : n(e)
            }, [n, r]);
            return (0,
            w.jsx)(aR.R, {
                value: t.value,
                onChange: l,
                children: function(e) {
                    var n = e.open;
                    return (0,
                    w.jsx)(a0, (0,
                    b._)({
                        ref: o,
                        selectedLabel: (0,
                        w.jsxs)(w.Fragment, {
                            children: [t.title, t.tags.map(function(e) {
                                return a6(e)
                            }), t.customTags]
                        }),
                        open: n,
                        onOpen: a,
                        onClose: i
                    }, s))
                }
            })
        }
        function aK(e) {
            var t = e.selectedOptions
              , n = e.selectedLabel
              , r = e.onChange
              , a = e.onAction
              , i = e.onOpen
              , o = e.onClose
              , s = e.dropdownRef
              , l = (0,
            y._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , u = (0,
            M.useCallback)(function(e) {
                if (e.some(function(e) {
                    return "string" == typeof e
                })) {
                    var t = e.find(function(e) {
                        return "string" == typeof e
                    });
                    null == a || a(t)
                } else
                    r(e)
            }, [r, a]);
            return (0,
            w.jsx)(aR.R, {
                value: t.map(function(e) {
                    return e.value
                }),
                multiple: !0,
                onChange: u,
                children: function(e) {
                    var r = e.open;
                    return (0,
                    w.jsx)(a0, (0,
                    b._)({
                        ref: s,
                        selectedLabel: n || "".concat(t.length, " selected"),
                        open: r,
                        onOpen: i,
                        onClose: o,
                        multiple: !0
                    }, l))
                }
            })
        }
        var a0 = (0,
        M.forwardRef)(function(e, t) {
            var n = e.name
              , r = e.selectedLabel
              , a = e.open
              , i = e.options
              , o = e.actions
              , s = e.multiple
              , l = e.isLoading
              , u = e.loadingState
              , c = e.header
              , d = e.onOpen
              , f = e.onClose
              , h = e.theme
              , g = (0,
            M.useRef)(null)
              , m = (0,
            M.useRef)(null)
              , p = (0,
            ea.oc)();
            (0,
            M.useImperativeHandle)(t, function() {
                return {
                    open: function() {
                        if (!a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    },
                    close: function() {
                        if (a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    }
                }
            }, [a]);
            var v = l ? u || (0,
            w.jsx)("div", {
                className: "flex h-[42px] items-center justify-center",
                children: (0,
                w.jsx)(eM.Z, {})
            }) : (0,
            w.jsxs)(w.Fragment, {
                children: [c, (0,
                w.jsxs)(aR.R.Options, {
                    className: "overflow-auto",
                    children: [i.map(function(e, t) {
                        return (0,
                        w.jsx)(a1, {
                            value: e.value,
                            disabled: e.disabled,
                            theme: h,
                            children: function(t) {
                                var n = t.selected
                                  , r = t.active;
                                return (0,
                                w.jsxs)(w.Fragment, {
                                    children: [(0,
                                    w.jsxs)(ir, {
                                        children: [e.imageUrl && (0,
                                        w.jsx)(ia, {
                                            children: (0,
                                            w.jsx)(eB, {
                                                url: e.imageUrl,
                                                name: e.title,
                                                size: "100%"
                                            })
                                        }), (0,
                                        w.jsxs)("span", {
                                            className: (0,
                                            q.Z)(n && !s && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                            children: [e.title, e.tags.map(function(e) {
                                                return a6(e)
                                            }), e.customTags]
                                        })]
                                    }), s && !e.disabled ? (0,
                                    w.jsx)(a3, {
                                        theme: h,
                                        selected: n
                                    }) : n && (0,
                                    w.jsx)(a2, {
                                        theme: h,
                                        icon: "mini" === h ? ef.HQ : X.UgA
                                    }), e.disabled && (0,
                                    w.jsx)(a2, {
                                        theme: h,
                                        icon: aL.Z,
                                        className: "text-red-700 dark:text-red-500"
                                    }), r && p && (0,
                                    aF.createPortal)((0,
                                    w.jsx)(a4, {
                                        option: e,
                                        dropdownRef: m
                                    }), document.body)]
                                })
                            }
                        }, t)
                    }), null == o ? void 0 : o.map(function(e, t) {
                        return (0,
                        w.jsx)(a1, {
                            value: e.id,
                            theme: h,
                            children: function() {
                                return (0,
                                w.jsxs)(w.Fragment, {
                                    children: [(0,
                                    w.jsx)("div", {
                                        className: "text-gray-800 dark:text-gray-100",
                                        children: e.label
                                    }), (0,
                                    w.jsx)(a2, {
                                        theme: h,
                                        icon: e.icon
                                    })]
                                })
                            }
                        }, t)
                    })]
                })]
            });
            return (0,
            w.jsxs)("div", {
                className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                children: [(0,
                w.jsxs)(aR.R.Button, {
                    ref: g,
                    onClick: a ? f : d,
                    className: (0,
                    q.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === h ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"),
                    children: ["mini" !== h && (0,
                    w.jsx)(aR.R.Label, {
                        className: "block text-xs text-gray-700 dark:text-gray-500",
                        children: n
                    }), (0,
                    w.jsx)("span", {
                        className: "inline-flex w-full truncate",
                        children: (0,
                        w.jsx)("span", {
                            className: "flex h-6 items-center gap-1 truncate",
                            children: r
                        })
                    }), (0,
                    w.jsx)("span", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.bTu,
                            className: " text-gray-400",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0,
                w.jsx)(aD.u, {
                    show: a,
                    as: M.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0,
                    w.jsx)(a7, {
                        ref: m,
                        children: v
                    })
                })]
            })
        });
        function a1(e) {
            var t = e.value
              , n = e.disabled
              , r = e.children
              , a = e.theme;
            return (0,
            w.jsx)(aR.R.Option, {
                className: function(e) {
                    var t = e.active;
                    return (0,
                    q.Z)("mini" === a ? ie : it, t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", n && "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100")
                },
                value: t,
                children: r
            })
        }
        function a2(e) {
            var t = e.icon
              , n = e.className
              , r = e.theme;
            return (0,
            w.jsx)("mini" === r ? ii : io, {
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: t,
                    className: (0,
                    q.Z)("h-5 w-5", n),
                    "aria-hidden": "true"
                })
            })
        }
        function a3(e) {
            var t = e.selected
              , n = e.disabled;
            return "mini" === e.theme ? (0,
            w.jsxs)(ii, {
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: t ? ef.HQ : ef.i9,
                    className: "h-5 w-5 text-blue-600",
                    strokeWidth: t ? 2.5 : 2
                }), !t && (0,
                w.jsx)(ef.ZP, {
                    icon: ef.nQ,
                    className: (0,
                    q.Z)("absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity", !n && "group-hover:opacity-100")
                })]
            }) : (0,
            w.jsx)(io, {
                children: (0,
                w.jsx)("div", {
                    className: (0,
                    q.Z)("flex h-6 w-6 items-center justify-center rounded-full border transition-colors", t ? "border-transparent bg-green-600 text-white" : "border-black/5 dark:border-white/20"),
                    "aria-hidden": "true",
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.UgA,
                        className: (0,
                        q.Z)("h-3 w-3 transition-opacity", t && "opacity-100", !t && "opacity-0", !t && !n && "group-hover:opacity-50"),
                        strokeWidth: t ? 2.5 : 2
                    })
                })
            })
        }
        function a5(e) {
            var t = e.showCheckbox
              , n = e.theme;
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("mini" === n ? ie : it, "cursor-auto"),
                children: [(0,
                w.jsxs)(ir, {
                    children: [(0,
                    w.jsx)(ia, {
                        children: (0,
                        w.jsx)("div", {
                            className: "h-full w-full rounded-sm bg-gray-200"
                        })
                    }), (0,
                    w.jsx)("div", {
                        className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
                    })]
                }), t && (0,
                w.jsx)(a3, {
                    theme: n,
                    selected: !1,
                    disabled: !0
                })]
            })
        }
        function a4(e) {
            var t = e.option
              , n = e.dropdownRef
              , r = (0,
            j._)((0,
            M.useState)(), 2)
              , a = r[0]
              , i = r[1];
            (0,
            M.useEffect)(function() {
                var e = function() {
                    if (n.current) {
                        var e = n.current.getBoundingClientRect();
                        i({
                            top: e.top,
                            left: e.left - 260,
                            minHeight: e.height
                        })
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, [n]);
            var o = t.value.properties
              , s = (0,
            M.useMemo)(function() {
                return o ? (0,
                w.jsx)(aU, {
                    values: o,
                    className: "mt-auto"
                }) : null
            }, [o]);
            return a ? (0,
            w.jsxs)(a9, {
                style: {
                    width: 260,
                    minHeight: a.minHeight,
                    top: a.top,
                    left: a.left
                },
                children: [t.disabled && (0,
                w.jsx)(ef.ZP, {
                    icon: aL.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500"
                }), t.imageUrl && (0,
                w.jsx)(eB, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70
                }), (0,
                w.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [t.title, " ", t.tags.map(function(e) {
                        return a6(e)
                    }), " ", t.customTags]
                }), (0,
                w.jsx)("div", {
                    className: "whitespace-pre-line text-xs",
                    children: t.description
                }), !t.disabled && s]
            }) : null
        }
        var a6 = function(e) {
            return aY.includes(e) && (0,
            w.jsx)("span", {
                className: (0,
                q.Z)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "alpha" === e && "bg-blue-200 text-blue-500", "plus" === e && "bg-yellow-200 text-yellow-900"),
                children: e
            }, e)
        }
          , a8 = T.Z.div(aH())
          , a7 = (0,
        T.Z)(a8)(aV())
          , a9 = (0,
        T.Z)(a8)(aW())
          , ie = "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20"
          , it = "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20"
          , ir = T.Z.span(aG())
          , ia = T.Z.span(aQ())
          , ii = T.Z.span(a$())
          , io = T.Z.span(aJ())
          , is = [["www.klarna.com", "server.shop.app"], ["apim.expedia.com", "kayak.com"], ["www.redfin.com", "plugins.zillow.com"], ["instacart.com", "api.tasty.co"]]
          , il = "oai/enabledPluginIds"
          , iu = (0,
        Z.ZP)(function() {
            var e = Array.from(new Set(eg.m.getItem(il)));
            return {
                enabledPluginIds: new Set(e.splice(0, 3))
            }
        });
        function ic() {
            var e = nT().installedPlugins
              , t = iu().enabledPluginIds;
            return (0,
            M.useMemo)(function() {
                return e.filter(function(e) {
                    return t.has(e.id)
                })
            }, [t, e])
        }
        function id(e) {
            e.length > 3 || iu.setState(function() {
                return eg.m.setItem(il, e),
                {
                    enabledPluginIds: new Set(e)
                }
            })
        }
        function ih(e) {
            iu.setState(function(t) {
                if (t.enabledPluginIds.size >= 3)
                    return t;
                var n = (0,
                eT._)(t.enabledPluginIds).concat([e]);
                return eg.m.setItem(il, n),
                {
                    enabledPluginIds: new Set(n)
                }
            })
        }
        function ig() {
            var e = (0,
            k._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
            return ig = function() {
                return e
            }
            ,
            e
        }
        var im = M.forwardRef(function(e, t) {
            var n = e.name
              , r = e.placeholder
              , a = e.type
              , i = e.displayName
              , o = e.onChange
              , s = e.onBlur
              , l = e.value
              , u = e.saveOnBlur
              , c = e.icon
              , d = e.onInputIconClick
              , f = e.className
              , h = e.autoComplete
              , g = e.autoFocus
              , m = e.onPressEnter
              , p = (0,
            j._)((0,
            M.useState)(l), 2)
              , v = p[0]
              , x = p[1]
              , y = (0,
            M.useCallback)(function(e) {
                null == s || s(e),
                u && x(e.target.value)
            }, [s, u])
              , k = (0,
            M.useCallback)(function(e) {
                null == o || o(e),
                u && x(e.target.value)
            }, [o, u])
              , C = (0,
            M.useCallback)(function(e) {
                "Enter" === e.key && m && (e.preventDefault(),
                m())
            }, [m]);
            (0,
            M.useEffect)(function() {
                x(l)
            }, [l]);
            var _ = (0,
            b._)({}, u ? {} : {
                value: l
            }, u ? {
                value: v
            } : {});
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", f),
                children: [(0,
                w.jsx)("label", {
                    htmlFor: n,
                    className: "block text-xs font-medium text-gray-900 dark:text-gray-100",
                    children: i
                }), (0,
                w.jsxs)("div", {
                    className: (0,
                    q.Z)(i && "mt-1", "relative"),
                    children: [(0,
                    w.jsx)("input", (0,
                    b._)({
                        ref: t,
                        type: a,
                        name: n,
                        id: n,
                        className: (0,
                        q.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", c && "pr-6"),
                        placeholder: r,
                        onBlur: y,
                        onChange: k,
                        onKeyDown: C,
                        autoComplete: h,
                        autoFocus: g
                    }, _)), c && (0,
                    w.jsx)(ip, {
                        onClick: d,
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: c
                        })
                    })]
                })]
            })
        })
          , ip = T.Z.button(ig())
          , iv = n(5759)
          , ix = n(13451);
        function ib(e) {
            var t = e.onSuccess
              , n = e.onError
              , r = e.onSettled
              , a = (0,
            C.NL)()
              , i = (0,
            ix.D)(en.ZP.updatePluginUserSettings.bind(en.ZP), {
                onSuccess: function(e) {
                    iy(e, a, ["installedAip"]),
                    ij(e, a, ["approvedAip"]),
                    t(e)
                },
                onError: n,
                onSettled: r
            }).mutate;
            return (0,
            M.useCallback)(function(e) {
                i({
                    pluginId: e,
                    isInstalled: !0
                })
            }, [i])
        }
        function iy(e, t, n) {
            t.setQueryData(n, function(t) {
                var n = (0,
                eT._)((null == t ? void 0 : t.items) || [])
                  , r = n.findIndex(function(t) {
                    return t.id === e.id
                });
                return -1 !== r ? n[r] = e : n.push(e),
                {
                    count: n.length,
                    items: n
                }
            })
        }
        function ij(e, t, n) {
            t.setQueryData(n, function(t) {
                var n = (0,
                eT._)((null == t ? void 0 : t.items) || [])
                  , r = n.findIndex(function(t) {
                    return t.id === e.id
                });
                return -1 !== r && (n[r] = e),
                {
                    count: n.length,
                    items: n
                }
            })
        }
        function ik(e) {
            var t = e.manifest.auth;
            if ("oauth" !== t.type || !e.oauth_client_id)
                return null;
            var n = new URLSearchParams({
                response_type: "code",
                client_id: e.oauth_client_id,
                redirect_uri: "".concat(window.location.origin, "/aip/").concat(e.id, "/oauth/callback"),
                scope: t.scope
            });
            return t.client_url.includes("slack.com") && (n.delete("scope"),
            n.append("user_scope", t.scope)),
            "".concat(t.client_url, "?").concat(n)
        }
        function iw() {
            var e, t = (0,
            j._)((0,
            M.useState)(!1), 2), n = t[0], r = t[1];
            return {
                fetchManifestAndSpec: (0,
                M.useCallback)((e = (0,
                em._)(function(e) {
                    var t, n, a, i, o, s, l, u, c;
                    return (0,
                    ev.Jh)(this, function(d) {
                        switch (d.label) {
                        case 0:
                            t = e.domain,
                            n = e.manifestAccessToken,
                            a = e.onSuccess,
                            i = e.onError,
                            o = nQ(t),
                            d.label = 1;
                        case 1:
                            if (d.trys.push([1, 10, 11, 12]),
                            r(!0),
                            !(null != o))
                                return [3, 3];
                            return [4, function(e) {
                                return n$.apply(this, arguments)
                            }(o)];
                        case 2:
                            if (void 0 === (s = d.sent()))
                                return [2];
                            return a({
                                domain: o,
                                scrapeManifestResponse: {
                                    plugin: s.plugin,
                                    manifest_validation_info: s.manifest_validation_info
                                },
                                apiValidationInfo: s.api_validation_info
                            }),
                            [3, 9];
                        case 3:
                            return [4, en.ZP.scrapePluginManifest({
                                domain: t,
                                manifestAccessToken: n
                            })];
                        case 4:
                            if (!(l = d.sent()).plugin)
                                return [3, 8];
                            d.label = 5;
                        case 5:
                            return d.trys.push([5, 7, , 8]),
                            [4, en.ZP.getPluginApi({
                                id: l.plugin.id
                            })];
                        case 6:
                            return u = d.sent().api_validation_info,
                            [3, 8];
                        case 7:
                            return d.sent(),
                            [3, 8];
                        case 8:
                            a({
                                domain: t,
                                scrapeManifestResponse: l,
                                apiValidationInfo: u,
                                manifestAccessToken: n
                            }),
                            d.label = 9;
                        case 9:
                            return [3, 12];
                        case 10:
                            return c = d.sent(),
                            i(null != o ? c : void 0),
                            [3, 12];
                        case 11:
                            return r(!1),
                            [7];
                        case 12:
                            return [2]
                        }
                    })
                }),
                function(t) {
                    return e.apply(this, arguments)
                }
                ), []),
                isLoading: n
            }
        }
        function iC(e) {
            var t = e.plugin
              , n = t.manifest.name_for_human;
            return (0,
            w.jsxs)("div", {
                className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
                children: [(0,
                w.jsx)(eB, {
                    url: t.manifest.logo_url,
                    name: n,
                    size: 32,
                    className: "flex-shrink-0"
                }), (0,
                w.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [(0,
                    w.jsx)("h2", {
                        className: "align-top text-base font-medium",
                        children: n
                    }), (0,
                    w.jsx)("div", {
                        className: "text-sm",
                        children: t.manifest.description_for_human
                    })]
                })]
            })
        }
        function i_() {
            var e = (0,
            k._)(["mt-4 flex flex-col gap-4"]);
            return i_ = function() {
                return e
            }
            ,
            e
        }
        function iM() {
            var e = (0,
            k._)(["text-sm text-red-500"]);
            return iM = function() {
                return e
            }
            ,
            e
        }
        var iT = T.Z.div(i_())
          , iN = T.Z.div(iM());
        function iI(e) {
            var t = e.manifestValidationInfo
              , n = (0,
            y._)(e, ["manifestValidationInfo"])
              , r = t.manifest_dict
              , a = t.warnings
              , i = t.errors;
            return (0,
            w.jsx)(iZ, (0,
            b._)({
                name: "manifest",
                content: r,
                warnings: a,
                errors: i
            }, n))
        }
        function iP(e) {
            var t = e.apiValidationInfo
              , n = (0,
            y._)(e, ["apiValidationInfo"])
              , r = t.openapi_spec_dict
              , a = t.warnings
              , i = t.errors;
            return (0,
            w.jsx)(iZ, (0,
            b._)({
                name: "OpenAPI spec",
                content: r,
                warnings: a,
                errors: i
            }, n))
        }
        function iS(e) {
            var t = e.apiValidationInfo
              , n = (0,
            y._)(e, ["apiValidationInfo"])
              , r = t.api_typescript;
            return r ? (0,
            w.jsx)(iA, (0,
            b._)({
                text: "Prompt for ChatGPT",
                content: r
            }, n)) : null
        }
        function iZ(e) {
            var t = e.name
              , n = e.content
              , r = e.warnings
              , a = e.errors
              , i = (0,
            y._)(e, ["name", "content", "warnings", "errors"])
              , o = r && r.length > 0
              , s = a && a.length > 0
              , l = "Validated ".concat(t)
              , u = (0,
            w.jsx)(ef.ZP, {
                icon: X.UgA,
                className: "text-green-500"
            });
            return s ? (l = "Errors in ".concat(t),
            u = (0,
            w.jsx)(ef.ZP, {
                icon: X.q5L,
                className: "text-red-500"
            })) : o && (l = "Warnings in ".concat(t),
            u = (0,
            w.jsx)(ef.ZP, {
                icon: X.bcx,
                className: "text-yellow-500"
            })),
            (0,
            w.jsx)(iA, (0,
            b._)({
                icon: u,
                text: l,
                content: n,
                warnings: r,
                errors: a
            }, i))
        }
        function iA(e) {
            var t = e.icon
              , n = e.text
              , r = e.content
              , a = e.warnings
              , i = e.errors
              , o = e.expanded
              , s = e.onChangeExpanded
              , l = (0,
            j._)((0,
            M.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = null != o ? o : u
              , f = (0,
            M.useCallback)(function() {
                s ? s(!d) : c(function(e) {
                    return !e
                })
            }, [d, s]);
            return (0,
            w.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [(0,
                w.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [t && (0,
                    w.jsx)("div", {
                        children: t
                    }), (0,
                    w.jsx)("div", {
                        children: n
                    }), (0,
                    w.jsx)("div", {
                        role: "button",
                        className: "cursor-pointer text-gray-500 hover:text-gray-700",
                        onClick: f,
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: d ? X.rH8 : X.bTu
                        })
                    })]
                }), d && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsxs)("div", {
                        className: "flex flex-col gap-2 font-semibold",
                        children: [i && i.map(function(e, t) {
                            return (0,
                            w.jsx)("div", {
                                className: "text-red-500",
                                children: e
                            }, t)
                        }), a && a.map(function(e, t) {
                            return (0,
                            w.jsx)("div", {
                                className: "text-yellow-500",
                                children: e
                            }, t)
                        })]
                    }), r && (0,
                    w.jsx)("pre", {
                        className: "overflow-auto whitespace-pre-wrap text-xs",
                        children: "string" == typeof r ? r : JSON.stringify(r, null, 2)
                    })]
                })]
            })
        }
        function iR(e) {
            var t = e.onClickInstall
              , n = e.onInstallLocalhost
              , r = e.onClose
              , a = (0,
            j._)((0,
            M.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            j._)((0,
            M.useState)(!1), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            M.useCallback)(function(e) {
                o(e)
            }, [])
              , g = (0,
            M.useCallback)(function() {
                f(!0)
            }, []);
            return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            w.jsx)(iB, {
                plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
                onClickInstall: t,
                onClose: r
            }) : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            w.jsx)(iE, {
                plugin: i.scrapeManifestResponse.plugin,
                manifestAccessToken: i.manifestAccessToken,
                verificationTokens: l,
                onReadyToInstall: g,
                onClose: r
            }) : i ? (0,
            w.jsx)(iF, {
                loadManifestResult: i,
                onRefetch: h,
                onSubmitAuthInfo: u,
                onReadyToInstall: g,
                onInstallLocalhost: n,
                onClose: r
            }) : (0,
            w.jsx)(iD, {
                onFetch: h,
                onClose: r
            })
        }
        function iD(e) {
            var t = e.onFetch
              , n = e.onClose
              , r = (0,
            ey.kP)().session
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)("bearer"), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            j._)((0,
            M.useState)(), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            M.useRef)(null)
              , g = (0,
            M.useRef)(null)
              , m = iw()
              , p = m.fetchManifestAndSpec
              , v = m.isLoading;
            (0,
            M.useEffect)(function() {
                var e;
                null === (e = h.current) || void 0 === e || e.focus()
            }, []);
            var x = (0,
            M.useCallback)(function() {
                o(function(e) {
                    return !e
                })
            }, [])
              , b = (0,
            M.useCallback)(function(e) {
                u(e.target.value)
            }, [])
              , y = (0,
            M.useCallback)((0,
            em._)(function() {
                var e, n, r;
                return (0,
                ev.Jh)(this, function(a) {
                    return (r = null === (e = h.current) || void 0 === e ? void 0 : e.value) ? (p({
                        domain: r,
                        manifestAccessToken: i ? {
                            authorization_type: l,
                            token: (null === (n = g.current) || void 0 === n ? void 0 : n.value) || ""
                        } : void 0,
                        onSuccess: t,
                        onError: function(e) {
                            return f((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                        }
                    }),
                    [2]) : (f("Please provide a domain."),
                    [2])
                })
            }), [p, t, l, i]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: "Enter your website domain",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Find manifest file",
                    color: "primary",
                    onClick: y,
                    loading: v
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [(0,
                    w.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/getting-started",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: "Visit our documentation to learn how to build a plugin."
                    }), (0,
                    w.jsxs)(iv.Z, {
                        icon: "\uD83D\uDEA8",
                        children: ["If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ", "plugin's", " manifest, your plugin will be removed from the store, and you will need to", " ", (0,
                        w.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            children: "resubmit it for review"
                        }), "."]
                    }), (0,
                    w.jsx)(im, {
                        ref: h,
                        name: "url",
                        displayName: "Domain",
                        placeholder: "ex: openai.com or localhost:3000",
                        onPressEnter: y,
                        autoFocus: !0
                    }), (null == r ? void 0 : r.user) != null && (0,
                    ey.yl)(r.user) && (0,
                    w.jsxs)(w.Fragment, {
                        children: [(0,
                        w.jsxs)("div", {
                            role: "button",
                            className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                            onClick: x,
                            children: [(0,
                            w.jsx)("div", {
                                children: "My file requires authentication"
                            }), (0,
                            w.jsx)(ef.ZP, {
                                icon: i ? X.rH8 : X.bTu
                            })]
                        }), i && (0,
                        w.jsxs)(w.Fragment, {
                            children: [(0,
                            w.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                w.jsx)("div", {
                                    children: "Authentication type"
                                }), (0,
                                w.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0,
                                    w.jsx)(iL, {
                                        label: "Bearer",
                                        value: "bearer",
                                        checked: "bearer" === l,
                                        onChange: b
                                    }), (0,
                                    w.jsx)(iL, {
                                        label: "Basic",
                                        value: "basic",
                                        checked: "basic" === l,
                                        onChange: b
                                    })]
                                })]
                            }), (0,
                            w.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                w.jsx)("div", {
                                    children: "Access token"
                                }), (0,
                                w.jsx)(im, {
                                    ref: g,
                                    name: "manifestToken",
                                    onPressEnter: y
                                })]
                            })]
                        })]
                    }), d && (0,
                    w.jsx)(iN, {
                        children: d
                    })]
                })
            })
        }
        function iL(e) {
            var t = e.label
              , n = e.value
              , r = e.checked
              , a = e.onChange;
            return (0,
            w.jsxs)("label", {
                className: "flex items-center gap-2",
                children: [(0,
                w.jsx)("input", {
                    name: "manifestAuthType",
                    type: "radio",
                    value: n,
                    checked: r,
                    onChange: a,
                    className: "text-green-600 focus:ring-green-600"
                }), t]
            })
        }
        function iF(e) {
            var t = e.loadManifestResult
              , n = e.onRefetch
              , r = e.onSubmitAuthInfo
              , a = e.onReadyToInstall
              , i = e.onInstallLocalhost
              , o = e.onClose
              , s = t.domain
              , l = t.manifestAccessToken
              , u = t.scrapeManifestResponse
              , c = t.apiValidationInfo
              , d = u.plugin
              , f = u.manifest_validation_info
              , h = (0,
            j._)((0,
            M.useState)(), 2)
              , g = h[0]
              , m = h[1]
              , p = (0,
            j._)((0,
            M.useState)(!1), 2)
              , v = p[0]
              , x = p[1]
              , b = (0,
            M.useRef)(null)
              , y = (0,
            M.useRef)(null)
              , k = (0,
            M.useRef)(null)
              , _ = iw()
              , T = _.fetchManifestAndSpec
              , N = _.isLoading
              , I = (0,
            C.NL)()
              , P = d && nG(d)
              , S = (null == d ? void 0 : d.manifest.auth.type) === "service_http"
              , Z = (null == d ? void 0 : d.manifest.auth.type) === "oauth"
              , A = f.errors && f.errors.length > 0 || (null == c ? void 0 : c.errors) && (null == c ? void 0 : c.errors.length) > 0
              , R = (0,
            M.useCallback)((0,
            em._)(function() {
                var e, t, u, c, f;
                return (0,
                ev.Jh)(this, function(h) {
                    switch (h.label) {
                    case 0:
                        if (!A)
                            return [3, 1];
                        return T({
                            domain: s,
                            manifestAccessToken: l,
                            onSuccess: n,
                            onError: function(e) {
                                return m((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                            }
                        }),
                        [3, 15];
                    case 1:
                        if (!P)
                            return [3, 2];
                        return iy(d, I, ["installedAip"]),
                        i(d),
                        [3, 15];
                    case 2:
                        if (!S)
                            return [3, 8];
                        if (!(null === (e = b.current) || void 0 === e ? void 0 : e.value))
                            return m("Please provide your service access token."),
                            [2];
                        h.label = 3;
                    case 3:
                        return h.trys.push([3, 5, 6, 7]),
                        x(!0),
                        [4, en.ZP.setPluginServiceHttpToken({
                            id: d.id,
                            serviceAccessToken: b.current.value
                        })];
                    case 4:
                        return r(h.sent().verification_tokens),
                        [3, 7];
                    case 5:
                        return h.sent(),
                        m("Error setting access token."),
                        [3, 7];
                    case 6:
                        return x(!1),
                        [7];
                    case 7:
                        return [3, 15];
                    case 8:
                        if (!Z)
                            return [3, 14];
                        if (c = null === (t = y.current) || void 0 === t ? void 0 : t.value,
                        f = null === (u = k.current) || void 0 === u ? void 0 : u.value,
                        !c || !f)
                            return m("Please provide your OAuth credentials."),
                            [2];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 11, 12, 13]),
                        [4, en.ZP.setPluginOAuthClientCredentials({
                            id: d.id,
                            clientId: y.current.value,
                            clientSecret: k.current.value
                        })];
                    case 10:
                        return r(h.sent().verification_tokens),
                        [3, 13];
                    case 11:
                        return h.sent(),
                        m("Error setting OAuth credentials."),
                        [3, 13];
                    case 12:
                        return x(!1),
                        [7];
                    case 13:
                        return [3, 15];
                    case 14:
                        d ? a(d) : o(),
                        h.label = 15;
                    case 15:
                        return [2]
                    }
                })
            }), [S, Z, d, s, l, A, P, I, T, n, r, a, i, o]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: o,
                type: "success",
                title: "Found plugin",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: A ? "Refetch manifest" : P ? "Install localhost plugin" : "Next",
                    color: "primary",
                    onClick: R,
                    loading: v || N
                }),
                secondaryButton: (A || S || Z) && (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: o
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [(0,
                    w.jsx)(iI, {
                        manifestValidationInfo: f
                    }), c && (0,
                    w.jsx)(iP, {
                        apiValidationInfo: c
                    }), d && (0,
                    w.jsx)(iC, {
                        plugin: d
                    }), S && !A && (0,
                    w.jsxs)("div", {
                        children: [(0,
                        w.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your service access token:"
                        }), (0,
                        w.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            w.jsx)(im, {
                                ref: b,
                                name: "serviceToken",
                                placeholder: "Service access token",
                                autoComplete: "off",
                                onPressEnter: R,
                                autoFocus: !0
                            })
                        })]
                    }), Z && !A && (0,
                    w.jsxs)("div", {
                        children: [(0,
                        w.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your OAuth credentials:"
                        }), (0,
                        w.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            w.jsx)(im, {
                                ref: y,
                                name: "clientId",
                                placeholder: "Client ID",
                                autoComplete: "off",
                                onPressEnter: R,
                                autoFocus: !0
                            })
                        }), (0,
                        w.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            w.jsx)(im, {
                                ref: k,
                                type: "password",
                                name: "clientSecret",
                                placeholder: "Client secret",
                                autoComplete: "off",
                                onPressEnter: R
                            })
                        })]
                    }), g && (0,
                    w.jsx)(iN, {
                        children: g
                    })]
                })
            })
        }
        function iE(e) {
            var t = e.plugin
              , n = e.manifestAccessToken
              , r = e.verificationTokens
              , a = e.onReadyToInstall
              , i = e.onClose
              , o = (0,
            j._)((0,
            M.useState)(), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            j._)((0,
            M.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            M.useCallback)((0,
            em._)(function() {
                var e, i;
                return (0,
                ev.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, 3, 4]),
                        d(!0),
                        [4, en.ZP.scrapePluginManifest({
                            domain: t.domain,
                            manifestAccessToken: n
                        })];
                    case 1:
                        if (e = o.sent().plugin) {
                            for (var s in i = "service_http" === e.manifest.auth.type || "oauth" === e.manifest.auth.type ? e.manifest.auth.verification_tokens : {},
                            r)
                                if (r[s] !== i[s])
                                    return l('Please add the "'.concat(s, '" token to your manifest file.')),
                                    [2];
                            a(e)
                        } else
                            l("Error creating plugin.");
                        return [3, 4];
                    case 2:
                        return o.sent(),
                        l("Error creating plugin."),
                        [3, 4];
                    case 3:
                        return d(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }), [t, n, r, a]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: i,
                type: "success",
                title: "Add verification token",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Verify tokens",
                    color: "primary",
                    onClick: f,
                    loading: c
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "I'll add the tokens later",
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [(0,
                    w.jsx)(iC, {
                        plugin: t
                    }), (0,
                    w.jsx)("div", {
                        className: "text-sm",
                        children: "Add the following verification tokens to your manifest file:"
                    }), (0,
                    w.jsx)("pre", {
                        className: "text-sm",
                        children: JSON.stringify(r, null)
                    }), s && (0,
                    w.jsx)(iN, {
                        children: s
                    })]
                })
            })
        }
        function iB(e) {
            var t = e.plugin
              , n = e.onClickInstall
              , r = e.onClose
              , a = (0,
            M.useCallback)(function() {
                n(t)
            }, [t, n]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Ready to install",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Install for me",
                    color: "primary",
                    onClick: a
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Install later",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                w.jsx)(iT, {
                    children: (0,
                    w.jsxs)("div", {
                        className: "text-sm",
                        children: ["Your unverified plugin can now be installed by", " ", (0,
                        w.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "up to 15 developers"
                        }), ". Once ", "you're", " ready to make your plugin available to everyone, you can", " ", (0,
                        w.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "submit your plugin for review"
                        }), "."]
                    })
                })
            })
        }
        function iO(e) {
            var t = e.onConfirm
              , n = e.onClose;
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Continue",
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                w.jsx)(iT, {
                    children: (0,
                    w.jsx)(iv.I, {
                        children: (0,
                        w.jsx)(iv.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding."
                        })
                    })
                })
            })
        }
        function iq(e) {
            var t = e.plugin
              , n = e.onInstall
              , r = e.onClose
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)(t), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            M.useCallback)(function() {
                o(!0)
            }, []);
            return l ? i ? (0,
            w.jsx)(iz, {
                plugin: l,
                onInstall: n,
                onClose: r
            }) : (0,
            w.jsx)(iO, {
                onConfirm: c,
                onClose: r
            }) : (0,
            w.jsx)(iU, {
                onLoad: u,
                onClose: r
            })
        }
        function iU(e) {
            var t = e.onLoad
              , n = e.onClose
              , r = (0,
            M.useRef)(null)
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)(), 2)
              , l = s[0]
              , u = s[1];
            (0,
            M.useEffect)(function() {
                setTimeout(function() {
                    var e;
                    null === (e = r.current) || void 0 === e || e.focus()
                }, 50)
            }, []);
            var c = (0,
            M.useCallback)((0,
            em._)(function() {
                var e, n, a;
                return (0,
                ev.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        if (!(n = null === (e = r.current) || void 0 === e ? void 0 : e.value))
                            return u("Please provide a URL."),
                            [2];
                        if (nQ(n))
                            return u('To add a localhost plugin, please go to "Develop your own plugin."'),
                            [2];
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, 4, 5]),
                        o(!0),
                        [4, en.ZP.getPluginByDomain({
                            domain: n
                        })];
                    case 2:
                        return (a = i.sent()) ? t(a) : u("That plugin doesn't exist."),
                        [3, 5];
                    case 3:
                        return i.sent(),
                        u("Couldn't find plugin."),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [t, o, u]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: "Install an unverified plugin",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Find plugin",
                    color: "primary",
                    onClick: c,
                    loading: i
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [(0,
                    w.jsx)("div", {
                        children: "Please provide the website domain of the unverified plugin you'd like to install."
                    }), (0,
                    w.jsx)(im, {
                        ref: r,
                        name: "url",
                        placeholder: "openai.com",
                        onPressEnter: c
                    }), l && (0,
                    w.jsx)(iN, {
                        children: l
                    })]
                })
            })
        }
        function iz(e) {
            var t = e.plugin
              , n = e.onInstall
              , r = e.onClose
              , a = (0,
            j._)((0,
            M.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)(!1), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            M.useRef)(null)
              , d = ib({
                onSuccess: function(e) {
                    n(e),
                    r()
                },
                onError: function(e) {
                    o("Couldn't install plugin.")
                }
            })
              , f = t.manifest.name_for_human
              , h = "user_http" === t.manifest.auth.type
              , g = "oauth" === t.manifest.auth.type
              , m = (0,
            M.useCallback)((0,
            em._)(function() {
                var e, n;
                return (0,
                ev.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        if (!g)
                            return [3, 1];
                        return (e = ik(t)) ? window.location.href = e : o("Missing plugin configuration for ".concat(f, ".")),
                        [3, 8];
                    case 1:
                        if (!h)
                            return [3, 7];
                        if (!(null === (n = c.current) || void 0 === n ? void 0 : n.value))
                            return o("Please provide your credentials."),
                            [2];
                        r.label = 2;
                    case 2:
                        return r.trys.push([2, 4, 5, 6]),
                        u(!0),
                        [4, en.ZP.setPluginUserHttpToken({
                            id: t.id,
                            userAccessToken: c.current.value
                        })];
                    case 3:
                        return r.sent(),
                        d(t.id),
                        [3, 6];
                    case 4:
                        return r.sent(),
                        o("Couldn't install plugin."),
                        [3, 6];
                    case 5:
                        return u(!1),
                        [7];
                    case 6:
                        return [3, 8];
                    case 7:
                        try {
                            u(!0),
                            d(t.id)
                        } catch (e) {
                            o("Couldn't install plugin.")
                        } finally {
                            u(!1)
                        }
                        r.label = 8;
                    case 8:
                        return [2]
                    }
                })
            }), [t, f, g, h, d]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: g ? "Log in with ".concat(f) : "Install plugin",
                    color: "primary",
                    onClick: m,
                    loading: l
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [(0,
                    w.jsx)(iC, {
                        plugin: t
                    }), h && (0,
                    w.jsxs)("div", {
                        children: [(0,
                        w.jsx)("div", {
                            className: "text-sm",
                            children: t.manifest.auth.instructions || "Enter your HTTP access token below:"
                        }), (0,
                        w.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            w.jsx)(im, {
                                ref: c,
                                type: "password",
                                name: "token",
                                placeholder: "Enter your credentials",
                                autoComplete: "off",
                                onPressEnter: m
                            })
                        })]
                    }), g && (0,
                    w.jsxs)("div", {
                        children: ["You will be redirected to", " ", (0,
                        w.jsx)("span", {
                            className: "font-medium",
                            children: f
                        }), " to log in."]
                    }), i && (0,
                    w.jsx)(iN, {
                        children: i
                    })]
                })
            })
        }
        var iH = n(95552)
          , iV = n.n(iH)
          , iW = n(14412);
        function iG() {
            var e, t, n = (0,
            _.useRouter)(), r = (0,
            ey.kP)().session, a = (null == r ? void 0 : null === (e = r.user) || void 0 === e ? void 0 : e.idp) === "auth0", i = !!(null == r ? void 0 : null === (t = r.user) || void 0 === t ? void 0 : t.mfa), o = (0,
            j._)((0,
            M.useState)(!1), 2), s = o[0], l = o[1], u = (0,
            M.useCallback)((0,
            em._)(function() {
                var e;
                return (0,
                ev.Jh)(this, function(t) {
                    if (e = new URL(n.asPath,window.location.origin).toString(),
                    !a)
                        throw Error("Only username/password users can enable MFA");
                    if (!r)
                        throw Error("No session found, cannot enable MFA");
                    if ("mocked" === r.authProvider)
                        throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                    return (0,
                    iW.signIn)(r.authProvider, {
                        callbackUrl: e
                    }, (0,
                    b._)({
                        prompt: "login"
                    }, r.authProvider === ey.Ho.OpenAI ? {
                        login_hint: (0,
                        ey.W_)({
                            oai_enforce_mfa: !0,
                            idp: "openai"
                        })
                    } : {
                        oai_enforce_mfa: "true"
                    })),
                    [2]
                })
            }), [n.asPath, r, a]), c = (0,
            M.useCallback)((0,
            em._)(function() {
                var e;
                return (0,
                ev.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        if (!a)
                            throw Error("Only username/password users can disable MFA");
                        if (!r)
                            throw Error("No session found, cannot enable MFA");
                        if ("mocked" === r.authProvider)
                            throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                        return l(!0),
                        [4, en.ZP.deleteMfa()];
                    case 1:
                        return t.sent(),
                        [4, (0,
                        iW.signOut)({
                            redirect: !1,
                            callbackUrl: "/auth/login?next=".concat(encodeURIComponent(n.asPath))
                        })];
                    case 2:
                        return e = t.sent(),
                        l(!1),
                        n.push(e.url),
                        [2]
                    }
                })
            }), [a, n, r]);
            return {
                setupMfa: u,
                isUsernamePassword: a,
                isLoggedInWithMfa: i,
                removeMfa: c,
                isLoading: s
            }
        }
        function iQ(e) {
            var t = e.onClose
              , n = iG().setupMfa;
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Enable two-factor authentication",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Enable two-factor authentication",
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                w.jsx)(iT, {
                    children: (0,
                    w.jsx)(iv.I, {
                        children: (0,
                        w.jsx)(iv.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again."
                        })
                    })
                })
            })
        }
        function i$() {
            var e = (0,
            k._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
            return i$ = function() {
                return e
            }
            ,
            e
        }
        function iJ() {
            var e = (0,
            k._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
            return iJ = function() {
                return e
            }
            ,
            e
        }
        var iY = (m = {},
        (0,
        np._)(m, ea._G.Mobile, 8),
        (0,
        np._)(m, ea._G.Small, 4),
        (0,
        np._)(m, ea._G.Medium, 4),
        (0,
        np._)(m, ea._G.Large, 6),
        (0,
        np._)(m, ea._G.XLarge, 8),
        m);
        (o = p || (p = {}))[o.All = 0] = "All",
        o[o.Installed = 1] = "Installed",
        (s = v || (v = {})).New = "newly_added",
        s.Popular = "most_popular";
        var iX = [{
            id: v.Popular,
            title: "Popular"
        }, {
            id: v.New,
            title: "New"
        }, {
            id: p.All,
            title: "All"
        }, {
            id: p.Installed,
            title: "Installed"
        }];
        function iK(e) {
            var t, n, r, a, i, o, s, l, u, c, d, f, h, g, m = e.onInstallWithAuthRequired, x = e.onClickInstallDeveloper, b = e.onClickDevelop, y = e.onClickAbout, k = e.onClose, C = (0,
            ey.kP)().session, _ = nT(), T = _.installedPlugins, N = _.isLoading, I = (u = (0,
            ey.kP)().session,
            c = (0,
            eI.Fl)().isPluginsAvailable,
            f = (d = (0,
            tv.a)(["approvedAip"], function() {
                return en.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    statuses: ["approved"],
                    accessToken: null == u ? void 0 : u.accessToken
                })
            }, {
                enabled: c && (null == u ? void 0 : u.accessToken) != null,
                onError: function(e) {
                    console.error(e)
                }
            })).data,
            h = d.isLoading,
            (0,
            M.useMemo)(function() {
                var e = f ? f.items.reduce(function(e, t) {
                    var n = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o, s = (null !== (i = t.categories) && void 0 !== i ? i : [])[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                            var l = o.value;
                            null == e[l.id] && (e[l.id] = {
                                id: l.id,
                                title: l.title,
                                items: []
                            }),
                            e[l.id].items.push(t)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return e
                }, {}) : {};
                return {
                    approvedPlugins: f ? f.items : [],
                    approvedPluginsByCategory: e,
                    isLoading: h
                }
            }, [f, h])), S = I.approvedPlugins, Z = I.isLoading, A = I.approvedPluginsByCategory, R = (0,
            M.useMemo)(function() {
                var e = []
                  , t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var a, i = iX[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                        var o, s = a.value;
                        Object.values(v).includes(s.id) ? (null === (o = A[s.id]) || void 0 === o ? void 0 : o.items.length) > 0 && e.push(s) : s.id === p.Installed ? T.length > 0 && e.push(s) : e.push(s)
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
                return e
            }, [T.length, A]), D = (0,
            j._)((0,
            M.useState)(R[0].id), 2), L = D[0], F = D[1], E = function(e, t) {
                for (var n = (0,
                eT._)(e), r = iV()(t), a = n.length - 1; a > 0; a--) {
                    var i, o = Math.floor(r() * (a + 1));
                    i = [n[o], n[a]],
                    n[a] = i[0],
                    n[o] = i[1]
                }
                var s = n.findIndex(function(e) {
                    return "api.openai.com" === e.domain
                });
                if (-1 !== s) {
                    var l = n.splice(s, 1)[0];
                    n.unshift(l)
                }
                return n
            }(i0((0,
            M.useMemo)(function() {
                if (L === p.All)
                    return S;
                if (Object.values(v).includes(L)) {
                    var e, t;
                    return null !== (t = null === (e = A[L]) || void 0 === e ? void 0 : e.items) && void 0 !== t ? t : []
                }
                return []
            }, [S, L, A])), (null == C ? void 0 : null === (g = C.user) || void 0 === g ? void 0 : g.id) || ""), B = i0(T), O = (0,
            P.hz)(), q = iY[(0,
            ea.dQ)()], U = [], z = !1;
            L === p.Installed ? (U = B,
            z = N) : (U = E,
            z = Z);
            var H = (n = (t = {
                items: U,
                numItemsPerPage: q
            }).items,
            r = t.numItemsPerPage,
            i = (a = (0,
            j._)((0,
            M.useState)(0), 2))[0],
            o = a[1],
            s = Math.ceil(n.length / r),
            l = i * r,
            {
                page: i,
                numPages: s,
                pageItems: n.slice(l, l + r),
                goToPage: (0,
                M.useCallback)(function(e) {
                    o(e)
                }, [])
            })
              , V = H.page
              , W = H.numPages
              , G = H.pageItems
              , Q = H.goToPage;
            (0,
            M.useEffect)(function() {
                L === p.Installed && 0 === T.length && (F(R[0].id),
                Q(0))
            }, [L, T, Q, R]),
            (0,
            M.useEffect)(function() {
                Z || F(R[0].id)
            }, [Z]);
            var $ = (0,
            j._)((0,
            M.useState)(!1), 2)
              , J = $[0]
              , Y = $[1];
            return J ? (0,
            w.jsx)(iQ, {
                onClose: function() {
                    Y(!1)
                }
            }) : (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: k,
                type: "success",
                title: "Plugin store",
                size: "custom",
                className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: k
                }),
                children: (0,
                w.jsxs)(iT, {
                    children: [!z && R.length > 1 && (0,
                    w.jsx)("div", {
                        className: "flex flex-wrap gap-3",
                        children: R.map(function(e) {
                            return (0,
                            w.jsx)(i1, {
                                selected: L === e.id,
                                onClick: function() {
                                    F(e.id),
                                    Q(0)
                                },
                                children: e.title
                            }, e.id)
                        })
                    }), (0,
                    w.jsx)(i2, {
                        plugins: G,
                        numSkeletons: q,
                        isLoading: z,
                        onInstallWithAuthRequired: m,
                        onRequestMfa: function() {
                            return Y(!0)
                        }
                    }), (0,
                    w.jsxs)("div", {
                        className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                        children: [(0,
                        w.jsx)("div", {
                            className: "flex flex-1 justify-start max-lg:justify-center",
                            children: W > 1 && (0,
                            w.jsx)(i6, {
                                page: V,
                                numPages: W,
                                goToPage: Q
                            })
                        }), (0,
                        w.jsxs)("div", {
                            className: "flex flex-col items-center gap-2 sm:flex-row",
                            children: [O.has("tools3_dev") && (0,
                            w.jsxs)(w.Fragment, {
                                children: [(0,
                                w.jsx)(i8, {
                                    onClick: x,
                                    children: "Install an unverified plugin"
                                }), (0,
                                w.jsx)(i7, {}), (0,
                                w.jsx)(i8, {
                                    onClick: b,
                                    children: "Develop your own plugin"
                                })]
                            })]
                        })]
                    })]
                })
            })
        }
        function i0(e) {
            return (0,
            M.useMemo)(function() {
                return e.sort(function(e, t) {
                    return e.manifest.name_for_human.localeCompare(t.manifest.name_for_human)
                })
            }, [e])
        }
        function i1(e) {
            var t = e.selected
              , n = e.onClick
              , r = e.children;
            return (0,
            w.jsx)(ed.z, {
                color: t ? "light" : "neutral",
                className: (0,
                q.Z)("focus:ring-0", t && "hover:bg-gray-200", !t && "text-black/50"),
                onClick: n,
                children: r
            })
        }
        function i2(e) {
            var t = e.plugins
              , n = e.numSkeletons
              , r = e.isLoading
              , a = e.onInstallWithAuthRequired
              , i = e.onRequestMfa
              , o = r ? Array(n).fill(0).map(function(e, t) {
                return (0,
                w.jsx)(i5, {}, t)
            }) : t.map(function(e) {
                return (0,
                w.jsx)(i3, {
                    plugin: e,
                    onInstallWithAuthRequired: a,
                    onRequestMfa: i
                }, e.id)
            });
            return (0,
            w.jsx)("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
                children: o
            })
        }
        function i3(e) {
            var t, n, r, a, i, o, s, l = e.plugin, u = e.onInstallWithAuthRequired, c = e.onRequestMfa, d = (0,
            j._)((0,
            M.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            j._)((0,
            M.useState)(!1), 2), m = g[0], p = g[1], v = ib({
                onSuccess: function(e) {
                    ih(e.id)
                },
                onError: function(e) {
                    console.error(e),
                    nH.m.danger("Error installing ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    h(!1)
                }
            }), x = (n = (t = {
                onSuccess: function() {},
                onError: function(e) {
                    console.error(e),
                    nH.m.danger("Error uninstalling ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    p(!1)
                }
            }).onSuccess,
            r = t.onError,
            a = t.onSettled,
            i = (0,
            C.NL)(),
            o = (0,
            ix.D)(en.ZP.updatePluginUserSettings.bind(en.ZP), {
                onSuccess: function(e) {
                    (function(e, t, n) {
                        t.setQueryData(n, function(t) {
                            var n = (0,
                            eT._)((null == t ? void 0 : t.items) || [])
                              , r = n.findIndex(function(t) {
                                return t.id === e.id
                            });
                            return -1 !== r && n.splice(r, 1),
                            {
                                count: n.length,
                                items: n
                            }
                        })
                    }
                    )(e, i, ["installedAip"]),
                    ij(e, i, ["approvedAip"]),
                    n(e)
                },
                onError: r,
                onSettled: a
            }).mutate,
            (0,
            M.useCallback)(function(e) {
                o({
                    pluginId: e,
                    isInstalled: !1
                })
            }, [o])), b = (0,
            ey.kP)().session, y = iG().isUsernamePassword, k = (0,
            M.useCallback)(function() {
                var e, t = l.manifest.auth.type;
                if (!("none" === t || "service_http" === t) && !(null == b ? void 0 : null === (e = b.user) || void 0 === e ? void 0 : e.mfa) && y) {
                    c();
                    return
                }
                if ("oauth" === t) {
                    var n = ik(l);
                    n ? window.location.href = n : nH.m.danger("Missing plugin configuration for ".concat(l.manifest.name_for_human, "."))
                } else
                    "user_http" === t ? u(l) : (h(!0),
                    v(l.id))
            }, [l, v, u, c, y, b]), _ = (0,
            M.useCallback)(function() {
                p(!0),
                x(l.id)
            }, [l, x]);
            return s = f || m ? (0,
            w.jsxs)(ed.z, {
                color: "light",
                className: "bg-green-100 hover:bg-green-100",
                children: [f ? "Installing" : "Uninstalling", (0,
                w.jsx)(eM.Z, {})]
            }) : l.user_settings.is_installed ? (0,
            w.jsxs)(ed.z, {
                color: "light",
                className: "hover:bg-gray-200",
                onClick: _,
                children: ["Uninstall", (0,
                w.jsx)(ef.ZP, {
                    icon: X.$Rx
                })]
            }) : (0,
            w.jsxs)(ed.z, {
                onClick: k,
                children: ["Install", (0,
                w.jsx)(ef.ZP, {
                    icon: X.wzc
                })]
            }),
            (0,
            w.jsx)(i4, {
                logo: (0,
                w.jsx)(eB, {
                    url: l.manifest.logo_url,
                    name: l.manifest.name_for_human,
                    size: "100%",
                    large: !0
                }),
                tag: nG(l) ? (0,
                w.jsx)(n8, {}) : "approved" !== l.status ? (0,
                w.jsx)(n6, {}) : void 0,
                title: (0,
                w.jsx)("div", {
                    className: "max-w-full truncate text-lg leading-6",
                    children: l.manifest.name_for_human
                }),
                button: s,
                description: l.manifest.description_for_human
            })
        }
        function i5() {
            return (0,
            w.jsx)(i4, {
                logo: (0,
                w.jsx)("div", {
                    className: "h-full w-full rounded-[5px] bg-gray-300"
                }),
                title: (0,
                w.jsx)("div", {
                    className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
                }),
                button: (0,
                w.jsx)("div", {
                    className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
                }),
                description: (0,
                w.jsxs)("div", {
                    className: "flex flex-col gap-1.5",
                    children: [(0,
                    w.jsx)("div", {
                        className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
                    }), (0,
                    w.jsx)("div", {
                        className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
                    }), (0,
                    w.jsx)("div", {
                        className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
                    })]
                })
            })
        }
        function i4(e) {
            var t = e.logo
              , n = e.tag
              , r = e.title
              , a = e.button
              , i = e.description;
            return (0,
            w.jsxs)("div", {
                className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
                children: [(0,
                w.jsxs)("div", {
                    className: "flex gap-4",
                    children: [(0,
                    w.jsx)("div", {
                        className: "h-[70px] w-[70px] shrink-0",
                        children: t
                    }), (0,
                    w.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-start justify-between",
                        children: [n ? (0,
                        w.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [n, r]
                        }) : r, a]
                    })]
                }), (0,
                w.jsx)("div", {
                    className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
                    children: i
                })]
            })
        }
        function i6(e) {
            for (var t = function(e) {
                u.push((0,
                w.jsx)(i8, {
                    role: "button",
                    className: (0,
                    q.Z)("flex h-5 w-5 items-center justify-center", e === n && "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"),
                    onClick: function() {
                        return a(e)
                    },
                    children: e + 1
                }, e))
            }, n = e.page, r = e.numPages, a = e.goToPage, i = n > 0, o = n < r - 1, s = (0,
            M.useCallback)(function() {
                a(Math.max(n - 1, 0))
            }, [n, a]), l = (0,
            M.useCallback)(function() {
                a(Math.min(n + 1, r - 1))
            }, [n, r, a]), u = [], c = 0; c < r; c++)
                t(c);
            return (0,
            w.jsxs)("div", {
                className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
                children: [(0,
                w.jsxs)(i8, {
                    role: "button",
                    className: (0,
                    q.Z)("flex items-center", !i && "opacity-50"),
                    onClick: s,
                    $disabled: !i,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.YFh
                    }), "Prev"]
                }), u, (0,
                w.jsxs)(i8, {
                    role: "button",
                    className: (0,
                    q.Z)("flex items-center", !o && "opacity-50"),
                    onClick: l,
                    $disabled: !o,
                    children: ["Next", (0,
                    w.jsx)(ef.ZP, {
                        icon: X.Tfp
                    })]
                })]
            })
        }
        var i8 = T.Z.button(i$(), function(e) {
            return e.$disabled ? "opacity-50 cursor-default" : "hover:text-black/50 dark:hover:text-white/50"
        })
          , i7 = T.Z.div(iJ());
        function i9(e) {
            var t = e.allowClose
              , n = e.onConfirm
              , r = e.onClose;
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "About plugins",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: "OK",
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: t && (0,
                w.jsx)(e_.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                w.jsx)(iT, {
                    children: (0,
                    w.jsxs)(iv.I, {
                        children: [(0,
                        w.jsx)(iv.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation."
                        }), (0,
                        w.jsx)(iv.Z, {
                            icon: "\uD83C\uDF10",
                            children: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation."
                        }), (0,
                        w.jsx)(iv.Z, {
                            icon: "\uD83E\uDDE0",
                            children: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled."
                        })]
                    })
                })
            })
        }
        var oe = "oai/apps/hasSeenPluginsDisclaimer";
        function ot(e) {
            var t = e.onInstall
              , n = e.onClose
              , r = (0,
            j._)((0,
            M.useState)(!!eg.m.getItem(oe)), 2)
              , a = !0
              , i = r[1]
              , o = (0,
            j._)((0,
            M.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            j._)((0,
            M.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            j._)((0,
            M.useState)(), 2)
              , h = f[0]
              , g = f[1]
              , m = (0,
            j._)((0,
            M.useState)(!1), 2)
              , p = m[0]
              , v = m[1]
              , x = (0,
            M.useCallback)(function() {
                i(!0),
                l(!1),
                eg.m.setItem(oe, !0)
            }, [])
              , b = (0,
            M.useCallback)(function(e) {
                g(e),
                d(!0)
            }, [])
              , y = (0,
            M.useCallback)(function() {
                d(!0)
            }, [])
              , k = (0,
            M.useCallback)(function() {
                v(!0)
            }, [])
              , C = (0,
            M.useCallback)(function() {
                l(!0)
            }, [])
              , _ = (0,
            M.useCallback)(function(e) {
                ih(e.id),
                n(),
                t(e)
            }, [t, n])
              , T = (0,
            M.useCallback)(function() {
                g(void 0),
                d(!1),
                n()
            }, [n])
              , N = (0,
            M.useCallback)(function() {
                v(!1),
                n()
            }, [n]);
            return !a || s ? (0,
            w.jsx)(i9, {
                allowClose: !a,
                onConfirm: x,
                onClose: n
            }) : c ? (0,
            w.jsx)(iq, {
                plugin: h,
                onInstall: _,
                onClose: T
            }) : p ? (0,
            w.jsx)(iR, {
                onClickInstall: b,
                onInstallLocalhost: _,
                onClose: N
            }) : (0,
            w.jsx)(iK, {
                onInstallWithAuthRequired: b,
                onClickInstallDeveloper: y,
                onClickDevelop: k,
                onClickAbout: C,
                onClose: n
            })
        }
        function on() {
            var e = (0,
            k._)(["flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"]);
            return on = function() {
                return e
            }
            ,
            e
        }
        function or(e) {
            var t, n = e.theme, r = void 0 === n ? "default" : n, a = (0,
            j._)((0,
            M.useState)(!1), 2), i = a[0], o = a[1], s = (0,
            j._)((0,
            M.useState)(!1), 2), l = s[0], u = s[1], c = (0,
            _.useRouter)(), d = nT(), f = d.installedPlugins, h = d.isLoading, g = ic(), m = (0,
            M.useRef)(null);
            (0,
            M.useEffect)(function() {
                if (!h) {
                    var e = c.query
                      , t = e.loginAip
                      , n = e.loginSuccess
                      , r = (0,
                    y._)(e, ["loginAip", "loginSuccess"]);
                    if (t) {
                        var a, i = f.find(function(e) {
                            return e.id === t
                        });
                        i && "true" === n ? (ih(c.query.loginAip),
                        null === (a = m.current) || void 0 === a || a.open()) : nH.m.warning("Couldn't log in with ".concat((null == i ? void 0 : i.manifest.name_for_human) || "plugin", ".")),
                        c.replace({
                            pathname: c.pathname,
                            query: r
                        })
                    }
                }
            }, [c, f, h]);
            var p = (0,
            M.useCallback)(function() {
                var e;
                null === (e = m.current) || void 0 === e || e.open()
            }, [])
              , v = (0,
            M.useCallback)(function() {
                o(!1)
            }, [])
              , x = (0,
            j._)((0,
            M.useState)(g), 2)
              , b = x[0]
              , k = x[1]
              , C = (0,
            M.useCallback)(function(e) {
                if (e.length > 3)
                    u(!0),
                    setTimeout(function() {
                        u(!1)
                    }, 600);
                else {
                    var t = e.filter(function(e) {
                        return !g.find(function(t) {
                            return t.id === e.id
                        })
                    })
                      , n = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = is[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                            var s = function() {
                                var e = i.value
                                  , n = g.find(function(t) {
                                    return e.includes(t.domain)
                                });
                                if (n) {
                                    var r = e.find(function(e) {
                                        return e !== n.domain
                                    })
                                      , a = t.find(function(e) {
                                        return e.domain === r
                                    });
                                    if (a)
                                        return nH.m.warning("You can't enable ".concat(a.manifest.name_for_human, " while ").concat(n.manifest.name_for_human, " is enabled.")),
                                        {
                                            v: void 0
                                        }
                                }
                            }();
                            if ("object" === (0,
                            aA._)(s))
                                return s.v
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    id(e.map(function(e) {
                        return e.id
                    }))
                }
            }, [g])
              , T = (0,
            M.useCallback)(function(e) {
                var t;
                null === (t = m.current) || void 0 === t || t.close(),
                "store" === e && o(!0)
            }, [])
              , N = (0,
            M.useCallback)(function() {
                k(g),
                eA.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                    num_enabled_plugins: "".concat(g.length)
                })
            }, [g])
              , I = (0,
            M.useCallback)(function() {
                var e = b.filter(function(e) {
                    return !g.find(function(t) {
                        return t.id === e.id
                    })
                })
                  , t = g.filter(function(e) {
                    return !b.find(function(t) {
                        return t.id === e.id
                    })
                })
                  , n = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = t[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                        var s = i.value;
                        eA.m.logEvent("chatgpt_plugin_enabled", null, {
                            plugin_id: s.id
                        })
                    }
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                var l = !0
                  , u = !1
                  , c = void 0;
                try {
                    for (var d, f = e[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                        var h = d.value;
                        eA.m.logEvent("chatgpt_plugin_disabled", null, {
                            plugin_id: h.id
                        })
                    }
                } catch (e) {
                    u = !0,
                    c = e
                } finally {
                    try {
                        l || null == f.return || f.return()
                    } finally {
                        if (u)
                            throw c
                    }
                }
            }, [g, b])
              , P = f.map(function(e) {
                return {
                    value: e,
                    title: e.manifest.name_for_human,
                    description: e.manifest.description_for_human,
                    tags: [],
                    customTags: nG(e) ? (0,
                    w.jsx)(n8, {}) : "approved" !== e.status ? (0,
                    w.jsx)(n6, {}) : void 0,
                    imageUrl: e.manifest.logo_url
                }
            })
              , S = P.filter(function(e) {
                return g.find(function(t) {
                    return t.id === e.value.id
                })
            })
              , Z = "".concat(0 === g.length ? "No" : g.length, " plugins enabled");
            if (g.length > 0 && g.length < 6) {
                var A = g.map(function(e, t) {
                    return (0,
                    w.jsx)(eB, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 24
                    }, t)
                });
                Z = (0,
                w.jsx)("div", {
                    className: "flex gap-2",
                    children: A
                })
            }
            var R = [{
                id: "store",
                label: "Plugin store",
                icon: X.Rgz
            }];
            f.length > 3 && (t = (0,
            w.jsxs)(oa, {
                className: (0,
                q.Z)("transition-colors duration-300", l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
                children: [g.length, "/", 3, " Enabled"]
            }));
            var D = (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(oa, {
                    children: "Loading..."
                }), (0,
                w.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                w.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                w.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                w.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                w.jsx)(a5, {
                    showCheckbox: !0,
                    theme: r
                })]
            });
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(aK, {
                    name: "Plugins",
                    selectedOptions: S,
                    selectedLabel: Z,
                    options: P,
                    actions: R,
                    onChange: C,
                    onAction: T,
                    onOpen: N,
                    onClose: I,
                    dropdownRef: m,
                    isLoading: h,
                    loadingState: D,
                    header: t,
                    theme: "mini" === r ? "mini" : "default"
                }), i && (0,
                w.jsx)(ot, {
                    onInstall: p,
                    onClose: v
                })]
            })
        }
        var oa = T.Z.div(on());
        function oi(e) {
            var t, n, r = e.currentModelId, a = (0,
            P.hz)(), i = (0,
            rd.fm)(), o = (0,
            rd.B9)(), s = void 0 !== r ? o.get(r) : void 0, l = (0,
            rd.B8)().enabledModelsById, u = (0,
            M.useMemo)(function() {
                return Array.from(l).map(function(e) {
                    return o.get(e)
                }).filter(function(e) {
                    return void 0 !== e
                })
            }, [l, o]), c = (0,
            eI.Fl)(), d = c.isBetaFeaturesUiEnabled, f = c.isPluginsAvailable, h = c.isBrowsingAvailable, g = c.isCodeInterpreterAvailable;
            return d && a.has("new_model_switcher_20230512") && (f || h || g) ? s ? (0,
            w.jsxs)("div", {
                className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [(0,
                w.jsx)(aZ, {
                    currentModel: s,
                    onModelChange: i
                }), f && (null == s ? void 0 : null === (n = s.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) && (0,
                w.jsx)(or, {
                    theme: "mini"
                })]
            }) : null : (0,
            w.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [(0,
                w.jsx)(oo, {
                    onChangeModelQueryParam: i,
                    availableModels: u,
                    currentModelId: r
                }), f && (null == s ? void 0 : null === (t = s.enabledTools) || void 0 === t ? void 0 : t.includes("tools3")) && (0,
                w.jsx)(or, {})]
            })
        }
        function oo(e) {
            var t = e.onChangeModelQueryParam
              , n = e.availableModels
              , r = e.currentModelId
              , a = (0,
            nA.BT)()
              , i = (0,
            N.WS)()
              , o = aT()
              , s = (0,
            M.useCallback)(function(e) {
                e.id !== a && (t(e.id),
                i(I.s6.toggleModel, {
                    model: e.id
                }))
            }, [a, i, t])
              , l = "".concat(o.modelSwitcherDisclaimer)
              , u = n.map(function(e) {
                return {
                    value: e,
                    title: e.title,
                    description: e.id === a ? l : e.description,
                    tags: e.tags,
                    disabled: e.id === a
                }
            })
              , c = u.find(function(e) {
                return e.value.id === r
            }) || u[0];
            return void 0 === r ? null : (0,
            w.jsx)(aX, {
                name: "Model",
                selectedOption: c,
                options: u,
                onChange: s,
                theme: "default"
            })
        }
        var os = function(e) {
            var t, n, r, a = e.currentModelConfig, i = e.clientThreadId, o = e.isStaticSharedThread, s = e.icon, l = (0,
            S.Ro)(i);
            void 0 === l && (l = a);
            var u = l.tags.filter(function(e) {
                return aY.includes(e)
            }).map(function(e) {
                return a6(e)
            })
              , c = nN();
            if (c.length > 0) {
                var d = c.map(function(e, t) {
                    return (0,
                    w.jsx)(eB, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, t)
                });
                r = (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("div", {
                        children: "Enabled plugins:"
                    }), d]
                })
            }
            var f = (0,
            _.useRouter)()
              , h = o && (null === (t = f.query) || void 0 === t ? void 0 : null === (n = t.shareParams) || void 0 === n ? void 0 : n[1]) === "moderate";
            return (0,
            w.jsxs)("div", {
                className: (0,
                q.Z)("flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300", o ? "sticky top-0 z-50" : ""),
                children: [o && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("span", {
                        children: "Shared Conversation"
                    }), (0,
                    w.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    })]
                }), !o && void 0 !== s && (0,
                w.jsx)(ef.ZP, {
                    icon: s
                }), "Model: ", a.title, u, r ? (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), r]
                }) : null, h && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), (0,
                    w.jsx)("strong", {
                        children: "MODERATION VIEW"
                    })]
                })]
            })
        };
        function ol() {
            var e = (0,
            k._)(["flex flex-col text-sm dark:bg-gray-800"]);
            return ol = function() {
                return e
            }
            ,
            e
        }
        function ou() {
            var e = (0,
            k._)(["h-32 md:h-48 flex-shrink-0"]);
            return ou = function() {
                return e
            }
            ,
            e
        }
        function oc() {
            var e = (0,
            k._)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
            return oc = function() {
                return e
            }
            ,
            e
        }
        function od() {
            var e = (0,
            k._)(["px-2 relative w-full flex flex-col h-full py-2 md:py-6"]);
            return od = function() {
                return e
            }
            ,
            e
        }
        function of() {
            var e = (0,
            k._)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
            return of = function() {
                return e
            }
            ,
            e
        }
        function oh(e) {
            var t = e.clientThreadId
              , n = (0,
            S.qA)(t)
              , r = (0,
            S.je)(t)
              , a = (0,
            S.qN)(function(e) {
                return S.iN.getThreadCreateTime(t, e)
            });
            return (0,
            w.jsxs)("div", {
                className: "mb-1 border-b border-gray-100 pb-8 pt-3 sm:mb-2 sm:pb-10 sm:pt-8",
                children: [(0,
                w.jsx)("h1", {
                    className: "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
                    children: n
                }), (null != r || null != a) && (0,
                w.jsxs)("div", {
                    className: "pt-3 text-base text-gray-400 sm:pt-4",
                    children: [null != r && (0,
                    w.jsx)("span", {
                        children: r
                    }), null != r && null != a && (0,
                    w.jsx)("span", {
                        className: "px-2",
                        children: "•"
                    }), null != a && (0,
                    w.jsx)(K.Ji, {
                        value: a,
                        month: "long",
                        year: "numeric",
                        day: "numeric"
                    })]
                })]
            })
        }
        function og(e) {
            var t, n, r, a = e.onChangeItemInView, i = e.onRequestMoreCompletions, o = e.onUpdateNode, s = e.onChangeRating, l = e.onDeleteNode, u = e.onRequestCompletion, c = e.onSandboxLinkClick, d = e.onHandleChangeVariantFeedbackInlineComparisonRating, f = e.clientThreadId, h = e.conversationLeafId, g = e.isNewThread, m = e.activeRequests, p = e.currentThreadModel, v = e.isStaticSharedThread, x = e.inlineEmbeddedDisplay, b = e.initiallyHighlightedMessageId, y = e.promptTextareaRef, k = (0,
            eN.useScrollToBottom)(), C = (0,
            j._)((0,
            eN.useSticky)(), 1)[0], _ = (0,
            P.hz)(), T = (0,
            eI.Fl)().isBetaFeaturesUiEnabled, N = (0,
            S.Kt)(f), I = (0,
            P.Xj)().isLoading, Z = (0,
            rd.iu)(), A = (0,
            rd.ZL)(), R = (0,
            rd.Xy)(p, f), D = _.has("model_switcher") && Z.size > 1, L = g && !I && D, F = (0,
            P.nR)(), E = (0,
            j._)((0,
            M.useState)(!1), 2), B = E[0], O = E[1], q = (t = R.id,
            n = aP(),
            (0,
            M.useMemo)(function() {
                return function(e, t) {
                    if (t)
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (r.options.length > 0) {
                                var a, i, o = r.options.find(function(e) {
                                    return e.value === t
                                });
                                if (o)
                                    return {
                                        item: o,
                                        categoryId: r.categoryId,
                                        backgroundColor: aN[r.categoryId].backgroundColor,
                                        icon: null !== (i = null !== (a = o.icon) && void 0 !== a ? a : r.icon) && void 0 !== i ? i : aN[r.categoryId].icon
                                    }
                            }
                        }
                }(n, t)
            }, [n, t])), U = (0,
            S.U0)(f, h);
            (0,
            M.useEffect)(function() {
                if (N) {
                    var e = setTimeout(function() {
                        O(!0)
                    }, 1e3);
                    return function() {
                        clearTimeout(e)
                    }
                }
                O(!1)
            }, [N]);
            var z = _.has(er.FZ)
              , H = !T && R.tags.includes(rd.S.GPT_4) ? "black" : null !== (r = null == q ? void 0 : q.backgroundColor) && void 0 !== r ? r : void 0
              , V = (0,
            eT._)(Array(U).keys()).map(function(e) {
                return (0,
                w.jsx)(r_, {
                    isFinalTurn: e === U - 1,
                    turnIndex: e,
                    clientThreadId: f,
                    conversationLeafId: h,
                    onChangeItemInView: a,
                    onChangeRating: s,
                    onRequestMoreCompletions: i,
                    onDeleteNode: l,
                    onRequestCompletion: u,
                    onUpdateNode: o,
                    onSandboxLinkClick: c,
                    onHandleChangeVariantFeedbackInlineComparisonRating: d,
                    activeRequests: m,
                    currentModelId: R.id,
                    isStaticSharedThread: v,
                    showInlineEmbeddedDisplay: x,
                    initiallyHighlightedMessageId: b,
                    avatarColor: H
                }, e)
            });
            return (0,
            w.jsxs)(w.Fragment, {
                children: [L && (0,
                w.jsxs)(ox, {
                    children: [(0,
                    w.jsx)(oi, {
                        currentModelId: R.id
                    }), (0,
                    w.jsxs)(ob, {
                        children: ["SoftwareDigitalGPT", F && (0,
                        w.jsx)(eS, {
                            children: "PLUS"
                        })]
                    })]
                }), (0,
                w.jsxs)(om, {
                    children: [g && !I && !A && !D && (0,
                    w.jsx)(r0, {
                        promptTextareaRef: y
                    }), B && (0,
                    w.jsx)(eM.Z, {
                        className: "mt-4 self-center"
                    }), !g && (v || !I && D) && !x && (0,
                    w.jsx)(os, {
                        icon: T ? null == q ? void 0 : q.icon : void 0,
                        currentModelConfig: R,
                        clientThreadId: f,
                        isStaticSharedThread: v
                    }), z ? V.length > 0 && (0,
                    w.jsx)("div", {
                        className: "flex flex-col items-center sm:px-4",
                        children: (0,
                        w.jsxs)("div", {
                            className: "w-full max-w-[44rem] pt-4",
                            children: [v && !x && (0,
                            w.jsx)(oh, {
                                clientThreadId: f
                            }), V]
                        })
                    }) : (0,
                    w.jsxs)(w.Fragment, {
                        children: [v && !x && (0,
                        w.jsx)("div", {
                            className: "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0,
                            w.jsx)(oh, {
                                clientThreadId: f
                            })
                        }), V]
                    }), !L && !x && (0,
                    w.jsx)(op, {})]
                }), !C && !x && (0,
                w.jsx)(ov, {
                    onClick: k,
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: X.tv1,
                        className: "m-1"
                    })
                })]
            })
        }
        var om = T.Z.div(ol())
          , op = T.Z.div(ou())
          , ov = T.Z.button(oc())
          , ox = T.Z.div(od())
          , ob = T.Z.h1(of());
        function oy() {
            var e = (0,
            k._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return oy = function() {
                return e
            }
            ,
            e
        }
        function oj() {
            var e = (0,
            k._)(["grow flex-1 overflow-hidden"]);
            return oj = function() {
                return e
            }
            ,
            e
        }
        function ok() {
            var e = (0,
            k._)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50"]);
            return ok = function() {
                return e
            }
            ,
            e
        }
        function ow() {
            var e = (0,
            k._)(["flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n", "\n"]);
            return ow = function() {
                return e
            }
            ,
            e
        }
        function oC() {
            var e = (0,
            k._)(["flex w-full items-center justify-left gap-2 min-h-[1.5rem]"]);
            return oC = function() {
                return e
            }
            ,
            e
        }
        function o_() {
            var e = (0,
            k._)(["border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full"]);
            return o_ = function() {
                return e
            }
            ,
            e
        }
        function oM() {
            var e = (0,
            k._)(["flex-none h-full mt-auto mb-auto"]);
            return oM = function() {
                return e
            }
            ,
            e
        }
        var oT = (0,
        K.vU)({
            sharingModalTitle: {
                id: "thread.sharingModal.title",
                defaultMessage: "Share Link to Conversation",
                description: "Title of sharing feature in the title of the sharing modal"
            },
            sharingModalDescription: {
                id: "sharingModal.description",
                defaultMessage: "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared conversation.",
                description: "Description of sharing feature in the first paragraph of the sharing modal"
            },
            existingShareDescription: {
                id: "sharingModal.exisitingDescription",
                defaultMessage: "You have shared this conversation <existingLink>before</existingLink>. If you want to update the shared conversation content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
                description: "Description in sharing modal when viewing an existing link"
            },
            sharingModalMoreInfo: {
                id: "thread.sharingModal.moreInfo",
                defaultMessage: "More Info",
                description: "Link to a helpdesk article with more information about the sharing modal"
            },
            moderationBlocked: {
                id: "sharingModal.moderationBlocked",
                defaultMessage: "This shared link has been disabled by moderation.",
                description: "Error message in sharing modal when shared link has been moderated."
            },
            confirmCloseWithChanges: {
                id: "thread.sharingModal.confirmCloseWithChanges",
                defaultMessage: "You have unsaved changes. Do you want to continue?",
                description: "Confirmation message when closing share modal with changes"
            },
            confirmDeleteLink: {
                id: "sharingModal.confirmDeleteLink",
                defaultMessage: "Are you sure you want to delete the share link?",
                description: "Confirmation message when deleting share link"
            }
        });
        function oN(e) {
            var t = e.serverThreadId
              , n = e.activeRequests
              , r = (0,
            S.oq)(t)
              , a = (0,
            j._)((0,
            M.useState)(function() {
                return (0,
                ej.Z)(function(e, t) {
                    return {
                        title: void 0,
                        highlightedMessageId: void 0,
                        initiallyHighlightedMessageId: void 0,
                        currentNodeId: void 0,
                        shareLinkId: void 0,
                        shareLinkUrl: void 0,
                        isPublic: !1,
                        isDeleted: !1,
                        isAnonymous: !0,
                        linkAlreadyExisted: !1,
                        linkError: void 0,
                        moderationState: void 0
                    }
                })
            }), 1)[0]
              , i = 0 === n.size && "root" !== r
              , o = (0,
            M.useRef)(!1);
            return (0,
            M.useEffect)(function() {
                if (i && !o.current) {
                    o.current = !0;
                    var e, n = S.tQ.getThreadCurrentLeafId(t), r = null === (e = S.tQ.getThreadConversationTurns(t, n)[0]) || void 0 === e ? void 0 : e.messages[0].message.id;
                    a.setState({
                        highlightedMessageId: r
                    });
                    var s = S.tQ.getTree(t).getMessageId(n);
                    en.ZP.createShareLink({
                        message_id: r,
                        current_node_id: s,
                        conversation_id: t,
                        is_anonymous: !0
                    }).then(function(e) {
                        a.setState({
                            shareLinkId: e.share_id,
                            shareLinkUrl: e.share_url,
                            isPublic: e.is_public,
                            isDeleted: !e.is_visible,
                            title: e.title,
                            highlightedMessageId: e.highlighted_message_id,
                            initiallyHighlightedMessageId: e.highlighted_message_id,
                            currentNodeId: e.current_node_id,
                            linkAlreadyExisted: e.already_exists,
                            isAnonymous: e.is_anonymous,
                            moderationState: e.moderation_state
                        })
                    }).catch(function(e) {
                        e instanceof eC.Q0 && "string" == typeof e.message ? a.setState({
                            linkError: e.message
                        }) : (nH.m.danger("Failed to copy link to clipboard - could not create link"),
                        B.closeSharingModal())
                    })
                }
            }, [i]),
            (0,
            w.jsx)(ek.Provider, {
                value: a,
                children: (0,
                w.jsx)(oS, (0,
                b._)({}, e))
            })
        }
        function oI(e) {
            return !0 === e.has_been_auto_blocked || !0 === e.has_been_auto_moderated || !0 === e.has_been_blocked
        }
        var oP = "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
        function oS(e) {
            var t, n, r, a, i, o, s = e.serverThreadId, l = e.activeRequests, u = e.currentThreadModel, c = function() {
                (!V || window.confirm(d.formatMessage(oT.confirmCloseWithChanges))) && B.closeSharingModal()
            }, d = (0,
            ee.Z)(), f = (0,
            M.useRef)(null), h = (0,
            j._)((0,
            M.useState)(!1), 2), g = h[0], m = h[1], p = (0,
            j._)((0,
            M.useState)(!1), 2), v = p[0], x = p[1], y = (0,
            j._)((0,
            M.useState)(!1), 2), k = y[0], C = y[1], _ = (0,
            M.useContext)(ek), T = ew(function(e) {
                return e.title
            }), N = ew(function(e) {
                return e.shareLinkId
            }), I = ew(function(e) {
                return e.shareLinkUrl
            }), P = ew(function(e) {
                return e.isAnonymous
            }), Z = ew(function(e) {
                return e.initiallyHighlightedMessageId
            }), A = ew(function(e) {
                return e.currentNodeId
            }), R = ew(function(e) {
                return e.isPublic
            }), D = ew(function(e) {
                return e.linkAlreadyExisted
            }) && R, L = ew(function(e) {
                return e.linkError
            }), F = ew(function(e) {
                return e.moderationState
            }), E = null != F && oI(F), O = (0,
            M.useRef)(), U = (0,
            M.useRef)();
            (0,
            M.useEffect)(function() {
                D && (O.current = T,
                U.current = P)
            }, [D]);
            var z = (0,
            ey.kP)().session
              , H = (t = (0,
            em._)(function(e, t) {
                var n, r, a, i, o, s, l;
                return (0,
                ev.Jh)(this, function(u) {
                    switch (u.label) {
                    case 0:
                        x(!0),
                        r = (n = _.getState()).highlightedMessageId,
                        a = n.title,
                        i = n.isDeleted,
                        o = n.isAnonymous;
                        try {
                            navigator.clipboard.writeText(t)
                        } catch (e) {
                            return console.warn("Could not copy link to clipboard: " + e),
                            nH.m.warning("Failed to copy link to clipboard"),
                            x(!1),
                            [2]
                        }
                        u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, 4, 5]),
                        [4, en.ZP.updateShareLink({
                            share_id: e,
                            highlighted_message_id: r,
                            title: null != a ? a : void 0,
                            is_public: !i,
                            is_visible: !i,
                            is_anonymous: o
                        })];
                    case 2:
                        if (oI(s = u.sent().moderation_state))
                            return _.setState({
                                moderationState: s
                            }),
                            [2];
                        return _.setState({
                            isPublic: !0,
                            moderationState: s
                        }),
                        C(!0),
                        setTimeout(function() {
                            B.closeSharingModal(),
                            nH.m.success("Copied shared conversation URL to clipboard!")
                        }, 500),
                        [3, 5];
                    case 3:
                        return (l = u.sent())instanceof eC.Q0 && "string" == typeof l.message && _.setState({
                            linkError: l.message
                        }),
                        [3, 5];
                    case 4:
                        return x(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }),
            function(e, n) {
                return t.apply(this, arguments)
            }
            )
              , V = D && (T !== O.current || P !== U.current)
              , W = (0,
            w.jsxs)(e_.mH, {
                onClick: function() {
                    return H(N, I)
                },
                color: "primary",
                disabled: v || k || null == N || null == I || null != L || E,
                children: [k ? (0,
                w.jsx)(ef.ZP, {
                    icon: X.LSm
                }) : v ? (0,
                w.jsx)(eM.Z, {}) : (0,
                w.jsx)(ef.ZP, {
                    icon: X.XKb
                }), k ? "Copied!" : v ? "Copying..." : V ? "Update and Copy Link" : "Copy Link"]
            })
              , G = (0,
            M.useCallback)(function(e) {
                var t;
                null == e || e.preventDefault(),
                _.setState({
                    title: null === (t = f.current) || void 0 === t ? void 0 : t.value
                }),
                m(!1)
            }, [_])
              , Q = (0,
            M.useCallback)(function(e) {
                "Enter" === e.key && G()
            }, [G])
              , $ = (n = (0,
            em._)(function() {
                return (0,
                ev.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, en.ZP.deleteShareLink({
                            share_id: _.getState().shareLinkId
                        }).catch(function(e) {
                            nH.m.danger("Failed to delete shared link")
                        }).then(function() {
                            B.closeSharingModal()
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                })
            }),
            function() {
                return n.apply(this, arguments)
            }
            )
              , J = (r = (0,
            em._)(function() {
                return (0,
                ev.Jh)(this, function(e) {
                    return _.setState({
                        isAnonymous: !0
                    }),
                    S.qN.setState(function(e) {
                        e.threads[s].initialThreadData.authorName = void 0
                    }),
                    [2]
                })
            }),
            function() {
                return r.apply(this, arguments)
            }
            )
              , er = (a = (0,
            em._)(function() {
                return (0,
                ev.Jh)(this, function(e) {
                    return _.setState({
                        isAnonymous: !1
                    }),
                    S.qN.setState(function(e) {
                        var t;
                        e.threads[s].initialThreadData.authorName = null == z ? void 0 : null === (t = z.user) || void 0 === t ? void 0 : t.name
                    }),
                    [2]
                })
            }),
            function() {
                return a.apply(this, arguments)
            }
            )
              , ea = (0,
            w.jsxs)(oD, {
                $active: g,
                children: [(0,
                w.jsxs)("div", {
                    className: "flex-1 pr-1",
                    children: [void 0 !== T ? g ? (0,
                    w.jsx)(oF, {
                        ref: f,
                        type: "text",
                        defaultValue: null != T ? T : "",
                        autoFocus: !0,
                        onKeyDown: Q,
                        onBlur: G
                    }) : (0,
                    w.jsxs)(oL, {
                        onDoubleClick: function() {
                            return m(!0)
                        },
                        children: [T, g || null == T ? null : (0,
                        w.jsx)("button", {
                            onClick: function() {
                                return m(!0)
                            },
                            className: "text-gray-500",
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.Nte,
                                size: "small"
                            })
                        })]
                    }) : (0,
                    w.jsx)("div", {
                        className: "h-6"
                    }), (0,
                    w.jsxs)("div", {
                        className: "mt-1 text-gray-500",
                        children: [!P && (0,
                        w.jsxs)("span", {
                            children: [null == z ? void 0 : null === (o = z.user) || void 0 === o ? void 0 : o.name, " \xb7 "]
                        }), (0,
                        w.jsx)(K.Ji, {
                            value: new Date,
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })]
                    })]
                }), (0,
                w.jsx)(oE, {
                    children: (0,
                    w.jsxs)(eh.fC, {
                        children: [(0,
                        w.jsx)(eh.xz, {
                            asChild: !0,
                            children: (0,
                            w.jsx)(ed.z, {
                                color: "neutral",
                                className: "mb-auto mt-auto",
                                children: (0,
                                w.jsx)(eb.JEI, {})
                            })
                        }), (0,
                        w.jsx)(eh.h_, {
                            children: (0,
                            w.jsxs)(eh.VY, {
                                className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                side: "top",
                                align: "end",
                                children: [P && (0,
                                w.jsx)(ed.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: er,
                                    children: (0,
                                    w.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        w.jsx)(ef.ZP, {
                                            icon: X.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        w.jsx)("div", {
                                            children: "Share your name"
                                        })]
                                    })
                                }), !P && (0,
                                w.jsx)(ed.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: J,
                                    children: (0,
                                    w.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        w.jsx)(ef.ZP, {
                                            icon: X.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        w.jsx)("div", {
                                            children: "Share anonymously"
                                        })]
                                    })
                                }), D && (0,
                                w.jsx)(ed.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: $,
                                    children: (0,
                                    w.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        w.jsx)(ef.ZP, {
                                            icon: X.Ybf,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        w.jsx)("div", {
                                            children: "Delete Link"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            })
              , ei = (i = (0,
            em._)(function(e, t) {
                return (0,
                ev.Jh)(this, function(e) {
                    return [2]
                })
            }),
            function(e, t) {
                return i.apply(this, arguments)
            }
            )
              , eo = L;
            return null == eo && ((null == F ? void 0 : F.has_been_auto_blocked) || (null == F ? void 0 : F.has_been_auto_moderated) || (null == F ? void 0 : F.has_been_blocked)) && (eo = (0,
            w.jsx)(et.Z, (0,
            b._)({}, oT.moderationBlocked))),
            (0,
            w.jsxs)(e_.ZP, {
                isOpen: !0,
                onModalClose: function() {
                    c()
                },
                size: "custom",
                type: "success",
                className: "max-w-2xl",
                title: d.formatMessage(oT.sharingModalTitle),
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: function() {
                        c()
                    }
                }),
                primaryButton: null,
                children: [null != eo && (0,
                w.jsx)("div", {
                    className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                    children: eo
                }), (0,
                w.jsx)("div", {
                    className: (0,
                    q.Z)("w-full"),
                    children: (0,
                    w.jsx)("p", {
                        className: (0,
                        q.Z)("mb-6 text-gray-500"),
                        children: D ? (0,
                        w.jsx)(et.Z, (0,
                        ep._)((0,
                        b._)({}, oT.existingShareDescription), {
                            values: {
                                existingLink: function(e) {
                                    return (0,
                                    w.jsx)("a", {
                                        href: I,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline",
                                        children: e
                                    })
                                },
                                deleteLink: function(e) {
                                    return (0,
                                    w.jsx)("a", {
                                        href: "#",
                                        onClick: function(e) {
                                            e.preventDefault(),
                                            window.confirm(d.formatMessage(oT.confirmDeleteLink)) && $()
                                        },
                                        className: "underline",
                                        children: e
                                    })
                                }
                            }
                        })) : (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, oT.sharingModalDescription))
                    })
                }), (0,
                w.jsx)(oR, {
                    children: (0,
                    w.jsx)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: (0,
                        w.jsx)(oZ, {
                            children: (0,
                            w.jsxs)(oA, {
                                children: [(0,
                                w.jsx)(ex.f, {
                                    ratio: 1.9,
                                    className: "overflow-auto bg-white dark:bg-gray-800",
                                    children: null != A ? (0,
                                    w.jsx)(og, {
                                        onChangeItemInView: Y(),
                                        onRequestMoreCompletions: Y(),
                                        onUpdateNode: Y(),
                                        onChangeRating: Y(),
                                        onDeleteNode: Y(),
                                        onRequestCompletion: Y(),
                                        onSandboxLinkClick: ei,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: Y(),
                                        clientThreadId: s,
                                        conversationLeafId: A,
                                        activeRequests: l,
                                        currentThreadModel: u,
                                        inlineEmbeddedDisplay: !0,
                                        isStaticSharedThread: !0,
                                        isNewThread: !1,
                                        initiallyHighlightedMessageId: Z
                                    }) : (0,
                                    w.jsx)("div", {
                                        className: "flex h-full items-center justify-center",
                                        children: (0,
                                        w.jsx)(eM.Z, {
                                            className: "text-gray-400 dark:text-gray-500"
                                        })
                                    })
                                }), ea]
                            })
                        })
                    })
                }), (0,
                w.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    w.jsx)("div", {
                        children: (0,
                        w.jsxs)("a", {
                            href: oP,
                            className: "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                            target: "_blank",
                            rel: "noreferrer",
                            children: []
                        })
                    }), (0,
                    w.jsx)("div", {
                        className: "text-right",
                        children: W
                    })]
                })]
            })
        }
        var oZ = T.Z.main(oy())
          , oA = T.Z.div(oj())
          , oR = T.Z.div(ok())
          , oD = T.Z.div(ow(), function(e) {
            return e.$active,
            ""
        })
          , oL = T.Z.div(oC())
          , oF = T.Z.input(o_())
          , oE = T.Z.div(oM());
        function oB() {
            var e = (0,
            k._)(["bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase"]);
            return oB = function() {
                return e
            }
            ,
            e
        }
        var oO = (0,
        K.vU)({
            learnMore: {
                id: "sharedConversationAnnouncement.learnMore",
                defaultMessage: "Learn more",
                description: "Link text to shared links help page"
            },
            shareConversations: {
                id: "sharedConversationAnnouncement.shareConversations",
                defaultMessage: "Share a link to this chat",
                description: "Text displayed in tooltip announcing shared conversations"
            },
            new: {
                id: "sharedConversationAnnouncement.new",
                defaultMessage: "New",
                description: "New badge text"
            }
        })
          , oq = "oai/apps/announcement/sharedConversations";
        function oU(e) {
            var t = e.children
              , n = function() {
                var e = Date.now();
                eg.m.setItem(oq, e),
                o(e)
            }
              , r = (0,
            ea.w$)()
              , a = (0,
            j._)((0,
            M.useState)(function() {
                var e = eg.m.getItem(oq);
                e = 1;
                return "number" == typeof e && e
            }), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            M.useRef)(null)
              , l = (0,
            ee.Z)();
            return (0,
            w.jsxs)(eh.fC, {
                open: r && !1 === i,
                onOpenChange: function(e) {
                    e || n()
                },
                children: [(0,
                w.jsx)(eh.xz, {
                    asChild: !0,
                    ref: s,
                    children: t
                }), (0,
                w.jsx)(eh.h_, {
                    children: (0,
                    w.jsxs)(eh.VY, {
                        side: "right",
                        sideOffset: 36,
                        onOpenAutoFocus: function(e) {
                            e.preventDefault()
                        },
                        onCloseAutoFocus: function(e) {
                            e.preventDefault()
                        },
                        onInteractOutside: function(e) {
                            var t;
                            e.target instanceof Element && (null === (t = s.current) || void 0 === t ? void 0 : t.contains(e.target)) ? n() : e.preventDefault()
                        },
                        className: "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                        children: [(0,
                        w.jsxs)("div", {
                            children: [(0,
                            w.jsxs)("div", {
                                className: "mb-0.5 flex items-center gap-2",
                                children: [(0,
                                w.jsx)(oz, {
                                    children: (0,
                                    w.jsx)(et.Z, (0,
                                    b._)({}, oO.new))
                                }), (0,
                                w.jsx)("div", {
                                    className: "font-medium",
                                    children: (0,
                                    w.jsx)(et.Z, (0,
                                    b._)({}, oO.shareConversations))
                                }), (0,
                                w.jsx)(eh.x8, {
                                    className: "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                                    children: (0,
                                    w.jsx)(ef.ZP, {
                                        icon: X.q5L
                                    })
                                })]
                            }), (0,
                            w.jsxs)("a", {
                                href: oP,
                                className: "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [l.formatMessage(oO.learnMore), (0,
                                w.jsx)(ef.ZP, {
                                    icon: X.AlO,
                                    size: "xsmall"
                                })]
                            })]
                        }), (0,
                        w.jsx)(eh.Eh, {
                            asChild: !0,
                            children: (0,
                            w.jsx)("div", {
                                className: "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50"
                            })
                        })]
                    })
                })]
            })
        }
        var oz = T.Z.span(oB())
          , oH = n(38675)
          , oV = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21")
          , oW = "conversationHistory";
        function oG() {
            var e, t = (0,
            P.hz)().has(er.Ud), n = (0,
            P.Xj)().isLoading, r = (0,
            ey.kP)().session, a = null == r ? void 0 : r.accessToken, i = !t && !!a && !n, o = (0,
            oH.N)({
                queryKey: [oW],
                queryFn: function(e) {
                    var t = e.pageParam;
                    return en.ZP.getConversations(t || 0, 28, null == r ? void 0 : r.accessToken)
                },
                getNextPageParam: function(e) {
                    var t = e.offset + e.limit;
                    return t < e.total ? t : void 0
                },
                enabled: i
            }), s = o.data, l = o.fetchNextPage, u = o.hasNextPage, c = o.isInitialLoading, d = o.isFetchingNextPage, f = o.isError, h = (0,
            M.useMemo)(function() {
                return null !== (e = null == s ? void 0 : s.pages.flatMap(function(e) {
                    return e.items
                })) && void 0 !== e ? e : []
            }, [s]);
            return {
                data: s,
                conversations: h,
                fetchNextPage: l,
                hasNextPage: u,
                isLoading: c,
                isFetchingNextPage: d,
                isError: i && f
            }
        }
        function oQ() {
            var e = (0,
            C.NL)();
            return (0,
            M.useCallback)(function() {
                e.invalidateQueries([oW])
            }, [e])
        }
        function o$() {
            var e = (0,
            k._)(["flex flex-col gap-2 pb-2 text-gray-100 text-sm\n", ""]);
            return o$ = function() {
                return e
            }
            ,
            e
        }
        function oJ() {
            var e = (0,
            k._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", ")}\n", ")}\n", "\n"]);
            return oJ = function() {
                return e
            }
            ,
            e
        }
        function oY() {
            var e = (0,
            k._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
            return oY = function() {
                return e
            }
            ,
            e
        }
        function oX() {
            var e = (0,
            k._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return oX = function() {
                return e
            }
            ,
            e
        }
        function oK() {
            var e = (0,
            k._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
            return oK = function() {
                return e
            }
            ,
            e
        }
        function o0() {
            var e = (0,
            k._)(["h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900"]);
            return o0 = function() {
                return e
            }
            ,
            e
        }
        function o1() {
            var e = (0,
            k._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
            return o1 = function() {
                return e
            }
            ,
            e
        }
        function o2() {
            var e = (0,
            k._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
            return o2 = function() {
                return e
            }
            ,
            e
        }
        function o3() {
            var e = (0,
            k._)(["p-1 hover:text-white"]);
            return o3 = function() {
                return e
            }
            ,
            e
        }
        var o5 = (0,
        K.vU)({
            historyBucketToday: {
                id: "history.bucket.today",
                defaultMessage: "Today",
                description: "Label for today's history bucket"
            },
            historyBucketYesterday: {
                id: "history.bucket.yesterday",
                defaultMessage: "Yesterday",
                description: "Label for yesterday's history bucket"
            },
            historyBucketLastSeven: {
                id: "history.bucket.lastSeven",
                defaultMessage: "Previous 7 Days",
                description: "Label for the history bucket of the previous 7 days"
            },
            historyBucketLastThirty: {
                id: "history.bucket.lastThirty",
                defaultMessage: "Previous 30 Days",
                description: "Label for the history bucket of the previous 30 days"
            },
            unableToLoadHistory: {
                id: "history.unableToLoad",
                defaultMessage: "Unable to load history",
                description: "Error message when history fails to load"
            },
            retryButton: {
                id: "history.retryButton",
                defaultMessage: "Retry",
                description: "Button to retry loading history"
            },
            showMoreButton: {
                id: "history.showMoreButton",
                defaultMessage: "Show more",
                description: "Button to show more history items"
            }
        })
          , o4 = {
            initial: function(e) {
                return e.isNew ? {
                    opacity: 0,
                    height: 0,
                    overflow: "hidden"
                } : {}
            },
            animate: function() {
                return {
                    opacity: 1,
                    height: "auto"
                }
            },
            exit: function() {
                return {
                    opacity: 0,
                    height: 0
                }
            }
        };
        function o6(e) {
            var t, n, r, a, i, o, s = e.activeId, l = e.onNewThread, u = e.setActiveRequests, c = (0,
            ee.Z)(), d = (0,
            j._)((0,
            M.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            j._)((0,
            M.useState)(0), 2), m = g[0], p = g[1], v = (0,
            eo.Z)(), x = oG(), y = x.conversations, k = x.hasNextPage, C = x.fetchNextPage, _ = x.isLoading, T = x.isFetchingNextPage, N = x.isError, I = (0,
            P.hz)().has(er.DY), S = (0,
            M.useRef)(null), Z = (0,
            M.useCallback)(function(e) {
                var t;
                I && !_ && null != e && (null === (t = S.current) || void 0 === t || t.disconnect(),
                S.current = new IntersectionObserver(function(e) {
                    e[0].isIntersecting && k && C()
                }
                ),
                S.current.observe(e))
            }, [I, _, k, C]);
            (0,
            M.useEffect)(function() {
                return function() {
                    var e;
                    null === (e = S.current) || void 0 === e || e.disconnect()
                }
            }, []);
            var A = oQ();
            t = (0,
            M.useRef)(!!eg.m.getItem(oV)),
            r = (n = oG()).data,
            a = n.isError,
            (0,
            M.useEffect)(function() {
                var e, n;
                a || (null == r ? void 0 : null === (e = r.pages) || void 0 === e ? void 0 : null === (n = e[0]) || void 0 === n ? void 0 : n.has_missing_conversations) !== !0 || t.current || nH.m.warning("We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        eg.m.setItem(oV, !0),
                        t.current = !0
                    }
                })
            }, [null == r ? void 0 : r.pages, a]);
            var R = (i = (0,
            M.useRef)(),
            o = (0,
            M.useRef)(),
            ((0,
            M.useEffect)(function() {
                i.current = o.current,
                o.current = y
            }, [y]),
            y === o.current) ? i.current : o.current);
            (0,
            M.useEffect)(function() {
                v(function() {
                    p(m + 1)
                }, (0,
                z.Z)((0,
                H.Z)(), Date.now()) + 1e3)
            }, [m, v]);
            var D = 0 === y.length
              , L = (0,
            M.useMemo)(function() {
                return y.reduce(function(e, t) {
                    var n, r, a = new Date(null !== (r = null !== (n = t.update_time) && void 0 !== n ? n : t.create_time) && void 0 !== r ? r : 0), i = (0,
                    U.Z)(new Date, a);
                    if (0 === i)
                        e.recent.today.items.push(t);
                    else if (i <= 1)
                        e.recent.yesterday.items.push(t);
                    else if (i <= 7)
                        e.recent.lastSeven.items.push(t);
                    else if (i <= 30)
                        e.recent.lastThirty.items.push(t);
                    else if ((0,
                    G.Z)(a)) {
                        var o = (0,
                        W.Z)(a)
                          , s = (0,
                        V.Z)(a)
                          , l = "".concat(o, "-").concat(s);
                        e.dynamicMonths[l] ? e.dynamicMonths[l].items.push(t) : e.dynamicMonths[l] = {
                            label: c.formatDate(a, {
                                month: "long"
                            }),
                            items: [t]
                        }
                    } else {
                        var u = (0,
                        W.Z)(a)
                          , d = "".concat(u, "-");
                        e.dynamicYears[d] ? e.dynamicYears[d].items.push(t) : e.dynamicYears[d] = {
                            label: c.formatDate(a, {
                                year: "numeric"
                            }),
                            items: [t]
                        }
                    }
                    return e
                }, {
                    recent: {
                        today: {
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, o5.historyBucketToday)),
                            items: []
                        },
                        yesterday: {
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, o5.historyBucketYesterday)),
                            items: []
                        },
                        lastSeven: {
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, o5.historyBucketLastSeven)),
                            items: []
                        },
                        lastThirty: {
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, o5.historyBucketLastThirty)),
                            items: []
                        }
                    },
                    dynamicMonths: {},
                    dynamicYears: {}
                })
            }, [m, y]);
            return (0,
            w.jsxs)(o8, {
                $centered: _ || N && D,
                children: [D && _ && (0,
                w.jsx)(eM.Z, {
                    className: "m-auto"
                }), D && N && (0,
                w.jsxs)("div", {
                    className: "p-3 text-center italic text-gray-500",
                    children: [(0,
                    w.jsx)(et.Z, (0,
                    b._)({}, o5.unableToLoadHistory)), !f && (0,
                    w.jsx)("div", {
                        className: "mt-1",
                        children: (0,
                        w.jsx)(ed.z, {
                            as: "button",
                            color: "dark",
                            size: "small",
                            className: "m-auto mt-2",
                            onClick: function() {
                                h(!0),
                                A()
                            },
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, o5.retryButton))
                        })
                    })]
                }), !_ && (0,
                w.jsx)("div", {
                    children: (0,
                    w.jsx)(Q.M, {
                        initial: !1,
                        children: [L.recent, L.dynamicMonths, L.dynamicYears].flatMap(function(e, t) {
                            return (0,
                            w.jsx)("span", {
                                children: Object.entries(e).map(function(e) {
                                    var t = (0,
                                    j._)(e, 2)
                                      , n = t[0]
                                      , r = t[1]
                                      , a = r.items
                                      , i = r.label;
                                    if ("today" !== n && !a.length)
                                        return null;
                                    var o = !!a.find(function(e) {
                                        var t;
                                        return y.length > 0 && e.id === (null === (t = y[0]) || void 0 === t ? void 0 : t.id)
                                    });
                                    return (0,
                                    w.jsxs)($.E.div, {
                                        className: "relative",
                                        layoutId: "bucket-".concat(n),
                                        layout: "position",
                                        initial: {
                                            height: 0,
                                            opacity: 1,
                                            position: "relative"
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        children: [a.length > 0 && (0,
                                        w.jsx)($.E.div, {
                                            className: (0,
                                            q.Z)("sticky top-0", o ? "z-[16]" : "z-[14]"),
                                            layoutId: "bucketTitle-".concat(n),
                                            layout: "position",
                                            children: (0,
                                            w.jsx)(sr, {
                                                children: i
                                            })
                                        }), (0,
                                        w.jsx)("ol", {
                                            children: a.map(function(e, t) {
                                                var n = s === e.id
                                                  , r = null == R ? void 0 : R.find(function(t) {
                                                    return t.id === e.id
                                                });
                                                return (0,
                                                w.jsx)($.E.li, {
                                                    className: (0,
                                                    q.Z)("relative", o && 0 === t ? "z-[15]" : ""),
                                                    layoutId: "".concat(e.id),
                                                    layout: "position",
                                                    custom: {
                                                        isNew: !r
                                                    },
                                                    variants: o4,
                                                    initial: "initial",
                                                    animate: "animate",
                                                    exit: "exit",
                                                    children: (0,
                                                    w.jsx)(o7, {
                                                        id: e.id,
                                                        title: e.title,
                                                        active: n,
                                                        onNewThread: l,
                                                        setActiveRequests: u,
                                                        forwardRef: k && y[y.length - 5 - 1] && y[y.length - 5 - 1].id === e.id ? Z : void 0
                                                    })
                                                }, "history-item-".concat(e.id))
                                            })
                                        })]
                                    }, n)
                                })
                            }, "category-".concat(t))
                        })
                    })
                }), I ? T && (0,
                w.jsx)("div", {
                    className: "m-4 mb-5 flex justify-center",
                    children: (0,
                    w.jsx)(eM.Z, {})
                }) : (0,
                w.jsx)(w.Fragment, {
                    children: k && (0,
                    w.jsx)(ed.z, {
                        as: "button",
                        onClick: function() {
                            return C()
                        },
                        color: "dark",
                        className: "m-auto mb-2",
                        size: "small",
                        loading: T,
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, o5.showMoreButton))
                    })
                })]
            })
        }
        var o8 = T.Z.div(o$(), function(e) {
            return e.$centered && "h-full justify-center items-center"
        });
        function o7(e) {
            var t = e.id
              , n = e.title
              , r = e.active
              , a = e.onNewThread
              , i = e.forwardRef
              , o = e.setActiveRequests
              , s = (0,
            ea.w$)()
              , l = (0,
            N.WS)()
              , u = (0,
            _.useRouter)()
              , c = (0,
            j._)((0,
            M.useState)(!1), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            M.useRef)(null)
              , g = (0,
            j._)((0,
            M.useState)(!1), 2)
              , m = g[0]
              , p = g[1]
              , v = (0,
            P.hz)().has(er.RJ) && r
              , x = oQ()
              , b = (0,
            M.useCallback)(function(e) {
                var r, a;
                if (null == e || e.preventDefault(),
                f(!1),
                (null === (r = h.current) || void 0 === r ? void 0 : r.value) && (null === (a = h.current) || void 0 === a ? void 0 : a.value) !== n) {
                    var i = h.current.value;
                    en.ZP.patchConversation(t, {
                        title: i
                    }),
                    S.tQ.setTitle(t, i, S._L.User),
                    l(I.s6.renameThread, {
                        threadId: t,
                        content: i
                    }),
                    x()
                }
            }, [l, t, x, n])
              , y = (0,
            M.useCallback)(function(e) {
                "Enter" === e.key && b()
            }, [b])
              , k = (0,
            M.useCallback)(function() {
                en.ZP.patchConversation(t, {
                    is_visible: !1
                }).then(function() {
                    x()
                }),
                a()
            }, [t, a, x])
              , C = (0,
            M.useCallback)(function(e) {
                L.abortAllAndReset(),
                o(new Set),
                e.preventDefault(),
                l(I.s6.loadThread, {
                    threadId: t
                }),
                u.push("/c/".concat(t), void 0, {
                    shallow: !0
                })
            }, [l, t, u, o])
              , T = ei(t, n, r)
              , Z = T.resolvedTitle
              , A = T.isTypingEffect;
            if (d)
                return (0,
                w.jsxs)(se, {
                    $active: r,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.IC0,
                        className: "flex-shrink-0"
                    }), (0,
                    w.jsx)(st, {
                        ref: h,
                        type: "text",
                        defaultValue: null != Z ? Z : "",
                        autoFocus: !0,
                        onKeyDown: y,
                        className: "mr-0",
                        onBlur: b
                    }), (0,
                    w.jsxs)(si, {
                        $active: !0,
                        children: [(0,
                        w.jsx)(so, {
                            onClick: b,
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.UgA
                            })
                        }), (0,
                        w.jsx)(so, {
                            onClick: function(e) {
                                e.preventDefault(),
                                f(!1)
                            },
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.q5L
                            })
                        })]
                    })]
                });
            var R = A && r && s;
            return (0,
            w.jsxs)(o9, {
                onClick: r ? Y() : C,
                $active: r,
                $sharing: v,
                className: (0,
                q.Z)("group", R && "animate-flash"),
                ref: i,
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: m ? X.Ybf : X.IC0
                }), (0,
                w.jsxs)(sn, {
                    children: [R ? (0,
                    w.jsx)(eu, {
                        text: null != Z ? Z : ""
                    }) : m ? 'Delete "'.concat(Z, '"?') : Z, (!A || !r) && (0,
                    w.jsx)(sa, {
                        $active: r
                    })]
                }), m && (0,
                w.jsxs)(si, {
                    $active: !0,
                    children: [(0,
                    w.jsx)(so, {
                        onClick: k,
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.UgA
                        })
                    }), (0,
                    w.jsx)(so, {
                        onClick: function() {
                            p(!1)
                        },
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.q5L
                        })
                    })]
                }), r && !m && (0,
                w.jsxs)(si, {
                    $active: r,
                    children: [(0,
                    w.jsx)(so, {
                        onClick: function(e) {
                            e.preventDefault(),
                            f(!0)
                        },
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.Nte
                        })
                    }), v && (0,
                    w.jsx)(oU, {
                        children: (0,
                        w.jsx)(so, {
                            onClick: function(e) {
                                e.preventDefault(),
                                B.openSharingModal(t)
                            },
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.A8q
                            })
                        })
                    }), (0,
                    w.jsx)(so, {
                        onClick: function() {
                            return p(!0)
                        },
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.Ybf
                        })
                    })]
                })]
            })
        }
        var o9 = T.Z.a(oJ(), function(e) {
            var t = e.$active
              , n = e.$sharing;
            return t && n ? "pr-[4.5rem]" : ""
        }, function(e) {
            var t = e.$active
              , n = e.$sharing;
            return t && !n ? "pr-14" : ""
        }, function(e) {
            return e.$active ? "bg-gray-800 hover:bg-gray-800" : "hover:pr-4 bg-gray-900"
        })
          , se = T.Z.div(oY(), function(e) {
            return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "bg-gray-900"
        })
          , st = T.Z.input(oX())
          , sn = T.Z.div(oK())
          , sr = T.Z.h3(o0())
          , sa = T.Z.div(o1(), function(e) {
            return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
        })
          , si = T.Z.div(o2(), function(e) {
            return e.$active ? "visible" : "invisible group-hover:visible"
        })
          , so = T.Z.button(o3())
          , ss = n(9849)
          , sl = n(24760)
          , su = n(70788)
          , sc = n(37812)
          , sd = n(87316)
          , sf = n(44544)
          , sh = n(33733)
          , sg = n(25260)
          , sm = n(19208)
          , sp = n.n(sm);
        function sv() {
            var e = (0,
            ey.kP)().session
              , t = (0,
            P.hz)()
              , n = (0,
            tv.a)(["accounts"], function() {
                return en.ZP.getAccounts(null == e ? void 0 : e.accessToken)
            }, {
                enabled: !!(null == e ? void 0 : e.accessToken) && t.has("business_seats"),
                onError: function(e) {
                    console.error(e),
                    nH.m.danger("Failed to get the accounts you're a part of")
                }
            });
            return {
                data: n.data,
                isLoading: n.isLoading
            }
        }
        var sx = (0,
        Z.ZP)(function() {
            return {
                isModalOpen: !1,
                currentAccount: null
            }
        })
          , sb = {
            setIsModalOpen: function(e) {
                sx.setState({
                    isModalOpen: e
                })
            },
            setCurrentAccount: function(e) {
                sx.setState({
                    currentAccount: e
                })
            }
        }
          , sy = (0,
        K.vU)({
            accountSwitcherTitle: {
                id: "accountSwitcher.title",
                defaultMessage: "Choose Account",
                description: "title for account switcher modal"
            },
            emptyAccountTitle: {
                id: "accountSwitcher.emptyAccountTitle",
                defaultMessage: "Untitled Workspace",
                description: "title for workspace without a name"
            },
            personalAccount: {
                id: "accountSwitcher.personalAccount",
                defaultMessage: "Personal",
                description: "label for personal tier account"
            },
            businessAccount: {
                id: "accountSwitcher.businessAccount",
                defaultMessage: "Business",
                description: "label for business tier account"
            }
        });
        function sj() {
            var e = sx()
              , t = sv()
              , n = t.data
              , r = t.isLoading;
            (0,
            M.useEffect)(function() {
                var e = (0,
                sf.getCookie)("_account");
                if ("string" == typeof e && "" !== e) {
                    var t = null == n ? void 0 : n.data.find(function(t) {
                        return t.id === e
                    });
                    t && sb.setCurrentAccount(t)
                }
            }, [r, n]);
            var a = null != e.currentAccount && "personal" !== e.currentAccount.structure;
            return {
                isModalOpen: e.isModalOpen,
                currentAccount: e.currentAccount,
                accounts: (null == n ? void 0 : n.data) || [],
                isWorkspaceAccount: a
            }
        }
        function sk(e) {
            var t = e.className
              , n = e.iconSize
              , r = sj().currentAccount
              , a = (0,
            ey.kP)().session;
            return r && "personal" === r.structure && (null == a ? void 0 : a.user) !== void 0 ? (0,
            w.jsx)(sp(), {
                alt: "Profile",
                src: a.user.picture,
                width: 32,
                height: 32,
                className: "flex h-10 w-10 items-center justify-center rounded-full " + t
            }) : (0,
            w.jsx)("div", {
                className: "flex items-center justify-center rounded-full bg-blue-100 " + t,
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: sh.Z,
                    size: void 0 === n ? "small" : n,
                    className: "text-blue-400"
                })
            })
        }
        function sw(e) {
            var t, n, r = e.account, a = (0,
            ey.kP)().session, i = sj().currentAccount, o = (null == i ? void 0 : i.id) === r.id, s = (0,
            ee.Z)(), l = (0,
            M.useCallback)(function() {
                (0,
                sf.setCookie)("_account", r.id, {
                    maxAge: 31536e5
                }),
                sb.setCurrentAccount(r)
            }, [r]), u = r.name;
            "personal" === r.structure && (u = (null == a ? void 0 : null === (t = a.user) || void 0 === t ? void 0 : t.name) !== void 0 ? null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.name : s.formatMessage(sy.emptyAccountTitle)),
            u || (u = s.formatMessage(sy.emptyAccountTitle));
            var c = (0,
            w.jsx)("div", {
                className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100",
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: sh.Z,
                    size: "small",
                    className: "text-blue-400"
                })
            });
            return "personal" === r.structure && (null == a ? void 0 : a.user) !== void 0 && (c = (0,
            w.jsx)("div", {
                className: "flex h-10 w-10 items-center justify-center",
                children: (0,
                w.jsx)(sp(), {
                    alt: "Profile",
                    src: a.user.picture,
                    width: 32,
                    height: 32,
                    className: "flex h-10 w-10 items-center justify-center rounded-full"
                })
            })),
            (0,
            w.jsxs)("button", {
                onClick: l,
                className: (0,
                q.Z)({
                    "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800": !0,
                    "bg-gray-50 dark:bg-gray-800": o
                }),
                children: [(0,
                w.jsxs)("div", {
                    className: "flex w-full gap-4",
                    children: [c, (0,
                    w.jsxs)("div", {
                        className: "flex w-full flex-1 flex-col items-start justify-start gap-2",
                        children: [(0,
                        w.jsx)("div", {
                            className: "inline align-top font-medium capitalize",
                            children: u
                        }), (0,
                        w.jsx)("div", {
                            className: "text-sm text-gray-500",
                            children: "personal" == r.structure ? s.formatMessage(sy.personalAccount) : s.formatMessage(sy.businessAccount)
                        })]
                    })]
                }), (0,
                w.jsx)("div", {
                    className: "flex h-full items-center p-1",
                    children: o && (0,
                    w.jsx)("div", {
                        className: "",
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: sg.Z,
                            size: "medium"
                        })
                    })
                })]
            })
        }
        function sC(e) {
            var t = e.data.data.map(function(e) {
                return (0,
                w.jsx)(sw, {
                    account: e
                }, e.id)
            });
            return (0,
            w.jsx)("div", {
                className: "flex w-full flex-col gap-2",
                children: t
            })
        }
        function s_() {
            var e = sx().isModalOpen
              , t = sv()
              , n = t.data
              , r = t.isLoading
              , a = (0,
            ee.Z)()
              , i = (0,
            M.useCallback)(function() {
                sb.setIsModalOpen(!1)
            }, []);
            return r || !n ? null : (0,
            w.jsx)(e_.ZP, {
                onModalClose: i,
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: i
                }),
                type: "success",
                isOpen: e,
                fullBleed: !0,
                title: a.formatMessage(sy.accountSwitcherTitle),
                children: (0,
                w.jsx)("div", {
                    className: "flex w-full items-center justify-between  px-6 py-4",
                    children: (0,
                    w.jsx)(sC, {
                        data: n
                    })
                })
            })
        }
        var sM = n(181);
        function sT(e) {
            var t = e.children
              , n = e.sidebarOpen
              , r = e.onClose;
            return (0,
            w.jsx)(aD.u.Root, {
                show: n,
                as: M.Fragment,
                children: (0,
                w.jsxs)(sl.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: r,
                    children: [(0,
                    w.jsx)("div", {
                        className: "fixed inset-0"
                    }), (0,
                    w.jsx)("div", {
                        className: "fixed inset-0 overflow-hidden",
                        children: (0,
                        w.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: (0,
                            w.jsx)("div", {
                                className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                children: (0,
                                w.jsx)(aD.u.Child, {
                                    as: M.Fragment,
                                    enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                    enterFrom: "translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "translate-x-full",
                                    children: (0,
                                    w.jsx)(sl.V.Panel, {
                                        className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                        children: (0,
                                        w.jsx)("div", {
                                            className: "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                            children: t
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        }
        function sN() {
            var e = (0,
            k._)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800"]);
            return sN = function() {
                return e
            }
            ,
            e
        }
        function sI() {
            var e = (0,
            k._)(["whitespace-pre-wrap text-sm"]);
            return sI = function() {
                return e
            }
            ,
            e
        }
        function sP() {
            var e = (0,
            k._)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"]);
            return sP = function() {
                return e
            }
            ,
            e
        }
        function sS(e) {
            var t = e.children
              , n = e.title
              , r = e.icon
              , a = e.isOpen
              , i = e.slideOver
              , o = e.onClose
              , s = (0,
            w.jsxs)(sR, {
                children: [(0,
                w.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0,
                    w.jsxs)("div", {
                        className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                        children: [(0,
                        w.jsx)(ef.ZP, {
                            icon: r
                        }), n]
                    }), (0,
                    w.jsx)("div", {
                        className: "mr-2 mt-2 flex h-7 items-center",
                        children: (0,
                        w.jsxs)("button", {
                            type: "button",
                            className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                            onClick: o,
                            children: [(0,
                            w.jsx)("span", {
                                className: "sr-only",
                                children: "Close sidebar"
                            }), (0,
                            w.jsx)(ef.ZP, {
                                icon: X.q5L,
                                size: "medium",
                                "aria-hidden": "true"
                            })]
                        })
                    })]
                }), t]
            });
            return i ? (0,
            w.jsx)(sT, {
                sidebarOpen: a,
                onClose: o,
                children: s
            }) : a ? s : null
        }
        function sZ(e) {
            var t = e.clientThreadId
              , n = e.currentLeafId
              , r = e.isOpen
              , a = e.slideOver
              , i = e.onClose
              , o = (0,
            S.u9)(t, n)
              , s = (0,
            j._)((0,
            M.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            P.hz)()
              , d = (0,
            M.useCallback)(function() {
                u(void 0)
            }, [])
              , f = (0,
            M.useCallback)(function() {
                var e = S.tQ.getTree(t);
                navigator.clipboard.writeText(e.getTextFromThread(n))
            }, [n, t]);
            if (!c.has("debug"))
                return null;
            var h = o.map(function(e, t) {
                var n = e.author
                  , r = n.role
                  , a = n.name;
                return (0,
                w.jsxs)(sL, {
                    role: "button",
                    onClick: function() {
                        return u(t)
                    },
                    children: [(0,
                    w.jsxs)("div", {
                        className: "text-xs font-medium uppercase text-gray-400",
                        children: [r, a && a !== r && " (".concat(a, ")"), " -> ", eL.Cv.getRecipientFromMessage(e)]
                    }), (0,
                    w.jsx)("div", {
                        children: eL.Cv.getTextFromMessage(e)
                    })]
                }, e.id)
            });
            return (0,
            w.jsxs)(sS, {
                icon: X.cDN,
                title: "Debug",
                isOpen: r,
                slideOver: a,
                onClose: i,
                children: [(0,
                w.jsxs)("div", {
                    className: "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
                    children: ["Conversation messages", (0,
                    w.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        w.jsx)(e2.u, {
                            label: "Copy conversation text to clipboard",
                            children: (0,
                            w.jsx)(eK, {
                                onCopy: f
                            })
                        }), (0,
                        w.jsx)(e2.u, {
                            label: "Download raw conversation",
                            children: (0,
                            w.jsx)(sA, {
                                clientThreadId: t,
                                messages: o
                            })
                        })]
                    })]
                }), (0,
                w.jsx)(sD, {
                    children: h
                }), void 0 !== l && (0,
                w.jsx)(e_.ZP, {
                    isOpen: !0,
                    onModalClose: d,
                    type: "success",
                    children: (0,
                    w.jsx)("pre", {
                        className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                        children: JSON.stringify(o[l], null, 2)
                    })
                }, "DebugMessageModal-".concat(l))]
            })
        }
        function sA(e) {
            var t = e.clientThreadId
              , n = e.messages
              , r = (0,
            M.useCallback)(function() {
                var e = JSON.stringify(n) + "\n"
                  , r = new Blob([e],{
                    type: "application/json"
                })
                  , a = URL.createObjectURL(r)
                  , i = document.createElement("a");
                i.href = a,
                i.download = "messages-".concat(S.tQ.getServerThreadId(t), ".jsonl"),
                i.click(),
                URL.revokeObjectURL(a)
            }, [t, n]);
            return (0,
            w.jsx)("button", {
                onClick: r,
                children: (0,
                w.jsx)(ef.ZP, {
                    icon: X._hL
                })
            })
        }
        var sR = T.Z.div(sN())
          , sD = T.Z.pre(sI())
          , sL = T.Z.div(sP())
          , sF = (0,
        Z.ZP)(function() {
            return {
                isOpen: !1
            }
        })
          , sE = {
            close: function() {
                sF.setState({
                    isOpen: !1
                })
            },
            setIsOpen: function(e) {
                sF.setState({
                    isOpen: e
                })
            }
        };
        function sB(e) {
            var t = e.slideOver
              , n = (0,
            j._)((0,
            M.useState)(), 2)
              , r = n[0]
              , a = n[1]
              , i = (0,
            j._)((0,
            M.useState)(!1), 2)
              , o = i[0]
              , s = i[1]
              , l = (0,
            j._)((0,
            M.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            j._)((0,
            M.useState)(!1), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            ey.kP)().session
              , m = (null == g ? void 0 : g.user) != null && (0,
            ey.yl)(g.user)
              , p = (0,
            P.hz)()
              , v = (0,
            C.NL)()
              , x = sF(function(e) {
                return e.isOpen
            })
              , b = ic()
              , y = iw().fetchManifestAndSpec
              , k = (0,
            M.useMemo)(function() {
                return m ? b[0] : b.find(nG)
            }, [b, m])
              , _ = (0,
            M.useCallback)((0,
            em._)(function() {
                return (0,
                ev.Jh)(this, function(e) {
                    return k && (a(void 0),
                    y({
                        domain: k.domain,
                        onSuccess: function(e) {
                            a({
                                manifestValidationInfo: e.scrapeManifestResponse.manifest_validation_info,
                                apiValidationInfo: e.apiValidationInfo
                            }),
                            null != e.scrapeManifestResponse.plugin && ij(e.scrapeManifestResponse.plugin, v, ["installedAip"])
                        },
                        onError: function(e) {
                            nH.m.danger((null == e ? void 0 : e.message) || "Error refreshing plugin.")
                        }
                    })),
                    [2]
                })
            }), [k, v, y]);
            return ((0,
            M.useEffect)(function() {
                x && _()
            }, [x, _]),
            p.has("tools3_dev")) ? (0,
            w.jsx)(sS, {
                icon: X.V7f,
                title: "Plugin devtools",
                isOpen: x,
                slideOver: t,
                onClose: sE.close,
                children: (0,
                w.jsx)("div", {
                    className: "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                    children: null != k ? (0,
                    w.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        w.jsx)("div", {
                            children: (0,
                            w.jsx)(ed.z, {
                                size: "small",
                                color: "neutral",
                                onClick: _,
                                children: "Refresh plugin"
                            })
                        }), r ? (0,
                        w.jsxs)(w.Fragment, {
                            children: [(0,
                            w.jsx)(iC, {
                                plugin: k
                            }), (0,
                            w.jsxs)("div", {
                                children: ["Plugin id: ", k.id]
                            }), (0,
                            w.jsx)(iI, {
                                manifestValidationInfo: r.manifestValidationInfo,
                                expanded: o,
                                onChangeExpanded: s
                            }), null != r.apiValidationInfo && (0,
                            w.jsxs)(w.Fragment, {
                                children: [(0,
                                w.jsx)(iP, {
                                    apiValidationInfo: r.apiValidationInfo,
                                    expanded: u,
                                    onChangeExpanded: c
                                }), (0,
                                w.jsx)(iS, {
                                    apiValidationInfo: r.apiValidationInfo,
                                    expanded: f,
                                    onChangeExpanded: h
                                })]
                            })]
                        }) : (0,
                        w.jsx)("div", {
                            className: "self-center",
                            children: (0,
                            w.jsx)(eM.Z, {})
                        })]
                    }) : (0,
                    w.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: ["Please enable a localhost plugin", " ", m && " (or any plugin if you're an OpenAI employee) ", "to use devtools."]
                    })
                })
            }) : null
        }
        var sO = n(44925)
          , sq = {
            Root: function(e) {
                var t = e.children
                  , n = e.className;
                return (0,
                w.jsx)("div", {
                    className: (0,
                    q.Z)("overflow-y-auto rounded-md border border-gray-100 dark:border-gray-700", n),
                    children: (0,
                    w.jsx)("table", {
                        className: "w-full border-separate border-spacing-0",
                        children: t
                    })
                })
            },
            Header: function(e) {
                var t = e.children;
                return (0,
                w.jsx)("thead", {
                    children: (0,
                    w.jsx)("tr", {
                        children: t
                    })
                })
            },
            HeaderCell: function(e) {
                var t = e.textAlign
                  , n = e.children;
                return (0,
                w.jsx)("th", {
                    className: (0,
                    q.Z)("sticky top-0 rounded-t border-b border-gray-100 bg-white px-4 py-2 font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200", "left" === (void 0 === t ? "left" : t) ? "text-left" : "text-right"),
                    children: n
                })
            },
            Body: function(e) {
                var t = e.children;
                return (0,
                w.jsx)("tbody", {
                    children: t
                })
            },
            Row: function(e) {
                var t = e.children;
                return (0,
                w.jsx)("tr", {
                    children: t
                })
            },
            Cell: function(e) {
                var t = e.children;
                return (0,
                w.jsx)("td", {
                    className: "border-b border-gray-100 px-4 py-2 text-gray-600 dark:border-gray-700 dark:text-gray-500 [tr:last-child_&]:border-b-0",
                    children: t
                })
            },
            Actions: function(e) {
                var t = e.children;
                return (0,
                w.jsx)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: t
                })
            }
        }
          , sU = ["sharedConversations"]
          , sz = (0,
        K.vU)({
            name: {
                id: "sharedConversationModal.name",
                defaultMessage: "Name",
                description: "Table column header"
            },
            dateShared: {
                id: "sharedConversationModal.dateShared",
                defaultMessage: "Date shared",
                description: "Table column header"
            },
            loading: {
                id: "sharedConversationModal.loading",
                defaultMessage: "Loading...",
                description: "Loading message"
            },
            somethingWentWrong: {
                id: "sharedConversationModal.somethingWentWrong",
                defaultMessage: "Something went wrong...",
                description: "Error message"
            },
            retry: {
                id: "sharedConversationModal.retry",
                defaultMessage: "Retry",
                description: "Retry button text"
            },
            noSharedConversations: {
                id: "sharedConversationModal.noSharedConversations",
                defaultMessage: "You have no shared links.",
                description: "No shared links message"
            },
            title: {
                id: "sharedConversationModal.title",
                defaultMessage: "Shared Links",
                description: "Shared links modal title"
            },
            goToOriginConversation: {
                id: "sharedConversationModal.goToOriginConversation",
                defaultMessage: "Go to conversation",
                description: "Label for conversation icon"
            },
            deleteSharedConversation: {
                id: "sharedConversationModal.deleteSharedConversation",
                defaultMessage: "Delete shared conversation",
                description: "Label for delete shared conversation icon"
            },
            deleteSharedConversationFailed: {
                id: "sharedConversationModal.deleteSharedConversationFailed",
                defaultMessage: "Deleting shared conversation failed",
                description: "Toaster message when deleting share link fails"
            },
            deleteAllSharedConversations: {
                id: "sharedConversationModal.deleteSharedAllConversations",
                defaultMessage: "Delete all shared links",
                description: "Menu item for deleting all shared links"
            },
            deleteAllSharedConversationsConfirm: {
                id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
                defaultMessage: "Are you sure you want to delete all your shared links?",
                description: "Confirmation message for deleting share links"
            },
            deleteAllSharedConversationsFailed: {
                id: "sharedConversationModal.deleteSharedAllConversationsFailed",
                defaultMessage: "Deleting shared links failed",
                description: "Toaster message when deleting all share links fails"
            }
        });
        function sH() {
            var e = (0,
            C.NL)()
              , t = (0,
            ee.Z)()
              , n = (0,
            ix.D)({
                mutationFn: function() {
                    return en.ZP.deleteAllSharedConversations()
                },
                onSettled: function() {
                    e.invalidateQueries(sU)
                },
                onError: function() {
                    nH.m.danger(t.formatMessage(sz.deleteAllSharedConversationsFailed))
                }
            }).mutate;
            return (0,
            w.jsxs)(r2.fC, {
                children: [(0,
                w.jsx)(r2.xz, {
                    asChild: !0,
                    children: (0,
                    w.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                        children: (0,
                        w.jsx)(ef.ZP, {
                            icon: X.K9M
                        })
                    })
                }), (0,
                w.jsx)(r2.Uv, {
                    children: (0,
                    w.jsx)(r2.VY, {
                        className: "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                        side: "bottom",
                        sideOffset: 4,
                        children: (0,
                        w.jsx)(r2.ck, {
                            onClick: function() {
                                window.confirm(t.formatMessage(sz.deleteAllSharedConversationsConfirm)) && n()
                            },
                            className: "select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sz.deleteAllSharedConversations))
                        })
                    })
                })]
            })
        }
        function sV() {
            return en.ZP.getSharedConversations()
        }
        function sW(e) {
            var t = e.sharedConversation
              , n = (0,
            ee.Z)()
              , r = (0,
            C.NL)()
              , a = (0,
            ix.D)({
                mutationFn: function(e) {
                    var t = e.sharedConversationId;
                    return en.ZP.deleteShareLink({
                        share_id: t
                    })
                },
                onSettled: function() {
                    r.invalidateQueries(sU)
                },
                onError: function() {
                    nH.m.danger(n.formatMessage(sz.deleteSharedConversationFailed))
                }
            }).mutate;
            return (0,
            w.jsxs)(sq.Row, {
                children: [(0,
                w.jsx)(sq.Cell, {
                    children: (0,
                    w.jsxs)("a", {
                        href: "/share/".concat(t.id),
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                        children: [(0,
                        w.jsx)(ef.ZP, {
                            icon: X.XKb,
                            className: "flex-shrink-0"
                        }), t.title]
                    })
                }), (0,
                w.jsx)(sq.Cell, {
                    children: null != t.create_time ? (0,
                    w.jsx)(K.Ji, {
                        value: t.create_time,
                        month: "long",
                        year: "numeric",
                        day: "numeric"
                    }) : null
                }), (0,
                w.jsx)(sq.Cell, {
                    children: (0,
                    w.jsxs)(sq.Actions, {
                        children: [(0,
                        w.jsx)("a", {
                            href: "/c/".concat(t.conversation_id),
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": n.formatMessage(sz.goToOriginConversation),
                            title: n.formatMessage(sz.goToOriginConversation),
                            className: "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.IC0
                            })
                        }), (0,
                        w.jsx)("button", {
                            onClick: function() {
                                a({
                                    sharedConversationId: t.id
                                })
                            },
                            "aria-label": n.formatMessage(sz.deleteSharedConversation),
                            title: n.formatMessage(sz.deleteSharedConversation),
                            className: "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.Ybf
                            })
                        })]
                    })
                })]
            })
        }
        function sG(e) {
            var t, n = e.onClose, r = (0,
            tv.a)({
                queryKey: sU,
                queryFn: sV,
                refetchOnMount: "always"
            }), a = r.data, i = r.isLoading, o = r.isError, s = r.refetch, l = (0,
            ee.Z)();
            return t = i ? (0,
            w.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, sz.loading))
            }) : o ? (0,
            w.jsxs)("div", {
                children: [(0,
                w.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, sz.somethingWentWrong))
                }), (0,
                w.jsx)("div", {
                    children: (0,
                    w.jsx)(ed.z, {
                        color: "neutral",
                        onClick: function() {
                            s()
                        },
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sz.retry))
                    })
                })]
            }) : 0 === a.total ? (0,
            w.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0,
                w.jsx)(et.Z, (0,
                b._)({}, sz.noSharedConversations))
            }) : (0,
            w.jsxs)(sq.Root, {
                className: "max-h-[28rem]",
                children: [(0,
                w.jsxs)(sq.Header, {
                    children: [(0,
                    w.jsx)(sq.HeaderCell, {
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sz.name))
                    }), (0,
                    w.jsx)(sq.HeaderCell, {
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sz.dateShared))
                    }), (0,
                    w.jsx)(sq.HeaderCell, {
                        textAlign: "right",
                        children: (0,
                        w.jsx)(sH, {})
                    })]
                }), (0,
                w.jsx)(sq.Body, {
                    children: a.items.map(function(e) {
                        return (0,
                        w.jsx)(sW, {
                            sharedConversation: e
                        }, e.id)
                    })
                })]
            }),
            (0,
            w.jsx)(e_.ZP, {
                type: "success",
                size: "custom",
                isOpen: !0,
                title: l.formatMessage(sz.title),
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: n
                }),
                className: "max-w-2xl",
                onModalClose: n,
                children: t
            })
        }
        var sQ = n(16681);
        function s$(e) {
            var t = e.onChange
              , n = e.enabled
              , r = e.label
              , a = e.disabled
              , i = (0,
            M.useCallback)(function() {
                t(!n)
            }, [n, t]);
            return (0,
            w.jsx)(sQ.fC, {
                checked: n,
                disabled: a,
                onCheckedChange: i,
                "aria-label": r,
                className: (0,
                q.Z)(a && "cursor-not-allowed opacity-30", "bg-gray-200 radix-state-checked:bg-green-600", "relative h-[25px] w-[42px] cursor-pointer rounded-full"),
                children: (0,
                w.jsx)(sQ.bU, {
                    className: (0,
                    q.Z)("block h-[21px] w-[21px] rounded-full", "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]", "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]")
                })
            })
        }
        function sJ() {
            var e = (0,
            k._)(["block text-sm font-medium mb-1"]);
            return sJ = function() {
                return e
            }
            ,
            e
        }
        var sY = (0,
        K.vU)({
            settings: {
                id: "settingsModal.settings",
                defaultMessage: "Settings",
                description: "Title for the settings modal"
            },
            theme: {
                id: "settingsModal.theme",
                defaultMessage: "Theme",
                description: "Label for the theme setting"
            },
            system: {
                id: "settingsModal.system",
                defaultMessage: "System",
                description: "Option for the system theme"
            },
            dark: {
                id: "settingsModal.dark",
                defaultMessage: "Dark",
                description: "Option for the dark theme"
            },
            light: {
                id: "settingsModal.light",
                defaultMessage: "Light",
                description: "Option for the light theme"
            },
            sharedConversations: {
                id: "settingsModal.sharedConversations",
                defaultMessage: "Shared Links",
                description: "Label for the shared conversation/link button"
            },
            sharedConversationsButton: {
                id: "settingsModal.sharedConversationsButton",
                defaultMessage: "Manage",
                description: "Manage shared links/conversations button"
            },
            exportData: {
                id: "settingsModal.exportData",
                defaultMessage: "Export data",
                description: "Label for the export data button"
            },
            exportButton: {
                id: "settingsModal.exportButton",
                defaultMessage: "Export",
                description: "Export data button"
            },
            deleteAccount: {
                id: "settingsModal.deleteAccount",
                defaultMessage: "Delete account",
                description: "Label for the delete account button"
            },
            deleteAccountButton: {
                id: "settingsModal.deleteButton",
                defaultMessage: "Delete",
                description: "Delete account button"
            },
            openPluginDevtools: {
                id: "settingsModal.openPluginDevtools",
                defaultMessage: "Open plugin devtools",
                description: "Label for the open plugin devtools setting"
            },
            enable2fa: {
                id: "settingsModal.enable2fa",
                defaultMessage: "Enable two-factor authentication",
                description: "Label for the enable 2FA button"
            },
            enable: {
                id: "settingsModal.enable",
                defaultMessage: "Enable",
                description: "Enable 2FA button"
            },
            disable: {
                id: "settingsModal.disable",
                defaultMessage: "Disable",
                description: "Disable 2FA button"
            },
            disable2fa: {
                id: "settingsModal.disable2fa",
                defaultMessage: "Disable two factor authentication",
                description: "Label for the mfa remove button."
            },
            chatHistoryDescription: {
                id: "settingsModal.chatHistoryDescription",
                defaultMessage: "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
                description: "Description for the chat history setting"
            },
            deleteHistoryModalTitle: {
                id: "settingsModal.deleteHistoryModalTitle",
                defaultMessage: "Clear your conversation history - are you sure?",
                description: "Title for the delete history modal"
            },
            deleteHistoryModalConfirm: {
                id: "settingsModal.deleteHistoryModalConfirm",
                defaultMessage: "Confirm deletion",
                description: "Confirm button for the delete history modal"
            },
            deleteHistoryModalCancel: {
                id: "settingsModal.deleteHistoryModalCancel",
                defaultMessage: "Cancel",
                description: "Cancel button for the delete history modal"
            },
            dataExportRequested: {
                id: "settingsModal.dataExportRequested",
                defaultMessage: "Successfully exported data. You should receive an email shortly with your data.",
                description: "Message shown when a data export request is received"
            },
            dataExportFailed: {
                id: "settingsModal.dataExportFailed",
                defaultMessage: "We were unable to process your export at this time. Please try again later.",
                description: "Message shown when a data export request fails"
            },
            dataExportModalTitle: {
                id: "settingsModal.dataExportModalTitle",
                defaultMessage: "Request data export - are you sure?",
                description: "Title for the data export modal"
            },
            dataExportModalConfirm: {
                id: "settingsModal.dataExportModalConfirm",
                defaultMessage: "Confirm export",
                description: "Confirm button for the data export modal"
            },
            dataExportModalCancel: {
                id: "settingsModal.dataExportModalCancel",
                defaultMessage: "Cancel",
                description: "Cancel button for the data export modal"
            },
            dataExportModalDescription1: {
                id: "settingsModal.dataExportModalDescription1",
                defaultMessage: "Your account details and conversations will be included in the export.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription2: {
                id: "settingsModal.dataExportModalDescription2",
                defaultMessage: "The data will be sent to your registered email in a downloadable file.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription3: {
                id: "settingsModal.dataExportModalDescription3",
                defaultMessage: "Processing may take some time. You'll be notified when it's ready.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription4: {
                id: "settingsModal.dataExportModalDescription4",
                defaultMessage: 'To proceed, click "Confirm export" below.',
                description: "Description for the data export modal"
            },
            deleteAccountSessionTooOld: {
                id: "settingsModal.deleteAccountSessionTooOld",
                defaultMessage: "Your login session is too old. Please log in again before deleting your account.",
                description: "Message shown when the user's login session is too old to delete their account."
            },
            deleteAccountFailed: {
                id: "settingsModal.deleteAccountFailed",
                defaultMessage: "Failed to delete account. Please try again later.",
                description: "Message shown when there's an error deleting the user's account."
            },
            deleteAccountTitle: {
                id: "settingsModal.deleteAccountTitle",
                defaultMessage: "Delete account - are you sure?",
                description: "Title for the delete account confirmation modal."
            },
            deleteAccountWarning: {
                id: "settingsModal.deleteAccountWarning",
                defaultMessage: "Deleting your account is permanent and cannot be undone.",
                description: "Warning message about account deletion being permanent."
            },
            reuseEmailPhoneWarning: {
                id: "settingsModal.reuseEmailPhoneWarning",
                defaultMessage: "For security reasons, you cannot reuse the same email or phone number for a new account.",
                description: "Warning message about not being able to reuse email or phone number for a new account."
            },
            dataRemovalWarning: {
                id: "settingsModal.dataRemovalWarning",
                defaultMessage: "All your data, including profile, conversations, and API usage, will be removed.",
                description: "Warning message about data removal after account deletion."
            },
            apiAccessDeletionWarning: {
                id: "settingsModal.apiAccessDeletionWarning",
                defaultMessage: "If you've been using ChatGPT with the API, this access will also be deleted.",
                description: "Warning message about API access being deleted."
            },
            iapSubscriptionWarning: {
                id: "settingsModal.iapSubscriptionWarning",
                defaultMessage: "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
                description: "Warning message about cancelling in-app subscriptions."
            },
            typeEmailLabel: {
                id: "settingsModal.typeEmailLabel",
                defaultMessage: "Please type your account email.",
                description: "Label for email input field when deleting an account."
            },
            typeDeleteInputLabel: {
                id: "settingsModal.typeDeleteInputLabel",
                defaultMessage: 'To proceed, type "DELETE" in the input field below.',
                description: "Label for DELETE input field when deleting an account."
            },
            lockedButtonLabel: {
                id: "settingsModal.lockedButtonLabel",
                defaultMessage: "Locked",
                description: "Label for the locked button when deleting an account."
            },
            deleteAccountButtonLabel: {
                id: "settingsModal.deleteAccountButtonLabel",
                defaultMessage: "Permanently delete my account",
                description: "Label for the button to confirm account deletion."
            },
            recentLoginMessage: {
                id: "settingsModal.recentLoginMessage",
                defaultMessage: "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
                description: "Message shown when the user needs to log in again to delete their account."
            },
            refreshLoginButtonLabel: {
                id: "settingsModal.refreshLoginButtonLabel",
                defaultMessage: "Refresh login",
                description: "Label for the button to refresh login."
            },
            dataControlsLabel: {
                id: "settingsModal.dataControlsLabel",
                defaultMessage: "Data Controls",
                description: "Label for the data controls section."
            },
            hideLabel: {
                id: "settingsModal.hideLabel",
                defaultMessage: "Hide",
                description: "Label for the hide button."
            },
            showLabel: {
                id: "settingsModal.showLabel",
                defaultMessage: "Show",
                description: "Label for the show button."
            },
            chatHistoryToggleLabel: {
                id: "settingsModal.chatHistoryToggleLabel",
                defaultMessage: "Chat History & Training",
                description: "Label for the chat history toggle."
            },
            dataControlsTab: {
                id: "settingsModal.dataControls",
                defaultMessage: "Data controls",
                description: "Label for the data controls tab"
            },
            betaIntro: {
                id: "settingsModal.betaIntro",
                defaultMessage: "As a Plus user, enjoy early access to experimental new features, which may change during development.",
                description: "Introduction for the beta features tab"
            },
            betaSettingsUpdateFailed: {
                id: "settingsModal.betaSettingsUpdateFailed",
                defaultMessage: "Failed to update your beta setting",
                description: "Message shown when there's an error updating beta settings"
            },
            betaPluginToggleLabel: {
                id: "settingsModal.betaPluginToggleLabel",
                defaultMessage: "Plugins",
                description: "Label for the Plugins beta toggle."
            },
            betaPluginToggleDescription: {
                id: "settingsModal.betaPluginToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
                description: "Description for the Plugins beta toggle."
            },
            betaBrowsingToggleLabel: {
                id: "settingsModal.betaBrowsingToggleLabel",
                defaultMessage: "Web browsing",
                description: "Label for the Browsing beta toggle."
            },
            betaBrowsingToggleLabelBing: {
                id: "settingsModal.betaBrowsingToggleLabel.bing",
                defaultMessage: "Browse with Bing",
                description: "Label for the Browse with Bing beta toggle."
            },
            betaBrowsingToggleDescription: {
                id: "settingsModal.betaBrowsingToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
                description: "Description for the Browsing beta toggle."
            },
            betaCodeInterpreterToggleLabel: {
                id: "settingsModal.betaCodeInterpreterToggleLabel",
                defaultMessage: "Code interpreter",
                description: "Label for the Code interpreter beta toggle."
            },
            betaCodeInterpreterToggleDescription: {
                id: "settingsModal.betaCodeInterpreterToggleDescription",
                defaultMessage: "Your favorite GPT models now use a python sandbox. Once enabled, ChatGPT can build and run python code.",
                description: "Description for the Code interpreter beta toggle."
            },
            generalTab: {
                id: "settingsModal.general",
                defaultMessage: "General",
                description: "Label for the general tab"
            },
            betaTab: {
                id: "settingsModal.beta",
                defaultMessage: "Beta features",
                description: "Label for the Beta Features tab"
            },
            clearChatLabel: {
                id: "settingsModal.clearChatLabel",
                defaultMessage: "Clear all chats",
                description: "Label for the clear chat button"
            },
            clearChatButton: {
                id: "settingsModal.clearChatButton",
                defaultMessage: "Clear",
                description: "Clear chat button"
            }
        });
        function sX(e) {
            var t, n, r = e.onClose, a = e.onToggleHistoryDisabled, i = e.onDeleteHistory, o = (0,
            ee.Z)(), s = oG().conversations.length > 0, l = (0,
            ea.w$)(), u = (0,
            j._)((0,
            M.useState)(!1), 2), c = u[0], d = u[1], f = (0,
            j._)((0,
            M.useState)(!1), 2), h = f[0], g = f[1], m = (0,
            j._)((0,
            M.useState)(!1), 2), p = m[0], v = m[1], y = (0,
            j._)((0,
            M.useState)(!1), 2), k = y[0], C = y[1], _ = (0,
            j._)((0,
            M.useState)(x.General), 2), T = _[0], N = _[1], I = (0,
            M.useContext)(O.QL), S = I.historyDisabled, Z = I.toggleHistoryDisabled, A = sF(function(e) {
                return e.isOpen
            }), R = (0,
            P.hz)(), D = R.has(er.RJ), L = R.has("data_export_enabled"), F = R.has("data_deletion_enabled"), E = (0,
            ey.kP)().session, B = (0,
            eI.Fl)(), U = B.isBetaFeaturesUiEnabled, z = B.isPluginsAvailable, H = B.isBrowsingAvailable, V = B.isCodeInterpreterAvailable, W = (0,
            M.useCallback)(function() {
                d(!1)
            }, []), G = (0,
            M.useCallback)(function() {
                g(!1)
            }, []), Q = (0,
            M.useCallback)(function() {
                v(!1)
            }, []), $ = (0,
            M.useCallback)(function() {
                d(!0)
            }, []), J = (0,
            M.useCallback)(function() {
                g(!0)
            }, []), Y = (0,
            M.useCallback)(function() {
                v(!0)
            }, []), X = (0,
            M.useCallback)(function() {
                a(),
                Z()
            }, [a, Z]), K = iG(), en = K.setupMfa, ei = K.isUsernamePassword, eo = K.removeMfa;
            return c ? (0,
            w.jsx)(s5, {
                onClose: W
            }) : h ? (0,
            w.jsx)(s3, {
                onClose: G,
                onDeleteHistory: i
            }) : p ? (0,
            w.jsx)(s7, {
                onClose: Q
            }) : k ? (0,
            w.jsx)(sG, {
                onClose: function() {
                    C(!1)
                }
            }) : (0,
            w.jsx)(e_.ZP, {
                size: "custom",
                isOpen: !0,
                onModalClose: r,
                className: "md:w-[680px]",
                type: "success",
                title: o.formatMessage(sY.settings),
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: r
                }),
                children: (0,
                w.jsxs)(sM.fC, {
                    className: "flex flex-col gap-6 md:flex-row",
                    defaultValue: T,
                    orientation: l ? "vertical" : void 0,
                    onValueChange: function(e) {
                        N(e)
                    },
                    children: [(0,
                    w.jsxs)(sM.aV, {
                        className: (0,
                        q.Z)("-ml-[8px] flex min-w-[180px] flex-shrink-0", l ? "flex-col" : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"),
                        children: [(0,
                        w.jsx)(s4, {
                            value: x.General,
                            icon: eb.oq2,
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.generalTab))
                        }), U && (H || z || V) && (0,
                        w.jsx)(s4, {
                            value: x.BetaFeatures,
                            icon: eb.rTN,
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.betaTab))
                        }), (0,
                        w.jsx)(s4, {
                            value: x.DataControls,
                            icon: eb.tQn,
                            label: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.dataControlsTab))
                        })]
                    }), (0,
                    w.jsxs)(s6, {
                        value: x.General,
                        children: [(0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s2, {})
                        }), R.has("tools3_dev") && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s0, {
                                label: o.formatMessage(sY.openPluginDevtools),
                                enabled: A,
                                onChange: sE.setIsOpen
                            })
                        }), (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                color: "danger",
                                disabled: !s,
                                label: o.formatMessage(sY.clearChatLabel),
                                buttonLabel: o.formatMessage(sY.clearChatButton),
                                onClick: J
                            })
                        })]
                    }), (0,
                    w.jsx)(s6, {
                        value: x.BetaFeatures,
                        children: (0,
                        w.jsx)(sK, {})
                    }), (0,
                    w.jsxs)(s6, {
                        value: x.DataControls,
                        children: [(0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s0, {
                                label: o.formatMessage(sY.chatHistoryToggleLabel),
                                enabled: !S,
                                onChange: X,
                                description: (0,
                                w.jsx)(et.Z, (0,
                                ep._)((0,
                                b._)({}, sY.chatHistoryDescription), {
                                    values: {
                                        link: function(e) {
                                            return (0,
                                            w.jsx)("a", {
                                                href: "https://help.openai.com/en/articles/7730893 ",
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        }), D && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                label: o.formatMessage(sY.sharedConversations),
                                buttonLabel: o.formatMessage(sY.sharedConversationsButton),
                                onClick: function() {
                                    C(!0)
                                }
                            })
                        }), L && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                label: o.formatMessage(sY.exportData),
                                buttonLabel: o.formatMessage(sY.exportButton),
                                onClick: $
                            })
                        }), F && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                label: o.formatMessage(sY.deleteAccount),
                                buttonLabel: o.formatMessage(sY.deleteAccountButton),
                                color: "danger",
                                onClick: Y
                            })
                        }), !(null == E ? void 0 : null === (t = E.user) || void 0 === t ? void 0 : t.mfa) && ei && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                label: o.formatMessage(sY.enable2fa),
                                buttonLabel: o.formatMessage(sY.enable),
                                onClick: en
                            })
                        }), (null == E ? void 0 : null === (n = E.user) || void 0 === n ? void 0 : n.mfa) && ei && (0,
                        w.jsx)(s8, {
                            children: (0,
                            w.jsx)(s1, {
                                label: o.formatMessage(sY.disable2fa),
                                buttonLabel: o.formatMessage(sY.disable),
                                onClick: eo,
                                color: "danger"
                            })
                        })]
                    })]
                })
            })
        }
        function sK() {
            var e, t = (0,
            ee.Z)(), n = (0,
            ey.kP)().session, r = (0,
            P.hz)(), a = (0,
            eI.N2)(), i = (0,
            eI.Fl)(), o = i.isBrowsingAvailable, s = i.isBrowsingEnabled, l = i.isPluginsAvailable, u = i.isPluginsEnabled, c = i.isCodeInterpreterAvailable, d = i.isCodeInterpreterEnabled, f = (0,
            ix.D)({
                mutationFn: function(t) {
                    var r = t.feature
                      , a = t.enabled;
                    return en.ZP.setUserSettingsBetaFeature(null !== (e = null == n ? void 0 : n.accessToken) && void 0 !== e ? e : "", r, a)
                },
                onSettled: a,
                onError: function() {
                    nH.m.danger(t.formatMessage(sY.betaSettingsUpdateFailed))
                }
            }), h = f.isLoading, g = f.variables, m = f.mutate, p = h && (null == g ? void 0 : g.feature) === eI.tr.BROWSING, v = h && (null == g ? void 0 : g.feature) === eI.tr.CODE_INTERPRETER, x = h && (null == g ? void 0 : g.feature) === eI.tr.PLUGINS;
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(s8, {
                    children: (0,
                    w.jsx)("p", {
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.betaIntro))
                    })
                }), o && (0,
                w.jsx)(s8, {
                    children: (0,
                    w.jsx)(s0, {
                        label: t.formatMessage(r.has(er.oQ) ? sY.betaBrowsingToggleLabelBing : sY.betaBrowsingToggleLabel),
                        disabled: p,
                        enabled: p ? null == g ? void 0 : g.enabled : s,
                        onChange: function(e) {
                            m({
                                feature: eI.tr.BROWSING,
                                enabled: e
                            })
                        },
                        description: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.betaBrowsingToggleDescription))
                    })
                }), l && (0,
                w.jsx)(s8, {
                    children: (0,
                    w.jsx)(s0, {
                        label: t.formatMessage(sY.betaPluginToggleLabel),
                        disabled: x,
                        enabled: x ? null == g ? void 0 : g.enabled : u,
                        onChange: function(e) {
                            m({
                                feature: eI.tr.PLUGINS,
                                enabled: e
                            })
                        },
                        description: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.betaPluginToggleDescription))
                    })
                }), c && (0,
                w.jsx)(s8, {
                    children: (0,
                    w.jsx)(s0, {
                        label: t.formatMessage(sY.betaCodeInterpreterToggleLabel),
                        disabled: v,
                        enabled: v ? null == g ? void 0 : g.enabled : d,
                        onChange: function(e) {
                            m({
                                feature: eI.tr.CODE_INTERPRETER,
                                enabled: e
                            })
                        },
                        description: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.betaCodeInterpreterToggleDescription))
                    })
                })]
            })
        }
        function s0(e) {
            var t = e.label
              , n = e.disabled
              , r = e.enabled
              , a = e.onChange
              , i = e.description;
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    w.jsx)("div", {
                        children: t
                    }), (0,
                    w.jsx)(s$, {
                        disabled: n,
                        enabled: r,
                        onChange: a,
                        label: t
                    })]
                }), null != i && (0,
                w.jsx)("div", {
                    className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                    children: i
                })]
            })
        }
        function s1(e) {
            var t = e.color
              , n = e.disabled
              , r = e.label
              , a = e.buttonLabel
              , i = e.onClick;
            return (0,
            w.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                w.jsx)("div", {
                    children: r
                }), (0,
                w.jsx)(ed.z, {
                    color: void 0 === t ? "neutral" : t,
                    disabled: !!n,
                    onClick: i,
                    children: a
                })]
            })
        }
        function s2() {
            var e = (0,
            tw.F)()
              , t = e.theme
              , n = e.setTheme;
            return (0,
            w.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                w.jsx)("div", {
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, sY.theme))
                }), (0,
                w.jsxs)("select", {
                    value: t,
                    onChange: function(e) {
                        n(e.target.value)
                    },
                    className: "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
                    children: [(0,
                    w.jsx)("option", {
                        value: "system",
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.system))
                    }), (0,
                    w.jsx)("option", {
                        value: "dark",
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.dark))
                    }), (0,
                    w.jsx)("option", {
                        value: "light",
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.light))
                    })]
                })]
            })
        }
        function s3(e) {
            var t = e.onClose
              , n = e.onDeleteHistory
              , r = (0,
            ee.Z)();
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: r.formatMessage(sY.deleteHistoryModalTitle),
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: r.formatMessage(sY.deleteHistoryModalConfirm),
                    color: "primary",
                    onClick: function() {
                        n(),
                        t()
                    }
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: r.formatMessage(sY.deleteHistoryModalCancel),
                    color: "neutral",
                    onClick: t
                })
            })
        }
        function s5(e) {
            var t = e.onClose
              , n = (0,
            ee.Z)()
              , r = (0,
            ey.kP)().session
              , a = null == r ? void 0 : r.accessToken
              , i = (0,
            M.useCallback)(function() {
                try {
                    en.ZP.submitDataExport(a).then(function() {
                        nH.m.success(n.formatMessage(sY.dataExportRequested)),
                        t()
                    })
                } catch (e) {
                    nH.m.warning(n.formatMessage(sY.dataExportFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [a, n, t]);
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: n.formatMessage(sY.dataExportModalTitle),
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    title: n.formatMessage(sY.dataExportModalConfirm),
                    color: "primary",
                    onClick: i
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    title: n.formatMessage(sY.dataExportModalCancel),
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                w.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    w.jsxs)("ul", {
                        className: "my-3 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.dataExportModalDescription1))
                        }), (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.dataExportModalDescription2))
                        }), (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.dataExportModalDescription3))
                        })]
                    }), (0,
                    w.jsx)("div", {
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, sY.dataExportModalDescription4))
                    })]
                })
            })
        }
        function s4(e) {
            var t = e.value
              , n = e.icon
              , r = e.label
              , a = (0,
            ea.w$)();
            return (0,
            w.jsxs)(sM.xz, {
                className: (0,
                q.Z)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white", {
                    "flex-1 items-center justify-center": !a
                }),
                value: t,
                children: [(0,
                w.jsx)(ef.ZP, {
                    icon: n,
                    strokeWidth: 0,
                    className: "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500"
                }), (0,
                w.jsx)("div", {
                    children: r
                })]
            })
        }
        function s6(e) {
            var t = e.value
              , n = e.children;
            return (0,
            w.jsx)(sM.VY, {
                className: "w-full md:min-h-[300px]",
                value: t,
                children: (0,
                w.jsx)("div", {
                    className: "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
                    children: n
                })
            })
        }
        function s8(e) {
            var t = e.children;
            return (0,
            w.jsx)("div", {
                className: "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
                children: t
            })
        }
        function s7(e) {
            var t, n = e.onClose, r = (0,
            ee.Z)(), a = (0,
            ey.kP)().session, i = null == a ? void 0 : a.accessToken, o = null == a ? void 0 : null === (t = a.user) || void 0 === t ? void 0 : t.email, s = (0,
            j._)((0,
            M.useState)(""), 2), l = s[0], u = s[1], c = (0,
            j._)((0,
            M.useState)(""), 2), d = c[0], f = c[1], h = (0,
            M.useCallback)(function() {
                var e, t = null == a ? void 0 : null === (e = a.user) || void 0 === e ? void 0 : e.iat;
                return void 0 === t || Date.now() / 1e3 - t < 600
            }, [a]), g = (0,
            M.useCallback)(function() {
                try {
                    h() ? en.ZP.deactivateAccount(i).then(function() {
                        (0,
                        ey.w7)()
                    }) : nH.m.warning(r.formatMessage(sY.deleteAccountSessionTooOld), {
                        hasCloseButton: !0
                    })
                } catch (e) {
                    nH.m.warning(r.formatMessage(sY.deleteAccountFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [i, r, h]), m = (0,
            M.useCallback)(function() {
                (0,
                ey.w7)()
            }, []), p = "DELETE" === d && (void 0 === o || l === o), v = (0,
            j._)((0,
            M.useState)(function() {
                return h()
            }), 1)[0], x = (0,
            P.e2)();
            return (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: r.formatMessage(sY.deleteAccountTitle),
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: n
                }),
                children: (0,
                w.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    w.jsxs)("ul", {
                        className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.deleteAccountWarning))
                        }), (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.reuseEmailPhoneWarning))
                        }), (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.dataRemovalWarning))
                        }), (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.apiAccessDeletionWarning))
                        }), (null == x ? void 0 : x.purchase_origin_platform) === sO._4.MOBILE_IOS && (0,
                        w.jsx)("li", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.iapSubscriptionWarning))
                        })]
                    }), v ? (0,
                    w.jsxs)(w.Fragment, {
                        children: [void 0 !== o ? (0,
                        w.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            w.jsx)(s9, {
                                children: (0,
                                w.jsx)(et.Z, (0,
                                b._)({}, sY.typeEmailLabel))
                            }), (0,
                            w.jsx)(im, {
                                value: l,
                                placeholder: o,
                                name: "email",
                                onChange: function(e) {
                                    u(e.target.value)
                                }
                            })]
                        }) : null, (0,
                        w.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            w.jsx)(s9, {
                                children: (0,
                                w.jsx)(et.Z, (0,
                                b._)({}, sY.typeDeleteInputLabel))
                            }), (0,
                            w.jsx)(im, {
                                value: d,
                                onChange: function(e) {
                                    f(e.target.value)
                                },
                                name: "delete",
                                className: "mb-4"
                            })]
                        }), (0,
                        w.jsx)(ed.z, {
                            color: p ? "danger" : "disabled",
                            onClick: g,
                            disabled: !p,
                            className: "w-full",
                            children: p ? (0,
                            w.jsxs)(w.Fragment, {
                                children: [(0,
                                w.jsx)(ef.ZP, {
                                    icon: X.BJv
                                }), " ", (0,
                                w.jsx)(et.Z, (0,
                                b._)({}, sY.deleteAccountButtonLabel))]
                            }) : (0,
                            w.jsxs)(w.Fragment, {
                                children: [(0,
                                w.jsx)(ef.ZP, {
                                    icon: X.UIZ
                                }), " ", (0,
                                w.jsx)(et.Z, (0,
                                b._)({}, sY.lockedButtonLabel))]
                            })
                        })]
                    }) : (0,
                    w.jsxs)(w.Fragment, {
                        children: [(0,
                        w.jsx)("p", {
                            className: "pb-4 text-xs text-gray-500",
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.recentLoginMessage))
                        }), (0,
                        w.jsx)(ed.z, {
                            color: "primary",
                            onClick: m,
                            className: "w-full",
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, sY.refreshLoginButtonLabel))
                        })]
                    })]
                })
            })
        }
        (l = x || (x = {})).General = "General",
        l.BetaFeatures = "BetaFeatures",
        l.DataControls = "DataControls";
        var s9 = T.Z.label(sJ());
        function le(e) {
            var t = e.children;
            return (0,
            w.jsx)(aD.u, {
                as: M.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: t
            })
        }
        var lt = (0,
        K.vU)({
            profilePlaceholder: {
                id: "profile.myprofile.placeholder",
                defaultMessage: "• Where I live: San Francisco\n• My native language is: English\n• What I do for work: Researcher at OpenAI\n• What I do for fun: Hiking, music, and cooking\n• Preferred communication style: concise, simple language\n• I'd like ChatGPT to be: a helpful assistant",
                description: "placeholder for my profile textarea"
            },
            save: {
                id: "profile.myprofile.save",
                defaultMessage: "Save",
                description: "save button for my profile modal"
            },
            close: {
                id: "profile.myprofile.close",
                defaultMessage: "Close",
                description: "close button for my profile modal"
            },
            helpText: {
                id: "profile.myprofile.helptext",
                defaultMessage: "Add any information that you’d like ChatGPT to remember about you and your preferences.",
                description: "help text for my profile modal"
            },
            profileTitle: {
                id: "profile.myprofile.title",
                defaultMessage: "My Profile",
                description: "title for my profile modal"
            }
        })
          , ln = (0,
        Z.ZP)(function() {
            return {
                isProfileModalOpen: !1,
                userMessage: ""
            }
        })
          , lr = {
            setIsProfileModalOpen: function(e) {
                ln.setState({
                    isProfileModalOpen: e
                })
            },
            setUserMessage: function(e) {
                ln.setState({
                    userMessage: e
                })
            }
        };
        function la() {
            var e = ln()
              , t = e.isProfileModalOpen
              , n = e.userMessage
              , r = (0,
            M.useCallback)(function() {
                lr.setIsProfileModalOpen(!1)
            }, [])
              , a = (0,
            ey.kP)()
              , i = a.session
              , o = a.loading
              , s = (0,
            M.useCallback)(function() {
                en.ZP.createOrUpdateUserSystemMessage((null == i ? void 0 : i.accessToken) || "", n),
                lr.setIsProfileModalOpen(!1)
            }, [n, i])
              , l = (0,
            P.hz)();
            (0,
            tv.a)([null == i ? void 0 : i.accessToken], function() {
                return en.ZP.getUserSystemMessage((null == i ? void 0 : i.accessToken) || "")
            }, {
                enabled: !!(!o && (null == i ? void 0 : i.accessToken) && l.has("system_message2")),
                onSuccess: function(e) {
                    (null == e ? void 0 : e.data) && lr.setUserMessage(e.data)
                },
                onError: function() {
                    nH.m.danger("Failed to get the profile")
                }
            });
            var u = (0,
            ee.Z)();
            return (0,
            w.jsxs)(e_.ZP, {
                isOpen: t,
                onModalClose: function() {
                    lr.setIsProfileModalOpen(!1)
                },
                type: "success",
                title: u.formatMessage(lt.profileTitle),
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: r
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    onClick: r,
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lt.close))
                }),
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    onClick: s,
                    color: "primary",
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lt.save))
                }),
                children: [(0,
                w.jsx)("p", {
                    className: "text-muted pb-4 pt-2",
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lt.helpText))
                }), (0,
                w.jsx)(ni.ZP, {
                    className: "w-full rounded border-gray-300 p-4 placeholder:text-gray-300  dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    rows: 8,
                    value: n,
                    onChange: function(e) {
                        return lr.setUserMessage(e.target.value)
                    }
                })]
            })
        }
        function li() {
            var e = (0,
            k._)(["flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);
            return li = function() {
                return e
            }
            ,
            e
        }
        function lo() {
            var e = (0,
            k._)(["", ""]);
            return lo = function() {
                return e
            }
            ,
            e
        }
        function ls() {
            var e = (0,
            k._)(["my-1.5 h-px bg-white/20"]);
            return ls = function() {
                return e
            }
            ,
            e
        }
        function ll() {
            var e = (0,
            k._)(["rounded-md border border-white/20 hover:bg-gray-500/10"]);
            return ll = function() {
                return e
            }
            ,
            e
        }
        function lu() {
            var e = (0,
            k._)(["flex-col flex-1 transition-opacity duration-500\n", "\n", ""]);
            return lu = function() {
                return e
            }
            ,
            e
        }
        var lc = (0,
        K.vU)({
            whatsapp: {
                id: "navigation.whatsapp",
                defaultMessage: "Join Whatsapp Group",
                description: "Join Whatsapp Group"
            },
            shopee: {
                id: "navigation.whatsapp",
                defaultMessage: "Official Shopee Store",
                description: "Official Shopee Store"
            },
            helpAndFaq: {
                id: "navigation.helpAndFaq",
                defaultMessage: "Pandora on GitHub",
                description: "GitHub menu item"
            },
            confirmClearConversations: {
                id: "navigation.confirmClearConversations",
                defaultMessage: "Confirm Clear Converstations",
                description: "Confirmation text for clearing conversations"
            },
            clearConversations: {
                id: "navigation.clearConversations",
                defaultMessage: "Clear Converstations",
                description: "Clear conversations menu item"
            },
            setupTeam: {
                id: "navigation.setupTeam",
                defaultMessage: "Buy ChatGPT Business",
                description: "Buy ChatGPT for teams menu item"
            },
            myPlan: {
                id: "navigation.myPlan",
                defaultMessage: "My Plan",
                description: "My plan menu item"
            },
            myProfile: {
                id: "navigation.myProfile",
                defaultMessage: "My profile",
                description: "Profile menu item"
            },
            settings: {
                id: "navigation.settings",
                defaultMessage: "Settings",
                description: "Settings menu item"
            },
            logOut: {
                id: "navigation.logOut",
                defaultMessage: "Log Out",
                description: "Log out menu item"
            },
            upgradeToPlus: {
                id: "navigation.upgradeToPlus",
                defaultMessage: "Upgrade to Plus",
                description: "Upgrade to Plus menu item"
            },
            renewPlus: {
                id: "navigation.renewPlus",
                defaultMessage: "Renew Plus",
                description: "Renew Plus menu item"
            },
            newChat: {
                id: "navigation.newChat",
                defaultMessage: "New Chat",
                description: "New chat button label"
            },
            clearChat: {
                id: "navigation.clearChat",
                defaultMessage: "Clear chat",
                description: "Clear chat button label"
            },
            chatHistoryLabel: {
                id: "navigation.chatHistoryLabel",
                defaultMessage: "Chat history",
                description: "Chat history label heading"
            },
            chatHistoryOff: {
                id: "navigation.chatHistoryOff",
                defaultMessage: "Chat History is off for this browser.",
                description: "Text indicating that chat history is turned off"
            },
            chatHistoryOffDescription: {
                id: "navigation.chatHistoryOffDescription",
                defaultMessage: "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
                description: "Description for chat history being off"
            },
            learnMore: {
                id: "navigation.learnMore",
                defaultMessage: "Learn more",
                description: "Learn more link text"
            },
            enableChatHistory: {
                id: "navigation.enableChatHistory",
                defaultMessage: "Enable chat history",
                description: "Enable chat history button label"
            },
            closeSidebar: {
                id: "navigation.closeSidebar",
                defaultMessage: "Close Sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "navigation.openSidebar",
                defaultMessage: "Open Sidebar",
                description: "Open sidebar button label"
            },
            newLabel: {
                id: "navigation.newLabel",
                defaultMessage: "NEW",
                description: "Label for new features or items"
            }
        })
          , ld = T.Z.a(li())
          , lf = (0,
        T.Z)(ld)(lo(), function(e) {
            return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
        });
        function lh(e) {
            var t = e.onClick
              , n = e.href
              , r = e.target
              , a = e.children;
            return (0,
            w.jsx)(ss.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    w.jsx)(ld, {
                        as: void 0 !== n ? "a" : "button",
                        onClick: t,
                        href: n,
                        target: r,
                        className: (0,
                        q.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
                        children: a
                    })
                }
            })
        }
        var lg = T.Z.div(ls())
          , lm = (0,
        T.Z)(ld)(ll())
          , lp = T.Z.div(lu(), function(e) {
            return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" : "overflow-y-auto"
        }, function(e) {
            return e.$offsetScrollbar && "-mr-2"
        });
        function lv() {
            var e = (0,
            P.hz)()
              , t = (0,
            ey.kP)().session
              , n = null == t ? void 0 : t.user
              , r = sj()
              , a = r.currentAccount
              , i = r.isWorkspaceAccount ? null == a ? void 0 : a.name : null == n ? void 0 : n.name;
            return e.has("business_seats") && n ? (0,
            w.jsx)(w.Fragment, {
                children: (0,
                w.jsx)(lh, {
                    onClick: function() {
                        sb.setIsModalOpen(!0)
                    },
                    children: (0,
                    w.jsxs)("div", {
                        className: "flex w-full flex-col gap-2",
                        children: [(0,
                        w.jsx)(sk, {
                            className: "h-10 w-10"
                        }), (0,
                        w.jsxs)("div", {
                            className: "flex w-full items-center justify-between gap-2",
                            children: [(0,
                            w.jsxs)("div", {
                                className: "flex flex-col items-start gap-1",
                                children: [(0,
                                w.jsx)("div", {
                                    className: "text-base capitalize text-white",
                                    children: i
                                }), (0,
                                w.jsx)("div", {
                                    className: "text-sm text-gray-500",
                                    children: null == n ? void 0 : n.email
                                })]
                            }), (0,
                            w.jsx)("div", {
                                children: (0,
                                w.jsx)(ef.ZP, {
                                    icon: su.Z,
                                    size: "small"
                                })
                            })]
                        })]
                    })
                })
            }) : null
        }
        function lx(e) {
            var t = e.showCustomerPortalMenuItem
              , n = e.onClickCustomerPortal
              , r = e.onClickSettings
              , a = e.onDeleteHistory
              , i = (0,
            N.WS)()
              , o = (0,
            j._)((0,
            M.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            M.useCallback)(function() {
                l(!1),
                a()
            }, [a])
              , c = oG().conversations.length > 0
              , d = (0,
            P.hz)();
            return (0,
            w.jsxs)("nav", {
                children: [(0,
                w.jsx)(lv, {}), (0,
                w.jsxs)(lh, {
                    as: "a",
                    href: "https://chat.whatsapp.com/BU2LjXTAhj7FmuFMPsOOwj",
                    target: "_blank",
                    onClick: function() {
                        i(I.s6.clickFaqLink)
                    },
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.AlO
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.whatsapp))]
                }), 
                
                (0,
                    w.jsx)(lv, {}), (0,
                    w.jsxs)(lh, {
                        as: "a",
                        href: "https://shopee.com.my/softwaredigital.os",
                        target: "_blank",
                        onClick: function() {
                            i(I.s6.clickFaqLink)
                        },
                        children: [(0,
                        w.jsx)(ef.ZP, {
                            icon: X.AlO
                        }), (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, lc.shopee))]
                    }), 
                
                (0,
                w.jsx)(lv, {}), (0,
                w.jsxs)(lh, {
                    as: "a",
                    href: "https://github.com/pengzhile/pandora",
                    target: "_blank",
                    onClick: function() {
                        i(I.s6.clickFaqLink)
                    },
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.AlO
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.helpAndFaq))]
                }), (0,
                w.jsx)(lg, {}), c && (0,
                w.jsxs)(lh, {
                    onClick: function(e) {
                        s ? u() : (l(!0),
                        e.preventDefault())
                    },
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: s ? X.UgA : X.Ybf
                    }), s ? (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.confirmClearConversations)) : (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.clearConversations))]
                }), t && n && (0,
                w.jsxs)(lh, {
                    onClick: n,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.fzv
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.myPlan))]
                }), d.has("system_message2") && (0,
                w.jsxs)(lh, {
                    onClick: function() {
                        return lr.setIsProfileModalOpen(!0)
                    },
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.yK7
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.myProfile))]
                }), (0,
                w.jsxs)(lh, {
                    onClick: r,
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.nbt
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.settings))]
                }), (0,
                w.jsx)(lg, {}), (0,
                w.jsxs)(lh, {
                    onClick: function() {
                        i(I.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        ey.w7)()
                    },
                    children: [(0,
                    w.jsx)(ef.ZP, {
                        icon: X.xqh
                    }), (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.logOut))]
                })]
            })
        }
        function lb() {
            var e, t = (0,
            ey.kP)().session, n = sj().currentAccount, r = null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.name;
            return null != n && "personal" !== n.structure && (r = n.name),
            (0,
            w.jsxs)(ss.v.Button, {
                className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
                children: [(0,
                w.jsx)("div", {
                    className: "-ml-0.5 w-5 flex-shrink-0",
                    children: (0,
                    w.jsx)(sk, {
                        className: "flex h-5 w-5",
                        iconSize: "xsmall"
                    })
                }), (0,
                w.jsx)("div", {
                    className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left capitalize text-white",
                    children: r
                }), (0,
                w.jsx)(ef.ZP, {
                    icon: X.K9M,
                    size: "small",
                    className: "flex-shrink-0 text-gray-500"
                })]
            })
        }
        function ly() {
            var e = (0,
            ey.kP)().session;
            return (0,
            P.hz)().has("business_seats") ? (0,
            w.jsx)(lb, {}) : (null == e ? void 0 : e.user) ? (0,
            w.jsxs)(ss.v.Button, {
                className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
                children: [(0,
                w.jsx)("div", {
                    className: "-ml-0.5 w-5 flex-shrink-0",
                    children: (0,
                    w.jsx)(eY, {
                        user: e.user,
                        size: "small"
                    })
                }), (0,
                w.jsx)("div", {
                    className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                    children: e.user.name
                }), (0,
                w.jsx)(ef.ZP, {
                    icon: X.K9M,
                    size: "small",
                    className: "flex-shrink-0 text-gray-500"
                })]
            }) : null
        }
        function lj(e) {
            var t = e.showCustomerPortalMenuItem
              , n = e.onClickCustomerPortal
              , r = e.onClickSettings
              , a = e.onDeleteHistory;
            return (0,
            w.jsxs)(ss.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                w.jsx)(ly, {}), (0,
                w.jsx)(le, {
                    children: (0,
                    w.jsx)(ss.v.Items, {
                        className: "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
                        children: (0,
                        w.jsx)(lx, {
                            showCustomerPortalMenuItem: t,
                            onClickCustomerPortal: n,
                            onClickSettings: r,
                            onDeleteHistory: a
                        })
                    })
                })]
            })
        }
        function lk(e) {
            var t = e.onClickAccountPayment
              , n = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children
              , l = (0,
            ee.Z)()
              , u = (0,
            P.hz)()
              , c = (0,
            M.useRef)(null)
              , d = (0,
            j._)((0,
            M.useState)(!1), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            M.useContext)(O.QL)
              , m = g.historyDisabled
              , p = g.toggleHistoryDisabled
              , v = g.getModifiedSettings
              , x = g.unsetModifiedSettings
              , y = v()
              , k = (0,
            j._)((0,
            M.useState)(y), 2)
              , C = k[0]
              , _ = k[1]
              , T = (0,
            M.useCallback)(function() {
                _(!0)
            }, [])
              , N = (0,
            M.useCallback)(function() {
                _(!1),
                x()
            }, [x])
              , I = (0,
            M.useCallback)(function() {
                o(),
                p()
            }, [o, p])
              , S = (0,
            M.useMemo)(function() {
                return (0,
                w.jsxs)("div", {
                    className: (0,
                    q.Z)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500", m ? "visible max-h-72" : "invisible max-h-0"),
                    children: [(0,
                    w.jsxs)("div", {
                        className: "bg-gray-900 px-4 py-3",
                        children: [(0,
                        w.jsx)("div", {
                            className: "p-1 text-sm text-gray-100",
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, lc.chatHistoryOff))
                        }), (0,
                        w.jsx)("div", {
                            className: "p-1 text-xs text-gray-500",
                            children: (0,
                            w.jsx)(et.Z, (0,
                            ep._)((0,
                            b._)({}, lc.chatHistoryOffDescription), {
                                values: {
                                    learnMore: (0,
                                    w.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: (0,
                                        w.jsx)(et.Z, (0,
                                        b._)({}, lc.learnMore))
                                    }),
                                    b: function(e) {
                                        return (0,
                                        w.jsx)("strong", {
                                            children: e
                                        })
                                    }
                                }
                            }))
                        }), (0,
                        w.jsxs)(ed.z, {
                            className: "mt-4 w-full",
                            onClick: I,
                            color: "primary",
                            size: "medium",
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: X.$IY
                            }), (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, lc.enableChatHistory))]
                        })]
                    }), (0,
                    w.jsx)("div", {
                        className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
                    })]
                })
            }, [m, I]);
            (0,
            M.useEffect)(function() {
                if (c.current) {
                    var e;
                    h((e = c.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                }
            }, [s]);
            var Z = !(0,
            P.nR)() && !u.has("disable_upgrade_ui")
              , A = (0,
            P.KQ)();
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsxs)("div", {
                    className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
                    children: [(0,
                    w.jsx)(sc.f, {
                        asChild: !0,
                        children: (0,
                        w.jsx)("h2", {
                            children: (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, lc.chatHistoryLabel))
                        })
                    }), (0,
                    w.jsxs)("nav", {
                        className: "flex h-full w-full flex-col p-2",
                        "aria-label": l.formatMessage(lc.chatHistoryLabel),
                        children: [(0,
                        w.jsxs)(lm, {
                            onClick: o,
                            className: "mb-1 flex-shrink-0",
                            children: [(0,
                            w.jsx)(ef.ZP, {
                                icon: m ? X.Bw1 : X.OvN
                            }), (0,
                            w.jsx)(et.Z, (0,
                            b._)({}, m ? lc.clearChat : lc.newChat))]
                        }), S, (0,
                        w.jsx)(lp, {
                            ref: c,
                            $offsetScrollbar: f,
                            $disableScroll: m,
                            children: s
                        }), (0,
                        w.jsxs)("div", {
                            className: "border-t border-white/20 pt-2",
                            children: [n && (0,
                            w.jsx)(lf, {
                                onClick: t,
                                className: "rounded-md",
                                children: (0,
                                w.jsxs)("span", {
                                    className: "flex w-full flex-row justify-between",
                                    children: [(0,
                                    w.jsxs)("span", {
                                        className: "gold-new-button flex items-center gap-3",
                                        children: [(0,
                                        w.jsx)(ef.ZP, {
                                            icon: X.fzv
                                        }), A ? (0,
                                        w.jsx)(et.Z, (0,
                                        b._)({}, lc.renewPlus)) : (0,
                                        w.jsx)(et.Z, (0,
                                        b._)({}, lc.upgradeToPlus))]
                                    }), Z && !A && (0,
                                    w.jsx)("span", {
                                        className: "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                        children: (0,
                                        w.jsx)(et.Z, (0,
                                        b._)({}, lc.newLabel))
                                    })]
                                })
                            }), (0,
                            w.jsx)(lj, {
                                showCustomerPortalMenuItem: a,
                                onClickCustomerPortal: r,
                                onClickSettings: T,
                                onDeleteHistory: i
                            })]
                        })]
                    })]
                }), C && (0,
                w.jsx)(sX, {
                    onClose: N,
                    onToggleHistoryDisabled: o,
                    onDeleteHistory: i
                }), u.has("system_message2") && (0,
                w.jsx)(la, {}), u.has("business_seats") && (0,
                w.jsx)(s_, {})]
            })
        }
        var lw = function(e) {
            var t = e.onClickAccountPayment
              , n = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children;
            return (0,
            w.jsx)(w.Fragment, {
                children: (0,
                w.jsx)("div", {
                    className: "flex h-full min-h-0 flex-col ",
                    children: (0,
                    w.jsx)(lk, {
                        onClickAccountPayment: t,
                        showAccountPaymentMenuItem: n,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: a,
                        onDeleteHistory: i,
                        onNewThread: o,
                        children: s
                    })
                })
            })
        }
          , lC = function(e) {
            var t = e.onClickAccountPayment
              , n = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onClose
              , s = e.sidebarOpen
              , l = e.onNewThread
              , u = e.children;
            return (0,
            w.jsx)(aD.u.Root, {
                show: s,
                as: M.Fragment,
                children: (0,
                w.jsxs)(sl.V, {
                    as: "div",
                    className: "relative",
                    onClose: o,
                    children: [(0,
                    w.jsx)(aD.u.Child, {
                        as: M.Fragment,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        w.jsx)("div", {
                            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                        })
                    }), (0,
                    w.jsxs)("div", {
                        className: "fixed inset-0 flex",
                        children: [(0,
                        w.jsx)(aD.u.Child, {
                            as: M.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: (0,
                            w.jsxs)(sl.V.Panel, {
                                className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                children: [(0,
                                w.jsx)(aD.u.Child, {
                                    as: M.Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    w.jsx)("div", {
                                        className: "absolute right-0 top-0 -mr-12 pt-2",
                                        children: (0,
                                        w.jsxs)("button", {
                                            type: "button",
                                            className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            onClick: o,
                                            children: [(0,
                                            w.jsx)("span", {
                                                className: "sr-only",
                                                children: (0,
                                                w.jsx)(et.Z, (0,
                                                b._)({}, lc.closeSidebar))
                                            }), (0,
                                            w.jsx)(ef.ZP, {
                                                icon: X.q5L,
                                                size: "medium",
                                                className: "text-white",
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    })
                                }), (0,
                                w.jsx)(lk, {
                                    onClickAccountPayment: t,
                                    showAccountPaymentMenuItem: n,
                                    onClickCustomerPortal: r,
                                    showCustomerPortalMenuItem: a,
                                    onDeleteHistory: i,
                                    onNewThread: l,
                                    children: u
                                })]
                            })
                        }), (0,
                        w.jsx)("div", {
                            className: "w-14 flex-shrink-0"
                        })]
                    })]
                })
            })
        }
          , l_ = function(e) {
            var t = e.clientThreadId
              , n = e.onClickOpenSidebar
              , r = e.onNewThread
              , a = e.title
              , i = (0,
            M.useContext)(O.QL)
              , o = i.historyDisabled
              , s = i.toggleHistoryDisabled
              , l = ei(t, a, !0)
              , u = l.resolvedTitle
              , c = l.isTypingEffect;
            return (0,
            w.jsxs)("div", {
                className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                children: [(0,
                w.jsxs)("button", {
                    type: "button",
                    className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                    onClick: n,
                    children: [(0,
                    w.jsx)("span", {
                        className: "sr-only",
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, lc.openSidebar))
                    }), (0,
                    w.jsx)(ef.ZP, {
                        icon: X.cur,
                        "aria-hidden": "true",
                        size: "medium"
                    })]
                }), (0,
                w.jsx)("h1", {
                    className: "flex-1 text-center text-base font-normal",
                    children: o ? (0,
                    w.jsxs)("div", {
                        className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                        onClick: s,
                        children: [(0,
                        w.jsx)(X.$IY, {}), (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, lc.enableChatHistory))]
                    }) : c && null != u ? (0,
                    w.jsx)(eu, {
                        text: u
                    }) : null != u ? u : (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, lc.newChat))
                }), (0,
                w.jsx)("button", {
                    type: "button",
                    className: "px-3",
                    onClick: r,
                    children: (0,
                    w.jsx)(ef.ZP, {
                        icon: o ? X.Bw1 : X.OvN,
                        size: "medium"
                    })
                })]
            })
        };
        function lM(e) {
            var t = e.toggleNavigationSidebar
              , n = e.handleAccountPayment
              , r = e.handleClickCustomerPortal
              , a = e.handleResetThread
              , i = e.activeSidebar
              , o = e.isAccountPaid
              , s = e.children
              , l = (0,
            _.useRouter)()
              , u = (0,
            M.useRef)(null)
              , c = (0,
            ea.w$)()
              , d = (0,
            sd.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            })
              , f = oQ()
              , h = E(function(e) {
                return e.isNavigationCollapsed
            })
              , g = !0 === o
              , m = (0,
            M.useCallback)(function() {
                en.ZP.deleteConversations().then(function() {
                    f()
                }),
                a(),
                "/" !== l.asPath && l.replace({
                    pathname: "/"
                })
            }, [a, f, l])
              , p = sj().currentAccount
              , v = (!(0,
            P.hz)().has("business_seats") || (null == p ? void 0 : p.structure) !== "workspace") && !1 === o && d;
            return c ? (0,
            w.jsx)($.E.div, {
                className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
                ref: u,
                initial: !1,
                animate: {
                    width: h ? 0 : "260px",
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    }
                },
                onAnimationStart: function() {
                    u.current && (u.current.style.visibility = "visible")
                },
                onAnimationComplete: function() {
                    u.current && h && (u.current.style.visibility = "hidden")
                },
                children: (0,
                w.jsx)("div", {
                    className: "h-full w-[260px]",
                    children: (0,
                    w.jsx)(lw, {
                        onClickAccountPayment: n,
                        showAccountPaymentMenuItem: v,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: g,
                        onDeleteHistory: m,
                        onNewThread: a,
                        children: s
                    })
                })
            }) : (0,
            w.jsx)(lC, {
                onClose: t,
                sidebarOpen: "navigation" === i,
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: v,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: g,
                onDeleteHistory: m,
                onNewThread: a,
                children: s
            })
        }
        var lT = n(37541)
          , lN = {
            showAccountPaymentModal: !1
        }
          , lI = (0,
        Z.ZP)()(function(e) {
            return (0,
            ep._)((0,
            b._)({}, lN), {
                setShowAccountPaymentModal: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y();
                    e({
                        showAccountPaymentModal: t
                    }),
                    n && n()
                }
            })
        })
          , lP = n(6128)
          , lS = n(5437)
          , lZ = n.n(lS)
          , lA = n(11253)
          , lR = n.n(lA);
        function lD(e) {
            var t = e.id
              , n = e.label
              , r = e.disabled;
            return (0,
            w.jsxs)("div", {
                className: "form-check",
                children: [(0,
                w.jsx)("input", {
                    className: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                    type: "checkbox",
                    disabled: r,
                    value: "",
                    id: t
                }), (0,
                w.jsx)("label", {
                    className: "form-check-label text-gray-800 dark:text-gray-100",
                    htmlFor: t,
                    children: n
                })]
            })
        }
        function lL() {
            var e = (0,
            k._)(["mb-2 mt-auto ml-auto mr-auto"]);
            return lL = function() {
                return e
            }
            ,
            e
        }
        function lF() {
            var e = (0,
            k._)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"]);
            return lF = function() {
                return e
            }
            ,
            e
        }
        function lE() {
            var e = (0,
            k._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
            return lE = function() {
                return e
            }
            ,
            e
        }
        function lB() {
            var e = (0,
            k._)([""]);
            return lB = function() {
                return e
            }
            ,
            e
        }
        var lO = (0,
        K.vU)({
            submitFeedback: {
                id: "feedbackModal.submitFeedback",
                defaultMessage: "Submit feedback",
                description: "Button text for submitting the feedback"
            },
            submitReport: {
                id: "feedbackModal.submitReport",
                defaultMessage: "Submit report",
                description: "Button text for submitting a content-moderation report"
            },
            submitRejectModeration: {
                id: "feedbackModal.moderationReject",
                defaultMessage: "Block Content",
                description: "Button text for rejecting the share link and blocking it from being viewed"
            },
            submitAcceptModeration: {
                id: "feedbackModal.moderationAccept",
                defaultMessage: "Allow Content",
                description: "Button text for accepting the share link and allowing it to be viewed"
            },
            thumbsUpPlaceholder: {
                id: "feedbackModal.thumbsUpPlaceholder",
                defaultMessage: "What do you like about the response?",
                description: "Placeholder for textarea input when user chooses thumbs up"
            },
            thumbsDownPlaceholder: {
                id: "feedbackModal.thumbsDownPlaceholder",
                defaultMessage: "What was the issue with the response? How could it be improved?",
                description: "Placeholder for textarea input when user chooses thumbs down"
            },
            reportContentExplanationPlaceholder: {
                id: "feedbackModal.reportContentExplanationPlaceholder",
                defaultMessage: "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
                description: "Placeholder for textarea input when user chooses to report a shared conversation"
            },
            harmfulUnsafe: {
                id: "feedbackModal.harmfulUnsafe",
                defaultMessage: "This is harmful / unsafe",
                description: "Label for harmful/unsafe checkbox"
            },
            harmfulOffensive: {
                id: "feedbackModal.harmfulOffensive",
                defaultMessage: "This content is harmful or offensive",
                description: "Label for harmful/offensive checkbox"
            },
            copyrightContent: {
                id: "feedbackModal.copyrightContent",
                defaultMessage: "This content violates copyright law",
                description: "Label for Copyrighted Content checkbox"
            },
            reportOtherContent: {
                id: "feedbackModal.reportOtherContent",
                defaultMessage: "I don't like this for some other reason (please describe)",
                description: "Label for Report Other Content checkbox"
            },
            notTrue: {
                id: "feedbackModal.notTrue",
                defaultMessage: "This isn't true",
                description: "Label for not true checkbox"
            },
            notHelpful: {
                id: "feedbackModal.notHelpful",
                defaultMessage: "This isn't helpful",
                description: "Label for not helpful checkbox"
            },
            dontLikeThis: {
                id: "feedbackModal.dontLikeThis",
                defaultMessage: "I don't like this",
                description: "Label for I Don't Like This checkbox"
            },
            sexualAbuse: {
                id: "feedbackModal.sexualAbuse",
                defaultMessage: "This content contains sexual abuse",
                description: "Label for Sexual Abuse checkbox"
            },
            provideAdditionalFeedback: {
                id: "feedbackModal.provideAdditionalFeedback",
                defaultMessage: "Provide additional feedback",
                description: "Title for the critique feedback modal"
            },
            provideReportModalTitle: {
                id: "feedbackModal.provideReportModalTitle",
                defaultMessage: "Report This Content",
                description: "Title for the 'report' feedback modal"
            },
            pickBestAnswer: {
                id: "feedbackModal.pickBestAnswer",
                defaultMessage: "Pick the best answer to improve the model",
                description: "Title for the compare feedback modal"
            },
            newAnswer: {
                id: "feedbackModal.newAnswer",
                defaultMessage: "New Answer",
                description: "Title for the new answer during comparison"
            },
            originalAnswer: {
                id: "feedbackModal.originalAnswer",
                defaultMessage: "Original Answer",
                description: "Title for the original answer during comparison"
            },
            newAnswerBetter: {
                id: "feedbackModal.newAnswerBetter",
                defaultMessage: "New answer is better",
                description: "Button text for choosing new answer during comparison"
            },
            originalAnswerBetter: {
                id: "feedbackModal.originalAnswerBetter",
                defaultMessage: "Original answer is better",
                description: "Button text for choosing original answer during comparison"
            },
            neitherAnswerBetter: {
                id: "feedbackModal.neitherAnswerBetter",
                defaultMessage: "Neither answer is better",
                description: "Button text for choosing neither answer during comparison"
            },
            skipStep: {
                id: "feedbackModal.skipStep",
                defaultMessage: "Skip this step",
                description: "Button text for skipping comparison step"
            },
            continueWithChosenAnswer: {
                id: "feedbackModal.continueWithChosenAnswer",
                defaultMessage: "The conversation will continue with the answer you choose.",
                description: "Information text for user during comparison"
            }
        });
        function lq(e) {
            var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.length) === 1 && !(null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n.some(function(e) {
                return "error"in e
            })) && (!a || !((null == e ? void 0 : null === (r = e.messages) || void 0 === r ? void 0 : r.length) === 1 && eL.Cv.getTextFromMessage(null == e ? void 0 : e.messages[0].message).length < 20))
        }
        function lU(e) {
            var t, n, r = e.ratingModalNodeId, a = e.ratingModalOpen, i = e.onCloseRatingModal, o = e.handleSubmitFeedback, s = e.onHandleChangeFeedbackComparisonRating, l = e.feedbackTextareaRef, u = e.clientThreadId, c = e.activeRequests, d = e.currentModelId, f = e.onChangeItemInView, h = e.onRequestMoreCompletions, g = e.onDeleteNode, m = e.onRequestCompletion, p = e.onUpdateNode, v = e.onSandboxLinkClick, x = (0,
            ee.Z)(), y = S.tQ.getTree(u), k = (0,
            S.XK)(u);
            (0,
            M.useEffect)(function() {
                "report" === a && ey.pg.forceEnableSession()
            }, [a]);
            var C = (0,
            M.useRef)(.5 > Math.random() ? "left" : "right")
              , _ = null == y ? void 0 : y.getConversationTurns(r || "root")
              , T = _.length - 1
              , Z = _[_.length - 1]
              , A = (0,
            P.hz)().has(er.FZ)
              , R = (0,
            j._)((0,
            M.useState)("critique"), 2)
              , D = R[0]
              , L = R[1]
              , F = (0,
            ea.w$)()
              , E = (0,
            P.hz)().has(er.Pt) && lq(Z, !0) && F
              , B = (0,
            N.WS)()
              , O = (0,
            M.useMemo)(function() {
                return {
                    id: r || "root",
                    threadId: S.tQ.getServerThreadId(u),
                    rating: a,
                    model: d
                }
            }, [r, u, a, d])
              , U = null == _ ? void 0 : _[(null == _ ? void 0 : _.length) - 1].variantIds
              , z = null == U ? void 0 : U[(null == U ? void 0 : U.length) - 1]
              , H = (n = (t = null == y ? void 0 : y.getConversationTurns(z))[t.length - 1]).messages[n.messages.length - 1].nodeId
              , V = null == y ? void 0 : y.getConversationTurns(H)
              , W = (0,
            M.useMemo)(function() {
                var e = null == V ? void 0 : V[(null == V ? void 0 : V.length) - 1];
                return "thumbsDown" === a && E && lq(e) && lq(Z)
            }, [a, E, V, Z])
              , G = (0,
            M.useRef)(Date.now())
              , Q = (0,
            M.useRef)(-1)
              , $ = (0,
            M.useRef)(Date.now())
              , J = (0,
            M.useRef)(Date.now());
            (0,
            M.useEffect)(function() {
                "compare" === D ? (Q.current = Date.now(),
                B(I.s6.displayedComparisonUIV0, O)) : "critique" === D && "thumbsDown" === a && B(I.s6.displayedThumbsDownFeedbackForm, O)
            }, [D]);
            var K = _.length - 2
              , ei = V.length - 1
              , eo = V[V.length - 1]
              , es = (0,
            M.useMemo)(function() {
                return eo && eL.Cv.getRequestIdFromConversationTurn(eo)
            }, [eo])
              , el = (0,
            M.useMemo)(function() {
                return c.has(es)
            }, [c, es]);
            (0,
            M.useMemo)(function() {
                el || (J.current = Date.now())
            }, [el]);
            var eu = Z.messages
              , ec = eu[eu.length - 1]
              , ed = ec.message.id
              , ef = ec.nodeId
              , eh = y.getLeafFromNode(ef)
              , eg = eo.messages
              , em = eg[eg.length - 1]
              , ev = em.message.id
              , ex = em.nodeId
              , eb = y.getLeafFromNode(ex)
              , ej = "critique" === D ? "report" === a ? x.formatMessage(lO.provideReportModalTitle) : x.formatMessage(lO.provideAdditionalFeedback) : x.formatMessage(lO.pickBestAnswer)
              , ek = (0,
            M.useRef)([])
              , ew = (0,
            M.useRef)("")
              , eC = (0,
            M.useCallback)(function() {
                var e, t = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
                ek.current = (0,
                eT._)(t || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }).map(function(e) {
                    return e.replace("feedback-", "")
                }),
                ew.current = (null == t ? void 0 : t["feedback-other"].value) || ""
            }, [l])
              , eM = (0,
            M.useCallback)(function() {
                eC(),
                o(ew.current, ek.current),
                "thumbsDown" === a && B(I.s6.submitThumbsDownFeedbackForm, O),
                W ? L("compare") : i()
            }, [eC, o, a, W, B, O, i])
              , eN = (0,
            M.useCallback)(function(e, t) {
                var n = S.tQ.getServerThreadId(u);
                if (null != n) {
                    var r = S.tQ.getThreadCurrentLeafId(u);
                    en.ZP.submitSharedConversationReportFeedback({
                        message_id: r,
                        shared_conversation_id: n,
                        text: e,
                        tags: t
                    }).then(function() {
                        nH.m.success("Moderation logged successfully")
                    }).catch(function() {
                        nH.m.danger("Moderation NOT logged successfully! Please try again")
                    }),
                    i()
                }
            }, [u, i])
              , eI = (0,
            M.useCallback)(function() {
                eC(),
                ek.current.push("moderation-reject"),
                eN(ew.current, ek.current)
            }, [eN, eC])
              , eP = (0,
            M.useCallback)(function() {
                eC(),
                ek.current.push("moderation-accept"),
                eN(ew.current, ek.current)
            }, [eN, eC])
              , eS = "moderate" === a ? (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsx)(e_.mH, {
                    title: x.formatMessage(lO.submitRejectModeration),
                    color: "danger",
                    onClick: eI
                }), (0,
                w.jsx)(e_.mH, {
                    title: x.formatMessage(lO.submitAcceptModeration),
                    color: "primary",
                    onClick: eP
                })]
            }) : "critique" === D ? (0,
            w.jsx)(e_.mH, {
                title: x.formatMessage("report" === a ? lO.submitReport : lO.submitFeedback),
                onClick: eM
            }) : null
              , eZ = "left" === C.current
              , eA = eZ ? "new" : "original"
              , eR = eZ ? "original" : "new"
              , eD = eZ ? x.formatMessage(lO.newAnswer) : x.formatMessage(lO.originalAnswer)
              , eF = eZ ? x.formatMessage(lO.originalAnswer) : x.formatMessage(lO.newAnswer)
              , eE = eZ ? x.formatMessage(lO.newAnswerBetter) : x.formatMessage(lO.originalAnswerBetter)
              , eB = eZ ? x.formatMessage(lO.originalAnswerBetter) : x.formatMessage(lO.newAnswerBetter)
              , eO = a && "report" !== a && "moderate" !== a
              , eq = (0,
            M.useCallback)(function(e) {
                var t = "left" === e ? eA : "right" === e ? eR : "same";
                if (B(I.s6.submittedComparisonUIV0, Object.assign({}, O, {
                    choice: t
                })),
                eO) {
                    var n = S.tQ.getTree(u)
                      , r = n.getMetadata(ef);
                    n.updateNode(ef, {
                        metadata: {
                            $set: (0,
                            ep._)((0,
                            b._)({}, r), {
                                inlineComparisonRating: "baseline"
                            })
                        }
                    });
                    var o = n.getMetadata(ex);
                    n.updateNode(ex, {
                        metadata: {
                            $set: (0,
                            ep._)((0,
                            b._)({}, o), {
                                inlineComparisonRating: t
                            })
                        }
                    }),
                    s(ed, ev, a, t, C.current, G.current, Q.current, $.current, J.current, ew.current, ek.current)
                }
                S.tQ.setThreadCurrentLeafId(u, e === C.current ? eb.id : eh.id),
                i()
            }, [eA, eR, B, O, eO, u, eb.id, eh.id, i, ef, ex, s, ed, ev, a])
              , eU = !el && null != J.current && W
              , ez = (0,
            M.useCallback)(function() {
                i(),
                "critique" === D ? B(I.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O)) : "compare" === D && B(I.s6.skippedComparisonUIV0, Object.assign({}, O))
            }, [i, B, O, D])
              , eH = (0,
            j._)((0,
            M.useState)([]), 2)
              , eV = eH[0]
              , eW = eH[1];
            return (0,
            M.useEffect)(function() {
                "moderate" === a && en.ZP.fetchShareModerationCategories().then(function(e) {
                    var t = e.moderation_categories;
                    eW(Object.keys(t).map(function(e) {
                        return [e, t[e]]
                    }))
                })
            }, []),
            (0,
            w.jsxs)(e_.ZP, {
                isOpen: !0,
                onModalClose: ez,
                closeButton: (0,
                w.jsx)(e_.ol, {
                    onClose: ez
                }),
                size: "custom",
                className: "md:w-[672px] lg:w-[896px] xl:w-[1024px] xl:max-w-7xl",
                type: "critique" === D ? "thumbsUp" === a ? "success" : "danger" : "success",
                icon: "critique" === D ? "thumbsUp" === a ? X.fmn : X.oLd : void 0,
                title: ej,
                primaryButton: eS,
                children: ["critique" === D && (0,
                w.jsxs)("form", {
                    ref: l,
                    children: [(0,
                    w.jsx)(ni.ZP, {
                        id: "feedback-other",
                        placeholder: "thumbsUp" === a ? x.formatMessage(lO.thumbsUpPlaceholder) : "report" === a ? x.formatMessage(lO.reportContentExplanationPlaceholder) : x.formatMessage(lO.thumbsDownPlaceholder),
                        rows: 3,
                        className: "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                    }), "thumbsDown" === a && (0,
                    w.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        w.jsx)(lD, {
                            id: "feedback-harmful",
                            label: x.formatMessage(lO.harmfulUnsafe)
                        }), (0,
                        w.jsx)(lD, {
                            id: "feedback-false",
                            label: x.formatMessage(lO.notTrue)
                        }), (0,
                        w.jsx)(lD, {
                            id: "feedback-not-helpful",
                            label: x.formatMessage(lO.notHelpful)
                        })]
                    }), null != a && !eO && (0,
                    w.jsx)(w.Fragment, {
                        children: (0,
                        w.jsxs)("div", {
                            className: "mb-4",
                            children: ["report" === a && (0,
                            w.jsxs)(w.Fragment, {
                                children: [(0,
                                w.jsx)(lD, {
                                    id: "feedback-dont-like-this",
                                    label: x.formatMessage(lO.dontLikeThis)
                                }), (0,
                                w.jsx)(lD, {
                                    id: "feedback-false",
                                    label: x.formatMessage(lO.notTrue)
                                }), (0,
                                w.jsx)(lD, {
                                    id: "feedback-not-helpful",
                                    label: x.formatMessage(lO.notHelpful)
                                }), (0,
                                w.jsx)(lD, {
                                    id: "feedback-harmful-offensive",
                                    label: x.formatMessage(lO.harmfulOffensive)
                                }), (0,
                                w.jsx)(lD, {
                                    id: "feedback-sexual-abuse",
                                    label: x.formatMessage(lO.sexualAbuse)
                                })]
                            }), "moderate" === a && (0,
                            w.jsxs)(w.Fragment, {
                                children: [eV.map(function(e) {
                                    var t = (0,
                                    j._)(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    return (0,
                                    w.jsx)(lD, {
                                        id: "feedback-" + n,
                                        label: r
                                    }, n)
                                }), (0,
                                w.jsx)(lD, {
                                    id: "feedback-copyright",
                                    label: x.formatMessage(lO.copyrightContent)
                                })]
                            }), (0,
                            w.jsx)(lD, {
                                id: "feedback-content-other",
                                label: x.formatMessage(lO.reportOtherContent)
                            })]
                        })
                    })]
                }), "compare" === D && V && void 0 !== k && (0,
                w.jsxs)("div", {
                    className: (0,
                    q.Z)("w-full"),
                    children: [(0,
                    w.jsx)("p", {
                        className: (0,
                        q.Z)("mb-7 mt-3"),
                        children: (0,
                        w.jsx)(et.Z, (0,
                        b._)({}, lO.continueWithChosenAnswer))
                    }), (0,
                    w.jsx)(lV, {
                        className: A ? "rounded-2xl" : "rounded-md",
                        children: (0,
                        w.jsx)(lW, {
                            children: (0,
                            w.jsx)(r_, {
                                currentModelId: d,
                                turnIndex: K,
                                isFinalTurn: !1,
                                clientThreadId: u,
                                onChangeItemInView: f,
                                onChangeRating: Y(),
                                onRequestMoreCompletions: h,
                                onDeleteNode: g,
                                onRequestCompletion: m,
                                onUpdateNode: p,
                                onSandboxLinkClick: v,
                                activeRequests: c,
                                showInlineEmbeddedDisplay: !0,
                                onHandleChangeVariantFeedbackInlineComparisonRating: Y()
                            })
                        })
                    }), (0,
                    w.jsxs)("div", {
                        className: (0,
                        q.Z)(),
                        children: [(0,
                        w.jsxs)("div", {
                            className: (0,
                            q.Z)("mb-2 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            w.jsx)("div", {
                                children: (0,
                                w.jsx)("p", {
                                    className: (0,
                                    q.Z)("font-semibold"),
                                    children: eD
                                })
                            }), (0,
                            w.jsx)("div", {
                                children: (0,
                                w.jsx)("p", {
                                    className: (0,
                                    q.Z)("font-semibold"),
                                    children: eF
                                })
                            })]
                        }), (0,
                        w.jsxs)("div", {
                            className: (0,
                            q.Z)("mb-5 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            w.jsxs)(lH, {
                                children: [(0,
                                w.jsx)(lW, {
                                    children: (0,
                                    w.jsx)(r_, {
                                        currentModelId: d,
                                        turnIndex: eZ ? ei : T,
                                        conversationLeafId: eZ ? ex : ef,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: Y(),
                                        onDeleteNode: g,
                                        onRequestMoreCompletions: h,
                                        onRequestCompletion: m,
                                        onUpdateNode: p,
                                        onSandboxLinkClick: v,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: Y()
                                    })
                                }), (0,
                                w.jsx)(lz, {
                                    children: (0,
                                    w.jsx)(e_.mH, {
                                        disabled: !eU,
                                        title: eE,
                                        onClick: function() {
                                            return eq("left")
                                        },
                                        color: "dark"
                                    })
                                })]
                            }), (0,
                            w.jsxs)(lH, {
                                children: [(0,
                                w.jsx)(lW, {
                                    children: (0,
                                    w.jsx)(r_, {
                                        currentModelId: d,
                                        turnIndex: eZ ? T : ei,
                                        conversationLeafId: eZ ? ef : ex,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: Y(),
                                        onDeleteNode: g,
                                        onRequestMoreCompletions: h,
                                        onRequestCompletion: m,
                                        onUpdateNode: p,
                                        onSandboxLinkClick: v,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: Y()
                                    })
                                }), (0,
                                w.jsx)(lz, {
                                    children: (0,
                                    w.jsx)(e_.mH, {
                                        disabled: !eU,
                                        title: eB,
                                        onClick: function() {
                                            return eq("right")
                                        },
                                        color: "dark"
                                    })
                                })]
                            })]
                        }), (0,
                        w.jsx)("div", {
                            className: (0,
                            q.Z)("grid w-full"),
                            children: (0,
                            w.jsxs)("div", {
                                className: (0,
                                q.Z)("mb-2 text-right"),
                                children: [(0,
                                w.jsx)(e_.mH, {
                                    disabled: !eU,
                                    title: x.formatMessage(lO.neitherAnswerBetter),
                                    color: "primary",
                                    onClick: function() {
                                        return eq("same")
                                    },
                                    className: (0,
                                    q.Z)("mr-2")
                                }), (0,
                                w.jsx)(e_.mH, {
                                    title: x.formatMessage(lO.skipStep),
                                    onClick: function() {
                                        return i()
                                    }
                                })]
                            })
                        })]
                    })]
                })]
            }, "RatingModal-".concat(r))
        }
        var lz = T.Z.div(lL())
          , lH = T.Z.div(lF())
          , lV = T.Z.div(lE())
          , lW = T.Z.div(lB());
        function lG() {
            var e, t, n, r, a, i, o = (t = (e = iG()).isLoggedInWithMfa,
            n = e.isUsernamePassword,
            r = e.setupMfa,
            i = (a = ic()).filter(function(e) {
                return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
            }),
            (t || !n) && (i = []),
            {
                disablePluginsThatWeCantUse: function() {
                    id(a.filter(function(e) {
                        return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                    }).map(function(e) {
                        return e.id
                    }))
                },
                pluginsWeCantUse: i,
                setupMfa: r
            }), s = o.disablePluginsThatWeCantUse, l = o.pluginsWeCantUse, u = o.setupMfa, c = (0,
            M.useCallback)(function() {
                s()
            }, [s]);
            return 0 === l.length ? null : (0,
            w.jsx)(e_.ZP, {
                isOpen: !0,
                onModalClose: c,
                title: "Some of your plugins require two-factor authentication.",
                primaryButton: (0,
                w.jsx)(e_.mH, {
                    onClick: u,
                    title: "Setup two-factor authentication",
                    color: "primary"
                }),
                secondaryButton: (0,
                w.jsx)(e_.mH, {
                    onClick: s,
                    title: "Turn off the plugins"
                }),
                type: "danger",
                children: (0,
                w.jsx)("div", {
                    className: "flex flex-col gap-2 py-4",
                    children: l.map(function(e) {
                        return (0,
                        w.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            w.jsx)(iC, {
                                plugin: e
                            })
                        }, e.id)
                    })
                })
            })
        }
        var lQ = n(16578)
          , l$ = n.n(lQ)
          , lJ = n(74853)
          , lY = n(99652)
          , lX = n(1220);
        function lK(e) {
            var t = e.isOpen
              , n = e.onClose
              , r = (0,
            N.WS)()
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            _.useRouter)()
              , l = (0,
            M.useCallback)(function() {
                r(I.s6.closeAccountPaymentModal),
                n()
            }, [n, r])
              , u = (0,
            M.useCallback)((0,
            em._)(function() {
                var e;
                return (0,
                ev.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        o(!0),
                        r(I.s6.clickAccountCustomerPortal),
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, 4, 5]),
                        [4, en.ZP.fetchCustomerPortalUrl()];
                    case 2:
                        return e = t.sent(),
                        s.push(e.url),
                        [3, 5];
                    case 3:
                        return t.sent(),
                        nH.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [s, r, o])
              , c = (0,
            M.useCallback)(function() {
                r(I.s6.clickAccountPaymentGetHelp)
            }, [r])
              , d = (0,
            M.useCallback)(function() {
                r(I.s6.clickAccountManageIos)
            }, [r])
              , f = (0,
            P.hz)()
              , h = (0,
            P.e2)()
              , g = (0,
            P.YD)();
            return (0,
            w.jsxs)(lJ.x, {
                isOpen: t,
                onClose: n,
                children: [(0,
                w.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    w.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your plan"
                    }), (0,
                    w.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: l,
                        children: (0,
                        w.jsx)(X.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                w.jsx)("div", {
                    className: "grid",
                    children: (0,
                    w.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0,
                        w.jsx)(lY.Oi, {
                            rowElements: [(0,
                            w.jsx)(lY.Cu, {
                                text: lX.S.plus.name,
                                children: (0,
                                w.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: lX.S.plus.costInDollars
                                })
                            }, "row-plus-plan-name"), (0,
                            w.jsx)(lY.hi, {
                                disabled: !0,
                                variant: "primary-disabled",
                                text: lX.S.plus.callToAction.active
                            }, "row-plus-plan-button"), (0,
                            w.jsx)(lY.G, {
                                text: lX.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0,
                            w.jsx)(lY.G, {
                                text: lX.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0,
                            w.jsx)(lY.G, {
                                className: "sm:pb-1",
                                text: lX.S.plus.modelFeatures
                            }, "row-plus-plan-feathers"), (null == h ? void 0 : h.purchase_origin_platform) === sO._4.MOBILE_IOS && !1 && (0,
                            w.jsx)(l$(), {
                                href: sO.m1,
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                w.jsx)(lY.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: lX.S.manageSubscriptionIos.callToAction,
                                    onClick: d
                                })
                            }, "row-plus-plan-manage-ios"), (!h || h.purchase_origin_platform === sO._4.WEBAPP || h.purchase_origin_platform === sO._4.GRANTED) && g && !1 && (0,
                            w.jsx)(lY.nR, {
                                className: "sm:pb-1",
                                isLoading: i,
                                text: lX.S.manageSubscriptionWeb.callToAction,
                                onClick: u
                            }, "row-plus-plan-manage"), !1 && (0,
                            w.jsx)(l$(), {
                                href: sO.ti,
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                w.jsx)(lY.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: lX.S.getHelp.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-help-link"), f.has("business_seats") ? (0,
                            w.jsx)(l$(), {
                                href: "/payments/business",
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                w.jsx)(lY.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: lX.S.business.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-create-business-team") : null]
                        })
                    })
                })]
            })
        }
        var l0 = n(48432);
        function l1() {
            var e = (0,
            k._)(["p-2 rounded-md ", ""]);
            return l1 = function() {
                return e
            }
            ,
            e
        }
        var l2 = (0,
        K.vU)({
            newChat: {
                defaultMessage: "New chat",
                id: "Stage.newChat",
                description: "New chat button tooltip"
            },
            closeSidebar: {
                defaultMessage: "Close sidebar",
                id: "Stage.closeSidebar",
                description: "Close sidebar button tooltip"
            },
            openSidebar: {
                defaultMessage: "Open sidebar",
                id: "Stage.openSidebar",
                description: "Open sidebar button tooltip"
            },
            closeDebug: {
                defaultMessage: "Close debug sidebar",
                id: "Stage.closeDebug",
                description: "Close debug sidebar button tooltip"
            },
            openDebug: {
                defaultMessage: "Open debug sidebar",
                id: "Stage.openDebug",
                description: "Open debug sidebar button tooltip"
            }
        });
        function l3(e) {
            var t = e.isStaticSharedThread
              , n = e.handleResetThread
              , r = e.toggleDebugSidebar
              , a = e.activeSidebar
              , i = (0,
            ee.Z)()
              , o = E().isNavigationCollapsed
              , s = (0,
            P.hz)()
              , l = s.has(er.M6)
              , u = "debug" === a
              , c = s.has("debug") && (l || !u);
            return t ? null : (0,
            w.jsxs)(w.Fragment, {
                children: [l && (0,
                w.jsx)("div", {
                    className: "absolute left-4 top-4 z-10 hidden md:inline-block",
                    children: (0,
                    w.jsx)(e2.u, {
                        side: "right",
                        label: o ? i.formatMessage(l2.openSidebar) : i.formatMessage(l2.closeSidebar),
                        children: (0,
                        w.jsx)(l5, {
                            $isNewLayout: l,
                            onClick: B.toggleNavigation,
                            "aria-label": o ? i.formatMessage(l2.openSidebar) : i.formatMessage(l2.closeSidebar),
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.iYc
                            })
                        })
                    })
                }), (0,
                w.jsxs)("div", {
                    className: (0,
                    q.Z)("absolute z-10 hidden flex-col gap-2 md:flex", l ? "right-4 top-4" : "right-3 top-3"),
                    children: [l && (0,
                    w.jsxs)(w.Fragment, {
                        children: [(0,
                        w.jsx)(e2.u, {
                            side: "left",
                            label: i.formatMessage(l2.newChat),
                            children: (0,
                            w.jsx)(l5, {
                                $isNewLayout: l,
                                onClick: function() {
                                    n()
                                },
                                "aria-label": i.formatMessage(l2.newChat),
                                children: (0,
                                w.jsx)(ef.ZP, {
                                    icon: X.vPQ
                                })
                            })
                        }), c && (0,
                        w.jsx)("div", {
                            className: "my-3 border-t-[1px] border-black/20 dark:border-white/20"
                        })]
                    }), c && (0,
                    w.jsx)(e2.u, {
                        side: "left",
                        label: u ? i.formatMessage(l2.closeDebug) : i.formatMessage(l2.openDebug),
                        children: (0,
                        w.jsx)(l5, {
                            className: (0,
                            q.Z)(c && "opacity-40 hover:opacity-100"),
                            onClick: r,
                            $isNewLayout: l,
                            "aria-label": u ? i.formatMessage(l2.closeDebug) : i.formatMessage(l2.openDebug),
                            children: (0,
                            w.jsx)(ef.ZP, {
                                icon: X.cDN
                            })
                        })
                    })]
                })]
            })
        }
        var l5 = T.Z.button(l1(), function(e) {
            return e.$isNewLayout ? "hover:bg-black/10 hover:dark:bg-white/10" : "bg-black/10 dark:bg-white/10 "
        })
          , l4 = n(89678)
          , l6 = n.n(l4)
          , l8 = n(55989)
          , l7 = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i]
          , l9 = r5()(function() {
            return Promise.resolve().then(n.bind(n, 1215))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1215]
                }
            },
            ssr: !1
        });
        function ue(e) {
            var t = e.children;
            return (0,
            w.jsx)(l9, {
                className: "h-full dark:bg-gray-800",
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                children: t
            })
        }
        function ut() {
            var e = (0,
            k._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return ut = function() {
                return e
            }
            ,
            e
        }
        function un() {
            var e = (0,
            k._)(["grow flex-1 overflow-hidden"]);
            return un = function() {
                return e
            }
            ,
            e
        }
        function ur() {
            var e = (0,
            k._)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2"]);
            return ur = function() {
                return e
            }
            ,
            e
        }
        var ua = (0,
        K.vU)({
            contentPolicyViolation: {
                id: "thread.modal.restrictedTerms.title",
                defaultMessage: "This prompt may violate our content policy.",
                description: "Title for the restricted terms modal"
            },
            acknowledge: {
                id: "thread.modal.common.acknowledge",
                defaultMessage: "Acknowledge",
                description: "Acknowledge button text"
            },
            doNotShareSensitive: {
                id: "thread.modal.onboarding.title",
                defaultMessage: "Do not share sensitive materials with this application",
                description: "Title for the onboarding warning modal"
            },
            freeResearchPreview: {
                id: "thread.chatgptFreeResearchPreview",
                defaultMessage: "Official Shopee Store: <bili>softwaredigital.os</bili> | Powered by <pandora>Pandora</pandora>",
                description: "Free Research Preview disclaimer"
            },
            mayProduceInaccurateInformation: {
                id: "thread.chatgptMayProduceInaccurateInformation",
                defaultMessage: "Official Shopee Store: <bili>softwaredigital.os</bili> | Powered by <pandora>Pandora</pandora>",
                description: "ChatGPT disclaimer for producing inaccurate information"
            },
            somethingWentWrong: {
                id: "thread.modal.unrecoverableError.title",
                defaultMessage: "Something went wrong",
                description: "Title for the UnrecoverableErrorModal"
            },
            tryAgainLater: {
                id: "thread.modal.unrecoverableError.description",
                defaultMessage: "We're sorry, but something went wrong. Please try again later.",
                description: "Description for the UnrecoverableErrorModal"
            },
            resetThread: {
                id: "thread.modal.unrecoverableError.resetThread",
                defaultMessage: "Reset thread",
                description: "Reset thread button text"
            },
            reportModalThankYouTitle: {
                id: "thread.modal.reportModalThankYou.title",
                defaultMessage: "Thank you for your report!",
                description: "Title for the post-report thank-you modal"
            },
            reportModalThankYouDescription: {
                id: "thread.modal.reportModalThankYou.description",
                defaultMessage: "Thank you for your report.",
                description: "Description for the post-report thank-you modal"
            },
            reportModalThankYouDismiss: {
                id: "thread.modal.reportModalThankYou.dismissButton",
                defaultMessage: "Close",
                description: "Close button for the post-report thank-you modal"
            },
            sharedConversationContinueConversation: {
                id: "thread.sharedConversation.continue",
                defaultMessage: "Continue this conversation",
                description: "Button for shared links to allow user to continue conversation in their own history"
            },
            sharedConversationReportConversation: {
                id: "thread.sharedConversation.report",
                defaultMessage: "Report conversation",
                description: "Button for shared links to report conversation for legal, safety, or other reasons"
            },
            sharedConversationModerateConversation: {
                id: "thread.sharedConversation.moderate",
                defaultMessage: "Moderate conversation",
                description: "Button for shared links to moderate a conversation for legal, safety, or other reasons"
            },
            reportSharedConversation: {
                id: "thread.reportSharedConversation",
                defaultMessage: "Report content",
                description: "Report shared conversation footer link text"
            },
            termsOfUse: {
                id: "thread.termsOfUse",
                defaultMessage: "Pandora on GitHub",
                description: "pandora footer link text"
            },
            privacyPolicy: {
                id: "thread.privacyPolicy",
                defaultMessage: "Privacy policy",
                description: "Privacy policy footer link text"
            }
        });
        function ui(e) {
            var t = e.onClickReportSharedConversation;
            return (0,
            w.jsxs)("div", {
                className: "flex justify-center gap-3 text-gray-500",
                children: [(0,
                w.jsx)("a", {
                    href: "https://github.com/pengzhile/pandora",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    w.jsx)(et.Z, (0,
                    b._)({}, ua.termsOfUse))
                })]
            })
        }
        var uo = function(e) {
            var t, n, r, a, i, o, s, l, u, c, d, f, h, g, m, p, v, x, y, k, C, T, Z, A, D, F, B, U, z, H, V, W, G = e.initialThreadData, Q = e.clientThreadId, $ = e.showAccountPortalModal, J = e.setShowAccountPortalModal, K = e.activeSidebar, ei = e.setActiveSidebar, eo = e.activeRequests, es = e.setActiveRequests, el = e.handleResetThread, eu = e.isStaticSharedThread, ec = e.initiallyHighlightedMessageId, ef = e.continueConversationUrl, eh = (0,
            ee.Z)(), ex = (0,
            P.hz)(), eb = (0,
            eI.Fl)(), ey = eb.isPluginsAvailable, ej = eb.isCodeInterpreterAvailable, ek = (0,
            ea.w$)(), ew = (0,
            N.WS)(), eC = ex.has(er.Pt) && ek, eM = (0,
            M.useContext)(O.QL).historyDisabled, eT = (0,
            _.useRouter)(), eN = eu && (null === (A = eT.query) || void 0 === A ? void 0 : null === (D = A.shareParams) || void 0 === D ? void 0 : D[1]) === "moderate", eP = (0,
            S.U0)(Q), eS = (0,
            S.Kt)(Q), eZ = (0,
            S.oq)(Q), eA = (0,
            j._)((0,
            M.useState)(!1), 2), eD = eA[0], eF = eA[1], eE = (0,
            j._)((0,
            M.useState)(!1), 2), eB = eE[0], eO = eE[1], eq = (0,
            j._)((0,
            M.useState)(), 2), eU = eq[0], ez = eq[1], eH = (0,
            j._)((0,
            M.useState)(!1), 2), eV = eH[0], eW = eH[1], eG = (0,
            j._)((0,
            M.useState)(), 2), eQ = eG[0], e$ = eG[1], eJ = (0,
            j._)((0,
            M.useState)(), 2), eY = eJ[0], eX = eJ[1], eK = (0,
            j._)((0,
            M.useState)(), 2), e0 = eK[0], e1 = eK[1], e2 = (0,
            M.useRef)(null), e3 = (0,
            P.nR)(), e5 = (0,
            sd.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            }), e4 = ex.has(er.FZ), e6 = (0,
            j._)((0,
            M.useState)(!1), 2), e8 = e6[0], e7 = e6[1], e9 = (n = (t = {
                exempt: !1,
                onRestrictedTermFound: (0,
                M.useCallback)(function(e) {
                    e7(!0),
                    ew(I.s6.promptUsedRestrictedWords, {
                        threadId: S.tQ.getServerThreadId(Q),
                        content: e
                    })
                }, [ew, Q])
            }).exempt,
            r = t.onRestrictedTermFound,
            i = (a = (0,
            j._)((0,
            M.useState)(!1), 2))[0],
            o = a[1],
            {
                hasRestrictedTerms: i,
                checkRestrictedTerms: (0,
                M.useCallback)(function(e) {
                    var t;
                    return (l7.some(function(n) {
                        var r = n.exec(e);
                        return r && (t = r[0]),
                        r
                    }),
                    !n && t) ? (o(!0),
                    null == r || r(t),
                    !0) : (o(!1),
                    !1)
                }, [n, r])
            }), te = e9.hasRestrictedTerms, tt = e9.checkRestrictedTerms, tn = (0,
            j._)((0,
            M.useState)(!0), 2), tr = tn[0], ta = tn[1], ti = (0,
            j._)((0,
            M.useState)(!1), 2), to = ti[0], ts = ti[1], tl = (0,
            rd.iu)(), tu = ic(), tc = (0,
            rd.Gg)(tl, !0), td = null !== (V = (0,
            rd.Bv)(G.lastModelUsed, Q)) && void 0 !== V ? V : tc, tf = (0,
            rd.B9)(), th = void 0 !== td ? tf.get(td) : void 0, tg = oQ(), tm = (0,
            M.useCallback)(function() {
                tg(),
                ew(I.s6.newThread)
            }, [ew, tg]), tp = S.tQ.getTitle(Q), tv = (0,
            j._)((0,
            M.useState)(), 2), tx = tv[0], tb = tv[1], ty = (0,
            M.useCallback)(function(e, t) {
                var n = null != t ? t : "";
                eM || "" === n || en.ZP.generateTitle(n, e, td).then(function(e) {
                    var r = e.title;
                    S.tQ.setTitle(n, r, S._L.Generated),
                    tg(),
                    ew(I.s6.renameThread, {
                        threadId: t,
                        content: r,
                        model: td
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [eM, ew, td, tg]), tj = (0,
            M.useCallback)(function(e, t, n) {
                var r = ex.has(er.uj);
                eM || !r || void 0 === n || eL.Cv.getIsIncompleteFromMessage(n) || eL.Cv.getWasInterruptedFromMessage(n) || en.ZP.generateSuggestions(e, t, td).then(function(e) {
                    tb({
                        messageId: t,
                        suggestions: e.suggestions
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [ex, eM, td]), tk = (0,
            S.Uy)(Q), tw = (s = ey && (null == th ? void 0 : null === (F = th.enabledTools) || void 0 === F ? void 0 : F.includes("tools3")) ? tu.map(function(e) {
                return e.id
            }) : void 0,
            l = (0,
            P.hz)(),
            u = (0,
            M.useId)(),
            c = (0,
            N.WS)(),
            d = (0,
            nA.Y8)(function(e) {
                return null == e ? void 0 : e.setCapTimeout
            }),
            f = (0,
            nA.Y8)(function(e) {
                return null == e ? void 0 : e.clearCapTimeout
            }),
            h = (0,
            M.useContext)(O.QL).historyDisabled,
            g = (0,
            M.useRef)(0),
            m = (0,
            M.useRef)({}),
            p = (0,
            M.useCallback)(function(e, t, n, r) {
                var a, i, o = r.eventSource, s = function() {
                    setTimeout(function() {
                        L.removeAborterById(n),
                        es(function(e) {
                            var t = new Set(e);
                            return t.delete(n),
                            t
                        }),
                        delete m.current[n],
                        S.tQ.releaseThread(Q)
                    }, 0)
                }, u = S.tQ.getTree(Q), h = n, g = u.getParentId(h), p = t === eR.Os.Continue, v = !0, y = !1, j = u.getMessage(h), k = new Set, w = u.getIsBlockedFromNode(g), C = !1, _ = !1, M = l6()(function() {
                    w || C || S.tQ.updateTree(Q, function(e) {
                        e.updateNodeMessage(h, j)
                    })
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                function T() {
                    return (T = (0,
                    em._)(function(e, t, n) {
                        var r, a, i, o, s, l = arguments;
                        return (0,
                        ev.Jh)(this, function(d) {
                            switch (d.label) {
                            case 0:
                                r = l.length > 3 && void 0 !== l[3] && l[3],
                                d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]),
                                [4, (0,
                                na._I)(n, !1, e, u.getMessageId(t))];
                            case 2:
                                return i = (a = d.sent()).isBlocked,
                                o = a.isFlagged,
                                (i || o) && (_ = !0),
                                i ? (C = !0,
                                r || (w = !0),
                                S.tQ.updateTree(Q, function(e) {
                                    e.updateNode(t, {
                                        message: {
                                            content: {
                                                parts: {
                                                    $set: [""]
                                                }
                                            }
                                        },
                                        metadata: {
                                            $set: (0,
                                            ep._)((0,
                                            b._)({}, na.sK), {
                                                completionSampleFinishTime: Date.now()
                                            })
                                        }
                                    })
                                }),
                                c(r ? I.s6.completionBlockedByModeration : I.s6.promptBlockedByModeration, {
                                    threadId: e,
                                    id: t
                                })) : o ? (S.tQ.updateTree(Q, function(e) {
                                    e.updateNode(t, {
                                        metadata: {
                                            $set: na.Mf
                                        }
                                    })
                                }),
                                c(r ? I.s6.completionFlaggedByModeration : I.s6.promptFlaggedByModeration, {
                                    threadId: e,
                                    id: t
                                })) : r && w && S.tQ.updateTree(Q, function(e) {
                                    e.updateNodeMessage(t, j)
                                }),
                                [3, 4];
                            case 3:
                                return s = d.sent(),
                                C = !0,
                                S.tQ.updateTree(Q, function(e) {
                                    e.updateNode(t, {
                                        metadata: {
                                            $set: {
                                                err: "An error occured",
                                                errType: "danger",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                c(I.s6.moderationError, {
                                    threadId: e,
                                    content: JSON.stringify(s || "")
                                }),
                                lR().publish("UnrecoverableError"),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                return a = (0,
                em._)(function(r) {
                    var a, N, P, Z, A, R, D, F, E, B, O, q, U, z, H;
                    return (0,
                    ev.Jh)(this, function(V) {
                        switch (V.label) {
                        case 0:
                            if ("error" === r.type)
                                return console.error(a = r.error),
                                N = (null == a ? void 0 : a.message) || "Something went wrong",
                                S.tQ.updateTree(Q, function(e) {
                                    e.updateNode(h, {
                                        message: {
                                            $set: j
                                        },
                                        metadata: {
                                            $set: {
                                                err: N,
                                                errType: "danger",
                                                errCode: (0,
                                                l8.T)(a) && a.code || "",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                s(),
                                (0,
                                l8.T)(a) && (null == a ? void 0 : a.code) === nA.uU && (null == a ? void 0 : a.clearsIn) && (d(new Date(Date.now() + 1e3 * a.clearsIn).toISOString()),
                                setTimeout(function() {
                                    f()
                                }, 1e3 * a.clearsIn)),
                                [2];
                            if ("moderation" === r.type && (P = r.isCompletion,
                            Z = r.messageId,
                            A = r.conversationId,
                            R = r.flagged,
                            ((D = r.blocked) || R) && S.tQ.updateTree(Q, function(e) {
                                var t = e.messageIdToNodeId(Z);
                                e.updateNode(t, {
                                    message: {
                                        content: {
                                            parts: {
                                                $set: [""]
                                            }
                                        }
                                    },
                                    metadata: {
                                        $set: (0,
                                        ep._)((0,
                                        b._)({}, D ? na.sK : na.Mf), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            (R || D) && c(P ? D ? I.s6.completionBlockedByModeration : I.s6.completionFlaggedByModeration : D ? I.s6.promptBlockedByModeration : I.s6.promptFlaggedByModeration, {
                                threadId: A,
                                id: Z
                            })),
                            "message" === r.type) {
                                if (F = r.message,
                                E = r.conversationId,
                                v && u.isFirstCompletion) {
                                    if ((null == F ? void 0 : F.author.role) === eR.uU.System)
                                        return u.appendSystemMessageToRoot(F),
                                        [2];
                                    if ((null == F ? void 0 : F.author.role) === eR.uU.User)
                                        return [2]
                                }
                                v ? (O = (null === (B = S.qN.getState().threads[Q]) || void 0 === B ? void 0 : B.continuingFromSharedConversationId) != null,
                                S.tQ.removeContinuingFromSharedConversationId(Q),
                                v = !1,
                                y = u.isFirstCompletion || O,
                                (null == F ? void 0 : F.id) && k.add(n),
                                void 0 !== E && (i = E,
                                (0,
                                S.Zz)(Q) && S.tQ.setServerIdForNewThread(Q, E)),
                                S.tQ.updateTree(Q, function(e) {
                                    e.updateNodeMessage(h, F)
                                }),
                                y && tm(E),
                                p || function(e, t, n) {
                                    T.apply(this, arguments)
                                }(E, g, u.getTextFromLastNTurns(g, 1), !1),
                                c(I.s6.generateCompletion, {
                                    id: n,
                                    threadId: E,
                                    completionType: t,
                                    eventSource: o,
                                    model: e
                                }),
                                L.addAborter(n, m.current[n])) : p || F.id === u.getMessageId(h) || (k.add(F.id),
                                M.flush(),
                                S.tQ.updateTree(Q, function(e) {
                                    e.addNode(F.id, F, h, eR.Jq.Completion)
                                }),
                                h = F.id,
                                S.tQ.setThreadCurrentLeafId(Q, h)),
                                j = F
                            }
                            if (M(),
                            "done" !== r.type || (w || C || (M.flush(),
                            _ || (q = u.getMessageId(h),
                            y && ty(q, i),
                            tj(i, q, j))),
                            S.tQ.updateTree(Q, function(e) {
                                e.updateNode(h, {
                                    metadata: {
                                        $set: (0,
                                        ep._)((0,
                                        b._)({}, u.getMetadata(h)), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            s(),
                            !l.has("tools3_dev") || !(U = function(e) {
                                var t, n, r, a = (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.invoked_plugin) || void 0 === n ? void 0 : n.http_api_call_data) || (null === (r = e.metadata) || void 0 === r ? void 0 : r.http_api_call_data);
                                if (void 0 !== a) {
                                    if (e.author.role !== eR.uU.Assistant) {
                                        console.error("Refusing to make localhost plugin HTTP call from non-assistant message", e);
                                        return
                                    }
                                    if ("object" != typeof a || "string" != typeof a.namespace || 0 === a.namespace.length || "string" != typeof a.function_name || 0 === a.function_name.length || "string" != typeof a.parent_message_id || 0 === a.parent_message_id.length || "string" != typeof a.url || 0 === a.url.length || "string" != typeof a.method || !["get", "post", "put", "delete", "patch"].includes(a.method) || !Array.isArray(a.qs_params) || a.qs_params.some(function(e) {
                                        return !Array.isArray(e) || 2 !== e.length || "string" != typeof e[0] || "string" != typeof e[1]
                                    }) || "object" != typeof a.headers || Object.keys(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || Object.values(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || !(null === a.body || "object" == typeof a.body && Object.keys(a.body).every(function(e) {
                                        return "string" == typeof e
                                    })) || "string" != typeof a.api_function_type || !["kwargs", "chat"].includes(a.api_function_type)) {
                                        console.error("Refusing to make localhost plugin HTTP call with invalid metadata", e);
                                        return
                                    }
                                    if (!/^https?:\/\/localhost:/.test(a.url)) {
                                        console.error("Refusing to make localhost plugin HTTP call with non-localhost URL", e);
                                        return
                                    }
                                    return a
                                }
                            }(j))))
                                return [3, 2];
                            return [4, function(e) {
                                return nV.apply(this, arguments)
                            }(U)];
                        case 1:
                            z = V.sent(),
                            H = h,
                            S.tQ.updateTree(Q, function(e) {
                                var t = !0
                                  , n = !1
                                  , r = void 0;
                                try {
                                    for (var a, i = z[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                        var o = a.value;
                                        e.addNode(o.id, o, H, eR.Jq.Completion, {
                                            completionSampleFinishTime: Date.now()
                                        }),
                                        H = o.id
                                    }
                                } catch (e) {
                                    n = !0,
                                    r = e
                                } finally {
                                    try {
                                        t || null == i.return || i.return()
                                    } finally {
                                        if (n)
                                            throw r
                                    }
                                }
                            }),
                            S.tQ.setThreadCurrentLeafId(Q, H),
                            x(e, eR.Os.Next, H, {}, void 0, void 0),
                            V.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                }),
                function(e) {
                    return a.apply(this, arguments)
                }
            }, [c, tm, ty, es, Q]),
            x = (0,
            M.useCallback)((v = (0,
            em._)(function(e, t, n, r) {
                var a, i, o, l, c, d, f, v, x, b, y, j = arguments;
                return (0,
                ev.Jh)(this, function(k) {
                    switch (k.label) {
                    case 0:
                        return a = !(j.length > 4) || void 0 === j[4] || j[4],
                        i = j.length > 5 ? j[5] : void 0,
                        o = S.tQ.getTree(Q),
                        S.tQ.retainThread(Q),
                        l = "".concat(eL.Vh).concat(u, "-").concat(g.current++),
                        es(function(e) {
                            var t = new Set(e);
                            return t.add(l),
                            t
                        }),
                        S.tQ.updateTree(Q, function(e) {
                            e.addNode(l, "", n, eR.Jq.Completion)
                        }),
                        a && S.tQ.setThreadCurrentLeafId(Q, l),
                        d = [],
                        f = o.getNode(n),
                        t === eR.Os.Next || t === eR.Os.Variant ? (c = (null === (v = (x = o.getNode(f.parentId)).message) || void 0 === v ? void 0 : v.id) || x.id,
                        d.push(f.message)) : c = f.message.id,
                        void 0 === (b = S.tQ.getServerThreadId(Q)) && (0,
                        S.Zz)(Q) && S.tQ.updateInitialThreadDataForNewThread(Q, e, s),
                        [4, en.ZP.publicApiCompletionStream({
                            model: e,
                            completionType: t,
                            threadId: b,
                            continueFromSharedConversationId: tk,
                            historyDisabled: h,
                            parentMessageId: c,
                            messages: d,
                            enabledPluginIds: s,
                            completionMetadata: i
                        }, p(e, t, l, r))];
                    case 1:
                        return y = k.sent(),
                        m.current[l] = y,
                        [2]
                    }
                })
            }),
            function(e, t, n, r) {
                return v.apply(this, arguments)
            }
            ), [Q, u, es, tk, h, s, p])), tC = (0,
            M.useCallback)(function() {
                if (eZ) {
                    var e = S.tQ.getTree(Q).getBranchFromLeaf(eZ);
                    e.forEach(function(e) {
                        L.abortAndRemoveById(e.id)
                    }),
                    es(function(t) {
                        var n = new Set(t);
                        return e.forEach(function(e) {
                            n.delete(e.id)
                        }),
                        n
                    })
                }
            }, [eZ, es, Q]), tM = (0,
            M.useCallback)((y = (0,
            em._)(function(e, t, n, r) {
                var a, i, o, s, l = arguments;
                return (0,
                ev.Jh)(this, function(u) {
                    return a = !(l.length > 4) || void 0 === l[4] || l[4],
                    i = l.length > 5 ? l[5] : void 0,
                    o = l.length > 6 ? l[6] : void 0,
                    r && tC(),
                    s = S.tQ.getTree(Q),
                    e !== eR.Os.Continue && tt(s.getTextFromNode(t)) || tw(i ? tc : td, e, t, n, a, o),
                    [2]
                })
            }),
            function(e, t, n, r) {
                return y.apply(this, arguments)
            }
            ), [Q, tt, tw, tc, td, tC]), tT = (0,
            M.useCallback)(function(e, t, n, r) {
                S.tQ.updateTree(Q, function(n) {
                    n.addNode(e, r, t, eR.Jq.Prompt)
                })
            }, [Q]), tN = (0,
            M.useCallback)(function(e, t, n) {
                var r = t.value
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                tT(e, eZ, eR.Jq.Prompt, r),
                tM(eR.Os.Next, e, n, !0, void 0, void 0, a)
            }, [eZ, tT, tM]), tI = (0,
            S.nh)(Q, eZ), tP = (0,
            M.useMemo)(function() {
                var e, t, n = tI.type === eR.Jq.Prompt, r = (null === (e = tI.metadata) || void 0 === e ? void 0 : e.err) && (null === (t = tI.metadata) || void 0 === t ? void 0 : t.errCode) !== na.Dd;
                return !!(n || r) && 0 === eo.size
            }, [eo.size, tI]), tS = (0,
            nA.Y8)(function(e) {
                return e.isoDate
            }), tZ = (0,
            M.useMemo)(function() {
                var e, t = (null === (e = tI.metadata) || void 0 === e ? void 0 : e.errCode) === nA.uU;
                return tP && t && null != tS && "" !== tS
            }, [null === (B = tI.metadata) || void 0 === B ? void 0 : B.errCode, tP, tS]), tA = (0,
            M.useCallback)(function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
                  , a = arguments.length > 4 ? arguments[4] : void 0
                  , i = S.tQ.getTree(Q).getParentPromptNode(e).id;
                tM(eR.Os.Variant, i, t, !1, n, a, {
                    variantPurpose: r
                })
            }, [tM, Q]), tR = (0,
            M.useCallback)(function(e) {
                ew(I.s6.continueCompletion),
                tM(eR.Os.Continue, e, {
                    eventSource: "mouse"
                }, !1)
            }, [ew, tM]), tD = (0,
            M.useCallback)(function(e) {
                var t = eZ
                  , n = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(n = (i = o.next()).done); n = !0)
                        !function() {
                            var e = i.value;
                            e.conversation_id && (0,
                            S.Zz)(Q) && S.tQ.setServerIdForNewThread(Q, e.conversation_id),
                            S.tQ.updateTree(Q, function(n) {
                                n.addNode(e.message.id, e.message, t, eR.Jq.Completion)
                            }),
                            t = e.message.id
                        }()
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                S.tQ.setThreadCurrentLeafId(Q, t),
                tM(eR.Os.Next, t, {}, !0, void 0, void 0, void 0)
            }, [eZ, tM, Q]), tL = !!(ej && (null == th ? void 0 : null === (U = th.enabledTools) || void 0 === U ? void 0 : U.includes("tools2"))), tF = (0,
            M.useCallback)((k = (0,
            em._)(function(e, t) {
                var n, r;
                return (0,
                ev.Jh)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if (!tL)
                            return [3, 2];
                        return t.preventDefault(),
                        t.stopPropagation(),
                        n = t.currentTarget.href,
                        r = S.tQ.getServerThreadId(Q),
                        [4, (0,
                        t_.handleSandboxLinkClick)(ex, r)(e, n)];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return [2]
                    }
                })
            }),
            function(e, t) {
                return k.apply(this, arguments)
            }
            ), [ex, tL, Q]), tE = (0,
            M.useCallback)(function(e) {
                var t = S.tQ.getTree(Q).getLeafFromNode(e);
                S.tQ.setThreadCurrentLeafId(Q, t.id),
                ew(I.s6.changeNode)
            }, [ew, Q]), tB = (0,
            M.useCallback)(function(e, t) {
                S.tQ.updateTree(Q, function(n) {
                    n.updateNodeText(e, t)
                })
            }, [Q]), tO = (0,
            M.useCallback)(function(e, t, n) {
                var r = S.tQ.getServerThreadId(Q);
                if (ew(I.s6.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: td
                }),
                void 0 !== r && en.ZP.submitMessageFeedback({
                    message_id: t,
                    conversation_id: r,
                    rating: n
                }),
                eX(e),
                e1(t),
                e$(n),
                S.tQ.updateTree(Q, function(t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                        metadata: {
                            $set: (0,
                            ep._)((0,
                            b._)({}, r), {
                                rating: n
                            })
                        }
                    })
                }),
                "thumbsDown" === n && eC) {
                    var a = S.tQ.getTree(Q).getConversationTurns(e || "root");
                    lq(a[a.length - 1]) && tA(e, {
                        eventSource: "mouse",
                        intent: "comparison"
                    }, !1, "comparison")
                }
            }, [ew, Q, td, eC, tA]), tq = (0,
            M.useCallback)(function(e, t) {
                if (eQ && null != eY && "" !== eY && (e || t.length > 0)) {
                    var n = S.tQ.getServerThreadId(Q);
                    ew(I.s6.reportResult, {
                        id: e0,
                        threadId: n,
                        content: e,
                        model: td,
                        rating: eQ,
                        tags: t
                    }),
                    Q && e0 && en.ZP.submitMessageFeedback({
                        message_id: e0,
                        conversation_id: n,
                        rating: eQ,
                        text: e,
                        tags: t
                    })
                }
            }, [eQ, eY, Q, ew, e0, td]), tU = (0,
            M.useCallback)(function(e, t) {
                if (eD && null != eU && "" !== eU) {
                    var n = S.tQ.getServerThreadId(Q);
                    ew(I.s6.reportResult, {
                        id: e0,
                        threadId: n,
                        content: e,
                        model: td,
                        rating: eQ,
                        tags: t
                    }),
                    en.ZP.submitSharedConversationReportFeedback({
                        message_id: eU,
                        shared_conversation_id: n,
                        text: e,
                        tags: t
                    }),
                    eO(!0)
                }
            }, [eQ, eD, eU, Q, ew, e0, td]), tz = (0,
            M.useCallback)((C = (0,
            em._)(function(e, t, n, r, a, i, o, s, l, u, c) {
                return (0,
                ev.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        return [4, en.ZP.submitMessageComparisonFeedback({
                            feedback_version: "comparison_feedback_modal:a:1.0",
                            original_message_id: e,
                            new_message_id: t,
                            rating: n,
                            conversation_id: S.tQ.getServerThreadId(Q),
                            text: u,
                            tags: c.map(function(e) {
                                return e.replace("feedback-", "")
                            }),
                            completion_comparison_rating: r,
                            new_completion_placement: a,
                            feedback_start_time: i,
                            compare_step_start_time: o,
                            new_completion_load_start_time: s,
                            new_completion_load_end_time: l,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return d.sent(),
                        [2]
                    }
                })
            }),
            function(e, t, n, r, a, i, o, s, l, u, c) {
                return C.apply(this, arguments)
            }
            ), [Q]), tH = (0,
            M.useCallback)((T = (0,
            em._)(function(e, t, n, r, a, i, o) {
                return (0,
                ev.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, en.ZP.submitMessageComparisonFeedback({
                            feedback_version: "inline_regen_feedback:a:1.0",
                            original_message_id: e,
                            new_message_id: t,
                            rating: "none",
                            conversation_id: S.tQ.getServerThreadId(Q),
                            text: "",
                            tags: [],
                            completion_comparison_rating: n,
                            new_completion_placement: "not-applicable",
                            feedback_start_time: r,
                            compare_step_start_time: a,
                            new_completion_load_start_time: i,
                            new_completion_load_end_time: o,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return s.sent(),
                        [2]
                    }
                })
            }),
            function(e, t, n, r, a, i, o) {
                return T.apply(this, arguments)
            }
            ), [Q]), tV = (0,
            M.useCallback)(function(e, t) {
                var n = S.tQ.getTree(Q).getConversationTurns(e)
                  , r = null == n ? void 0 : n[(null == n ? void 0 : n.length) - 1].variantIds
                  , a = (null == r ? void 0 : r.length) === 1;
                tA(e, a ? (0,
                ep._)((0,
                b._)({}, t), {
                    intent: "comparison_implicit"
                }) : t, !0, a ? "comparison_implicit" : "none")
            }, [tA, Q]), tW = (0,
            M.useCallback)(function(e) {
                S.tQ.updateTree(Q, function(t) {
                    t.deleteNode(e)
                })
            }, [Q]), tG = (0,
            M.useCallback)(function() {
                ei(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [ei]), tQ = (0,
            M.useCallback)(function() {
                ei(function(e) {
                    return "debug" !== e && "debug"
                })
            }, [ei]), t$ = (0,
            M.useCallback)(function() {
                J(!1)
            }, [J]), tJ = lI(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }), tY = tJ.showAccountPaymentModal, tX = tJ.setShowAccountPaymentModal, tK = (0,
            M.useCallback)(function() {
                tX(!1)
            }, [tX]), t0 = (0,
            M.useCallback)(function(e, t) {
                var n = S.tQ.getTree(Q);
                if (n.isFirstCompletion && !eM) {
                    var r, a = n.getParent(t);
                    (null === (r = a.metadata) || void 0 === r ? void 0 : r.errCode) !== na.Dd && setTimeout(function() {
                        ty(a.message.id)
                    }, 500)
                }
                L.abortAndRemoveById(t),
                eo.has(t) && (S.tQ.updateTree(Q, function(e) {
                    e.updateNodeMessageMetadata(t, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
                }),
                es(function(e) {
                    var n = new Set(e);
                    return n.delete(t),
                    n
                }))
            }, [ty, eM, eo, es, Q]), t1 = (0,
            M.useCallback)(function() {
                ts(!0)
            }, []);
            (0,
            M.useEffect)(function() {
                var e = lR().subscribe("AbortCompletion", t0)
                  , t = lR().subscribe("UnrecoverableError", t1);
                return function() {
                    lR().unsubscribe(e),
                    lR().unsubscribe(t)
                }
            }, [t0, t1]);
            var t2 = (0,
            S.Hk)(Q)
              , t3 = eP >= 2
              , t5 = (0,
            S.Zz)(Q) && !t3
              , t4 = (0,
            M.useCallback)(function() {
                ta(!0),
                eg.m.setItem("oai/librarian/hasSeenWarning", "true")
            }, [])
              , t6 = (0,
            M.useCallback)(function() {
                e7(!1)
            }, [])
              , t8 = (0,
            S.lA)(Q, eZ)
              , t7 = (0,
            S.dz)(Q, eZ)
              , t9 = R(function(e) {
                return null != e.aborters[t2]
            })
              , ne = (0,
            M.useRef)(null)
              , nt = (0,
            M.useMemo)(function() {
                return !t9 && !t8 && t7
            }, [t8, t7, t9])
              , nn = aT()
              , nr = (0,
            S.XK)(Q)
              , ni = E(function(e) {
                return e.sharingModalThreadId === nr
            })
              , no = (0,
            S.r7)(Q);
            return (0,
            w.jsxs)(w.Fragment, {
                children: [(0,
                w.jsxs)(lZ(), {
                    children: [(0,
                    w.jsx)("title", {
                        children: tp
                    }), eu && (0,
                    w.jsxs)(w.Fragment, {
                        children: [(0,
                        w.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }), (0,
                        w.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }, "robots"), (0,
                        w.jsx)("meta", {
                            property: "og:title",
                            content: null != tp ? tp : "Shared Conversation on ChatGPT"
                        }, "og:title"), (0,
                        w.jsx)("meta", {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png"
                        }, "og:image")]
                    })]
                }), (0,
                w.jsx)(lG, {}), !tr && (0,
                w.jsx)(e_.ZP, {
                    isOpen: !0,
                    onModalClose: t4,
                    icon: lP.Z,
                    title: eh.formatMessage(ua.doNotShareSensitive),
                    primaryButton: (0,
                    w.jsx)(e_.mH, {
                        onClick: t4,
                        title: eh.formatMessage(ua.acknowledge)
                    }),
                    type: "danger"
                }, "OnboardingModal"), te && e8 && (0,
                w.jsx)(e_.ZP, {
                    isOpen: !0,
                    onModalClose: t6,
                    icon: X.U0j,
                    title: eh.formatMessage(ua.contentPolicyViolation),
                    primaryButton: (0,
                    w.jsx)(e_.mH, {
                        onClick: t6,
                        title: eh.formatMessage(ua.acknowledge)
                    }),
                    type: "danger"
                }, "RestrictedTerms"), ni && null != nr && (0,
                w.jsx)(oN, {
                    serverThreadId: nr,
                    activeRequests: eo,
                    currentThreadModel: G.lastModelUsed
                }), null != eQ && (0,
                w.jsx)(lU, {
                    ratingModalNodeId: eY,
                    ratingModalOpen: eQ,
                    onCloseRatingModal: function() {
                        return e$(void 0)
                    },
                    handleSubmitFeedback: tq,
                    onHandleChangeFeedbackComparisonRating: tz,
                    currentModelId: td,
                    feedbackTextareaRef: e2,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: tE,
                    onRequestMoreCompletions: tA,
                    onUpdateNode: tB,
                    onChangeRating: tO,
                    onDeleteNode: tW,
                    onRequestCompletion: tM,
                    onSandboxLinkClick: tF
                }), eD && (0,
                w.jsx)(lU, {
                    ratingModalNodeId: eU,
                    ratingModalOpen: "report",
                    onCloseRatingModal: function() {
                        return eF(!1)
                    },
                    handleSubmitFeedback: tU,
                    onHandleChangeFeedbackComparisonRating: function() {},
                    currentModelId: td,
                    feedbackTextareaRef: e2,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: tE,
                    onRequestMoreCompletions: tA,
                    onUpdateNode: tB,
                    onChangeRating: tO,
                    onDeleteNode: tW,
                    onRequestCompletion: tM,
                    onSandboxLinkClick: tF
                }), eB && (0,
                w.jsx)(e_.ZP, {
                    onModalClose: function() {
                        return eO(!1)
                    },
                    isOpen: !0,
                    icon: lP.Z,
                    title: eh.formatMessage(ua.reportModalThankYouTitle),
                    description: eh.formatMessage(ua.reportModalThankYouDescription),
                    primaryButton: (0,
                    w.jsx)(e_.mH, {
                        onClick: function() {
                            return eO(!1)
                        },
                        title: eh.formatMessage(ua.reportModalThankYouDismiss)
                    }),
                    type: "danger"
                }), eV && (0,
                w.jsx)(lU, {
                    ratingModalNodeId: eZ,
                    ratingModalOpen: "moderate",
                    onCloseRatingModal: function() {
                        return eW(!1)
                    },
                    handleSubmitFeedback: Y(),
                    onHandleChangeFeedbackComparisonRating: function() {},
                    currentModelId: td,
                    feedbackTextareaRef: e2,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: tE,
                    onRequestMoreCompletions: tA,
                    onUpdateNode: tB,
                    onChangeRating: tO,
                    onDeleteNode: tW,
                    onRequestCompletion: tM,
                    onSandboxLinkClick: tF
                }), (0,
                w.jsxs)("div", {
                    className: "flex h-full max-w-full flex-1 flex-col",
                    children: [!ek && !eu && (0,
                    w.jsx)(lT.Z, {
                        children: (0,
                        w.jsx)(l_, {
                            clientThreadId: Q,
                            onNewThread: el,
                            onClickOpenSidebar: tG,
                            title: null !== (W = S.tQ.getTitle(Q)) && void 0 !== W ? W : "New chat"
                        })
                    }), (0,
                    w.jsxs)(us, {
                        className: "flex-1",
                        children: [(0,
                        w.jsx)(l3, {
                            isStaticSharedThread: eu,
                            handleResetThread: el,
                            activeSidebar: K,
                            toggleDebugSidebar: tQ
                        }), (0,
                        w.jsx)(ul, {
                            children: !eS && (t5 || t3) && (Z = (0,
                            w.jsx)(og, {
                                onChangeItemInView: tE,
                                onRequestMoreCompletions: tA,
                                onUpdateNode: tB,
                                onChangeRating: tO,
                                onDeleteNode: tW,
                                onRequestCompletion: tM,
                                onSandboxLinkClick: tF,
                                onHandleChangeVariantFeedbackInlineComparisonRating: tH,
                                isNewThread: t5,
                                clientThreadId: Q,
                                isStaticSharedThread: eu,
                                activeRequests: eo,
                                currentThreadModel: G.lastModelUsed,
                                initiallyHighlightedMessageId: ec,
                                inlineEmbeddedDisplay: !1,
                                promptTextareaRef: ne
                            }, Q),
                            eu ? (0,
                            w.jsx)("div", {
                                className: "h-full overflow-auto dark:bg-gray-800",
                                children: Z
                            }) : (0,
                            w.jsx)(ue, {
                                children: Z
                            }))
                        }), (0,
                        w.jsxs)(uu, {
                            children: [ex.has("model_preview") && t5 && (null == th ? void 0 : th.tags.includes(rd.S.GPT_4)) && (0,
                            w.jsx)("div", {
                                className: "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                                children: nn.textareaDisclaimer
                            }), !tZ && !eu && (0,
                            w.jsx)(lT.Z, {
                                children: (0,
                                w.jsx)(ae, {
                                    clientThreadId: Q,
                                    onRequestMoreCompletions: tV,
                                    onCreateNewCompletion: tN,
                                    onAbortCompletion: t0,
                                    onContinueGenerating: tR,
                                    onFileUpload: tD,
                                    modelBackend: td,
                                    canUpload: tL,
                                    isCompletionInProgress: eo.has(t2),
                                    className: (0,
                                    q.Z)("stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto", e4 ? "max-w-[44rem]" : "lg:max-w-2xl xl:max-w-3xl"),
                                    shouldRetry: tP,
                                    canContinue: nt,
                                    suggestions: void 0 !== tx && (null == tx ? void 0 : tx.messageId) === (null === (z = S.tQ.getTree(Q).getLastValidNode(eZ)) || void 0 === z ? void 0 : null === (H = z.message) || void 0 === H ? void 0 : H.id) ? null == tx ? void 0 : tx.suggestions : void 0,
                                    disabled: !tl.size,
                                    canPause: t9,
                                    isInteractableSharedThread: no,
                                    ref: ne
                                }, Q)
                            }), eu && (0,
                            w.jsx)(w.Fragment, {
                                children: (0,
                                w.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                                    children: [(0,
                                    w.jsx)(ed.z, {
                                        as: "link",
                                        to: ef,
                                        children: eh.formatMessage(ua.sharedConversationContinueConversation)
                                    }), eN && (0,
                                    w.jsx)(ed.z, {
                                        onClick: function() {
                                            eW(!0)
                                        },
                                        children: eh.formatMessage(ua.sharedConversationModerateConversation)
                                    })]
                                })
                            }), (0,
                            w.jsx)("div", {
                                className: "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                                children: eu ? (0,
                                w.jsx)(ui, {
                                    onClickReportSharedConversation: function() {
                                        ez(eZ),
                                        eF(!0)
                                    }
                                }) : e3 ? (0,
                                w.jsx)("span", {
                                    children: (0,
                                    w.jsx)(et.Z, (0,
                                    ep._)((0,
                                    b._)({}, ua.mayProduceInaccurateInformation), {
                                        values: {
                                            bili: function(e) {
                                                return (0,
                                                w.jsx)("a", {
                                                    href: "https://shopee.com.my/softwaredigital.os",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            },
                                            pandora: function(e) {
                                                return (0,
                                                w.jsx)("a", {
                                                    href: "https://github.com/pengzhile/pandora",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                }) : (0,
                                w.jsx)("span", {
                                    children: (0,
                                    w.jsx)(et.Z, (0,
                                    ep._)((0,
                                    b._)({}, ua.freeResearchPreview), {
                                        values: {
                                            bili: function(e) {
                                                return (0,
                                                w.jsx)("a", {
                                                    href: "https://shopee.com.my/softwaredigital.os",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            },
                                            pandora: function(e) {
                                                return (0,
                                                w.jsx)("a", {
                                                    href: "https://github.com/pengzhile/pandora",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                })
                            })]
                        })]
                    })]
                }), ex.has("debug") && "debug" === K && (0,
                w.jsx)(sZ, {
                    clientThreadId: Q,
                    currentLeafId: eZ,
                    isOpen: "debug" === K,
                    slideOver: !ek,
                    onClose: tQ
                }), ex.has("tools3_dev") && (0,
                w.jsx)(sB, {
                    slideOver: !ek
                }), e5 && (0,
                w.jsx)(l0.Z, {
                    isOpen: tY,
                    onClose: tK
                }), void 0 !== e3 && e3 && (0,
                w.jsx)(lK, {
                    isOpen: $,
                    onClose: t$
                }), to && (0,
                w.jsx)(e_.ZP, {
                    onModalClose: Y(),
                    isOpen: !0,
                    icon: lP.Z,
                    title: eh.formatMessage(ua.somethingWentWrong),
                    description: eh.formatMessage(ua.tryAgainLater),
                    primaryButton: (0,
                    w.jsx)(e_.mH, {
                        onClick: function() {
                            el(),
                            ts(!1)
                        },
                        title: eh.formatMessage(ua.resetThread)
                    }),
                    type: "danger"
                }, "UnrecoverableErrorModal")]
            })
        }
          , us = T.Z.main(ut())
          , ul = T.Z.div(un())
          , uu = T.Z.div(ur());
        function uc() {
            var e = (0,
            k._)(["overflow-hidden w-full h-full relative flex z-0"]);
            return uc = function() {
                return e
            }
            ,
            e
        }
        var ud = T.Z.div(uc())
          , uf = (u = function(e) {
            var t = e.clientThreadId
              , n = e.setClientThreadId
              , r = e.isStaticSharedThread
              , a = (0,
            y._)(e, ["clientThreadId", "setClientThreadId", "isStaticSharedThread"])
              , i = (0,
            S.UL)(t)
              , o = a.setShowAccountPortalModal
              , s = a.activeSidebar
              , l = a.setActiveSidebar
              , u = a.setActiveRequests
              , c = (0,
            S.XK)(t)
              , d = (0,
            _.useRouter)()
              , f = (0,
            N.WS)()
              , h = (0,
            P.nR)()
              , g = (0,
            M.useContext)(O.QL).historyDisabled
              , m = (0,
            rd.Xy)(i.lastModelUsed, t)
              , p = (0,
            C.NL)();
            (0,
            M.useEffect)(function() {
                return S.tQ.retainThread(t),
                function() {
                    setTimeout(function() {
                        p.invalidateQueries(["conversation", t])
                    }, 0),
                    S.tQ.releaseThread(t)
                }
            }, [t, p]),
            (0,
            M.useEffect)(function() {
                B.closeSharingModal()
            }, [t, c]);
            var v = (0,
            M.useCallback)(function() {
                l(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [l])
              , x = (0,
            M.useCallback)(function() {
                f(I.s6.clickSidebarAccountPortalMenuItem),
                o(!0)
            }, [f, o])
              , j = lI(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }).setShowAccountPaymentModal
              , k = (0,
            M.useCallback)(function() {
                j(!0, function() {
                    f(I.s6.clickSidebarAccountPaymentMenuItem)
                })
            }, [f, j])
              , T = (0,
            M.useCallback)(function() {
                n((0,
                S.OX)()),
                m.tags.includes(rd.S.GPT_4) ? d.replace("/", void 0, {
                    shallow: !0
                }) : d.replace("/?model=".concat(m.id))
            }, [n, m.tags, m.id, d]);
            return (0,
            M.useEffect)(function() {
                return function() {
                    L.abortAllAndReset(),
                    u(new Set)
                }
            }, [u, t]),
            (0,
            w.jsxs)(ud, {
                children: [!r && (0,
                w.jsx)(lT.Z, {
                    children: (0,
                    w.jsx)(lM, {
                        toggleNavigationSidebar: v,
                        handleAccountPayment: k,
                        handleClickCustomerPortal: x,
                        handleResetThread: T,
                        activeSidebar: s,
                        isAccountPaid: h,
                        children: (0,
                        w.jsx)(o6, {
                            activeId: g ? void 0 : c,
                            onNewThread: T,
                            setActiveRequests: u
                        })
                    })
                }), (0,
                w.jsx)("div", {
                    className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                    children: (0,
                    w.jsx)(uo, (0,
                    b._)({
                        initialThreadData: i,
                        clientThreadId: t,
                        handleResetThread: T,
                        isStaticSharedThread: r
                    }, a), t)
                })]
            })
        }
        ,
        function(e) {
            var t = e.clientThreadId
              , n = e.isStaticSharedThread;
            (0,
            S.ax)(t, n);
            var r = (0,
            S.UL)(t)
              , a = (0,
            j._)((0,
            M.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            j._)((0,
            M.useState)(!1), 2)
              , l = s[0]
              , c = s[1]
              , d = (0,
            j._)((0,
            M.useState)(new Set), 2)
              , f = d[0]
              , h = d[1];
            return (0,
            M.useEffect)(function() {
                c(!1),
                L.reset(),
                h(new Set)
            }, [r.threadId]),
            (0,
            w.jsx)(u, (0,
            b._)({}, e, {
                showAccountPortalModal: i,
                setShowAccountPortalModal: o,
                activeSidebar: l,
                setActiveSidebar: c,
                activeRequests: f,
                setActiveRequests: h
            }))
        }
        )
    },
    5759: function(e, t, n) {
        "use strict";
        n.d(t, {
            I: function() {
                return g
            },
            Z: function() {
                return c
            }
        });
        var r = n(4337)
          , a = n(35250)
          , i = n(34303);
        function o() {
            var e = (0,
            r._)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
            return o = function() {
                return e
            }
            ,
            e
        }
        function s() {
            var e = (0,
            r._)(["w-10 text-2xl text-center"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        function l() {
            var e = (0,
            r._)(["flex-1 leading-5"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function u() {
            var e = (0,
            r._)(["flex gap-4 flex-col text-sm"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function c(e) {
            var t = e.icon
              , n = e.children;
            return (0,
            a.jsxs)(d, {
                children: [(0,
                a.jsx)(f, {
                    children: t
                }), (0,
                a.jsx)(h, {
                    children: n
                })]
            })
        }
        var d = i.Z.div(o())
          , f = i.Z.div(s())
          , h = i.Z.div(l())
          , g = i.Z.div(u())
    },
    5046: function(e, t, n) {
        "use strict";
        n.d(t, {
            BT: function() {
                return c
            },
            R9: function() {
                return o
            },
            Y8: function() {
                return d
            },
            kc: function() {
                return l
            },
            m0: function() {
                return u
            },
            uU: function() {
                return s
            }
        });
        var r = n(81949)
          , a = n(81292)
          , i = n(51132)
          , o = "gpt-4"
          , s = "model_cap_exceeded"
          , l = (0,
        a.ZP)(function() {
            return {
                serverThreadIds: new Set
            }
        });
        function u(e) {
            l.setState(function(t) {
                return {
                    serverThreadIds: new Set((0,
                    r._)(t.serverThreadIds).concat([e]))
                }
            })
        }
        function c() {
            var e = d(function(e) {
                return e.isoDate
            })
              , t = d(function(e) {
                return e.clearCapTimeout
            })
              , n = Date.now()
              , r = e && new Date(e).getTime();
            return e && r && r <= n ? (t(),
            null) : e ? o : null
        }
        var d = (0,
        a.ZP)()((0,
        i.tJ)(function(e) {
            return {
                isoDate: "",
                setCapTimeout: function(t) {
                    e(function() {
                        return {
                            isoDate: t
                        }
                    })
                },
                clearCapTimeout: function() {
                    e(function() {
                        return {
                            isoDate: ""
                        }
                    })
                }
            }
        }, {
            name: "oai/apps/capExpiresAt"
        }))
    },
    90076: function(e, t, n) {
        "use strict";
        n.d(t, {
            B8: function() {
                return Z
            },
            B9: function() {
                return T
            },
            Bv: function() {
                return P
            },
            Gg: function() {
                return N
            },
            H6: function() {
                return A
            },
            OX: function() {
                return _
            },
            S: function() {
                return a
            },
            Xy: function() {
                return S
            },
            ZL: function() {
                return C
            },
            fm: function() {
                return I
            },
            iu: function() {
                return M
            },
            n2: function() {
                return k
            }
        });
        var r, a, i = n(21722), o = n(39324), s = n(71209), l = n(81949), u = n(39889), c = n(24396), d = n(68555), f = n(70079), h = n(32787), g = n(24274), m = n(64135), p = n(75527), v = n(21437), x = n(32983), b = n(5046), y = "text-davinci-002-render";
        (r = a || (a = {})).GPT_3_5 = "gpt3.5",
        r.GPT_4 = "gpt4",
        r.MOBILE = "mobile";
        var j = A({
            slug: y,
            max_tokens: 4097,
            title: "Default",
            description: "",
            tags: [a.GPT_3_5]
        })
          , k = new Set(["text-davinci-002-render-paid"]);
        function w(e) {
            var t = (0,
            f.useContext)(x.QL).historyDisabled
              , n = (0,
            h.kP)()
              , r = n.session
              , a = n.loading
              , o = null == r ? void 0 : r.accessToken;
            return (0,
            c.a)({
                queryKey: ["models", {
                    isHistoryDisabled: !t
                }],
                queryFn: (0,
                i._)(function() {
                    return (0,
                    u.Jh)(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, g.ZP.getModels(o, t)];
                        case 1:
                            return [2, e.sent()]
                        }
                    })
                }),
                enabled: !a && null != o,
                select: e
            })
        }
        function C() {
            return w().isLoading
        }
        function _() {
            var e = w(function(e) {
                return e.categories
            }).data;
            return null != e ? e : []
        }
        function M() {
            var e = w(function(e) {
                return e.models
            }).data;
            return (0,
            f.useMemo)(function() {
                return new Set(e ? e.map(function(e) {
                    return e.slug
                }) : [y])
            }, [e])
        }
        function T() {
            var e = w(function(e) {
                return e.models
            }).data;
            return (0,
            f.useMemo)(function() {
                return new Map(e ? e.map(function(e) {
                    return [e.slug, A(e)]
                }) : [[y, j]])
            }, [e])
        }
        function N(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = function(e) {
                var t, n, r = o.get(e);
                return null !== (n = null == r ? void 0 : null === (t = r.tags) || void 0 === t ? void 0 : t.includes(a.GPT_3_5)) && void 0 !== n && n
            }
              , r = (0,
            m.hz)()
              , i = (0,
            l._)(e)
              , o = T();
            if (!t && r.has("priority_driven_models_list"))
                return i[0];
            var s = (0,
            l._)(i).find(function(e) {
                return n(e)
            });
            return null != s ? s : i[0]
        }
        function I() {
            var e = (0,
            d.useRouter)()
              , t = e.query;
            return (0,
            f.useCallback)(function(n) {
                e.replace({
                    pathname: e.basePath,
                    query: (0,
                    s._)((0,
                    o._)({}, t), {
                        model: encodeURIComponent(n)
                    })
                }, void 0, {
                    shallow: !0
                })
            }, [t, e])
        }
        function P(e, t) {
            var n, r = decodeURIComponent(null !== (n = (0,
            d.useRouter)().query.model) && void 0 !== n ? n : ""), a = (0,
            p.XK)(t), i = Z().enabledModelsById, o = (0,
            v.Fl)().isBetaFeaturesUiEnabled, s = (0,
            b.kc)().serverThreadIds, l = M(), u = o ? i : l, c = N(u);
            return (0,
            f.useMemo)(function() {
                if (0 !== u.size) {
                    var t = void 0 !== a && s.has(a);
                    return !t && null != e && l.has(e) ? null != e ? e : void 0 : !t && r && u.has(r) ? null != r ? r : void 0 : null != c ? c : void 0
                }
            }, [l, c, e, r, u, a, s])
        }
        function S(e, t) {
            var n = P(e, t)
              , r = T();
            return (0,
            f.useMemo)(function() {
                var e;
                return null == n ? j : null !== (e = r.get(n)) && void 0 !== e ? e : j
            }, [n, r])
        }
        function Z() {
            var e = _()
              , t = M()
              , n = T()
              , r = (0,
            v.Fl)();
            return (0,
            f.useMemo)(function() {
                var i, o = e.reduce(function(e, a) {
                    var i, o, s, l, u, c, d = e.enabledModelsInCategoriesById, f = e.availableModelsInCategoriesById, h = t.has(a.default_model) ? a.default_model : null;
                    null != h && (f.add(h),
                    d.add(h));
                    var g = t.has(null !== (i = a.browsing_model) && void 0 !== i ? i : "") ? n.get(null !== (o = a.browsing_model) && void 0 !== o ? o : "") : null;
                    g && (f.add(g.id),
                    r.isBrowsingEnabled && d.add(g.id));
                    var m = t.has(null !== (s = a.code_interpreter_model) && void 0 !== s ? s : "") ? n.get(null !== (l = a.code_interpreter_model) && void 0 !== l ? l : "") : null;
                    m && (f.add(m.id),
                    r.isCodeInterpreterEnabled && d.add(m.id));
                    var p = t.has(null !== (u = a.plugins_model) && void 0 !== u ? u : "") ? n.get(null !== (c = a.plugins_model) && void 0 !== c ? c : "") : null;
                    return p && (f.add(p.id),
                    r.isPluginsEnabled && d.add(p.id)),
                    e
                }, {
                    enabledModelsInCategoriesById: new Set,
                    availableModelsInCategoriesById: new Set
                }), s = o.enabledModelsInCategoriesById, u = o.availableModelsInCategoriesById, c = new Set(Array.from(t).filter(function(e) {
                    return !u.has(e)
                })), d = new Set(Array.from(c).filter(function(e) {
                    var t;
                    return !(null === (t = n.get(e)) || void 0 === t ? void 0 : !1)
                }));
                return {
                    enabledModelsInCategoriesById: s,
                    availableModelsInCategoriesById: u,
                    enabledModelsNotInCategoriesById: d,
                    enabledModelsById: new Set((0,
                    l._)(s).concat((0,
                    l._)(d)))
                }
            }, [e, t, r, n])
        }
        function A(e) {
            return {
                id: e.slug,
                maxTokens: e.max_tokens,
                title: e.title,
                description: e.description,
                tags: e.tags,
                enabledTools: e.enabled_tools,
                properties: e.qualitative_properties
            }
        }
    },
    75527: function(e, t, n) {
        "use strict";
        n.d(t, {
            tQ: function() {
                return S
            },
            iN: function() {
                return P
            },
            _L: function() {
                return a
            },
            OX: function() {
                return C
            },
            Zz: function() {
                return _
            },
            ax: function() {
                return Z
            },
            r7: function() {
                return J
            },
            XK: function() {
                return A
            },
            je: function() {
                return V
            },
            Uy: function() {
                return H
            },
            GD: function() {
                return O
            },
            U0: function() {
                return B
            },
            oq: function() {
                return F
            },
            Hk: function() {
                return q
            },
            UL: function() {
                return R
            },
            Kt: function() {
                return D
            },
            Ro: function() {
                return E
            },
            GR: function() {
                return L
            },
            qA: function() {
                return U
            },
            XL: function() {
                return z
            },
            u9: function() {
                return $
            },
            nh: function() {
                return W
            },
            lA: function() {
                return G
            },
            dz: function() {
                return Q
            },
            qN: function() {
                return T
            }
        });
        var r, a, i = n(39324), o = n(71209), s = n(24396), l = n(61888), u = n(68555), c = n(70079), d = n(81292), f = n(58392), h = n(32787), g = n(70216);
        n(59710);
        var m = n(57311)
          , p = n(75179);
        n(44675).env.INTERNAL_API_URL;
        var v = n(69403)
          , x = n(97688)
          , b = n(90076)
          , y = n(24274)
          , j = n(32983)
          , k = "NEW:"
          , w = 0;
        function C() {
            return "".concat(k).concat(w++)
        }
        function _(e) {
            return e.startsWith(k)
        }
        (r = a || (a = {})).NewChat = "NewChat",
        r.Server = "Server",
        r.User = "User",
        r.Generated = "Generated",
        r.Unknown = "Unknown";
        var M = {}
          , T = (0,
        d.ZP)((0,
        f.n)(function() {
            return {
                threads: {},
                clientNewThreadIdToServerIdMapping: {},
                threadRetainCounts: {}
            }
        }))
          , N = T.getState
          , I = T.setState
          , P = {
            resolveThreadId: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N();
                return null !== (t = n.clientNewThreadIdToServerIdMapping[e]) && void 0 !== t ? t : e
            },
            getThreadCustomTitle: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N(), a = P.resolveThreadId(e, r);
                return null !== (n = null === (t = r.threads[a]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : void 0
            },
            getThreadDataTitle: function(e) {
                var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N(), i = P.resolveThreadId(e, a);
                return null !== (r = null === (t = a.threads[i]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.title) && void 0 !== r ? r : void 0
            },
            getThreadTitleSource: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N()
                  , n = P.resolveThreadId(e, t);
                return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown
            },
            getThreadCreateTime: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N(), a = P.resolveThreadId(e, r);
                return null === (t = r.threads[a]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.createTime
            }
        }
          , S = {
            getOrInitThread: function(e) {
                var t = S.resolveThreadId(e);
                return null != N().threads[t] ? N().threads[t] : (S.resetThread(e),
                N().threads[e])
            },
            getServerThreadId: function(e) {
                return _(e) ? N().clientNewThreadIdToServerIdMapping[e] : e
            },
            setServerIdForNewThread: function(e, t) {
                void 0 === N().clientNewThreadIdToServerIdMapping[e] && I(function(n) {
                    n.threads[t] = n.threads[e],
                    delete n.threads[e],
                    n.clientNewThreadIdToServerIdMapping[e] = t
                })
            },
            initThreadFromServerData: function(e, t) {
                var n, r, s, l, u, c, d, f, h, v, x = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], y = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0, j = S.resolveThreadId(e);
                if (null != N().threads[j] || x) {
                    var k = (r = null === (n = Object.values(t.mapping).find(function(e) {
                        return null === e.parent
                    })) || void 0 === n ? void 0 : n.id,
                    s = new Set,
                    l = new Set,
                    (t.moderation_results || []).forEach(function(e) {
                        e.blocked ? l.add(e.message_id) : e.flagged && s.add(e.message_id)
                    }),
                    {
                        rootId: r,
                        mapping: Object.keys(t.mapping).reduce(function(e, n) {
                            var r, a = t.mapping[n], u = a.parent, c = a.children, d = (0,
                            g._)(a, ["parent", "children"]), f = t.mapping[n].message || m.Cv.createRootMessage();
                            return l.has(f.id) ? r = p.sK : s.has(f.id) && (r = p.Mf),
                            e[n] = (0,
                            i._)((0,
                            o._)((0,
                            i._)({}, d), {
                                message: f,
                                children: c || [],
                                parentId: u || "",
                                type: m.uV[f.author.role]
                            }), r && {
                                metadata: r
                            }),
                            e
                        }, {}),
                        initialCurrentLeafId: t.current_node,
                        authorName: t.author_name
                    });
                    if ((null === (u = N().threads[j]) || void 0 === u ? void 0 : u.isLoading) !== !1) {
                        var w = null !== (c = k.mapping) && void 0 !== c ? c : m.Cv.createTree()
                          , C = {
                            thread: w,
                            initialCurrentLeafId: null !== (f = null !== (d = k.initialCurrentLeafId) && void 0 !== d ? d : k.rootId) && void 0 !== f ? f : "root",
                            threadId: j,
                            title: null !== (h = t.title) && void 0 !== h ? h : null,
                            lastModelUsed: function e(t, n) {
                                var r, a, i = t[n];
                                return (null == i ? void 0 : null === (r = i.message) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.model_slug) ? i.message.metadata.model_slug : (null == i ? void 0 : i.parentId) ? e(t, i.parentId) : null
                            }(k.mapping, k.initialCurrentLeafId),
                            pluginIds: null !== (v = t.plugin_ids) && void 0 !== v ? v : [],
                            authorName: k.authorName,
                            model: "model"in t && null != t.model ? (0,
                            b.H6)(t.model) : void 0,
                            createTime: "create_time"in t ? new Date(1e3 * t.create_time) : void 0
                        }
                          , _ = new m.Cv(w)
                          , M = C.initialCurrentLeafId;
                        I(function(e) {
                            var t;
                            e.threads[j] = (0,
                            o._)((0,
                            i._)({}, null !== (t = e.threads[j]) && void 0 !== t ? t : {}), {
                                initialThreadData: C,
                                title: C.title,
                                titleSource: a.Server,
                                tree: _,
                                currentLeafId: M,
                                isLoading: !1,
                                continuingFromSharedConversationId: y
                            })
                        }),
                        S.recomputeConversationTurns(j, N().threads[j].currentLeafId, [])
                    }
                }
            },
            resetThread: function(e) {
                var t = {
                    thread: m.Cv.createTree(),
                    initialCurrentLeafId: "root",
                    threadId: null,
                    title: null,
                    lastModelUsed: null,
                    pluginIds: [],
                    authorName: void 0
                };
                S.deleteThread(e),
                I(function(n) {
                    n.threads[e] = {
                        initialThreadData: t,
                        tree: new m.Cv(t.thread),
                        title: t.title,
                        titleSource: a.NewChat,
                        currentLeafId: t.initialCurrentLeafId,
                        conversationTurns: [],
                        isLoading: !_(e)
                    }
                })
            },
            updateInitialThreadDataForNewThread: function(e, t, n) {
                I(function(r) {
                    r.threads[e].initialThreadData.lastModelUsed = t,
                    r.threads[e].initialThreadData.pluginIds = n
                })
            },
            getThreadCurrentLeafId: function(e) {
                var t, n, r = S.resolveThreadId(e);
                return null !== (n = null === (t = N().threads[r]) || void 0 === t ? void 0 : t.currentLeafId) && void 0 !== n ? n : "root"
            },
            setThreadCurrentLeafId: function(e, t) {
                var n, r, a = S.resolveThreadId(e);
                if (null != N().threads[a]) {
                    I(function(e) {
                        e.threads[a].currentLeafId = t
                    });
                    var i = N();
                    S.recomputeConversationTurns(a, t, null !== (r = null === (n = i.threads[a]) || void 0 === n ? void 0 : n.conversationTurns) && void 0 !== r ? r : [])
                }
            },
            setTitle: function(e, t, n) {
                var r = S.resolveThreadId(e);
                null != N().threads[r] && I(function(e) {
                    e.threads[r].title = t,
                    e.threads[r].titleSource = n
                })
            },
            getTitle: function(e) {
                var t;
                return null !== (t = P.getThreadCustomTitle(e)) && void 0 !== t ? t : P.getThreadDataTitle(e)
            },
            getTitleAndSource: function(e) {
                var t;
                return {
                    title: null !== (t = P.getThreadCustomTitle(e)) && void 0 !== t ? t : P.getThreadDataTitle(e),
                    titleSource: P.getThreadTitleSource(e)
                }
            },
            updateTree: function(e, t) {
                var n, r, a, i, o = S.resolveThreadId(e);
                if (!(null != N().threads[o])) {
                    console.warn("Thread does not exist, cannot update tree: ", o);
                    return
                }
                t(S.getTree(e));
                var s = N()
                  , l = null !== (a = null === (n = s.threads[o]) || void 0 === n ? void 0 : n.currentLeafId) && void 0 !== a ? a : "root"
                  , u = null !== (i = null === (r = s.threads[o]) || void 0 === r ? void 0 : r.conversationTurns) && void 0 !== i ? i : [];
                S.recomputeConversationTurns(o, l, u)
            },
            getTree: function(e) {
                var t, n, r = S.resolveThreadId(e);
                return null !== (n = null === (t = N().threads[r]) || void 0 === t ? void 0 : t.tree) && void 0 !== n ? n : new m.Cv
            },
            resolveThreadId: function(e) {
                return P.resolveThreadId(e)
            },
            recomputeConversationTurns: function(e, t, n) {
                var r = S.resolveThreadId(e);
                I(function(e) {
                    e.threads[r] && (e.threads[r].conversationTurns = S.computeThreadConversationTurns(r, t, n))
                })
            },
            computeThreadConversationTurns: function(e, t, n) {
                var r = S.resolveThreadId(e);
                return S.getTree(r).getConversationTurns(t).map(function(e, t) {
                    var r = null == n ? void 0 : n[t];
                    return (0,
                    l.isEqual)(r, e) ? r : e
                })
            },
            getThreadConversationTurns: function(e, t, n) {
                var r, a, i, o, s = S.resolveThreadId(e), l = null !== (i = null === (r = N().threads[s]) || void 0 === r ? void 0 : r.currentLeafId) && void 0 !== i ? i : "root";
                return null != t && t !== l ? S.computeThreadConversationTurns(s, t, null != n ? n : []) : null !== (o = null === (a = N().threads[s]) || void 0 === a ? void 0 : a.conversationTurns) && void 0 !== o ? o : []
            },
            getThreadModel: function(e) {
                var t, n = S.resolveThreadId(e);
                return null === (t = N().threads[n]) || void 0 === t ? void 0 : t.initialThreadData.model
            },
            removeContinuingFromSharedConversationId: function(e) {
                var t = S.resolveThreadId(e);
                I(function(e) {
                    var n;
                    (null === (n = e.threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId) != null && delete e.threads[t].continuingFromSharedConversationId
                })
            },
            deleteThread: function(e) {
                I(function(t) {
                    delete t.threads[e],
                    delete t.clientNewThreadIdToServerIdMapping[e]
                })
            },
            retainThread: function(e) {
                I(function(t) {
                    var n;
                    t.threadRetainCounts[e] = (null !== (n = t.threadRetainCounts[e]) && void 0 !== n ? n : 0) + 1
                }),
                clearTimeout(M[e])
            },
            releaseThread: function(e) {
                null != N().threads[e] && (I(function(t) {
                    var n;
                    t.threadRetainCounts[e] = Math.max((null !== (n = t.threadRetainCounts[e]) && void 0 !== n ? n : 0) - 1, 0)
                }),
                N().threadRetainCounts[e] > 0 || (clearTimeout(M[e]),
                M[e] = setTimeout(function() {
                    null == N().threads[e] || N().threadRetainCounts[e] > 0 || S.deleteThread(e)
                }, 3e4)))
            }
        }
          , Z = function(e, t) {
            var n = (0,
            u.useRouter)()
              , r = (0,
            h.kP)().session
              , a = (0,
            c.useContext)(j.QL).historyDisabled;
            (0,
            s.a)(["conversation", e], function() {
                return y.ZP.getConversation(e, null == r ? void 0 : r.accessToken)
            }, {
                enabled: !_(e) && (null == r ? void 0 : r.accessToken) !== void 0 && !a && !t,
                onError: function() {
                    n.replace("/"),
                    x.m.danger("Unable to load conversation ".concat(e))
                },
                onSuccess: function(t) {
                    t && S.initThreadFromServerData(e, t)
                }
            }),
            (0,
            c.useEffect)(function() {
                S.getOrInitThread(e)
            }, [e, n])
        }
          , A = function(e) {
            return T(function(t) {
                return _(e) ? t.clientNewThreadIdToServerIdMapping[e] : e
            })
        }
          , R = function(e) {
            return T(function(t) {
                var n, r, a = S.resolveThreadId(e);
                return null !== (r = null === (n = t.threads[a]) || void 0 === n ? void 0 : n.initialThreadData) && void 0 !== r ? r : Object.freeze({
                    thread: m.Cv.createTree(),
                    threadId: null,
                    initialCurrentLeafId: "root",
                    title: null,
                    lastModelUsed: null
                })
            })
        }
          , D = function(e) {
            return T(function(t) {
                var n, r, a = S.resolveThreadId(e);
                return null !== (r = null === (n = t.threads[a]) || void 0 === n ? void 0 : n.isLoading) && void 0 !== r && r
            })
        }
          , L = function(e) {
            var t = T(function(t) {
                var n, r, a = S.resolveThreadId(e);
                return null === (n = t.threads[a]) || void 0 === n ? void 0 : null === (r = n.initialThreadData) || void 0 === r ? void 0 : r.pluginIds
            });
            return (0,
            c.useMemo)(function() {
                return new Set(null != t ? t : [])
            }, [t])
        }
          , F = function(e) {
            return T(function() {
                return S.getThreadCurrentLeafId(e)
            })
        }
          , E = function(e) {
            return T(function() {
                return S.getThreadModel(e)
            })
        }
          , B = function(e, t) {
            var n = (0,
            c.useRef)([]);
            return T(function() {
                var r, a = S.getThreadConversationTurns(e, t, n.current);
                return n.current = a,
                null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0
            })
        }
          , O = function(e, t, n) {
            var r = (0,
            c.useRef)([]);
            return T(function() {
                var a = S.getThreadConversationTurns(e, n, r.current);
                return r.current = a,
                a[t]
            })
        }
          , q = function(e) {
            var t = F(e);
            return (0,
            c.useMemo)(function() {
                var n, r, a = S.getThreadConversationTurns(e, t, []), i = null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0, o = null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r ? r : null;
                return 0 === i ? t : m.Cv.getRequestIdFromConversationTurn(o)
            }, [t, e])
        }
          , U = function(e) {
            return T(function() {
                return S.getTitle(e)
            })
        }
          , z = function(e) {
            return T(function() {
                return S.getTitleAndSource(e)
            })
        }
          , H = function(e) {
            return T(function() {
                var t, n = S.resolveThreadId(e);
                return null === (t = N().threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId
            })
        }
          , V = function(e) {
            return T(function() {
                var t, n, r = S.resolveThreadId(e);
                return null === (t = N().threads[r]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.authorName
            })
        }
          , W = function(e, t) {
            return T(function() {
                return S.getTree(e).getNode(t)
            })
        }
          , G = function(e, t) {
            return T(function() {
                var n, r;
                return null !== (r = null === (n = S.getTree(e)) || void 0 === n ? void 0 : n.getHasErrorFromNode(t)) && void 0 !== r && r
            })
        }
          , Q = function(e, t) {
            return T(function() {
                var n, r;
                return null !== (r = null === (n = S.getTree(e)) || void 0 === n ? void 0 : n.isMessageIncomplete(t)) && void 0 !== r && r
            })
        }
          , $ = function(e, t) {
            return T(function() {
                var n = S.getTree(e);
                return null == n ? [] : n.getBranchFromLeaf(t).filter(function(e) {
                    return e.type !== v.Jq.Root
                }).map(function(e) {
                    return e.message
                })
            })
        }
          , J = function(e) {
            return T(function() {
                var t, n = S.resolveThreadId(e);
                return (null === (t = N().threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId) != null
            })
        }
    },
    21437: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fl: function() {
                return w
            },
            N2: function() {
                return k
            },
            tr: function() {
                return a
            }
        });
        var r, a, i, o = n(96237), s = n(39324), l = n(71209), u = n(22830), c = n(35448), d = n(24396), f = n(70079), h = n(81292), g = n(32787), m = n(24274), p = n(64135), v = {
            isBetaFeaturesUiEnabled: !1,
            isBrowsingAvailable: !1,
            isBrowsingEnabled: !1,
            isPluginsAvailable: !1,
            isPluginsEnabled: !1,
            isCodeInterpreterAvailable: !1,
            isCodeInterpreterEnabled: !1,
            isLegacyToolsUser: !1,
            isNewToolsUser: !1
        };
        (r = a || (a = {})).BROWSING = "browsing",
        r.CODE_INTERPRETER = "code_interpreter",
        r.PLUGINS = "plugins";
        var x = (i = {},
        (0,
        o._)(i, a.BROWSING, "isBrowsingEnabled"),
        (0,
        o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
        (0,
        o._)(i, a.PLUGINS, "isPluginsEnabled"),
        i)
          , b = (0,
        h.ZP)()(function() {
            return v
        })
          , y = {
            updateUserSettings: function(e) {
                b.setState(function(t) {
                    return (0,
                    s._)({}, t, e)
                })
            },
            updateUserSettingsFromFeatures: function(e) {
                b.setState(function(t) {
                    return (0,
                    s._)({}, t, y.getUserSettingsFromFeatures(e))
                })
            },
            getUserSettingsFromFeatures: function(e) {
                return Object.entries(e).reduce(function(e, t) {
                    var n = (0,
                    u._)(t, 2)
                      , r = n[0]
                      , a = n[1]
                      , i = x[r];
                    return i ? (0,
                    l._)((0,
                    s._)({}, e), (0,
                    o._)({}, i, a)) : e
                }, {})
            }
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return ["userSettings", e]
        };
        function k() {
            var e = (0,
            g.kP)().session
              , t = (0,
            c.NL)();
            return function() {
                return t.invalidateQueries({
                    queryKey: j(null == e ? void 0 : e.accessToken)
                })
            }
        }
        function w() {
            var e = (0,
            g.kP)().session
              , t = (0,
            p.hz)()
              , n = t.has("beta_features");
            return (0,
            d.a)(j(null == e ? void 0 : e.accessToken), function() {
                return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(function(e) {
                    return null != e && y.updateUserSettingsFromFeatures(e),
                    e
                })
            }, {
                enabled: n && (null == e ? void 0 : e.accessToken) != null
            }),
            (0,
            f.useEffect)(function() {
                y.updateUserSettings({
                    isBetaFeaturesUiEnabled: n,
                    isBrowsingAvailable: t.has("browsing_available") || t.has("tools"),
                    isCodeInterpreterAvailable: t.has("tools2"),
                    isPluginsAvailable: t.has("plugins_available") || t.has("tools3"),
                    isLegacyToolsUser: t.has("tools") && t.has("browsing_available") || t.has("tools3") && t.has("plugins_available"),
                    isNewToolsUser: t.has("browsing_available") && !t.has("tools") || t.has("plugins_available") && !t.has("tools3")
                })
            }, [t, n]),
            b(function(e) {
                return e
            })
        }
    },
    77442: function(e, t, n) {
        "use strict";
        n.d(t, {
            _G: function() {
                return a
            },
            dQ: function() {
                return g
            },
            oc: function() {
                return d
            },
            w$: function() {
                return f
            },
            x_: function() {
                return h
            }
        });
        var r, a, i, o = n(96237), s = n(22830), l = n(70079);
        (r = a || (a = {})).Mobile = "mobile",
        r.Small = "small",
        r.Medium = "medium",
        r.Large = "large",
        r.XLarge = "xlarge";
        var u = (i = {},
        (0,
        o._)(i, a.Small, 640),
        (0,
        o._)(i, a.Medium, 768),
        (0,
        o._)(i, a.Large, 1024),
        (0,
        o._)(i, a.XLarge, 1280),
        i);
        function c(e) {
            var t = function() {
                i(n(e))
            }
              , n = function(e) {
                return window.matchMedia(e).matches
            }
              , r = (0,
            s._)((0,
            l.useState)(n(e)), 2)
              , a = r[0]
              , i = r[1];
            return (0,
            l.useEffect)(function() {
                var n = window.matchMedia(e);
                return t(),
                n.addListener ? n.addListener(t) : n.addEventListener("change", t),
                function() {
                    n.removeListener ? n.removeListener(t) : n.removeEventListener("change", t)
                }
            }, [e]),
            a
        }
        function d() {
            return c("(min-width: ".concat(u[a.Small], "px)"))
        }
        function f() {
            return c("(min-width: ".concat(u[a.Medium], "px)"))
        }
        function h() {
            return c("(min-width: ".concat(u[a.Large], "px)"))
        }
        function g() {
            var e = d()
              , t = f()
              , n = h();
            return c("(min-width: ".concat(u[a.XLarge], "px)")) ? a.XLarge : n ? a.Large : t ? a.Medium : e ? a.Small : a.Mobile
        }
    },
    57311: function(e, t, n) {
        "use strict";
        n.d(t, {
            Cv: function() {
                return M
            },
            Vh: function() {
                return y
            },
            uV: function() {
                return k
            }
        });
        var r, a, i = n(51217), o = n(53596), s = n(54084), l = n(49406), u = n(31819), c = n(96237), d = n(39324), f = n(70216), h = n(81949), g = n(74050), m = n(84251), p = n.n(m), v = n(8844), x = n(75179), b = n(69403), y = "request-", j = (r = {},
        (0,
        c._)(r, b.Jq.Root, b.uU.Unknown),
        (0,
        c._)(r, b.Jq.Prompt, b.uU.User),
        (0,
        c._)(r, b.Jq.Completion, b.uU.Assistant),
        (0,
        c._)(r, b.Jq.System, b.uU.System),
        r), k = (a = {},
        (0,
        c._)(a, b.uU.Unknown, b.Jq.Root),
        (0,
        c._)(a, b.uU.System, b.Jq.System),
        (0,
        c._)(a, b.uU.User, b.Jq.Prompt),
        (0,
        c._)(a, b.uU.Assistant, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Critic, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Tool, b.Jq.Completion),
        a);
        function w(e) {
            var t = (0,
            v.Z)();
            return "".concat(e).concat(t.substring(e.length))
        }
        var C = new WeakMap
          , _ = new WeakMap
          , M = function() {
            function e(t) {
                (0,
                i._)(this, e),
                (0,
                s._)(this, C, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                s._)(this, _, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                l._)(this, C, t || e.createTree());
                var n = Object.values((0,
                o._)(this, C)).find(function(e) {
                    return e.type === b.Jq.Root
                });
                (0,
                l._)(this, _, (null == n ? void 0 : n.id) || "root")
            }
            var t = e.prototype;
            return t.getNode = function(e) {
                return (0,
                o._)(this, C)[e]
            }
            ,
            t.getMessage = function(e) {
                return (0,
                o._)(this, C)[e].message
            }
            ,
            t.getMessageId = function(e) {
                try {
                    return (0,
                    o._)(this, C)[e].message.id
                } catch (t) {
                    throw console.error("Tree: Unable to getMessageId for node ".concat(e)),
                    t
                }
            }
            ,
            t.getMetadata = function(e) {
                return (0,
                o._)(this, C)[e].metadata
            }
            ,
            t.getLeafFromNode = function(e) {
                for (var t = (0,
                o._)(this, C)[e]; ; ) {
                    if (0 === t.children.length)
                        return t;
                    t = (0,
                    o._)(this, C)[t.children.values().next().value]
                }
            }
            ,
            t.getParent = function(e) {
                var t = (0,
                o._)(this, C)[e].parentId;
                return (0,
                o._)(this, C)[t]
            }
            ,
            t.getParentId = function(e) {
                var t;
                return (null === (t = this.getParent(e)) || void 0 === t ? void 0 : t.id) || "root"
            }
            ,
            t.getNodeByMessageId = function(e) {
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var a, i = Object.values((0,
                    o._)(this, C))[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                        var s = a.value;
                        if (s.message.id === e)
                            return s
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
            }
            ,
            t.getBranchFromLeaf = function(e) {
                for (var t, n = [], r = null !== (t = (0,
                o._)(this, C)[e]) && void 0 !== t ? t : this.getNodeByMessageId(e); null != r; ) {
                    if (n.includes(r)) {
                        console.error("Infinite loop detected in getBranchFromLeaf.");
                        break
                    }
                    if (n.push(r),
                    "root" === r.type)
                        break;
                    r = (0,
                    o._)(this, C)[r.parentId]
                }
                return n.reverse()
            }
            ,
            t.getChildrenFromNode = function(e) {
                var t = this
                  , n = (0,
                o._)(this, C)[e];
                return n ? Array.from(n.children).map(function(e) {
                    return (0,
                    o._)(t, C)[e]
                }) : []
            }
            ,
            t.getFirstPrompt = function() {
                for (var e, t, n = this.getNode((0,
                o._)(this, _)); ; ) {
                    if (!n)
                        return;
                    if (n.type === b.Jq.Prompt || n.type === b.Jq.System && (null === (e = n.message.metadata) || void 0 === e ? void 0 : e.upload_filename))
                        return n;
                    n = (0,
                    o._)(this, C)[null === (t = n.children) || void 0 === t ? void 0 : t[0]]
                }
            }
            ,
            t.isMessageIncomplete = function(t) {
                var n = this.getMessage(t);
                return e.getIsIncompleteFromMessage(n)
            }
            ,
            t.addNodeToEnd = function(e, t) {
                if (!(0,
                o._)(this, C)[e])
                    return (0,
                    c._)({}, t.id, t);
                (0,
                l._)(this, C, p()((0,
                o._)(this, C), (0,
                c._)({
                    $merge: (0,
                    c._)({}, t.id, t)
                }, e, {
                    children: {
                        $apply: function(e) {
                            return Array.from(new Set((0,
                            h._)(e).concat([t.id])))
                        }
                    }
                })))
            }
            ,
            t.appendSystemMessageToRoot = function(e) {
                var t, n, r = null === (t = this.getFirstPrompt()) || void 0 === t ? void 0 : t.parentId;
                if (r) {
                    var a = this.getNode(r)
                      , i = this.getNode(a.children[0])
                      , s = {
                        id: e.id,
                        children: a.children,
                        parentId: a.id,
                        message: e
                    };
                    (0,
                    l._)(this, C, p()((0,
                    o._)(this, C), (n = {
                        $merge: (0,
                        c._)({}, s.id, s)
                    },
                    (0,
                    c._)(n, a.id, {
                        children: {
                            $set: [s.id]
                        }
                    }),
                    (0,
                    c._)(n, i.id, {
                        parentId: {
                            $set: s.id
                        }
                    }),
                    n)))
                }
            }
            ,
            t.addNode = function(e, t, n, r, a) {
                var i = "string" == typeof t ? {
                    id: w("aaa2"),
                    author: {
                        role: j[r]
                    },
                    content: {
                        content_type: "text",
                        parts: [t]
                    }
                } : t
                  , o = (0,
                d._)({
                    id: e,
                    children: [],
                    parentId: n,
                    type: r,
                    message: i
                }, a ? {
                    metadata: a
                } : {});
                this.addNodeToEnd(n, o)
            }
            ,
            t.updateNode = function(e, t) {
                (0,
                l._)(this, C, p()((0,
                o._)(this, C), (0,
                c._)({}, e, t)))
            }
            ,
            t.updateNodeMessage = function(e, t) {
                (0,
                l._)(this, C, p()((0,
                o._)(this, C), (0,
                c._)({}, e, {
                    message: {
                        $set: t
                    }
                })))
            }
            ,
            t.updateNodeMessageMetadata = function(e, t) {
                (0,
                l._)(this, C, p()((0,
                o._)(this, C), (0,
                c._)({}, e, {
                    message: {
                        metadata: {
                            $merge: t
                        }
                    }
                })))
            }
            ,
            t.updateNodeText = function(e, t) {
                (0,
                l._)(this, C, p()((0,
                o._)(this, C), (0,
                c._)({}, e, {
                    message: {
                        content: {
                            parts: {
                                $set: [t]
                            }
                        }
                    }
                })))
            }
            ,
            t.deleteNode = function(e) {
                var t = (0,
                o._)(this, C)
                  , n = t[e]
                  , r = (0,
                f._)(t, [e].map(g._))
                  , a = n.parentId;
                (0,
                l._)(this, C, p()(r, (0,
                c._)({}, a, {
                    children: {
                        $apply: function(t) {
                            return t.filter(function(t) {
                                return t !== e
                            })
                        }
                    }
                })))
            }
            ,
            t.getTextFromNode = function(t) {
                return e.getTextFromMessage(this.getMessage(t))
            }
            ,
            t.getHasErrorFromNode = function(e) {
                var t, n, r = this.getNode(e);
                return r && ((null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "danger" || (null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "warning")
            }
            ,
            t.getIsBlockedFromNode = function(e) {
                var t, n, r = this.getNode(e);
                return r && (null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) === x.Dd && (null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "danger"
            }
            ,
            t.getTextFromThread = function(t) {
                return this.getBranchFromLeaf(t).filter(function(e) {
                    return e.type !== b.Jq.Root && e.type !== b.Jq.System
                }).map(function(t) {
                    return e.getTextFromMessage(t.message)
                }).join("\n\n")
            }
            ,
            t.shouldFilterNode = function(e) {
                var t = e.message
                  , n = t.content.content_type
                  , r = e.message.author.role === b.uU.System
                  , a = e.message.author.role === b.uU.Tool
                  , i = void 0 !== t.recipient && "all" !== t.recipient;
                return r || i || a && !("code" === n || "execution_output" === n || "system_error" === n)
            }
            ,
            t.getTextFromTurnsById = function(e) {
                var t = this;
                return e.map(function(e) {
                    return t.getNode(e)
                }).filter(function(e) {
                    return !t.shouldFilterNode(e)
                }).map(function(e) {
                    return t.getTextFromNode(e.id)
                }).join("\n\n")
            }
            ,
            t.getTextFromLastNTurns = function(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return this.getConversationTurns(t, this.shouldFilterNode).slice(-n).map(function(t) {
                    var n = t.messages.map(function(t) {
                        return e.getTextFromMessage(t.message)
                    }).filter(function(e) {
                        return "" !== e
                    }).join("\n");
                    return r ? "[".concat(t.role, "]\n").concat(n) : n
                }).join("\n")
            }
            ,
            t.getConversationTurns = function(e, t) {
                var n = this
                  , r = [];
                return this.getBranchFromLeaf(e).forEach(function(e) {
                    var a = e.id
                      , i = e.parentId
                      , s = e.message
                      , l = e.metadata;
                    if (null == t || !t(e)) {
                        var u = r[r.length - 1];
                        (null == u ? void 0 : u.role) === s.author.role || s.author.role === b.uU.Tool ? r[r.length - 1].messages.push((0,
                        d._)({
                            nodeId: a,
                            parentId: i,
                            message: s
                        }, l)) : r.push({
                            role: s.author.role,
                            messages: [(0,
                            d._)({
                                nodeId: a,
                                parentId: i,
                                message: s
                            }, l)],
                            variantIds: i ? Array.from((0,
                            o._)(n, C)[i].children) : [a]
                        })
                    }
                }),
                r
            }
            ,
            t.getLastValidNode = function(e) {
                for (var t, n = this.getNode(e); n && n && (null === (t = n.metadata) || void 0 === t ? void 0 : t.err); )
                    n = this.getNode(n.parentId);
                return n
            }
            ,
            t.getParentPromptNode = function(e) {
                for (var t, n = this.getNode(e); n && n && (null === (t = n.message) || void 0 === t ? void 0 : t.author.role) !== b.uU.User; )
                    n = this.getNode(n.parentId);
                return n
            }
            ,
            t.messageIdToNodeId = function(e) {
                if (null != (0,
                o._)(this, C)[e])
                    return e;
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var a, i = Object.values((0,
                    o._)(this, C))[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                        var s, l = a.value;
                        if ((null === (s = l.message) || void 0 === s ? void 0 : s.id) === e)
                            return l.id
                    }
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
                return e
            }
            ,
            t.unstable_getMapping = function() {
                return (0,
                o._)(this, C)
            }
            ,
            e.createTree = function() {
                return {
                    root: {
                        id: "root",
                        children: [],
                        parentId: "",
                        type: b.Jq.Root,
                        message: e.createRootMessage()
                    }
                }
            }
            ,
            e.createRootMessage = function() {
                return {
                    id: w("aaa1"),
                    author: {
                        role: j[b.Jq.Root]
                    },
                    content: {
                        content_type: "text",
                        parts: []
                    }
                }
            }
            ,
            e.getIsMessageFinished = function(e) {
                var t;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : t.finish_details) != null
            }
            ,
            e.getIsStopFromMessage = function(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "stop"
            }
            ,
            e.getIsIncompleteFromMessage = function(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "max_tokens"
            }
            ,
            e.getWasInterruptedFromMessage = function(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "interrupted"
            }
            ,
            e.getIsContinuedFromMessage = function(e) {
                var t;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : t.message_type) === "continue"
            }
            ,
            e.getModelFromMessage = function(e) {
                var t;
                return null === (t = e.metadata) || void 0 === t ? void 0 : t.model_slug
            }
            ,
            e.getTextFromMessage = function(e) {
                switch (e.content.content_type) {
                case "text":
                    return e.content.parts.join("");
                case "tether_browsing_code":
                case "code":
                case "execution_output":
                case "system_error":
                    return e.content.text;
                case "system_message":
                    var t = e.content.text
                      , n = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = Object.values(e.content.tools_section)[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                            var s = i.value;
                            t += "\n\n".concat(s)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            n || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return t;
                default:
                    return ""
                }
            }
            ,
            e.getRequestIdFromConversationTurn = function(e) {
                for (var t = e.messages.length - 1; t >= 0; t--) {
                    var n = e.messages[t];
                    if (n.nodeId.startsWith(y))
                        return n.nodeId
                }
                return e.messages[0].nodeId
            }
            ,
            e.getRecipientFromMessage = function(e) {
                return e.recipient || ""
            }
            ,
            (0,
            u._)(e, [{
                key: "isFirstCompletion",
                get: function() {
                    var e = this.getFirstPrompt();
                    if (e) {
                        var t = (0,
                        o._)(this, C)[e.children[0]];
                        if (t && 0 === t.children.length)
                            return !0
                    }
                    return !1
                }
            }]),
            e
        }()
    },
    19051: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(70079);
        function a() {
            var e = (0,
            r.useRef)([])
              , t = (0,
            r.useRef)(function(t, n) {
                var r = setTimeout(t, n);
                return e.current.push(r),
                r
            });
            return (0,
            r.useEffect)(function() {
                var t = e.current;
                return function() {
                    t.forEach(function(e) {
                        clearTimeout(e)
                    })
                }
            }, []),
            t.current
        }
    },
    75179: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dd: function() {
                return o
            },
            Mf: function() {
                return s
            },
            _I: function() {
                return u
            },
            sK: function() {
                return l
            }
        });
        var r = n(95182)
          , a = n.n(r)
          , i = n(24274)
          , o = "content_policy"
          , s = {
            errType: "warning",
            errCode: o
        }
          , l = {
            err: "Contents may violate our content policy",
            errType: "danger",
            errCode: o
        };
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , o = a()(e.length, 0, 4e3)
              , s = a()(e.length - o, 0, e.length - 1)
              , l = t ? e.substring(s, e.length) : e;
            return l && !1 ? i.ZP.runModerationApi(l, n, r).then(function(e) {
                return {
                    isBlocked: !!e.blocked,
                    isFlagged: !!e.flagged
                }
            }).catch(function(e) {
                return console.error(e),
                {
                    isBlocked: !1,
                    isFlagged: !1,
                    error: e
                }
            }) : Promise.resolve({
                isBlocked: !1,
                isFlagged: !1
            })
        }
    },
    41402: function() {}
}]);
