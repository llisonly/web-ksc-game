require(['tpl/test/test'], function(testTpl){
	var $target = $('#J_memberList'),
		data = {
			items: [
				{name: '张三'},
				{name: '李四'}
			]
		};

	init();

	function init(){		
		testJst();
	}

	function testJst(){		
		$target.html(testTpl(data));
	}	
	
});