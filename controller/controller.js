const questionSchema = require("../models/questionSchema");
const resultSchema = require("../models/resultSchema");
// endpoint Questions

async function getQuestions(req, res) {
  try {
    const q = await questionSchema.find();
    res.json(q);
  } catch (error) {
    res.json(error);
  }
}
async function postQuestions(req, res) {
  // انشاء البيانا دفعة واحده
  // try {
  //   await questionSchema.insertMany({
  //     questions: database().questions,
  //   });
  //   res.json({ mas: "insert seccessfuly .." });
  // } catch (error) {
  //   res.json({ error });
  // }

  // انشاء ييانات على عده تفعات
  try {
    const questions = req.body;

    // تحقق من أن البيانات موجودة
    // if (!username || !result) throw new Error("Data not provided");

    console.log(questions);

    // استخدام await بدلاً من callback
    await questionSchema.findByIdAndUpdate(
      "66ccd42dbe223dd35bda8566",
      { $push: { questions: questions } }, // إضافة عنصر جديد إلى المصفوفة items
      { new: true }
    );

    // إرسال استجابة بنجاح العملية
    res.json({ message: "Result created successfully" });
  } catch (error) {
    // معالجة الأخطاء وإرسال استجابة بالخطأ
    res
      .status(500)
      .json({ error: error.message, message: "Failed to create result" });
  }
}
async function deleteQuestions(req, res) {
  try {
    await questionSchema.deleteMany();
    res.json({ mas: "questions delete successfully...." });
  } catch (error) {
    res.json({ error });
  }
}

// endpoint result
async function getResult(req, res) {
  try {
    const r = await resultSchema.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
async function postResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;

    // تحقق من أن البيانات موجودة
    if (!username || !result) throw new Error("Data not provided");

    console.log({ username, result, attempts, points, achived });

    // استخدام await بدلاً من callback
    await resultSchema.create({ username, result, attempts, points, achived });

    // إرسال استجابة بنجاح العملية
    res.json({ message: "Result created successfully" });
  } catch (error) {
    // معالجة الأخطاء وإرسال استجابة بالخطأ
    res
      .status(500)
      .json({ error: error.message, message: "Failed to create result" });
  }
}

async function deleteResult(req, res) {
  try {
    await resultSchema.deleteMany();
    res.json({ mas: "result delete successfully...." });
  } catch (error) {
    res.json({ error });
  }
}
module.exports = {
  postQuestions,
  getQuestions,
  deleteQuestions,
  getResult,
  postResult,
  deleteResult,
};
