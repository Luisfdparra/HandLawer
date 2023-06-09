USE [master]
GO
/****** Object:  Database [HandLawyer]    Script Date: 26/05/2023 20:41:52 ******/
CREATE DATABASE [HandLawyer]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'HandLawyer', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\HandLawyer.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'HandLawyer_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\HandLawyer_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [HandLawyer] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HandLawyer].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HandLawyer] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HandLawyer] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HandLawyer] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HandLawyer] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HandLawyer] SET ARITHABORT OFF 
GO
ALTER DATABASE [HandLawyer] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [HandLawyer] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HandLawyer] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HandLawyer] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HandLawyer] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HandLawyer] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HandLawyer] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HandLawyer] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HandLawyer] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HandLawyer] SET  DISABLE_BROKER 
GO
ALTER DATABASE [HandLawyer] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HandLawyer] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HandLawyer] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HandLawyer] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HandLawyer] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HandLawyer] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HandLawyer] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HandLawyer] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [HandLawyer] SET  MULTI_USER 
GO
ALTER DATABASE [HandLawyer] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HandLawyer] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HandLawyer] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HandLawyer] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HandLawyer] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [HandLawyer] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [HandLawyer] SET QUERY_STORE = OFF
GO
USE [HandLawyer]
GO
/****** Object:  Table [dbo].[indemnizacion]    Script Date: 26/05/2023 20:41:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[indemnizacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_cliente] [int] NULL,
	[nombres_cliente] [varchar](50) NULL,
	[telefono_cliente] [varchar](20) NULL,
	[direccion_cliente] [varchar](20) NULL,
	[tipo] [varchar](20) NULL,
	[valor_renta] [int] NULL,
	[meses] [int] NULL,
	[interes] [decimal](18, 0) NULL,
	[valorTotal] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 26/05/2023 20:41:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[id] [int] NOT NULL,
	[nombre] [varchar](20) NULL,
	[apellido] [varchar](20) NULL,
	[telefono] [varchar](20) NULL,
	[direccion] [varchar](50) NULL,
	[cargo] [varchar](20) NULL,
	[usuario] [varchar](20) NULL,
	[contraseña] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [HandLawyer] SET  READ_WRITE 
GO
