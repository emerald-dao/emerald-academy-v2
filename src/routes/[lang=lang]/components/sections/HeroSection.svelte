<script type="ts">
	import { LL } from '$i18n/i18n-svelte';
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { onMount, onDestroy } from 'svelte';
	import CommunityAvatar from '../atoms/CommunityAvatar.svelte';

	let vidRef: HTMLVideoElement;

	const handlePlay = () => {
		vidRef.style.display = 'block';

		vidRef.requestFullscreen();
		vidRef.play();
	};

	const handleEnd = () => {
		vidRef.style.display = 'none';

		document.exitFullscreen();
	};

	const handleExitFullscreen = () => {
		if (!document.fullscreenElement) {
			vidRef.style.display = 'none';
			vidRef.pause();
		}
	};

	onMount(() => {
		document.addEventListener('fullscreenchange', handleExitFullscreen);
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('fullscreenchange', handleExitFullscreen);
		}
	});
</script>

<video width="0" height="0" controls bind:this={vidRef} style="display: none;" on:ended={handleEnd}>
	<source src={'http://media.w3.org/2010/05/sintel/trailer.ogv'} type="video/mp4" />
	<track kind="captions" />
</video>
<section>
	<div class="container">
		<div>
			<h1 class="display-small">
				{$LL.MAIN_HEADING_1} <br /><span>{$LL.MAIN_HEADING_2}</span>
			</h1>
		</div>
		<div class="circles-wrapper center">
			<div class="column-4 align-center" style="position: absolute;">
				<h2 class="w-bold">Welcome</h2>
				<div style="cursor: pointer; z-index: 10;" on:click={handlePlay} on:keydown>
					<Icon
						icon="material-symbols:play-circle-rounded"
						color="var(--clr-heading-inverse)"
						width="50px"
					/>
				</div>
			</div>
			<div class="blur primary move-blur-1" />
			<div class="blur tertiary move-blur-2" />
			<div class="circle large center">
				<div class="avatar-wrapper avatar3">
					<CommunityAvatar imageSrc="/avatars/jacob.jpeg" icon="emojione:flag-for-united-states" />
				</div>
				<div class="avatar-wrapper avatar2">
					<CommunityAvatar imageSrc="/avatars/dene.jpeg" icon="emojione:flag-for-south-africa" />
				</div>
				<div class="avatar-wrapper avatar1">
					<CommunityAvatar imageSrc="/avatars/andrea.jpeg" icon="emojione:flag-for-italy" />
				</div>
				<div class="avatar-wrapper avatar4">
					<CommunityAvatar imageSrc="/avatars/lanford.png" icon="emojione:flag-for-china" />
				</div>
				<div class="avatar-wrapper avatar5">
					<CommunityAvatar imageSrc="/avatars/mateo.jpeg" icon="emojione:flag-for-uruguay" />
				</div>
				<div class="avatar-wrapper avatar6">
					<CommunityAvatar
						imageSrc="/avatars/bam.jpeg"
						icon="emojione:flag-for-hong-kong-sar-china"
					/>
				</div>
				<div class="avatar-wrapper avatar7">
					<CommunityAvatar imageSrc="/avatars/bz.png" icon="emojione:flag-for-denmark" />
				</div>
			</div>
			<div class="circle medium center" />
			<div class="circle small center" />
		</div>
	</div>
</section>

<style type="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-10);
		justify-content: center;
		text-align: center;
		padding: var(--space-6);

		h2 {
			color: var(--clr-heading-inverse);
		}

		.blur {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			z-index: -1;
			filter: blur(60px);
			position: absolute;
			opacity: 0.8;
		}

		.circles-wrapper {
			position: relative;
			top: -100px;
			margin-bottom: -150px;
			height: 500px;
			.avatar-wrapper {
				position: absolute;
			}

			.avatar-wrapper.avatar1 {
				top: 40%;
				left: 20%;
				animation-name: avatar1;
				animation-duration: 7s;
				animation-delay: 2s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}
			.avatar-wrapper.avatar2 {
				top: 60%;
				right: 20%;
				animation-name: avatar2;
				animation-duration: 7s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}
			.avatar-wrapper.avatar3 {
				top: 30%;
				right: 13%;
				animation-name: avatar3;
				animation-delay: 4s;
				animation-duration: 7s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			.avatar-wrapper.avatar4 {
				top: 60%;
				left: 8%;
				animation-name: avatar4;
				animation-duration: 7s;
				animation-delay: 1s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			.avatar-wrapper.avatar5 {
				top: 30%;
				left: 0;
				animation-name: avatar5;
				animation-duration: 7s;
				animation-delay: 4s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			.avatar-wrapper.avatar6 {
				bottom: 20%;
				right: 6%;
				animation-name: avatar6;
				animation-duration: 7s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			.avatar-wrapper.avatar7 {
				bottom: 20%;
				right: 50%;
				animation-name: avatar7;
				animation-duration: 7s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			.circle {
				position: absolute;
				border-width: 1px;
				border-style: solid;
				border-color: rgba(109, 109, 109, 0.05);
				border-radius: 50%;
				z-index: -1;
			}
			.circle.small {
				width: 400px;
				height: 400px;
			}

			.circle.medium {
				width: 550px;
				height: 550px;
			}
			.circle.large {
				width: 700px;
				height: 700px;
			}
		}

		.blur.primary {
			background-color: var(--clr-primary-main);
			right: 34%;
			animation-name: moveBlur1;
			animation-duration: 6s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
		}
		.blur.tertiary {
			background-color: var(--clr-tertiary-main);
			left: 33%;
			animation-name: moveBlur2;
			animation-duration: 8s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
		}

		h1 {
			font-size: var(--font-size-8);

			span {
				color: var(--clr-primary-main);
				font-size: var(--font-size-9);
				--font-weight: var(--font-weight-bold);
			}
		}
	}

	@keyframes moveBlur1 {
		0% {
			transform: translateX(0px) translateY(0px) scale(1);
		}
		30% {
			transform: translateX(40px) translateY(-20px) scale(1.1);
		}
		60% {
			transform: translateX(-15px) translateY(5px) scale(0.8);
		}
		100% {
			transform: translateX(0px) translateY(0px) scale(1);
		}
	}

	@keyframes moveBlur2 {
		0% {
			transform: translateX(0px) translateY(0px) scale(1);
		}
		30% {
			transform: translateX(-10px) translateY(50px) scale(0.8);
		}
		60% {
			transform: translateX(30px) translateY(-15px) scale(1.1);
		}
		100% {
			transform: translateX(0px) translateY(0px) scale(1);
		}
	}

	@keyframes avatar1 {
		0% {
			transform: translate(0px) scale(1);
		}
		30% {
			transform: translate(4px) scale(1.1);
		}
		100% {
			transform: translate(0px) scale(1);
		}
	}

	@keyframes avatar2 {
		0% {
			transform: translate(0px) scale(1);
		}
		50% {
			transform: translate(-13px) scale(1.2);
		}
		100% {
			transform: translate(0px) scale(1);
		}
	}

	@keyframes avatar3 {
		0% {
			transform: translateY(0px) scale(1);
		}
		70% {
			transform: translateY(-9px) scale(1.1);
		}
		100% {
			transform: translateY(0px) scale(1);
		}
	}
	@keyframes avatar4 {
		0% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
		50% {
			transform: translateY(12px) translateX(10px) scale(1.1);
		}
		100% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
	}
	@keyframes avatar5 {
		0% {
			transform: translateY(0px) scale(1);
		}
		40% {
			transform: translateY(-9px) scale(1.1);
		}
		100% {
			transform: translateY(0px) scale(1);
		}
	}
	@keyframes avatar6 {
		0% {
			transform: translateY(0px) scale(1);
		}
		40% {
			transform: translateY(-9px) scale(1.2);
		}
		80% {
			transform: translateY(3px) scale(0.9);
		}
		100% {
			transform: translateY(0px) scale(1);
		}
	}
	@keyframes avatar7 {
		0% {
			transform: translateY(0px) scale(1);
		}
		40% {
			transform: translateY(-4px) scale(0.9);
		}
		80% {
			transform: translateY(8px) scale(1.1);
		}
		100% {
			transform: translateY(0px) scale(1);
		}
	}
</style>
