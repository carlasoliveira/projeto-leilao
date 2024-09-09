export const ProductService = {
    getProductsSmall() {
        return new Promise((resolve) => {
            const products = [
                {
                    id: '1',
                    name: 'Cadeira Executiva Ergonômica',
                    description: 'Cadeira ergonômica com ajuste de altura, apoio lombar ajustável e rodízios. Ideal para uso prolongado em escritórios, proporcionando conforto e suporte adequado para a postura. Estofamento em couro sintético de alta qualidade com estrutura em aço inoxidável.',
                    image: ''
                },
                {
                    id: '2',
                    name: 'Impressora a Laser Multifuncional',
                    description: 'Impressora a laser multifuncional com capacidade para imprimir, copiar, digitalizar e enviar faxes. Oferece impressão rápida e de alta qualidade com um ciclo mensal de até 30.000 páginas. Inclui alimentação de papel de 500 folhas e display touchscreen.',
                    image: ''
                },
                {
                    id: '3',
                    name: 'Mesa de Reunião de Vidro Temperado',
                    description: 'Mesa de reunião retangular com tampo de vidro temperado e estrutura metálica pintada em preto. Com capacidade para acomodar até 8 pessoas, é ideal para reuniões e conferências. Design moderno e elegante, com bordas arredondadas para maior segurança.',
                    image: ''
                },
                {
                    id: '4',
                    name: 'Sedan Executivo 2020',
                    description: ' Sedan executivo de 2020, com motor 2.0 turbo e transmissão automática de 8 marchas. Equipado com sistemas de navegação, câmera de ré, bancos de couro com ajuste elétrico e climatização automática. Ideal para transporte executivo e viagens de negócios.',
                    image: ''
                },
                {
                    id: '5',
                    name: 'Van de Transporte 2023',
                    description: 'Van de transporte de 2023 com capacidade para 12 passageiros. Possui motor diesel de 3.0 litros, transmissão automática e ar-condicionado de três zonas. Inclui sistema de entretenimento com tela LCD e portas deslizantes para facilitar o embarque e desembarque. Ideal para transporte de grupos e logística corporativa.',
                    image: ''
                },
            ];
            resolve(products);
        });
    }
};