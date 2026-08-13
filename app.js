/* 홈스테드 스테이 — 공통 스크립트
   API_URL: Apps Script 웹앱 주소(/exec).
   배포를 새로 만들어 주소가 바뀌면 이 값만 교체하면 됩니다. */
var API_URL = 'https://script.google.com/macros/s/AKfycbxYXqfZ3h6yy8M55BU7xiQAriE7J-KncaZxBVF7F0_OrGoaCAYKiHnYzQs5VjG-a81a/exec';

var CFG = {};

function api(action, data) {
  return fetch(API_URL, {
    method: 'POST',
    // text/plain → 브라우저 사전요청(preflight) 회피
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: action, data: data || {} })
  }).then(function (r) { return r.json(); });
}

function toast(msg, ok) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (ok ? ' ok' : '');
  setTimeout(function () { t.className = 'toast'; }, 3400);
}

function todayISO() {
  var d = new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

function startClock(dateId, timeId) {
  function tick() {
    var d = new Date(), days = ['일','월','화','수','목','금','토'];
    var de = document.getElementById(dateId), te = document.getElementById(timeId);
    if (de) de.textContent = (d.getMonth() + 1) + '월 ' + d.getDate() + '일 (' + days[d.getDay()] + ')';
    if (te) {
      var h = d.getHours(), m = ('0' + d.getMinutes()).slice(-2), s = ('0' + d.getSeconds()).slice(-2);
      var ap = h < 12 ? '오전' : '오후', h12 = h % 12; if (h12 === 0) h12 = 12;
      te.textContent = ap + ' ' + h12 + ':' + m + ':' + s;
    }
  }
  tick(); setInterval(tick, 1000);
}

function fillSelect(id, list) {
  var el = document.getElementById(id);
  if (!el || !list) return;
  list.forEach(function (v) {
    var o = document.createElement('option');
    o.value = v; o.textContent = v; el.appendChild(o);
  });
}

// 공통 설정 로드 (로고 / 전화 / 객실 목록 등)
function loadConfig(cb) {
  api('config').then(function (c) {
    CFG = c || {};
    var lg = document.querySelector('img.logo');
    if (lg && CFG.logoUrl && CFG.logoUrl.indexOf('http') === 0) { lg.src = CFG.logoUrl; lg.style.display = 'block'; }
    document.querySelectorAll('.callbtn').forEach(function (b) {
      if (CFG.phoneContact && CFG.phoneContact.length >= 8) { b.href = 'tel:' + CFG.phoneContact; b.style.display = 'flex'; }
    });
    var f = document.getElementById('footer');
    if (f && CFG.placeName) {
      f.innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' ' + CFG.placeName + ' All rights reserved.';
    }
    if (cb) cb(CFG);
  }).catch(function (e) {
    toast('설정을 불러오지 못했습니다. 새로고침해 주세요.');
  });
}
