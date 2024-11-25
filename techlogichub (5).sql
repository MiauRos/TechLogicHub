-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 03:42 AM
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
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id_b` int(11) NOT NULL,
  `nom_tit` varchar(100) NOT NULL,
  `num` varchar(100) NOT NULL,
  `exp` date NOT NULL,
  `cvc` int(11) NOT NULL,
  `fecha_i` date NOT NULL,
  `fecha_f` date NOT NULL,
  `id_a` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id_b`, `nom_tit`, `num`, `exp`, `cvc`, `fecha_i`, `fecha_f`, `id_a`) VALUES
(1, 'Juan PerezEditado', '1234567890123456', '2025-12-31', 123, '2024-01-01', '2025-12-31', 1),
(3, 'Juan Perez', '1234567890123456', '2025-12-31', 123, '2024-01-01', '2025-12-31', 1),
(4, 'Juan Perez', '1234567890123456', '2025-12-31', 123, '2024-01-01', '2025-12-31', 1),
(5, 'Juan Perez', '1234567890123456', '2025-12-31', 123, '2024-01-01', '2025-12-31', 1),
(6, 'Juan Perez', '1234567890123456', '2025-12-31', 123, '2024-01-01', '2025-12-31', 1);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id_c` int(11) NOT NULL,
  `id_p` int(11) NOT NULL,
  `id_a` int(11) NOT NULL,
  `id_m` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `duracion` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id_c`, `id_p`, `id_a`, `id_m`, `fecha`, `hora`, `duracion`) VALUES
(5, 3, 2, 3, '2024-11-30', '10:00:00', 2.5),
(6, 2, 2, 3, '2024-11-30', '10:00:00', 2.5),
(7, 2, 2, 3, '2024-11-30', '10:00:00', 2.5),
(8, 2, 2, 3, '2024-11-30', '10:00:00', 2.5),
(9, 2, 2, 3, '2024-11-30', '10:00:00', 2.5);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id_a` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ape_p` varchar(100) NOT NULL,
  `ape_m` varchar(100) NOT NULL,
  `mat` varchar(100) NOT NULL,
  `is_premium` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id_a`, `id`, `name`, `ape_p`, `ape_m`, `mat`, `is_premium`) VALUES
(1, 3, 'Juan', 'Pérez', 'Gómez', 'ABC123', 1),
(2, 3, 'JuaneEditadooo', 'Pérez', 'Gómez', 'ABC123', 1),
(3, 3, 'Juan', 'Pérez', 'Gómez', 'ABC123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id_m` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `descr` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id_m`, `name`, `descr`) VALUES
(1, 'Matematicas', 'A subject focusing on algebra, geometry, and calculus.'),
(2, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.'),
(3, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.'),
(4, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.'),
(5, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.'),
(6, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.'),
(8, 'Mathematics', 'A subject focusing on algebra, geometry, and calculus.');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id_p` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ape_p` varchar(100) NOT NULL,
  `ape_m` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id_p`, `id`, `name`, `ape_p`, `ape_m`) VALUES
(2, 4, 'Juan2', 'Pérez', 'Gómez'),
(3, 4, 'Juan2', 'Pérez', 'Gómez'),
(4, 4, 'Juan2', 'Pérez', 'Gómez'),
(5, 4, 'Juan2', 'Pérez', 'Gómez'),
(6, 4, 'Juan2', 'Pérez', 'Gómez'),
(7, 4, 'Juan2', 'Pérez', 'Gómez'),
(8, 4, 'Juan2', 'Pérez', 'Gómez'),
(9, 4, 'Juan2', 'Pérez', 'Gómez'),
(10, 4, 'Juan2', 'Pérez', 'Gómez'),
(11, 4, 'Juan2', 'Pérez', 'Gómez'),
(12, 4, 'Juan2', 'Pérez', 'Gómez');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id_t` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `type`) VALUES
(3, 'usuario@example.com', 'password12345', 1),
(4, 'usuario@example.com', 'password12345', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id_b`),
  ADD KEY `id_a` (`id_a`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id_c`),
  ADD KEY `id_p` (`id_p`,`id_a`,`id_m`),
  ADD KEY `id_a` (`id_a`),
  ADD KEY `id_m` (`id_m`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id_a`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id_m`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id_p`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_t`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id_b` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id_a` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id_t` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bank`
--
ALTER TABLE `bank`
  ADD CONSTRAINT `bank_ibfk_1` FOREIGN KEY (`id_a`) REFERENCES `student` (`id_a`);

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`id_a`) REFERENCES `student` (`id_a`),
  ADD CONSTRAINT `course_ibfk_2` FOREIGN KEY (`id_p`) REFERENCES `teacher` (`id_p`),
  ADD CONSTRAINT `course_ibfk_3` FOREIGN KEY (`id_m`) REFERENCES `subject` (`id_m`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`type`) REFERENCES `type` (`id_t`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
