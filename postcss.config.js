module.exports = {
	plugins: [
		//自动添加css前缀
        require('autoprefixer'),
        require("postcss-plugin-px2rem")({'remUnit': 192,'baseDpr':2})
	]
};