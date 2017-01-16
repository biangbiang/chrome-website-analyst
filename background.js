// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function click(e) {
chrome.tabs.executeScript(null,
    {file:"analyse.js"});
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var analyse = document.getElementById('analyse');
    analyse.addEventListener('click', click);
});

