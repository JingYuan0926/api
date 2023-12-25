document.addEventListener('DOMContentLoaded', async () => {
  const apiURL = 'https://testnets-api.opensea.io/api/v2/chain/sepolia/account/0xb33fDF78a5cD176Ae132c6B592F20DEBE5Bf563f/nfts';
  const gallery = document.getElementById('nftGallery');

  try {
      const response = await fetch(apiURL);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      data.nfts.forEach(nft => {
        const imageUrl = nft.image_url ? `https://${nft.image_url.split('/').pop()}.ipfs.nftstorage.link/` : 'path_to_your_placeholder_image.jpg';
        const updatedDate = new Date(nft.updated_at).toLocaleString();



        const nftElement = document.createElement('div');
        nftElement.className = 'nft';
        nftElement.innerHTML = `
            <img src="${imageUrl}" alt="${nft.name || 'No Image Available'}">
            <p>Name: ${nft.name}</p>
            <p>Identifier: ${nft.identifier}</p>
            <p>Collection: ${nft.collection}</p>
            <p>Contract: ${nft.contract}</p>
            <p>Last Updated: ${updatedDate}</p>
            <p><a href="${nft.opensea_url}" target="_blank">View on OpenSea</a></p>
        `;
        gallery.appendChild(nftElement);
    });
  } catch (error) {
      console.error('Failed to fetch NFT data:', error);
  }
});

// nftData.nfts.forEach(nft => {
//   if (nft.image_url) {
//       // Replace only the base URL part, leave the CID intact
//       const cid = nft.image_url.split('/').pop(); // Extracts the CID from the URL
//       const correctImageUrl = `https://${cid}.ipfs.nftstorage.link/`; // Creates the correct URL

//       const nftElement = document.createElement('div');
//       nftElement.className = 'nft';
//       nftElement.innerHTML = `
//           <img src="${correctImageUrl}" alt="${nft.name}">
//           <p>${nft.name}</p>
//           <p><a href="${nft.opensea_url}" target="_blank">View on OpenSea</a></p>
//       `;
//       gallery.appendChild(nftElement);
//   }
// });


// document.addEventListener('DOMContentLoaded', async () => {
//   const apiURL = 'https://testnets-api.opensea.io/api/v2/chain/sepolia/account/0xb33fDF78a5cD176Ae132c6B592F20DEBE5Bf563f/nfts';
//   const gallery = document.getElementById('nftGallery');

//   try {
//       const response = await fetch(apiURL);
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       data.nfts.forEach(nft => {
//         const imageUrl = nft.image_url ? `https://${nft.image_url.split('/').pop()}.ipfs.nftstorage.link/` : 'path_to_your_placeholder_image.jpg';
//         const updatedDate = new Date(nft.updated_at).toLocaleString();



//         const nftElement = document.createElement('div');
//         nftElement.className = 'nft';
//         nftElement.innerHTML = `
//             <img src="${imageUrl}" alt="${nft.name || 'No Image Available'}">
//             <p>Name: ${nft.name}</p>
//             <p>Identifier: ${nft.identifier}</p>
//             <p>Collection: ${nft.collection}</p>
//             <p>Contract: ${nft.contract}</p>
//             <p>Last Updated: ${updatedDate}</p>
//             <p><a href="${nft.opensea_url}" target="_blank">View on OpenSea</a></p>
//         `;
//         gallery.appendChild(nftElement);
//     });
//   } catch (error) {
//       console.error('Failed to fetch NFT data:', error);
//   }
// });

// // nftData.nfts.forEach(nft => {
// //   if (nft.image_url) {
// //       // Replace only the base URL part, leave the CID intact
// //       const cid = nft.image_url.split('/').pop(); // Extracts the CID from the URL
// //       const correctImageUrl = `https://${cid}.ipfs.nftstorage.link/`; // Creates the correct URL

// //       const nftElement = document.createElement('div');
// //       nftElement.className = 'nft';
// //       nftElement.innerHTML = `
// //           <img src="${correctImageUrl}" alt="${nft.name}">
// //           <p>${nft.name}</p>
// //           <p><a href="${nft.opensea_url}" target="_blank">View on OpenSea</a></p>
// //       `;
// //       gallery.appendChild(nftElement);
// //   }
// // });