<script type="ts">
	import '../app.postcss';
	import '$lib/styles/app.scss';
	import { Header, Footer } from '@emerald-dao/component-library';
	import { navElements, emeraldTools, socialMedia } from '$lib/config/navigation';
	import { theme } from '$stores/ThemeStore';
	import { logIn, unauthenticate } from '$flow/actions';
	import { user } from '$stores/FlowStore';
	import { getFindProfile } from '$flow/utils';
</script>

<Header themeStore={theme} {logIn} {unauthenticate} {getFindProfile} {navElements} user={$user} />
<main>
	<slot />
</main>
<Footer {navElements} {emeraldTools} socials={socialMedia} />
