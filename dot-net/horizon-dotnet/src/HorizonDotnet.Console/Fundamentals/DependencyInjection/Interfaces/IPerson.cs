public interface IPerson
{
    ISchool School { set; }
    ICollege College { set; }

    void Study();
    void StudyInCollege();
    void GetTreatment(IHospital hospital);
    void TakeRefugee();
}