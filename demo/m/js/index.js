/**
 * Created by Administrator on 2016/6/30.
 */


;$(function () {

	console.log('debug');

	//document.addEventListener('touchmove', function(event) {
	//	if($(".mask").is(":visible")){
	//		event.preventDefault();
	//	}
	//});

	function cretaMask(callback) {
		window.$mask = window.$mask || $('<div class="mask" style="position: absolute;top:0;left: 0;right: 0;bottom: 0;z-index:9;min-width: 100%;background-color: rgb(0, 0, 0);opacity: .8;"></div>');
		$mask.css({"height": $(document).height()});
		$('body').append($mask);
		$mask.on('click', function () {
			hideWinFrame();
			if (callback && typeof callback === 'function') {
				callback();
			}
		});
		$mask.fadeIn();
	}

//隐藏窗口
	function hideWinFrame() {
		$mask.fadeOut();
		$('.j-win').fadeOut();
	}

	function showWinFrame(type) {
		cretaMask();
		$(type).show();
	}

//关闭窗口
	$('.J_close_btn').on('click', function () {
		$mask.fadeOut(function () {
			$(this).remove()
		});
		$('.j-win').fadeOut();
	});


	//$('.button__rotate-get').on('click',function(){
	//    showWinFrame('.win__share');
	//  return false;
	//});
	/*

	 $('.button__rotate-tao,.button__rotate-get,.j_get_btn').on('click',function(){
	 showWinFrame('.win__code');
	 return false;
	 });

	 $('.button__rotate-end').on('click',function(){
	 showWinFrame('.win__end');
	 return false;
	 });
	 */


	//返回顶部
	/*$(".j_toTop").on('click', function () {
	 $('html,body').animate({ "scrollTop": 0 }, 220);
	 $(this).hide();
	 });

	 $(window).scroll(function () {
	 var scrolls = $(this).scrollTop();
	 if (scrolls > 100) {
	 console.log(scrolls);
	 $(".j_toTop").show();
	 } else {
	 $(".j_toTop").hide();
	 }

	 });*/

	//随机函数
	function getRandomIndex(_array) {
		return _array.length ? Math.floor(Math.random() * _array.length) : -1;
	}

	var randomNameArray = ['沙县旅馆团', '宿舍旷课军团', '光棍和尚社'];

	var userName; //用户名

	//b1======

	//随机获取名字
	function randomUserName() {
		var _random = getRandomIndex(randomNameArray);
		userName = randomNameArray[_random];
		$('.search__input').val(userName);
		console.log('userName:', userName);
	}

	randomUserName();


	function len(s) {
		s = String(s);
		return s.length + (s.match(/[^\x00-\xff]/g) || "").length;
	}

	function limit(obj, limit) {
		var val = obj.value;
		if (len(val) > limit) {
			val = val.substring(0, limit);
			while (len(val) > limit) {
				val = val.substring(0, val.length - 1);
			}

			obj.value = val;
		}
	}

	//获取输入文本框长度
	function getStringLength(str, maxstrlen) {
		var myLen = 0;
		var i = 0;
		for (; (i < maxstrlen); i++) {
			console.log(i);
			console.log(str.charCodeAt(i));
			if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
				myLen++;
			} else {
				myLen += 2;
			}
		}
		console.log(myLen);
		return myLen;
	}

	$('.video-btn').click(function (e) {
		$('.video-rotate').addClass('ani-paused');
		$('body').css('overflow', 'hidden');
		// $('.mask, .video').show();
		cretaMask(function () {
			$('#video').empty();
			$('.video-rotate').removeClass('ani-paused');
		});
		$('.video').show();
		//showWinFrame('.video');
		createVideo({
			id: "video",
			autoplay: true,
			multiple: {
				typeid: this.getAttribute("typeid"),
				sid: this.getAttribute("sid"),
				pic: this.getAttribute("pic")
			}
		});
	});

	$('.video-close-btn').click(function () {
		$mask.fadeOut(function () {
			$(this).remove()
		});
		$('.j-win').fadeOut();
		$('.video-rotate').removeClass('ani-paused');
		$('body').css('overflow', 'visible');
		//$('.mask, .video').hide();
		$('#video').empty();
	});

	//文本框
	$('.search__input').on('keyup', function (e) {
		//console.log(e.key);
		limit(this, 16);
	});

	//冒险按钮
	$('.search__submit').on('click', function () {
		userName = $.trim($('.search__input').val());

		if (!userName) {
			$('.autoText').html('请输入完整团队名称!');
			showWinFrame('.auto-win');
		} else {
			//next page
			unlock();
			toNextPage();
		}

		return false;
	});


	//b1======

	//b2========
	//任务
	$('.b2-bt1').on('click', function () {
		$(this).removeClass('cur');
		hideTabWin();
		showWinFrame('.ta-task-win');
		return false;
	});

	//秘境
	$('.b2-bt2').on('click', function () {
		$(this).removeClass('cur');
		unlock();
		toNextPage();
		return false;
	});


	//b2========


	//b3======

	setTimeout(function () {
		slider_btn = new touchSliding('slider', {speed: 600, timeout: 3000000, mouseWheel: !1});
		console.log('初始化p3');
	}, 2000);


	$('.b3-video-btn').on('click', function () {
		$(this).fadeOut();
		createVideo({
			id: "b3_video",
			autoplay: false,
			multiple: {
				typeid: this.getAttribute("typeid"),
				sid: this.getAttribute("sid"),
				pic: this.getAttribute("pic")
			}
		});
		return false;
	});


	//-----任务挑战
	$('.answer-list').on('click', 'a', function () {
		$(this).addClass('cur').siblings().removeClass('cur');
		var value = this.getAttribute("data-answer");
		if (value === 'b') {
			$('.answer-box').hide();
			$('.part-box').css({"visibility": "visible"}).attr('data-state', 'show');
		}
		return false;
	});


	$('.part-box').on('click', function () {
		$('.b3-userName')[0].innerHTML = '“' + userName + '”';
		showWinFrame('.b3-win');
		return false;
	});

	//next to page
	$('.b3-win-btn').on('click', function () {
		hideWinFrame();
		unlock();
		toNextPage();
		return false;
	});

	//b3======

	////////////---------------------b2


	var index = 0;


	function showTabWin() {
		$('.ta-text').attr('data-state', 'show');
	}

	function hideTabWin() {
		$('.ta-text').attr('data-state', 'hide');
	}

	//上一个
	$('.ta-prev').on('click', function () {
		index--;
		if (index === -1) {
			index = 5;
		}
		tabSwitch(index);
		if (index) {
			tabSwitch2(index - 1);
		} else {
			taList.removeClass('cur')
		}
		return false;
	});


	//下一个
	$('.ta-next').on('click', function () {
		index++;
		if (index === 6) {
			index = 0;
		}
		tabSwitch(index);
		if (index) {
			tabSwitch2(index - 1);
		} else {
			taList.removeClass('cur')
		}
		//console.log('切换--索引:   ',index);
		return false;
	});

	//塔点击
	$('.ta').on('click', 'li', function () {
		var $this = $(this);
		var _index = $this.index();


		_index++;
		index = _index;
		console.log(_index);

		if (index !== 1) {
			console.log('tab');
			tabSwitch(_index);
			showTabWin();
		}

		if (_index) {
			tabSwitch2(_index - 1);
		} else {
			taList.removeClass('cur')
		}
		//console.log('点击--索引:   ',_index);
		return false;
	});


	//切换图片
	var taListImg = $('.text-img');
	//塔
	var taList = $('.ta').find('li');

	function tabSwitch(index) {
		taListImg.eq(index).fadeIn().siblings().fadeOut();
	}

	function tabSwitch2(index) {
		taList.eq(index).addClass('cur').siblings().removeClass('cur');
	}


	$('.ta-bar').on('click', 'a', function () {
		var _type = this.getAttribute("data-type");
		var openWin = !0;
		var _winString = '';
		switch (_type) {
			case 'mx': //冒险
				_winString = '.ta-' + 'mx' + '-win';
				$('.b2-userName')[0].innerHTML = '“' + userName + '”';
				//hideTabWin();
				break;
			case 'tz': //挑战
				this.className = 'ta-btn';
				openWin = !1;
				hideTabWin();
				unlock();
				toNextPage();
				//_winString = '.ta-' + 'mx' + '-win';
				break;
			case 'ts':  //天神
				_winString = '.ta-' + 'ts' + '-win';
				//hideTabWin();
				break;
			case 'yx':  //英雄
				_winString = '.ta-' + 'yx' + '-win';
				//hideTabWin();
				break;
			case 'gh':  //公会
				openWin = !1;
				index = 1;
				tabSwitch(index);
				$('.ta').find('.cur').removeClass('cur');
				showTabWin();
				//_winString = '.ta-' + 'gh' + '-win';
				break;
			case 'bjx':  //补给箱
				openWin = !1;
				index = 0;
				tabSwitch(index);
				$('.ta').find('.cur').removeClass('cur');
				showTabWin();
				//_winString = '.ta-' + 'bjx' + '-win';
				break;
			default:
				break;
		}
		if (openWin) {
			hideTabWin();
			showWinFrame(_winString);
		}

		return false;
	});


	//------------b4
	//---对话流程

	$('.j-step1-btn').on('click', function () {
		console.log('click1');
		$(this).hide();
		$('.j-step1-msg').hide();


		//显示第二步对话
		$('.j-step2-player-dialog').show();
		$('.j-step2-msg').show();
		$('.j-step2-btn').show();


		return false;
	});

	$('.j-step2-btn').on('click', function () {
		$(this).hide();
		$('.j-step2-msg').hide();
		$('.j-step2-player-dialog').hide();

		$('.j-step3-npc-dialog').show();
		$('.j-step3-msg').show();
		$('.j-step3-btn').show();
		return false;
	});

	$('.j-step3-btn').on('click', function () {
		$(this).hide();
		$('.j-step3-npc-dialog').hide();
		$('.j-step3-msg').hide();

		$('.j-step3-player-dialog').show();
		//$('.j-step2-msg').show();
		$('.j-step4-btn').show();

		setTimeout(function () {
			$('.dialos').hide();
			//$('.j-step2-msg').hide();
			//$('.j-step4-btn').hide();
			$('.b4-box-bg').show();
			$('.b4-box').show();
		}, 3000);

		return false;
	});


	//------------------------选技能
	var answerArray = [];     // 记录答案
	var taskStep = 0;         // 任务完成度
	var $rotes = $('.rote');  // 中间人物
	//返回已经完成任务度
	function getTaskProgress() {
		return $('.task-progress').find('.cur').length;
	}

	//返回查询答案类型的总个数
	function checkAnswerLength(typeString) {
		return $('.skill-box').find('[data-group="' + typeString + '"]').length;
	}

	//返回正确答案数组
	function getAnswerArray(typeString) {
		var _temp = [];
		$('.skill-box').find('[data-group="' + typeString + '"]').each(function () {
			_temp.push(this.getAttribute('data-group'))
		});
		return _temp.toString();
	}


	//重置状态
	function resetSelectIco() {
		answerArray = [];
		$('.skill').attr('data-state', '0');
	}

	//p2介绍面板
	$('.up-down-btn').on('click', function () {
		var _state = $('.ta-text').attr('data-state');
		if (_state === 'show') {
			$('.ta-text').attr('data-state', 'hide');
		} else {
			$('.ta-text').attr('data-state', 'show');
		}
		return false;
	});

	//秒速面板
	$('.task-btn').on('click', function () {
		var _state = $('.text-des').attr('data-state');
		if (_state === 'show') {
			$('.text-des').attr('data-state', 'hide');
		} else {
			$('.text-des').attr('data-state', 'show');
		}
		return false;
	});

	$('.skill-box').on('click', 'a', function () {
		var _state;// = this.getAttribute("data-state");   //点击状态
		var _answerValue;// = this.getAttribute("data-group");   // 任务a,b,c 的数组答案
		//console.log(this, _state);

		taskStep = getTaskProgress();
		console.log('taskStep:', taskStep);


		if (taskStep > 2) {
			console.log('已经完成任务');
		} else {

			_state = this.getAttribute("data-state");   //点击状态
			_answerValue = this.getAttribute("data-group");   // 任务a,b,c 的数组答案
			//console.log(this, _state);


			if (_state === "0" || typeof _state === 'undefined' || _state === null) {
				//push
				this.setAttribute("data-state", "1");
				if (_answerValue) {
					answerArray.push(_answerValue)
				}

			} else if (_state === '1') {
				//pop
				this.setAttribute("data-state", "0");
				if (_answerValue) {
					for (var i = 0, l = answerArray.length; i < l; i++) {
						//(function (i) {
						console.log('answerArray[i]:', i, answerArray[i]);
						if (answerArray[i] === _answerValue) {
							answerArray.splice(i, 1);
							break;
						}
						//})(i)
					}
					console.log('answerArray:', answerArray);
					//answerArray.pop(_answerValue)
				}
			}

			console.log('answerArray:', answerArray.toString());


			switch (taskStep) {
				case 0:
					console.log('all:', getAnswerArray('a'));
					if (answerArray.toString() === getAnswerArray('a')) {
						$('.task-progress').children().eq(0).addClass('cur');
						resetSelectIco();
						$rotes.eq(0).hide();
						$rotes.eq(1).css({'visibility': 'visible'});
						$('.select-tips').css({'visibility': 'hidden'});
					} else {
						if (answerArray.length >= 3) {
							$('.select-tips').css({'visibility': 'visible'});
						} else {
							$('.select-tips').css({'visibility': 'hidden'});
						}

					}
					//
					break;
				case 1:
					console.log('all:', getAnswerArray('b'));
					if (answerArray.toString() === getAnswerArray('b')) {
						$('.task-progress').children().eq(1).addClass('cur');
						resetSelectIco();
						$rotes.eq(1).hide();
						$rotes.eq(2).css({'visibility': 'visible'});
						$('.select-tips').css({'visibility': 'hidden'});
					} else {
						if (answerArray.length >= 3) {
							$('.select-tips').css({'visibility': 'visible'});
						} else {
							$('.select-tips').css({'visibility': 'hidden'});
						}
					}
					//
					break;
				case 2:
					console.log('all:', getAnswerArray('c'));
					if (answerArray.toString() === getAnswerArray('c')) {
						$('.task-progress').children().eq(2).addClass('cur');
						resetSelectIco();
						//设置用户名
						$('.j-userName')[0].innerHTML = '“' + userName + '”';
						setJob();
						showWinFrame('.testEnd-win');

						//显示结果按钮
						$('.j-result-btn').show();
						$('.select-tips').css({'visibility': 'hidden'});
					} else {
						if (answerArray.length >= 3) {
							$('.select-tips').css({'visibility': 'visible'});
						} else {
							$('.select-tips').css({'visibility': 'hidden'});
						}
					}
					//
					break;
				default:
					console.log('out');
					break;
			}


		}


		//check
		console.log(answerArray);


		//if(answerArray.length){}


		return false;
	});

	//$('.j-userName')[0].innerHTML = '“' + userName + '”';
	//setJob();
	//showWinFrame('.testEnd-win');

	//---------查看结果
	$('.j-result-btn').on('click', function () {

		showWinFrame('.testEnd-win');
		return false;
	});


	//设置随机职业结果
	function setJob() {
		var _random = Math.floor(Math.random() * 5); //获取 0 ~ 5 随机数
		$('.jobs').hide().eq(_random).show();
	}

	//再玩一次
	$('.play-again-btn').on('click', function () {
		console.log('再玩一次');
		return false;
	});

	//分享按钮
	$('.share-code-btn').on('click', function () {
		$('.share-page').show();
		return false;
	});


	$('.share-page').on('click', function () {
		$(this).hide();
		return false;
	});


});

