-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2024 at 06:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techlogichub`
--

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `subject` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `startTime` varchar(5) NOT NULL,
  `endTime` varchar(5) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `title`, `content`, `subject`, `date`, `startTime`, `endTime`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:52', '2024-10-22 04:31:52'),
(2, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:53', '2024-10-22 04:31:53'),
(3, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:53', '2024-10-22 04:31:53'),
(4, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:53', '2024-10-22 04:31:53'),
(5, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:53', '2024-10-22 04:31:53'),
(6, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:54', '2024-10-22 04:31:54'),
(7, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:54', '2024-10-22 04:31:54'),
(8, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:54', '2024-10-22 04:31:54'),
(9, 'Actualizado', 'ana@gmail.com', '123456', '0000-00-00', '123', '123', 'asd', '2024-10-22 04:31:55', '2024-10-22 04:31:55');

-- --------------------------------------------------------

--
-- Table structure for table `inscripcions`
--

CREATE TABLE `inscripcions` (
  `id` int(11) NOT NULL,
  `cursoId` int(11) DEFAULT NULL,
  `alumnoId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inscripcions`
--

INSERT INTO `inscripcions` (`id`, `cursoId`, `alumnoId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2024-10-22 04:32:26', '2024-10-22 04:32:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:24', '2024-10-22 04:31:24'),
(2, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:28', '2024-10-22 04:31:28'),
(3, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:29', '2024-10-22 04:31:29'),
(4, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:29', '2024-10-22 04:31:29'),
(5, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:30', '2024-10-22 04:31:30'),
(6, 'Pruebaeditado', 'ana@gmail.com', '123456', 1, '2024-10-22 04:31:30', '2024-10-22 04:31:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inscripcions`
--
ALTER TABLE `inscripcions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cursoId` (`cursoId`),
  ADD KEY `alumnoId` (`alumnoId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `inscripcions`
--
ALTER TABLE `inscripcions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inscripcions`
--
ALTER TABLE `inscripcions`
  ADD CONSTRAINT `inscripcions_ibfk_1` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`),
  ADD CONSTRAINT `inscripcions_ibfk_2` FOREIGN KEY (`alumnoId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
