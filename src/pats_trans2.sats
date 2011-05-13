(***********************************************************************)
(*                                                                     *)
(*                         Applied Type System                         *)
(*                                                                     *)
(*                              Hongwei Xi                             *)
(*                                                                     *)
(***********************************************************************)

(*
** ATS/Postiats - Unleashing the Potential of Types!
** Copyright (C) 2011-20?? Hongwei Xi, Boston University
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*)

(* ****** ****** *)
//
// Author: Hongwei Xi (hwxi AT cs DOT bu DOT edu)
// Start Time: May, 2011
//
(* ****** ****** *)

staload SYN = "pats_syntax.sats"
typedef s0rtq = $SYN.s0rtq

(* ****** ****** *)

staload "pats_staexp1.sats"
staload "pats_dynexp1.sats"
staload "pats_staexp2.sats"
staload "pats_dynexp2.sats"

(* ****** ****** *)

datatype tran2err =
  | T2E_s1rt_app of (s1rt)
  | T2E_s1rt_qid of (s1rt)
  | T2E_s1exp_qid of (s1exp)
  | T2E_s1rtext_qid of (s0rtq, symbol)
// end of [tran2err]

fun the_tran2errlst_add (x: tran2err): void

(* ****** ****** *)

fun s1rt_tr (s1t: s1rt): s2rt
fun s1rtlst_tr (s1ts: s1rtlst): s2rtlst
fun s1rtopt_tr (s1topt: s1rtopt): s2rtopt

(* ****** ****** *)

fun a1srt_tr (x: a1srt): s2rt
fun a1msrt_tr (x: a1msrt): s2rtlst

(* ****** ****** *)

fun effcst_tr (efc: effcst): s2eff

(* ****** ****** *)

fun s1arg_trup (s1a: s1arg): s2var
fun s1arglst_trup (s1as: s1arglst): s2varlst
fun s1arglst_trdn_err
  (s1as: s1arglst, s2ts: s2rtlst, err: &int): s2varlst
// end of [s1arglst_trdn_err]
fun s1marg_trdn (s1ma: s1marg, s2ts: s2rtlst): s2varlst

fun s1exp_trup (s1e: s1exp): s2exp
fun s1explst_trup (s1es: s1explst): s2explst

fun s2exp_trdn (
  loc: location, s2e: s2exp, s2t: s2rt
) : s2exp // end of [s2exp_trdn]
fun s1exp_trdn (s1e: s1exp, s2t: s2rt): s2exp

fun s1exp_trdn_bool (s1e: s1exp): s2exp
fun s1exp_trdn_viewt0ype (s1e: s1exp): s2exp
fun s1exp_trdn_impredicative (s1e: s1exp): s2exp

fun s1explst_trdn_bool (s1es: s1explst): s2explst

fun s1explst_trdn_err
  (s1es: s1explst, s2ts: s2rtlst, err: &int): s2explst
// end of [s1explst_trdn_err]

(* ****** ****** *)

fun s1exp_trup_arg (s1e: s1exp, wths1es: &wths1explst): s2exp
fun s1exp_trdn_arg_impredicative (s1e: s1exp, wths1es: &wths1explst): s2exp

fun s1exp_trdn_res_impredicative (s1e: s1exp, wths1es: wths1explst): s2exp

(* ****** ****** *)

fun s1qualst_tr (s1qs: s1qualst): @(s2varlst, s2explst)

(* ****** ****** *)

fun s1rtext_tr (s1te: s1rtext): s2rtext

(* ****** ****** *)

fun s1aspdec_tr (d: s1aspdec): s2aspdec

(* ****** ****** *)

fun d1ecl_tr (d1c: d1ecl): d2ecl
fun d1eclist_tr (d1c: d1eclist): d2eclist

(* ****** ****** *)

(* end of [pats_trans2.sats] *)
