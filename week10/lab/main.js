document.addEventListener('DOMContentLoaded', () => {
	const bgInput = document.getElementById('bgColor');
	const fontInput = document.getElementById('fontColor');
	const sizeSelect = document.getElementById('fontSize');
	const saveBtn = document.getElementById('saveBtn');
	const resetBtn = document.getElementById('resetBtn');

	const ITEM_KEY = 'pageDisplaySettings';

	const defaults = {
		bgColor: '#ffffff',
		fontColor: '#000000',
		fontSize: '16'
	};

	function applySettings(settings){
        const s = Object.assign({}, defaults, settings);
		document.body.style.background = s.bgColor;
		document.body.style.color = s.fontColor;
        document.body.style.fontSize = s.fontSize + 'px';

        if (bgInput) bgInput.value = s.bgColor;
		if (fontInput) fontInput.value = s.fontColor;
		if (sizeSelect) sizeSelect.value = s.fontSize;
	}

	function loadSettings(){
		try{
			const raw = localStorage.getItem(ITEM_KEY);
			if (!raw) return defaults;
			return JSON.parse(raw);
		}catch(e){
			console.warn('Failed to parse stored settings', e);
			return defaults;
		}
	}

	function saveSettings(settings){
		try{
			localStorage.setItem(ITEM_KEY, JSON.stringify(settings));
		}catch(e){
			console.warn('Failed to save settings', e);
		}
	}

	function resetSettings(){
		localStorage.removeItem(ITEM_KEY);
		applySettings(defaults);
	}

	const stored = loadSettings();
	applySettings(stored);

    saveBtn.addEventListener('click', () => {
        const settings = {
            bgColor: bgInput.value || defaults.bgColor,
            fontColor: fontInput.value || defaults.fontColor,
            fontSize: sizeSelect.value || defaults.fontSize
        };
        saveSettings(settings);
        applySettings(settings);
    });

    resetBtn.addEventListener('click', () => {
        resetSettings();
    });
});

