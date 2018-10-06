(function () {
    "use strict";

    kintone.events.on('app.record.index.show', function(event) {
		//window.alert(event.viewName);
		if (event.viewName === '出力用一覧（当月&出力済除外）' ) {
			// 増殖バグを防ぐ
			if (document.getElementById('out_csv_button') !== null) {
				return;
			}
			
			//　ボタン設置
			let outCsvButton = document.createElement('button');
			outCsvButton.id = 'out_csv_button';
			outCsvButton.innerHTML = 'CSV出力';
			
			// ボタンクリック時の処理
			outCsvButton.onclick = function() {
				let result = window.confirm('CSVを出力します');

				if (result) {
					let myHeaderSpace = kintone.app.getHeaderSpaceElement();

					// 文字列要素
					let myListHeaderDiv = document.createElement('div');
					//myListHeaderDiv.style.width = '100%';
					//myListHeaderDiv.style.height = '35px';
					//myListHeaderDiv.style.textAlign = 'center';
					//myListHeaderDiv.style.fontSize = '30px';
					//myListHeaderDiv.style.fontWeight = 'bold';
					//myListHeaderDiv.style.backgroundColor = '#ffd78c';
					myListHeaderDiv.innerHTML = 'CSVを出力しました';

					// メニューの下側の空白部分に文字列を表示
					myHeaderSpace.innerHTML = ''; // ← 増殖を防ぐため一旦明示的に空白をセット
					myHeaderSpace.appendChild(myListHeaderDiv);
				}
			};

			kintone.app.getHeaderMenuSpaceElement().appendChild(outCsvButton);
		}		
	});

    kintone.events.on('app.record.detail.show', function(event) {
        //window.alert('レコード表示イベント');
    });

    kintone.events.on('app.record.create.show', function(event) {
        //window.alert('レコード追加イベント');
    });

    kintone.events.on('app.record.edit.show', function(event) {
        //window.alert('レコード編集イベント');
    });

    kintone.events.on('app.report.show', function(event) {
        //window.alert('グラフ表示イベント');
    });

})();