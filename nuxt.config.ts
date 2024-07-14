// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
		githubClientId: process.env.GITHUB_CLIENT_ID,
		githubClientSecret: process.env.GITHUB_CLIENT_SECRET
	},
	routeRules: {
		// Generated at build time for SEO purpose
		'/': { prerender: true },
		// Cached for 1 hour
		'/api/*': { cache: { maxAge: 60 * 60 } },
		// Redirection to avoid 404
		'/old-page': {
		  redirect: { to: '/new-page', statusCode: 302 }
		}
		// ...
	  }
})
