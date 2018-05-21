export const HomeView = (req, res) => {
	return res.json({
		name: req.query['name'],
		greeting: req.query['greeting'],
	})
}
