walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\\bS/g, "Th");
	v = v.replace(/\\bCe/g, "Th");
	v = v.replace(/\\bs/g, "th");
	v = v.replace(/\\bss/g, "th");
	v = v.replace(/\\bce/g, "th");
	v = v.replace(/\\b!/g, getExcitedKarrieism());
	v = v.replace(/\\b\.{3}/g, getSadKarrieism());
	v = v.replace(/\\bDo not/g, "Donut");
	v = v.replace(/\\bDo Not/g, "Donut");
	v = v.replace(/\\bdo not/g, "DONUT");

	textNode.nodeValue = v;
}


function getExcitedKarrieism(){
    var sayings = ["... OH MAN!", "... YUP!", "...yEEEEE~", "! -power poses-"];
    return sayings[Math.floor(Math.random() * sayings.length)];
}

function getSadKarrieism(){
    var sayings = ["... :cry:", "... :(", "hnghhhh", "... yeee..."];
    return sayings[Math.floor(Math.random() * sayings.length)];
}
