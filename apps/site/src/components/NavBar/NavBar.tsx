"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import ZotHacksLogo from "@/assets/icons/zothacks-logo.png";

import styles from "./NavBar.module.scss";

export default function NavBar() {
	const activeRoute = usePathname();
	const controls = useAnimationControls();

	const router = useRouter();

	const handleClick = async (e: any, route: string) => {
		e.preventDefault();
		await controls.start("visible");
		router.push(route);
		await controls.start("exit");
	};

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div>
					{/* page transition animation */}
					<motion.div
						className={styles.slideIn}
						variants={{
							initial: { scaleY: 0 },
							visible: { scaleY: 1 },
							exit: { scaleY: 0 },
						}}
						initial="initial"
						animate={controls}
						exit="exit"
						transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
					/>
					{/* initial page animation */}
					<motion.div
						className={styles.slideIn}
						variants={{
							initial: { scaleY: 1 },
							animate: { scaleY: 0 },
							exit: { scaleY: 0 },
						}}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
					/>
				</motion.div>
			</AnimatePresence>
			<nav className={styles.nav}>
				<Navbar expand="md" className={`bg-body-tertiary ${styles.navbar}`}>
					<Container fluid>
						<Navbar.Brand />
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto text-center">
								<Link
									href="/"
									className={
										activeRoute === "/" ? styles.homeActive : styles.notActive
									}
									onClick={(e) => {
										handleClick(e, "/");
									}}
								>
									Home
								</Link>
								<Link
									href="/resources"
									className={
										activeRoute === "/resources"
											? styles.resourcesActive
											: styles.notActive
									}
									onClick={(e) => {
										handleClick(e, "/resources");
									}}
								>
									Resources
								</Link>
								<Link
									href="/schedule"
									className={
										activeRoute === "/schedule"
											? styles.scheduleActive
											: styles.notActive
									}
									onClick={(e) => {
										handleClick(e, "/schedule");
									}}
								>
									Schedule
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Link href="/">
					<div className={styles.logo}>
						<Image src={ZotHacksLogo.src} alt="ZotHacks Logo" fill />
					</div>
				</Link>
			</nav>
		</>

	);
}
