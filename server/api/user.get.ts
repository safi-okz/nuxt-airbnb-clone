export default defineEventHandler((event) => {
    console.log('event dddddd ');
	return event.context.user;
});