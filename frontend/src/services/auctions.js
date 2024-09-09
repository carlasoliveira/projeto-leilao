export const AuctionService = {
	getAuctionsSmall() {
		return new Promise((resolve) => {
			const auctions = [
				{
					id: '1',
					name: 'Prefeitura do Município de Tamboara (PR) - Veículos',
					description: 'Veículos em bom estado de conservação e funcionamento.',
					image: ''
				},
				{
					id: '2',
					name: 'Prefeitura do Município de Paranavaí (PR) - Equipamentos de informática',
					description: 'Equipamentos e peças em bom estado de conservação.',
					image: ''
				},
				{
					id: '3',
					name: 'Prefeitura do Município de Paraíso do Norte (PR) - Veículos',
					description: 'Veículos sucateados.',
					image: ''
				},
				
			];
			resolve(auctions);
		});
	}
};