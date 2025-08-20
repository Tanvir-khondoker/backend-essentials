export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherOccupation?: string;
  fatherContactNo: string;
  motherOccupation?: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation?: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth: Date;
  contactNumber: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian?: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
