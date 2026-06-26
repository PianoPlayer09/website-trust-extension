async function getCurrentTab() {

  const [tab] = await chrome.tabs.query({

    active: true,

    currentWindow: true

  });

  return tab;

}

function getDomain(url){
    try{
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
        }catch (error){
            return "Invalid URL"
        }
    }


async function main() {
    const tab = await getCurrentTab();
    const domain = getDomain(tab.url);
    document.getElementById("domain").textContent = domain;
    // document.getElementById("url").textContent = tab.url;
}

main()