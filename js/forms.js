function validate_email(e) {
  var s = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return s.test(e)
}

function contact_submit() {
  $("#contact-error").hide();
  var e = "yes",
    s = $("#contact-name").val();
  "" == s && ("yes" == e && $("#contact-name").focus(), $("#contact-name").addClass("error"), e = "no");
  var a = $("#contact-email").val();
  "" == a && ("yes" == e && $("#contact-email").focus(), $("#contact-email").addClass("error"), e = "no"), validate_email(a) || ("yes" == e && $("#contact-email").focus(), $("#contact-email").addClass("error"), e = "no");
  var c = $("#contact-phone").val();
  "" == $("#contact-phone").val() && ("yes" == e && $("#contact-phone").focus(), $("#contact-phone").addClass("error"), e = "no");
  var o = $("#contact-subject").val();
  "" == o && ("yes" == e && $("#contact-subject").focus(), $("#contact-subject").addClass("error"), e = "no");
  var t = $("#contact-msg").val();
  ("" == t || "Your Message *" == t) && ("yes" == e && $("#contact-msg").focus(), $("#contact-msg").addClass("error"), e = "no"), "yes" != e ? $("#contact-error").show().html("Please review the above details filled") : ($("#contact-error").hide(), $("#contact-success").hide(), $("#contact-failed").hide(), $("#contact-form").hide(), $("#contact-loading").show(), $.ajax({
    url: "reachus.php",
    type: "post",
    cache: !1,
    data: {
      name: s,
      email: a,
      phone: c,
      subject: o,
      msg: t
    },
    success: function (e) {
      "ok" == e ? ($("#contact-error").hide(), $("#contact-failed").hide(), $("#contact-form").hide(), $("#contact-loading").hide(), $("#contact-success").show(), $("#contact-name").val(""), $("#contact-email").val(""), $("#contact-phone").val(""), $("#contact-subject").val(""), $("#contact-msg").val(""), setTimeout("$('#contact-success').hide();$('#contact-form').show();", 5e3)) : ($("#contact-error").hide(), $("#contact-success").hide(), $("#contact-form").hide(), $("#contact-loading").hide(), $("#contact-failed").show(), setTimeout("$('#contact-failed').hide();$('#contact-form').show();", 5e3))
    }
  }))
}

function rsvp_submit() {
  $("#rsvp-error").hide();
  var e = "yes",
    s = $("#rsvp-name").val();
  "" == s && ("yes" == e && $("#rsvp-name").focus(), $("#rsvp-name").addClass("error"), e = "no");
  var a = $("#rsvp-email").val();
  "" == a && ("yes" == e && $("#rsvp-email").focus(), $("#rsvp-email").addClass("error"), e = "no"), validate_email(a) || ("yes" == e && $("#rsvp-email").focus(), $("#rsvp-email").addClass("error"), e = "no");
  var c = $("#rsvp-persons").val();
  "" == $("#rsvp-persons").val() && ("yes" == e && $("#rsvp-persons").focus(), $("#rsvp-persons").addClass("error"), e = "no");
  var o = $("#rsvp-wedding").val();
  "" == o && ("yes" == e && $("#rsvp-wedding").focus(), $("#rsvp-wedding").addClass("error"), e = "no"), "yes" != e ? $("#rsvp-error").show().html("Please review the above details filled") : ($("#rsvp-error").hide(), $("#rsvp-success").hide(), $("#rsvp-failed").hide(), $("#rsvp-form").hide(), $("#rsvp-loading").show(), $.ajax({
    url: "rsvp.php",
    type: "post",
    cache: !1,
    data: {
      name: s,
      email: a,
      persons: c,
      wedding: o
    },
    success: function (e) {
      "ok" == e ? ($("#rsvp-error").hide(), $("#rsvp-failed").hide(), $("#rsvp-form").hide(), $("#rsvp-loading").hide(), $("#rsvp-success").show(), $("#rsvp-name").val(""), $("#rsvp-email").val(""), $("#rsvp-phone").val(""), $("#rsvp-subject").val(""), $("#rsvp-msg").val(""), setTimeout("$('#rsvp-success').hide();$('#rsvp-form').show();", 5e3)) : ($("#rsvp-error").hide(), $("#rsvp-success").hide(), $("#rsvp-form").hide(), $("#rsvp-loading").hide(), $("#rsvp-failed").show(), setTimeout("$('#rsvp-failed').hide();$('#rsvp-form').show();", 5e3))
    }
  }))
}
$(document).ready(function () {
  $("#contact-submit").click(function (e) {
    e.preventDefault(), contact_submit()
  }), $("#rsvp-submit").click(function (e) {
    e.preventDefault(), rsvp_submit()
  }), $("input:text, textarea").keyup(function () {
    $(this).removeClass("error")
  }), $("#contact-error").hide(), $("#contact-loading").hide(), $("#contact-success").hide(), $("#contact-failed").hide(), $("#rsvp-error").hide(), $("#rsvp-loading").hide(), $("#rsvp-success").hide(), $("#rsvp-failed").hide()
});