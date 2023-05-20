// import React, { useEffect, useState } from 'react';
// import { Avalanche } from 'avalanche';

// function MyDApp1() {
//   const [address, setAddress] = useState('');
//   const [balance, setBalance] = useState('');

//   useEffect(() => {
//     connectAvalancheWallet();
//   }, []);

//   const connectAvalancheWallet = async () => {
//     if (window.AvalancheWallet && window.AvalancheWallet.isExtensionInstalled()) {
//       try {
//         const avm = new Avalanche('api.avax.network', 443, 'https');
//         await avm.avaxWallet.connect();
//         const wallet = avm.avaxWallet.getWallet();
//         const addresses = wallet.getAllAddresses();
//         setAddress(addresses[0]);

//         // 예시로 잔고 조회
//         const balanceResponse = await avm.avaxWallet.getBalance(addresses[0]);
//         setBalance(balanceResponse.balance);
//       } catch (error) {
//         console.error('Failed to connect Avalanche wallet:', error);
//       }
//     } else {
//       console.error('Avalanche wallet extension not installed.');
//     }
//   };

//   return (
//     <div>
//       <p>Address: {address}</p>
//       <p>Balance: {balance}</p>
//     </div>
//   );
// }

// export default MyDApp1;
