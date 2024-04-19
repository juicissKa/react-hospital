import { Grid } from "@mui/material";
import React from "react";
import { HideableSection } from "../../../../../../features/HideableSection";
import { SelectGrid } from "../../../../../../shared/ui/SelectGrid";
import { DatePickerGrid } from "../../../../../../shared/ui/DatePickerGrid";
import { VisitData } from "../../../CreateVisitForm";
import { Control, UseFormRegister } from "react-hook-form";
import { TextFieldGrid } from "../../../../../../shared/ui/TextFieldGrid";
import { CheckboxGrid } from "../../../../../../shared/ui/CheckboxGrid";
import { HideableSectionSelect } from "../../../../../../features/HideableSectionSelect";
import { Fibrillation } from "./HideableComponents/Fibrillation";
import { HideableSectionSelectItem } from "../../../../../../features/HideableSectionSelect/ui/HideableSectionSelect";
import { Extrasystole } from "./HideableComponents/Extrasystole";
import { FormGroup } from "../../../../../../shared/ui/FormGroup";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";

type IllnessesStepProps = {
  control: Control<VisitData, any>;
  register: UseFormRegister<VisitData>;
  patientId: number | null;
  data: VisitFormData["illnesses"];
};

export const IllnessesStep: React.FC<IllnessesStepProps> = ({
  control,
  register,
  patientId,
  data: {
    covid,
    disability,
    diabete,
    nervous_system,
    heart_issue,
    arterial_hypertension,
  },
}) => {
  const heartRhythmDisorderItems: HideableSectionSelectItem[] = [
    {
      id: 1,
      value: "Фибрилляция предсердий",
      component: <Fibrillation data={heart_issue.fibrillation} />,
    },
    { id: 2, value: "Трепетание предсердий" },
    {
      id: 3,
      value: "Экстрасистолия",
      component: <Extrasystole data={heart_issue.extrasystole} />,
    },
    { id: 4, value: "Мерцательная аритмия" },
  ];

  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={12}>
        <HideableSection label="Ковид">
          <SelectGrid
            name="covid.type_id"
            items={covid.types}
            label={"Тип ковида"}
            labelId={"covid-label"}
          />
          <SelectGrid
            name="covid.complications_id"
            items={covid.complications}
            label={"Осложнения"}
            labelId={"complications-label"}
          />
          <SelectGrid
            name="covid.heaviness_id"
            items={covid.heavinesses}
            label={"Тяжесть"}
            labelId={"heaviness-label"}
          />
          <SelectGrid
            name="covid.ethiological_causes_id"
            items={covid.ethiological_causes}
            label={"Этиологические причины"}
            labelId={"ethiological-causes-label"}
          />
        </HideableSection>
        <HideableSection label="Инвалидность">
          <SelectGrid
            name="disability.group_id"
            items={disability.groups}
            label={"Группа инвалидности"}
            labelId={"disability-group-label"}
          />
          <DatePickerGrid
            label={"Дата получения инвалидности"}
            control={control}
            name={"disability.date"}
          />
        </HideableSection>
        <HideableSection label="Диабет">
          <SelectGrid
            name="diabete.type_id"
            items={diabete.types}
            label={"Тип диабета"}
            labelId={"diabete-type-label"}
          />
          <SelectGrid
            name="diabete.treatment_id"
            items={diabete.treatments}
            label={"Тип лечения"}
            labelId={"diabete-type-label"}
          />
          <TextFieldGrid
            type="number"
            label={"Сахар перед едой"}
            control={control}
            {...register("diabete.sugar_before_eating")}
          />
          <TextFieldGrid
            type="number"
            label={"Сахар после еды"}
            control={control}
            {...register("diabete.sugar_after_eating")}
          />
          <SelectGrid
            name="diabete.compensation_id"
            items={diabete.compensations}
            label={"Компенсация"}
            labelId={"diabete-type-label"}
          />
          <SelectGrid
            name="diabete.him_id"
            items={diabete.hims}
            label={"ХИМ"}
            labelId={"diabete-him-label"}
          />
          <CheckboxGrid label="Генотип" />
        </HideableSection>
        <HideableSection label="Заболевания нервной системы">
          <SelectGrid
            name="nervous_system.polyneuropathy_id"
            items={nervous_system.polyneuropathies}
            label={"Вид полинейропатии"}
            labelId={"polyneuropathy-label"}
          />
          <TextFieldGrid
            type="number"
            label={"Мононейриты"}
            control={control}
            {...register("nervous_system.mononeuritis")}
          />
          <SelectGrid
            name="nervous_system.complication_id"
            items={nervous_system.complications}
            label={"Осложнения"}
            labelId={"nervous-system-complications-label"}
          />
          <SelectGrid
            name="nervous_system.atherosclerosis_id"
            items={nervous_system.atherosclerosises}
            label={"Вид атеросклероза"}
            labelId={"atherosclerosis-label"}
          />
        </HideableSection>
        <HideableSection label="Заболевания сердца">
          <SelectGrid
            name="heart_issue.cardiac_ischemia_id"
            items={heart_issue.cardiac_ischemia_types}
            label={"Ишемическая болезнь сердца"}
            labelId={"cardiac-ischemia-label"}
          />
          <SelectGrid
            name="heart_issue.vessel_id"
            items={heart_issue.vessels}
            label={"Сосуды"}
            labelId={"heart-failure-vessel-label"}
          />
          <SelectGrid
            name="heart_issue.peripherial_vascular_damage_id"
            items={heart_issue.peripherial_vascular_damages}
            label={"Поражение периферических сосудов"}
            labelId={"heart-failure-peripheral-vascular-damage-label"}
          />
          <SelectGrid
            name="heart_issue.noak_id"
            items={heart_issue.noaks}
            label={"НОАК"}
            labelId={"heart-failure-noak-label"}
          />
          <SelectGrid
            name="heart_issue.disaggregant_id"
            items={heart_issue.disaggregants}
            label={"Дезагреганты"}
            labelId={"heart-failure-disaggregant-label"}
          />
          <SelectGrid
            name="heart_issue.coagulopathies_id"
            items={heart_issue.coagulopathies}
            label={"Коагулопатии"}
            labelId={"heart-failure-coagulopathies-label"}
          />
          <CheckboxGrid name="heart_issue.warfaring" label={"Варфарин"} />
          <FormGroup label="Сердечная недостаточность">
            <SelectGrid
              name="heart_issue.heart_failure_id"
              items={heart_issue.heart_failure.type}
              label={"Сердечная недостаточность"}
              labelId={"heart-failure-label"}
            />
            <SelectGrid
              name="heart_issue.heart_failure_stage_id"
              items={heart_issue.heart_failure.stage}
              label={"Стадия сердечной недостаточности"}
              labelId={"heart-failure-stage-label"}
            />
          </FormGroup>
          <FormGroup label="Атеросклероз">
            <SelectGrid
              name="heart_issue.cerebral_atherosclerosis_id"
              items={heart_issue.atherosclerosis.cerebrals}
              label={"Церебральный каротдный атеросклероз"}
              labelId={"heart-failure-cerebral-atherosclerosis-label"}
            />

            <SelectGrid
              name="heart_issue.cvb_atherosclerosis_id"
              items={heart_issue.atherosclerosis.cvbs}
              label={"Церебральный Вертебро базилярный атеросклероз"}
              labelId={"heart-failure-cvb-atherosclerosis-label"}
            />
            <SelectGrid
              name="heart_issue.lower_limbs_atherosclerosis_id"
              items={heart_issue.atherosclerosis.lower_limbs}
              label={"Атеросклероз нижних конечностей"}
              labelId={"heart-failure-lower-limbs-atherosclerosis-label"}
            />
            <SelectGrid
              name="heart_issue.atherosclerosis_therapy_id"
              items={heart_issue.atherosclerosis.therapies}
              label={"Терапия атеросклероза"}
              labelId={"heart-failure-atherosclerosis-therapy-label"}
            />
            <SelectGrid
              name="heart_issue.atherosclerosis_complications_id"
              items={heart_issue.atherosclerosis.complications}
              label={"Осложнения"}
              labelId={"heart-failure-atherosclerosis-complications-label"}
            />
            <CheckboxGrid
              name="heart_issue.aorta_atherosclerosis"
              label={"Атеросклероз аорты"}
            />
            <CheckboxGrid label={"Кардиальный атеросклероз"} />
          </FormGroup>
          <FormGroup>
            <HideableSectionSelect
              label={"Нарушения сердченого ритма"}
              name={"heart_issue.heart_rhythm_disorder_id"}
              items={heartRhythmDisorderItems}
            />
          </FormGroup>
          <SelectGrid
            name="heart_issue.heart_damage_id"
            items={heart_issue.additional.heart_damages}
            label={"Поражение сердца"}
            labelId={"heart-failure-heart-damage-label"}
          />
          <SelectGrid
            name="heart_issue.heart_disease_id"
            items={heart_issue.additional.heart_diseases}
            label={"Порок сердца"}
            labelId={"heart-failure-heart-disease-label"}
          />
          <TextFieldGrid
            type="number"
            label="Миокардистрофия"
            name="heart_issue.myocardial_dystrophy"
            control={control}
          />
          <CheckboxGrid
            name="heart_issue.myocardial_infarction_before"
            label={"Переносил инфаркт миокарда"}
          />
          <CheckboxGrid label={"Ревматическая болезнь сердца"} />
        </HideableSection>
        <HideableSection label="Артериальная гипертензия">
          <SelectGrid
            name="arterial_hypertension.stage"
            items={arterial_hypertension.stages}
            label={"Стадия"}
            labelId={"arterial-hypertension-stage-label"}
          />
          <SelectGrid
            name="arterial_hypertension.risk_before_stroke"
            items={arterial_hypertension.risks_before_stroke}
            label={"Риск до инсульта"}
            labelId={"arterial-hypertension-risk-before-stroke-label"}
          />
          <TextFieldGrid
            name="arterial_hypertension.duration_years"
            label={"Длительность в годах"}
            type="number"
            control={control}
          />
          <SelectGrid
            name="arterial_hypertension.target_organs_id"
            items={arterial_hypertension.target_organs}
            label={"Поражение органов мишеней"}
            labelId={"arterial-hypertension-target-organs-label"}
          />
          <SelectGrid
            name="arterial_hypertension.inheritance_id"
            items={arterial_hypertension.inheritance}
            label={"Наследственность"}
            labelId={"arterial-hypertension-inheritance-label"}
          />
          <FormGroup label="Терапия">
            <SelectGrid
              name="arterial_hypertension.therapy_before_id"
              items={arterial_hypertension.therapy.before}
              label={"Терапия до"}
              labelId={"arterial-hypertension-therapy-before-label"}
            />
            <SelectGrid
              name="arterial_hypertension.therapy_id"
              items={arterial_hypertension.therapy.types}
              label={"Характер терапии"}
              labelId={"arterial-hypertension-therapy-label"}
            />
            <TextFieldGrid
              name="arterial_hypertension.therapy_duration_years"
              label={"Длительность терапии в годах"}
              type="number"
              control={control}
            />
            <SelectGrid
              name="arterial_hypertension.drugs_combination_id"
              items={arterial_hypertension.therapy.drugs_combinations}
              label={"Комбинация ЛП"}
              labelId={"arterial-hypertension-drugs-label"}
            />
            <SelectGrid
              name="arterial_hypertension.emergency_help_id"
              items={arterial_hypertension.therapy.emergency_helps}
              label={"Использование экстренной помощи"}
              labelId={"arterial-hypertension-emergency-help-label"}
            />
          </FormGroup>
          <FormGroup label="Давление">
            <TextFieldGrid
              name="arterial_hypertension.systolic_blood_pressure_before"
              label={"САД до ОНМК"}
              type="number"
              control={control}
            />
            <TextFieldGrid
              name="arterial_hypertension.systolic_blood_pressure"
              label={"САД при ОНМК"}
              type="number"
              control={control}
            />
            <TextFieldGrid
              name="arterial_hypertension.diastolic_blood_pressure_before"
              type="number"
              label={"ДАД до ОНМК"}
              control={control}
            />
            <TextFieldGrid
              name="arterial_hypertension.diastolic_blood_pressure"
              label={"ДАД при ОНМК"}
              type="number"
              control={control}
            />
          </FormGroup>
          <FormGroup label="Катастрофа">
            <SelectGrid
              name="arterial_hypertension.catastrophy_relation_id"
              items={arterial_hypertension.catastrophy.relations}
              label={"Связь терапии с катастрофой"}
              labelId={"arterial-hypertension-catastrophy-relation-label"}
            />
            <SelectGrid
              name="arterial_hypertension.catastrophy_type_id"
              items={arterial_hypertension.catastrophy.type}
              label={"Катастрофы ГБ"}
              labelId={"arterial-hypertension-catastrophy-label"}
            />
            <TextFieldGrid
              name="arterial_hypertension.catastrophy_duration_years"
              label={"Длительность катастрофы в годах"}
              type="number"
              control={control}
            />
          </FormGroup>
          <HideableSection label="Патологическая АГ">
            <SelectGrid
              name="arterial_hypertension.pathological.type_id"
              items={arterial_hypertension.pathological.type}
              label={"Тип патологической АГ"}
              labelId={"pathological-arterial-hypertension-inheritance-label"}
            />
            <TextFieldGrid
              name="arterial_hypertension.pathological.syncopes"
              label={"Синкопы"}
              type="number"
              control={control}
            />
            <TextFieldGrid
              name="arterial_hypertension.pathological.syncopes_periodicity"
              label={"Периодичность синкопов"}
              type="number"
              control={control}
            />
            <SelectGrid
              name="arterial_hypertension.pathological.therapy_id"
              items={arterial_hypertension.pathological.therapies}
              label={"Терапия патологической АГ"}
              labelId={"pathological-arterial-hypertension-therapy-label"}
            />
          </HideableSection>
        </HideableSection>
      </Grid>
    </Grid>
  );
};
