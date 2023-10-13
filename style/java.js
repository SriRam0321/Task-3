
        class Employee {
        constructor(name, salary) {
          this.name = name;
          this.salary = salary;
        }

        calculateAnnualSalary() {
          return this.salary * 12;
        }
      }

      class Manager extends Employee {
        constructor(name, salary, department) {
          super(name, salary);
          this.department = department;
        }

        calculateAnnualSalary() {
          const bonus = 0.1 * this.salary;
          return (this.salary + bonus);
        }
      }

      let manager1 = new Manager("John Doe", 5000, "Sales");
      let manager2 = new Manager("Jane Smith", 6000, "Marketing");

      let annualSalary1 = manager1.calculateAnnualSalary();
      let annualSalary2 = manager2.calculateAnnualSalary();

      document.write(`<br> ${manager1.name}'s annual salary: $${annualSalary1}`);

      document.write(`<br> ${manager2.name}'s annual salary: $${annualSalary2}`);
