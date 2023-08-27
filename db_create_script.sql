CREATE TABLE users(
    id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    display_name varchar(100),
    isActive boolean
) ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO users (username, password, display_name, isActive)
VALUES ('admin', 'password', 'administator', 1);

CREATE TABLE shops(
    id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255),
    lat varchar(100),
    lng varchar(100),
    isActive boolean
) ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO shops (name, description, lat, lng, isActive)
VALUES ("สุกี้ตี๋น้อย ศรีนครินทร์ มาร์เก็ต (Supreme)", "199 10 ถ. ศรีนครินทร์ แขวงหนองบอน เขต ประเวศ กรุงเทพมหานคร 10250 ไทย", '13.689366549795988', '100.64645220437521', 1),
("สุกี้ตี๋น้อย I'm Park", "PGQG+X3G ชั้น G I'm Park Chula เขตปทุมวัน กรุงเทพมหานคร ไทย", '13.740126760161194', '100.52514223578122', 1),
("CQK Mala Hotpot สาม ย่าน - บรรทัดทอง", "1818 ถนน บรรทัดทอง แขวงรองเมือง เขตปทุมวัน กรุงเทพมหานคร 10330 ไทย", '13.738803210143992', '100.52203972157099', 1);