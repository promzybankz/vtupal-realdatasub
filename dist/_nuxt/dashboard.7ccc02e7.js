import{_ as p}from"./SidebarBase.30e54482.js";import{q as u,L as b,N as h,M as y,a as g,b as x,u as a,c as i,j as m,h as k,k as w,O as E,o as r,P as T}from"./entry.a5fcd4f4.js";import{g as e}from"./getters.6b35f56b.js";import{v as c}from"./vend.e5739c9e.js";const _={__name:"dashboard",setup(M){const s=u();c().getBillerCat(),c().getServices(),e().getPayments(),e().getReferrals(),e().getTransactions(),e().getDeposits(),e().getSMSMessages(),e().getBanks(),b(()=>{s.loggedin||h({name:"login"})});const t=E("showsidebar"),o=y({base:"dashboard",bars:[{name:"dashboard-bulksms",text:"Bulk SMS",dropdown:!0,children:[{name:"dashboard-bulksms-send",text:"Send SMS",params:{}},{name:"dashboard-bulksms-history",text:"Messaging History",params:{}}]},{name:"dashboard-tvpayment",text:"TV Payment",dropdown:!0,children:[{name:"dashboard-tvpayment",text:"GOTV Payment",params:{type:"GOTV"},query:{type:"GOTV"}},{name:"dashboard-tvpayment",text:"DSTV Payment",params:{type:"DSTV"},query:{type:"DSTV"}},{name:"dashboard-tvpayment",text:"STARTIMES Payment",params:{type:"STARTIME"},query:{type:"STARTIME"}}]},{name:"dashboard-vtuairtime",text:"VTU Airtime",dropdown:!0,children:[{name:"dashboard-vtuairtime",text:"MTN Airtime",params:{network:"MTN"},query:{network:"MTN"}},{name:"dashboard-vtuairtime",text:"GLO Airtime",params:{network:"GLO"},query:{network:"GLO"}},{name:"dashboard-vtuairtime",text:"AIRTIME Airtime",params:{network:"AIRTIME"},query:{network:"AIRTEL"}},{name:"dashboard-vtuairtime",text:"9MOBILE Airtime",params:{network:"9MOBILE"},query:{network:"9MOBILE"}}]},{name:"dashboard-giftingdata",text:"Gifting Data",dropdown:!0,children:[{name:"dashboard-giftingdata",text:"MTN Gifting Data",params:{network:"MTN"},query:{network:"MTN"}},{name:"dashboard-giftingdata",text:"GLO Gifting Data",params:{network:"GLO"},query:{network:"GLO"}},{name:"dashboard-giftingdata",text:"AIRTEL Gifting Data",params:{network:"AIRTIME"},query:{network:"AIRTEL"}},{name:"dashboard-giftingdata",text:"9MOBILE Gifting Data",params:{network:"9MOBILE"},query:{network:"9MOBILE"}}]},{name:"dashboard-smedata",text:"SME Data",dropdown:!0,children:[{name:"dashboard-smedata",text:"MTN SME Data",params:{network:"MTN"},query:{network:"MTN"}}]},{name:"dashboard-electricity",text:"Electricity Payment",dropdown:!0,children:[{name:"dashboard-electricity",text:"Ikeja Electric",params:{disco:"Ikeja"},query:{disco:"Ikeja"}},{name:"dashboard-electricity",text:"Portharcourt Electric",params:{disco:"Port Harcourt"},query:{disco:"Port Harcourt"}},{name:"dashboard-electricity",text:"Kano Electric",params:{disco:"Kano"},query:{disco:"Kano"}},{name:"dashboard-electricity",text:"Enugu Electric",params:{disco:"Enugu"},query:{disco:"Enugu"}},{name:"dashboard-electricity",text:"Abuja Electric",params:{disco:"Abuja"},query:{disco:"Abuja"}},{name:"dashboard-electricity",text:"Jos Electric",params:{disco:"Jos"},query:{disco:"Jos"}},{name:"dashboard-electricity",text:"Eko Electric",params:{disco:"Eko"},query:{disco:"Eko"}}]},{name:"dashboard-payment",text:"Wallets & Payments",dropdown:!0,children:[{name:"dashboard-payments-cwallet",text:"Credit Wallet"},{name:"dashboard-payments-history",text:"Payment History"}]},{name:"dashboard-transactions",text:"All Transactions",dropdown:!1,children:[]},{name:"dashboard-reseller",text:"Reseller",dropdown:!0,children:[{name:"dashboard-reseller-setup",text:"Upgrade to Reseller"}]},{name:"dashboard-earnings",text:"Earnings and Referrals",dropdown:!1,children:[]},{name:"dashboard-settings",text:"Settings",dropdown:!0,children:[{name:"passwordreset",text:"Change Password"},{name:"dashboard-settings-myprofile",text:"My Profile"}]}]});return(f,n)=>{const d=p,l=T;return r(),g("div",null,[x("div",{class:w(["grid grid-cols-1 lg:grid-cols-8",{"opacity-30 pointer-events-none":a(s).modalshowing}])},[a(t)?(r(),i(d,{key:0,class:"col-span-2 lg:hidden w-4/5",sidebar:a(o),onRouteChanged:n[0]||(n[0]=S=>t.value=!1)},null,8,["sidebar"])):m("",!0),k(d,{class:"col-span-2 hidden lg:block",sidebar:a(o)},null,8,["sidebar"]),a(t)?m("",!0):(r(),i(l,{key:1,class:"col-span-6 p-3 bg-[#b6b6d051]"}))],2)])}}};export{_ as default};