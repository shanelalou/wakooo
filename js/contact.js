/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 *  called by the webworksready event when the environment is ready
 */
function initApp() {
  bb.pushScreen('href.html', 'href');
}
function setClickHandlers() {
 
  // blank
  var link = document.getElementById('fb');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.facebook.com', '_blank');
  });

  // top
  var link = document.getElementById('twita');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.twitter.com', '_blank');
  });

  // self
  var link = document.getElementById('vSelf');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.gordoncollegeccs.edu.ph/cap/faculty/index.html', '_blank');
  });



}
