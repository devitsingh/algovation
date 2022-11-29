
// let Qdata;
// async function fetchData(apiUrl) {
//     try {
//         const response = await axios.get(apiUrl);
//         // setData(response.data);
//         Qdata = response.data;
//     }
//     catch (error) {
//         return [];
//     }


// }
// export default fetchData(apis.question);

let googletag = window.googletag || { cmd: [] };
var adSlots = {}

googletag.cmd.push(function () {
    googletag.defineSlot('/21976866151/best_buddybook_ATF_728x90', [728, 90], 'div-gpt-ad-2777227734768-88').addService(googletag.pubads());
    googletag.defineSlot('/21976866151/best_buddybook_BTF_728x90', [728, 90], 'div-gpt-ad-2777236088073-88').addService(googletag.pubads());
    googletag.defineSlot('/21976866151/best_buddybook_middle_728x90', [728, 90], 'div-gpt-ad-2788271207458-18').addService(googletag.pubads());

    googletag.defineSlot('/21976866151/best_buddybook_320x50_footer', [320, 50], 'div-gpt-ad-2777236333604-88').addService(googletag.pubads());

    // Page Targeting
    googletag.pubads().setTargeting('page', ['home']);
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});
