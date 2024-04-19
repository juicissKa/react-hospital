import { Value } from "../../model";

export interface VisitFormData {
  mainInfo: {
    appearances: Value[];
    visit_numbers: Value[];
    health_groups: Value[];
    physical_activities: Value[];
    apneas: Value[];
    gynecology: {
      statuses: Value[];
    };
    hospitalization: {
      types: Value[];
    };
  };
  illnesses: {
    covid: {
      types: Value[];
      complications: Value[];
      heavinesses: Value[];
      ethiological_causes: Value[];
    };
    disability: {
      groups: Value[];
    };
    diabete: {
      types: Value[];
      treatments: Value[];
      hims: Value[];
      compensations: Value[];
      genotypes: Value[];
    };
    nervous_system: {
      polyneuropathies: Value[];
      complications: Value[];
      atherosclerosises: Value[];
    };
    heart_issue: {
      cardiac_ischemia_types: Value[];
      vessels: Value[];
      peripherial_vascular_damages: Value[];
      noaks: Value[];
      disaggregants: Value[];
      coagulopathies: Value[];
      heart_failure: {
        type: Value[];
        stage: Value[];
      };
      atherosclerosis: {
        cerebrals: Value[];
        cvbs: Value[];
        lower_limbs: Value[];
        therapies: Value[];
        complications: Value[];
      };
      fibrillation: {
        duration_type: Value[];
        type: Value[];
        treatments: Value[];
      };
      extrasystole: {
        types: Value[];
      };
      additional: {
        heart_damages: Value[];
        heart_diseases: Value[];
        rheumatic_heart_diseases: Value[];
      };
    };
    arterial_hypertension: {
      stages: Value[];
      risks_before_stroke: Value[];
      target_organs: Value[];
      inheritance: Value[];
      therapy: {
        before: Value[];
        types: Value[];
        drugs_combinations: Value[];
        emergency_helps: Value[];
      };
      catastrophy: {
        relations: Value[];
        type: Value[];
      };
      pathological: {
        type: Value[];
        therapies: Value[];
      };
    };
  };
  tests: {
    test_types: Value[];
  };
}
