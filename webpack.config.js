var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry : '../entry.js',
	output: {
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	resolve:{
		// extensions : ['', '.js', '.jsx']
	},
	module:{
		loaders:[
			{test:/\.js|jsx$/, loaders:['babel']}
		]
	},
	plugins: [
		//给输出的文件头部添加注释信息
		new webpack.BannerPlugin('This file is created by Caraxiong')
	]
}