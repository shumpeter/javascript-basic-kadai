// 体重と身長を変数に代入
const weight = 68; // 体重（kg）
const height = 1.7; // 身長（m）

// BMIを計算する関数を定義
const calculateBmi = function(weight, height) {
    return weight / (height * height);
};

// 関数を使ってBMIを計算し、変数に代入
const bmi = calculateBmi(weight, height);

// 結果をコンソールに出力
console.log('BMI:', bmi);