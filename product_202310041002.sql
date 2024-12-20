-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS hidrosolcm.product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    storeCode VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    altText TEXT NOT NULL,
    imagePath TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
);

INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1195','Torneira Bica Móvel Lavatorio Pesada 1/2','Torneira Bica Móvel Lavatorio Pesada 1/2','1195_12_TORN_B_LAVATORIO_PESADA_C-52.jpg','C-52','Bica Movel,Lavatório'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada','Torneira de Jardim Longa 3/4 Cromada','1130_34_torneira_jardim_longa_cr_c23.jpg','C-23','Jardim'),
	 ('1195','Torneira Bica Móvel Lavatorio Pesada 1/2','Torneira Bica Móvel Lavatorio Pesada 1/2','1195_12_TORN_B_LAVATORIO_PESADA_C-50.jpg','C-50','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio JR 1/2','Torneira Bica Móvel Lavatorio JR 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_JR_C-52.jpg','C-52','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio JR 1/2','Torneira Bica Móvel Lavatorio JR 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_JR_C-40.jpg','C-40','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio JR 1/2','Torneira Bica Móvel Lavatorio JR 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_JR_C-50.jpg','C-50','Bica Movel,Lavatório'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada','Torneira de Jardim Longa 3/4 Cromada','1130__34_torneira_de_jardim_longa_c33.jpg','C-33','Jardim'),
	 ('1195','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_14_VOLTA_C-28.jpg','C-28','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio JR 1/2','Torneira Bica Móvel Lavatorio JR 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_JR_C-47.jpg','C-47','Bica Movel,Lavatório'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','1130_34_torneira_jardim_longa_cr_luxo_14_volta_c70.jpg','C-70','Jardim');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1195','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_14_VOLTA_C-34.jpg','C-34','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_14_VOLTA_C-29.jpg','C-29','Bica Movel,Lavatório'),
	 ('1194','Torneira Lavatorio JR 1/2','Torneira Lavatorio JR 1/2','1194_12_TORN_LAVATORIO_JR_C-52.jpg','C-52','Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_14_VOLTA_C-70.jpg','C-70','Bica Movel,Lavatório'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada','Torneira de Jardim Longa 3/4 Cromada','1130_torneira_jardim_longa_cr.jpg','Popular Cromada','Jardim'),
	 ('1194','Torneira Lavatorio Pesda 1/2','Torneira Lavatorio Pesda 1/2','1194_12_TORN_LAVATORIO_PESADA_C-40.jpg','C-40','Lavatório'),
	 ('1194','Torneira Lavatorio Pesada 1/2','Torneira Lavatorio Pesada 1/2','1194_12_TORN_LAVATORIO_PESADA_C-50.jpg','C-50','Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','Torneira Bica Móvel Lavatorio 1/4 de Volta 1/2','1195_12_TORN_B_MOVEL_LAVATORIO_14_VOLTA_C-55.jpg','C-55','Bica Movel,Lavatório'),
	 ('1194','Torneira Lavatorio JR 1/2','Torneira Lavatorio JR 1/2','1194_12_TORN_LAVATORIO_JR_C-50.jpg','C-50','Lavatório'),
	 ('1128','Torneira de Jardim Curta 3/4 Cromada','Torneira de Jardim Curta 3/4 Cromada','1128_torneira_jardim_curta_cr.jpg','Popular Cromada','Jardim');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1194','Torneira Lavatorio JR 1/2','Torneira Lavatorio JR 1/2','1194_12_TORN_LAVATORIO_JR_C-40.jpg','C-40','Lavatório'),
	 ('1130','Torneira de Jardim Longa 3/4 Amarela','Torneira de Jardim Longa 3/4 Amarela','1130_torneira_jardim_longa_am.jpg','Popular Amarela','Jardim'),
	 ('1194','Torneira Lavatorio JR 1/2','Torneira Lavatorio JR 1/2','1194_12_TORN_LAVATORIO_JR_C-47.jpg','C-47','Lavatório'),
	 ('2195','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','2195_12_TORN_B_M_LAVATORIO_14_VOLTA_C-29.jpg','C-29','Lavatório,Bica Movel'),
	 ('1194','Torneira Lavatorio Pesada 1/2','Torneira Lavatorio Pesada 1/2','1194_12_TORN_LAVATORIO_PESADA_C-47.jpg','C-47','Lavatório'),
	 ('1194','Torneira Lavatorio Pesada 1/2','Torneira Lavatorio Pesada 1/2','1194_12_TORN_LAVATORIO_PESADA_C-52.jpg','C-52','Lavatório'),
	 ('2195','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','2195_12_TORN_B_M_LAVATORIO_14_VOLTA_C-34.jpg','C-34','Lavatório,Bica Movel'),
	 ('1193','Torneira Lavatorio de 1/2','Torneira Lavatorio de 1/2','1193_12_TORN_LAVATORIO_SIMPLES_C-23.jpg','C-23','Lavatório,Simples'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','1130_34_TORN_DE_JARDIM_LONGA_LUXO_14_VOLTA_C-28.jpg','C-28','Jardim'),
	 ('2195','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','Torneira Bica Movel Lavatorio 1/4 de Volta 1/2','2195_12_TORN_B_M_LAVATORIO_14_VOLTA_C-70.jpg','C-70','Lavatório,Bica Movel');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1156','Torneira Bica Movel Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','Torneira Bica Movel Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','1156_12_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_CR_C-29.jpg','CR-C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Movel Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','Torneira Bica Movel Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','1156_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_CR_C-34.jpg','CR-C-34','Bica Movel,Parede'),
	 ('1193','Torneira Lavatorio de 1/2','Torneira Lavatorio de 1/2','1193_12_TORN_LAVATORIO_SIMPLES_C-33.jpg','C-33','Lavatório,Simples'),
	 ('2195','Torneira Bica Movel Lavatorio de 1/2 Volante Quadrado 1/4 de Volta','Torneira Bica Movel Lavatorio de 1/2 Volante Quadrado 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_14_VOLTA_QUADRADA_VOLANTE_QUADARADO_CR.jpg','CR','Lavatório,Bica Movel'),
	 ('2195','Torneira Bica Movel Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_QUADRADA_14_VOLTA_C-34.jpg','C-34','Bica Movel,Lavatório'),
	 ('2195','Torneira Bica Movel Lavatorio Quadrada de 1/2 e 1/4 de Volta','Torneira Bica Movel Lavatorio Quadrada de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_QUADRADA_14_VOLTA_C-70.jpg','C-70','Bica Movel,Lavatório'),
	 ('1156','Torneira Bica Móvel Parede Pesada 3/4','Torneira Bica Móvel Parede Pesada 3/4','1156_34_torneira_bica_movel_parede_pesasa_c40.jpg','C-40','Bica Movel,Parede'),
	 ('1156','Torneira Bica Movel de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14_VOLTA_COM_PRETO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Movel de Mesa, tubo cor Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa, tubo cor Vermelho de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_VERMELHO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2195','Torneira Bica Movel Lavatorio Quadrada de 1/2 e 1/4 de Volta','Torneira Bica Movel Lavatorio Quadrada de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_QUADRADA_14_VOLTA_C-29.jpg','C-29','Bica Movel,Lavatório');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1156','Torneira Bica Movel Mesa c/ Tubo Gourmet de 1/2 e 1/4 de Volta','Torneira Bica Movel Mesa c/ Tubo Gourmet de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_CR_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Movel Lavatorio de Mesa, tubo cor Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel Lavatorio de Mesa, tubo cor Vermelho de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_VERMELHO_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Movel de Parede, tubo cor Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel de Parede, tubo cor Vermelho de 1/2 e 1/4 de Volta','1156_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_VERMELHO_C-34.jpg','C-34','Bica Movel,Parede'),
	 ('1130','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','Torneira de Jardim Longa 3/4 Cromada Luxo 1/4 Volta','1130_34_torneira_de_jardim_longa_luxo_14_volta_c-34.jpg','C-34','Jardim'),
	 ('1156','Torneira Bica Movel de Parede, tubo cor Vermelho de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede, tubo cor Vermelho de 3/4 e 1/4 de Volta','1156_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_VERMELHO_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Movel Lavatorio de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel Lavatorio de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14VOLTA_COM_TUBO_PRETO_C-34.jpg','C-34','Bica Movel,Lavatório'),
	 ('1156','Torneira Bica Movel de Parede, tubo cor Preto de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede, tubo cor Preto de 3/4 e 1/4 de Volta','1156_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_PRETO_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Movel de Parede, tubo cor Preto de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede, tubo cor Preto de 3/4 e 1/4 de Volta','1156_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_PRETO_C-34.jpg','C-34','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Parede Pesada 3/4','Torneira Bica Móvel Parede Pesada 3/4','1156_34_rotn_b_movel_parede_pesada_c52.jpg','C-52','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Parede Pesada 3/4','Torneira Bica Móvel Parede Pesada 3/4','1156_34_torneira_b_movel_parede_pesada_c47.jpg','C-47','Bica Movel,Parede');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1156','Torneira Bica Movel de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa, tubo cor Preto de 1/2 e 1/4 de Volta','1156_12_TORN_B_M_MESA_14VOLTA_COM_TUBO_GOURMET_CR_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('2195','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_RETA_14_VOLTA_C-29.jpg','C-29','Bica Movel,Lavatório'),
	 ('1156','Torneira Bica Móvel Parede Pesada 3/4','Torneira Bica Móvel Parede Pesada 3/4','1156_34_TORN_B_MOVEL_PAREDE_PESADA_C-50.jpg','C-50','Bica Movel,Parede'),
	 ('2195','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_RETA_14_VOLTA_C-34.jpg','C-34','Bica Movel,Lavatório'),
	 ('2195','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Reta para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_RETA_14_VOLTA_C-70.jpg','C-70','Bica Movel,Lavatório'),
	 ('2156','Torneira Bica Movel Parede Quadrada de 3/4 e 1/4 de Volta','Torneira Bica Movel Parede Quadrada de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-70.jpg','C-70','Bica Movel,Parede'),
	 ('2195','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_QUADRADA_14_VOLTA_C-70.jpg','C-70','Bica Movel,Lavatório'),
	 ('2195','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_QUADRADA_14_VOLTA_C-29.jpg','C-29','Bica Movel,Lavatório'),
	 ('2156','Torneira Bica Movel Parede de 3/4 e 1/4 de Volta','Torneira Bica Movel Parede de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_14_VOLTA_COM_ARTICULADOR_C-70.jpg','C-70','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Mesa Pesada 1/2','Torneira Bica Móvel Mesa Pesada 1/2','1156_12_TORN_B_MOVEL_MESA_PESADA_C-40.jpg','C-40','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('2156','Torneira Bica Movel Parede Quadrade com Articulador de 3/4 e 1/4 de Volta','Torneira Bica Movel Parede Quadrade com Articulador de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-34.jpg','C-34','Bica Movel,Parede'),
	 ('2195','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','Torneira Bica Movel Alta Quadrada para Lavatorio de 1/2 e 1/4 de Volta','2195_12_TORN_B_M_LAVATORIO_BICA_ALTA_QUADRADA_14_VOLTA_C-34.jpg','C-34','Bica Movel,Lavatório'),
	 ('2156','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel Mesa Pesada 1/2','Torneira Bica Móvel Mesa Pesada 1/2','1156_12_TORN_B_MOVEL_MESA_PESADA_C-47.jpg','C-47','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_14_VOLTA_COM_ARTICULADOR_C-29.jpg','C-34','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Parede Júnior 3/4','Torneira Bica Móvel Parede Júnior 3/4','1156_34_TORN_B_MOVEL_PAREDE_JR_C-50.jpg','C-50','Bica Movel,Parede'),
	 ('2156','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel Mesa JR 1/2','Torneira Bica Móvel Mesa JR 1/2','1156_12_TORN_B_MOVEL_MESA_JR_C-50.jpg','C-50','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Parede Quadrada com Articulador de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede Quadrada com Articulador de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Mesa Pesada 1/2','Torneira Bica Móvel Mesa Pesada 1/2','1156_12_TORN_B_MOVEL_MESA_PESADA_C-52.jpg','C-52','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('2156','Torneira Bica Movel de Mesa de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_14_VOLTA_COM_ARTICULADOR_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta','2156_34_TORN_B_M_PAREDE_14_VOLTA_COM_ARTICULADOR_C-34.jpg','C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Parede JR 3/4','Torneira Bica Móvel Parede JR 3/4','1156_34_TORN_B_MOVEL_PAREDE_JR_C-40.jpg','C-40','Bica Movel,Parede'),
	 ('2156','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2  Volante Quadrado','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2  Volante Quadrado','2156_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_ARTICULADOR_VOLANTE_QUADRADO_CR.jpg','CR','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa Quadrada com Articulador de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_ARTICULADOR_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Mesa com Articulador de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Articulador de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_14_VOLTA_COM_ARTICULADOR_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Mesa com Articulador de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Articulador de 1/2 e 1/4 de Volta','2156_12_TORN_B_M_MESA_14_VOLTA_COM_ARTICULADOR_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('2156','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta e Volante Quadrado','Torneira Bica Movel de Parede com Articulador de 3/4 e 1/4 de Volta e Volante Quadrado','2156_34_TORN_B_M_PAREDE_14_VOLTA_QUADRADA_COM_ARTICULADOR_VOLANTE_QUADRADO_CR.jpg','C-34','Bica Movel,Parede'),
	 ('2157','Torneira Bica Movel de Mesa com Tubo Groume de 3/4 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Groume de 3/4 e 1/4 de Volta','2157_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_CR_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2157','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','2157_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_CR_C-70.jpg','CR-C-70','Bica Movel,Parede');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1156','Torneira Bica Móvel Mesa JR 1/2','Torneira Bica Móvel Mesa JR 1/2','1156_12_TORN_B_MOVEL_MESA_JR_C-40.jpg','C-40','Bica Movel,Mesa'),
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta','2196_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_CR_C-34.jpg','CR-C-34','Bica Movel,Mesa'),
	 ('2157','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta','2157_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_CR_C-34.jpg','CR-C-34','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Parede 3/4','Torneira Bica Móvel Parede 3/4','1156_34_TORN_B_MOVEL_PAREDE_JR_C-47.jpg','C-47','Bica Movel,Parede'),
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante','2196_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_CR_C-29.jpg','CR-C-29','Bica Movel,Mesa'),
	 ('2196','Torneira Bica Movel de Parede com Tubo Gourmet de 1/2 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet de 1/2 e 1/4 de Volta','2196_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_CR_C-70.jpg','CR-C-70','Bica Movel,Parede'),
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante - Quadrada','2196_12_TORN_B_M_MESA_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C-29.jpg','CR-C-29','Bica Movel,Mesa'),
	 ('2157','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta com Volante - Quadrada','Torneira Bica Movel de Parede com Tubo Gourmet de 3/4 e 1/4 de Volta com Volante - Quadrada','2157_34_TORN_B_M_PAREDE_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C-70.jpg','CR-C-70','Bica Movel,Parede'),
	 ('2157','Torneira Bica Movel de Mesa com Tubo Gourmet de 3/4 e 1/4 de Volta com Volante - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet de 3/4 e 1/4 de Volta com Volante - Quadrada','2157_34_TORN_B_M_PAREDE_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C-29.jpg','CR-C-29','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel Mesa Pesada 1/2','Torneira Bica Móvel Mesa Pesada 1/2','1156_12_TORN_B_MOVEL_MESA_PESADA_C-50.jpg','C-50','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta com Volante - Quadrada','2196_12_TORN_B_MOVEL_MESA_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C-34.jpg','CR-C-34','Bica Movel,Mesa'),
	 ('2157','Torneira Bica Movel de Mesa com Tubo Gourmet Quadrada de 3/4 e 1/4 de Volta com Volante Quadrado','Torneira Bica Movel de Mesa com Tubo Gourmet Quadrada de 3/4 e 1/4 de Volta com Volante Quadrado','2157_34_TORN_B_M_PAREDE_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_VOLANTE_QUADRADO_CR.jpg','CR','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','2118_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet Quadrada de 1/2 e 1/4 de Volta com Volante Quadrado','Torneira Bica Movel de Mesa com Tubo Gourmet Quadrada de 1/2 e 1/4 de Volta com Volante Quadrado','2196_12_TORN_B_M_MESA_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_VOLANTE_QUADRADO_CR.jpg','CR','Bica Movel,Mesa'),
	 ('2157','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta - Quadrada','2157_34_TORN_B_M_PAREDE_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C_34.jpg','CR-C-34','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','2118_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-70.jpg','C-70','Bica Movel,Parede'),
	 ('2196','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet de 1/2 e 1/4 de Volta - Quadrada','2196_12_TORN_B_M_MESA_14_VOLTA_QUADRADA_COM_TUBO_GOURMET_CR_C-70.jpg','CR-C-70','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel Mesa JR 1/2','Torneira Bica Móvel Mesa JR 1/2','1156_12_TORN_B_MOVEL_MESA_JR_C-52.jpg','C-52','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','2118_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-34.jpg','C-34','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada Volante Quadrado','Torneira Bica Movel de Parede com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada Volante Quadrado','2118_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_VOLANTE_QUADRADO_PRERO.jpg','','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel Mesa JR 1/2','Torneira Bica Móvel Mesa JR 1/2','1156_12_TORN_B_MOVEL_MESA_JR_C-47.jpg','C-47','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 3/4 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 3/4 e 1/4 de Volta','2118_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','1156_12_TORN_B_MOVEL_MESA_1-4_VOLTA_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 3/4 e 1/4 de Volta - Quadrada','2118_34_TORN_B_M_PAREDE_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada, Volante quadrado','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada, Volante quadrado','2118_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_VOLANTE_QUADRADO_PRETO.jpg','','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','2118_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','Torneira Bica Movel de Mesa com Tubo Gourmet Preto de 1/2 e 1/4 de Volta - Quadrada','2118_12_TORN_B_M_MESA_QUADRADA_14_VOLTA_COM_TUBO_GOURMET_PRETO_C-34.jpg','C-34','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','2118_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-29.jpg','C-29','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel Parede JR 3/4','Torneira Bica Móvel Parede JR 3/4','1156_34_TORN_B_MOVEL_PAREDE_JR_C-52.jpg','C-52','Bica Movel,Parede'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','2118_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-34.jpg','C-29','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','1156_12_TORN_B_MOVEL_MESA_1-4_VOLTA_C-34.jpg','C-34','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel 3/4 Parede 1/4 Volta','Torneira Bica Móvel 3/4 Parede 1/4 Volta','1156_34_TORN_B_MOVEL_PAREDE_1-4_VOLTA_C-55.jpg','C-55','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','1156_12_TORN_B_MOVEL_MESA_1-4_VOLTA_C-55.jpg','C-55','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel 3/4 Parede 1/4 Volta','Torneira Bica Móvel 3/4 Parede 1/4 Volta','1156_34_TORN_B_MOVEL_PAREDE_1-4_VOLTA_C-28.jpg','C-28','Bica Movel,Parede'),
	 ('2118','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','Torneira Bica Movel de Mesa com Tubo Gourmet Vermelho de 1/2 e 1/4 de Volta','2118_12_TORN_B_M_MESA_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-70.jpg','C-70','Bica Movel,Mesa');
INSERT INTO hidrosolcm.product (storeCode,description,altText,imagePath,name,category) VALUES
	 ('1156','Torneira Bica Móvel 3/4 Parede 1/4 Volta','Torneira Bica Móvel 3/4 Parede 1/4 Volta','1156_34_TORN_B_MOVEL_PAREDE_1-4_VOLTA_C-70.jpg','C-70','Bica Movel,Parede'),
	 ('2118','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','Torneira Bica Movel de Parede com Tubo Gourmet Vermelho de 3/4 e 1/4 de Volta','2118_34_TORN_B_M_PAREDE_14_VOLTA_COM_TUBO_GOURMET_VERMELHO_C-70.jpg','C-70','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','1156_12_TORN_B_MOVEL_MESA_1-4_VOLTA_C-28.jpg','C-28','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel 3/4 Parede 1/4 Volta','Torneira Bica Móvel 3/4 Parede 1/4 Volta','1156_34_TORN_B_MOVEL_PAREDE_1-4_VOLTA_C-34.jpg','C-34','Bica Movel,Parede'),
	 ('1156','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','Torneira Bica Móvel 1/2 Mesa 1/4 Volta','1156_12_TORN_B_MOVEL_MESA_1-4_VOLTA_C-70.jpg','C-70','Bica Movel,Mesa'),
	 ('1156','Torneira Bica Móvel 3/4 Parede 1/4 Volta','Torneira Bica Móvel 3/4 Parede 1/4 Volta','1156_34_TORN_B_MOVEL_PAREDE_1-4_VOLTA_C-29.jpg','C-29','Bica Movel,Parede'),
	 ('1195','Torneira Bica Móvel Lavatorio Pesada  1/2','Torneira Bica Móvel Lavatorio Pesada  1/2','1195_12_TORN_B_LAVATORIO_PESADA_C-47.jpg','C-47','Bica Movel,Lavatório'),
	 ('1195','Torneira Bica Móvel Lavatorio Pesada 1/2','Torneira Bica Móvel Lavatorio Pesada 1/2','1195_12_TORN_B_LAVATORIO_PESADA_C-40.jpg','C-40','Bica Movel,Lavatório');
