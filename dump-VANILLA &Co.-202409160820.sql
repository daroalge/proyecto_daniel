--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-09-16 08:20:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "VANILLA &Co.";
--
-- TOC entry 4855 (class 1262 OID 16551)
-- Name: VANILLA &Co.; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "VANILLA &Co." WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';


ALTER DATABASE "VANILLA &Co." OWNER TO postgres;

\connect -reuse-previous=on "dbname='VANILLA &Co.'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 849 (class 1247 OID 16593)
-- Name: user_role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_role AS ENUM (
    'trabajador',
    'usuario',
    'administrador'
);


ALTER TYPE public.user_role OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16578)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    nombre_helado character varying(100) NOT NULL,
    descripcion text,
    precio numeric(10,0) NOT NULL,
    "tamaño" character varying(50) NOT NULL,
    disponibilidad boolean NOT NULL,
    imagen character varying
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16577)
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_product_id_seq OWNER TO postgres;

--
-- TOC entry 4857 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- TOC entry 216 (class 1259 OID 16569)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

 username character varying(100) NOT NULL,
   CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(100) NOT NULL,
    lastname character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    telefono bigint,
    password character varying(255) NOT NULL,
    rol character varying(20) DEFAULT 'usuario'::public.user_role
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16568)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4858 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4698 (class 2604 OID 16581)
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- TOC entry 4696 (class 2604 OID 16572)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4849 (class 0 OID 16578)
-- Dependencies: 218
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products VALUES (4, 'Milkshake', 'Disfruta de un intenso sabor, hecho con helado artesanal y los mejores ingredientes', 10000, 'Mediano', true, 'https://reytgooddesserts.com/wp-content/uploads/2023/11/img_0815-3.png');
INSERT INTO public.products VALUES (5, 'Brownie con Helado', 'El helado contrasta con la textura crujiente del brownie. ¡Una experiencia única!', 8500, 'Mediano', true, 'https://www.mimos.com.co/wp-content/uploads/2022/07/Copa-brownie.png');
INSERT INTO public.products VALUES (6, 'Macarron de Helado', 'Elegancia y sabor en un solo bocado. Nuestro macarrón con helado es el postre perfecto para cualquier ocasión especial', 3000, 'Pequeño', true, 'https://png.pngtree.com/png-clipart/20240206/original/pngtree-heap-of-sweet-macarons-cuisine-photo-png-image_14242407.png');
INSERT INTO public.products VALUES (1, 'Cono', 'Disfruta de tu helado favorito en un cono crujiente y fresco', 2500, 'Pequeño', true, 'https://www.mimos.com.co/wp-content/uploads/2022/07/Mimo-chocolate.png');
INSERT INTO public.products VALUES (8, 'Mini Conos', 'Nuestros mini conos: ¡el tamaño perfecto para la felicidad! Pequeños, pero llenos de sabor', 1500, 'Pequeño', true, 'https://www.mimos.com.co/wp-content/uploads/2022/07/Mimitos.png');
INSERT INTO public.products VALUES (7, 'Torta de Helado', 'Nuestra torta de helado: ¡la felicidad en cada porción! Cremosa, deliciosa y perfecta para compartir', 50000, 'Grande', true, 'https://www.icecreamcookieco.com/cdn/shop/products/Ferrero_1200x1200.png');
INSERT INTO public.products VALUES (2, 'Sundae', 'La combinación perfecta de helado cremoso, salsa dulce y una cereza jugosa', 7500, 'Mediano', true, 'https://www.mimos.com.co/wp-content/uploads/2022/07/Sundae-salsa.png');
INSERT INTO public.products VALUES (3, 'Paletas', 'Disfruta de la explosión de sabor de nuestras paletas, elaboradas con frutas naturales', 1000, 'Pequeño', true, 'https://www.mimos.com.co/wp-content/uploads/2022/07/Paletas.png');
INSERT INTO public.products VALUES (20, 'Brownie sin Helado', 'El helado contrasta con la textura crujiente del brownie.', 5503, 'pequeno', true, 'https://github.com/daroalge/proyecto_daniel/commit/e75c6733dd8b56421cd1189d2329b8b9bcd15e21#diff-53b');


--
-- TOC entry 4847 (class 0 OID 16569)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES (3, 'daniel', 'daniel', 'daniel', 'daniel@correo.com', 3001234567, '12345678', 'usuario');
INSERT INTO public.users VALUES (4, 'Martha', 'Martha', 'martha', 'martha@correo.com', 3001234567, '12345678', 'trabajador');
INSERT INTO public.users VALUES (2, 'dani', 'daniel', 'dani', 'daniel', 3001234567, '12345678', 'administrador');


--
-- TOC entry 4859 (class 0 OID 0)
-- Dependencies: 217
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 20, true);


--
-- TOC entry 4860 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 4702 (class 2606 OID 16585)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 4700 (class 2606 OID 16576)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2024-09-16 08:20:37

--
-- PostgreSQL database dump complete
--

