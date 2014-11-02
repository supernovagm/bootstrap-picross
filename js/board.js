

function onLoad() {

	var board = new Board();
}

var level1 = [10, 10,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function FileHelper()
{}
{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, true);
        request.send(false);
        var returnValue = request.responseText;

        return returnValue;
    }
}

function Board() {
	this.body = $("body");	

	var lvl_x = level1[0];
	var lvl_y = level1[1];

	for(var i = 0; i < lvl_x; i++)
	{
		this.body.append("<div class=\"row\">");
		for(var j = 0; j < lvl_y; j++)
		{
			this.body.append("<div class=\"case col-md-1 col-xs-1 col-sm-1 col-lg-1 case-" + i + "-" + j + " check-type-" + level1[2+i*lvl_x+j] + "\"></div>");
		}
		this.body.append("</div>");
	}


} 