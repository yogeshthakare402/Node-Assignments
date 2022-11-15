const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	await fs.writeFile(`./${fileName}`, fileContent, (err)=>{
		if (err) console.log(err);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(`${fileName}`, (err,data) => {
		if(err) {console.log(err)}
		else {return data}
	}).then((data)=>console.log(data.toString()));
	//here it is promise so need to resolve it 1st and then callback
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	await fs.appendFile(`./${fileName}`, fileContent, function (err) {
		if (err) console.log(err);
	  });
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

	await fs.unlink(`./${fileName}`, function (err) {
		if (err) console.log(err);
		console.log('File deleted!');
	  });
}

// , myFileUpdater, myFileReader, myFileDeleter

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter}