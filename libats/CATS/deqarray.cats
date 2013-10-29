/***********************************************************************/
/*                                                                     */
/*                         Applied Type System                         */
/*                                                                     */
/***********************************************************************/

/* (*
** ATS/Postiats - Unleashing the Potential of Types!
** Copyright (C) 2011-2013 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of the GNU LESSER GENERAL PUBLIC LICENSE as published by the
** Free Software Foundation; either version 2.1, or (at your option)  any
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
*) */

/* ****** ****** */

/*
(* Author: Hongwei Xi *)
(* Authoremail: hwxi AT cs DOT bu DOT edu *)
(* Start time: October, 2013 *)
*/

/* ****** ****** */

#ifndef ATSHOME_LIBATS_DEQARRAY_CATS
#define ATSHOME_LIBATS_DEQARRAY_CATS

/* ****** ****** */

typedef
struct {
  atstype_ptr deqarray_beg ; // the beg pointer
  atstype_ptr deqarray_end ; // the end pointer
  atstype_ref deqarray_frnt ; // the frontal pointer
  atstype_ref deqarray_rear ; // the rear pointer
} atslib_deqarray_struct ;

/* ****** ****** */

ATSinline()
atstype_ptr
atslib_deqarray_make_ngc
(
  atstype_ptr p
, atstype_ptr A
, atstype_size m
, atstype_size tsz
) {
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
//
  p_deq->deqarray_beg = A ;
  p_deq->deqarray_end = (char*)A + (m+1) * tsz ;
  p_deq->deqarray_frnt = A ;
  p_deq->deqarray_rear = A ;
//
  return p_deq ;
//
} // end of [atslib_deqarray_make_ngc]

/* ****** ****** */

ATSinline()
atstype_size
atslib_deqarray_get_size__tsz
(
  atstype_ptr p, atstype_size tsz
) {
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
//
  void *p_frnt = p_deq->deqarray_frnt ;
  void *p_rear = p_deq->deqarray_rear ;
//
  if (p_frnt >= p_rear)
  {
    return ((char*)p_frnt-(char*)p_rear)/tsz ;
  } else {
    return ((char*)p_frnt-(char*)p_deq->deqarray_beg+(char*)p_deq->deqarray_end-(char*)p_rear)/tsz ;
  } /* end of [if] */
} // end of [atslib_deqarray_get_size__tsz]

/* ****** ****** */

ATSinline()
atstype_size
atslib_deqarray_get_capacity__tsz
(
  atstype_ptr p, atstype_size tsz
) {
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
  return (((char*)(p_deq->deqarray_end)-(char*)(p_deq->deqarray_beg))/tsz)-1;
} // end of [atslib_deqarray_get_capacity__tsz]

/* ****** ****** */

ATSinline()
atstype_ptr
atslib_deqarray_get_ptrbeg
  (atstype_ptr p)
{
  return ((atslib_deqarray_struct*)p)->deqarray_beg ;
} // end of [atslib_deqarray_get_ptrbeg]

ATSinline()
atstype_ptr
atslib_deqarray_get_ptrend
  (atstype_ptr p)
{
  return ((atslib_deqarray_struct*)p)->deqarray_end ;
} // end of [atslib_deqarray_get_ptrend]

/* ****** ****** */

ATSinline()
atstype_ptr
atslib_deqarray_get_ptrfrnt
  (atstype_ptr p)
{
  return ((atslib_deqarray_struct*)p)->deqarray_frnt ;
} // end of [atslib_deqarray_get_ptrfrnt]

ATSinline()
atsvoid_t0ype
atslib_deqarray_set_ptrfrnt
  (atstype_ptr p, atstype_ptr p2)
{
  ((atslib_deqarray_struct*)p)->deqarray_frnt = p2 ; return ;
} // end of [atslib_deqarray_set_ptrfrnt]

/* ****** ****** */

ATSinline()
atstype_ptr
atslib_deqarray_get_ptrrear
  (atstype_ptr p)
{
  return ((atslib_deqarray_struct*)p)->deqarray_rear ;
} // end of [atslib_deqarray_get_ptrrear]

ATSinline()
atsvoid_t0ype
atslib_deqarray_set_ptrrear
  (atstype_ptr p, atstype_ptr p2)
{
  ((atslib_deqarray_struct*)p)->deqarray_rear = p2 ; return ;
} // end of [atslib_deqarray_set_ptrrear]

/* ****** ****** */

ATSinline()
atsvoid_t0ype
atslib_deqarray_free_nil
  (atstype_ptr p)
{
  atstype_ptr p_beg ;
  p_beg = ((atslib_deqarray_struct*)p)->deqarray_beg ;
  ATS_MFREE(p) ; ATS_MFREE(p_beg) ;
  return ;
} // end of [atslib_deqarray_free_nil]

/* ****** ****** */

ATSinline()
atstype_bool
atslib_deqarray_is_nil
  (atstype_ptr p)
{
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
  return (p_deq->deqarray_frnt == p_deq->deqarray_rear ? atsbool_true : atsbool_false) ;
} // end of [atslib_deqarray_is_nil]
ATSinline()
atstype_bool
atslib_deqarray_isnot_nil
  (atstype_ptr p)
{
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
  return (p_deq->deqarray_frnt != p_deq->deqarray_rear ? atsbool_true : atsbool_false) ;
} // end of [atslib_deqarray_isnot_nil]

/* ****** ****** */

ATSinline()
atstype_ptr
atslib_deqarray_ptr_succ__tsz
(
  atstype_ptr p
, atstype_ptr p_elt, atstype_size tsz
) {
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
  char *p1_elt = (char*)p_elt+tsz ;
  return (p1_elt < p_deq->deqarray_end) ? p1_elt : p_deq->deqarray_beg ;
} // end of [atslib_deqarray_ptr_succ__tsz]

ATSinline()
atstype_ptr
atslib_deqarray_ptr_pred__tsz
(
  atstype_ptr p
, atstype_ptr p_elt, atstype_size tsz
) {
  atslib_deqarray_struct *p_deq ;
  p_deq = (atslib_deqarray_struct*)p ;
  return (p_elt > p_deq->deqarray_beg) ? (char*)p_elt-tsz : (char*)p_deq->deqarray_beg-tsz ;
} // end of [atslib_deqarray_ptr_pred__tsz]

/* ****** ****** */

ATSinline()
atstype_bool
atslib_deqarray_is_full__tsz
  (atstype_ptr p, atstype_size tsz)
{
//
  void *p_frnt = p_deq->deqarray_frnt ;
  void *p_rear = p_deq->deqarray_rear ;
//
  void *p1_frnt =
  atslib_deqarray_ptr_succ__tsz(p, p_frnt, tsz)
//
  return (p1_frnt == p_rear ? atsbool_true : atsbool_false) ;
} // end of [atslib_deqarray_is_full__tsz]

/* ****** ****** */

#endif // ifndef ATSHOME_LIBATS_DEQARRAY_CATS

/* ****** ****** */

/* end of [deqarray.cats] */
