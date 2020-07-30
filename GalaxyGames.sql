CREATE database GalaxyGames;
use GalaxyGames;

create table Proveedor(
	idProveedor integer primary key,
	nombre varchar(80) unique
);

create table Categoria(
	idCategoria integer primary key,
    categoria varchar(70) unique
);
create table productos(
	idProduct integer primary key,
    Nombre varchar(70),
    precio float(5),
    cantidad integer,
    Proveedor_id integer,
    Categoria_id integer,
    foreign key(Proveedor_id) references  Proveedor(idProveedor),
    foreign key(Categoria_id) references  Categoria(idCategoria)
    );
    
create table Empleados(
	idEmpleado integer primary key,
    nombre varchar(100),
    apePaterno varchar(100),
    apeMaterno varchar(100),
    puesto varchar(100),
    username varchar(50) unique,
    password varchar(50)
);
create table Ventas(
	idVenta integer primary key,
    idProducto integer,
    foreign key(idProducto) references Productos(idProduct)
);

insert into Empleados(idEmpleado, nombre,apePaterno, apeMaterno,puesto,username,password) values
(1,'Ramses','Camas','Najera','Gerente','Machiniram','123456'),
(2,'Brian','Flores','Aguilar','Cajero','Mar','123456');

insert into Proveedor(idProveedor, nombre) values
(1,'343 Industries'),
(2,'Pop Cap'),
(3,'Ubisoft'),
(4,'Bandai Namco'),
(5,'Mojang'),
(6,'Rockstar'),
(7,'id Software'),
(8,'Bethesda'),
(9,'Electronic Arts'),
(10,'CD-ProjectRed');

insert into Categoria(idCategoria,categoria) values
(1,'Accion'),
(2,'Aventura'),
(3,'Drama'),
(4,'FPS'),
(5,'Sandbox')
;

insert into productos(idProduct,Nombre,precio,cantidad,Proveedor_id,Categoria_id) values
(1,'Halo 5',900,100,1,4),
(2,'Minecraft',500,200,5,5),
(3,'Doom Eternal',1200,150,7,4);

select * from Empleados;