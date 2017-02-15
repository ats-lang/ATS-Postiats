/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2017-2-15: 12h: 6m
**
*/

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_new_file
  (file) { var chn = new Worker(file); return chn; }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_close(chn) { return chn.terminate(); }
function
ats2js_worker_channeg1_close(chn) { return chn.terminate(); }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg0_send(chn, k0)
{
  chn.onmessage =
  function(event)
    { return ats2jspre_cloref2_app(k0, chn, event.data); };
  return/*void*/;
}
function
ats2js_worker_channeg0_recv(chn, x0, k0)
{
  chn.postMessage(x0); return ats2jspre_cloref1_app(k0, chn);
}
//
function
ats2js_worker_channeg1_send
  (chn, k0)
{
  return ats2js_worker_channeg0_send(chn, k0);
}
function
ats2js_worker_channeg1_recv
  (chn, x0, k0)
{
  return ats2js_worker_channeg0_recv(chn, x0, k0);
}
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
theArg1_set(a1)
{
  document.getElementById('theArg1').value = a1;
}
function
theArg2_set(a2)
{
  document.getElementById('theArg2').value = a2;
}
function
theResult_get()
{
  return parseInt(document.getElementById('theResult').value);
}
function
theResult_set(value)
{
  document.getElementById('theResult').value = value;
}
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
var
Started = false;
//
function
Start_onclick()
{
  if (!Started)
  {
    Started = true; return StartIt();
  } else
  {
    alert ('The session is in progress!'); return;
  }
}
//
var
AnswerIt = 0;
var
AnswerIt_do = 0;
//
function
AnswerIt_onclick()
{
  if (AnswerIt)
  {
    AnswerIt = 0;
    return ats2jspre_cloref0_app(AnswerIt_do);
  } else {
    alert('The AnswerIt button is not ready yet!'); return;
  } // end of [if]
}
//
function
AnswerIt_do_set(fclo)
  { AnswerIt = 1; AnswerIt_do = fclo; return; }
//
/* ATSextcode_end() */

function
__patsfun_31__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_31(arg0); }];
}


function
__patsfun_32__closurerize()
{
  return [function(cenv, arg0, arg1) { return __patsfun_32(arg0, arg1); }];
}


function
__patsfun_33__closurerize(env0)
{
  return [function(cenv, arg0, arg1) { return __patsfun_33(cenv[1], arg0, arg1); }, env0];
}


function
__patsfun_38__closurerize(env0)
{
  return [function(cenv) { return __patsfun_38(cenv[1]); }, env0];
}


function
__patsfun_39__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_39(arg0); }];
}


function
__patsfun_40__closurerize()
{
  return [function(cenv, arg0, arg1) { return __patsfun_40(arg0, arg1); }];
}


function
StartIt()
{
//
// knd = 0
  var tmp46
  var tmplab, tmplab_js
//
  // __patsflab_StartIt
  tmp46 = ats2js_worker_channeg0_new_file("./test_server_dats_.js");
  ats2js_worker_channeg1_recv(tmp46, 0, __patsfun_31__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_31(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_31
  ats2js_worker_channeg1_send(arg0, __patsfun_32__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_32(arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_32
  ats2js_worker_channeg1_send(arg0, __patsfun_33__closurerize(arg1));
  return/*_void*/;
} // end-of-function


function
__patsfun_33(env0, arg0, arg1)
{
//
// knd = 0
  var tmp50
  var tmp53
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_33
  tmp50 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__34__1(env0);
  tmp53 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__34__2(arg1);
  ReplyIt(arg0, tmp50, tmp53);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__34__1(arg0)
{
//
// knd = 0
  var tmpret51__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret51__1 = parseInt(arg0);
  return tmpret51__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__34__2(arg0)
{
//
// knd = 0
  var tmpret51__2
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret51__2 = parseInt(arg0);
  return tmpret51__2;
} // end-of-function


function
ReplyIt(arg0, arg1, arg2)
{
//
// knd = 0
  var tmp66
  var tmplab, tmplab_js
//
  // __patsflab_ReplyIt
  theArg1_set(arg1);
  theArg2_set(arg2);
  theResult_set("");
  tmp66 = __patsfun_38__closurerize(arg0);
  AnswerIt_do_set(tmp66);
  return/*_void*/;
} // end-of-function


function
__patsfun_38(env0)
{
//
// knd = 0
  var tmp60
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_38
  tmp60 = theResult_get();
  ats2js_worker_channeg1_recv(env0, tmp60, __patsfun_39__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_39(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_39
  ats2js_worker_channeg1_send(arg0, __patsfun_40__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_40(arg0, arg1)
{
//
// knd = 0
  var tmp63
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_40
  tmp63 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__41__1(arg1);
  PostRep(arg0, tmp63);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_contrib_057_libatscc2js_057_ATS2_055_0_056_3_056_2_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__41__1(arg0)
{
//
// knd = 0
  var tmpret64__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret64__1 = arg0;
  return tmpret64__1;
} // end-of-function


function
PostRep(arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_PostRep
  ats2js_worker_channeg1_close(arg0);
  Started = false;
  if(arg1) {
    ats2jspre_alert("The replied answer is right :)");
  } else {
    ats2jspre_alert("The replied answer is wrong :(");
  } // endif
  return/*_void*/;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */
