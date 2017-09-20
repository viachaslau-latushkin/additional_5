module.exports = function check(str, bracketsConfig) {
	var brackets = bracketsConfig.map(function(name) {
		name = name.toString();
		if(name.match(/[0-9]/g) == null)
			return "\\" + name.replace(/,/g,"\\");
		else
			return name.replace(/,/g,"");
	});
	var len1 = str.length;
	var len2 = 0;
	while(str.length > 0){
		if(len1 != len2){
			len1 = len2;
			brackets.forEach(function(item) {
				var re = new RegExp(item,"g");
				str = str.replace(re,'');
			});
			len2 = str.length;
		}
		else
			return false;
	};
	return true;
}