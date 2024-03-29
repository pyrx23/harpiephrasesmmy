"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4622],
  {
    62782: function (a, e, r) {
      r.d(e, {
        Z: function () {
          return m;
        },
      });
      var d = r(26042),
        t = r(69396),
        c = r(99534),
        s = r(85893),
        o = r(67294),
        n = r(94184),
        p = r.n(n);
      function m(a) {
        var e = a.children,
          r = a.className,
          n = a.color,
          m = a.size,
          C = a.secondary,
          N = a.tertiary,
          i = a.onClick,
          f = a.disabled,
          b = a.as,
          A = (0, c.Z)(a, [
            "children",
            "className",
            "color",
            "size",
            "secondary",
            "tertiary",
            "onClick",
            "disabled",
            "as",
          ]),
          u = "",
          D = "";
        switch (
          ((D = N
            ? n
              ? "text-" +
                n +
                "-600 hover:text-" +
                n +
                "-200 underline font-display"
              : "text-harpie-300 underline hover:text-harpie-200 font-display"
            : C
            ? n
              ? "text-" +
                n +
                "-600 hover:bg-" +
                n +
                "-100 focus:ring-" +
                n +
                "-500 border-2 border-" +
                n +
                "-400 font-display"
              : " text-harpie-500 font-display hover:border-orange-300 hover:text-orange-300 rounded-sm focus:ring-harpie-200 border-harpie border-2"
            : f
            ? "text-gray-400 bg-gray-50 border-2 border-transparent font-display"
            : n
            ? "bg-" +
              n +
              "-600 hover:bg-" +
              n +
              "-800 focus:ring-" +
              n +
              "-500 border-2 border-" +
              n +
              "-600 font-display"
            : "bg-harpie font-display hover:bg-harpie-600 focus:ring-harpie-200 border-2 border-harpie"),
          m)
        ) {
          case "sm":
            u = p()(
              r,
              D,
              " duration-100 transition ease-in-out disabled:opacity-50 disabled:cursor-default inline-flex font-normal items-center px-4 py-2 border border-transparent transition-colors ease-in-out font-medium text-white rounded-sm focus:ring"
            );
            break;
          case "hero":
            u = p()(
              r,
              D,
              " duration-100 transition ease-in-out inline-flex justify-center py-2 md:py-3 text-lg  tracking-wide text-white transition-colors ease-in-out px-12 md:px-6 md:w-80 disabled:cursor-default rounded-sm lg:px-8 md:text-xl focus:ring"
            );
            break;
          default:
            u = p()(
              r,
              D,
              " duration-100 transition ease-in-out inline-block py-2 text-base rounded-sm tracking-wide text-white transition-colors ease-in-out md:px-8 lg:px-10 px-6 focus:ring disabled:cursor-default"
            );
        }
        return b
          ? o.createElement(
              b,
              (0, t.Z)((0, d.Z)({}, A), { className: u, onClick: i }),
              e
            )
          : (0, s.jsx)(
              "button",
              (0, t.Z)((0, d.Z)({}, A), {
                className: u,
                onClick: i,
                disabled: f,
                children: e,
              })
            );
      }
    },
    41306: function (a, e, r) {
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      var d = r(85893),
        t = r(67294),
        c = r(8390),
        s = r(94184),
        o = r.n(s);
      function n(a) {
        var e = a.open,
          r = a.children,
          s = a.className;
        return (0, d.jsx)(c.u.Root, {
          show: e,
          as: t.Fragment,
          children: (0, d.jsxs)("div", {
            className: o()("fixed z-50", s),
            children: [
              (0, d.jsx)("div", {
                className: "fixed inset-0 bg-black/30",
                "aria-hidden": "true",
              }),
              (0, d.jsx)("div", {
                className: "fixed inset-0 flex items-center justify-center p-4",
                children: (0, d.jsx)(c.u.Child, {
                  as: t.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  enterTo: "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                  leaveTo:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  children: r,
                }),
              }),
            ],
          }),
        });
      }
    },
    98417: function (a, e, r) {
      r.d(e, {
        _d: function () {
          return s;
        },
        hY: function () {
          return t;
        },
        km: function () {
          return c;
        },
      }),
        ((d = t || (t = {})).NOT_STARTED = "NOT_STARTED"),
        (d.IN_PROGRESS = "IN_PROGRESS"),
        (d.COMPLETED = "COMPLETED");
      var d,
        t,
        c = function (a) {
          var e, r, d, t, c, s, o, n, p, m, C, N, i, f, b, A;
          switch (a.action) {
            case "checkOutTransactionSecurity":
              return "checkOutTransactionSecurity";
            case "startJourney":
              return "startJourney";
            case "runAScan":
              return "scan-".concat(null == a ? void 0 : a.date);
            case "revokeErc20Approval":
              return "revokeErc20Approval-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (e = a.approval) || void 0 === e
                    ? void 0
                    : e.spender,
                  "-"
                )
                .concat(
                  null == a
                    ? void 0
                    : null === (r = a.approval) || void 0 === r
                    ? void 0
                    : null === (d = r.value) || void 0 === d
                    ? void 0
                    : d.toString()
                );
            case "revokeErc721Approval":
              return "revokeErc721Approval-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (t = a.approval) || void 0 === t
                    ? void 0
                    : t.approved,
                  "-"
                )
                .concat(
                  null == a
                    ? void 0
                    : null === (c = a.approval) || void 0 === c
                    ? void 0
                    : null === (s = c.tokenId) || void 0 === s
                    ? void 0
                    : s.toString()
                );
            case "revokeErc721ApprovalForAll":
              return "revokeErc721ApprovalForAll-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (o = a.approval) || void 0 === o
                    ? void 0
                    : o.operator
                );
            case "acknowledgeErc20Approval":
              return "acknowledgeErc20Approval-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (n = a.approval) || void 0 === n
                    ? void 0
                    : n.spender,
                  "-"
                )
                .concat(
                  null == a
                    ? void 0
                    : null === (p = a.approval) || void 0 === p
                    ? void 0
                    : null === (m = p.value) || void 0 === m
                    ? void 0
                    : m.toString()
                );
            case "acknowledgeErc721Approval":
              return "acknowledgeErc721Approval-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (C = a.approval) || void 0 === C
                    ? void 0
                    : C.approved,
                  "-"
                )
                .concat(
                  null == a
                    ? void 0
                    : null === (N = a.approval) || void 0 === N
                    ? void 0
                    : null === (i = N.tokenId) || void 0 === i
                    ? void 0
                    : i.toString()
                );
            case "acknowledgeErc721ApprovalForAll":
              return "acknowledgeErc721ApprovalForAll-"
                .concat(null == a ? void 0 : a.tokenAddress, "-")
                .concat(
                  null == a
                    ? void 0
                    : null === (f = a.approval) || void 0 === f
                    ? void 0
                    : f.operator
                );
            case "acknowledgeMaliciousTransaction":
              return "acknowledgeMaliciousTransaction-".concat(
                null == a
                  ? void 0
                  : null === (b = a.transaction) || void 0 === b
                  ? void 0
                  : b.hash
              );
            case "acknowledgeUnknownTransaction":
              return "acknowledgeUnknownTransaction-".concat(
                null == a
                  ? void 0
                  : null === (A = a.transaction) || void 0 === A
                  ? void 0
                  : A.hash
              );
            case "changeTabHome":
              return "changeTabHome";
            case "changeTabAdvanced":
              return "changeTabAdvanced";
            case "changeTabBasic":
              return "changeTabBasic";
            case "changeTabHelp":
              return "changeTabHelp";
            default:
              return "unknown";
          }
        },
        s = function (a, e) {
          return a.priority > e.priority
            ? -1
            : a.priority < e.priority ||
              ("COMPLETED" === a.status && "COMPLETED" !== e.status)
            ? 1
            : ("COMPLETED" === e.status && "COMPLETED" !== a.status) ||
              a.title[0] < e.title[0]
            ? -1
            : a.title[0] > e.title[0]
            ? 1
            : 0;
        };
    },
    55981: function (a, e, r) {
      r.d(e, {
        iv: function () {
          return d;
        },
        nM: function () {
          return P;
        },
        sd: function () {
          return h;
        },
        MX: function () {
          return T;
        },
      });
      var d,
        t,
        c,
        s,
        o,
        n,
        p = r(47568),
        m = r(828),
        C = r(29815),
        N = r(70655),
        i = r(2593),
        f = r(70081),
        b = r(31922),
        A = r(14045),
        u = r(41814),
        D = r(71688),
        F = r(90512),
        E = r(72749),
        B =
          ((t = (0, p.Z)(function (a, e) {
            var r;
            return (0, N.__generator)(this, function (d) {
              switch (d.label) {
                case 0:
                  if (u.getAddress(a) !== a)
                    throw Error(
                      "Invalid checksum ".concat(a, " when validating")
                    );
                  (r = (0, E.ik)(a, e)), (d.label = 1);
                case 1:
                  return (
                    d.trys.push([1, 3, , 4]),
                    [4, r.supportsInterface("0x80ac58cd")]
                  );
                case 2:
                  return d.sent(), [2, !0];
                case 3:
                  return d.sent(), [2, !1];
                case 4:
                  return [2];
              }
            });
          })),
          function (a, e) {
            return t.apply(this, arguments);
          }),
        l = { 1: "eth" },
        x = {
          apiKey: "x0HAMuN_BIdYus3ilIE5zSYaLKp8K2X3",
          network: F.N.ETH_MAINNET,
        },
        v = new F.c(x),
        y =
          ((c = (0, p.Z)(function (a) {
            var e,
              r,
              d,
              t,
              c,
              s,
              o,
              n,
              m = arguments;
            return (0, N.__generator)(this, function (C) {
              switch (C.label) {
                case 0:
                  var i;
                  if (
                    ((e = m.length > 1 && void 0 !== m[1] ? m[1] : []),
                    (r =
                      m.length > 2 && void 0 !== m[2]
                        ? m[2]
                        : D.HL.ETHEREUM_MAINNET),
                    (d = m.length > 3 ? m[3] : void 0),
                    (t = m.length > 4 ? m[4] : void 0),
                    (c = l[r]),
                    (s = new Map()),
                    null == c)
                  )
                    return [2, s];
                  return (
                    (o = t
                      ? new Set(
                          e.map(function (a) {
                            return u.getAddress(a);
                          })
                        )
                      : null),
                    (i = (0, p.Z)(function (e, r) {
                      var c, m;
                      return (0, N.__generator)(this, function (m) {
                        switch (m.label) {
                          case 0:
                            if (!e && !r) return [2];
                            return [
                              4,
                              v.nft.getNftsForOwner(a, {
                                pageKey: r,
                                excludeFilters: [F.o.SPAM],
                              }),
                            ];
                          case 1:
                            var C;
                            return [
                              4,
                              Promise.allSettled(
                                (c = m.sent()).ownedNfts.map(
                                  ((C = (0, p.Z)(function (a) {
                                    var e, r, c, n, p, m, C, i, f;
                                    return (0,
                                    N.__generator)(this, function (N) {
                                      switch (N.label) {
                                        case 0:
                                          if (
                                            ((e = u.getAddress(
                                              a.contract.address
                                            )),
                                            t &&
                                              !(null == o ? void 0 : o.has(e)))
                                          )
                                            return [2];
                                          N.label = 1;
                                        case 1:
                                          return (
                                            N.trys.push([1, 3, , 4]),
                                            [4, B(e, d)]
                                          );
                                        case 2:
                                          return (
                                            N.sent() &&
                                              ((n = u.getAddress(
                                                a.contract.address
                                              )),
                                              (f = {
                                                metadata: (m =
                                                  null !==
                                                    (p =
                                                      null ===
                                                        (r =
                                                          null == s
                                                            ? void 0
                                                            : s.get(n)) ||
                                                      void 0 === r
                                                        ? void 0
                                                        : r.metadata) &&
                                                  void 0 !== p
                                                    ? p
                                                    : a),
                                                ids: (null !==
                                                  (C =
                                                    null ===
                                                      (c =
                                                        null == s
                                                          ? void 0
                                                          : s.get(n)) ||
                                                    void 0 === c
                                                      ? void 0
                                                      : c.ids) && void 0 !== C
                                                  ? C
                                                  : []
                                                ).concat(a.tokenId),
                                              }),
                                              s.set(n, f)),
                                            [3, 4]
                                          );
                                        case 3:
                                          return (
                                            N.sent(), console.log("error"), [2]
                                          );
                                        case 4:
                                          return [2];
                                      }
                                    });
                                  })),
                                  function (a) {
                                    return C.apply(this, arguments);
                                  })
                                )
                              ),
                            ];
                          case 2:
                            return (
                              m.sent(),
                              (null == c ? void 0 : c.pageKey) &&
                                n(!1, c.pageKey),
                              [2]
                            );
                        }
                      });
                    })),
                    [
                      4,
                      (n = function (a, e) {
                        return i.apply(this, arguments);
                      })(!0),
                    ]
                  );
                case 1:
                  return C.sent(), [2, s];
              }
            });
          })),
          function (a) {
            return c.apply(this, arguments);
          });
      (0, p.Z)(function (a) {
        var e,
          r,
          d,
          t,
          c = arguments;
        return (0, N.__generator)(this, function (e) {
          switch (e.label) {
            case 0:
              var s;
              if (
                ((r =
                  l[
                    c.length > 1 && void 0 !== c[1]
                      ? c[1]
                      : D.HL.ETHEREUM_MAINNET
                  ]),
                (d = []),
                null == r)
              )
                return [2, d];
              return (
                (s = (0, p.Z)(function (e, r) {
                  var c, s;
                  return (0, N.__generator)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (!e && !r) return [2];
                        return [4, v.core.getTokenBalances(a)];
                      case 1:
                        var o;
                        return [
                          4,
                          Promise.allSettled(
                            (c = s.sent()).tokenBalances.map(
                              ((o = (0, p.Z)(function (a) {
                                var e;
                                return (0, N.__generator)(this, function (r) {
                                  try {
                                    (e = u.getAddress(a.contractAddress)),
                                      d.push([e, i.O$.from(a.tokenBalance)]);
                                  } catch (t) {
                                    console.log("error");
                                  }
                                  return [2];
                                });
                              })),
                              function (a) {
                                return o.apply(this, arguments);
                              })
                            )
                          ),
                        ];
                      case 2:
                        return (
                          s.sent(),
                          (null == c ? void 0 : c.pageKey) && t(!1, c.pageKey),
                          [2]
                        );
                    }
                  });
                })),
                [
                  4,
                  (t = function (a, e) {
                    return s.apply(this, arguments);
                  })(!0),
                ]
              );
            case 1:
              return e.sent(), [2, d];
          }
        });
      }),
        ((o = d || (d = {})).ERC20 = "ERC20"),
        (o.ERC721 = "ERC721");
      var S,
        P =
          ((n = (0, p.Z)(function (a, e, r, t) {
            var c,
              s,
              o,
              n,
              i,
              f,
              b,
              A,
              u,
              D,
              F,
              B = arguments;
            return (0, N.__generator)(this, function (l) {
              var x, v, S;
              switch (l.label) {
                case 0:
                  return (
                    (c = B.length > 4 && void 0 !== B[4] && B[4]),
                    (o = (s = (0, m.Z)(
                      r.reduce(
                        function (a, e) {
                          switch (e.type) {
                            case d.ERC20:
                              return [a[0].concat(e), a[1]];
                            case d.ERC721:
                              return [a[0], a[1].concat(e)];
                            default:
                              return a;
                          }
                        },
                        [[], []]
                      ),
                      2
                    ))[0]),
                    (n = s[1]),
                    (i = []),
                    (f = (0, E.y0)(e.vaultAddress, t)),
                    (b = o.map(
                      ((x = (0, p.Z)(function (r) {
                        var c, s, o, n;
                        return (0, N.__generator)(this, function (p) {
                          switch (p.label) {
                            case 0:
                              return (
                                p.trys.push([0, 4, , 5]),
                                [
                                  4,
                                  (c = (0, E.O9)(r.address, t)).allowance(
                                    a,
                                    e.flashbotAddress
                                  ),
                                ]
                              );
                            case 1:
                              return (
                                (s = !p.sent().isZero()), [4, c.balanceOf(a)]
                              );
                            case 2:
                              return (
                                (o = p.sent()),
                                [4, f.canWithdrawERC20(a, r.address)]
                              );
                            case 3:
                              return (
                                (n = p.sent()),
                                i.push({
                                  tokenInput: {
                                    address: r.address,
                                    isApproved: s,
                                    balance: o.toString(),
                                    vaultBalance: n.toString(),
                                    ids: [],
                                    vaultIds: [],
                                  },
                                  imageUrl: r.avatar,
                                  symbol: r.symbol,
                                  name: r.name,
                                  type: d.ERC20,
                                }),
                                [3, 5]
                              );
                            case 4:
                              return p.sent(), [3, 5];
                            case 5:
                              return [2];
                          }
                        });
                      })),
                      function (a) {
                        return x.apply(this, arguments);
                      })
                    )),
                    [
                      4,
                      y(
                        a,
                        n.map(function (a) {
                          return a.address;
                        }),
                        e.id,
                        t,
                        c
                      ),
                    ]
                  );
                case 1:
                  return (
                    (A = l.sent()),
                    [
                      4,
                      y(
                        e.vaultAddress,
                        n.map(function (a) {
                          return a.address;
                        }),
                        e.id,
                        t,
                        c
                      ),
                    ]
                  );
                case 2:
                  return (
                    (u = l.sent()),
                    (D = []),
                    (0, C.Z)(A.keys()).map(function (a) {
                      var r,
                        t,
                        c,
                        s,
                        o,
                        n,
                        p,
                        m,
                        C,
                        N,
                        i,
                        f,
                        b,
                        u,
                        F,
                        E,
                        B,
                        l = A.get(a);
                      l &&
                        (null == l
                          ? void 0
                          : null === (r = l.metadata) || void 0 === r
                          ? void 0
                          : null === (t = r.contract) || void 0 === t
                          ? void 0
                          : t.tokenType) === "ERC721" &&
                        D.push({
                          address: a,
                          chainId: e.id,
                          name:
                            null !==
                              (u =
                                null === (c = A.get(a)) || void 0 === c
                                  ? void 0
                                  : null === (s = c.metadata) || void 0 === s
                                  ? void 0
                                  : null === (o = s.contract) || void 0 === o
                                  ? void 0
                                  : o.name) && void 0 !== u
                              ? u
                              : "",
                          symbol:
                            null !==
                              (F =
                                null ===
                                  (p =
                                    null === (n = A.get(a)) || void 0 === n
                                      ? void 0
                                      : n.metadata.contract) || void 0 === p
                                  ? void 0
                                  : p.symbol) && void 0 !== F
                              ? F
                              : "",
                          erc20Value: 0,
                          erc721Values: {},
                          type:
                            (null === (m = A.get(a)) || void 0 === m
                              ? void 0
                              : null === (C = m.metadata) || void 0 === C
                              ? void 0
                              : null === (N = C.contract) || void 0 === N
                              ? void 0
                              : N.tokenType) === "ERC721"
                              ? d.ERC721
                              : null !== (E = d.ERC721) && void 0 !== E
                              ? E
                              : d.ERC721,
                          avatar:
                            null !==
                              (B =
                                null === (i = A.get(a)) || void 0 === i
                                  ? void 0
                                  : null === (f = i.metadata) || void 0 === f
                                  ? void 0
                                  : null === (b = f.rawMetadata) || void 0 === b
                                  ? void 0
                                  : b.image) && void 0 !== B
                              ? B
                              : "",
                        });
                    }),
                    (F = D.map(
                      ((v = (0, p.Z)(function (r) {
                        var d, c, s, o, n, m, C, b, D, F;
                        return (0, N.__generator)(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return (
                                s.trys.push([0, 3, , 4]),
                                [
                                  4,
                                  (0, E.ik)(r.address, t).isApprovedForAll(
                                    a,
                                    e.flashbotAddress
                                  ),
                                ]
                              );
                            case 1:
                              var C;
                              return (
                                (o = s.sent()),
                                (n = []),
                                [
                                  4,
                                  Promise.allSettled(
                                    (null !==
                                      (m =
                                        null ===
                                          (d =
                                            null == u
                                              ? void 0
                                              : u.get(r.address)) ||
                                        void 0 === d
                                          ? void 0
                                          : d.ids) && void 0 !== m
                                      ? m
                                      : []
                                    ).map(
                                      ((C = (0, p.Z)(function (e) {
                                        return (0,
                                        N.__generator)(this, function (d) {
                                          switch (d.label) {
                                            case 0:
                                              return [
                                                4,
                                                f.canWithdrawERC721(
                                                  a,
                                                  r.address,
                                                  e
                                                ),
                                              ];
                                            case 1:
                                              return d.sent() && n.push(e), [2];
                                          }
                                        });
                                      })),
                                      function (a) {
                                        return C.apply(this, arguments);
                                      })
                                    )
                                  ),
                                ]
                              );
                            case 2:
                              return (
                                s.sent(),
                                i.push({
                                  tokenInput: {
                                    address: r.address,
                                    isApproved: o,
                                    balance: "0",
                                    vaultBalance: "0",
                                    ids:
                                      null !==
                                        (D =
                                          null ===
                                            (c =
                                              null == A
                                                ? void 0
                                                : A.get(r.address)) ||
                                          void 0 === c
                                            ? void 0
                                            : c.ids) && void 0 !== D
                                        ? D
                                        : [],
                                    vaultIds: n,
                                  },
                                  imageUrl: r.avatar,
                                  symbol: r.symbol,
                                  collectionName: r.name,
                                  type: r.type,
                                }),
                                [3, 4]
                              );
                            case 3:
                              throw Error(s.sent().message);
                            case 4:
                              return [2];
                          }
                        });
                      })),
                      function (a) {
                        return v.apply(this, arguments);
                      })
                    )).concat(
                      n.map(
                        ((S = (0, p.Z)(function (r) {
                          var d, c, s, o, n, m, C, b, D;
                          return (0, N.__generator)(this, function (s) {
                            switch (s.label) {
                              case 0:
                                if (
                                  (s.trys.push([0, 3, , 4]),
                                  null == A ? void 0 : A.has(r.address))
                                )
                                  return [2, Promise.resolve()];
                                return [
                                  4,
                                  (0, E.ik)(r.address, t).isApprovedForAll(
                                    a,
                                    e.flashbotAddress
                                  ),
                                ];
                              case 1:
                                var C;
                                return (
                                  (o = s.sent()),
                                  (n = []),
                                  [
                                    4,
                                    Promise.allSettled(
                                      (null !==
                                        (m =
                                          null ===
                                            (d =
                                              null == u
                                                ? void 0
                                                : u.get(r.address)) ||
                                          void 0 === d
                                            ? void 0
                                            : d.ids) && void 0 !== m
                                        ? m
                                        : []
                                      ).map(
                                        ((C = (0, p.Z)(function (e) {
                                          return (0,
                                          N.__generator)(this, function (d) {
                                            switch (d.label) {
                                              case 0:
                                                return [
                                                  4,
                                                  f.canWithdrawERC721(
                                                    a,
                                                    r.address,
                                                    e
                                                  ),
                                                ];
                                              case 1:
                                                return (
                                                  d.sent() && n.push(e), [2]
                                                );
                                            }
                                          });
                                        })),
                                        function (a) {
                                          return C.apply(this, arguments);
                                        })
                                      )
                                    ),
                                  ]
                                );
                              case 2:
                                return (
                                  s.sent(),
                                  i.push({
                                    tokenInput: {
                                      address: r.address,
                                      isApproved: o,
                                      balance: "0",
                                      vaultBalance: "0",
                                      ids:
                                        null !==
                                          (D =
                                            null ===
                                              (c =
                                                null == A
                                                  ? void 0
                                                  : A.get(r.address)) ||
                                            void 0 === c
                                              ? void 0
                                              : c.ids) && void 0 !== D
                                          ? D
                                          : [],
                                      vaultIds: n,
                                    },
                                    imageUrl: r.avatar,
                                    symbol: r.symbol,
                                    collectionName: r.name,
                                    type: r.type,
                                  }),
                                  [3, 4]
                                );
                              case 3:
                                return s.sent(), [3, 4];
                              case 4:
                                return [2];
                            }
                          });
                        })),
                        function (a) {
                          return S.apply(this, arguments);
                        })
                      )
                    ),
                    [4, Promise.allSettled((0, C.Z)(b).concat((0, C.Z)(F)))]
                  );
                case 3:
                  return l.sent(), [2, i];
              }
            });
          })),
          function (a, e, r, d) {
            return n.apply(this, arguments);
          }),
        T = function (a) {
          return !i.O$.from(a.vaultBalance).isZero() || a.vaultIds.length > 0;
        },
        h =
          ((S = (0, p.Z)(function (a, e, r) {
            var d, t, c, s;
            return (0, N.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    s.trys.push([0, 5, , 6]),
                    [
                      4,
                      (d = new f.CH(
                        a,
                        "ERC20" === e ? b.ZP.ERC20 : b.ZP.ERC721,
                        r
                      )).name(),
                    ]
                  );
                case 1:
                  return (t = s.sent()), [4, d.symbol()];
                case 2:
                  if (((c = s.sent()), "ERC20" !== e)) return [3, 4];
                  return [4, d.decimals()];
                case 3:
                  return [
                    2,
                    {
                      address: a,
                      type: e,
                      name: t,
                      symbol: c,
                      decimals: s.sent(),
                    },
                  ];
                case 4:
                  return [2, { address: a, type: e, name: t, symbol: c }];
                case 5:
                  return (
                    s.sent(),
                    [
                      2,
                      {
                        address: a,
                        type: e,
                        name: (0, A.W3)(a),
                        symbol: (0, A.W3)(a),
                      },
                    ]
                  );
                case 6:
                  return [2];
              }
            });
          })),
          function (a, e, r) {
            return S.apply(this, arguments);
          });
    },
    75198: function (a, e, r) {
      var d, t, c, s;
      r.d(e, {
        L: function () {
          return t;
        },
        i: function () {
          return d;
        },
      }),
        ((c = d || (d = {})).PROTECTION = "PROTECTION"),
        (c.REVOKE = "REVOKE"),
        (c.FRONTRUN_ATTEMPT = "FRONTRUN_ATTEMPT"),
        (c.VAULT_WITHDRAWAL = "VAULT_WITHDRAWAL"),
        (c.SET_TRUSTED_NETWORK = "SET_TRUSTED_NETWORK"),
        (c.CHANGE_WITHDRAWER = "CHANGE_WITHDRAWER"),
        ((s = t || (t = {})).PENDING = "PENDING"),
        (s.SUCCESS = "SUCCESS"),
        (s.PARTIAL = "PARTIAL"),
        (s.FAIL = "FAIL"),
        (s.EXPIRED = "EXPIRED");
    },
    76918: function (a, e, r) {
      r.d(e, {
        Vr: function () {
          return al;
        },
        wE: function () {
          return aF;
        },
        Z6: function () {
          return av;
        },
        ML: function () {
          return aB;
        },
      });
      var d,
        t,
        c,
        s,
        o,
        n,
        p,
        m = r(14924),
        C = r(26042),
        N = r(69396),
        i = r(828),
        f = r(29815),
        b = JSON.parse(
          '[{"appName":"Curve","contractName":"Curve.fiDAI/USDC/USDT","address":"0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7"},{"appName":"Curve","contractName":"Curve.fiaDAI/aUSDC/aUSDT","address":"0xDeBF20617708857ebe4F679508E7b7863a8A8EeE"},{"appName":"Curve","contractName":"Curve.fiETH/aETH","address":"0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2"},{"appName":"Curve","contractName":"Curve.fiyDAI/yUSDC/yUSDT/yBUSD","address":"0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27"},{"appName":"Curve","contractName":"Curve.ficDAI/cUSDC","address":"0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56"},{"appName":"Curve","contractName":"Curve.fiEURS/sEUR","address":"0x0Ce6a5fF5217e38315f87032CF90686C96627CAA"},{"appName":"Curve","contractName":"Curve.fihBTC/wBTC","address":"0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F"},{"appName":"Curve","contractName":"Curve.ficyDAI/cyUSDC/cyUSDT","address":"0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF"},{"appName":"Curve","contractName":"Curve.fiLINK/sLINK","address":"0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0"},{"appName":"Curve","contractName":"Curve.fiDAI/USDC/USDT/PAX","address":"0x06364f10B501e868329afBc005b3492902d6C763"},{"appName":"Curve","contractName":"Curve.firenBTC/wBTC","address":"0x93054188d876f558f4a66B2EF1d97d16eDf0895B"},{"appName":"Curve","contractName":"Curve.fiaDAI/aSUSD","address":"0xEB16Ae0052ed37f479f7fe63849198Df1765a733"},{"appName":"Curve","contractName":"Curve.firenBTC/wBTC/sBTC","address":"0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714"},{"appName":"Curve","contractName":"Curve.fiETH/sETH","address":"0xc5424B857f758E906013F3555Dad202e4bdB4567"},{"appName":"Curve","contractName":"Curve.fiETH/stETH","address":"0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"},{"appName":"Curve","contractName":"Curve.fiDAI/USDC/USDT/sUSD","address":"0xA5407eAE9Ba41422680e2e00537571bcC53efBfD"},{"appName":"Curve","contractName":"Curve.ficDAI/cUSDC/USDT","address":"0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C"},{"appName":"Curve","contractName":"Curve.fiyDAI/yUSDC/yUSDT/yTUSD","address":"0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51"},{"appName":"Curve","contractName":"Curve.fiDUSD/3Crv","address":"0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c"},{"appName":"Curve","contractName":"Curve.fiGUSD/3Crv","address":"0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956"},{"appName":"Curve","contractName":"Curve.fiHUSD/3Crv","address":"0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604"},{"appName":"Curve","contractName":"Curve.fiLinkUSD/3Crv","address":"0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171"},{"appName":"Curve","contractName":"Curve.fiMUSD/3Crv","address":"0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6"},{"appName":"Curve","contractName":"Curve.fiRSV/3Crv","address":"0xC18cC39da8b11dA8c3541C598eE022258F9744da"},{"appName":"Curve","contractName":"Curve.fiUSDK/3Crv","address":"0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb"},{"appName":"Curve","contractName":"Curve.fiUSDN/3Crv","address":"0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1"},{"appName":"Curve","contractName":"Curve.fiUSDP/3Crv","address":"0x42d7025938bEc20B69cBae5A77421082407f053A"},{"appName":"Curve","contractName":"Curve.fiUST/3Crv","address":"0x890f4e345B1dAED0367A877a1612f86A1f86985f"},{"appName":"Curve","contractName":"Curve.fibBTC/sbtcCRV","address":"0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b"},{"appName":"Curve","contractName":"Curve.fioBTC/sbtcCRV","address":"0xd81dA8D904b52208541Bade1bD6595D8a251F8dd"},{"appName":"Curve","contractName":"Curve.fipBTC/sbtcCRV","address":"0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF"},{"appName":"Curve","contractName":"Curve.fitBTC/sbtcCrv","address":"0xC25099792E9349C7DD09759744ea681C7de2cb66"},{"appName":"Curve","contractName":"","address":"0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1"},{"appName":"Curve","contractName":"","address":"0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA"},{"appName":"Curve","contractName":"","address":"0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B"},{"appName":"Curve","contractName":"","address":"0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a"},{"appName":"Curve","contractName":"Curve.fiETH/rETH","address":"0xF9440930043eb3997fc70e1339dBb11F341de7A8"},{"appName":"Curve","contractName":"","address":"0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c"},{"appName":"Curve","contractName":"Curve.fiUSD-BTC-ETH","address":"0x80466c64868E1ab14a1Ddf27A676C3fcBE638Fe5"},{"appName":"Curve","contractName":"RAI3CRV","address":"0x618788357D0EBd8A37e763ADab3bc575D54c2C7d"},{"appName":"Curve","contractName":"","address":"0x5a6A4D54456819380173272A5E8E9B9904BdF41B"},{"appName":"Curve","contractName":"","address":"0xFD5dB7463a3aB53fD211b4af195c5BCCC1A03890"},{"appName":"Curve","contractName":"","address":"0x4e0915C88bC70750D68C481540F081fEFaF22273"},{"appName":"Curve","contractName":"","address":"0x1005F7406f32a61BD760CfA14aCCd2737913d546"},{"appName":"Curve","contractName":"Curve.fiFRAX/USDC","address":"0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2"},{"appName":"Curve","contractName":"Curve.fiUSD-BTC-ETH","address":"0xD51a44d3FaE010294C616388b506AcdA1bfAAE46"},{"appName":"Curve","contractName":"CurveEURT-3Crv","address":"0x9838eCcC42659FA8AA7daF2aD134b53984c9427b"},{"appName":"Curve","contractName":"CurveEURS-USDC","address":"0x98a7F18d4E56Cfe84E3D081B40001B3d5bD3eB8B"},{"appName":"Curve","contractName":"CurveCRV-ETH","address":"0x8301AE4fc9c624d1D396cbDAa1ed877821D7C511"},{"appName":"Curve","contractName":"CurveCVX-ETH","address":"0xB576491F1E6e5E62f1d8F26062Ee822B40B0E0d4"},{"appName":"Curve","contractName":"CurveXAUT-3Crv","address":"0xAdCFcf9894335dC340f6Cd182aFA45999F45Fc44"},{"appName":"Curve","contractName":"CurveSPELL-ETH","address":"0x98638FAcf9a3865cd033F36548713183f6996122"},{"appName":"Curve","contractName":"CurveT-ETH","address":"0x752eBeb79963cf0732E9c0fec72a49FD1DEfAEAC"},{"appName":"Curve","contractName":"CurveEUROC-3Crv","address":"0xE84f5b1582BA325fDf9cE6B0c1F087ccfC924e54"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibEUR/sEUR","address":"0x1F71f05CF491595652378Fe94B7820344A551B8E"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibKRW/sKRW","address":"0x8461A004b50d321CB22B7d034969cE6803911899"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibEUR/sEUR","address":"0x19b080FE1ffA0553469D20Ca36219F17Fcf03859"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:Curve.fisCRV/CRV","address":"0x621F13Bf667207335C601F8C89eA5eC260bAdA9A"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:jGBP/TGBP","address":"0xED24FE718EFFC6B2Fc59eeaA5C5f51dD079AB6ED"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:cvxCRV","address":"0x6c7Fc04FEE277eABDd387C5B498A8D0f4CB9C6A6"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:AheadoftheCurve","address":"0xDa5B670CcD418a187a3066674A8002Adc9356Ad1"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:InterestBearingBitcoin","address":"0x99AE07e7Ab61DCCE4383A86d14F61C68CdCCbf27"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:OriginDollar","address":"0x87650D7bbfC3A9F10587d7778206671719d9910D"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:AAVEUntethered","address":"0x6A274dE3e2462c7614702474D64d376729831dCa"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:FEIMetapool","address":"0x06cb22615BA53E60D67Bf6C341a0fD5E718E1655"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GrapefruitUSD","address":"0xf5A95ccDe486B5fE98852bB02d8eC80a4b9422BD"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:RC_WETH_1650_DAI_2021_4_30-real","address":"0x2009f19A8B46642E92Ea19adCdFB23ab05fC20A6"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:RC_INV_350_DAI_2021_5_31","address":"0x883F7d4B6B24F8BF1dB980951Ad08930D9AEC6Bc"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:RC_xRULER_15_DAI_2021_6_30","address":"0x46f5ab27914A670CFE260A2DEDb87f84c264835f"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:RC_xCOVER_100_DAI_2021_6_30","address":"0x2206cF41E7Db9393a3BcbB6Ad35d344811523b46"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:NAOSUSD","address":"0x67d9eAe741944D4402eB0D1cB3bC3a168EC1764c"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:cvxCRV","address":"0x9D0464996170c6B9e75eED71c68B99dDEDf279e8"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDM","address":"0x5B3b5DF2BF2B6543f78e053bD91C4Bdd820929f1"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:MetaEUR","address":"0x3CFAa1596777CAD9f5004F9a0c443d912E262243"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:WasabiUSD","address":"0x9f6664205988C3bf4B12B851c075102714869535"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:WasabiBTC","address":"0x6d0Bd8365e2fCd0c2acf7d218f629A319B6c9d47"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DOLA-3poolCurveLP","address":"0xAA5A67c256e27A5d80712c51971408db3370927D"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibJPY/sJPY","address":"0x8818a9bb44Fbf33502bE7c15c500d0C783B73067"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibAUD/sAUD","address":"0x3F1B0278A9ee595635B61817630cC19DE792f506"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibGBP/sGBP","address":"0xD6Ac1CB9019137a896343Da59dDE6d097F710538"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibCHF/sCHF","address":"0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:OPENMATIC","address":"0xc8a7C1c4B748970F57cA59326BcD49F5c9dc43E3"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:NeutrinoEUR","address":"0x3Fb78e61784C9c637D560eDE23Ad57CA1294c14a"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdCRV","address":"0x737bC004136f66aE3F8fd5a1199e81c18388097B"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:BTCpx","address":"0x4e52Cfc80679F402d10f7766fa3f85351A7C2530"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PWRDMetapool","address":"0x2De8c952871317fB9F22C73BB66BF86A1EeBe1a5"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:WannaAvoidTether?","address":"0x08Eaf78d40abFA6C341F05692eB48eDCA425Ce04"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:alETH","address":"0xC4C319E2D4d66CcA4464C0c2B32c9Bd23ebe784e"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:17PctCryptoDiversifiedDollar","address":"0x66b2e9B25F8ABa6B4A10350c785d63bAdE5A11E9"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:17PctCryptoDiversifiedDollar","address":"0xE76ebD4f9FA58E5269D3cD032b055b443239e664"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:tbtc2","address":"0xfa65aa60a9D45623c57D383fb4cf8Fb8b854cC4D"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:kusd-3pool","address":"0xeD09ca8275dFfb09c632B6EA58C035a851F73616"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:tusd-3pool","address":"0xAc5f019a302c4c8caAC0a7F28183ac62E6e80034"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PWRDMetapool","address":"0xbcb91E689114B9Cc865AD7871845C95241Df4105"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:fUSD-3pool","address":"0xC2F5FeA5197a3d92736500Fd7733Fcc7a3bBDf3F"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:TestPoolD","address":"0x705DA2596cf6aaA2FEA36f2a59985EC9e8aeC7E2"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DEI","address":"0x6870F9b4DD5d34C7FC53D0d85D9dBd1aAB339BF7"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:MIM-UST","address":"0x55A8a39bc9694714E2874c1ce77aa1E599461E18"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:SharedstakeETH/vETH2","address":"0xf03bD3cfE85f00bF5819AC20f0870cE8a8d1F0D8"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:QabbalahBitWellsprings","address":"0xC8781F2193e2CB861c9325677D98297F94a0dfd3"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:QBITWell","address":"0x9f4A88da14F2b6DBc785C1Db3511A53B8F342bde"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:BadgerLockedCVX","address":"0x04c90C198b2eFF55716079bc06d7CCc4aa4d7512"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:wormholev2UST-3Pool","address":"0xCEAF7747579696A2F0bb206a14210e3c9e6fB269"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DSU","address":"0x9fED7a930d86Dfe5980040E18C92B1B0d381eC19"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DSU","address":"0xf0C081020B9d06EB1b33e357767c00Ccc138bE7c"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:AnkrReward-EarningStakedETH","address":"0xFB9a265b5a1f52d97838Ec7274A0b1442efAcC87"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:d3pool","address":"0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:AnkrReward-EarningStakedMATIC","address":"0x1F6bb2a7a2A84d08bb821B89E38cA651175aeDd4"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PaxosDollar(USDP)","address":"0xc270b3B858c335B6BA5D5b10e2Da8a09976005ad"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:ibBTC","address":"0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:handleEUR","address":"0x8DF0713B2a047c45a0BEf21c3B309bcEF91afd34"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:Orkan","address":"0x148a88719bA0B34F16e0f5A7537DA73Bdc9C2A2A"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:agEUR","address":"0x45a8CC73EC100306af64AB2CcB7B12E70EC549A8"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ibZAR/ZARP","address":"0xcbD5cC53C5b846671C6434Ab301AD4d210c21184"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DYDX-3CRV","address":"0xE667c793513ecBD74Fb53Bb4b91fDae02BFC092D"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:3EURpool","address":"0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktWETH/WETH","address":"0x06d39e95977349431E3d800d49C63B4D472e10FB"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:SORAXSTUSD","address":"0x1033812EFeC8716BBaE0c19e5678698D25E26eDf"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xDollarInterverseMoney","address":"0x679CE2A8B3180f5a00e0DCCA26783016799e9A58"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xim","address":"0x6d8fF88973b15dF3e2dc6ABb9aF29Cad8C2B5Ef5"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:RAMPrUSD","address":"0x8083b047E962CA45B210E28aC755fbdA3D773c5B"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:Bhome","address":"0x3b22B869ba3c0a495Cead0B8A009b70886d37fAC"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:JPYC/ibJPY","address":"0xbB2dC673E1091abCA3eaDB622b18f6D4634b2CD9"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:UST-FRAX","address":"0x1c65bA665ce39cfe85639227eccf17Be2B167058"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:FeiPCV1","address":"0xa0D35fAead5299Bf18eFbB5dEfd1Ec6D4AB4Ef3B"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:bentCVX","address":"0xf083FBa98dED0f9C970e5a418500bad08D8b9732"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:dForce","address":"0x76264772707c8Bc24261516b560cBF3Cbe6F7819"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:agEUR/ibEUR","address":"0xB37D6c07482Bc11cd28a1f11f1a6ad7b66Dec933"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:tFRAX/FRAXTest","address":"0x694650a0B2866472c2EEA27827CE6253C1D13074"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:ELONXPOOL","address":"0x8ed10E4e307822b969BCDaffD49095235f6F892b"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:Bean","address":"0x3a70DfA7d2262988064A2D051dd47521E43c9BdD"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDV","address":"0x7abD51BbA7f9F6Ae87aC77e1eA1C5783adA56e5c"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PAR/USDC","address":"0x5b78b93Fa851c357586915c7bA7258b762eB1ba0"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:baoUSD","address":"0x0FaFaFD3C393ead5F5129cFC7e0E12367088c473"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:sUSDMetapool","address":"0xd05ce4AB1f4fb0C0e1b65ebE3Ed7F2dcFc6ccf20"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:AETHV1","address":"0x97aEB34ac6561146DD9cE191EFD5634F6465DeF4"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktGAMMA/GAMMA","address":"0x9462F2b3C9bEeA8afc334Cdb1D1382B072e494eA"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktSNX/SNX","address":"0x50B0D9171160d6EB8Aa39E090Da51E7e078E81c4"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:rETH/wstETH","address":"0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktAPW/APW","address":"0xCaf8703f8664731cEd11f63bB0570E53Ab4600A9"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktTCR/TCR","address":"0x01FE650EF2f8e2982295489AE6aDc1413bF6011F"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktFOX/FOX","address":"0xC250B22d15e43d95fBE27B12d98B6098f8493eaC"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktSUSHI/SUSHI","address":"0x0437ac6109e8A366A1F4816edF312A36952DB856"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktALCX/ALCX","address":"0x9001a452d39A8710D27ED5c2E10431C13F5Fba74"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktFXS/FXS","address":"0x961226B64AD373275130234145b96D100Dc0b655"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TestOnly","address":"0xe7E4366f6ED6aFd23e88154C00B532BDc0352333"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GOLD/BSD","address":"0x9809f2B973bDB056D24bC2b6571EA1f23dB4e861"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:DYDX/stkDYDX","address":"0x04EcD49246bf5143E43e2305136c46AeB6fAd400"},{"appName":"Curve","contractName":"Curve.fiFactoryBTCMetapool:pbtc","address":"0xC9467E453620f16b57a34a770C6bceBECe002587"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdFXS","address":"0x8c524635d52bd7b1Bd55E062303177a7d916C046"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdANGLE","address":"0x48fF31bBbD8Ab553Ebe7cBD84e1eA3dBa8f54957"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:dfxCAD/CADC","address":"0x9CA41a2DaB3CEE15308998868ca644e2e3be5C59"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:Bean-LUSD","address":"0xD652c40fBb3f06d6B58Cb9aa9CFF063eE63d465D"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:CurvesETH2-stETH","address":"0xd1011B637F979a5d9093Df1B32e7736c289024F5"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sETH2/stETH","address":"0xE95E4c2dAC312F31Dc605533D5A4d0aF42579308"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TriCRV","address":"0x6577b46a566aDe492ad551a315c04DE3Fbe3DbFa"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:fiat","address":"0xDB8Cc7eCeD700A4bfFdE98013760Ff31FF9408D8"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdCRV","address":"0x323b3a6e7a71c1b8C257606Ef0364D61df8AA525"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdCRV","address":"0xf7b55C3732aD8b2c2dA7c24f30A69f55c54FB717"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:mCRV-CRV","address":"0xF74bEc4bcf432A17470e9C4F71542f2677B9AF6a"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:FRAX/ARTH.usd","address":"0x5a59Fd6018186471727FAAeAE4e57890aBC49B08"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PUSd","address":"0xeb07FcD7A8627281845ba3aCbed24435802d4B52"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:PUSd","address":"0x8EE017541375F6Bcd802ba119bdDC94dad6911A1"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:CLeverCVX","address":"0xaa6a4f8DDcca7d3B9E7ad38C8338a2FCfdB1E713"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:CLeverCVX","address":"0x8c1de7a8F8852197B109Daf75A6fbB685C013315"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDD/3CRV","address":"0xe6b5CC1B4b47305c58392CE3D359B10282FC36Ea"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:stETHconcentrated","address":"0x828b154032950C8ff7CF8085D841723Db2696056"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:$Pc/ETH","address":"0x6F80b9543Dd5A0408F162Fe2A1675dB70A2cb77D"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:3CRVUST","address":"0xbf5D9DeCCCC762fA7B5eb9faC668c803D42D97b6"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:ApeUSD-FRAX","address":"0x1977870a4c18a728C19Dd4eB6542451DF06e0A4b"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:CPI2Pool","address":"0x07350D8c30D463179DE6A58764C21558DB66Dd9c"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:CPI2Pool","address":"0xC38cA214c7a82b1EE977232F045aFb6d425cfFf0"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:home","address":"0x5c6A6Cf9Ae657A73b98454D17986AF41fC7b44ee"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:Ubiquity3Pool","address":"0x9558b18f021FC3cBa1c9B777603829A42244818b"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:MBSCDeFi(USD)","address":"0xee60f4A3487c07b4570cCfFEF315401C4c5744c8"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:pxCVX/CVX","address":"0xF38a67dA7a3A12aA12A9981ae6a79C0fdDdd71aB"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:StaxFrax/TemplexLP+LP","address":"0xdaDfD00A2bBEb1abc4936b1644a3033e1B653228"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:WOMI/OMI","address":"0xeE98d56f60A5905CbB52348c8719B247DaFe60ec"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:OMI/USD","address":"0x8116E7c29f60FdacF3954891A038f845565EF5A0"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDS/3CRV","address":"0xdE495223F7cD7EE0cDe1AddbD6836046bBdf3ad3"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:dfxSGD/XSGD","address":"0x943b7e761f34866DA12c9b84C99888Fe2Ef607c5"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:yveCRV","address":"0x7E46fd8a30869aa9ed55af031067Df666EfE87da"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDi","address":"0x63594B2011a0F2616586Bf3EeF8096d42272F916"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:3CRV/lvUSD","address":"0x67C7f0a63BA70a2dAc69477B716551FC921aed00"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDDFRAXBP","address":"0x4606326b4Db89373F5377C316d3b0F6e55Bc6A20"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:sUSDFRAXBP","address":"0xe3c190c57b5959Ae62EfE3B6797058B76bA2f5eF"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:LUSDFRAXBP","address":"0x497CE58F34605B9944E6b15EcafE6b001206fd25"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:apeUSDFRAXBP","address":"0x04b727C7e246CA70d496ecF52E6b6280f3c8077D"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:alUSDFRAXBP","address":"0x2Ed1D3E7771D64feeD7AE8F25b4032c8dd2D0B99"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GUSDFRAXBP","address":"0x4e43151b78b5fbb16298C1161fcbF7531d5F8D93"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:BUSDFRAXBP","address":"0x8fdb0bB9365a46B145Db80D0B1C5C5e979C84190"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:MXNT","address":"0x50C8F34CEA0E65535fC2525B637ccd8a07c90896"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:EUROC","address":"0x642562115cf5A5e72Ab517E6448EC8b61843dac9"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:TUSDFRAXBP","address":"0x33baeDa08b8afACc4d3d07cf31d49FC1F1f3E893"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:EuroPool","address":"0xe7A3b38c39F97E977723bd1239C3470702568e7B"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:MATIC/FLEET","address":"0xD7C10449A6D134A9ed37e2922F8474EAc6E5c100"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:alUSDFRAXBP","address":"0xB30dA2376F63De30b42dC055C93fa474F31330A5"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:EuroPool","address":"0xF70c5c65CF6A28E7a4483F52511e5a29678e4fFD"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:GCD/USDP","address":"0x649c1B0e70A80210bcFB3C4eb5DDAd175B90BE4d"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:stETH/aETHb","address":"0x875DF0bA24ccD867f8217593ee27253280772A97"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdLFT","address":"0xC69b00366F07840fF939cc9fdF866C3dCCB10804"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:Bean","address":"0xc9C32cd16Bf7eFB85Ff14e0c8603cc90F6F2eE49"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:MAI+3pool","address":"0x48fcFFa86fb24bDEB45B5739F7Ced24095A7c8e8"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:MIMFRAXBP","address":"0xb3bC1833aC51aAcEA92acd551FBe1Ab7eDc59EdF"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:frxETH","address":"0x7c0316C925E12eBfC55e0f325794B43eaD425157"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:TokemaktMYC/MYC","address":"0x83D78bf3f861e898cCA47BD076b3839Ab5469d70"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:handleUSD","address":"0x0AaCe9b6c491d5cD9F80665A2fCc1af09e9CCf00"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xUSD1","address":"0x92Da88e2e6f96cC7c667Cd1367BD090ADF3c6053"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xUSD1","address":"0x85F102bE3a76165Be9668bE0bF36E906a488FD33"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xUSD1","address":"0x87872BE0c56Ef97156f2617b3083D22423Fc62E9"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xUSD1","address":"0xc5481720517e1B170CF1d19cEaaBE07c37896Eb2"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:xUSD1","address":"0x8b3138DF9aA1F60648C65C67D6Ff646BE305788B"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:agEUR/EUROC","address":"0xBA866791F98098df41C3187D4D5433be29215c79"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:agEUR/EUROC","address":"0xBa3436Fd341F2C8A928452Db3C5A3670d1d5Cc73"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:cbETH","address":"0x6e8d2b6Fb24117c675C2fABC524f28CC5D81f18a"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:aETH","address":"0xc22936D5ECE78C048D6E7fe5d9F77fb6cAA16Dbb"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDT/DAI","address":"0xb548E49Bb6f33A77885836723b73EF9C8dBC047B"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:USDT/DAI","address":"0x3DcC3AC50cB42F7e443d7F548DD2c48EDaa8f59a"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/GNO","address":"0x172A54Ba45783049216F90F85FE5E5f6BC1c08fe"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/GNO","address":"0xF08dBD81Fcc712004e6943454c83C52DE963cdEC"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdAPW","address":"0x6788f608CfE5CfCD02e6152eC79505341E0774be"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DOLA/FRAXBP","address":"0x9fE520E629A7F0deC773A3199BFE87620E5aeA74"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:pUSDFRAXBP","address":"0xb2111b55Edd1Cb5D2C18a6817e21D473FE0E5Ba1"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:pUSDFRAXBP","address":"0xC47EBd6c0f68fD5963005D28D0ba533750E5C11B"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:MAI+FRAXBP","address":"0x66E335622ad7a6C9c72c98dbfCCE684996a20Ef9"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:DOLA/FRAXBP","address":"0xE57180685E3348589E9521aa53Af0BCD497E884d"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:sdBPT","address":"0x9d259cA698746586107C234e9E9461d385ca1041"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ZARP","address":"0xa23d59fA2505638861525f8cB3005fec7bd37b5B"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:FraxEther","address":"0xCF95Ac3dAecDBf60152A16BDa8D8f8dB7d175B88"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GYEN/USDC","address":"0xB90A850A0802B9F281bAbEA836292AAdd1011972"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GYEN/USDC","address":"0x9d0De74dE698D1BA7273D09193EC20a1F6cb7d6a"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:GYEN/USDC","address":"0xEc4ACC9322FC4dc853e8f72631d2C95556C68Ec0"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:Pull","address":"0x3d675A52F5B572EB5c61FC5088203Ac9B16BFC70"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:yCRV","address":"0x0309A528bBa0394dC4A2Ce59123C52E317A54604"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:MAI/LUSD","address":"0xF8048E871dF466BD187078cb38CB914476319d33"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/REN","address":"0x04f0Fae3dD0A9904F797DeB15C3e523342112811"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/YFI","address":"0x0B049eB31878176b278ef84A66810d311353dc94"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/YFI","address":"0x5239063A86e1E251eE6FB3AB4fb67DEA3A8E1fd2"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:TPAY/ETH","address":"0x930792bd0fb4593063Ad2ee12E86d768bD8DF7a1"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:TPAY/ETH","address":"0xb5FC990637F15bE6420341845a64101b6bbE365D"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:TPAY/ETH","address":"0xabE43B60F8337818c21101AB78b5B216789e19DD"},{"appName":"Curve","contractName":"Curve.fiFactoryPlainPool:yCRV","address":"0x453D92C7d4263201C69aACfaf589Ed14202d83a4"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:pETH","address":"0x904bE3cE7249447167051f239c832400CA28De71"},{"appName":"Curve","contractName":"Curve.fiFactoryPool:pETH","address":"0x9848482da3Ee3076165ce6497eDA906E66bB85C5"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:matic/ETH","address":"0xDAB9EeEE607F7952680E9433787e4EdE244a8515"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ETH","address":"0x62CEc7899A9910E48F0dEeaB755429887b6e1979"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ETH","address":"0x00f93fBf00F97170B6cf295DC58888073CB5c2b8"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ETH","address":"0x982Da76F0ccF868B558BD46D7a3B58bC2662D7cc"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ETH","address":"0x578B27E257050B6011DfDCD69F67696eF24279FC"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:CRV/ETH","address":"0xB4698193bCBC49Be01Fcfc67C144eA4927166355"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:test","address":"0x26c5A2f9b97f4B5FC74B05944B3Bb1679d803709"},{"appName":"Curve","contractName":"Curve.fiFactoryUSDMetapool:US/3CRV","address":"0x188aBea43270791F96dC9209e239f7B79E61203B"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FXS/ETH","address":"0x03470B57B05089EE40c651dAC9E0387F1f3cb46f"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FXS/ETH","address":"0x6ec176b5449DD7C1a87CA8d97aceCC531C0Ca0d8"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FXS/ETH","address":"0x1667954F14F5b22c703116D8d806f988B1e09018"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FXS/ETH","address":"0x941Eb6F616114e4Ecaa85377945EA306002612FE"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BADGER/WBTC","address":"0x50f3752289e1456BfA505afd37B241bca23e685d"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:INV/DOLA","address":"0x99aF0326ab1c2A68c6712a5622c1Aa8e4b35Fd57"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/FRAX","address":"0xC68ffDdea3a77b456227B50EbFdCC3C33bc2a8a4"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/ETH","address":"0x96fb2AB514CA569A1486C50339533ca4637B338B"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:YFI/ETH","address":"0xC26b89A667578ec7b3f11b2F98d6Fd15C07C54ba"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:AAVE/palStkAAVE","address":"0x48536EC5233297C367fd0b6979B75d9270bB6B15"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DYDX/ETH","address":"0x8b0aFa4b63a3581b731dA9D79774a3eaE63B5ABD"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:SDT/ETH","address":"0xfB8814D005C5f32874391e888da6eB2fE7a27902"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CADC/USDC","address":"0xE07BDe9Eb53DEFfa979daE36882014B758111a78"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/agEUR","address":"0xB6d9b32407BfA562D9211acDba2631a46c850956"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RocketPoolrETH","address":"0x1dFF955CdDD55fba58Db3CD658F9E3E3C31851eb"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:PAR/USDC","address":"0xDaD60C5B748306BA5a0c9a3c3482A8D1153DAd2a"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DUCK/ETH","address":"0xd8C49617e6A2C7584Ddbeab652368ee84954BF5c"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BTRFLY/ETH","address":"0xF43b15Ab692fDe1F9c24a9FCE700AdCC809D5391"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:cvxFxs/Fxs","address":"0xd658A338613198204DCa1143Ac3F01A722b5d94A"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ALCX/ETH","address":"0xa498B08ca3C109e4EbC7Ff01422B6769EAEf16EF"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:OHM/ETH","address":"0x365901dB5Adb4c789801f19D5F1F46c574783aD6"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:OHM/ETH","address":"0x6ec38b3228251a0C5D491Faf66858e2E23d7728B"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:SILO/FRAX","address":"0x9a22CDB1CA1cdd2371cD5BB5199564C4E89465eb"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:GoldfinchFIDU/USDC","address":"0x80aa1a80a30055DAA084E599836532F3e58c95E2"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:MKR/ETH","address":"0x90Ce3285a9cce2D36149F12df2C1e357Af304A1D"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:AAVE/ETH","address":"0xbF9702efefe1303A61b7c944b5741b773DD930a7"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:COMP/ETH","address":"0x9C6751593A1424108F53E5ad6754940FEDAA5bC0"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibEUR/USDC","address":"0x1570af3dF649Fc74872c5B8F280A162a3bdD4EB6"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibAUD/USDC","address":"0x5b692073F141C31384faE55856CfB6CBfFE91E60"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibCHF/USDC","address":"0x6Df0D77F0496CE44e72D695943950D8641fcA5Cf"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibGBP/USDC","address":"0xAcCe4Fe9Ce2A6FE9af83e7CF321a3fF7675e0AB6"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibJPY/USDC","address":"0xEB0265938c1190Ab4E3E1f6583bC956dF47C0F93"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ibKRW/USDC","address":"0xef04f337fCB2ea220B6e8dB5eDbE2D774837581c"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ALUSD/BNT","address":"0x6b234F354edA8fAe082BE20DCf790Fd886B42340"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:Test","address":"0xA6B28989B81B2Fe4eC03fde324DE1A99ae4366E4"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:USDC/STG","address":"0x39567Db64F0b25Db2C35Fc7A4f60c3C5258e4654"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:USDC/STG","address":"0x751D3feFFed0890B76E9b86476CFEEAA1FcdA73D"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:STG/USDC","address":"0x3211C6cBeF1429da3D0d58494938299C92Ad5860"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:PAL/ETH","address":"0x75A6787C7EE60424358B449B539A8b774c9B4862"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:KP3R/ETH","address":"0x21410232B484136404911780bC32756D5d1a9Fa9"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:JZCMiners","address":"0x86Cf48e9735F84d3311141e8941b2494Fb4B8142"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:LFT/ETH","address":"0xfE4A08f22FE65759Ba91dB2E2CADa09B4415B0d7"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:eth/nfd","address":"0x7472764C28f843bA246F294C44DE9456911A3454"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:JPEG/ETH","address":"0x7E050cf658777cc1Da4a4508E79d71859044B60E"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CNC/ETH","address":"0x782115c863A05abF8795dF377D89AAd1AAdF4Dfa"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CNC/ETH","address":"0x838af967537350D2C44ABB8c010E49E32673ab94"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CADC/3CRV","address":"0x595146ED98c81Dde9bD23d0c2Ab5b807C7Fe2D9f"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:VNXAU/USDC","address":"0x62d1d9065b4C78964040b640ab404D86D8f68263"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FPI2Pool","address":"0xf861483fa7E511fbc37487D91B6FAa803aF5d37c"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:VIRTUE/ETH","address":"0xB2E113a6B8edeA086A44B1509013C4Fc69eC4bf0"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ETH/VIRTUE","address":"0xD0a1D2a9350824516ae8729b8311557BA7E55BFF"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CXD/ETH","address":"0x5D898FD41875b14c1781fb497AeCAb8E9B24dfC9"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CXD/USDC","address":"0x4535913573D299A6372ca43b90aA6Be1CF68f779"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:[Test]TestCTDL/wBTC","address":"0x3c42B0f384D2912661C940d46cfFE1CD10F1c66F"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:TRU/ETH","address":"0x7F787210c83012FCA364aE79aD8Fc26641c6fbE5"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:TOKE/ETH","address":"0xe0e970a99bc4F53804D8145beBBc7eBc9422Ba7F"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:PSL/ETH","address":"0xd434eaf67bbA1903F61CdD3EDE6700caC74a5fF2"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH","address":"0x6525e7E2E8450741Ab97BD3948BFa47878F83ec6"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH","address":"0x7D99469fB3A530136ec0Ab6981D64bc9fF81aD04"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH","address":"0xbfCa1a72edd92FFf61a8c88f61D4e64E99232b4b"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH/USDC","address":"0x7F2aF2c7BFDAD063fF01DcEc077a216d95A0A944"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bSTBL/DAI","address":"0xA148BD19E26Ff9604f6A608E22BFb7B772D0d1A3"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:pxCVX/CVX","address":"0xF3456E8061461e144b3f252E69DcD5b6070fdEE0"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH/DAI","address":"0xFD484A99d21CA118f22871134f467B1ca3F842Aa"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:UNBNK/ETH","address":"0x5114f86027d4c9a509Cba072B8135A171402C6d5"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:frETH/WETH","address":"0x6E77889Ff348A16547cABa3Ce011cB120Ed73bFc"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:aCRV/CRV","address":"0x95f3672a418230c5664b7154Dfce0ACfa7EEd68D"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:WETH/RAREPEPE","address":"0xEc1F6Df37B16432E520942Affe28149bAdc5bC5e"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:NAKAMOTOCARD","address":"0xfCE1B5447a3DB7e18352e8ae4bCD780029012383"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAREPEPE","address":"0xdDBDCEBb989B1ef804338d6c9a902f91c2738936"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:mxnt","address":"0x039FD59541b3989C7A1E9278431038B3B6BA5F43"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:MXNT/USDC","address":"0xc12A73c46D49Fa0d7433C90291BC8D1A9EAe7B23"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:Phanes","address":"0x9bFb082f2dd5d63907aFa33Dbb8F9c0BCd5C2333"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FLOAT/USDC","address":"0x840cBF6861137624E60380d5e915619885c5AA95"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BENT/FRAX","address":"0xd3301B7CAA76f932816a6Fc7Ef0b673238e217ad"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BENTCVX/FRAX","address":"0xB2E2536821521174a168eda7Be78a6c70ea6E5fA"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:APW/ETH","address":"0x316D2606cE036Ec0E69A11432A870a4ec66AdE96"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:APW/ETH","address":"0xC78d84Ee5D970227f988a2e2dC0A4a945163bCB9"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:MATIC/SHIB","address":"0xb2c248C0B0DB7d28dfa0123438B40Bb31FB8AA05"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:MATIC/FLEET","address":"0x799D141e83D88996C48B98A4f8EB3D96AB422DD3"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CTR/ETH","address":"0x383aD525211B8A1A9c13532CC021773052b2F4f8"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI","address":"0x79cB6a84FbEC1FE2d66B705a1e7f6482C2993049"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-2","address":"0x91d9d17EFD378f38a48122AE6Ec01B2E83d1Ac98"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0x118629329731ce1FF01f9401212C53939F8A9EEB"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test2","address":"0xBD917239EC067A6aF82AABb6B45DAd3d09F4EFD8"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BTRFLY/ETH","address":"0x6e314039f4C56000F4ebb3a7854A84cC6225Fb92"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-3","address":"0x337ca39842C448030196693f3433332fF1CF3E41"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/LUSD","address":"0x0d1c65B28190cB88f328D2051c524A5c63d10EB5"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/LUSD-2","address":"0x162B4Deefc73a5277b09Bd7A02D25Da73D66183D"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/LUSD-3","address":"0xc58fDB8A50AB921A73535656A7c69387Dd863ff6"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:FXSFPIS","address":"0xD4e2fdC354c5DFfb865798Ca98c2b9d5382F687C"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:cbETH/ETH","address":"0x5FAE7E604FC3e24fd43A72867ceBaC94c65b404A"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-4","address":"0x0CF8327b20a159f0CD99214c5305D49E9D8207F0"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:agEUR/FRAXBP","address":"0x58257e4291F95165184b4beA7793a1d6F8e7b627"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:cvxFxs/FraxBP","address":"0x21d158d95C2e150e144c36FC64E3653B8D6c6267"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:CVX/FraxBP","address":"0xBEc570d92AFB7fFc553bdD9d4B4638121000b10D"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ALCX/FraxBP","address":"0x4149d1038575CE235E03E03B39487a80FD709D31"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:cvxCrv/FraxBP","address":"0x31c325A01861c7dBd331a9270296a31296D797A0"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/FRAXBP","address":"0xd9f907f7F84CbB0Af85C7829922fd692339147f9"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:Pull","address":"0x75A1FdA374Fdb4E47d703d0282E94c87119fa46e"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:jpyusd","address":"0x611a95bf3cc0EF593f22c4E4D8EB4d6C937E006C"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BADGER/FRAXBP","address":"0x13B876C26Ad6d21cb87AE459EaF6d7A1b788A113"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ZARP/USDC","address":"0x4D19E7fD118FD751fEa7c0324D7E7b0A3D05EbA4"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BENT/FraxBP","address":"0x825722AF244432319C1E32b6b18AdED2d4A014Df"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bentCVX/FraxBP","address":"0x02dFA5C793A9CE4d767a86259245A162a57f2dB4"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ARTH/OHM","address":"0x27A8697fBD2ed137d88E74132a5558FA43656175"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BBLC/ETH","address":"0xC7a87b0f491C1A043eb5315281163556B7F36f7f"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/LUSD-4","address":"0x167dE3887eDEbE5012544373C5871481bD95Cc4e"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:ETH/FRAX","address":"0x1631D0E588D475CEe4be0f51b7410DaaAaBD7034"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:BombalaShares","address":"0x372463c1dFE3A9c269C2C5Eb76A86021C637D0f4"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-5","address":"0x5538e48bfe47749D2540D3cBe83fD50465bcb6c3"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-6","address":"0x5FBa071ad473265df860271998e45FDb3d3E5812"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/USDC","address":"0x96A3F551c99797998dC33E2D816D567db61EE1c2"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DUCK/USDP","address":"0xF039050dC36fD59Ff1117B14BFdFf92dFA9dE9Fc"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DUCK/3CRV","address":"0xb49B238aB6106216Dc26854ed3a009EAc1C419A9"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DUCK/USDT","address":"0xFEB0784F5D0940686143b3A025Af731Ee6A81197"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DCHF/3CRV","address":"0xDcb11E81C8B8a1e06BF4b50d4F6f3bb31f7478C3"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/DAI-7","address":"0xBCAA09F2873F87aB4bf3A6fE97991f4bCC959e7e"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DeFiFranc","address":"0x6d91A9Cf0deA0cd5BCb676eb4B1F11b6DCb44188"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:DeFiFranc","address":"0x7f87a8b46A662131b87D29B2316B2d9CBD7e3B02"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bll","address":"0xec5ffef96c3EdEdE587DB2efA3ab4Deec414cE8F"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bllc","address":"0x52F05C70d86662204C7222C35000747b177C393a"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0x0be1596aA8000Ff283807F276CED12c21297cf8f"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0x9685Aab3b578c55Ce206A312095Fc1fa73609E38"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0xB91eBF5f6a79a43927f7FA0548409c7821542d0C"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0x9D377ec646C10E99E08B5200F651f5a743E3EA78"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0xA0c7caD1D6dDb3EB2949243a0F720F4A291367Dd"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0xAE2029f60DBdf41D14c8c0290f2B68E164360419"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:RAI/Meta3Crv","address":"0xBE084cf7dB8fDfD6f17C041F958AbCcaF8C76603"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:test","address":"0x4885aAa80e0Ed42c5c76ACf523Adaf5066FD011F"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bll3","address":"0x141Be5d90C27Dc5C9199a57cb828Ca3CBD2C2D94"},{"appName":"Curve","contractName":"Curve.fiFactoryCryptoPool:bll3","address":"0xF4A3cca34470b5Ba21E2bb1eD365ACf68B4d4598"},{"appName":"Curve","contractName":"3Pool","address":"0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7"},{"appName":"Curve","contractName":"3Pool","address":"0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"},{"appName":"Curve","contractName":"AAVE","address":"0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900"},{"appName":"Curve","contractName":"AAVE","address":"0xDeBF20617708857ebe4F679508E7b7863a8A8EeE"},{"appName":"Curve","contractName":"ankrETH","address":"0xA96A65c051bF88B4095Ee1f2451C2A9d43F53Ae2"},{"appName":"Curve","contractName":"ankrETH","address":"0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf"},{"appName":"Curve","contractName":"BUSD","address":"0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27"},{"appName":"Curve","contractName":"BUSD","address":"0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB"},{"appName":"Curve","contractName":"BUSD","address":"0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B"},{"appName":"Curve","contractName":"Compound","address":"0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56"},{"appName":"Curve","contractName":"Compound","address":"0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06"},{"appName":"Curve","contractName":"Compound","address":"0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2"},{"appName":"Curve","contractName":"EURS","address":"0x0Ce6a5fF5217e38315f87032CF90686C96627CAA"},{"appName":"Curve","contractName":"EURS","address":"0x194eBd173F6cDacE046C53eACcE9B953F28411d1"},{"appName":"Curve","contractName":"hBTC","address":"0x4CA9b3063Ec5866A4B82E437059D2C43d1be596F"},{"appName":"Curve","contractName":"hBTC","address":"0xb19059ebb43466C323583928285a49f558E572Fd"},{"appName":"Curve","contractName":"IronBank","address":"0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF"},{"appName":"Curve","contractName":"IronBank","address":"0x5282a4eF67D9C33135340fB3289cc1711c13638C"},{"appName":"Curve","contractName":"Link","address":"0xF178C0b5Bb7e7aBF4e12A4838C7b7c5bA2C623c0"},{"appName":"Curve","contractName":"Link","address":"0xcee60cfa923170e4f8204ae08b4fa6a3f5656f3a"},{"appName":"Curve","contractName":"PAX","address":"0xA50cCc70b6a011CffDdf45057E39679379187287"},{"appName":"Curve","contractName":"PAX","address":"0x06364f10B501e868329afBc005b3492902d6C763"},{"appName":"Curve","contractName":"PAX","address":"0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8"},{"appName":"Curve","contractName":"renBTC","address":"0x93054188d876f558f4a66B2EF1d97d16eDf0895B"},{"appName":"Curve","contractName":"renBTC","address":"0x49849C98ae39Fff122806C06791Fa73784FB3675"},{"appName":"Curve","contractName":"rETH","address":"0xF9440930043eb3997fc70e1339dBb11F341de7A8"},{"appName":"Curve","contractName":"rETH","address":"0x53a901d48795C58f485cBB38df08FA96a24669D5"},{"appName":"Curve","contractName":"sAAVE","address":"0xEB16Ae0052ed37f479f7fe63849198Df1765a733"},{"appName":"Curve","contractName":"sAAVE","address":"0x02d341CcB60fAaf662bC0554d13778015d1b285C"},{"appName":"Curve","contractName":"sBTC","address":"0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714"},{"appName":"Curve","contractName":"sBTC","address":"0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3"},{"appName":"Curve","contractName":"sETH","address":"0xc5424B857f758E906013F3555Dad202e4bdB4567"},{"appName":"Curve","contractName":"sETH","address":"0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c"},{"appName":"Curve","contractName":"stETH","address":"0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"},{"appName":"Curve","contractName":"stETH","address":"0x06325440D014e39736583c165C2963BA99fAf14E"},{"appName":"Curve","contractName":"sUSD","address":"0xFCBa3E75865d2d561BE8D220616520c171F12851"},{"appName":"Curve","contractName":"sUSD","address":"0xA5407eAE9Ba41422680e2e00537571bcC53efBfD"},{"appName":"Curve","contractName":"sUSD","address":"0xC25a3A3b969415c80451098fa907EC722572917F"},{"appName":"Curve","contractName":"TriCrypto","address":"0x80466c64868E1ab14a1Ddf27A676C3fcBE638Fe5"},{"appName":"Curve","contractName":"TriCrypto","address":"0x331aF2E331bd619DefAa5DAc6c038f53FCF9F785"},{"appName":"Curve","contractName":"TriCrypto","address":"0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF"},{"appName":"Curve","contractName":"USDT","address":"0xac795D2c97e60DF6a99ff1c814727302fD747a80"},{"appName":"Curve","contractName":"USDT","address":"0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C"},{"appName":"Curve","contractName":"USDT","address":"0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23"},{"appName":"Curve","contractName":"Y","address":"0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3"},{"appName":"Curve","contractName":"Y","address":"0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51"},{"appName":"Curve","contractName":"Y","address":"0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8"},{"appName":"Curve","contractName":"Yv2","address":"0x8925D9d9B4569D737a48499DeF3f67BaA5a144b9"},{"appName":"Curve","contractName":"Yv2","address":"0x571FF5b7b346F706aa48d696a9a4a288e9Bb4091"},{"appName":"Curve","contractName":"bBTC","address":"0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b"},{"appName":"Curve","contractName":"bBTC","address":"0xC45b2EEe6e09cA176Ca3bB5f7eEe7C47bF93c756"},{"appName":"Curve","contractName":"bBTC","address":"0x410e3E86ef427e30B9235497143881f717d93c2A"},{"appName":"Curve","contractName":"DUSD","address":"0x61E10659fe3aa93d036d099405224E4Ac24996d0"},{"appName":"Curve","contractName":"DUSD","address":"0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c"},{"appName":"Curve","contractName":"DUSD","address":"0x3a664Ab939FD8482048609f652f9a0B0677337B9"},{"appName":"Curve","contractName":"GUSD","address":"0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956"},{"appName":"Curve","contractName":"GUSD","address":"0x64448B78561690B70E17CBE8029a3e5c1bB7136e"},{"appName":"Curve","contractName":"GUSD","address":"0xD2967f45c4f384DEEa880F807Be904762a3DeA07"},{"appName":"Curve","contractName":"HUSD","address":"0x09672362833d8f703D5395ef3252D4Bfa51c15ca"},{"appName":"Curve","contractName":"HUSD","address":"0x3eF6A01A0f81D6046290f3e2A8c5b843e738E604"},{"appName":"Curve","contractName":"HUSD","address":"0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858"},{"appName":"Curve","contractName":"LinkUSD","address":"0x1de7f0866e2c4adAC7b457c58Cc25c8688CDa1f2"},{"appName":"Curve","contractName":"LinkUSD","address":"0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171"},{"appName":"Curve","contractName":"LinkUSD","address":"0x6D65b498cb23deAba52db31c93Da9BFFb340FB8F"},{"appName":"Curve","contractName":"MUSD","address":"0x803A2B40c5a9BB2B86DD630B274Fa2A9202874C2"},{"appName":"Curve","contractName":"MUSD","address":"0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6"},{"appName":"Curve","contractName":"MUSD","address":"0x1AEf73d49Dedc4b1778d0706583995958Dc862e6"},{"appName":"Curve","contractName":"oBTC","address":"0xd5BCf53e2C81e1991570f33Fa881c49EEa570C8D"},{"appName":"Curve","contractName":"oBTC","address":"0xd81dA8D904b52208541Bade1bD6595D8a251F8dd"},{"appName":"Curve","contractName":"oBTC","address":"0x2fE94ea3d5d4a175184081439753DE15AeF9d614"},{"appName":"Curve","contractName":"pBTC","address":"0x11F419AdAbbFF8d595E7d5b223eee3863Bb3902C"},{"appName":"Curve","contractName":"pBTC","address":"0x7F55DDe206dbAD629C080068923b36fe9D6bDBeF"},{"appName":"Curve","contractName":"pBTC","address":"0xDE5331AC4B3630f94853Ff322B66407e0D6331E8"},{"appName":"Curve","contractName":"RSV","address":"0xBE175115BF33E12348ff77CcfEE4726866A0Fbd5"},{"appName":"Curve","contractName":"RSV","address":"0xC18cC39da8b11dA8c3541C598eE022258F9744da"},{"appName":"Curve","contractName":"RSV","address":"0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35"},{"appName":"Curve","contractName":"tBTC","address":"0xaa82ca713D94bBA7A89CEAB55314F9EfFEdDc78c"},{"appName":"Curve","contractName":"tBTC","address":"0xC25099792E9349C7DD09759744ea681C7de2cb66"},{"appName":"Curve","contractName":"tBTC","address":"0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd"},{"appName":"Curve","contractName":"USDK","address":"0xF1f85a74AD6c64315F85af52d3d46bF715236ADc"},{"appName":"Curve","contractName":"USDK","address":"0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb"},{"appName":"Curve","contractName":"USDK","address":"0x97E2768e8E73511cA874545DC5Ff8067eB19B787"},{"appName":"Curve","contractName":"USDN","address":"0x094d12e5b541784701FD8d65F11fc0598FBC6332"},{"appName":"Curve","contractName":"USDN","address":"0x0f9cb53Ebe405d49A0bbdBD291A65Ff571bC83e1"},{"appName":"Curve","contractName":"USDN","address":"0x4f3E8F405CF5aFC05D68142F3783bDfE13811522"},{"appName":"Curve","contractName":"USDP","address":"0x3c8cAee4E09296800f8D29A68Fa3837e2dae4940"},{"appName":"Curve","contractName":"USDP","address":"0x42d7025938bEc20B69cBae5A77421082407f053A"},{"appName":"Curve","contractName":"USDP","address":"0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6"},{"appName":"Curve","contractName":"UST","address":"0xB0a0716841F2Fc03fbA72A891B8Bb13584F52F2d"},{"appName":"Curve","contractName":"UST","address":"0x890f4e345B1dAED0367A877a1612f86A1f86985f"},{"appName":"Curve","contractName":"UST","address":"0x94e131324b6054c0D789b190b2dAC504e4361b53"},{"appName":"Curve","contractName":"3pool","address":"0xbFcF63294aD7105dEa65aA58F8AE5BE2D9d0952A"},{"appName":"Curve","contractName":"AAVE","address":"0xd662908ADA2Ea1916B3318327A97eB18aD588b5d"},{"appName":"Curve","contractName":"alUSD","address":"0x9582C4ADACB3BCE56Fea3e590F05c3ca2fb9C477"},{"appName":"Curve","contractName":"ankrETH","address":"0x6d10ed2cF043E6fcf51A0e7b4C2Af3Fa06695707"},{"appName":"Curve","contractName":"bBTC","address":"0xdFc7AdFa664b08767b735dE28f9E84cd30492aeE"},{"appName":"Curve","contractName":"BUSD","address":"0x69Fb7c45726cfE2baDeE8317005d3F94bE838840"},{"appName":"Curve","contractName":"Compound","address":"0x7ca5b0a2910B33e9759DC7dDB0413949071D7575"},{"appName":"Curve","contractName":"DUSD","address":"0xAEA6c312f4b3E04D752946d329693F7293bC2e6D"},{"appName":"Curve","contractName":"EURS","address":"0x90Bb609649E0451E5aD952683D64BD2d1f245840"},{"appName":"Curve","contractName":"FRAX","address":"0x72e158d38dbd50a483501c24f792bdaaa3e7d55c"},{"appName":"Curve","contractName":"GUSD","address":"0xC5cfaDA84E902aD92DD40194f0883ad49639b023"},{"appName":"Curve","contractName":"hBTC","address":"0x4c18E409Dc8619bFb6a1cB56D114C3f592E0aE79"},{"appName":"Curve","contractName":"HUSD","address":"0x2db0E83599a91b508Ac268a6197b8B14F5e72840"},{"appName":"Curve","contractName":"MUSD","address":"0x5f626c30EC1215f4EdCc9982265E8b1F411D1352"},{"appName":"Curve","contractName":"oBTC","address":"0x11137B10C210b579405c21A07489e28F3c040AB1"},{"appName":"Curve","contractName":"PAX","address":"0x64E3C23bfc40722d3B649844055F1D51c1ac041d"},{"appName":"Curve","contractName":"IronBank","address":"0xF5194c3325202F456c95c1Cf0cA36f8475C1949F"},{"appName":"Curve","contractName":"Link","address":"0xFD4D8a17df4C27c1dD245d153ccf4499e806C87D"},{"appName":"Curve","contractName":"pBTC","address":"0xd7d147c6Bb90A718c3De8C0568F9B560C79fa416"},{"appName":"Curve","contractName":"renBTC","address":"0xB1F2cdeC61db658F091671F5f199635aEF202CAC"},{"appName":"Curve","contractName":"RSV","address":"0x4dC4A289a8E33600D8bD4cf5F6313E43a37adec7"},{"appName":"Curve","contractName":"sAAVE","address":"0x462253b8F74B72304c145DB0e4Eebd326B22ca39"},{"appName":"Curve","contractName":"sBTC","address":"0x705350c4BcD35c9441419DdD5d2f097d7a55410F"},{"appName":"Curve","contractName":"sETH","address":"0x3C0FFFF15EA30C35d7A85B85c0782D6c94e1d238"},{"appName":"Curve","contractName":"stETH","address":"0x182B723a58739a9c974cFDB385ceaDb237453c28"},{"appName":"Curve","contractName":"sUSDv2","address":"0xA90996896660DEcC6E997655E065b23788857849"},{"appName":"Curve","contractName":"rETH","address":"0x824F13f1a2F29cFEEa81154b46C0fc820677A637"},{"appName":"Curve","contractName":"tBTC","address":"0x6828bcF74279eE32f2723eC536c22c51Eed383C6"},{"appName":"Curve","contractName":"TriCrypto","address":"0x6955a55416a06839309018A8B0cB72c4DDC11f15"},{"appName":"Curve","contractName":"USDK","address":"0xC2b1DF84112619D190193E48148000e3990Bf627"},{"appName":"Curve","contractName":"USDN","address":"0xF98450B5602fa59CC66e1379DFfB6FDDc724CfC4"},{"appName":"Curve","contractName":"USDP","address":"0x055be5DDB7A925BfEF3417FC157f53CA77cA7222"},{"appName":"Curve","contractName":"USDT","address":"0xBC89cd85491d81C6AD2954E6d0362Ee29fCa8F53"},{"appName":"Curve","contractName":"UST","address":"0x3B7020743Bc2A4ca9EaF9D0722d42E20d6935855"},{"appName":"Curve","contractName":"Y","address":"0xFA712EE4788C042e2B7BB55E6cb8ec569C4530c1"},{"appName":"Curve","contractName":"Yv2","address":"0x8101E6760130be2C8Ace79643AB73500571b7162"},{"appName":"Curve","contractName":"CRVToken","address":"0xD533a949740bb3306d119CC777fa900bA034cd52"},{"appName":"Curve","contractName":"FeeDistributor","address":"0xA464e6DCda8AC41e03616F95f4BC98a13b8922Dc"},{"appName":"Curve","contractName":"GaugeController","address":"0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB"},{"appName":"Curve","contractName":"Minter","address":"0xd061D61a4d941c39E5453435B6345Dc261C2fcE0"},{"appName":"Curve","contractName":"VotingEscrow","address":"0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2"},{"appName":"Curve","contractName":"VestingEscrow","address":"0x575ccd8e2d300e2377b43478339e364000318e2c"},{"appName":"Curve","contractName":"GaugeOwner","address":"0x519AFB566c05E00cfB9af73496D00217A630e4D5"},{"appName":"Curve","contractName":"PoolOwner","address":"0xeCb456EA5365865EbAb8a2661B0c503410e9B347"},{"appName":"Curve","contractName":"CryptoPoolOwner","address":"0x3687367CcAEBBE89f1bc8Eae7592b4Eed44Ac0Bd"},{"appName":"Curve","contractName":"FactoryPoolOwner","address":"0x8cf8af108b3b46ddc6ad596aebb917e053f0d72b"},{"appName":"Curve","contractName":"Ownership","address":"0xE478de485ad2fe566d49342Cbd03E49ed7DB3356"},{"appName":"Curve","contractName":"Parameter","address":"0xBCfF8B0b9419b9A88c44546519b1e909cF330399"},{"appName":"Curve","contractName":"Emergency","address":"0x1115c9b3168563354137cDc60efb66552dd50678"},{"appName":"Curve","contractName":"Ownership","address":"0x40907540d8a6c65c637785e8f8b742ae6b0b9968"},{"appName":"Curve","contractName":"Parameter","address":"0x4eeb3ba4f221ca16ed4a0cc7254e2e32df948c5f"},{"appName":"Curve","contractName":"Emergency","address":"0x00669DF67E4827FCc0E48A1838a8d5AB79281909"},{"appName":"Curve","contractName":"Ownership/Parameter","address":"0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2"},{"appName":"Curve","contractName":"Emergency","address":"0x4c0947B16FB1f755A2D32EC21A0c4181f711C500"},{"appName":"Curve","contractName":"ABurner","address":"0x12220a63a2013133d54558c9d03c35288eac9b34"},{"appName":"Curve","contractName":"CryptoLPBurner","address":"0x0B5B9210d5015fD0c97FB19B32675b19703b0453"},{"appName":"Curve","contractName":"CBurner","address":"0xdd0e10857d952c73b2fa39ce86308299df8774b8"},{"appName":"Curve","contractName":"LPBurner","address":"0xaa42C0CD9645A58dfeB699cCAeFBD30f19B1ff81"},{"appName":"Curve","contractName":"MetaBurner","address":"0xE4b65889469ad896e866331f0AB5652C1EcfB3E6"},{"appName":"Curve","contractName":"SynthBurner","address":"0x67a0213310202DBc2cbE788f4349B72fbA90f9Fa"},{"appName":"Curve","contractName":"USDNBurner","address":"0x06534b0BF7Ff378F162d4F348390BDA53b15fA35"},{"appName":"Curve","contractName":"UnderlyingBurner","address":"0x786b374b5eef874279f4b7b4de16940e57301a58"},{"appName":"Curve","contractName":"UniswapBurner","address":"0xf3b64840b39121b40d8685f1576b64c157ce2e24"},{"appName":"Curve","contractName":"YBurner","address":"0xd16ea3e5681234da84419512eb597362135cd8c9"},{"appName":"Curve","contractName":"AddressProvider","address":"0x0000000022d53366457f9d5e68ec105046fc4383"},{"appName":"Curve","contractName":"CurveCalculator","address":"0xc1DB00a8E5Ef7bfa476395cdbcc98235477cDE4E"},{"appName":"Curve","contractName":"PoolInfo","address":"0xe64608E223433E8a03a1DaaeFD8Cb638C14B552C"},{"appName":"Curve","contractName":"Registry","address":"0x90E00ACe148ca3b23Ac1bC8C240C2a7Dd9c2d7f5"},{"appName":"Curve","contractName":"Factory","address":"0xB9fC157394Af804a3578134A6585C0dc9cc990d4"},{"appName":"Curve","contractName":"Migrator","address":"0xd6930b7f661257DA36F93160149b031735237594"},{"appName":"Curve","contractName":"3pool","address":"0x5F890841f657d90E081bAbdB532A05996Af79Fe6"},{"appName":"Curve","contractName":"sBTC","address":"0x2f956eee002b0debd468cf2e0490d1aec65e027f"},{"appName":"Curve","contractName":"3poolDepositZap","address":"0xA79828DF1850E8a3A3064576f380D90aECDD3359"},{"appName":"Curve","contractName":"sBTCDepositZap","address":"0x7AbDBAf29929e7F8621B757D2a7c04d78d633834"},{"appName":"Curve","contractName":"alUSD","address":"0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c"},{"appName":"Curve","contractName":"FRAX","address":"0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B"},{"appName":"Curve","contractName":"Booster(maindepositcontract)","address":"0xF403C135812408BFbE8713b5A23a04b3D48AAE31"},{"appName":"Curve","contractName":"BoosterOwner","address":"0x3cE6408F923326f81A7D7929952947748180f1E6"},{"appName":"Curve","contractName":"VoterProxy(whitelistcontract)","address":"0x989AEb4d175e16225E39E87d0D97A3360524AD80"},{"appName":"Curve","contractName":"Multisig","address":"0xa3C5A1e09150B75ff251c1a7815A07182c3de2FB"},{"appName":"Curve","contractName":"Deployer","address":"0x947B7742C403f20e5FaCcDAc5E092C943E7D0277"},{"appName":"Curve","contractName":"CVX","address":"0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B"},{"appName":"Curve","contractName":"cvxCRV","address":"0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7"},{"appName":"Curve","contractName":"CRVDepositor","address":"0x8014595F2AB54cD7c604B00E9fb932176fDc86Ae"},{"appName":"Curve","contractName":"RewardFactory","address":"0xEdCCB35798fae4925718A43cc608aE136208aa8D"},{"appName":"Curve","contractName":"TokenFactory","address":"0x3c995e43E6ddD551E226F4c5544C77BfeD147aB9"},{"appName":"Curve","contractName":"StashFactory","address":"0x877288c4e6EbA4f635bA7428706447353B47De75"},{"appName":"Curve","contractName":"CVXRewards","address":"0xCF50b810E57Ac33B91dCF525C6ddd9881B139332"},{"appName":"Curve","contractName":"cvxCRVRewards","address":"0x3Fe65692bfCD0e6CF84cB1E7d24108E434A7587e"},{"appName":"Curve","contractName":"PoolManager","address":"0xD1f9b3de42420A295C33c07aa5C9e04eDC6a4447"},{"appName":"Curve","contractName":"PoolManagerProxy","address":"0x5F47010F230cE1568BeA53a06eBAF528D05c5c1B"},{"appName":"Curve","contractName":"PoolManagerSecondaryProxy","address":"0xD20904e5916113D11414F083229e9C8C6F91D1e1"},{"appName":"Curve","contractName":"ArbitratorVault","address":"0x25E12482a25CF36EC70fDA2A09C1ED077Fc21616"},{"appName":"Curve","contractName":"ConvexMasterChef","address":"0x5F465e9fcfFc217c5849906216581a657cd60605"},{"appName":"Curve","contractName":"VestedEscrow","address":"0xe98984aD858075813AdA4261aF47e68A64E28fCC"},{"appName":"Curve","contractName":"AirdropFactory","address":"0xa1Bc2Cf69D474b39B91665e24E7f2606Ed142991"},{"appName":"Curve","contractName":"Airdrop","address":"0x2E088A0A19dda628B4304301d1EA70b114e4AcCd"},{"appName":"Curve","contractName":"ClaimZapOLD","address":"0x92Cf9E5e4D1Dfbf7dA0d2BB3e884a68416a65070"},{"appName":"Curve","contractName":"ClaimZap","address":"0xDd49A93FDcae579AE50B4b9923325e9e335ec82B"},{"appName":"Curve","contractName":"CVX/ETHSLP","address":"0x05767d9EF41dC40689678fFca0608878fb3dE906"},{"appName":"Curve","contractName":"cvxCRV/CRVSLP","address":"0x33F6DDAEa2a8a54062E021873bCaEE006CdF4007"},{"appName":"Curve","contractName":"TreasuryVault","address":"0x1389388d01708118b497f59521f6943Be2541bb7"},{"appName":"Curve","contractName":"CVXLocker(vlCVX)OLD","address":"0xD18140b4B819b895A3dba5442F959fA44994AF50"},{"appName":"Curve","contractName":"CVXLocker(vlCVX)","address":"0x72a19342e8F1838460eBFCCEf09F6585e32db86E"},{"appName":"Curve","contractName":"CVXStakingProxy","address":"0xb5BBC863BAFE5006c68613B89130812a7b586A4e"},{"appName":"Curve","contractName":"vlcvxExtraRewardsOLD","address":"0xDecc7d761496d30F30b92Bdf764fb8803c79360D"},{"appName":"Curve","contractName":"vlcvxExtraRewards","address":"0x9B622f2c40b80EF5efb14c2B2239511FfBFaB702"},{"appName":"Curve","contractName":"Booster","address":"0xA2cF21b157b2f203e37b616b619f438B5aa86Ee5"},{"appName":"Curve","contractName":"VoterProxy","address":"0x59CFCD384746ec3035299D90782Be065e466800B"},{"appName":"Curve","contractName":"cvxFXS","address":"0xFEEf77d3f69374f66429C91d732A244f074bdf74"},{"appName":"Curve","contractName":"fxsDepositor","address":"0x8f55d7c21bDFf1A51AFAa60f3De7590222A3181e"}]'
        ),
        A = JSON.parse(
          '[{"appName":"Compound","contractName":"FEI","address":"0x956F47F50A910163D8BF957Cf5846D573E7f87CA"},{"appName":"Compound","contractName":"FEIDelegate","address":"0xa035b9e130F2B1AedC733eEFb1C67Ba4c503491F"},{"appName":"Compound","contractName":"cFEI","address":"0x7713DD9Ca933848F6819F38B8352D9A15EA73F67"},{"appName":"Compound","contractName":"USDP","address":"0x8e870d67f660d95d5be530380d0ec0bd388289e1"},{"appName":"Compound","contractName":"cUSDPDelegate","address":"0xa035b9e130f2b1aedc733eefb1c67ba4c503491f"},{"appName":"Compound","contractName":"cUSDP","address":"0x041171993284df560249b57358f931d9eb7b925d"},{"appName":"Compound","contractName":"Proposal72PriceFeed","address":"0x046728da7cb8272284238bd3e47909823d63a58d"},{"appName":"Compound","contractName":"AAVE","address":"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"},{"appName":"Compound","contractName":"cAAVEDelegate","address":"0xa035b9e130f2b1aedc733eefb1c67ba4c503491f"},{"appName":"Compound","contractName":"cAAVE","address":"0xe65cdb6479bac1e22340e4e755fae7e509ecd06c"},{"appName":"Compound","contractName":"SUSHI","address":"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"},{"appName":"Compound","contractName":"cSUSHIDelegate","address":"0xa035b9e130f2b1aedc733eefb1c67ba4c503491f"},{"appName":"Compound","contractName":"cSUSHI","address":"0x4b0181102a0112a2ef11abee5563bb4a3176c9d7"},{"appName":"Compound","contractName":"YFI","address":"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"},{"appName":"Compound","contractName":"cYFIDelegate","address":"0xa035b9e130f2b1aedc733eefb1c67ba4c503491f"},{"appName":"Compound","contractName":"cYFI","address":"0x80a2ae356fc9ef4305676f7a3e2ed04e12c33946"},{"appName":"Compound","contractName":"cTUSDDelegate","address":"0xce526fa199d2f772abbc5b40b3284cdab1b8e6de"},{"appName":"Compound","contractName":"cTUSD","address":"0x12392f67bdf24fae0af363c24ac620a2f67dad86"},{"appName":"Compound","contractName":"cLINKDelegate","address":"0x24aa720906378bb8364228bddb8cabbc1f6fe1ba"},{"appName":"Compound","contractName":"cLINK","address":"0xface851a4921ce59e912d19329929ce6da6eb0c7"},{"appName":"Compound","contractName":"GovernorBravo","address":"0xc0da02939e1441f497fd74f78ce7decb17b66529"},{"appName":"Compound","contractName":"cWBTC2Delegate","address":"0x24aa720906378bb8364228bddb8cabbc1f6fe1ba"},{"appName":"Compound","contractName":"cWBTC2","address":"0xccF4429DB6322D5C611ee964527D42E5d685DD6a"},{"appName":"Compound","contractName":"wbtc2_irm","address":"0xF2e5dB36B0682f2CD6bC805c3a4236194e01f4D5"},{"appName":"Compound","contractName":"IRM_COMP_Updateable","address":"0xd956188795ca6F4A74092ddca33E0Ea4cA3a1395"},{"appName":"Compound","contractName":"cCOMPDelegate","address":"0x338f7e5d19d9953b76dd81446b142c2d9fe03482"},{"appName":"Compound","contractName":"cCOMP","address":"0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4"},{"appName":"Compound","contractName":"ZRX","address":"0xE41d2489571d322189246DaFA5ebDe1F4699F498"},{"appName":"Compound","contractName":"cUSDC","address":"0x39AA39c021dfbaE8faC545936693aC917d5E7563"},{"appName":"Compound","contractName":"PriceOracle","address":"0x02557a5e05defeffd4cae6d83ea3d173b272c904"},{"appName":"Compound","contractName":"PriceOracleProxy","address":"0xDDc46a3B076aec7ab3Fc37420A8eDd2959764Ec4"},{"appName":"Compound","contractName":"Maximillion","address":"0xf859A1AD94BcF445A406B892eF0d3082f4174088"},{"appName":"Compound","contractName":"Base200bps_Slope2000bps_Jump20000bps_Kink90","address":"0x6bc8fE27D0c7207733656595e73c0D5Cf7AfaE36"},{"appName":"Compound","contractName":"GovernorAlpha","address":"0xc0dA01a04C3f3E0be433606045bB7017A7323E38"},{"appName":"Compound","contractName":"cDAI","address":"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"},{"appName":"Compound","contractName":"CompoundLens","address":"0xdCbDb7306c6Ff46f77B349188dC18cEd9DF30299"},{"appName":"Compound","contractName":"DAI","address":"0x6B175474E89094C44Da98b954EedeAC495271d0F"},{"appName":"Compound","contractName":"StdComptroller","address":"0x62F18C451af964197341d3c86D27e98C41BB8fcC"},{"appName":"Compound","contractName":"Poster","address":"0x3c6809319201b978d821190ba03fa19a3523bd96"},{"appName":"Compound","contractName":"Unitroller","address":"0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"},{"appName":"Compound","contractName":"USDT","address":"0xdAC17F958D2ee523a2206206994597C13D831ec7"},{"appName":"Compound","contractName":"Reservoir","address":"0x2775b1c75658Be0F640272CCb8c72ac986009e38"},{"appName":"Compound","contractName":"Comptroller","address":"0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"},{"appName":"Compound","contractName":"COMP","address":"0xc00e94Cb662C3520282E6f5717214004A7f26888"},{"appName":"Compound","contractName":"cUSDT","address":"0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9"},{"appName":"Compound","contractName":"cBAT","address":"0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E"},{"appName":"Compound","contractName":"Base500bps_Slope1500bps","address":"0xd928c8ead620bb316d2cefe3caf81dc2dec6ff63"},{"appName":"Compound","contractName":"DSR_Kink_9000bps_Jump_12000bps_AssumedRF_500bps","address":"0xec163986cC9a6593D6AdDcBFf5509430D348030F"},{"appName":"Compound","contractName":"DSR_Updateable","address":"0xfeD941d39905B23D6FAf02C8301d40bD4834E27F"},{"appName":"Compound","contractName":"Base0bps_Slope2000bps","address":"0xc64C4cBA055eFA614CE01F4BAD8A9F519C4f8FaB"},{"appName":"Compound","contractName":"BAT","address":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF"},{"appName":"Compound","contractName":"StdComptroller_2_6","address":"0x97BD4Cc841FC999194174cd1803C543247a014fe"},{"appName":"Compound","contractName":"Base200bps_Slope1000bps","address":"0x0c3f8df27e1a00b47653fde878d68d35f00714c0"},{"appName":"Compound","contractName":"cETH","address":"0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5"},{"appName":"Compound","contractName":"cDaiDelegate","address":"0xbB8bE4772fAA655C255309afc3c5207aA7b896Fd"},{"appName":"Compound","contractName":"cUsdtDelegate","address":"0x976aa93ca5Aaa569109f4267589c619a097f001D"},{"appName":"Compound","contractName":"cUniDelegate","address":"0x338f7e5d19d9953b76dd81446b142c2d9fe03482"},{"appName":"Compound","contractName":"UNI","address":"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},{"appName":"Compound","contractName":"cUNI","address":"0x35a18000230da775cac24873d00ff85bccded550"},{"appName":"Compound","contractName":"StdComptrollerG2","address":"0xf592eF673057a451c49c9433E278c5d59b56132c"},{"appName":"Compound","contractName":"DSR_Kink_9000bps_Jump_12000bps_AssumedRF_20000bps","address":"0x000000007675b5E1dA008f037A0800B309e0C493"},{"appName":"Compound","contractName":"Base500bps_Slope1200bps","address":"0xa1046abfc2598F48C44Fb320d281d3F3c0733c9a"},{"appName":"Compound","contractName":"cSAI","address":"0xF5DCe57282A584D2746FaF1593d3121Fcac444dC"},{"appName":"Compound","contractName":"StdComptrollerG3","address":"0x9D0a0443FF4bB04391655B8cD205683d9fA75550"},{"appName":"Compound","contractName":"Timelock","address":"0x6d903f6003cca6255D85CcA4D3B5E5146dC33925"},{"appName":"Compound","contractName":"Base200bps_Slope3000bps","address":"0xBAE04CbF96391086dC643e842b517734E214D698"},{"appName":"Compound","contractName":"StdComptrollerG4","address":"0xAf601CbFF871d0BE62D18F79C31e387c76fa0374"},{"appName":"Compound","contractName":"StdComptrollerG5","address":"0x7b5e3521a049C8fF88e6349f33044c6Cc33c113c"},{"appName":"Compound","contractName":"cREP","address":"0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1"},{"appName":"Compound","contractName":"Base200bps_Slope2000bps_Jump8000bps_Kink90","address":"0x40C0C2c565335fa9C4235aC8E1CbFE2c97BAC13A"},{"appName":"Compound","contractName":"WBTC","address":"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"},{"appName":"Compound","contractName":"Base200bps_Slope222bps_Kink90_Jump40","address":"0x5562024784cc914069d67D89a28e3201bF7b57E7"},{"appName":"Compound","contractName":"SAI","address":"0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"},{"appName":"Compound","contractName":"REP","address":"0x1985365e9f78359a9B6AD760e32412f4a445E862"},{"appName":"Compound","contractName":"cZRX","address":"0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407"},{"appName":"Compound","contractName":"cWBTC","address":"0xC11b1268C1A384e55C48c2391d8d480264A3A7F4"},{"appName":"Compound","contractName":"USDC","address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{"appName":"Compound","contractName":"PriceData","address":"0xc629c26dced4277419cde234012f8160a0278a79"},{"appName":"Compound","contractName":"PriceFeed","address":"0x6D2299C48a8dD07a872FDd0F8233924872Ad1071"},{"appName":"Compound","contractName":"KNC","address":"0xdd974d5c2e2928dea5f71b9825b8b646686bd200"},{"appName":"Compound","contractName":"LINK","address":"0x514910771af9ca656af840dff83e8264ecf986ca"},{"appName":"Compound","contractName":"TUSD","address":"0x0000000000085d4780B73119b644AE5ecd22b376"},{"appName":"Compound","contractName":"cMKR","address":"0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b"},{"appName":"Compound","contractName":"cMKRDelegate","address":"0xa035b9e130f2b1aedc733eefb1c67ba4c503491f"},{"appName":"Compound","contractName":"MKR","address":"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"},{"appName":"Compound","contractName":"Uniswap","address":"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"},{"appName":"Compound","contractName":"Pair_ETH_ZRX","address":"0xc6f348dd3b91a56d117ec0071c1e9b83c0996de4"},{"appName":"Compound","contractName":"Pair_ETH_KNC","address":"0xf49c43ae0faf37217bdcb00df478cf793edd6687"},{"appName":"Compound","contractName":"Pair_COMP_ETH","address":"0xcffdded873554f362ac02f8fb1f02e5ada10516f"},{"appName":"Compound","contractName":"Pair_LINK_ETH","address":"0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"},{"appName":"Compound","contractName":"Pair_DAI_ETH","address":"0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11"},{"appName":"Compound","contractName":"Pair_WBTC_ETH","address":"0xbb2b8038a1640196fbe3e38816f3e67cba72d940"},{"appName":"Compound","contractName":"Pair_REP_ETH","address":"0xec2D2240D02A8cf63C3fA0B7d2C5a3169a319496"},{"appName":"Compound","contractName":"Pair_BAT_ETH","address":"0xb6909b960dbbe7392d405429eb2b3649752b4838"},{"appName":"Compound","contractName":"Pair_ETH_USDC","address":"0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"},{"appName":"Compound","contractName":"CrowdProposalFactory","address":"0x54a06047087927D9B0fb21c1cf0ebd792764dDB8"},{"appName":"Compound","contractName":"IRM_USDT_Updateable","address":"0xFB564da37B41b2F6B6EDcc3e56FbF523bD9F2012"},{"appName":"Compound","contractName":"IRM_USDC_Updateable","address":"0xD8EC56013EA119E7181d231E5048f90fBbe753c0"},{"appName":"Compound","contractName":"IRM_UNI_Updateable","address":"0xd88b94128ff2b8cf2d7886cd1c1e46757418ca2a"},{"appName":"Compound","contractName":"cUSDCv3","address":"0xc3d688B66703497DAA19211EEdff47f25384cdc3"},{"appName":"Compound","contractName":"Configurator","address":"0x316f9708bB98af7dA9c68C1C3b5e79039cD336E3"},{"appName":"Compound","contractName":"Compoundv3Admin","address":"0x1EC63B5883C3481134FD50D5DAebc83Ecd2E8779"},{"appName":"Compound","contractName":"Compoundv3Rewards","address":"0x1B0e765F6224C21223AeA2af16c1C46E38885a40"},{"appName":"Compound","contractName":"Bulker","address":"0x74a81F84268744a40FEBc48f8b812a1f188D80C3"}]'
        ),
        u = JSON.parse(
          '[{"appName":"Abracadabra","contractName":"CauldronV3 MasterContract","address":"0x3E2a2BC69E5C22A8DA4056B413621D1820Eb493E"},{"appName":"Abracadabra","contractName":"MagicCRV","address":"0x247d7e28AA79DFfe09B287d191393242411ad85F"},{"appName":"Abracadabra","contractName":"CurveVoter","address":"0x49640905aAE77308f1D35f370efd5c08a790f1cc"},{"appName":"Abracadabra","contractName":"RewardHarvester","address":"0xE685a35347ddC8D58ed2838a291c8a66d5BdB0ca"},{"appName":"Abracadabra","contractName":"MainnetStargateLpMimPool","address":"0x185697868e26c2Ec5b6b86504dB2F2d390f54720"},{"appName":"Abracadabra","contractName":"Frax3CrvCauldron","address":"0x81446B23e28377e1a15b6d0b67f7A2ACe3A8E5bB"},{"appName":"Abracadabra","contractName":"ConvexStakingWrapperAbra","address":"0x873221f8651bC14aa58b79489a4A927130259844"},{"appName":"Abracadabra","contractName":"Frax3CrvProxyOracle","address":"0x66a809a31E6909C835219cC09eA0f52135fF0a11"},{"appName":"Abracadabra","contractName":"Frax3CrvOracle","address":"0xD9bA8821e9EeFC89cBc80DA1EB5e3518BE383E63"},{"appName":"Abracadabra","contractName":"StkFrax3CrvSwapper","address":"0xD69E75C1c2a0f2838A6bbA8BDFf9d08C8f137cD9"},{"appName":"Abracadabra","contractName":"yvCVXETHCauldron","address":"0xf179fe36a36B32a4644587B8cdee7A23af98ed37"},{"appName":"Abracadabra","contractName":"YVCVXETHOracleProxy","address":"0xa32D03497FF5C32bcfeebE6A677Dbe4A496fD918"},{"appName":"Abracadabra","contractName":"YVCVXETHOracle","address":"0x991536BF23fa40B578Fc3e1e3725E51D1bF889F3"},{"appName":"Abracadabra","contractName":"YVCVXETHSwapper","address":"0xF80a7b98b59e7F71BAa149990bAA6044728321bb"},{"appName":"Abracadabra","contractName":"YVCVXETHLevSwapper","address":"0xE345156cDEc151D9F843F94ADE7770EFA9d56417"},{"appName":"Abracadabra","contractName":"yvMIM3CRVCauldron","address":"0xaf487ab3b81B3E6370B5D4C69A8daEf7Cc65676F"},{"appName":"Abracadabra","contractName":"YVMIM3CRVOracleProxy","address":"0x7d76568d84de8A0F34BBf315F53d7772c1fABcD8"},{"appName":"Abracadabra","contractName":"YVMIM3CRVOracle","address":"0x547fD22A2d2A9e109A78eB88Fc640D166a64d45F"},{"appName":"Abracadabra","contractName":"YVMIM3CRVSwapper","address":"0x05e46FFD98F94F62cC2817d54D5F0B1FD065B76d"},{"appName":"Abracadabra","contractName":"YVMIM3CRVLevSwapper","address":"0x9b2794Aeff2E6Bd2b3e32e095E878bF17EB6BdCC"},{"appName":"Abracadabra","contractName":"yvDAICauldron","address":"0x7Ce7D9ED62B9A6c5aCe1c6Ec9aeb115FA3064757"},{"appName":"Abracadabra","contractName":"YVDAIOracleProxy","address":"0x39DBa7955cEE12578B7548dF7eBf88F835d51bE1"},{"appName":"Abracadabra","contractName":"YVDAIOracleV1","address":"0xaB137bb12e93fEdB8B639771c4C4fE29aC138Ee6"},{"appName":"Abracadabra","contractName":"YVDAISwapper","address":"0xdb3A46896d2855e7932fC8Ea5A8465Fd07F7Fb57"},{"appName":"Abracadabra","contractName":"YVDAILevSwapper","address":"0xD8AF1558A2ca227607b49a3293e278c6875F9a40"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdcCauldron","address":"0xd31E19A0574dBF09310c3B06f3416661B4Dc7324"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdcProxyOracle","address":"0x16495612e7b35bbc8c672cd76de83bcc81774552"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdcSwapperV2","address":"0x727f7302c6F5FCE0464F77735b84B2d192b0C89E"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdcLevSwapper","address":"0xEdEa4518796EA45dFc38D78D9B8b9e070436AD51"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdtCauldron","address":"0xc6B2b3fE7c3D7a6f823D9106E22e66660709001e"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdtProxyOracle","address":"0xaBB326cD92b0e48fa6dfC54d69Cd1750a1007a97"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdtSwapperV2","address":"0xc99A4863173Ef52CCB7EA05440da0e37bA39c139"},{"appName":"Abracadabra","contractName":"StargateEthereumUsdtLevSwapper","address":"0x1E188DD74adf8CC95c98714407e88a4a99b759A5"},{"appName":"Abracadabra","contractName":"EthereumWithdrawer","address":"0xB2c3A9c577068479B1E5119f6B7da98d25Ba48f4"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHCauldron","address":"0xfD5165bD318AB6e18bD0439a736e662986F6C5b2"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHProxyOracle","address":"0x52B2773FB2f69d565C651d364f0AA95eBED097E4"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHOracle","address":"0x0D52048451207106184f0423cAF055aE24a5A38A"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHSwapper","address":"0xc97C7F6e60Fdd610A0fCA4792BbBD1dbD028d474"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHLevSwapper","address":"0x04146736FEF83A25e39834a972cf6A5C011ACEad"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHCauldron","address":"0xab8F52D568ba9B58c296522232240621Cf3f9dDa"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHProxyOracle","address":"0x87A5bF86D6C96775d926F43700c0fD99EE0c2E82"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHOracle","address":"0x9D72680409b906bf964dBFC89C7c270a88fe4DE6"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHSwapper","address":"0x0E0E2c6204976bA791fBA95eFbb54f9f76556a57"},{"appName":"Abracadabra","contractName":"PopsicleUSDCWETHLevSwapper","address":"0x2cA12e0Ca5c2E1EE8DC18eAA0D24EEd647aE7531"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTCauldron","address":"0x08371AAcA536370ffba76e1502E8a476AC3D9691"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTProxyOracle","address":"0x76c936A0db6EeEb54e615B93a6fAAA9930C02C19"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTOracle","address":"0x85E8A3087C90992BAdD74BE44F18626b2359F490"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTSwapper","address":"0xad2f284Db532A57d6940F3A46D875549DCEB030d"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTLevSwapper","address":"0x2906ae98fdAf225a697a09158D10843A89CF0FC5"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTCauldron","address":"0x5aC11966ca33128c516116b5a597554e9f25ab6f"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTProxyOracle","address":"0xEd5D79F369D878C9038ac156D7D71b6364756f8e"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTOracle","address":"0xE5683f4bD410ea185692b5e6c9513Be6bf1017ec"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTSwapper","address":"0xBd73aA17Ce60B0e83d972aB1Fb32f7cE138Ca32A"},{"appName":"Abracadabra","contractName":"PopsicleWETHUSDTLevSwapper","address":"0x9Ca03FeBDE38c2C8A2E8F3d74E23a58192Ca921d"},{"appName":"Abracadabra","contractName":"PopsicleUSTUSDTCauldron","address":"0x9ac502D3aD1FfB79F75D486Ae7D01Dd696B7F4B3"},{"appName":"Abracadabra","contractName":"PopsicleUSTUSDTProxyOracle","address":"0x40CC67dB2713F34daCA67d93aCdeF59D3b8279a9"},{"appName":"Abracadabra","contractName":"PopsicleUSTUSDTOracle","address":"0xBc00ca0d71231c5E23Ba90A90D8C5D9039C39614"},{"appName":"Abracadabra","contractName":"PopsicleUSTUSDTSwapper","address":"0xc2141D069c75C76EFf779fc3Ca187233dAfC1e7c"},{"appName":"Abracadabra","contractName":"PopsicleUSTUSDTLevSwapper","address":"0x6E93686D34a9EBf7c589998a576AB603719500ef"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSTCauldron","address":"0x293C100ce61B82B5Efc04F756E32a548158360d4"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSTProxyOracle","address":"0x0DF56A0CF3E6Da667c9532203Fca4c8Ef138A181"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSTOracle","address":"0x02d4c5c47C6E779F44709F35f0131C1CdB407fbf"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSTSwapper","address":"0x2b95bf93B5873c8cB9aE3374e3054736A5b79676"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSTLevSwapper","address":"0x8176C5408c5DeC30149232A74Ef8873379b59982"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSDTCauldron","address":"0x02F3025c4808dC35Fee5638aeb98a62A00C2664a"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSDTProxyOracle","address":"0x8CBC6f9811b266268B94B84afED0e5EE26D61DdC"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSDTOracle","address":"0xD825d06061fdc0585e4373F0A3F01a8C02b0e6A4"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSDTSwapper","address":"0xFa85b0BB658d519247494b6020Cae6E65f572950"},{"appName":"Abracadabra","contractName":"PopsicleUSDCUSDTLevSwapper","address":"0xBc7Fa554a65A98502457FCFC2f1afa28113D7920"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHCauldron","address":"0x7FC3e87AAF5564a725BD4d842A7239b575fEAB4F"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHProxyOracle","address":"0x563111A691302D9700Abc617E99236D6a6FC537b"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHOracle","address":"0x2BCccB83178F9Fd889EB937979d659A5997Ca327"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHSwapper","address":"0xa1CdF7d4E983A4dbC3833f6Bbfdb3eB112fEF5C1"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHLevSwapper","address":"0x64C65549C10D86De6F00C3B0D5132d8f742Af8C4"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHCauldron","address":"0x0A7224c7429E06661930c862Cc4b1815544A8701"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHProxyOracle","address":"0xA996A383f0527409FE3e8476EaE70A5F7801bCEB"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHOracle","address":"0xfe0f13fD5f928539C5bc377c8200a699FC95Ca02"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHSwapper","address":"0xf82397056A454ad3Cbb6be67b07dF7A75458bbfA"},{"appName":"Abracadabra","contractName":"PopsicleWBTCWETHLevSwapper","address":"0x6Eb1709e0b562097BF1cc48Bc6A378446c297c04"},{"appName":"Abracadabra","contractName":"EthereumWithdrawer","address":"0xB2c3A9c577068479B1E5119f6B7da98d25Ba48f4"},{"appName":"Abracadabra","contractName":"earnChainlinkOracleV3","address":"0xA0fA150F11ca5D63353d3460cbF5E15304d4BD57"}]'
        ),
        D = JSON.parse(
          '[{"appName":"Socket","contractName":"registry","address":"0xc30141B657f4216252dc59Af2e7CdB9D8792e1B0"},{"appName":"Socket","contractName":"feeRouter","address":"0x5e2361cd711de7efe2a85045b643271a64262d40"},{"appName":"Socket","contractName":"Bridge.Hop","address":"0x4C9faD010D8be90Aba505c85eacc483dFf9b8Fa9"},{"appName":"Socket","contractName":"Bridge.PolygonBridge","address":"0xa7649aa944b7dce781859c18913c2dc8a97f03e4"},{"appName":"Socket","contractName":"Bridge.ArbitrumBridge","address":"0x852C5DE08b9beB014caD171C16B12a8D7456ea3f"},{"appName":"Socket","contractName":"Bridge.AnySwapRouterV4","address":"0x040993fbF458b95871Cd2D73Ee2E09F4AF6d56bB"},{"appName":"Socket","contractName":"Bridge.Hyphen","address":"0x1Aba89fC7ff67D27ccaa51893c46FD1e5fEE924B"},{"appName":"Socket","contractName":"Bridge.Across","address":"0x6D1e0220914f4fb73aF954694564e77024de3693"},{"appName":"Socket","contractName":"Middleware.OneInch","address":"0x2ddf16BA6d0180e5357d5e170eF1917a01b41fc0"},{"appName":"Socket","contractName":"Bridge.OptimismBridge","address":"0x14aC5b3580dD1e546CD7287Cd1faDba9A8736628"},{"appName":"Socket","contractName":"Bridge.Celer","address":"0xB6fb3062405985F700fa23758A3053162ddBeFb9"},{"appName":"Socket","contractName":"Bridge.refuel","address":"0xe48AE3B68f0560d4aaA312E12fD687630C948561"},{"appName":"Socket","contractName":"Middleware.refuelOneInch","address":"0x87225Ec2C6d8ee8293E8F5667077d699eC2FB6Db"},{"appName":"Socket","contractName":"Middleware.refuel","address":"0xa1Cc84A788A8405369E49781Ca151bDeDbB5b47C"},{"appName":"Socket","contractName":"Middleware.ZeroX","address":"0x33BE2a7CF4Bb94d28131116F840d313Cab1eD2DA"},{"appName":"Socket","contractName":"Middleware.refuelZeroX","address":"0x201c8d3AC4C261690e7C42A26bA49e614585c0D1"},{"appName":"Socket","contractName":"Middleware.Rainbow","address":"0x7d3C52110E391D1a227A26736c0B3f3f19cc60f8"},{"appName":"Socket","contractName":"Middleware.refuelRainbow","address":"0x0df5AfFC28FF314FEF2Ba82d8C44685A460EF538"}]'
        ),
        F = JSON.parse(
          '[{"appName":"Yearn","contractName":"pickling SushiSwap LP Token","address":"0xbD17B1ce622d73bD438b9E658acA5996dc394b0d"},{"appName":"Yearn","contractName":"yveCRV","address":"0xc5bDdf9843308380375a611c18B50Fb9341f502A"},{"appName":"Yearn","contractName":"USDC","address":"0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e"},{"appName":"Yearn","contractName":"curve.fi/y","address":"0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c"},{"appName":"Yearn","contractName":"TUSD","address":"0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a"},{"appName":"Yearn","contractName":"DAI","address":"0xACd43E627e64355f1861cEC6d3a6688B31a6F952"},{"appName":"Yearn","contractName":"USDT","address":"0x2f08119C6f07c006695E079AAFc638b8789FAf18"},{"appName":"Yearn","contractName":"YFI","address":"0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1"},{"appName":"Yearn","contractName":"curve.fi/busd","address":"0x2994529C0652D127b7842094103715ec5299bBed"},{"appName":"Yearn","contractName":"curve.fi/sbtc","address":"0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6"},{"appName":"Yearn","contractName":"WETH","address":"0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7"},{"appName":"Yearn","contractName":"curve.fi/3pool","address":"0x9cA85572E6A3EbF24dEDd195623F188735A5179f"},{"appName":"Yearn","contractName":"GUSD","address":"0xec0d8D3ED5477106c6D4ea27D90a60e594693C90"},{"appName":"Yearn","contractName":"curve.fi/compound","address":"0x629c759D1E83eFbF63d84eb3868B564d9521C129"},{"appName":"Yearn","contractName":"curve.fi/musd","address":"0x0FCDAeDFb8A7DfDa2e9838564c5A1665d856AFDF"},{"appName":"Yearn","contractName":"curve.fi/gusd","address":"0xcC7E70A958917cCe67B4B87a8C30E6297451aE98"},{"appName":"Yearn","contractName":"curve.fi/eurs","address":"0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC"},{"appName":"Yearn","contractName":"mUSD","address":"0xE0db48B4F71752C4bEf16De1DBD042B82976b8C7"},{"appName":"Yearn","contractName":"curve.fi/renbtc","address":"0x5334e150B938dd2b6bd040D9c4a03Cff0cED3765"},{"appName":"Yearn","contractName":"curve.fi/usdn","address":"0xFe39Ce91437C76178665D64d7a2694B0f6f17fE3"},{"appName":"Yearn","contractName":"curve.fi/ust","address":"0xF6C9E9AF314982A4b38366f4AbfAa00595C5A6fC"},{"appName":"Yearn","contractName":"curve.fi/bbtc","address":"0xA8B1Cb4ed612ee179BDeA16CCa6Ba596321AE52D"},{"appName":"Yearn","contractName":"curve.fi/tbtc","address":"0x07FB4756f67bD46B748b16119E802F1f880fb2CC"},{"appName":"Yearn","contractName":"curve.fi/obtc","address":"0x7F83935EcFe4729c4Ea592Ab2bC1A32588409797"},{"appName":"Yearn","contractName":"curve.fi/pbtc","address":"0x123964EbE096A920dae00Fb795FFBfA0c9Ff4675"},{"appName":"Yearn","contractName":"curve.fi/hbtc","address":"0x46AFc2dfBd1ea0c0760CAD8262A5838e803A37e5"},{"appName":"Yearn","contractName":"curve.fi/susd","address":"0x5533ed0a3b83F70c3c4a1f69Ef5546D3D4713E44"},{"appName":"Yearn","contractName":"curve.fi/husd","address":"0x39546945695DCb1c037C836925B355262f551f55"},{"appName":"Yearn","contractName":"curve.fi/dusd","address":"0x8e6741b456a074F0Bc45B8b82A755d4aF7E965dF"},{"appName":"Yearn","contractName":"curve.fi/aave","address":"0x03403154afc09Ce8e44C3B185C82C6aD5f86b9ab"},{"appName":"Yearn","contractName":"curve.fi/ankreth","address":"0xE625F5923303f1CE7A43ACFEFd11fd12f30DbcA4"},{"appName":"Yearn","contractName":"curve.fi/saave","address":"0xBacB69571323575C6a5A3b4F9EEde1DC7D31FBc1"},{"appName":"Yearn","contractName":"curve.fi/usdp","address":"0x1B5eb1173D2Bf770e50F10410C9a96F7a8eB6e75"},{"appName":"Yearn","contractName":"curve.fi/link","address":"0x96Ea6AF74Af09522fCB4c28C269C26F59a31ced6"},{"appName":"Yearn","contractName":"yvDAI 0.2.2","address":"0xBFa4D8AA6d8a379aBFe7793399D3DdaCC5bBECBB"},{"appName":"Yearn","contractName":"yvUSDC 0.2.2","address":"0xe2F6b9773BF3A015E2aA70741Bde1498bdB9425b"},{"appName":"Yearn","contractName":"yvHEGIC 0.3.0","address":"0xe11ba472F74869176652C35D30dB89854b5ae84D"},{"appName":"Yearn","contractName":"yvDAI 0.3.0","address":"0x19D3364A399d251E894aC732651be8B0E4e85001"},{"appName":"Yearn","contractName":"yvUSDC 0.3.0","address":"0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9"},{"appName":"Yearn","contractName":"yvCurve-stETH 0.3.0","address":"0xdCD90C7f6324cfa40d7169ef80b12031770B4325"},{"appName":"Yearn","contractName":"yvWBTC 0.3.1","address":"0xcB550A6D4C8e3517A939BC79d0c7093eb7cF56B5"},{"appName":"Yearn","contractName":"yvCurve-sETH 0.3.2","address":"0x986b4AFF588a109c09B50A03f42E4110E29D353F"},{"appName":"Yearn","contractName":"yvWETH 0.3.2","address":"0xa9fE4601811213c340e850ea305481afF02f5b28"},{"appName":"Yearn","contractName":"yvYFI 0.3.2","address":"0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1"},{"appName":"Yearn","contractName":"yv1INCH 0.3.2","address":"0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67"},{"appName":"Yearn","contractName":"yvCurve-IronBank 0.3.2","address":"0x27b7b1ad7288079A66d12350c828D3C00A6F07d7"},{"appName":"Yearn","contractName":"yvCurve-HBTC 0.3.3","address":"0x625b7DF2fa8aBe21B0A976736CDa4775523aeD1E"},{"appName":"Yearn","contractName":"yvBOOST 0.3.5","address":"0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a"},{"appName":"Yearn","contractName":"yvCurve-sBTC 0.3.5","address":"0x8414Db07a7F743dEbaFb402070AB01a4E0d2E45e"},{"appName":"Yearn","contractName":"yvCurve-renBTC 0.3.5","address":"0x7047F90229a057C13BF847C0744D646CFb6c9E1A"},{"appName":"Yearn","contractName":"yvCurve-sAave 0.3.5","address":"0xb4D1Be44BfF40ad6e506edf43156577a3f8672eC"},{"appName":"Yearn","contractName":"yvCurve-oBTC 0.3.5","address":"0xe9Dc63083c464d6EDcCFf23444fF3CFc6886f6FB"},{"appName":"Yearn","contractName":"yvCurve-pBTC 0.3.5","address":"0x3c5DF3077BcF800640B5DAE8c91106575a4826E6"},{"appName":"Yearn","contractName":"yvCurve-LUSD 0.3.5","address":"0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6"},{"appName":"Yearn","contractName":"yvCurve-BBTC 0.3.5","address":"0x8fA3A9ecd9EFb07A8CE90A6eb014CF3c0E3B32Ef"},{"appName":"Yearn","contractName":"yvCurve-tBTC 0.3.5","address":"0x23D3D0f1c697247d5e0a9efB37d8b0ED0C464f7f"},{"appName":"Yearn","contractName":"yvUSDT 0.3.5","address":"0x7Da96a3891Add058AdA2E826306D812C638D87a7"},{"appName":"Yearn","contractName":"yvWBTC 0.3.5","address":"0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E"},{"appName":"Yearn","contractName":"yvCurve-FRAX 0.3.5","address":"0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139"},{"appName":"Yearn","contractName":"yvUNI 0.3.5","address":"0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42"},{"appName":"Yearn","contractName":"yvCurve-yBUSD 0.3.5","address":"0x8ee57c05741aA9DB947A744E713C15d4d19D8822"},{"appName":"Yearn","contractName":"yvCurve-Compound 0.3.5","address":"0xD6Ea40597Be05c201845c0bFd2e96A60bACde267"},{"appName":"Yearn","contractName":"yvCurve-GUSD 0.3.5","address":"0x2a38B9B0201Ca39B17B460eD2f11e4929559071E"},{"appName":"Yearn","contractName":"yUSD 0.3.5","address":"0x4B5BfD52124784745c1071dcB244C6688d2533d3"},{"appName":"Yearn","contractName":"yvCurve-3pool 0.3.5","address":"0x84E13785B5a27879921D6F685f041421C7F482dA"},{"appName":"Yearn","contractName":"yvCurve-TUSD 0.3.5","address":"0xf8768814b88281DE4F532a3beEfA5b85B69b9324"},{"appName":"Yearn","contractName":"yvCurve-BUSD 0.3.5","address":"0x6Ede7F19df5df6EF23bD5B9CeDb651580Bdf56Ca"},{"appName":"Yearn","contractName":"yvCurve-DUSD 0.3.5","address":"0x30FCf7c6cDfC46eC237783D94Fc78553E79d4E9C"},{"appName":"Yearn","contractName":"yvCurve-UST 0.3.5","address":"0x1C6a9783F812b3Af3aBbf7de64c3cD7CC7D1af44"},{"appName":"Yearn","contractName":"yvCurve-mUSD 0.3.5","address":"0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757"},{"appName":"Yearn","contractName":"yvsUSD 0.3.3","address":"0xa5cA62D95D24A4a350983D5B8ac4EB8638887396"},{"appName":"Yearn","contractName":"yvSNX 0.3.5","address":"0xF29AE508698bDeF169B89834F76704C3B205aedf"},{"appName":"Yearn","contractName":"yvCurve-sUSD 0.3.5","address":"0x5a770DbD3Ee6bAF2802D29a901Ef11501C44797A"},{"appName":"Yearn","contractName":"yvCurve-LINK 0.3.5","address":"0xf2db9a7c0ACd427A680D640F02d90f6186E71725"},{"appName":"Yearn","contractName":"yvCurve-USDN 0.3.5","address":"0x3B96d491f067912D18563d56858Ba7d6EC67a6fa"},{"appName":"Yearn","contractName":"yvCurve-USDP 0.3.5","address":"0xC4dAf3b5e2A9e93861c3FBDd25f1e943B8D87417"},{"appName":"Yearn","contractName":"yvCurve-alUSD 0.3.5","address":"0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8"},{"appName":"Yearn","contractName":"yvCurve-rETH 0.3.5","address":"0xBfedbcbe27171C418CDabC2477042554b1904857"},{"appName":"Yearn","contractName":"yvCurve-ankrETH 0.3.5","address":"0x132d8D2C76Db3812403431fAcB00F3453Fc42125"},{"appName":"Yearn","contractName":"yvCurve-Aave 0.3.5","address":"0x39CAF13a104FF567f71fd2A4c68C026FDB6E740B"},{"appName":"Yearn","contractName":"yvCurve-HUSD 0.3.5","address":"0x054AF22E1519b020516D72D749221c24756385C9"},{"appName":"Yearn","contractName":"yvCurve-EURS 0.3.5","address":"0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A"},{"appName":"Yearn","contractName":"yvLINK 0.4.2","address":"0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2"},{"appName":"Yearn","contractName":"yvRAI 0.4.2","address":"0x873fB544277FD7b977B196a826459a69E27eA4ea"},{"appName":"Yearn","contractName":"yvWETH 0.4.2","address":"0xa258C4606Ca8206D8aA700cE2143D7db854D168c"},{"appName":"Yearn","contractName":"yvCurve-triCrypto 0.4.2","address":"0x3D980E50508CFd41a13837A60149927a11c03731"},{"appName":"Yearn","contractName":"yvCurve-Pax 0.3.5","address":"0x80bbeE2fa460dA291e796B9045e93d19eF948C6A"},{"appName":"Yearn","contractName":"yvCurve-USDT 0.3.5","address":"0x28a5b95C101df3Ded0C0d9074DB80C438774B6a9"},{"appName":"Yearn","contractName":"yvCurve-USDK 0.3.5","address":"0x3D27705c64213A5DcD9D26880c1BcFa72d5b6B0E"},{"appName":"Yearn","contractName":"yvCurve-RSV 0.3.5","address":"0xC116dF49c02c5fD147DE25Baa105322ebF26Bd97"},{"appName":"Yearn","contractName":"yvDAI 0.4.3","address":"0xdA816459F1AB5631232FE5e97a05BBBb94970c95"},{"appName":"Yearn","contractName":"yvCurve-3Crypto 0.4.3","address":"0xE537B5cc158EB71037D4125BDD7538421981E6AA"},{"appName":"Yearn","contractName":"yvAAVE 0.4.3","address":"0xd9788f3931Ede4D5018184E198699dC6d66C1915"},{"appName":"Yearn","contractName":"yvCOMP 0.4.3","address":"0x4A3FE75762017DB0eD73a71C9A06db7768DB5e66"},{"appName":"Yearn","contractName":"yvSUSHI 0.4.3","address":"0x6d765CbE5bC922694afE112C140b8878b9FB0390"},{"appName":"Yearn","contractName":"yvTUSD 0.4.3","address":"0xFD0877d9095789cAF24c98F7CCe092fa8E120775"},{"appName":"Yearn","contractName":"yvCurve-EURT 0.4.3","address":"0x0d4EA8536F9A13e4FBa16042a46c30f092b06aA5"},{"appName":"Yearn","contractName":"yvCurve-MIM 0.4.3","address":"0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8"},{"appName":"Yearn","contractName":"yvCurve-cvxCRV 0.4.3","address":"0x4560b99C904aAD03027B5178CCa81584744AC01f"},{"appName":"Yearn","contractName":"yvCurve-ibEUR 0.4.3","address":"0x67e019bfbd5a67207755D04467D6A70c0B75bF60"},{"appName":"Yearn","contractName":"yvCurve-ibKRW 0.4.3","address":"0x528D50dC9a333f01544177a924893FA1F5b9F748"},{"appName":"Yearn","contractName":"yvCurve-ibGBP 0.4.3","address":"0x595a68a8c9D5C230001848B69b1947ee2A607164"},{"appName":"Yearn","contractName":"yvCurve-ibAUD 0.4.3","address":"0x1b905331F7dE2748F4D6a0678e1521E20347643F"},{"appName":"Yearn","contractName":"yvCurve-ibCHF 0.4.3","address":"0x490bD0886F221A5F79713D3E84404355A9293C50"},{"appName":"Yearn","contractName":"yvCurve-ibJPY 0.4.3","address":"0x59518884EeBFb03e90a18ADBAAAB770d4666471e"},{"appName":"Yearn","contractName":"yvYFI 0.4.3","address":"0xdb25cA703181E7484a155DD612b06f57E12Be5F0"},{"appName":"Yearn","contractName":"yvCurve-USDM 0.4.3","address":"0x6FAfCA7f49B4Fd9dC38117469cd31A1E5aec91F5"},{"appName":"Yearn","contractName":"yvCurve-alETH 0.4.3","address":"0x718AbE90777F5B778B52D553a5aBaa148DD0dc5D"},{"appName":"Yearn","contractName":"yvCurve-EURN 0.4.3","address":"0x8b9C0c24307344B6D7941ab654b2Aeee25347473"},{"appName":"Yearn","contractName":"yvCurve-MIMUST 0.4.3","address":"0xd8C620991b8E626C099eAaB29B1E3eEa279763bb"},{"appName":"Yearn","contractName":"yvUSDC 0.4.3","address":"0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE"},{"appName":"Yearn","contractName":"yvCurve-OUSD 0.4.3","address":"0xF59D66c1d593Fb10e2f8c2a6fD2C958792434B9c"},{"appName":"Yearn","contractName":"yvCurve-ibBTC 0.4.3","address":"0x5e69e8b51B71C8596817fD442849BD44219bb095"},{"appName":"Yearn","contractName":"yvCurve-d3pool 0.4.3","address":"0x16825039dfe2a5b01F3E1E6a2BBF9a576c6F95c4"},{"appName":"Yearn","contractName":"yvCurve-EURTUSD 0.4.3","address":"0xBCBB5b54Fa51e7b7Dc920340043B203447842A6b"},{"appName":"Yearn","contractName":"yvCurve-EURSUSDC 0.4.3","address":"0x801Ab06154Bf539dea4385a39f5fa8534fB53073"},{"appName":"Yearn","contractName":"yvLUSD 0.4.3","address":"0x378cb52b00F9D0921cb46dFc099CFf73b42419dC"},{"appName":"Yearn","contractName":"yvCurve-3EUR 0.4.3","address":"0x5AB64C599FcC59f0f2726A300b03166A395578Da"},{"appName":"Yearn","contractName":"yvCurve-CRVETH 0.4.3","address":"0x6A5468752f8DB94134B6508dAbAC54D3b45efCE6"},{"appName":"Yearn","contractName":"yvCurve-CVXETH 0.4.3","address":"0x1635b506a88fBF428465Ad65d00e8d6B6E5846C3"},{"appName":"Yearn","contractName":"yvCurve-UST 0.4.3","address":"0x04d73c87b20d372cB3240C72eEFB9d79bA5e4959"},{"appName":"Yearn","contractName":"yvCurve-RAI 0.4.3","address":"0x2D5D4869381C4Fce34789BC1D38aCCe747E295AE"},{"appName":"Yearn","contractName":"yvCurve-DOLA 0.4.3","address":"0xd88dBBA3f9c4391Ee46f5FF548f289054db6E51C"},{"appName":"Yearn","contractName":"yvCurve-USDP 0.4.3","address":"0xc97511a1dDB162C8742D39FF320CfDCd13fBcf7e"},{"appName":"Yearn","contractName":"yvCurve-YFIETH 0.4.3","address":"0x790a60024bC3aea28385b60480f15a0771f26D09"},{"appName":"Yearn","contractName":"yvCurve-rETHwstETH 0.4.3","address":"0x5c0A86A32c129538D62C106Eb8115a8b02358d57"},{"appName":"Yearn","contractName":"yvCurve-stETH-WETH 0.4.3","address":"0x5faF6a2D186448Dfa667c51CB3D695c7A6E52d8E"},{"appName":"Yearn","contractName":"yvKP3RETH-f 0.4.3","address":"0xb09F2a67a731466182518fae980feAe96479d80b"},{"appName":"Yearn","contractName":"yvCurve-ibKRW-USDC 0.4.3","address":"0xF6B9DFE6bc42ed2eaB44D6B829017f7B78B29f88"},{"appName":"Yearn","contractName":"yvCurve-ibJPY-USDC 0.4.3","address":"0x9A39f31DD5EDF5919A5C0c2433cE053fAD2E0336"},{"appName":"Yearn","contractName":"yvCurve-ibEUR-USDC 0.4.3","address":"0xE5eDcE53e39Cbc6d819E2C340BCF295e0084ff7c"},{"appName":"Yearn","contractName":"yvCurve-ibCHF-USDC 0.4.3","address":"0x2e5c7e9B1Da0D9Cb2832eBb06241d18552A85400"},{"appName":"Yearn","contractName":"yvCurve-ibGBP-USDC 0.4.3","address":"0x6B5ce31AF687a671a804d8070Ddda99Cab926dfE"},{"appName":"Yearn","contractName":"yvCurve-ibAUD-USDC 0.4.3","address":"0x1025b1641d1F23C289412Dd5E5701e9810103a93"},{"appName":"Yearn","contractName":"yvCurve-STG-USDC 0.4.3","address":"0x341bb10D8f5947f3066502DC8125d9b8949FD3D6"},{"appName":"Yearn","contractName":"yvUSDT 0.4.3","address":"0x3B27F92C0e212C671EA351827EDF93DB27cc0c65"},{"appName":"Yearn","contractName":"yvBalancer-BoostedAaveUSD 0.4.3","address":"0x4213458C69c19E6792510E1153cb0c5834665fdC"},{"appName":"Yearn","contractName":"lp-yCRV 0.4.3","address":"0x61f46C65E403429266e8b569F23f70dD75d9BeE7"},{"appName":"Yearn","contractName":"st-yCRV 0.4.3","address":"0x8a0889d47f9Aa0Fac1cC718ba34E26b867437880"}]'
        ),
        E = JSON.parse(
          '[{"appName":"Lido","contractName":"Lido and stETH token","address":"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"},{"appName":"Lido","contractName":"wstETH token","address":"0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"},{"appName":"Lido","contractName":"Deposit Security module","address":"0x710B3303fB508a84F10793c1106e32bE873C24cd"},{"appName":"Lido","contractName":"Execution Layer Rewards Vault","address":"0x388C818CA8B9251b393131C08a736A67ccB19297"},{"appName":"Lido","contractName":"CompositePostRebaseReportReceiver","address":"0x55a7E1cbD678d9EbD50c7d69Dc75203B0dBdD431"},{"appName":"Lido","contractName":"SelfOwnedStETHBurner","address":"0xB280E33812c0B09353180e92e27b8AD399B07f26"},{"appName":"Lido","contractName":"MEV Boost Relay Allowed List","address":"0xF95f069F9AD107938F6ba802a3da87892298610E"},{"appName":"Lido","contractName":"LDO token","address":"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"},{"appName":"Lido","contractName":"(proposed) Insurance Fund","address":"0x8B3f33234ABD88493c0Cd28De33D583B70beDe35"},{"appName":"Lido","contractName":"Curve stETH/ETH pool","address":"0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"},{"appName":"Lido","contractName":"Pool contract","address":"0x828b154032950C8ff7CF8085D841723Db2696056"},{"appName":"Lido","contractName":"Gauge contract","address":"0xF668E6D326945d499e5B35E7CD2E82aCFbcFE6f0"},{"appName":"Lido","contractName":"Balancer wstETH/WETH pool","address":"0x32296969Ef14EB0c6d29669C550D4a0449130230"},{"appName":"Lido","contractName":"1inch stETH/DAI pool","address":"0xC1A900Ae76dB21dC5aa8E418Ac0F4E888A4C7431"},{"appName":"Lido","contractName":"Sushi wstETH/DAI pool","address":"0xc5578194D457dcce3f272538D1ad52c68d1CE849"},{"appName":"Lido","contractName":"Chainlink stETH/USD Price Feed","address":"0xCfE54B5cD566aB89272946F602D76Ea879CAb4a8"},{"appName":"Lido","contractName":"Chainlink stETH/ETH Price Feed","address":"0x86392dC19c0b719886221c78AB11eb8Cf5c52812"},{"appName":"Lido","contractName":"stETH/ETH Merkle Price Oracle","address":"0x3a6bd15abf19581e411621d669b6a2bbe741ffd6"},{"appName":"Lido","contractName":"Early Stakers Airdrop","address":"0x4b3EDb22952Fb4A70140E39FB1adD05A6B49622B"},{"appName":"Lido","contractName":"1inch Liquidity Farming","address":"0xdB46C277dA1599390eAb394327602889E9546296"},{"appName":"Lido","contractName":"Curve Liquidity Farming Manager Contract","address":"0x753D5167C31fBEB5b49624314d74A957Eb271709"},{"appName":"Lido","contractName":"Curve Liquidity Farming Reward Contract","address":"0x99ac10631f69c753ddb595d074422a0922d9056b"},{"appName":"Lido","contractName":"Curve Liquidity Farming Pool Contract","address":"0xDC24316b9AE028F1497c275EB9192a3Ea0f67022"},{"appName":"Lido","contractName":"ARCx  Manager Contract","address":"0x6140182B2536AE7B6Cfcfb2d2bAB0f6Fe0D7b58E"},{"appName":"Lido","contractName":"ARCx  Reward Contract","address":"0x8F1155447Ee97b5Ae147a01a5c420B0FDDF0370D"},{"appName":"Lido","contractName":"SushiSwap LP rewards Manager Contract","address":"0xE5576eB1dD4aA524D67Cf9a32C8742540252b6F4"},{"appName":"Lido","contractName":"SushiSwap LP rewards Reward Contract","address":"0x75ff3dd673Ef9fC459A52E1054db5dF2A1101212"},{"appName":"Lido","contractName":"Balancer LP rewards v1 Manager Contract","address":"0x1dD909cDdF3dbe61aC08112dC0Fdf2Ab949f79D8"},{"appName":"Lido","contractName":"Balancer LP rewards v2 Manager Contract","address":"0x1220ccCDc9BBA5CF626a84586C74D6f940932342"},{"appName":"Lido","contractName":"Balancer LP rewards v2 Reward Contract","address":"0x55c8De1Ac17C1A937293416C9BCe5789CbBf61d1"},{"appName":"Lido","contractName":"Balancer LP rewards v3 Manager Contract","address":"0x86F6c353A0965eB069cD7f4f91C1aFEf8C725551"},{"appName":"Lido","contractName":"1inch LP rewards manager Manager Contract","address":"0xf5436129cf9d8fa2a1cb6e591347155276550635"},{"appName":"Lido","contractName":"AnchorVault","address":"0x07BE9BB2B1789b8F5B2f9345F18378A8B036A171"},{"appName":"Lido","contractName":"bETH token","address":"0x707f9118e33a9b8998bea41dd0d46f38bb963fc8"},{"appName":"Lido","contractName":"BridgeConnectorWormhole","address":"0x2618e94a7F6118acED2E51e0a05da43D2e2eD40C"},{"appName":"Lido","contractName":"RewardsLiquidator","address":"0xE3c8A4De3b8A484ff890a38d6D7B5D278d697Fb7"},{"appName":"Lido","contractName":"InsuranceConnector","address":"0x2BDfD3De0fF23373B621CDAD0aD3dF1580efE701"},{"appName":"Lido","contractName":"AStETH","address":"0xbd233D4ffdAA9B7d1d3E6b18CCcb8D091142893a"},{"appName":"Lido","contractName":"StableDebtStETH","address":"0x8180949ac41EF18e844ff8dafE604a195d86Aea9"},{"appName":"Lido","contractName":"VariableDebtStETH","address":"0xDe2c414b671d2DB93617D1592f0490c13674de24"},{"appName":"Lido","contractName":"DefaultReserveInterestRateStrategy","address":"0xff04ed5f7a6C3a0F1e5Ea20617F8C6f513D5A77c"},{"appName":"Lido","contractName":"Treasury Diversification May","address":"0x489F04EEff0ba8441D42736549A1f1d6ccA74775"},{"appName":"Lido","contractName":"Treasury Diversification October","address":"0x689E03565e36B034EcCf12d182c3DC38b2Bb7D33"},{"appName":"Lido","contractName":"Treasury Diversification Part 2 2022 Aug round","address":"0xA9b2F5ce3aAE7374a62313473a74C98baa7fa70E"},{"appName":"Lido","contractName":"Jumpgate for Solana Reward Program","address":"0xe3224542066d3bbc02bc3d70b641be4bc6f40e36"},{"appName":"Lido","contractName":"Tokens recoverer for Manager contracts (Reward Programs)","address":"0x1bdfFe0EBef3FEAdF2723D3330727D73f538959C"},{"appName":"Lido","contractName":"Jumpgate for Solana Referral Program","address":"0x13C6eF8d45aFBCcF15ec0701567cC9fAD2b63CE8"},{"appName":"Lido","contractName":"EasyTrack","address":"0xF0211b7660680B49De1A7E9f25C65660F0a13Fea"},{"appName":"Lido","contractName":"EVMScriptExecutor","address":"0xFE5986E06210aC1eCC1aDCafc0cc7f8D63B3F977"},{"appName":"Lido","contractName":"RewardProgramsRegistry","address":"0x3129c041b372ee93a5a8756dc4ec6f154d85bc9a"},{"appName":"Lido","contractName":"IncreaseNodeOperatorStakingLimit","address":"0xFeBd8FAC16De88206d4b18764e826AF38546AfE0"},{"appName":"Lido","contractName":"TopUpLegoProgram","address":"0x648C8Be548F43eca4e482C0801Ebccccfb944931"},{"appName":"Lido","contractName":"AddRewardProgram","address":"0x9D15032b91d01d5c1D940eb919461426AB0dD4e3"},{"appName":"Lido","contractName":"RemoveRewardProgram","address":"0xc21e5e72Ffc223f02fC410aAedE3084a63963932"},{"appName":"Lido","contractName":"TopUpRewardPrograms","address":"0x77781A93C4824d2299a38AC8bBB11eb3cd6Bc3B7"},{"appName":"Lido","contractName":"RewardProgramsRegistry (Referral Program)","address":"0xfCaD241D9D2A2766979A2de208E8210eDf7b7D4F"},{"appName":"Lido","contractName":"AddRewardProgram (Referral Program)","address":"0x929547490Ceb6AeEdD7d72F1Ab8957c0210b6E51"},{"appName":"Lido","contractName":"RemoveRewardProgram (Referral Program)","address":"0xE9eb838fb3A288bF59E9275Ccd7e124fDff88a9C"},{"appName":"Lido","contractName":"TopUpRewardPrograms (Referral Program)","address":"0x54058ee0E0c87Ad813C002262cD75B98A7F59218"},{"appName":"Lido","contractName":"reWARDS Committee","address":"0x87D93d9B2C672bf9c9642d853a8682546a5012B5"},{"appName":"Lido","contractName":"LEGO Committee","address":"0x12a43b049A7D330cB8aEAB5113032D18AE9a9030"},{"appName":"Lido","contractName":"Referral Program Committee","address":"0xe2A682A9722354D825d1BbDF372cC86B2ea82c8C"},{"appName":"Lido","contractName":"RCC Committee","address":"0xDE06d17Db9295Fa8c4082D4f73Ff81592A3aC437"},{"appName":"Lido","contractName":"Lido Dev team","address":"0x3cd9F71F80AB08ea5a7Dca348B5e94BC595f26A0"},{"appName":"Lido","contractName":"Depositor bot gas funding","address":"0x5181d5D56Af4f823b96FE05f062D7a09761a5a53"},{"appName":"Lido","contractName":"Lido Subgraph NFT owner","address":"0x14CeF290c79fc84FDDfDf4129Ba335972aAc7F41"},{"appName":"Lido","contractName":"Ethereum","address":"0x73b047fe6337183A454c5217241D780a932777bD"},{"appName":"Lido","contractName":"Optimism","address":"0x4Cf8fE0A4c2539F7EFDD2047d8A5D46F14613088"},{"appName":"Lido","contractName":"Arbitrum","address":"0xfDCf209A213a0b3C403d543F87E74FCbcA11de34"},{"appName":"Lido","contractName":"ETH reWARDS Committee","address":"0x87D93d9B2C672bf9c9642d853a8682546a5012B5"},{"appName":"Lido","contractName":"OPT reWARDS Committee","address":"0x5033823F27c5f977707B58F0351adcD732C955Dd"},{"appName":"Lido","contractName":"ARB reWARDS Committee","address":"0x8C2b8595eA1b627427EFE4f29A64b145DF439d16"},{"appName":"Lido","contractName":"MATIC reWARDS Committee","address":"0x87D93d9B2C672bf9c9642d853a8682546a5012B5"},{"appName":"Lido","contractName":"Moonriver reWARDS Committee","address":"0xDAFc1dcB93dA415604aC6187638F88a8Ff8d77A4"},{"appName":"Lido","contractName":"Moonbeam reWARDS Committee","address":"0x007132343cA619C5449297507B26c3f85e80D1b1"},{"appName":"Lido","contractName":"Finance Ops (legacy)","address":"0x48F300bD3C52c7dA6aAbDE4B683dEB27d38B9ABb"},{"appName":"Lido","contractName":"Cover Ops (legacy)","address":"0xD089cc83f5B803993E266ACEB929e52A993Ca2C8"}]'
        ),
        B = JSON.parse(
          '[{"appName":"Uniswap","contractName":"UniswapV3Factory","address":"0x1F98431c8aD98523631AE4a59f267346ea31F984"},{"appName":"Uniswap","contractName":"Multicall2","address":"0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"},{"appName":"Uniswap","contractName":"ProxyAdmin","address":"0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2"},{"appName":"Uniswap","contractName":"TickLens","address":"0xbfd8137f7d1516D3ea5cA83523914859ec47F573"},{"appName":"Uniswap","contractName":"Quoter","address":"0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"},{"appName":"Uniswap","contractName":"SwapRouter","address":"0xE592427A0AEce92De3Edee1F18E0157C05861564"},{"appName":"Uniswap","contractName":"NFTDescriptor","address":"0x42B24A95702b9986e82d421cC3568932790A48Ec"},{"appName":"Uniswap","contractName":"NonfungibleTokenPositionDescriptor","address":"0x91ae842A5Ffd8d12023116943e72A606179294f3"},{"appName":"Uniswap","contractName":"TransparentUpgradeableProxy","address":"0xEe6A57eC80ea46401049E92587E52f5Ec1c24785"},{"appName":"Uniswap","contractName":"NonfungiblePositionManager","address":"0xC36442b4a4522E871399CD717aBDD847Ab11FE88"},{"appName":"Uniswap","contractName":"V3Migrator","address":"0xA5644E29708357803b5A882D272c41cC0dF92B34"},{"appName":"Uniswap","contractName":"V1Factory","address":"0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95"},{"appName":"Uniswap","contractName":"UniswapV2Factory","address":"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"},{"appName":"Uniswap","contractName":"UniswapV2Router01","address":"0xf164fC0Ec4E93095b804a4795bBe1e041497b92a"},{"appName":"Uniswap","contractName":"UniswapV2Router02","address":"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"}]'
        ),
        l = JSON.parse(
          '[{"appName":"Aave","contractName":"LendingPoolAddressesProvideraLEND","address":"0x24a42fD28C976A61Df5D00D0599C34c4f90748c8"},{"appName":"Aave","contractName":"LendingPool","address":"0x398eC7346DcD622eDc5ae82352F02bE94C62d119"},{"appName":"Aave","contractName":"LendingPoolCore","address":"0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3"},{"appName":"Aave","contractName":"aETH","address":"0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04"},{"appName":"Aave","contractName":"aDAI","address":"0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d"},{"appName":"Aave","contractName":"aUSDC","address":"0x9bA00D6856a4eDF4665BcA2C2309936572473B7E"},{"appName":"Aave","contractName":"aSUSD","address":"0x625aE63000f46200499120B906716420bd059240"},{"appName":"Aave","contractName":"aTUSD","address":"0x4DA9b813057D04BAef4e5800E36083717b4a0341"},{"appName":"Aave","contractName":"aUSDT","address":"0x71fc860F7D3A592A4a98740e39dB31d25db65ae8"},{"appName":"Aave","contractName":"aBUSD","address":"0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8"},{"appName":"Aave","contractName":"aBAT","address":"0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00"},{"appName":"Aave","contractName":"aENJ","address":"0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40"},{"appName":"Aave","contractName":"aKNC","address":"0x9D91BE44C06d373a8a226E1f3b146956083803eB"},{"appName":"Aave","contractName":"aAAVE","address":"0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5"},{"appName":"Aave","contractName":"aLINK","address":"0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84"},{"appName":"Aave","contractName":"aMANA","address":"0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f"},{"appName":"Aave","contractName":"aMKR","address":"0x7deB5e830be29F91E298ba5FF1356BB7f8146998"},{"appName":"Aave","contractName":"aREN","address":"0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C"},{"appName":"Aave","contractName":"aREP","address":"0x71010A9D003445aC60C4e6A7017c1E89A477B438"},{"appName":"Aave","contractName":"aSNX","address":"0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE"},{"appName":"Aave","contractName":"aUNI","address":"0xB124541127A0A657f056D9Dd06188c4F1b0e5aab"},{"appName":"Aave","contractName":"aWBTC","address":"0xFC4B8ED459e00e5400be803A9BB3954234FD50e3"},{"appName":"Aave","contractName":"aYFI","address":"0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd"},{"appName":"Aave","contractName":"aZRX","address":"0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f"},{"appName":"Aave","contractName":"aLEND","address":"0x7D2D3688Df45Ce7C552E19c27e007673da9204B8"},{"appName":"Aave","contractName":"LendingPoolAddressProvider","address":"0x7fd53085B9A29D236235D6FC593b47C9C33429F1"},{"appName":"Aave","contractName":"LendingPool","address":"0x2F60C3EB259D63dcCa81fDE7Eaa216D9983D7C60"},{"appName":"Aave","contractName":"LendingPoolCore","address":"0x1012cfF81A1582ddD0616517eFB97D02c5c17E25"},{"appName":"Aave","contractName":"aUNI_USDC_ETH","address":"0x1D0e53A0e524E3CC92C1f0f33Ae268FfF8D7E7a5"},{"appName":"Aave","contractName":"aUNI_LINK_ETH","address":"0x9548DB8b1cA9b6c757485e7861918b640390169c"},{"appName":"Aave","contractName":"aUNI_DAI_ETH","address":"0xBbBb7F2aC04484F7F04A2C2C16f20479791BbB44"},{"appName":"Aave","contractName":"aUNI_LEND_ETH","address":"0xc88ebbf7c523f38ef3eb8a151273c0f0da421e63"},{"appName":"Aave","contractName":"aUNI_MKR_ETH","address":"0x8c69f7A4C9B38F1b48005D216c398Efb2F1Ce3e4"},{"appName":"Aave","contractName":"aUNI_SETH_ETH","address":"0x84BBcaB430717ff832c3904fa6515f97fc63C76F"},{"appName":"Aave","contractName":"aUniDAI","address":"0x048930eec73c91B44b0844aEACdEBADC2F2b6efb"},{"appName":"Aave","contractName":"aUniUSDC","address":"0xe02b2Ad63eFF3Ac1D5827cBd7AB9DD3DaC4f4AD0"},{"appName":"Aave","contractName":"aUniUSDT","address":"0xb977ee318010A5252774171494a1bCB98E7fab65"},{"appName":"Aave","contractName":"aUniETH","address":"0x6179078872605396Ee62960917128F9477a5DdbB"},{"appName":"Aave","contractName":"Main Market LendingPoolAddressesProvider","address":"0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"},{"appName":"Aave","contractName":"Main Market LendingPoolAddressesProviderRegistry","address":"0x52D306e36E3B6B02c153d0266ff0f85d18BCD413"},{"appName":"Aave","contractName":"Main Market LendingPool","address":"0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9"},{"appName":"Aave","contractName":"Main Market LendingPoolCollateralManager","address":"0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C"},{"appName":"Aave","contractName":"Main Market LendingPoolConfigurator","address":"0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756"},{"appName":"Aave","contractName":"Main Market LendingRateOracle","address":"0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D"},{"appName":"Aave","contractName":"Main Market Price Oracle","address":"0xA50ba011c48153De246E5192C8f9258A2ba79Ca9"},{"appName":"Aave","contractName":"Main Market Pool Admin","address":"0xee56e2b3d491590b5b31738cc34d5232f378a8d5"},{"appName":"Aave","contractName":"Main Market Emergency Admin","address":"0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633"},{"appName":"Aave","contractName":"Main Market ProtocolDataProvider","address":"0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"},{"appName":"Aave","contractName":"Main Market WETHGateway","address":"0xEFFC18fC3b7eb8E676dac549E0c693ad50D1Ce31"},{"appName":"Aave","contractName":"Main Market AaveCollector","address":"0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c"},{"appName":"Aave","contractName":"Main Market IncentivesController","address":"0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5"},{"appName":"Aave","contractName":"Main Market UiPoolDataProvider","address":"0x30375522F67a6308630d49A694ca1491fA2D3BC6"},{"appName":"Aave","contractName":"Main Market UiIncentiveDataProvider","address":"0xD01ab9a6577E1D84F142e44D49380e23A340387d"},{"appName":"Aave","contractName":"AMM Market LendingPoolAddressesProvider","address":"0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5"},{"appName":"Aave","contractName":"AMM Market LendingPool","address":"0x7937d4799803fbbe595ed57278bc4ca21f3bffcb"},{"appName":"Aave","contractName":"AMM Market LendingPoolCollateralManager","address":"0xbd4765210d4167ce2a5b87280d9e8ee316d5ec7c"},{"appName":"Aave","contractName":"AMM Market LendingPoolConfigurator","address":"0x23a875ede3f1030138701683e42e9b16a7f87768"},{"appName":"Aave","contractName":"AMM Market LendingRateOracle","address":"0x8a32f49ffba88aba6eff96f45d8bd1d4b3f35c7d"},{"appName":"Aave","contractName":"AMM Market Price Oracle","address":"0xa50ba011c48153de246e5192c8f9258a2ba79ca9"},{"appName":"Aave","contractName":"AMM Market ProtocolDataProvider","address":"0xc443AD9DDE3cecfB9dfC5736578f447aFE3590ba"},{"appName":"Aave","contractName":"AMM Market WETHGateway","address":"0x1C4a4e31231F71Fc34867D034a9E68f6fC798249"},{"appName":"Aave","contractName":"AMM Market Emergency Admin","address":"0xb9062896ec3a615a4e4444df183f0531a77218ae"}]'
        ),
        x = JSON.parse(
          '[{"appName":"Balancer","contractName":"Vault","address":"0xBA12222222228d8Ba445958a75a0704d566BF2C8"},{"appName":"Balancer","contractName":"BalancerHelpers","address":"0x5aDDCCa35b7A0D07C74063c48700C8590E87864E"},{"appName":"Balancer","contractName":"Authorizer","address":"0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6"},{"appName":"Balancer","contractName":"WeightedPoolFactory","address":"0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9"},{"appName":"Balancer","contractName":"WeightedPool2TokensFactory","address":"0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0"},{"appName":"Balancer","contractName":"StablePoolFactory","address":"0x8df6EfEc5547e31B0eb7d1291B511FF8a2bf987c"},{"appName":"Balancer","contractName":"LiquidityBootstrappingPoolFactory","address":"0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE"},{"appName":"Balancer","contractName":"MetaStablePoolFactory","address":"0x67d27634E44793fE63c467035E31ea8635117cd4"},{"appName":"Balancer","contractName":"WstETHRateProvider","address":"0x72D07D7DcA67b8A406aD1Ec34ce969c90bFEE768"},{"appName":"Balancer","contractName":"InvestmentPoolFactory","address":"0x48767F9F868a4A7b86A90736632F6E44C2df7fa9"},{"appName":"Balancer","contractName":"StablePhantomPoolFactory","address":"0xb08E16cFc07C684dAA2f93C70323BAdb2A6CBFd2"},{"appName":"Balancer","contractName":"AaveLinearPoolFactory","address":"0xD7FAD3bd59D6477cbe1BE7f646F7f1BA25b230f8"},{"appName":"Balancer","contractName":"ERC4626LinearPoolFactory","address":"0xE061bF85648e9FA7b59394668CfEef980aEc4c66"},{"appName":"Balancer","contractName":"NoProtocolFeeLiquidityBootstrappingPoolFactory","address":"0x0F3e0c4218b7b0108a3643cFe9D3ec0d4F57c54e"},{"appName":"Balancer","contractName":"BalancerRelayer","address":"0xAc9f49eF3ab0BbC929f7b1bb0A17E1Fca5786251"},{"appName":"Balancer","contractName":"BatchRelayerLibrary","address":"0x41B953164995c11C81DA73D212ED8Af25741b7Ac"},{"appName":"Balancer","contractName":"LidoRelayer","address":"0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965"},{"appName":"Balancer","contractName":"MerkleRedeem","address":"0x884226c9f7b7205f607922E0431419276a64CF8f"},{"appName":"Balancer","contractName":"MerkleOrchard","address":"0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca"},{"appName":"Balancer","contractName":"AuthorizerAdaptor","address":"0x8F42aDBbA1B16EaAE3BB5754915E0D06059aDd75"},{"appName":"Balancer","contractName":"BALTokenHolderFactory","address":"0xB848f50141F3D4255b37aC288C25C109104F2158"},{"appName":"Balancer","contractName":"BalancerTokenAdmin","address":"0xf302f9F50958c5593770FDf4d4812309fF77414f"},{"appName":"Balancer","contractName":"GaugeAdder","address":"0xEd5ba579bB5D516263ff6E1C10fcAc1040075Fe2"},{"appName":"Balancer","contractName":"VotingEscrow","address":"0xC128a9954e6c874eA3d62ce62B468bA073093F25"},{"appName":"Balancer","contractName":"GaugeController","address":"0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD"},{"appName":"Balancer","contractName":"BalancerMinter","address":"0x239e55F427D44C3cc793f49bFB507ebe76638a2b"},{"appName":"Balancer","contractName":"LiquidityGaugeFactory","address":"0x4E7bBd911cf1EFa442BC1b2e9Ea01ffE785412EC"},{"appName":"Balancer","contractName":"SingleRecipientGaugeFactory","address":"0x94f68b54191F62f781Fe8298A8A5Fa3ed772d227"},{"appName":"Balancer","contractName":"VotingEscrowDelegationProxy","address":"0x6f5a2eE11E7a772AeB5114A20d0D7c0ff61EB8A0"},{"appName":"Balancer","contractName":"veBALDeploymentCoordinator","address":"0xeb151668006CD04DAdD098AFd0a82e78F77076c3"},{"appName":"Balancer","contractName":"ArbitrumRootGaugeFactory","address":"0xad901309d9e9DbC5Df19c84f729f429F0189a633"},{"appName":"Balancer","contractName":"PolygonRootGaugeFactory","address":"0x4C4287b07d293E361281bCeEe8715c8CDeB64E34"},{"appName":"Balancer","contractName":"veBALL2GaugeSetupCoordinator","address":"0xd13AFc362F619b840C8f4AaC1D957cE219eF37Ca"},{"appName":"Balancer","contractName":"veBALGaugeFixCoordinator","address":"0xee47ef369CDa5a65639D7794b70a4d247826DdF3"},{"appName":"Balancer","contractName":"FeeDistributor","address":"0x26743984e3357eFC59f2fd6C1aFDC310335a61c9"},{"appName":"Balancer","contractName":"SmartWalletChecker","address":"0x7869296Efd0a76872fEE62A058C8fBca5c1c826C"},{"appName":"Balancer","contractName":"SmartWalletCheckerCoordinator","address":"0x26575A44755E0aaa969FDda1E4291Df22C5624Ea"},{"appName":"Balancer","contractName":"DistributionScheduler","address":"0xbfD9769b061E57e478690299011A028194D66e3C"},{"appName":"Balancer","contractName":"CorePoolFactory","address":"0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd"},{"appName":"Balancer","contractName":"BalancerSafeMath(library)","address":"0xCfE28868F6E0A24b7333D22D8943279e76aC2cdc"},{"appName":"Balancer","contractName":"RightsManager(library)","address":"0x0F811b1AF2B6B447B008eFF31eCceeE5A0b1d842"},{"appName":"Balancer","contractName":"SmartPoolManager(library)","address":"0xA3F9145CB0B50D907930840BB2dcfF4146df8Ab4"},{"appName":"Balancer","contractName":"SmartPoolFactory(CRPFactory)","address":"0xed52D8E202401645eDAD1c0AA21e872498ce47D0"},{"appName":"Balancer","contractName":"BActions","address":"0xde4A25A0b9589689945d842c5ba0CF4f0D4eB3ac"},{"appName":"Balancer","contractName":"ExchangeProxy","address":"0x3E66B66Fd1d0b02fDa6C811Da9E0547970DB2f21"},{"appName":"Balancer","contractName":"OnchainRegistry","address":"0x7226DaaF09B3972320Db05f5aB81FF38417Dd687"},{"appName":"Balancer","contractName":"MerkleRedeem(BALDistribution)","address":"0x6d19b2bF3A36A61530909Ae65445a906D98A2Fa8"}]'
        ),
        v = JSON.parse(
          '[{"appName":"Arrakis","contractName":"ArrakisFactory","address":"0xEA1aFf9dbFfD1580F6b81A3ad3589E66652dB7D9"},{"appName":"Arrakis","contractName":"ArrakisResolver","address":"0x0317650Af6f184344D7368AC8bB0bEbA5EDB214a"},{"appName":"Arrakis","contractName":"ArrakisRouter","address":"0x513E0a261af2D33B46F98b81FED547608fA2a03d"},{"appName":"Arrakis","contractName":"DAI-OPIUM","address":"0x2a2cd905141f1cdf3620db6a1ed0abc4f7e8635c"},{"appName":"Arrakis","contractName":"iETHV-USDC","address":"0x3a226284a0203ed16426f885d8596ae244b169a9"},{"appName":"Arrakis","contractName":"USDC-ETHV","address":"0xc11efd085154d8500c61fa988f72ad7c789d5c38"},{"appName":"Arrakis","contractName":"QAO-WETH","address":"0x256a607549910be8f51b53392583e075ee4511cb"},{"appName":"Arrakis","contractName":"RAI-WETH","address":"0x8ee2246b11d24827069f9fb3a9c17eb0277afb3d"},{"appName":"Arrakis","contractName":"QAO-WETH","address":"0xbf7a1e5d4b080df199fde2f2f35003954e1e9dc0"},{"appName":"Arrakis","contractName":"UDT-WETH","address":"0x48ac93d10e963a9f99682f53b62c257451e02940"},{"appName":"Arrakis","contractName":"USDC-USDT","address":"0x02f88164060912ee44ba9480d05d462d20cff3bc"},{"appName":"Arrakis","contractName":"FEI-USDC","address":"0x07baa98c5cdec970a3a4654f0fbb066404ff5fe0"},{"appName":"Arrakis","contractName":"DAI-FEI","address":"0x3d1556e84783672f2a3bd187a592520291442539"},{"appName":"Arrakis","contractName":"DAI-USDP","address":"0x4e807e056354de33b619699f8491ca8dbd67920d"},{"appName":"Arrakis","contractName":"USDC-FLOAT","address":"0x4f38892c16bfbb4f4f7424eefaa9767f4e922073"},{"appName":"Arrakis","contractName":"RAI-DAI","address":"0x50dcc017db93f02da4c36c0870dce4da9af6430a"},{"appName":"Arrakis","contractName":"USDC-WETH","address":"0xa6c49fd13e50a30c65e6c8480aada132011d0613"},{"appName":"Arrakis","contractName":"DAI-USDC","address":"0xabddafb225e10b90d798bb8a886238fb835e2053"},{"appName":"Arrakis","contractName":"DAI-FRAX","address":"0xb1cfdc7370550f5e421e1bf0bf3cadfadf3c4141"},{"appName":"Arrakis","contractName":"DAI-USDT","address":"0xd58c89181360dd9166881fce2bc7c9baae2d5f31"},{"appName":"Arrakis","contractName":"FRAX-USDC","address":"0xe668fe99123b3e901872a8c310ec2fa076e49fc1"}]'
        ),
        y = JSON.parse(
          '[{"appName":"dYdX","contractName":"SoloMargin","address":"0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e"},{"appName":"dYdX","contractName":"AdminImpl","address":"0x8a6629fEba4196E0A61B8E8C94D4905e525bc055"},{"appName":"dYdX","contractName":"OperationImpl","address":"0x56E7d4520ABFECf10b38368b00723d9BD3c21ee1"},{"appName":"dYdX","contractName":"PayableProxyForSoloMargin","address":"0xa8b39829cE2246f89B31C013b8Cde15506Fb9A76"},{"appName":"dYdX","contractName":"PolynomialInterestSetter","address":"0xaEE83ca85Ad63DFA04993adcd76CB2B3589eCa49"},{"appName":"dYdX","contractName":"Expiry","address":"0x0ECE224FBC24D40B446c6a94a142dc41fAe76f2d"},{"appName":"dYdX","contractName":"DaiPriceOracle","address":"0x52305C065579a8a620690cc39394514af905FF42"},{"appName":"dYdX","contractName":"SaiPriceOracle","address":"0x787F552BDC17332c98aA360748884513e3cB401a"},{"appName":"dYdX","contractName":"WethPriceOracle","address":"0xE852877D3cDBc8FB469208CB318c346bACC51C5C"},{"appName":"dYdX","contractName":"UsdcPriceOracle","address":"0x52f1c952A48a4588f9ae615d38cfdbf8dF036e60"},{"appName":"dYdX","contractName":"LiquidatorProxyV1ForSoloMargin","address":"0xD4B6cd147ad8A0D5376b6FDBa85fE8128C6f0686"},{"appName":"dYdX","contractName":"LimitOrders","address":"0xDEf136D9884528e1EB302f39457af0E4d3AD24EB"},{"appName":"dYdX","contractName":"StopLimitOrders","address":"0xbFb635e8c6689ac3874aD9A60FaB1c29270f1710"},{"appName":"dYdX","contractName":"CanonicalOrders","address":"0xCd81398895bEa7AD9EFF273aeFFc41A9d83B4dAD"},{"appName":"dYdX","contractName":"SignedOperationProxy","address":"0x2a842bC64343FAD4Ec4a8424ba7ff3c0A70b6e55"},{"appName":"dYdX","contractName":"Refunder","address":"0x7454dF5d0758D4E7A538c3aCF4841FA9137F0f74"},{"appName":"dYdX","contractName":"ExpiryV2","address":"0x739A1DF6725657f6a16dC2d5519DC36FD7911A12"},{"appName":"dYdX","contractName":"FinalSettlement","address":"0xc4E53Af1D56D3B2eF378134A2cA55676be2D0f1b"},{"appName":"dYdX","contractName":"DoubleExponentInterestSetter","address":"0x0eED07cED0C8c36D4a5bfF44F2536422Bb09BE45"},{"appName":"dYdX","contractName":"DaiMigrator","address":"0xAbe234e0D2D518bdB1d5a655014de18B1CfFFBEa"}]'
        ),
        S = JSON.parse(
          '[{"appName":"Aura","contractName":"VoterProxy","address":"0xaF52695E1bB01A16D33D7194C28C42b10e0Dbec2"},{"appName":"Aura","contractName":"Aura","address":"0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF"},{"appName":"Aura","contractName":"Booster","address":"0x7818A1DA7BD1E64c199029E86Ba244a9798eEE10"},{"appName":"Aura","contractName":"BoosterOwner","address":"0xFa838Af70314135159b309bf27f1DbF1F954eC34"},{"appName":"Aura","contractName":"RewardFactory","address":"0x45aaD11F2FA2C215bc9686eb6f06D46E0474F356"},{"appName":"Aura","contractName":"TokenFactory","address":"0xb6CE51DEE8BD4A2Fd11c01205414dc26f0b453AC"},{"appName":"Aura","contractName":"ProxyFactory","address":"0x7eD9003C6003EaCe1e8C3ae99F0Bb19894377b0F"},{"appName":"Aura","contractName":"StashFactory","address":"0x95171c9Ef5cA540A6d3502e9547fcFE022458Eb5"},{"appName":"Aura","contractName":"ExtraRewardStashV3","address":"0xF9C0f3431F859e773eD052758052e06B6D175742"},{"appName":"Aura","contractName":"auraBAL","address":"0x616e8BfA43F920657B3497DBf40D6b1A02D4608d"},{"appName":"Aura","contractName":"auraBALRewards","address":"0x5e5ea2048475854a5702F5B8468A51Ba1296EFcC"},{"appName":"Aura","contractName":"auraBALbootstrapping","address":"0xC47162863a12227E5c3B0860715F9cF721651C0c"},{"appName":"Aura","contractName":"crvDepositor","address":"0xeAd792B55340Aa20181A80d6a16db6A0ECd1b827"},{"appName":"Aura","contractName":"crvDepositorWrapper","address":"0x68655AD9852a99C87C0934c7290BB62CFa5D4123"},{"appName":"Aura","contractName":"PoolManager","address":"0xf843F61508Fc17543412DE55B10ED87f4C28DE50"},{"appName":"Aura","contractName":"AuraLocker(vlAURA)","address":"0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC"},{"appName":"Aura","contractName":"AuraStakingProxy","address":"0xd9e863B7317a66fe0a4d2834910f604Fd6F89C6c"},{"appName":"Aura","contractName":"Chef","address":"0x1ab80F7Fb46B25b7e0B2cfAC23Fc88AC37aaf4e9"},{"appName":"Aura","contractName":"PenaltyForwarder","address":"0x4043569200F7a7a1D989AbbaBC2De2Bde1C20D1E"},{"appName":"Aura","contractName":"ExtraRewardsDistributor","address":"0xA3739b206097317c72EF416F0E75BB8f58FbD308"},{"appName":"Aura","contractName":"PoolManagerProxy","address":"0x16A04E58a77aB1CE561A37371dFb479a8594947A"},{"appName":"Aura","contractName":"PoolManagerSecondaryProxy","address":"0xdc274F4854831FED60f9Eca12CaCbD449134cF67"},{"appName":"Aura","contractName":"VestedEscrows","address":"0x5bd3fCA8D3d8c94a6419d85E0a76ec8Da52d836a"},{"appName":"Aura","contractName":"​","address":"0x24346652e0e2aE0CE05c781501fDF4Fe4553fAc6"},{"appName":"Aura","contractName":"​","address":"0x45025Ebc38647bcf7Edd2b40CfDaF3fbfE1538F5"},{"appName":"Aura","contractName":"​","address":"0x43B17088503F4CE1AED9fB302ED6BB51aD6694Fa"},{"appName":"Aura","contractName":"​","address":"0xFd72170339AC6d7bdda09D1eACA346B21a30D422"},{"appName":"Aura","contractName":"Drops","address":"0x45EB1A004373b1D8457134A2C04a42d69D287724"},{"appName":"Aura","contractName":"​","address":"0x1a661CF8D8cd69dD2A423F3626A461A24280a8fB"},{"appName":"Aura","contractName":"ClaimZap","address":"0x623B83755a39B12161A63748f3f595A530917Ab2"},{"appName":"Aura","contractName":"FeeCollector","address":"0xCEeCeA8035e81C1148210DB3b2f870F470CC81bf"},{"appName":"Aura","contractName":"RewardDepositWrapper","address":"0xB188b1CB84Fb0bA13cb9ee1292769F903A9feC59"},{"appName":"Aura","contractName":"ClaimFeesHelper","address":"0x999dBcE0A18F721F04E793f916C30e72A9D0f56E"},{"appName":"Aura","contractName":"AuraMediators(NFT)","address":"0xfbd41e0c4517a684c121aa7dda2fc462d9592e63"}]'
        ),
        P = JSON.parse(
          '[{"appName":"1inch","contractName":"Oracle","address":"0x07D91f5fb9Bf7798734C3f606dB065549F6893bb"},{"appName":"1inch","contractName":"AggregationProtocol/Router","address":"0x1111111254fb6c44bAC0beD2854e76F90643097d"},{"appName":"1inch","contractName":"LimitOrderProtocolV2","address":"0x119c71d3bbac22029622cbaec24854d3d32d2828"},{"appName":"1inch","contractName":"1inchLiquidityProtocol:FactoryContract","address":"0xbAF9A5d4b0052359326A6CDAb54BABAa3a3A9643"},{"appName":"1inch","contractName":"RealityModuleETH","address":"0xa62D2a75eb39C12e908e9F6BF50f189641692F2E"},{"appName":"1inch","contractName":"GnosisSafeProxy","address":"0x7951c7ef839e26F63DA87a42C9a87986507f1c07"}]'
        ),
        T = JSON.parse(
          '[{"appName":"Hop","contractName":"Bonds: USDC ethereum-optimism","address":"0xa6a688F107851131F0E1dce493EbBebFAf99203e"},{"appName":"Hop","contractName":"Bonds: USDT ethereum-optimism","address":"0x15ec4512516d980090050fe101de21832c8edfee"},{"appName":"Hop","contractName":"Bonds: MATIC ethereum-gnosis","address":"0xd8781ca9163e9f132a4d8392332e64115688013a"},{"appName":"Hop","contractName":"Bonds: DAI ethereum-optimism","address":"0x10b6CbDFE187c04d63F179B87067C49e7a1E91Af"},{"appName":"Hop","contractName":"Bonds: ETH ethereum-optimism","address":"0x710bDa329b2a6224E4B44833DE30F38E7f81d564"},{"appName":"Hop","contractName":"Bonds: WBTC ethereum-optimism","address":"0x2A6303e6b99d451Df3566068EBb110708335658f"},{"appName":"Hop","contractName":"Bonds: HOP ethereum-optimism","address":"0x881296Edcb252080bd476c464cEB521d08df7631"},{"appName":"Hop","contractName":"Bonds: SNX ethereum-optimism","address":"0x547d28cDd6A69e3366d6aE3EC39543F09Bd09417"},{"appName":"Hop","contractName":"Bonds: USDC ethereum-l1CanonicalToken","address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{"appName":"Hop","contractName":"Bonds: USDC ethereum-l1Bridge","address":"0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a"},{"appName":"Hop","contractName":"Bonds: USDT ethereum-l1CanonicalToken","address":"0xdAC17F958D2ee523a2206206994597C13D831ec7"},{"appName":"Hop","contractName":"Bonds: USDT ethereum-l1Bridge","address":"0x3E4a3a4796d16c0Cd582C382691998f7c06420B6"},{"appName":"Hop","contractName":"Bonds: MATIC ethereum-l1CanonicalToken","address":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"},{"appName":"Hop","contractName":"Bonds: MATIC ethereum-l1Bridge","address":"0x22B1Cbb8D98a01a3B71D034BB899775A76Eb1cc2"},{"appName":"Hop","contractName":"Bonds: DAI ethereum-l1CanonicalToken","address":"0x6B175474E89094C44Da98b954EedeAC495271d0F"},{"appName":"Hop","contractName":"Bonds: DAI ethereum-l1Bridge","address":"0x3d4Cc8A61c7528Fd86C55cfe061a78dCBA48EDd1"},{"appName":"Hop","contractName":"Bonds: ETH ethereum-l1CanonicalToken","address":"0x0000000000000000000000000000000000000000"},{"appName":"Hop","contractName":"Bonds: ETH ethereum-l1Bridge","address":"0xb8901acB165ed027E32754E0FFe830802919727f"},{"appName":"Hop","contractName":"Bonds: WBTC ethereum-l1CanonicalToken","address":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"},{"appName":"Hop","contractName":"Bonds: WBTC ethereum-l1Bridge","address":"0xb98454270065A31D71Bf635F6F7Ee6A518dFb849"},{"appName":"Hop","contractName":"Bonds: HOP ethereum-l1CanonicalToken","address":"0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC"},{"appName":"Hop","contractName":"Bonds: HOP ethereum-l1Bridge","address":"0x914f986a44AcB623A277d6Bd17368171FCbe4273"},{"appName":"Hop","contractName":"Bonds: SNX ethereum-l1CanonicalToken","address":"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"},{"appName":"Hop","contractName":"Bonds: SNX ethereum-l1Bridge","address":"0x893246FACF345c99e4235E5A7bbEE7404c988b96"},{"appName":"Hop","contractName":"Bonds: sUSD ethereum-l1CanonicalToken","address":"0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"},{"appName":"Hop","contractName":"Bonds: sUSD ethereum-l1Bridge","address":"0x36443fC70E073fe9D50425f82a3eE19feF697d62"}]'
        ),
        h = JSON.parse(
          '[{"appName":"Multichain","contractName":"AnyswapV6Router","address":"0xBa8Da9dcF11B50B03fd5284f164Ef5cdEF910705"},{"appName":"Multichain","contractName":"AnyswapV6ERC20","address":"0x0615Dbba33Fe61a31c7eD131BDA6655Ed76748B1"},{"appName":"Multichain","contractName":"AnyCallProxy","address":"0x37414a8662bC1D25be3ee51Fb27C2686e2490A89"},{"appName":"Multichain","contractName":"MultiDao","address":"0x1722800c0f1BfDF916EF948Ef7790a861E90D558"},{"appName":"Multichain","contractName":"SwapTokens","address":"0xaed0472b498548B1354925d222B832b99Bb2EC60"},{"appName":"Multichain","contractName":"MultichainToken","address":"0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4"}]'
        ),
        U = JSON.parse(
          '[{"appName":"Celer","contractName":"Bridge Mainnet","address":"0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820"},{"appName":"Celer","contractName":"OriginalTokenVault Mainnet","address":"0xB37D31b2A74029B5951a2778F959282E2D518595"},{"appName":"Celer","contractName":"OriginalTokenVault V2 Mainnet","address":"0x7510792A3B1969F9307F3845CE88e39578f2bAE1"},{"appName":"Celer","contractName":"PeggedTokenBridge Mainnet","address":"0x16365b45EB269B5B5dACB34B4a15399Ec79b95eB"},{"appName":"Celer","contractName":"PeggedTokenBridge V2 Mainnet","address":"0x52E4f244f380f8fA51816c8a10A63105dd4De084"},{"appName":"Celer","contractName":"TransferAgent Mainnet","address":"0x9b274BC73940d92d0Af292Bde759cbFCCE661a0b"}]'
        ),
        R = JSON.parse(
          '[{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One Rollup","address":"0x5ef0d09d1e6204141b4d37530808ed19f60fba35"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One Delayed Inbox","address":"0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One Sequencer Inbox","address":"0x1c479675ad559dc151f6ec7ed3fbf8cee79582b6"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One Bridge","address":"0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One Outbox","address":"0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One ChallengeManager","address":"0xe5896783a2f463446e1f624e64aa6836be4c6f58"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One OneStepProver0","address":"0x499a4f574f2e4f8837e242adec86223ef7deefcc"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One OneStepProverMemory","address":"0xb556f3bb0fdcfeaf81a1c393e024a69a3327b676"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One OneStepProverMath","address":"0xd315ac3a82e8edaa84b347f478e0f59801747970"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One OneStepProverHostIo","address":"0xb965b08a826d4c7634e0df4c5ef5e1d1f9b5d13a"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One OneStepProofEntry","address":"0x3e1f62aa8076000c3218493fe3e0ae40bcb9a1df"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova Rollup","address":"0xfb209827c58283535b744575e11953dcc4bead88"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova Delayed Inbox","address":"0xc4448b71118c9071bcb9734a0eac55d18a153949"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova Sequencer Inbox","address":"0x211e1c4c7f1bf5351ac850ed10fd68cffcf6c21b"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova Bridge","address":"0xc1ebd02f738644983b6c4b2d440b8e77dde276bd"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova Outbox","address":"0xD4B80C3D7240325D18E645B49e6535A3Bf95cc58"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova ChallengeManager","address":"0xa59075221b50c598aed0eae0bb9869639513af0d"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova OneStepProver0","address":"0x8323b58c522690e6afae94044825f0c79a93d236"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova OneStepProverMemory","address":"0x7a6c0503107858f82a790e481024134092e19979"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova OneStepProverMath","address":"0x1efb116ebc38ce895eb2e5e009234e0e0836f2f5"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova OneStepProverHostIo","address":"0x9cbc3f14a57ce6ead0e770f528e2f1e8b8c37613"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova OneStepProofEntry","address":"0x7adca86896c4220f19b2f7f9746e7a99e57b0fc5"},{"appName":"Arbitrum","contractName":"Classic Outbox","address":"0x760723CD2e632826c38Fef8CD438A4CC7E7E1A40"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Gateway Router","address":"0x72Ce9c846789fdB6fC1f34aC4AD25Dd9ef7031ef"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Gateway Router","address":"0x5288c571Fd7aD117beA99bF60FE0846C4E84F933"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 ERC20 Gateway","address":"0xa3A7B6F88361F48403514059F1F16C8E78d60EeC"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 ERC20 Gateway","address":"0x09e9222E96E7B4AE2a407B98d48e330053351EEe"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Arb-Custom Gateway","address":"0xcEe284F754E854890e311e3280b767F80797180d"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Arb-Custom Gateway","address":"0x096760F208390250649E3e8763348E783AEF5562"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Weth Gateway","address":"0xd92023E9d9911199a6711321D1277285e6d4e2db"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Weth Gateway","address":"0x6c411aD3E74De3E7Bd422b94A27770f5B86C623B"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Weth","address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Weth","address":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L1 Gateway Router","address":"0xC840838Bc438d73C16c2f8b22D2Ce3669963cD48"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L2 Gateway Router","address":"0x21903d3F8176b1a0c17E953Cd896610Be9fFDFa8"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L1 ERC20 Gateway","address":"0xB2535b988dcE19f9D71dfB22dB6da744aCac21bf"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L2 ERC20 Gateway","address":"0xcF9bAb7e53DDe48A6DC4f286CB14e05298799257"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L1 Arb-Custom Gateway","address":"0x23122da8C581AA7E0d07A36Ff1f16F799650232f"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L2 Arb-Custom Gateway","address":"0xbf544970E6BD77b21C6492C281AB60d0770451F4"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L1 Weth Gateway","address":"0xE4E2121b479017955Be0b175305B35f312330BaE"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L2 Weth Gateway","address":"0x7626841cB6113412F9c88D3ADC720C9FAC88D9eD"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L1 Weth","address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum Nova L2 Weth","address":"0x722E8BdD2ce80A4422E880164f2079488e115365"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Dai Gateway","address":"0xD3B5b60020504bc3489D6949d545893982BA3011"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Dai Gateway","address":"0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L1 Livepeer Gateway","address":"0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676"},{"appName":"Arbitrum","contractName":"Mainnet: Arbitrum One L2 Livepeer Gateway","address":"0x6d2457a4ad276000a615295f7a80f79e48ccd318"}]'
        ),
        g = JSON.parse(
          '[{"appName":"Wormhole","contractName":"Core Bridge","address":"0x98f3c9e6E3fAce36bAAd05FE09d375Ef1464288B"},{"appName":"Wormhole","contractName":"Token Bridge","address":"0x3ee18B2214AFF97000D974cf647E7C347E8fa585"},{"appName":"Wormhole","contractName":"NFT Bridge","address":"0x6FFd7EdE62328b3Af38FCD61461Bbfc52F5651fE"}]'
        ),
        M = JSON.parse(
          '[{"appName":"Gnosis","contractName":"Mainnet TokenBridge","address":"0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016"},{"appName":"Gnosis","contractName":"xDai TokenBridge","address":"0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6"}]'
        ),
        I = JSON.parse(
          '[{"appName":"Optimism","contractName":"L1ChugSplashProxy","address":"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"},{"appName":"Optimism","contractName":"L1DAITokenBridge","address":"0x10E6593CDda8c58a1d0f14C5164B376352a55f2F"}]'
        ),
        w = JSON.parse(
          '[{"appName":"Beefy","contractName":"treasuryMultisig","address":"0xc9C61194682a3A5f56BF9Cd5B59EE63028aB6041"},{"appName":"Beefy","contractName":"strategyOwner","address":"0x1c9270ac5C42E51611d7b97b1004313D52c80293"},{"appName":"Beefy","contractName":"vaultOwner","address":"0x5B6C5363851EC9ED29CB7220C39B44E1dd443992"},{"appName":"Beefy","contractName":"keeper","address":"0x4fED5491693007f0CD49f4614FFC38Ab6A04B619"},{"appName":"Beefy","contractName":"launchpoolOwner","address":"0x34fEf5DA92c59d6aC21d0A75ce90B351D0Fb6CE6"},{"appName":"Beefy","contractName":"rewardPool","address":"0xF49c523F08B4e7c8E51a44088ea2a5e6b5f397D9"},{"appName":"Beefy","contractName":"beefyFeeRecipient","address":"0x8237f3992526036787E8178Def36291Ab94638CD"},{"appName":"Beefy","contractName":"multicall","address":"0x9dA9f3C6c45F1160b53D395b0A982aEEE1D212fE"},{"appName":"Beefy","contractName":"bifiMaxiStrategy","address":"0xd1bAb603eee03fA99A378d90d5d83186fEB81aA9"},{"appName":"Beefy","contractName":"voter","address":"0x5e1caC103F943Cd84A1E92dAde4145664ebf692A"},{"appName":"Beefy","contractName":"beefyFeeConfig","address":"0x3d38BA27974410679afF73abD096D7Ba58870EAd"},{"appName":"Beefy","contractName":"vaultFactory","address":"0xC551dDCE8e5E657503Cd67A39713c06F2c0d2e97"},{"appName":"Beefy","contractName":"BIFI Token","address":"0x5870700f1272a1AdbB87C3140bD770880a95e55D"}]'
        ),
        k = JSON.parse(
          '[{"appName":"Instadapp","contractName":"Index","address":"0x2971adfa57b20e5a416ae5a708a8655a9c74f723"},{"appName":"Instadapp","contractName":"InstaList","address":"0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb"},{"appName":"Instadapp","contractName":"InstaAccount","address":"0xFE02a32Cbe0CB9ad9A945576A5bb53A3C123A3A3"},{"appName":"Instadapp","contractName":"InstaConnectors","address":"0x97b0B3A8bDeFE8cB9563a3c610019Ad10DB8aD11"},{"appName":"Instadapp","contractName":"InstaMemory","address":"0x8a5419CfC711B2343c17a6ABf4B2bAFaBb06957F"},{"appName":"Instadapp","contractName":"Implementations","address":"0xCBA828153d3a85b30B5b912e1f2daCac5816aE9D"},{"appName":"Instadapp","contractName":"InstaFlashAggregator","address":"0x619Ad2D02dBeE6ebA3CDbDA3F98430410e892882"},{"appName":"Instadapp","contractName":"InstaFlashResolver","address":"0x10c7B513b7d37f40bdBCE77183b9112ec35CAec1"},{"appName":"Instadapp","contractName":"Treasury","address":"0x28849D2b63fA8D361e5fc15cB8aBB13019884d09"}]'
        ),
        L = JSON.parse(
          '[{"appName":"Liquity","contractName":"activePool","address":"0xDf9Eb223bAFBE5c5271415C75aeCD68C21fE3D7F"},{"appName":"Liquity","contractName":"borrowerOperations","address":"0x24179CD81c9e782A4096035f7eC97fB8B783e007"},{"appName":"Liquity","contractName":"troveManager","address":"0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2"},{"appName":"Liquity","contractName":"collSurplusPool","address":"0x3D32e8b97Ed5881324241Cf03b2DA5E2EBcE5521"},{"appName":"Liquity","contractName":"communityIssuance","address":"0xD8c9D9071123a059C6E0A945cF0e0c82b508d816"},{"appName":"Liquity","contractName":"defaultPool","address":"0x896a3F03176f05CFbb4f006BfCd8723F2B0D741C"},{"appName":"Liquity","contractName":"hintHelpers","address":"0xE84251b93D9524E0d2e621Ba7dc7cb3579F997C0"},{"appName":"Liquity","contractName":"lockupContractFactory","address":"0x2eBeF24dA09489218Ba2BECb01867F6DaAeDcD4B"},{"appName":"Liquity","contractName":"lqtyStaking","address":"0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d"},{"appName":"Liquity","contractName":"priceFeed","address":"0x4c517D4e2C851CA76d7eC94B805269Df0f2201De"},{"appName":"Liquity","contractName":"sortedTroves","address":"0x8FdD3fbFEb32b28fb73555518f8b361bCeA741A6"},{"appName":"Liquity","contractName":"stabilityPool","address":"0x66017D22b0f8556afDd19FC67041899Eb65a21bb"},{"appName":"Liquity","contractName":"gasPool","address":"0x9555b042F969E561855e5F28cB1230819149A8d9"},{"appName":"Liquity","contractName":"unipool","address":"0xd37a77E71ddF3373a79BE2eBB76B6c4808bDF0d5"},{"appName":"Liquity","contractName":"lusdToken","address":"0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"},{"appName":"Liquity","contractName":"lqtyToken","address":"0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D"},{"appName":"Liquity","contractName":"multiTroveGetter","address":"0xFc92d0E9Fa35df17E3A6d9F40716ca2cE749922B"},{"appName":"Liquity","contractName":"uniToken","address":"0xF20EF17b889b437C151eB5bA15A47bFc62bfF469"},{"appName":"Liquity","contractName":"Optimism LUSD Address","address":"0xc40F949F8a4e094D1b49a23ea9241D289B7b2819"}]'
        ),
        _ = JSON.parse(
          '[{"appName":"Gearbox","contractName":"ETH (WETH) PoolService","address":"0xB03670c20F87f2169A7c4eBE35746007e9575901"},{"appName":"Gearbox","contractName":"wstETH PoolService","address":"0xB8cf3Ed326bB0E51454361Fb37E9E8df6DC5C286"},{"appName":"Gearbox","contractName":"USDC PoolService","address":"0x86130bDD69143D8a4E5fc50bf4323D48049E98E4"},{"appName":"Gearbox","contractName":"DAI PoolService","address":"0x24946bCbBd028D5ABb62ad9B635EB1b1a67AF668"},{"appName":"Gearbox","contractName":"WBTC PoolService","address":"0xB2A015c71c17bCAC6af36645DEad8c572bA08A08"},{"appName":"Gearbox","contractName":"Dev Multisig","address":"0xA7D5DDc1b8557914F158076b228AA91eF613f1D5"},{"appName":"Gearbox","contractName":"Treasury Multisig","address":"0x7b065Fcb0760dF0CEA8CFd144e08554F3CeA73D1"},{"appName":"Gearbox","contractName":"AccountMining","address":"0x7B1AAF21AC0D420666B5966338FF9aEe763C29DF"},{"appName":"Gearbox","contractName":"Contract Deployer","address":"0x20Da9f3D7D5CB96C2822338830Cfd6DeE6d508d8"},{"appName":"Gearbox","contractName":"GEAR Token","address":"0xBa3335588D9403515223F109EdC4eB7269a9Ab5D"},{"appName":"Gearbox","contractName":"Token Distributor","address":"0xf7512B2B20Cf427ADD8b01D8CDEef97a4B0E2C27"},{"appName":"Gearbox","contractName":"StepVesting","address":"0xA8B1D00b1D224E83760963E361B7f676581a622D"}]'
        ),
        O = JSON.parse(
          '[{"appName":"StakeWise","contractName":"SWISE Token","address":"0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2"},{"appName":"StakeWise","contractName":"rETH2 Token","address":"0x20BC832ca081b91433ff6c17f85701B6e92486c5"},{"appName":"StakeWise","contractName":"sETH2 Token","address":"0xFe2e637202056d30016725477c5da089Ab0A043A"},{"appName":"StakeWise","contractName":"Pool Escrow","address":"0x2296e122c1a20Fca3CAc3371357BdAd3be0dF079"},{"appName":"StakeWise","contractName":"Pool","address":"0xC874b064f465bdD6411D45734b56fac750Cda29A"},{"appName":"StakeWise","contractName":"Pool Validators","address":"0x002932e11E95DC84C17ed5f94a0439645D8a97BC"},{"appName":"StakeWise","contractName":"Oracles","address":"0x8a887282E67ff41d36C0b7537eAB035291461AcD"},{"appName":"StakeWise","contractName":"Vesting Escrow","address":"0xaE678D2A911400a55e06f4A1F0C0B363F3eE2e42"},{"appName":"StakeWise","contractName":"Vesting Escrow Factory","address":"0x7B910cc3D4B42FEFF056218bD56d7700E4ea7dD5"},{"appName":"StakeWise","contractName":"Merkle Distributor","address":"0xA3F21010e8b9a3930996C8849Df38f9Ca3647c20"},{"appName":"StakeWise","contractName":"Roles","address":"0xC486c10e3611565F5b38b50ad68277b11C889623"},{"appName":"StakeWise","contractName":"Proxy Admin","address":"0x3EB0175dcD67d3AB139aA03165e24AA2188A4C22"},{"appName":"StakeWise","contractName":"Gnosis Safe","address":"0x144a98cb1CdBb23610501fE6108858D9B7D24934"},{"appName":"StakeWise","contractName":"Dao Module","address":"0xb5cf5363c3e766e64b37b2fb9554bfe8d48ed1a0"}]'
        ),
        H = JSON.parse(
          '[{"appName":"BitDao","contractName":"Main Contract","address":"0x78605Df79524164911C144801f41e9811B7DB73D"},{"appName":"BitDao","contractName":"BIT Token","address":"0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5"},{"appName":"BitDao","contractName":"(Delegated Voter) Game7","address":"0x4E0189610Ae7a2D508374edbFF728cB1013C5615"},{"appName":"BitDao","contractName":"(Delegated Voter) Windranger Labs","address":"0x09da12f0977eD3534124a4f593D9C1a243beA598"},{"appName":"BitDao","contractName":"(Delegated Voter) Davion Labs","address":"0x7E2f1cF2174788E3dbA18A3633cD33BBa047B38d"},{"appName":"BitDao","contractName":"(Delegated Voter) Mantle Coordinator","address":"0x75C53632FB3ed2D97f4427DF9b14e844Ce9B6520"},{"appName":"BitDao","contractName":"(Delegated Voter) Mantle Product","address":"0x8c1B9DF70E6cf13F8387dC2870afB3C7091F3ad5"},{"appName":"BitDao","contractName":"(Delegated Voter) Mantle Core Engineering","address":"0xf23d8514b671262Ac91A9f46B97901fA8833aB73"},{"appName":"BitDao","contractName":"(Delegated Voter) Dragon Fly","address":"0x4a8B77019176401BA65446Cb9865A64bD2E4bC67"},{"appName":"BitDao","contractName":"(Delegated Voter) Pantera Capital","address":"0x5BC928BF0DAb1e4A2ddd9e347b0F22e88026D76c"},{"appName":"BitDao","contractName":"(Delegated Voter) Spartan Group","address":"0x2573010A8183A7E8bB4AD744b44cf6feB3284e8E"},{"appName":"BitDao","contractName":"(Delegated Voter) Mirana Ventures","address":"0x03BA846444AAb999F1536bdFA3241fD900E4A84f"},{"appName":"BitDao","contractName":"(Delegated Voter) Bybit ","address":"0x853eDd954dD508117cb957918378c976ac390D8E"},{"appName":"BitDao","contractName":"Private Sale","address":"0x117c7c3835e7465926AE4ebc3F4e5A3c5afE108d"},{"appName":"BitDao","contractName":"Launch Partner Rewards","address":"0xF405127e31E96216F6214983546E7A2dE2b9881b"},{"appName":"BitDao","contractName":"Launch Partner Rewards","address":"0xd9107D1d077C2516e83cB41f41883570D904f050"},{"appName":"BitDao","contractName":"Bit DAO Treasury","address":"0x02c2E03c5F241794909D953F5b8fA630856F172C"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x5a076b2D0941F2BC9b49d05D3a1FF9C7aCDc5e78"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x1aDCf8D5fdbdB3584dD632Ad6A465d29fB66D15C"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x4C4813A2FA0cF25882867bdFf2016c0346Eb505A"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0xa89Fa59b419EEDf66E749cBF7Bf1F8450e9D1fa8"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0xdB2EFcfaCACe60ceAcC7885e20E965CB2C994511"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x3F7b35C3492584FF5E1498866037deB0DAa7f5Fa"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x56526674663bAfFEd296b38F26820bdd6FffBB0a"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x8C2E783E61A2A27F0d4FcBd47B6335Bf56D67DbD"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0xdE4265C62A1A1bAEC459Ee77478E2e629a5C8767"},{"appName":"BitDao","contractName":"Bybit Flexible","address":"0x923b64125293d0e682AC98ba638E9b3283D9992a"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0xE5791f93b997c7Fc90753A1f2711E479773a2A87"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0xf6032C7c15bF4B56bfc5D69208f9ce47F5958512"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0xb67e28a7e0D1AD886eeeb18B0BDa55b7Efb56113"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0x991A91681f80cb890338B89C1A72be719A902d8B"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0x16fE6e64447051b1Eb68d6408F041ac22f6fd563"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0x44b4bABd7cbC8cE32Dc3Ff77ed9B6dF9E2D11003"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0x3329Fbcda16f15c4Ed1D6847BF18e9d045EE941F"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0xa2E5e8A607562B7BdA05d5820e569C290b43be6D"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0x3A9B1Da81ca44FEBc97A713242F6a3FeeeC7C891"},{"appName":"BitDao","contractName":"Bybit Locked","address":"0xc20C13D2303EEAEEaeb7f73BabF7014bce6D130a"},{"appName":"BitDao","contractName":"Bybit Contributions","address":"0x6a159503e49ddB8E49659D6CACf5236aC4213D86"},{"appName":"BitDao","contractName":"BIT Burn","address":"0x000000000000000000000000000000000000dEaD"}]'
        ),
        V = JSON.parse(
          '[{"appName":"Synthetix","contractName":"AddressResolver","address":"0x823bE81bbF96BEc0e25CA13170F5AaCb5B79ba83"},{"appName":"Synthetix","contractName":"CircuitBreaker","address":"0x9f231dBE53D460f359B2B8CC47574493caA5B7Bf"},{"appName":"Synthetix","contractName":"CollateralErc20","address":"0xaa03aB31b55DceEeF845C8d17890CC61cD98eD04"},{"appName":"Synthetix","contractName":"CollateralEth","address":"0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA"},{"appName":"Synthetix","contractName":"CollateralManager","address":"0x067e398605E84F2D0aEEC1806e62768C5110DCc6"},{"appName":"Synthetix","contractName":"CollateralManagerState","address":"0x573E5105c4B92416D1544A188F1bf77d442Bb52d"},{"appName":"Synthetix","contractName":"CollateralShort","address":"0x1F2c3a1046c32729862fcB038369696e3273a516"},{"appName":"Synthetix","contractName":"CollateralState","address":"0x8A1A00Df7aA0102497C7591912bA8301e8dB8CdB"},{"appName":"Synthetix","contractName":"CollateralState","address":"0xbe5B5a7c198bC156474ed5c33CBf2F3F604F8fF8"},{"appName":"Synthetix","contractName":"CollateralState","address":"0x13A114a3Fa8A6CE03a0C5488BE9e614d78eDdb0c"},{"appName":"Synthetix","contractName":"DappMaintenance","address":"0xAb0B2f1Cf979cdbF4676251F35353eC5AF2732Dd"},{"appName":"Synthetix","contractName":"DebtCache","address":"0x1620Aa736939597891C1940CF0d28b82566F9390"},{"appName":"Synthetix","contractName":"DelegateApprovals","address":"0x15fd6e554874B9e70F832Ed37f231Ac5E142362f"},{"appName":"Synthetix","contractName":"EternalStorage","address":"0x8F586F063ffbb89b186C8e604FC6614766f9C9d1"},{"appName":"Synthetix","contractName":"Depot","address":"0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86"},{"appName":"Synthetix","contractName":"DirectIntegrationManager","address":"0x5F41718459955217df6A02AA8f5C19614ECfA6E7"},{"appName":"Synthetix","contractName":"EscrowChecker","address":"0x3b399e00AFd8201ACf8A5a0EcCF1C47d8D5E41da"},{"appName":"Synthetix","contractName":"EtherWrapper","address":"0xC1AAE9d18bBe386B102435a8632C8063d31e747C"},{"appName":"Synthetix","contractName":"ExchangeCircuitBreaker","address":"0xeAcaEd9581294b1b5cfb6B941d4B8B81B2005437"},{"appName":"Synthetix","contractName":"ExchangeRatesWithDexPricing","address":"0x648280dD2db772CD018A0CEC72fab5bF8B7683AB"},{"appName":"Synthetix","contractName":"ExchangeSettlementLib","address":"0xAa5A3D7F04E15b22Eb3664B56310aA18A3527Ec7"},{"appName":"Synthetix","contractName":"ExchangeState","address":"0x545973f28950f50fc6c7F52AAb4Ad214A27C0564"},{"appName":"Synthetix","contractName":"ExchangerWithFeeRecAlternatives","address":"0xaeA0065E146FD75Dc24465961a583827284D405a"},{"appName":"Synthetix","contractName":"FeePool","address":"0x3B2f389AeE480238A49E3A9985cd6815370712eB"},{"appName":"Synthetix","contractName":"FeePoolEternalStorage","address":"0xC9DFff5fA5605fd94F8B7927b892F2B57391e8bB"},{"appName":"Synthetix","contractName":"FeePoolState","address":"0x11164F6a47C3f8472D19b9aDd516Fc780cb7Ee02"},{"appName":"Synthetix","contractName":"FlexibleStorage","address":"0xc757aCBa3c0506218b3022266a9DC7F3612d85f5"},{"appName":"Synthetix","contractName":"EmptyFuturesMarketManager","address":"0xe343542366A9f3Af56Acc6D68154Cfaf23efeba6"},{"appName":"Synthetix","contractName":"IssuanceEternalStorage","address":"0x631E93A0fb06B5eC6d52c0A2D89a3f9672d6Ba64"},{"appName":"Synthetix","contractName":"Issuer","address":"0x5810Fc0E79F4323B2dd3c638914083Fd23a941C0"},{"appName":"Synthetix","contractName":"Liquidator","address":"0x8e9757479D5ad4E7f9d951B60d39F5220b893d6c"},{"appName":"Synthetix","contractName":"LiquidatorRewards","address":"0xf79603a71144e415730C1A6f57F366E4Ea962C00"},{"appName":"Synthetix","contractName":"Math","address":"0x385e1Eb2FF28F4A637DA2C9971F8CAF5F5b1E77c"},{"appName":"Synthetix","contractName":"NativeEtherWrapper","address":"0x7A3d898b717e50a96fd8b232E9d15F0A547A7eeb"},{"appName":"Synthetix","contractName":"OneNetAggregatorDebtRatio","address":"0x977d0DD7eA212E9ca1dcD4Ec15cd7Ceb135fa68D"},{"appName":"Synthetix","contractName":"OneNetAggregatorIssuedSynths","address":"0xcf1405b18dBCEA2893Abe635c88359C75878B9e1"},{"appName":"Synthetix","contractName":"OneNetAggregatorsDEFI","address":"0x646F23085281Dbd006FBFD211FD38d0743884864"},{"appName":"Synthetix","contractName":"OwnerRelayOnEthereum","address":"0x0e16A6876210841577b233C4165d7B7EdF640b8a"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"},{"appName":"Synthetix","contractName":"Proxy","address":"0xb440DD674e1243644791a4AdfE3A2AbB0A92d309"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xe36E2D3c7c34281FA3bC737950a68571736880A1"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xF48e200EAF9906362BB1442fca31e0835773b8B4"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x104eDF1da359506548BFc7c25bA1E28C16a70235"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xD71eCFF9342A5Ced620049e616c5035F1dB98620"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B"},{"appName":"Synthetix","contractName":"ProxyERC20","address":"0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6"},{"appName":"Synthetix","contractName":"ReadProxy","address":"0x4E3b31eB0E5CB73641EE1E65E7dCEFe520bA3ef2"},{"appName":"Synthetix","contractName":"RewardEscrow","address":"0xb671F2210B1F6621A2607EA63E6B2DC3e2464d1F"},{"appName":"Synthetix","contractName":"RewardEscrowV2","address":"0xAc86855865CbF31c8f9FBB68C749AD5Bd72802e3"},{"appName":"Synthetix","contractName":"RewardEscrowV2Storage","address":"0x182738BD9eE9810BC11f1c81b07Ec6F3691110BB"},{"appName":"Synthetix","contractName":"RewardsDistribution","address":"0x29C295B046a73Cde593f21f63091B072d407e3F2"},{"appName":"Synthetix","contractName":"SafeDecimalMath","address":"0x84D626B2BB4D0F064067e4BF80FCe7055d8F3E7B"},{"appName":"Synthetix","contractName":"ShortingRewards","address":"0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a"},{"appName":"Synthetix","contractName":"ShortingRewards","address":"0x12DC1273915A16ab8BD47bA7866B240c253e4c12"},{"appName":"Synthetix","contractName":"SignedSafeDecimalMath","address":"0x728A2B79Cad691531CC1146eF802617FF50c7095"},{"appName":"Synthetix","contractName":"StakingRewardsSNXBalancer","address":"0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x167009dcDA2e49930a71712D956f02cc980DcC1b"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x7af65f1740c0eB816A27FD808EaF6Ab09F6Fa646"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0xDC338C7544654c7dadFEb7E44076E457963113B0"},{"appName":"Synthetix","contractName":"StakingRewardssBTCCurve","address":"0x13C1542A468319688B89E323fe9A3Be3A90EBb27"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x1C1D97f6338759AB814a5A717aE359573Ab5D5d4"},{"appName":"Synthetix","contractName":"StakingRewardssETHUniswapV1","address":"0x48D7f315feDcaD332F68aafa017c7C158BC54760"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0xc0d8994Cd78eE1980885DF1A0C5470fC977b5cFe"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x26Fa0665660c1D3a3666584669511d3c66Ad37Cb"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x6fB7F0E78582746bd01BcB6dfbFE62cA5F4F9175"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x9D003Cc298E7Ea141A809C241C0a703176DA3ba3"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0x8Ef8cA2AcAaAfEc19fB366C11561718357F780F2"},{"appName":"Synthetix","contractName":"StakingRewards","address":"0xF0de877F2F9E7A60767f9BA662F10751566AD01c"},{"appName":"Synthetix","contractName":"StakingRewardssUSDCurve","address":"0xDCB6A51eA3CA5d3Fd898Fd6564757c7aAeC3ca92"},{"appName":"Synthetix","contractName":"StakingRewardssXAUUniswapV2","address":"0x8302FE9F0C509a996573D3Cc5B0D5D51e4FDD5eC"},{"appName":"Synthetix","contractName":"SupplySchedule","address":"0x8d203C458d536Fe0F97e9f741bC231EaC8cd91cf"},{"appName":"Synthetix","contractName":"SynthRedeemer","address":"0xe533139Af961c9747356D947838c98451015e234"},{"appName":"Synthetix","contractName":"SynthUtil","address":"0x81Aee4EA48f678E172640fB5813cf7A96AFaF6C3"},{"appName":"Synthetix","contractName":"Synthetix","address":"0x883A0E7b329Df75476d9378462522CF2f78Fab3d"},{"appName":"Synthetix","contractName":"SynthetixBridgeEscrow","address":"0x5Fd79D46EBA7F351fe49BFF9E87cdeA6c821eF9f"},{"appName":"Synthetix","contractName":"SynthetixBridgeToOptimism","address":"0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F"},{"appName":"Synthetix","contractName":"SynthetixDebtShare","address":"0x89FCb32F29e509cc42d0C8b6f058C993013A843F"},{"appName":"Synthetix","contractName":"SynthetixEscrow","address":"0x971e78e0C92392A4E39099835cF7E6aB535b2227"},{"appName":"Synthetix","contractName":"SynthetixState","address":"0x4b9Ca5607f1fF8019c1C6A3c2f0CC8de622D5B82"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x942Eb6e8c029EB22103743C99985aF4F4515a559"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x91b82d62Ff322b8e02b86f33E9A99a813437830d"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xfb020CA7f4e8C4a5bBBe060f59a249c6275d2b69"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x1cB004a8e84a5CE95C1fF895EE603BaC8EC506c7"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xBb5b03E920cF702De5A3bA9Fc1445aF4B3919c88"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x75A0c1597137AA36B40b6a515D997F9a6c6eefEB"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x5D4C724BFe3a228Ff0E29125Ac1571FE093700a4"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x07C1E81C345A7c58d7c24072EFc5D929BD0647AD"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xa8E31E3C38aDD6052A9407298FAEB8fD393A6cF9"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xdc883b9d9Ee16f74bE08826E68dF4C9D9d26e8bD"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xE1cc2332852B2Ac0dA59A1f9D3051829f4eF3c1C"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xdAe6C79c46aB3B280Ca28259000695529cbD1339"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0xDF69bC4541b86Aa4c5A470B4347E730c38b2c3B2"},{"appName":"Synthetix","contractName":"MultiCollateralSynth","address":"0x10A5F7D9D65bCc2734763444D4940a31b109275f"},{"appName":"Synthetix","contractName":"SystemSettings","address":"0x202ae40Bed1640b09e2AF7aC5719D129A498B7C8"},{"appName":"Synthetix","contractName":"SystemSettingsLib","address":"0x4a39AEf2281ac0D192a9c4783604833bA8F31174"},{"appName":"Synthetix","contractName":"SystemStatus","address":"0x696c905F8F8c006cA46e9808fE7e00049507798F"},{"appName":"Synthetix","contractName":"LegacyTokenState","address":"0x5b1b5fEa1b99D83aD479dF0C222F0492385381dD"},{"appName":"Synthetix","contractName":"TokenState","address":"0x9BcED8A8E3Ad81c9b146FFC880358f734A06f7c0"},{"appName":"Synthetix","contractName":"TokenState","address":"0x9956c5019a24fbd5B506AD070b771577bAc5c343"},{"appName":"Synthetix","contractName":"TokenState","address":"0xCb29D2cf2C65d3Be1d00F07f3441390432D55203"},{"appName":"Synthetix","contractName":"TokenState","address":"0x4F6296455F8d754c19821cF1EC8FeBF2cD456E67"},{"appName":"Synthetix","contractName":"TokenState","address":"0x52496fE8a4feaEFe14d9433E00D48E6929c13deC"},{"appName":"Synthetix","contractName":"TokenState","address":"0x73B1a2643507Cd30F11Dfcf2D974f4373E5BC077"},{"appName":"Synthetix","contractName":"TokenState","address":"0x34A5ef81d18F3a305aE9C2d7DF42beef4c79031c"},{"appName":"Synthetix","contractName":"TokenState","address":"0x042A7A0022A7695454ac5Be77a4860e50c9683fC"},{"appName":"Synthetix","contractName":"TokenState","address":"0x6568D9e750fC44AF00f857885Dfb8281c00529c4"},{"appName":"Synthetix","contractName":"TokenState","address":"0x7e88D19A79b291cfE5696d496055f7e57F537A75"},{"appName":"Synthetix","contractName":"TokenState","address":"0x4dFACfB15514C21c991ff75Bc7Bf6Fb1F98361ed"},{"appName":"Synthetix","contractName":"TokenState","address":"0x93B6e9FbBd2c32a0DC3C2B943B7C3CBC2fE23730"},{"appName":"Synthetix","contractName":"TokenState","address":"0x577D4a7395c6A5f46d9981a5F83fa7294926aBB0"},{"appName":"Synthetix","contractName":"TokenState","address":"0x05a9CBe762B36632b3594DA4F082340E0e5343e8"},{"appName":"Synthetix","contractName":"TradingRewards","address":"0x62922670313bf6b41C580143d1f6C173C5C20019"},{"appName":"Synthetix","contractName":"VirtualSynthMastercopy","address":"0xf02ce48fD47D7FA1B7a45a0444805d320D035775"},{"appName":"Synthetix","contractName":"WrapperFactory","address":"0x02f9bC46beD33acdB9cb002fe346734CeF8a9480"}]'
        ),
        Y = JSON.parse(
          '[{"appName":"Ocean Protocol","contractName":"OCEAN Token","address":"0x967da4048cD07aB37855c090aAF366e4ce1b9F48"},{"appName":"Ocean Protocol","contractName":"OPFCommunityFeeCollector","address":"0x49E35cd2bAE043Abd9074B6e5a649a5AdEB05C33"},{"appName":"Ocean Protocol","contractName":"poolTemplate","address":"0x8daC419D5D81Af8c8E795D0D73f64d5220e28cd8"},{"appName":"Ocean Protocol","contractName":"Router","address":"0x8149276f275EEFAc110D74AFE8AFECEaeC7d1593"},{"appName":"Ocean Protocol","contractName":"FixedPrice","address":"0xfa48673a7C36A2A768f89AC1ee8C355D5c367B02"},{"appName":"Ocean Protocol","contractName":"Staking","address":"0x7842Fa3B2d87Ff1cd52C4152382f7C4B3406E5A6"},{"appName":"Ocean Protocol","contractName":"ERC20Template","address":"0x973e69303259B0c2543a38665122b773D28405fB"},{"appName":"Ocean Protocol","contractName":"ERC20Template","address":"0x3E85e7Cb15880b6d4871092E74bF65CE03E8448D"},{"appName":"Ocean Protocol","contractName":"ERC721Template","address":"0x4344D4Bc29531DB736378e9A3dA85BF1eff0CB22"},{"appName":"Ocean Protocol","contractName":"Dispenser","address":"0x8bA04715B1b210f710426b21A29887EEd4EA6751"},{"appName":"Ocean Protocol","contractName":"ERC721Factory","address":"0x1706DF1f2d93558D1d77bEd49ccdB8B88fAfC306"},{"appName":"Ocean Protocol","contractName":"DFRewards","address":"0xFe27534EA0c016634b2DaA97Ae3eF43fEe71EEB0"},{"appName":"Ocean Protocol","contractName":"DFStrategyV1","address":"0x545138e8D76C304C916B1261B3f6c446fe4f63e3"},{"appName":"Ocean Protocol","contractName":"veOCEAN","address":"0xE86Bf3B0D3a20444DE7c78932ACe6e5EfFE92379"},{"appName":"Ocean Protocol","contractName":"veAllocate","address":"0x55567E038b0a50283084ae773FA433a5029822d3"},{"appName":"Ocean Protocol","contractName":"veDelegation","address":"0xc768eDF2d21fe00ef5804A7Caa775E877e65A70E"},{"appName":"Ocean Protocol","contractName":"veFeeDistributor","address":"0x256c54219816603BB8327F9019533B020a76e936"},{"appName":"Ocean Protocol","contractName":"veDelegationProxy","address":"0x45E3BEc7D139Cd8Ed7FeB161F3B094688ddB0c20"},{"appName":"Ocean Protocol","contractName":"veFeeEstimate","address":"0x4aA261bC595abC6fDEf0255C83e2a9305261753f"},{"appName":"Ocean Protocol","contractName":"SmartWalletChecker","address":"0xd7ddf62257A41cc6cdAd7A3d36e4f1d925fD142a"}]'
        ),
        Z = b.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        W = A.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        X = u.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        G = D.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        K = F.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        q = E.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        J = B.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        $ = l.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        j = x.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        z = v.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        Q = y.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        aa = S.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ae = P.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ar = T.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ad = h.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        at = U.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ac = R.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        as = g.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ao = M.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        an = I.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ap = w.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        am = k.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        aC = L.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        aN = _.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ai = O.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        af = H.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        ab = V.map(function (a) {
          var e = a.contractName,
            r = a.address;
          return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
        }),
        aA = {
          curve: Z,
          compound: W,
          abracadabra: X,
          socket: G,
          yearn: K,
          lido: q,
          uniswap: J,
          aave: $,
          balancer: j,
          arrakis: z,
          dydx: Q,
          aura: aa,
          oneInch: ae,
          hop: ar,
          multichain: ad,
          celer: at,
          arbitrum: ac,
          wormhole: as,
          gnosis: ao,
          optimism: an,
          beefy: ap,
          instadapp: am,
          liquity: aC,
          gearbox: aN,
          stakewise: ai,
          bitdao: af,
          synthetix: ab,
          ocean: Y.map(function (a) {
            var e = a.contractName,
              r = a.address;
            return { name: e.replace(/[{(\/):\?\$\+\[\]}]/g, ""), address: r };
          }),
        },
        au = r(71688);
      ((n = d || (d = {})).DEFI = "DeFi & Swaps"),
        (n.GAMING = "Gaming"),
        (n.NFT_APPS = "NFT Apps"),
        (n.DAOS = "DAOs"),
        (n.SOCIAL = "Social"),
        (n.BRIDGES = "Bridges"),
        (n.UTILS = "Utils");
      var aD,
        aF =
          ((t = {}),
          (0, m.Z)(t, d.DEFI, { light: "#ffc7d2", dark: "#620614" }),
          (0, m.Z)(t, d.GAMING, { light: "#fffabd", dark: "#595208" }),
          (0, m.Z)(t, d.NFT_APPS, { light: "#c9ffcc", dark: "#0b450a" }),
          (0, m.Z)(t, d.DAOS, { light: "#D5C6FF", dark: "#4d495f" }),
          (0, m.Z)(t, d.SOCIAL, { light: "#fbbd86", dark: "#443426" }),
          (0, m.Z)(t, d.BRIDGES, { light: "#aec2fe", dark: "#184564" }),
          (0, m.Z)(t, d.UTILS, { light: "#d5d8d8", dark: "#333" }),
          t),
        aE =
          ((o = {}),
          (0, m.Z)(
            o,
            au.HL.ETHEREUM_MAINNET,
            ((c = {}),
            (0, m.Z)(c, d.DEFI, {
              Uniswap: [
                {
                  name: "V3 Swaprouter 02",
                  address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                },
                {
                  name: "V3 SwapRouter 01",
                  address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
                },
                {
                  name: "V3 NonfungiblePositionManager",
                  address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
                },
                {
                  name: "V2 Swaprouter02",
                  address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                },
                {
                  name: "V2 Swaprouter01",
                  address: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
                },
                {
                  name: "Uniswap Protocol Permit2",
                  address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
                },
              ].concat((0, f.Z)(aA.uniswap)),
              Aave: [
                {
                  name: "V1 AaveMarket LendingPool",
                  address: "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
                },
                {
                  name: "V1 AaveMarket LendingPoolCore",
                  address: "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3",
                },
                {
                  name: "V1 UniswapMarket LendingPool",
                  address: "0x2F60C3EB259D63dcCa81fDE7Eaa216D9983D7C60",
                },
                {
                  name: "V1 UniswapMarket LendingPoolCore",
                  address: "0x1012cfF81A1582ddD0616517eFB97D02c5c17E25",
                },
                {
                  name: "V2 AaveMarket LendingPool",
                  address: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
                },
                {
                  name: "V2 AaveMarket WETH Gateway",
                  address: "0xEFFC18fC3b7eb8E676dac549E0c693ad50D1Ce31",
                },
                {
                  name: "V2 AaveAMM LendingPool",
                  address: "0x7937d4799803fbbe595ed57278bc4ca21f3bffcb",
                },
                {
                  name: "V2 AaveAMM WETH Gateway",
                  address: "0x1C4a4e31231F71Fc34867D034a9E68f6fC798249",
                },
              ].concat((0, f.Z)(aA.aave)),
              Curve: [
                {
                  name: "Smart Router curve.fi",
                  address: "0xfa9a30350048b2bf66865ee20363067c66f67e58",
                },
                {
                  name: "Smart Router curve.exchange",
                  address: "0x81c46feca27b31f3adc2b91ee4be9717d1cd3dd7",
                },
                {
                  name: "Smart Router curve.fi 110822",
                  address: "0x55B916Ce078eA594c10a874ba67eCc3d62e29822",
                },
                {
                  name: "Smart router curve.fi 012623",
                  address: "0x99a58482BD75cbab83b27EC03CA68fF489b5788f",
                },
              ].concat((0, f.Z)(aA.curve)),
              Lido: (0, f.Z)(aA.lido),
              Convex: [
                {
                  name: "Booster Curve",
                  address: "0xF403C135812408BFbE8713b5A23a04b3D48AAE31",
                },
                {
                  name: "CVX",
                  address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
                },
                {
                  name: "cvxCRV",
                  address: "0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7",
                },
                {
                  name: "CRV Depositor",
                  address: "0x8014595F2AB54cD7c604B00E9fb932176fDc86Ae",
                },
                {
                  name: "Booster Frax",
                  address: "0xA2cF21b157b2f203e37b616b619f438B5aa86Ee5",
                },
                {
                  name: "cvxFXS",
                  address: "0xFEEf77d3f69374f66429C91d732A244f074bdf74",
                },
                {
                  name: "fxsDepositor",
                  address: "0x8f55d7c21bDFf1A51AFAa60f3De7590222A3181e",
                },
              ],
              Compound: (0, f.Z)(aA.compound),
              Balancer: [
                {
                  name: "V2 Vault",
                  address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
                },
                {
                  name: "V1 Core Pool Factory",
                  address: "0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd",
                },
              ].concat((0, f.Z)(aA.balancer)),
              Arrakis: [
                {
                  name: "Arrakis Router",
                  address: "0x513E0a261af2D33B46F98b81FED547608fA2a03d",
                },
              ].concat((0, f.Z)(aA.arrakis)),
              Sushi: [
                {
                  name: "MasterChef",
                  address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",
                },
                {
                  name: "MasterChefV2",
                  address: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d",
                },
                {
                  name: "SushiV2Factory",
                  address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                },
                {
                  name: "SushiSwapRouter",
                  address: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
                },
                {
                  name: "BentoBoxV1",
                  address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
                },
                {
                  name: "PeggedOracleV1",
                  address: "0x6cbfbB38498Df0E1e7A4506593cDB02db9001564",
                },
                {
                  name: "KashiPairMediumRisk",
                  address: "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42",
                },
                {
                  name: "SushiBar",
                  address: "0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7",
                },
                {
                  name: "SushiMaker",
                  address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277",
                },
                {
                  name: "SushiMakerKashi",
                  address: "0x08C82f7513C7952A95029FE3B1587B1FA52DACed",
                },
                {
                  name: "SushiRoll",
                  address: "0x16E58463eb9792Bc236d8860F5BC69A81E26E32B",
                },
                {
                  name: "SushiToken",
                  address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
                },
                {
                  name: "SushiXSwap",
                  address: "0x011E52E4E40CF9498c79273329E8827b21E2e581",
                },
                {
                  name: "WethMaker",
                  address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277",
                },
              ],
              Yearn: [
                {
                  name: "Yearn Partner Portal In Zaps",
                  address: "0xc2c171bd6fc3b5885b589ed8b4d135f31085e973",
                },
                {
                  name: "Yearn Partner Portal Out Zaps",
                  address: "0x70ed999E2849A3C85EB4a6288B90c7ecA7b807F4",
                },
                {
                  name: "y3CrvBackZapper",
                  address: "0x579422A1C774470cA623329C69f27cC3bEB935a1",
                },
                {
                  name: "Trusted Vault Migrator",
                  address: "0x1824df8D751704FA10FA371d62A37f9B8772ab90",
                },
                {
                  name: "triCryptoVaultMigrator",
                  address: "0xC306a5ef4B990A7F2b3bC2680E022E6a84D75fC1",
                },
              ].concat((0, f.Z)(aA.yearn)),
              dYdX: [
                {
                  name: "CurrencyConverter",
                  address: "0x8e8bd01b5A9eb272CC3892a2E40E64A716aa2A40",
                },
                {
                  name: "L2 Perpetual Smart Contract",
                  address: "0xd54f502e184b6b739d7d27a6410a67dc462d69c8",
                },
                {
                  name: "stkDYDX",
                  address: "0x65f7ba4ec257af7c55fd5854e5f6356bbd0fb8ec",
                },
                {
                  name: "SoloMargin",
                  address: "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
                },
              ].concat((0, f.Z)(aA.dydx)),
              Abracadabra: [
                {
                  name: "DegenBox",
                  address: "0xd96f48665a1410C0cd669A88898ecA36B9Fc2cce",
                },
                {
                  name: "BentoBox Fork",
                  address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966",
                },
              ].concat((0, f.Z)(aA.abracadabra)),
              Aura: (0, f.Z)(aA.aura),
              Euler: [
                {
                  name: "Euler",
                  address: "0x27182842E098f60e3D576794A5bFFb0777E025d3",
                },
                {
                  name: "Markets",
                  address: "0x3520d5a913427E6F0D6A83E07ccD4A4da316e4d3",
                },
                {
                  name: "EulStakes",
                  address: "0xc697BB6625D9f7AdcF0fbf0cbd4DcF50D8716cd3",
                },
                {
                  name: "EulToken",
                  address: "0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b",
                },
                {
                  name: "Exec",
                  address: "0x59828FdF7ee634AaaD3f58B19fDBa3b03E2D9d80",
                },
                {
                  name: "Governance",
                  address: "0xAF68CFba29D0e15490236A5631cA9497e035CD39",
                },
                {
                  name: "Liquidation",
                  address: "0xf43ce1d09050BAfd6980dD43Cde2aB9F18C85b34",
                },
                {
                  name: "Swap",
                  address: "0x7123C8cBBD76c5C7fCC9f7150f23179bec0bA341",
                },
              ],
              Matcha: [
                {
                  name: "ZeroEx",
                  address: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
                },
              ],
              "1inch": [
                {
                  name: "1inch v5 Router",
                  address: "0x1111111254EEB25477B68fb85Ed929f73A960582",
                },
              ].concat((0, f.Z)(aA.oneInch)),
              "MetaMask Swaps": [
                {
                  name: "Metamask Swap Router",
                  address: "0x881D40237659C251811CEC9c364ef91dC08D300C",
                },
              ],
              Socket: (0, f.Z)(aA.socket),
              Beefy: (0, f.Z)(aA.beefy),
              Instadapp: (0, f.Z)(aA.instadapp),
              Liquity: (0, f.Z)(aA.liquity),
              Gearbox: (0, f.Z)(aA.gearbox),
              Stakewise: (0, f.Z)(aA.stakewise),
              BitDao: (0, f.Z)(aA.bitdao),
              Synthetix: (0, f.Z)(aA.synthetix),
              Ocean: (0, f.Z)(aA.ocean),
            }),
            (0, m.Z)(c, d.NFT_APPS, {
              OpenSea: [
                {
                  name: "Seaport 1.1",
                  address: "0x00000000006c3852cbEf3e08E8dF289169EdE581",
                },
                {
                  name: "Conduit",
                  address: "0x1E0049783F008A0085193E00003D00cd54003c71",
                },
                {
                  name: "Wyvern Exchange v2",
                  address: "0x7f268357A8c2552623316e2562D90e642bB538E5",
                },
              ],
              LooksRare: [
                {
                  name: "TransferManagerERC721",
                  address: "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e",
                },
                {
                  name: "TransferManagerERC1155",
                  address: "0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",
                },
                {
                  name: "TransferManagerNonCompliantERC721",
                  address: "0x3e538190635f51435298ee58a7984961120510a1",
                },
                {
                  name: "LooksRareExchange",
                  address: "0x59728544b08ab483533076417fbbb2fd0b17ce3a",
                },
              ],
              Gem: [
                {
                  name: "GemSwap V2",
                  address: "0x83C8F28c26bF6aaca652Df1DbBE0e1b56F8baBa2",
                },
              ],
              Foundation: [
                {
                  name: "Foundation NFT",
                  address: "0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405",
                },
                {
                  name: "Foundation Market",
                  address: "0xcDA72070E455bb31C7690a170224Ce43623d0B6f",
                },
              ],
              SudoSwap: [
                {
                  name: "LVSSM Router",
                  address: "0x2b2e8cda09bba9660dca5cb6233787738ad68329",
                },
              ],
              Genie: [
                {
                  name: "GenieSwap",
                  address: "0x0a267cF51EF038fC00E71801F5a524aec06e4f07",
                },
              ],
              SuperRare: [
                {
                  name: "SuperRare Marketplace",
                  address: "0x65B49f7AEE40347f5A90b714be4eF086f3fe5E2C",
                },
              ],
              "Tessera and Fractional": [
                {
                  name: "Vault Factory ERC1155",
                  address: "0x70d841fa16d8cad638beff560ec442c25f293ce8",
                },
                {
                  name: "Vault Factory ERC20",
                  address: "0x04BB19E64d2C2D92dC84efF75bD0AB757625A5f2",
                },
                {
                  name: "Distribution",
                  address: "0x8a5149b12a333c1d6d37c0f71dfbfcabf83d79fb",
                },
              ],
              "Coinbase NFT": [
                {
                  name: "ZeroEx",
                  address: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
                },
              ],
              Blur: [
                {
                  name: "Blur.io ExecutionDelegate",
                  address: "0x00000000000111AbE46ff893f3B2fdF1F759a8A8",
                },
                {
                  name: "Opensea",
                  address: "0x1E0049783F008A0085193E00003D00cd54003c71",
                },
                {
                  name: "LooksRare TransferManagerERC721",
                  address: "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e",
                },
                {
                  name: "LooksRare TransferManagerERC1155",
                  address: "0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",
                },
                {
                  name: "X2Y2 ERC721Delegate",
                  address: "0xF849de01B080aDC3A814FaBE1E2087475cF2E354",
                },
                {
                  name: "X2Y2 ERC1155Delegate",
                  address: "0x024aC22ACdB367a3ae52A3D94aC6649fdc1f0779",
                },
              ],
              X2Y2: [
                {
                  name: "X2Y2 ERC721Delegate",
                  address: "0xF849de01B080aDC3A814FaBE1E2087475cF2E354",
                },
                {
                  name: "X2Y2 ERC1155Delegate",
                  address: "0x024aC22ACdB367a3ae52A3D94aC6649fdc1f0779",
                },
                {
                  name: "X2Y2 r1",
                  address: "0x6D7812d41A08BC2a910B562d8B56411964A4eD88",
                },
                {
                  name: "X2Y2 Exchange",
                  address: "0x74312363e45DCaBA76c59ec49a7Aa8A65a67EeD3",
                },
              ],
            }),
            (0, m.Z)(c, d.BRIDGES, {
              Hop: [
                {
                  name: "L1 ETH Bridge",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
                {
                  name: "L1 DAI Bridge",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
                {
                  name: "L1 USDC Bridge",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
                {
                  name: "L1 USDT Bridge",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
                {
                  name: "L1 MATIC Bridge",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
              ].concat((0, f.Z)(aA.hop)),
              Wormhole: (0, f.Z)(aA.wormhole),
              Multichain: (0, f.Z)(aA.multichain),
              "Celer cBridge": (0, f.Z)(aA.celer),
              Arbitrum: (0, f.Z)(aA.arbitrum),
              "Gnosis xDai Bridge": (0, f.Z)(aA.gnosis),
              Optimism: (0, f.Z)(aA.optimism),
            }),
            (0, m.Z)(c, d.UTILS, {
              Harpie: [
                {
                  name: "Harpie Transferer",
                  address: "0x7273d1671fCd37Ef5b949Ebf88234AA9c3E43957",
                },
                {
                  name: "Harpie Vault",
                  address: "0x9cdE019F455b9a3C33d95912eDcEaBBe0cad3444",
                },
              ],
              WETH: [
                {
                  name: "WETH Unwrapping",
                  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                },
              ],
              "0x": [
                {
                  name: "ZeroEx",
                  address: "0xDef1C0ded9bec7F1a1670819833240f027b25EfF",
                },
              ],
            }),
            c)
          ),
          (0, m.Z)(
            o,
            au.HL.GOERLI_TESTNET,
            ((s = {}),
            (0, m.Z)(s, d.DEFI, {
              "Curve.fi": [
                {
                  name: "Curve.fi 3pool Swap",
                  address: "0x949A7a0fbB4EFF136483279Ba6864A2cefDB016F",
                },
                {
                  name: "Curve.fi 4pool Swap",
                  address: "0x9D4cB40b8D2B18AEe1cda010B6cC62857E757A56",
                },
                {
                  name: "Curve.fi XYZ Swap",
                  address: "0x770aA9CB58410C39Be4aF881583ed9240c103d07",
                },
              ],
              Compound: [
                {
                  name: "Compound",
                  address: "0xc7402b9eC618c6A1839d518919aD551c4C3A3e47",
                },
              ],
              UniswapV2: [
                {
                  name: "UniswapV2",
                  address: "0xaEC7af444A1FC9Cc26eF7e760E6F90A3237F23d9",
                },
              ],
              UniswapV3: [
                {
                  name: "UniswapV3",
                  address: "0x21097BFc24B5Cd53BD4B43eFfa5208E0d5F7268f",
                },
              ],
              "0x Protocol": [
                {
                  name: "0x Protocol",
                  address: "0x4ccCeB7C8499084C20C16f60c815881727f51b94",
                },
              ],
              "1inch Network": [
                {
                  name: "1inch Network",
                  address: "0x1207d2Af6026D2D304a0D7C3e4385b2b9c411b4b",
                },
              ],
              Sushi: [
                {
                  name: "Sushi",
                  address: "0xF633A44b29116B722D1Fc8980DF7cbE5aae7B9b3",
                },
              ],
              HEX: [
                {
                  name: "HEX",
                  address: "0x80768dAC6032bb3b85138aAE0D0297472A7AFE6d",
                },
              ],
              CowSwap: [
                {
                  name: "CowSwap",
                  address: "0xbDe29E2a68998c10215e4b5487d5ba1d135C440a",
                },
              ],
              AaveV2: [
                {
                  name: "AaveV2",
                  address: "0x4Ad750aabcc32C6AF254549ca8177052445F6179",
                },
              ],
              "Crypto.com Swap": [
                {
                  name: "Crypto.com Swap",
                  address: "0x57677292c9c8B6287e8a06782115bf542f350067",
                },
              ],
              Bungee: [
                {
                  name: "Bungee",
                  address: "0x71E2E069a509351FB2cCc7392259506e5D5c743f",
                },
              ],
              Convex: [
                {
                  name: "Convex",
                  address: "0x6555C676efcf5bCfA28c4faA146F97C937Dc5fB9",
                },
              ],
              Transit: [
                {
                  name: "Transit",
                  address: "0xf548f19B34C223c6115d82D676EcE181f66c4864",
                },
              ],
              dYdX: [
                {
                  name: "dYdX",
                  address: "0x81A1FA750F00115DBd405c4896E1A384e02439fd",
                },
              ],
              Oasis: [
                {
                  name: "Oasis",
                  address: "0xDEC8601343C5d4816a9e911414cF5433BBD2Bcb3",
                },
              ],
              DODO: [
                {
                  name: "DODO",
                  address: "0x762f4962566FeF4fA09196F9A4d089fad5AC5fA5",
                },
              ],
              Liquity: [
                {
                  name: "Liquity",
                  address: "0x2F868B943893c917fee90426E4b1a07DEE54B927",
                },
              ],
              "Euler Finance": [
                {
                  name: "Euler Finance",
                  address: "0xD76d9aEeAFC342366C69D5092f737D3412906fd6",
                },
              ],
              Balancer: [
                {
                  name: "Balancer",
                  address: "0x0BC0fa9c14ECDFC0F9ac06Fdd26b55FC0Cd7a30c",
                },
              ],
              Alchemix: [
                {
                  name: "Alchemix",
                  address: "0x009f2665C60897f1521BbBd331666a25DE2C9Aa7",
                },
              ],
              AuraSwap: [
                {
                  name: "AuraSwap",
                  address: "0xBea3aBeac228F4ed1F0b2610D41F17976d4b0b27",
                },
              ],
            }),
            (0, m.Z)(s, d.NFT_APPS, {
              Opensea: [
                {
                  name: "OpenSea--Wyvern Exchange v2",
                  address: "0x9C20c496dda432829895f7caCC2a2eb31FD89dD6",
                },
              ],
              LooksRare: [
                {
                  name: "LooksRare",
                  address: "0x837AdcD1A60d07aA148a19B3C72a1DDe70e8A9AC",
                },
              ],
              Gem: [
                {
                  name: "Gem",
                  address: "0x5dd86864E04E746a07d8893676142F3b0b94A528",
                },
              ],
              X2Y2: [
                {
                  name: "X2Y2",
                  address: "0x167968c99F7Dd3B9395b484C9bC4A30C083E7b3C",
                },
              ],
              Foundation: [
                {
                  name: "Foundation",
                  address: "0xFB817e2fAbCf2d009BB69EE28DcD165008512bE7",
                },
              ],
              "Element Market": [
                {
                  name: "Element Market",
                  address: "0x2dc84081fF5B165ed607877B69F367915f35E428",
                },
              ],
              LIDO: [
                {
                  name: "LIDO",
                  address: "0x029FF4fB67Fd3b1e4eaC0Aa50174b8fE7a41fE9a",
                },
              ],
              "The Sandbox Marketplace": [
                {
                  name: "The Sandbox Marketplace",
                  address: "0x891B1937c5296fDb0B25106C2Bf974276CD639D6",
                },
              ],
              Emblem: [
                {
                  name: "Emblem",
                  address: "0xd6D2E89c3a761986013b95EAAa6B7DD21D8CA3C8",
                },
              ],
              Otherdeed: [
                {
                  name: "Otherdeed",
                  address: "0xf26b1e85c26a33082d58958De19868ef15e74D9D",
                },
              ],
              Rarible: [
                {
                  name: "Rarible",
                  address: "0xaB8d5b9929F093727c720cFe90F54faBc4A0a307",
                },
              ],
              Genie: [
                {
                  name: "Genie",
                  address: "0x7031dA586b78D41Ef89C18FAf637679CE40B9140",
                },
              ],
            }),
            (0, m.Z)(s, d.GAMING, {
              Mirandus: [
                {
                  name: "Mirandus",
                  address: "0x7b063E278835D5cB52C11F1A8aD91acf049D08e2",
                },
              ],
              Decentraland: [
                {
                  name: "Decentraland",
                  address: "0xF31D576C579ac045014F6205fDA2D158D6b79F07",
                },
              ],
              Illuvium: [
                {
                  name: "Illuvium",
                  address: "0xA182c20485e9CC3228b96b1159C820f289580038",
                },
              ],
              "League of Kingdoms": [
                {
                  name: "League of Kingdoms",
                  address: "0x9881A668e0ce90A964681a47ef04998d9baEc3f5",
                },
              ],
              "Star Atlas": [
                {
                  name: "Star Atlas",
                  address: "0x558fEaA8305C765fF9a85f6D1015c7cA3E1B5e3D",
                },
              ],
            }),
            (0, m.Z)(s, d.DAOS, {
              Gitcoin: [
                {
                  name: "Gitcoin",
                  address: "0xe7C5E8Aad0f7F9E05d58f0554293A1fBBE401545",
                },
              ],
              "Merit Circle": [
                {
                  name: "Merit Circle",
                  address: "0xd786f2EC9D2A5512111e395dc2F1bE1aE669500C",
                },
              ],
              "Stake DAO": [
                {
                  name: "Stake DAO",
                  address: "0xDfbec8D9b436DE3d79a20db9f564cac5E0839775",
                },
              ],
              Fei: [
                {
                  name: "Fei",
                  address: "0xaEAb3F02d033A330026b5F1b5647d5105aBa3258",
                },
              ],
              Rook: [
                {
                  name: "Rook",
                  address: "0xd2A47040FDEe4f3A786C94C090797Fba399e6C3b",
                },
              ],
            }),
            (0, m.Z)(s, d.BRIDGES, {
              "HOP Protocol": [
                {
                  name: "HOP Protocol",
                  address: "0x32e51A3d1939a3d5811b023688ee452a8a6098d3",
                },
              ],
              Wormhole: [
                {
                  name: "Wormhole",
                  address: "0x1B513Ec632db86B9777b6D66CdF9e222dE2D29b3",
                },
              ],
              "Polygon POS Bridge": [
                {
                  name: "Polygon POS Bridge",
                  address: "0x6052F86e78AdC768B256cC3Fc44C2dB686ACc8B8",
                },
              ],
              PolkaBridge: [
                {
                  name: "PolkaBridge",
                  address: "0xfDe4599A77C04c7aF130fCdC30c463F365D31fc8",
                },
              ],
            }),
            s)
          ),
          o),
        aB = function (a) {
          return Object.entries(aE[a]).reduce(function (e, r) {
            var d = (0, i.Z)(r, 2),
              t = d[0],
              c = d[1];
            return (0, N.Z)(
              (0, C.Z)({}, e),
              (0, m.Z)(
                {},
                t,
                Object.entries(c).map(function (e) {
                  var r = (0, i.Z)(e, 2),
                    d = r[0],
                    c = r[1];
                  return {
                    chainId: a,
                    name: d,
                    avatar: "./images/trustedApps/".concat(d, ".webp"),
                    category: t,
                    addresses: c,
                  };
                })
              )
            );
          }, {});
        },
        al = Object.entries(aE).reduce(function (a, e) {
          var r = (0, i.Z)(e, 2),
            d = r[0],
            t = r[1],
            c = [];
          return (
            Object.entries(t).forEach(function (a) {
              var e = (0, i.Z)(a, 2),
                r = e[0];
              return Object.entries(e[1]).forEach(function (a) {
                var e = (0, i.Z)(a, 2),
                  t = e[0],
                  s = e[1];
                c.push({
                  chainId: parseInt(d),
                  name: t,
                  avatar: "./images/trustedApps/".concat(t, ".webp"),
                  category: r,
                  addresses: s,
                });
              });
            }),
            a.concat(c)
          );
        }, []),
        ax =
          ((aD = new Map()),
          Object.entries(aE).map(function (a) {
            var e = (0, i.Z)(a, 2),
              r = e[0];
            Object.entries(e[1]).map(function (a) {
              var e = (0, i.Z)(a, 2),
                d = e[0];
              Object.entries(e[1]).map(function (a) {
                var e = (0, i.Z)(a, 2),
                  t = e[0],
                  c = e[1],
                  s = {
                    chainId: parseInt(r),
                    name: t,
                    avatar: "./images/trustedApps/".concat(t, ".webp"),
                    category: d,
                    addresses: c,
                  },
                  o = new Map();
                (o.set(t, s), aD.has(parseInt(r)))
                  ? aD.get(parseInt(r)).set(t, s)
                  : aD.set(parseInt(r), o);
              });
            });
          }),
          aD),
        av = function (a, e) {
          return ax.get(e).get(a);
        };
    },
    31922: function (a, e, r) {
      e.ZP = {
        ERC20: [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_spender", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_from", type: "address" },
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "_owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "balance", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "_owner", type: "address" },
              { name: "_spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
        ],
        ERC721: [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "getApproved",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "ownerOf",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "tokenURI",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        VAULT: [
          {
            inputs: [
              { internalType: "address", name: "_transferer", type: "address" },
              {
                internalType: "address",
                name: "_serverSigner",
                type: "address",
              },
              {
                internalType: "address payable",
                name: "_feeController",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc20Address",
                type: "address",
              },
            ],
            name: "canWithdrawERC20",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc721Address",
                type: "address",
              },
              { internalType: "uint256", name: "_id", type: "uint256" },
            ],
            name: "canWithdrawERC721",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address payable",
                name: "_newFeeController",
                type: "address",
              },
            ],
            name: "changeFeeController",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_newFeeController",
                type: "address",
              },
            ],
            name: "changeFeeControllerRequest",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes", name: "_signature", type: "bytes" },
              {
                internalType: "address",
                name: "_newRecipientAddress",
                type: "address",
              },
              { internalType: "uint256", name: "expiry", type: "uint256" },
            ],
            name: "changeRecipientAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc20Address",
                type: "address",
              },
            ],
            name: "erc20Fee",
            outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc721Address",
                type: "address",
              },
              { internalType: "uint256", name: "_id", type: "uint256" },
            ],
            name: "erc721Fee",
            outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_caller", type: "address" },
            ],
            name: "getNonce",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc20Address",
                type: "address",
              },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "uint128", name: "_fee", type: "uint128" },
            ],
            name: "logIncomingERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc721Address",
                type: "address",
              },
              { internalType: "uint256", name: "_id", type: "uint256" },
              { internalType: "uint128", name: "_fee", type: "uint128" },
            ],
            name: "logIncomingERC721",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc20Address",
                type: "address",
              },
              { internalType: "uint128", name: "_reduceBy", type: "uint128" },
            ],
            name: "reduceERC20Fee",
            outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc721Address",
                type: "address",
              },
              { internalType: "uint256", name: "_id", type: "uint256" },
              { internalType: "uint128", name: "_reduceBy", type: "uint128" },
            ],
            name: "reduceERC721Fee",
            outputs: [{ internalType: "uint128", name: "", type: "uint128" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_recipient", type: "address" },
            ],
            name: "setupRecipientAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
            ],
            name: "viewRecipientAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc20Address",
                type: "address",
              },
            ],
            name: "withdrawERC20",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_originalAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_erc721Address",
                type: "address",
              },
              { internalType: "uint256", name: "_id", type: "uint256" },
            ],
            name: "withdrawERC721",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdrawPayments",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        FAU: [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "spender", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "DECIMALS",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "INITIAL_SUPPLY",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "spender", type: "address" },
              { name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "to", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "value", type: "uint256" }],
            name: "burn",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "from", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "burnFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "account", type: "address" }],
            name: "addMinter",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "renounceMinter",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "spender", type: "address" },
              { name: "subtractedValue", type: "uint256" },
            ],
            name: "decreaseAllowance",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "to", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "account", type: "address" }],
            name: "isMinter",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { payable: !1, stateMutability: "nonpayable", type: "fallback" },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "account", type: "address" }],
            name: "MinterAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "account", type: "address" }],
            name: "MinterRemoved",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
        ],
      };
    },
    72749: function (a, e, r) {
      r.d(e, {
        M0: function () {
          return x;
        },
        MD: function () {
          return f;
        },
        O9: function () {
          return o;
        },
        St: function () {
          return y;
        },
        V4: function () {
          return N;
        },
        aC: function () {
          return u;
        },
        aV: function () {
          return n;
        },
        ik: function () {
          return C;
        },
        mk: function () {
          return P;
        },
        po: function () {
          return F;
        },
        s8: function () {
          return p;
        },
        w5: function () {
          return B;
        },
        y0: function () {
          return A;
        },
      });
      var d = r(47568),
        t = r(70655),
        c = r(70081),
        s = r(31922);
      function o(a, e) {
        return new c.CH(a, s.ZP.ERC20, e);
      }
      function n(a, e) {
        return new c.CH(a, s.ZP.FAU, e);
      }
      function p(a, e, r) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = (0, d.Z)(function (a, e, r) {
          return (0, t.__generator)(this, function (d) {
            return [2, a.approve(e, r)];
          });
        })).apply(this, arguments);
      }
      function C(a, e) {
        return new c.CH(a, s.ZP.ERC721, e);
      }
      function N(a, e) {
        return i.apply(this, arguments);
      }
      function i() {
        return (i = (0, d.Z)(function (a, e) {
          return (0, t.__generator)(this, function (r) {
            return [2, a.setApprovalForAll(e, !0)];
          });
        })).apply(this, arguments);
      }
      function f(a, e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, d.Z)(function (a, e) {
          return (0, t.__generator)(this, function (r) {
            return [2, a.setApprovalForAll(e, !1)];
          });
        })).apply(this, arguments);
      }
      function A(a, e) {
        return new c.CH(a, s.ZP.VAULT, e);
      }
      function u(a, e, r) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = (0, d.Z)(function (a, e, r) {
          return (0, t.__generator)(this, function (d) {
            return [2, a.canWithdrawERC20(e, r)];
          });
        })).apply(this, arguments);
      }
      function F(a, e, r, d) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = (0, d.Z)(function (a, e, r, d) {
          return (0, t.__generator)(this, function (t) {
            return [2, a.canWithdrawERC721(e, r, d)];
          });
        })).apply(this, arguments);
      }
      function B(a, e, r) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, d.Z)(function (a, e, r) {
          return (0, t.__generator)(this, function (d) {
            return [2, a.erc20Fee(e, r)];
          });
        })).apply(this, arguments);
      }
      function x(a, e, r, d) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, d.Z)(function (a, e, r, d) {
          return (0, t.__generator)(this, function (t) {
            return [2, a.erc721Fee(e, r, d)];
          });
        })).apply(this, arguments);
      }
      function y(a, e, r, d, t) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, d.Z)(function (a, e, r, d, c) {
          return (0, t.__generator)(this, function (t) {
            return [2, a.connect(e).withdrawERC20(r, d, { value: c })];
          });
        })).apply(this, arguments);
      }
      function P(a, e, r, d, t, c) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = (0, d.Z)(function (a, e, r, d, c, s) {
          return (0, t.__generator)(this, function (t) {
            return [2, a.connect(e).withdrawERC721(r, d, c, { value: s })];
          });
        })).apply(this, arguments);
      }
    },
    18702: function (a, e, r) {
      r.d(e, {
        Dq: function () {
          return C;
        },
        Io: function () {
          return i;
        },
        nV: function () {
          return N;
        },
      });
      var d = r(74231),
        t = r(56371),
        c = r(71688),
        s = r(75198),
        o = r(55981),
        n = r(76918),
        p = r(41814),
        m = r(98417),
        C = d
          .Z_()
          .matches(
            /^0x([0-9]|[A-F]|[a-f]){40}$/,
            'Invalid address format! Ethereum address are 42 characters long, start with "0x", and only contain alphanumeric characters.'
          )
          .transform(function (a, e) {
            if (!(0, t.isAddress)(a))
              try {
                a = p.getAddress(a.toLowerCase());
              } catch (r) {
                throw Error(
                  "Invalid address. This usually means a mistyped input."
                );
              }
            return (0, t.getAddress)(a);
          }),
        N = d
          .Z_()
          .trim()
          .matches(
            /^|([0-9]|[A-Z]|[a-z]|-|\.|_| |^$)+$/,
            'Invalid name! Only alphanumeric characters, space, "-", ":", "_", and "." are allowed.'
          )
          .max(150, "Maximum length for name is 150!");
      d
        .Z_()
        .trim()
        .matches(
          /^([1-9]{1}[0-9]{0,5}){1}((,[1-9]{1}[0-9]{0,5})?)+$/,
          "Invalid token ID(s)! Only numbers that start with 1-9 and commas are allowed."
        )
        .min(1, "You must specify at least one ID!"),
        d.Z_().trim().max(200, "Maximum length for response is 200!");
      var i = d.Z_().required().email(),
        f = d
          .Z_()
          .matches(/^0x([0-9]|[A-F]|[a-f]){40}$/, "Invalid dashboard ID!")
          .transform(function (a, e) {
            if (!(0, t.isAddress)(a)) throw Error("Invalid dashboard ID!");
            return (0, t.getAddress)(a);
          }),
        b = d
          .nK()
          .test("isSupported", "Unsupported chain ID!", function (a, e) {
            return void 0 === a || a in c.HL;
          }),
        A = d
          .nK()
          .test(
            "isSupported",
            "Unsupported transaction type!",
            function (a, e) {
              return void 0 === a || a in s.i;
            }
          ),
        u = d
          .nK()
          .test(
            "isSupported",
            "Unsupported transaction status!",
            function (a, e) {
              return void 0 === a || a in s.L;
            }
          ),
        D = d.Ry({
          address: C,
          name: N,
          isAppAddress: d.O7().optional(),
          chainId: b.optional(),
        }),
        F = d
          .nK()
          .test("isSupported", "Unsupported token type!", function (a, e) {
            return void 0 === a || a in o.iv;
          }),
        E = d.Ry({
          address: N,
          dashboardId: f,
          chainId: b,
          isApproved: d.O7(),
          balance: d.Z_(),
          ids: d.IX(d.Z_()),
          vaultBalance: d.Z_(),
          vaultIds: d.IX(d.Z_()),
        }),
        B = d.Ry({ sub: d.Z_(), exp: d.Z_(), iat: d.Z_(), signature: d.Z_() }),
        l = d.Ry({ sub: d.Z_(), exp: d.Z_(), iat: d.Z_(), signature: d.Z_() }),
        x = d.Ry({
          isTokenProtectionEmailsEnabled: d.O7(),
          isSetTrustedNetworkEmailsEnabled: d.O7(),
          isTokenWithdrawalEmailsEnabled: d.O7(),
          isSetWithdrawalAddressEmailsEnabled: d.O7(),
          isFrontrunnerSuccessEmailsEnabled: d.O7(),
        }),
        v = d.Ry({
          isTokenProtectionEmailsEnabled: d.O7(),
          isSetTrustedNetworkEmailsEnabled: d.O7(),
          isTokenWithdrawalEmailsEnabled: d.O7(),
          isSetWithdrawalAddressEmailsEnabled: d.O7(),
          isFrontrunnerSuccessEmailsEnabled: d.O7(),
        }),
        y = new Set(
          n.Vr.map(function (a) {
            return a.name;
          })
        ),
        S = d
          .Z_()
          .test("isSupported", "Unsupported app name!", function (a, e) {
            return y.has(a);
          });
      d.Ry({ id: f, chainId: b }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({ dashboardId: f, chainId: b, type: A, status: u }),
        d.Ry({ address: C, chainId: b }),
        d.Ry({ chainId: b }),
        d.Ry({ subject: d.Z_() }),
        d.Ry({ subject: d.Z_() }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({ id: d.Z_().trim() }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({ key: d.Z_().trim(), dashboardId: f, chainId: b }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({
          path: d.Z_().trim(),
          startDateTime: d.Z_().optional(),
          endDateTime: d.Z_().optional(),
        }),
        d.Ry({
          email: d.Z_().required().email(),
          address: C,
          chainId: b,
          mode: d.nK(),
          signedToken: l,
        }),
        d.Ry({ address: f, chainId: b }),
        d.Ry({
          id: f,
          chainId: b,
          jwt: B,
          email: d.Z_().email(),
          gasLimit: d.Rx(),
          trustedApps: d.IX(S),
          trustedAddresses: d.IX(D),
          tokens: d.IX(E),
          affiliate: d.Z_().nullable(),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          oldEmail: d.Z_().email(),
          newEmail: d.Z_().email(),
          signedToken: l,
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          gasLimit: d.Rx().min(0, "Gas limit must be non-negative!"),
        }),
        d.Ry({ dashboardId: f, chainId: b, settings: x }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          jwt: B,
          trustedApps: d.IX(S),
          trustedAddresses: d.IX(D),
        }),
        d.Ry({
          address: C,
          chainId: b,
          dashboardId: d.Z_(),
          isApproved: d.O7(),
          balance: d.Z_(),
          ids: d.IX(d.Z_()),
          vaultBalance: d.Z_(),
          vaultIds: d.IX(d.Z_()),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          tokens: d.IX(
            d.Ry({
              address: C,
              isApproved: d.O7(),
              balance: d.Z_(),
              ids: d.IX(d.Z_()),
              vaultBalance: d.Z_(),
              vaultIds: d.IX(d.Z_()),
            })
          ),
        }),
        d.Ry({ address: C, dashboardId: d.Z_(), chainId: b }),
        d.Ry({
          address: C,
          chainId: b,
          name: d.Z_(),
          symbol: d.Z_().uppercase(),
          erc20Value: d.Rx(),
          erc721Values: d.Z_(),
          type: F,
          avatar: d.Z_(),
          decimals: d
            .Rx()
            .optional()
            .when("type", {
              is: "ERC20",
              then: d.Rx().required("Missing decimals for ERC20!"),
            }),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          type: A,
          status: u,
          payload: d.Z_(),
        }),
        d.Ry({ id: d.Z_(), status: u, payload: d.Z_() }),
        d.Ry({ dashboardId: f, chainId: b, responses: d.Z_().trim() }),
        d.Ry({
          name: d.Z_().trim(),
          dashboardId: f,
          chainId: b,
          inviteeIds: d.IX(f),
        }),
        d.Ry({
          walletListId: d.Z_(),
          inviteeId: f,
          requesterId: f,
          chainId: b,
        }),
        d.Ry({ walletListId: d.Z_(), inviteeId: f, chainId: b }),
        d.Ry({ walletListId: d.Z_(), inviteeId: f, chainId: b }),
        d.Ry({ walletListId: d.Z_(), dashboardId: f, chainId: b }),
        d.Ry({ walletListId: d.Z_() }),
        d.Ry({
          key: d.Z_().trim(),
          title: d.Z_().trim(),
          description: d.Z_().trim(),
          priority: d.Rx(),
          payload: d.Z_(),
          status: d
            .nK()
            .test("isSupported", "Unsupported task status!", function (a, e) {
              return void 0 === a || a in m.hY;
            }),
          dashboardId: f,
          chainId: b,
        }),
        d.Ry({
          key: d.Z_().trim(),
          payload: d.Z_(),
          status: d
            .nK()
            .test("isSupported", "Unsupported task status!", function (a, e) {
              return void 0 === a || a in m.hY;
            }),
          dashboardId: f,
          chainId: b,
        }),
        d.Ry({ dashboardId: f, chainId: b }),
        d.Ry({ path: d.Z_().trim(), payload: d.Z_().trim().optional() }),
        d.Ry({
          email: d.Z_().email(),
          address: C,
          chainId: b,
          newEmail: d.Z_().email(),
          signedToken: l,
        }),
        d.Ry({ email: d.Z_().email(), address: C, chainId: b, mode: d.nK() }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          oldEmail: d.Z_(),
          newEmail: d.Z_(),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          tokenName: d.Z_(),
          tokenAddress: d.Z_(),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          added: d.IX(d.Z_()),
          removed: d.IX(d.Z_()),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          tokenName: d.Z_(),
          tokenAddress: d.Z_(),
          quantity: d.Z_(),
          tokenId: d.Z_(),
          withdrawalFee: d.Z_(),
          withdrawalAddress: d.Z_(),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          oldAddress: d.Z_(),
          newAddress: d.Z_(),
          transactionId: d.Z_(),
        }),
        d.Ry({
          dashboardId: f,
          chainId: b,
          dateTime: d.Z_(),
          maliciousAddress: C,
          tokenAddress: C,
          quantity: d.Z_(),
          tokenId: d.Z_(),
        }),
        d.Ry({ jwt: d.Z_(), emailSettings: v }),
        d.Ry({ rpcEndpoint: d.Z_().url() }),
        d.Ry({ address: C, chainId: b, email: d.Z_().email() }),
        d.Ry({ address: C, chainId: b, email: d.Z_().email(), mode: d.nK() }),
        d.Ry({ address: C, chainId: b }),
        d.Ry({
          campaignName: d.Z_(),
          contactInfo: d.Z_(),
          data: d.Z_().trim(),
        });
    },
  },
]);
