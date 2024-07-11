import Hero from '@/components/Home/Hero';
import Background from '@/components/shared/Background';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

export default function GridBackgroundDemo() {
	return (
		<div>
			<Background />
			<NavBar />
			<Hero />
		</div>
	);
}
