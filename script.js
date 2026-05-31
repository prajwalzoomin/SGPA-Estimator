const branches = {
  "AIML": {
    theory: [
      { name: "Discrete Mathematics and Graph Theory", credits: 3, id: "t1" },
      { name: "Object Oriented Programming using Java", credits: 3, id: "t2" },
      { name: "Machine Learning", credits: 3, id: "t3" },
      { name: "Database Management System", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "Java Lab", credits: 1, id: "l1" },
      { name: "Machine Learning Lab", credits: 1, id: "l2" },
      { name: "Database Management System Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Universal Human Values and Life Skills", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  },
  "EEE": {
    theory: [
      { name: "Complex Analysis and Probability", credits: 3, id: "t1" },
      { name: "Analog Electronics and Integrated Circuits", credits: 3, id: "t2" },
      { name: "Digital Logic Design", credits: 3, id: "t3" },
      { name: "Synchronous and Induction Machines", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "Analog Electronics Lab", credits: 1, id: "l1" },
      { name: "Digital Logic Design Lab", credits: 1, id: "l2" },
      { name: "Synchronous and Induction Machines Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Universal Human Values and Life Skills", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  },
  "ECE": {
    theory: [
      { name: "Numerical, Complex Analysis and Probability Theory", credits: 3, id: "t1" },
      { name: "System Design using HDL", credits: 3, id: "t2" },
      { name: "Digital Signal Processing", credits: 3, id: "t3" },
      { name: "Microprocessors and Microcontrollers", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "System Design using HDL Lab", credits: 1, id: "l1" },
      { name: "Digital Signal Processing Lab", credits: 1, id: "l2" },
      { name: "Microprocessors and Microcontrollers Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Universal Human Values and Life Skills", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  },
  "MECHANICAL": {
    theory: [
      { name: "Complex Analysis and Probability", credits: 3, id: "t1" },
      { name: "Engineering Thermodynamics", credits: 3, id: "t2" },
      { name: "Manufacturing Technology", credits: 3, id: "t3" },
      { name: "Mechanical Measurements and Metrology", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "Engineering Thermodynamics Lab", credits: 1, id: "l1" },
      { name: "Manufacturing Technology Lab", credits: 1, id: "l2" },
      { name: "Mechanical Measurements and Metrology Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Design Thinking and Fabrication", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  },
  "CSE (DATA SCIENCE)": {
    theory: [
      { name: "Discrete Mathematics and Graph Theory", credits: 3, id: "t1" },
      { name: "Object Oriented Programming using Java", credits: 3, id: "t2" },
      { name: "Operating Systems", credits: 3, id: "t3" },
      { name: "Database Management System", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "Java Lab", credits: 1, id: "l1" },
      { name: "Linux Operating System Lab", credits: 1, id: "l2" },
      { name: "Database Management System Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Universal Human Values and Life Skills", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  },
  "CSE": {
    theory: [
      { name: "Discrete Mathematics and Graph Theory", credits: 3, id: "t1" },
      { name: "Object Oriented Programming using Java", credits: 3, id: "t2" },
      { name: "Operating Systems", credits: 3, id: "t3" },
      { name: "Database Management Systems", credits: 3, id: "t4" },
      { name: "Professional Elective-I", credits: 3, id: "t5" }
    ],
    labs: [
      { name: "Object Oriented Programming using Java Lab", credits: 1, id: "l1" },
      { name: "Linux Operating System Lab", credits: 1, id: "l2" },
      { name: "Database Management Systems Lab", credits: 1, id: "l3" },
      { name: "Ability Enhancement Course-IV", credits: 1, id: "l4" },
      { name: "Design Thinking and Fabrication", credits: 1, id: "l5" },
      { name: "Mini Project", credits: 1, id: "l6" }
    ]
  }
};

const gradeMapping = {
  'O': { points: 10 },
  'A+': { points: 9 },
  'A': { points: 8 },
  'B+': { points: 7 },
  'B': { points: 6 },
  'C': { points: 5 },
  'P': { points: 4 },
  'F': { points: 0 }
};

function getGradeFromMarks(marks) {
  if (marks >= 90) return 'O';
  if (marks >= 80) return 'A+';
  if (marks >= 70) return 'A';
  if (marks >= 60) return 'B+';
  if (marks >= 55) return 'B';
  if (marks >= 50) return 'C';
  if (marks >= 40) return 'P';
  return 'F';
}

document.addEventListener('DOMContentLoaded', () => {
  // Show Modal only if not dismissed before
  const modal = document.getElementById('welcome-modal');
  const startBtn = document.getElementById('start-btn');
  const welcomeDismissed = localStorage.getItem('sgpa_welcome_dismissed') === 'true';

  if (!welcomeDismissed) {
    // Slight delay for aesthetic effect
    setTimeout(() => {
      modal.classList.add('active');
    }, 300);
  }

  startBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    localStorage.setItem('sgpa_welcome_dismissed', 'true');
  });

  const branchSelect = document.getElementById('branch-select');
  const calculatorSection = document.getElementById('calculator-section');
  const theoryContainer = document.getElementById('theory-courses-container');
  const labsList = document.getElementById('labs-list');
  const calculateBtn = document.getElementById('calculate-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultSection = document.getElementById('result-section');
  const recalculateBtn = document.getElementById('recalculate-btn');
  const toggleDetailsBtn = document.getElementById('toggle-details-btn');
  const detailsTableWrapper = document.getElementById('details-table-wrapper');

  // Auto-save form inputs
  function saveFormData() {
    const branch = branchSelect.value;
    if (!branch) return;

    const data = JSON.parse(localStorage.getItem('sgpa_estimator_data')) || {};
    data.branch = branch;
    data.values = data.values || {};

    // Collect theory inputs
    const theoryInputs = theoryContainer.querySelectorAll('input');
    theoryInputs.forEach(input => {
      data.values[input.id] = input.value;
    });

    // Collect lab selects
    const labSelects = labsList.querySelectorAll('select');
    labSelects.forEach(select => {
      data.values[select.id] = select.value;
    });

    localStorage.setItem('sgpa_estimator_data', JSON.stringify(data));
  }

  // Restore saved form inputs
  function restoreSavedData() {
    const savedDataStr = localStorage.getItem('sgpa_estimator_data');
    if (!savedDataStr) return;

    try {
      const savedData = JSON.parse(savedDataStr);
      if (savedData && savedData.branch && branches[savedData.branch]) {
        branchSelect.value = savedData.branch;
        renderForm(branches[savedData.branch]);
        calculatorSection.classList.remove('hidden');

        if (savedData.values) {
          Object.keys(savedData.values).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
              el.value = savedData.values[id];
            }
          });
        }

        if (savedData.resultsShown && savedData.sgpa && savedData.results) {
          displayResults(savedData.sgpa, savedData.results, true);
        }
      }
    } catch (err) {
      console.error("Error restoring saved data:", err);
    }
  }

  branchSelect.addEventListener('change', (e) => {
    const branch = e.target.value;
    if (branch && branches[branch]) {
      renderForm(branches[branch]);
      calculatorSection.classList.remove('hidden');
      resultSection.classList.add('hidden');

      // Reset saved values and results since branch changed
      const data = {
        branch: branch,
        values: {},
        resultsShown: false
      };
      localStorage.setItem('sgpa_estimator_data', JSON.stringify(data));
    }
  });

  // Attach auto-save event listeners using event delegation
  calculatorSection.addEventListener('input', (e) => {
    if (e.target.tagName === 'INPUT') {
      saveFormData();
    }
  });

  calculatorSection.addEventListener('change', (e) => {
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') {
      saveFormData();
    }
  });

  // Clear Saved Data handler
  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('sgpa_estimator_data');
    branchSelect.value = '';
    calculatorSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    theoryContainer.innerHTML = '';
    labsList.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function renderForm(branchData) {
    theoryContainer.innerHTML = '';
    labsList.innerHTML = '';

    // Render Theory Subjects
    branchData.theory.forEach((subject) => {
      const block = document.createElement('div');
      block.className = 'subject-block';
      block.innerHTML = `
                <div class="subject-header">
                    <span class="subject-title">${subject.name}</span>
                    <span class="subject-credits">${subject.credits} Credits</span>
                </div>
                <div class="marks-grid">
                    <div class="input-group">
                        <label>CIE 1 (Max 50)</label>
                        <input type="number" id="${subject.id}-cie1" min="0" max="50" placeholder="0" required>
                    </div>
                    <div class="input-group">
                        <label>CIE 2 (Max 50)</label>
                        <input type="number" id="${subject.id}-cie2" min="0" max="50" placeholder="0" required>
                    </div>
                    <div class="input-group">
                        <label>Activity (Max 25)</label>
                        <input type="number" id="${subject.id}-act" min="0" max="25" placeholder="25" value="25" required>
                    </div>
                    <div class="input-group">
                        <label>Expected SEE (Max 100)</label>
                        <input type="number" id="${subject.id}-see" min="0" max="100" placeholder="0" required>
                    </div>
                </div>
            `;
      theoryContainer.appendChild(block);
    });

    // Render Labs
    const labGrid = document.createElement('div');
    labGrid.className = 'lab-grid';

    branchData.labs.forEach((lab) => {
      const item = document.createElement('div');
      item.className = 'lab-item';
      item.innerHTML = `
                <label>${lab.name} <span style="color:var(--text-muted); font-size:0.8rem; font-weight:normal;">(1 Credit)</span></label>
                <select id="${lab.id}-grade" required>
                    <option value="" disabled selected>Expected Grade</option>
                    <option value="O">O (Outstanding) - 10 GP</option>
                    <option value="A+">A+ (Excellent) - 9 GP</option>
                    <option value="A">A (Very Good) - 8 GP</option>
                    <option value="B+">B+ (Good) - 7 GP</option>
                    <option value="B">B (Above Average) - 6 GP</option>
                    <option value="C">C (Average) - 5 GP</option>
                    <option value="P">P (Pass) - 4 GP</option>
                    <option value="F">F (Fail) - 0 GP</option>
                </select>
            `;
      labGrid.appendChild(item);
    });
    labsList.appendChild(labGrid);
  }

  calculateBtn.addEventListener('click', () => {
    const branchName = branchSelect.value;
    if (!branchName) return;

    const branchData = branches[branchName];
    let totalCredits = 0;
    let totalCreditPoints = 0;
    const results = [];
    let hasError = false;

    // Process Theory
    branchData.theory.forEach(subject => {
      const cie1Str = document.getElementById(`${subject.id}-cie1`).value;
      const cie2Str = document.getElementById(`${subject.id}-cie2`).value;
      const actStr = document.getElementById(`${subject.id}-act`).value;
      const seeStr = document.getElementById(`${subject.id}-see`).value;

      if (cie1Str === '' || cie2Str === '' || seeStr === '') {
        hasError = true;
        return;
      }

      const cie1 = parseFloat(cie1Str) || 0;
      const cie2 = parseFloat(cie2Str) || 0;
      const act = parseFloat(actStr) || 25;
      const see = parseFloat(seeStr) || 0;

      const internal = Math.min(((cie1 + cie2) / 4) + act, 50);
      const external = see / 2;
      const finalMarks = Math.round(internal + external);

      const grade = getGradeFromMarks(finalMarks);
      const points = gradeMapping[grade].points;

      const creditPoints = subject.credits * points;
      totalCredits += subject.credits;
      totalCreditPoints += creditPoints;

      results.push({
        name: subject.name,
        type: 'Theory',
        credits: subject.credits,
        marks: finalMarks,
        grade: grade,
        points: points
      });
    });

    if (hasError) {
      alert("Please fill in all the required marks for theory subjects.");
      return;
    }

    // Process Labs
    branchData.labs.forEach(lab => {
      const gradeSelect = document.getElementById(`${lab.id}-grade`);
      const grade = gradeSelect.value;

      if (!grade) {
        hasError = true;
        return;
      }

      const points = gradeMapping[grade].points;
      const creditPoints = lab.credits * points;

      totalCredits += lab.credits;
      totalCreditPoints += creditPoints;

      results.push({
        name: lab.name,
        type: 'Lab/1-Credit',
        credits: lab.credits,
        marks: '-',
        grade: grade,
        points: points
      });
    });

    if (hasError) {
      alert("Please select expected grades for all 1-credit courses.");
      return;
    }

    // Calculate final SGPA
    const sgpa = (totalCreditPoints / totalCredits).toFixed(2);

    displayResults(sgpa, results);
  });

  function displayResults(sgpa, results, isRestoring = false) {
    document.getElementById('sgpa-value').textContent = sgpa;

    const tbody = document.getElementById('results-body');
    tbody.innerHTML = '';

    results.forEach(res => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${res.name}</td>
                <td><span style="font-size: 0.8rem; padding: 2px 8px; background: var(--input-border); border-radius: 99px;">${res.type}</span></td>
                <td>${res.credits}</td>
                <td>${res.marks}</td>
                <td><strong>${res.grade}</strong></td>
                <td>${res.points}</td>
            `;
      tbody.appendChild(tr);
    });

    // Reset detailed results toggle
    detailsTableWrapper.classList.remove('show');
    toggleDetailsBtn.classList.remove('active');
    toggleDetailsBtn.querySelector('span').textContent = 'Show Subject Breakdown';

    calculatorSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    if (!isRestoring) {
      // Save results view state
      const data = JSON.parse(localStorage.getItem('sgpa_estimator_data')) || {};
      data.resultsShown = true;
      data.sgpa = sgpa;
      data.results = results;
      localStorage.setItem('sgpa_estimator_data', JSON.stringify(data));

      // Scroll to results smoothly
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Toggle Subject Breakdown
  toggleDetailsBtn.addEventListener('click', () => {
    const isShown = detailsTableWrapper.classList.toggle('show');
    toggleDetailsBtn.classList.toggle('active');
    
    const btnText = toggleDetailsBtn.querySelector('span');
    if (isShown) {
      btnText.textContent = 'Hide Subject Breakdown';
    } else {
      btnText.textContent = 'Show Subject Breakdown';
    }
  });

  recalculateBtn.addEventListener('click', () => {
    // Reset toggle state
    detailsTableWrapper.classList.remove('show');
    toggleDetailsBtn.classList.remove('active');
    toggleDetailsBtn.querySelector('span').textContent = 'Show Subject Breakdown';

    resultSection.classList.add('hidden');
    calculatorSection.classList.remove('hidden');

    // Update saved state
    const data = JSON.parse(localStorage.getItem('sgpa_estimator_data')) || {};
    data.resultsShown = false;
    localStorage.setItem('sgpa_estimator_data', JSON.stringify(data));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Restore state on load if exists
  restoreSavedData();
});
