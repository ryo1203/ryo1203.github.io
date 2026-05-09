// Google Analyticsのスクリプトを動的に読み込む
var ga_id = 'G-4DRCWVCNRZ';

var script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga_id;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ga_id);