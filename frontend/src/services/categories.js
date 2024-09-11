export const CategoriesService = {
	getAuctionsSmall() {
		return new Promise((resolve) => {
			const categories = [
				{
					id: '1',
					name: 'Veículos',
					auctions: 15,
				},
				{
					id: '2',
					name: 'Equipamentos de informática',
					auctions: 8,
				},
				{
					id: '3',
					name: 'Veículos sucateados',
					auctions: 3,
				},
				{
					id: '4',
					name: 'Mobiliário',
					auctions: 1,
				},
			];
			resolve(categories);
		});
	}
};